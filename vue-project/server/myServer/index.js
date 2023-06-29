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
  origin: "http://localhost:3000"
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

// #: }}}

async function initDB() {
  const models = {}
  await db.authenticate()
  // DB structures and relations definition
// #: Entities structure {{{
  models.People = db.define('people', {
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

  models.Projects = db.define('projects', {
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

  models.Areas = db.define('areas', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  })

  models.Concern = db.define('concern', {
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

    res.status(200).json(data)
  })
  
  // #: }}}
  // #: All projects, sorted alphabetically {{{
  app.get('/projects', async(req, res) => {
    const data = await models.Projects.findAll({
      order: [
        ['name', 'ASC'],
      ]
    });

    res.status(200).json(data)
  })
  // #: }}}
  // #: All areas, sorted alphabetically {{{
  app.get('/areas', async(req, res) => {
    const data = await models.Areas.findAll({
      order: [
        ['name', 'ASC'],
      ]
    });

    res.status(200).json(data)
  })
  // #: }}}
  // #: Top projects, sorted by relevance {{{
  app.get('/projects/top', async(req, res) => {
    const data = await models.projects.findAll({
      order: [
        ['relevace', 'DESC'],
      ],
      limit: 5
    });
    
    res.status(200).json(data)
  })
  // #: }}}
  // #: Projects by area, sorted alphabetically {{{
  // TODO: consider switching from name to ID to find projects
  app.get('/projects_by_area/:id', async(req, res) => {
    const data = await models.Projects.findAll({
      order: [
        ['name', 'ASC'],
      ],
      include: [{
        model: Areas,
        required: true,
        where: {id : req.params.id}
      }]
    });

    if (data) {
      res.status(200).json(data)
    } else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: Specific person, givenen ID, include all infos about related projects, sorted alphabetically {{{
  app.get('/people/:id', async(req, res) => {
    const data = await models.People.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: models.Projects,
        order: [
          ['name', 'ASC'],
        ]
      }]
    });

    if (data) {
      res.status(200).json(data)
    } else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: Specific project, given ID, include all infos of the supervisor {{{
  app.get('/project/:id', async(req, res) => {
    const data = await models.Projects.findOne({
      where: {
        id: req.params.id
      }
    });

    if (data) {
      res.status(200).json(data)
    } else {
      res.sendStatus(404)
    }
  })
  // #: }}}
  // #: Specific area, given ID {{{
  app.get('/areas/:id', async(req, res) => {
    const data = await models.Areas.findOne({
      where: {
        id: req.params.id
      }
    });

    if (data) {
      res.status(200).json(data)
    } else {
      res.sendStatus(404)
    }
  })
  // #: }}}
}

initServer();
console.log("SERVER INITIALIZED")
export default fromNodeMiddleware(app)
