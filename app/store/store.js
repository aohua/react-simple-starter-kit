const store = (process.env.NODE_ENV === 'production') ? require('./configureStore.prod') : require('./configureStore.dev');

module.exports = store;
