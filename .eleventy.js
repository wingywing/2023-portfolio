const eleventySass = require("eleventy-sass");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const implicitFigures = require('markdown-it-image-figures');
const mdAnchor = require('markdown-it-anchor');
const blogTools = require("eleventy-plugin-blog-tools");


module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventySass); //to add SASS support from src
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(blogTools);

    eleventyConfig.addWatchTarget('src/projects/**/**.md');
    eleventyConfig.addPassthroughCopy("node_modules/gsap/dist/all.js"); //to add GSAP
    eleventyConfig.addPassthroughCopy("node_modules/jquery/dist/jquery.min.js"); //to add jquery
    eleventyConfig.addPassthroughCopy("node_modules/lightgallery/"); //to add lightGallery

    eleventyConfig.addPassthroughCopy("src/js"); //to add jquery
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/wenc-setup.js");
    eleventyConfig.addPassthroughCopy("src/projects/**/**.png"); //Passthrough project case study media
    eleventyConfig.addPassthroughCopy("src/projects/**/**.jpg"); 
    eleventyConfig.addPassthroughCopy("src/projects/**/**.mp4");
    eleventyConfig.setTemplateFormats(["njk,md"]);
    eleventyConfig.amendLibrary("md", mdLib => mdLib.use(implicitFigures, {
      figcaption: "title"
    }));
    eleventyConfig.amendLibrary("md", mdLib => mdLib.use(mdAnchor));
    eleventyConfig.addLayoutAlias('project', 'layouts/project/project.njk');
    eleventyConfig.addLayoutAlias('illustrations', 'layouts/illustrations/illustrations.njk');
    eleventyConfig.addCollection("posts", function (collectionAPI) {
      return collectionAPI.getFilteredByGlob("src/writing/*.md");
    });
    eleventyConfig.addPlugin(eleventyImagePlugin, {
      // Set global default options
      formats: ["webp", "jpeg"],
      urlPath: "/img/",
  
      // Notably `outputDir` is resolved automatically
      // to the project output directory
  
      defaultAttributes: {
        loading: "lazy",
        decoding: "async"
      }
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