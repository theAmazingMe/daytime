module.exports = function (api) {
    api.cache(true); // api.cache(true)
    return {
      plugins: ['macros'],
    }
  }