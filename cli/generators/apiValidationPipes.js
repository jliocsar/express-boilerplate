module.exports = [
  'API validation pipes',
  {
    description: 'application API module validation pipe middlewares',
    prompts: [
      {
        name: 'moduleName',
        message: 'Module name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/api/modules/{{dashCase moduleName}}/pipes.js',
        templateFile: 'cli/templates/pipes.hbs',
      },
    ],
  },
]
