const eleventySass = require("eleventy-sass");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const implicitFigures = require('markdown-it-image-figures');
const mdAnchor = require('markdown-it-anchor');
const blogTools = require("eleventy-plugin-blog-tools");
const embedYoutube = require("eleventy-plugin-youtube-embed");
const pluginWebmentions = require("@chrisburnell/eleventy-cache-webmentions");
const configWebmentions = require("./_data/webmention.js")
const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventySass); //to add SASS support from src
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(blogTools);
    eleventyConfig.addPlugin(embedYoutube);
    eleventyConfig.addPlugin(pluginWebmentions, configWebmentions);
    eleventyConfig.addPlugin(pluginRss);
    
    eleventyConfig.addWatchTarget('src/**/**.md');
    eleventyConfig.addWatchTarget('src/**/**.njk');

    eleventyConfig.addPassthroughCopy({"node_modules/gsap/dist/all.js" : "js/gsap.js"}); //to add GSAP
    eleventyConfig.addPassthroughCopy({"node_modules/jquery/dist/jquery.min.js" : "js/jquery.js"}); //to add jquery
    eleventyConfig.addPassthroughCopy({"node_modules/lightgallery/" : "js/lightgallery/"}); //to add lightGallery

    eleventyConfig.addPassthroughCopy("src/js"); //to add animations
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/wenc-setup.js");
    eleventyConfig.addPassthroughCopy("src/projects/**/**.png"); //Passthrough project case study media
    eleventyConfig.addPassthroughCopy("src/admin/**/**.**"); //Passthrough project case study media

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
    eleventyConfig.addCollection("notes", function (collectionAPI) {
      return collectionAPI.getFilteredByGlob("src/notes/*.md");
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
            excludes: "functions",
            layouts: "_includes/layouts"
        } };
};