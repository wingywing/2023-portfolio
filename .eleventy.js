import { EleventyRenderPlugin } from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import implicitFigures from 'markdown-it-image-figures'
import mdAnchor from 'markdown-it-anchor'
import blogTools from "eleventy-plugin-blog-tools"
import embedYoutube from "eleventy-plugin-youtube-embed"
import pluginWebmentions from "@chrisburnell/eleventy-cache-webmentions"
import configWebmentions from "./_data/webmention.js"
import pluginRss from "@11ty/eleventy-plugin-rss"
import markdownIt from "markdown-it"
import { DateTime } from "luxon"
import eleventySass from "@jgarber/eleventy-plugin-sass"

const md = new markdownIt

export default function(eleventyConfig) {

    eleventyConfig.addFilter("markdown", function(content) {
      return md.renderInline(content || '');
    })
    eleventyConfig.addFilter("date", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_FULL);
    })
    // Below is used for images from indiekit to remove the /src prefix
    eleventyConfig.addFilter("removeSrc", (originalString) => {
      return originalString.replace('/src', '');
    })

    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(blogTools);
    eleventyConfig.addPlugin(embedYoutube);
    eleventyConfig.addPlugin(pluginWebmentions, configWebmentions);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventySass);
    
    eleventyConfig.addWatchTarget('src/**/**.md');
    eleventyConfig.addWatchTarget('src/**/**.njk');

    eleventyConfig.addPassthroughCopy({"node_modules/gsap/dist/all.js" : "js/gsap.js"}); //to add GSAP
    eleventyConfig.addPassthroughCopy({"node_modules/jquery/dist/jquery.min.js" : "js/jquery.js"}); //to add jquery
    eleventyConfig.addPassthroughCopy({"node_modules/lightgallery/" : "js/lightgallery/"}); //to add lightGallery

    eleventyConfig.addPassthroughCopy("src/manifest.json"); //to add animations
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
    eleventyConfig.addCollection("now", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/now/*.md").sort((a, b) => {
          return b.date - a.date;
      });
  });
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "html",

		// Add any other Image utility options here:
    svgAllowUpscale: false,

		// optional, output image formats
		formats: ["webp", "jpeg", "png"],
    // optional, output image widths
    widths: ["auto"],
		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
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