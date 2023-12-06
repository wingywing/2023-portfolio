const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass); //to add SASS support from src
    eleventyConfig.addPassthroughCopy({"node_modules/gsap/dist/all.js":"/assets"}); //to add GSAP
    eleventyConfig.addPassthroughCopy({"src/assets":"/assets"});
    return { dir: { input: "src", output: "dist" } };
};