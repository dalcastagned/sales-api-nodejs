export default {
  jwt: {
    secret:
      process.env.APP_SECRET || '4edd260da6c2c9861052c1a0809de95e47bc512a',
    expiresIn: '1d',
  },
};
