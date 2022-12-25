export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'event-808-do-user-11049400-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', '808event'),
      user: env('DATABASE_USERNAME', 'event'),
      password: env('DATABASE_PASSWORD', 'AVNS_kVE00szdECX_SYo15SX'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
