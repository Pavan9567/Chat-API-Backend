export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src" : ["'self'"],
          "connect-src": ["'self'", "ws://localhost:8080"],
        },
      },
    },
  },
];
