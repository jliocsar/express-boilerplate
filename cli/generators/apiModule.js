module.exports = [
  'API module',
  {
    description: 'application API module',
    prompts: [
      {
        name: 'moduleName',
        message: 'Module name?',
      },
    ],
    actions: [
      // TODO: add a custom action to check if the folder already exists
      {
        type: 'add',
        path: 'src/api/modules/{{dashCase moduleName}}/controller.js',
        templateFile: 'cli/templates/controller.hbs',
        force: true, // force will create the module folder
      },
      {
        type: 'add',
        path: 'src/api/modules/{{dashCase moduleName}}/exceptions.js',
        templateFile: 'cli/templates/exceptions.hbs',
      },
      {
        type: 'add',
        path: 'src/api/modules/{{dashCase moduleName}}/pipes.js',
        templateFile: 'cli/templates/pipes.hbs',
      },
      {
        type: 'add',
        path: 'src/api/modules/{{dashCase moduleName}}/routes.js',
        templateFile: 'cli/templates/routes.hbs',
      },
      {
        type: 'add',
        path: 'src/api/modules/{{dashCase moduleName}}/service.js',
        templateFile: 'cli/templates/service.hbs',
      },
      {
        type: 'add',
        path: 'src/api/modules/{{dashCase moduleName}}/schemas.js',
        templateFile: 'cli/templates/schemas.hbs',
      },
    ],
  },
]
