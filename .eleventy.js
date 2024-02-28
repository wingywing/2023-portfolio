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
    eleventyConfig.setTemplateFormats(["njk,md"]);
    eleventyConfig.addLayoutAlias('project', 'layouts/project/project.njk');
    eleventyConfig.addShortcode("image", async function(src, alt, sizes){
        let metadata = await Image(src, {
            widths: [300, 600],
            formats: ["jpeg", "png"]
        });
        let imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };
        return Image.generateHTML(metadata, imageAttributes);
    });
    return { 
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid",
        ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: { 
            input: "src", 
            output: "dist", 
            includes: "_includes",
            layouts: "_includes/layouts"
        } };
};