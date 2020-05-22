module.exports = {
  HOST: "localhost",
  USER: "my_username",
  PASSWORD: "my_password",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
