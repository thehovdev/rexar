![logo](https://raw.githubusercontent.com/thehovdev/rexar/master/public/images/github-logo.png)

### Rexar is all in one javascript framework, with configured and included

- React
- React Router
- Redux
- Webpack (Client / Server)
- NodeJs [dependency]
- MongoDB [dependency]
- Mongoose
- Express
- EJS template engine
- Node-config configuration package

---

### Rexar cli

##### Create new react component

```bash
node rexar make:component mycomponent
```

##### Create new redux action

```bash
node rexar make:action myaction
```

##### Create new redux container

```bash
node rexar make:container mycontainer
```

##### Create new redux reducer

```bash
node rexar make:reducer myreducer
```

##### Create new express controller

```bash
node rexar make:controller authController
```

##### Create new express route

```bash
node rexar make:route auth
```

##### Create new express model

```bash
node rexar make:model user
```

---

### Project Structure

#### Front-end

**public/js** - main js folder

**public/js/index.js** - entry js file

**components** - all your react components

**actions** - all your redux actions

**reducers** - all your redux reducers

**containers** - all you redux containers

**routes** - all you react components and routes

**public/images** - application images folder

**public/css** - application styles folder

**views** - application views (ejs templates)

#### Back-end

**dist/index.js** - entry node.js file

**dist/routes** - list of all routes

**dist/controllers** - list of all controllers

**dist/models** - list of all models

**dist/database/connect** - connect to mongodb with mongoose

**dist/includes/app** - app settings

#### Config file

**config/default.json** - main config file

---

### Run project

```bash
npm install
npm run watch
```

*Start to code and make something amazing*
