var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var sass        = require('metalsmith-sass');
var metadata    = require('metalsmith-metadata');
var relative    = require('metalsmith-relative');
var collections = require('metalsmith-collections');
var filepath    = require('metalsmith-filepath');
var inplace     = require('metalsmith-in-place');
var ignore      = require('metalsmith-ignore');
var define      = require('metalsmith-define');

var url = require('url');

var serveMode = process.argv.indexOf('--serve') != -1;

var site = Metalsmith(__dirname)
  .source('./src')
  .destination('./build')
  .metadata({
    serve: serveMode,
  })
  .use(ignore(['**/.DS_Store']))
  .use(markdown({
    smartypants: true,
  }))
  .use(sass())
  .use(filepath({
    absolute: true
  }))
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
    done();
  })
  .use(collections({
    pages: {
      pattern: '{*,*/index}.{md,html}',
      sortBy: 'order',
    },
    research: {
      pattern: 'research/{!index,*/index}.{md,html}',
      metadata: {
        name: 'Research',
        link: '/research/',
      },
    },
  }))
  .use(relative())
  .use(define({
    resolve: url.resolve,  // Path join helper.
  }))
  .use(inplace({
    engine: "nunjucks",
    pattern: "*.{html,md}"
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
