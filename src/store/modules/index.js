const files = require.context('.', true, /\.js$/);

const modules = {};
files.keys().forEach((key) => {
  if (key === "./index.js") return;

  modules[key.split("/")[1]] = files(key).default;
});

export default modules;