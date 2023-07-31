module.exports = {
  type: 'sqlite',
  database: 'my-nest-project.db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};