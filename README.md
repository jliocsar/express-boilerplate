# Express Boilerplate

⚠️ **This boilerplate is still work in progress! Nothing to see here for now** ⚠️ 

An Express boilerplate made to use w/ Prisma, Postgres & Joi 🔥

## How to use

### Installing dependencies

```sh
yarn
```

### Starting the Postgres server

```sh
sudo docker-compose up
```

### Running in development mode

```sh
yarn dev
```

### Generating a module or validation pipe using Plop

```sh
yarn generate
```

## 🧰 Stack

- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Joi](https://joi.dev/)
- [Plop.js](https://plopjs.com/)
- [Celebrate](https://github.com/arb/celebrate)
- [Agenda.js](https://github.com/agenda/agenda)

## 🌳 Folder structure

```
|- ...
|- prisma/
  |- migrations/
    |- ...
  |- .env
  |- dev.db
  |- schema.prisma
|- src/
  |- app.js
  |- config/
    |- environment.js
  |- database/
    |- client.js
  |- jobs/
    |- job-name.js
  |- utils/
    |- util-name.js
  |- api/
    |- router.js
    |- setup.js
    |- middlewares/
      |- middleware-name.js
    |- shared/
      |- exceptions.js
      |- pipes.js
      |- ...
    |- modules/
      |- module-name/
        |- module-name-controller.js
        |- module-name-routes.js
        |- module-name-schemas.js
        |- module-name-service.js
        |- module-name-exceptions.js
        |- module-name-pipes.js
        |- module-name-constants.js
        |- module-name-utils.js
```

## Module composition

### Service

The `services` file will contain all business rules related handlers. It's the layer of the application that'll access the database, perform the required actions and define how exceptions will be handled for each request (if there're any).

### Controller

The `controller` file will have all Express request handlers. These request handlers will act as middlewares that call the desired service, passing only the necessary data to it. The controller will also define the `success HTTP status code` from a request.

⚠️ **Controllers should not pass the request nor the response object to a service!** ⚠️ 

### Routes

The `routes` file will export the router that has all routes from its module.

### Exceptions

The `exceptions` file will export classes that extend the shared `HttpException` class, having a `statusCode` and `message` that the `errorHandler` middleware will use to return as a response.

### Pipes

The `pipes` file will export pipes, which are middlewares that will either validate and/or transform data for the next middlewares (usually the controller).

### Schemas

The `schemas` file will export all `Joi` schemas that you wish to use in your module. Make sure that you provide the necessary validation pipes in your routes if you wish to validate your schemas in your request (body, parameters, query etc). These pipes should be created using the shared `createValidationMiddleware` mixin pipe.

### Constants

The `constants` file will export any constant/enum-like variable that you wish to use in your module.

---

Made by @jliocsar
