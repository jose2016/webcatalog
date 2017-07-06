import Sequelize from 'sequelize';

import sequelize from '../sequelize';

import User from './User';

const App = sequelize.define('app', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  slug: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
  },
  version: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  installCount: {
    type: Sequelize.INTEGER,
    defaultValue: () => 0,
  },
  wikipediaTitle: {
    type: Sequelize.STRING,
  },
});

App.User = App.belongsTo(User);

App.sync();

module.exports = App;
