export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','EiG+Mx0kt6Aqj9j8X854/A=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','a2d3AQWhlHKvGZsh4XCNbw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','fLNSg0YjUTwzSYLYuRvN1g=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
