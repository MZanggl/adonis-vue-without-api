# Adonis Vue without API

Prototype 2 of an idea to unite frontend and backend seamlessly. First prototype is [here](https://github.com/MZanggl/byebye-api-prototype).

## Start the project

Requires [adonis cli](https://adonisjs.com/docs/4.1/installation#_installing_adonisjs).

```bash
cd ui && npm run serve
cd api && adonis serve --dev
```

## The interesting bits

- `/api/app/Actions/user.js`: backend actions the frontend will use
- `/ui/src/App.vue`: frontend component making use of the backend actions
- `.seamlesslyrc.json`: rc file that binds backend and frontend seamlessly
- `/api/start/routes.js`: generates the routes in API and rc file
- `/ui/vue.config.js`: configures webpack loader to turn imports of API actions into fetch requests