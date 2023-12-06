const eleventySass = require("eleventy-sass");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass); //to add SASS support from src
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginWebc, {
        components: "src/_includes/components/**/*.webc"
    })
    eleventyConfig.addPassthroughCopy("node_modules/gsap/dist/all.js"); //to add GSAP
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/wenc-setup.js");
    eleventyConfig.setTemplateFormats(["njk"]);
    return { 
        dir: { 
            input: "src", 
            output: "dist", 
            includes: "_includes",
            layouts: "_includes/layouts"
        } };
};