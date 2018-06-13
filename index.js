var Metalsmith   = require('metalsmith');
var markdown     = require('metalsmith-markdown');
var layouts      = require('metalsmith-layouts');
var sass         = require('metalsmith-sass');
var metadata     = require('metalsmith-metadata');
var collections  = require('metalsmith-collections');
var inplace      = require('metalsmith-in-place');
var ignore       = require('metalsmith-ignore');
var metadataIF   = require('metalsmith-metadata-in-filename');
var filemetadata = require('metalsmith-filemetadata');
var components   = require('metalsmith-components');
var jsonfeed     = require('metalsmith-json-feed');
var feed         = require('metalsmith-feed');

var marked   = require('marked');
var nunjucks = require('nunjucks');
var moment = require('moment');

var serveMode = process.argv.indexOf('--serve') != -1;

// Nunjucks options.
nunjucks.configure().addFilter('markdown', function (str) {
  return marked(str, { smartypants: true });
}).addFilter('date', function (d, f) {
  return moment(d).format(f);
}).addFilter('limit', function (array, limit) {
  return array.slice(0, limit);
});

var site = Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .metadata({
    serve: serveMode,
    site: {
      title: 'Cornell Capra',
      url: 'https://capra.cs.cornell.edu/',
    },
  })
  .use(ignore(['**/.DS_Store']))
  .use(markdown({
    smartypants: true,
  }))
  .use(sass())
  .use(metadataIF())
  .use((files, metalsmith, done) => {
    // Workaround:
    // https://github.com/segmentio/metalsmith-collections/pull/48#issuecomment-246612758
    metalsmith._metadata.collections = null;
    metalsmith._metadata.pages = null;
    done();
  })
  .use(collections({
    pages: {
      pattern: '{*,*/index}.{md,html}',
      sortBy: 'order',
    },
    research: {
      pattern: 'research/*/index.{md,html}',
      metadata: {
        name: 'Research',
      },
    },
    news: {
      pattern: 'news/*-*-*-*.{md,html}',
      sortBy: 'date',
      reverse: true,
      metadata: {
        layout: 'news.html',
      },
    },
  }))

  // News section.
  .use(filemetadata([
    {
      pattern: 'news/*',
      metadata: { layout: "news.html" },
    }
  ]))
  .use((files, metalsmith, done) => {
    for (let item of metalsmith._metadata.news) {
      // News items just get the date as their title.
      if (!item.kind || item.kind === 'news') {
        item.title = moment(item.date).format('MMM DD, YYYY');
      }

      // Blog post items get a body containing the title and author.
      if (item.kind === 'post') {
        let body = `<p>${item.author} published: <a href="${item.link}">` +
          `${item.title}</a></p>`;
        item.contents = new Buffer(body, 'utf8');
      }
    }
    done();
  })

  // Research project listings.
  .use(metadata({
    research_ext: 'data/research.yaml',
  }))
  .use((files, metalsmith, done) => {
    // Merge internal and external research.
    metalsmith._metadata.projects =
      metalsmith._metadata.research.concat(
          metalsmith._metadata.research_ext);
    // Sort by a numeric field.
    metalsmith._metadata.projects.sort((a, b) => a.order - b.order);
    done();
  })

  // Add links to each item in `path` and `link`.
  .use((files, metalsmith, done) => {
    for (let filepath in files) {
      if (files.hasOwnProperty(filepath)) {
        let obj = files[filepath];
        if (filepath.endsWith("/index.html")) {
          filepath = filepath.slice(0, 0 - "index.html".length);
        }
        obj.path = filepath;
        if (!obj.link) {
          obj.link = '/' + filepath;
        }
      }
    }
    done();
  })

  // News feeds.
  .use(jsonfeed({
    collection: 'news',
  }))
  .use(feed({
    collection: 'news',
  }))

  // People.
  .use(metadata({
    people: 'data/people.yaml',
  }))

  .use(inplace({
    engine: "nunjucks",
    pattern: "**/*.{html,md}"
  }))
  .use(components({
    "componentsDirectory": "node_modules",
    "components": {
      "octicons": {
        "build/svg/{mark-github,file-text,rss}.svg": "img/octicons/",
      },
    },
  }))
  .use(layouts('nunjucks'));

if (serveMode) {
  var serve = require('metalsmith-serve');
  var watch = require('metalsmith-watch');
  site = site
    .use(serve())
    .use(watch({
      paths: {
        "${source}/**/*": true,
        "layouts/**/*": "**/*.md",
        "${source}/**/*.yaml": "**/*",
      },
      livereload: true
    }));
}

site.build(function(err) {
  if (err) throw err;
});
