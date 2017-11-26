var Metalsmith   = require('metalsmith');
var markdown     = require('metalsmith-markdown');
var layouts      = require('metalsmith-layouts');
var sass         = require('metalsmith-sass');
var metadata     = require('metalsmith-metadata');
var collections  = require('metalsmith-collections');
var filepath     = require('metalsmith-filepath');
var inplace      = require('metalsmith-in-place');
var ignore       = require('metalsmith-ignore');
var metadataIF   = require('metalsmith-metadata-in-filename');
var rewrite      = require('metalsmith-rewrite');
var filemetadata = require('metalsmith-filemetadata');
var components   = require('metalsmith-components');
var jsonfeed     = require('metalsmith-json-feed');

var marked   = require('marked');
var nunjucks = require('nunjucks');
var moment = require('moment');

var serveMode = process.argv.indexOf('--serve') != -1;

// Nunjucks options.
nunjucks.configure().addFilter('markdown', function (str) {
  return marked(str, { smartypants: true });
}).addFilter('date', function (d, f) {
  return moment(d).format(f);
});

var site = Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .metadata({
    serve: serveMode,
    site: {
      title: 'Cornell Capra',
    },
  })
  .use(ignore(['**/.DS_Store']))
  .use(markdown({
    smartypants: true,
  }))
  .use(sass())
  .use(filepath({
    absolute: true
  }))
  .use(metadataIF())
  .use((files, metalsmith, done) => {
    // Remove unnecessary index.html from links.
    for (var filepath in files) {
      if (files.hasOwnProperty(filepath)) {
        var link = files[filepath].link;
        if (link && link.endsWith("index.html")) {
          files[filepath].link = link.slice(0, 0 - "index.html".length);
        }
      }
    }
    done();
  })
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
      pattern: 'news/*.{md,html}',
      sortBy: 'date',
      reverse: true,
      metadata: {
        layout: 'news.html',
      },
    },
  }))
  .use(rewrite({
    pattern: 'news/*.html',
    filename: 'news/{slug}.html',
  }))
  .use(filemetadata([
    {
      pattern: 'news/*',
      metadata: { layout: "news.html" },
    }
  ]))
  .use(jsonfeed({
    collection: 'news',
  }))
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
  .use(inplace({
    engine: "nunjucks",
    pattern: "*.{html,md}"
  }))
  .use(components({
    "componentsDirectory": "node_modules",
    "components": {
      "octicons": {
        "build/svg/{mark-github,file-text}.svg": "img/octicons/",
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
