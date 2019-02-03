/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = function (api) {
  api.compatibleWithQuasarApp('^1.0.0-alpha.12')

  api.render('./base', {}, true)

  api.extendJsonFile('quasar.testing.json', {
    'e2e-cypress': {
      runnerCommand: 'cypress run --config baseUrl=${serverUrl}'
    }
  })


  api.prompts.options.forEach((val) => {
    if (val === 'scripts') {
      api.extendPackageJson({
        scripts: {
          "test:e2e": "cypress open",
          "test:e2e:CI": "cypress run"
        }
      })
    }
  })
}
