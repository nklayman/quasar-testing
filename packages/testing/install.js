/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 *
 */

module.exports = function (api) {
  api.render('./base', {}, true)
  /*
  api.prompts.options.forEach((val) => {
    if (val === 'scripts') {
      api.extendPackageJson({
        scripts: {
          "test": "echo 'Testing managed by @Quasar/Testing' && exit 0"
        }
      })
    }
  })
  */
}
