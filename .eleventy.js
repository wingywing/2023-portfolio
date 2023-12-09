const eleventySass = require("eleventy-sass");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass); //to add SASS support from src
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPassthroughCopy("node_modules/gsap/dist/all.js"); //to add GSAP
    eleventyConfig.addPassthroughCopy("node_modules/jquery/dist/jquery.min.js"); //to add jquery
    eleventyConfig.addPassthroughCopy("src/js"); //to add jquery

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