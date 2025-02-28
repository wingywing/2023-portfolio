import { getWebmentions } from "@chrisburnell/eleventy-cache-webmentions";
import configWebmentions from "../../_data/webmention.js";

export default {
    eleventyComputed: {
        webmentions: (data) => {
            return getWebmentions(configWebmentions, configWebmentions.domain + data.page.url);
        },
        permalink(data) {
          // If the page is in `draft:true` mode, don't write it to disk...
          if (data.draft) {
            return false;
          }
          // Return the original value (which could be `false`, or a custom value,
          // or default empty string).
          return data.permalink;
        },
        eleventyExcludeFromCollections(data) {
          // If the page is in `draft:true` mode, or has `permalink:false` exclude
          // it from any collections since it shouldn't be visible anywhere.
          if (data.draft || data.permalink === false) {
            return true;
          }
          return data.eleventyExcludeFromCollections;
        }
    },
};
