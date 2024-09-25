module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "LouTRoeE5NbBjUopJ0mx",
  DB: "course",
  dialect: "mariadb",
  dialectOptions: {
    allowPublicKeyRetrieval: true,
    useSSL: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
