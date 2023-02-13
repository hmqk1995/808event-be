export default [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:1337',
        'http://127.0.0.1:1337',
        'http://192.168.8.124:3000',
        'http://kun.dev:3000',
        'https://808event.com',
        'https://www.808event.com',
        'https://api.808event.com',
      ],
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
