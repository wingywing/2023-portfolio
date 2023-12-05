const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass); //to add SASS support from src
    eleventyConfig.addPassthroughCopy({"node_modules/gsap/dist/all.js": "src/assets"}); //to add GSAP
    return { dir: { input: "src", output: "dist" } };

};