// # vim:foldmethod=marker

// #: Imports {{{

import cors                     from "cors"
import path                     from "path"
import express                  from "express"
import dbInitialization         from "./dbInit.js"
import { fileURLToPath }        from "url"
import { DataTypes, Sequelize } from "sequelize"

// #: }}}
// #: Constants definitions {{{
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite")
})

// Prevent CORS policies to block in case of local execution
const corsOptions = {
  origin: "http://localhost:3000" //Applied when run locally
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

// #: }}}

function print(req, res) {
  console.log("@request:\n" + req.originalUrl)
  console.log('Result:\n' + JSON.stringify(res, null, 4))
  return res
}

async function initDB() {
  const models = {}
  await db.authenticate()
  // DB structures and relations definition
// #: Entities structure {{{
  models.People = db.define('People', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relevance: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  })

  models.Projects = db.define('Projects', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relevance: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  })

  models.Areas = db.define('Areas', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  })

  models.Concern = db.define('Concern', {
    placeholder: {
      type: DataTypes.JSON,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  })
// #: }}}
// #: Entities relations {{{
  // People - Projects
  models.People.hasMany(models.Projects)
  models.Projects.belongsTo(models.People)

  // Projects - Area
  models.Projects.belongsToMany(models.Areas, { through: 'Concern'})
  models.Areas.belongsToMany(models.Projects, { through: 'Concern'})
// #: }}}
  // Recreate the DB everytime
  await db.sync({ force: true })
  await dbInitialization(models)
  return models
}

async function initServer() {
  const models = await initDB()
  // Define DB queries
  // #: All people, sorted alphabetically {{{
  app.get('/people', async(req, res) => {
    const data = await models.People.findAll({
      order: [
        ['name', 'ASC'],
      ]
    });

    if (data) {
      res.status(200).json(print(req, data))
    }else {
      res.sendStatus(404)
    }
  })
  
  // #: }}}
  // #: All projects, sorted alphabetically {{{
  app.get('/projects', async(req, res) => {
    const data = await models.Projects.findAll({
      order: [
        ['name', 'ASC'],
      ],
    });

    if (data) {
      res.status(200).json(print(req, data))
    }else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: All areas, sorted alphabetically {{{
  app.get('/areas', async(req, res) => {
    const data = await models.Areas.findAll({
      order: [
        ['name', 'ASC'],
      ],
      include: [{
        model: models.Projects
      }]
    });

    if (data) {
      res.status(200).json(print(req, data))
    }else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: Top projects, sorted by relevance {{{
  app.get('/projects/top', async(req, res) => {
    const data = await models.Projects.findAll({
      order: [
        ['relevance', 'DESC'],
      ],
      limit: 5
    });

    if (data) {
      res.status(200).json(print(req, data))
    }else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: Specific person, given ID, include all infos about related projects, sorted alphabetically {{{
  app.get('/people/:id', async(req, res) => {
    const data = await models.People.findOne({
      where: { id: req.params.id },
      order: [
        ['name', 'ASC'],
      ],
      include: [{
        model: models.Projects
      }]
    });

    if (data) {
      res.status(200).json(print(req, data))
    } else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: Specific project, given ID, include all infos of the supervisor and related areas {{{
  app.get('/projects/:id', async(req, res) => {
    const data = await models.Projects.findOne({
      where: { id: req.params.id },
      order: [
        ['name', 'ASC']
      ],
      include: [{
        model: models.Areas,
      },{
        model: models.People,
      }]
    });

    if (data) {
      res.status(200).json(print(req, data))
    } else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: Specific area, given ID {{{
  app.get('/areas/:id', async(req, res) => {
    const data = await models.Areas.findOne({
      where: { id: req.params.id },
      order: [
        ['name', 'ASC']
      ],
      include: [{
        model: models.Projects,
      }]
    });

    if (data) {
      res.status(200).json(print(req, data))
    } else {
      res.sendStatus(404)
    }
  })

  // Using a different port
  app.listen(3001, () => {
    console.log("Listening on port 3001")
  })
  // #: }}}
}

initServer();
