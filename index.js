const fs = require('fs');
const path = require('path');

let gitalkJSON = {};

module.exports = {
  init: function () {
    this.addAsset('./gitalk_json.js', 'js')
  },
  page: function (page, book) {
    if (page.type === 'md') {
      const gitalk = this.config.pluginsConfig.gitalk;
      gitalkJSON = gitalk;
    }
  },
  finish: function () {
    const dist = this.config.dist;
    fs.writeFileSync(path.resolve(dist, './gitalk_json.js'), `window.ydoc_plugin_gitalk_json = ${JSON.stringify(gitalkJSON, null, 2)}`)
  },
  assets: {
    dir: './assets',
    js: ['gitalk.script.js', 'gitalk.min.js']
  }
}