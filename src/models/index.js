const sequelize = new Sequelize('make-own', 'root', process.env.DB_PASSWORD, {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
});
