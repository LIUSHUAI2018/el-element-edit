"use strict";
const index_vue_vue_type_script_lang = require("../ElTableEdit/src/index.vue_vue_type_script_lang.js");
require("../ElTableEdit/src/index.vue_vue_type_style_index_0_lang.js");
const components = [
  index_vue_vue_type_script_lang
];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
const index = {
  install
};
module.exports = index;
