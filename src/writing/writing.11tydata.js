import { getWebmentions } from "@chrisburnell/eleventy-cache-webmentions";
import configWebmentions from "../../_data/webmention.js";

export default {
    eleventyComputed: {
        webmentions: (data) => {
            return getWebmentions(configWebmentions, configWebmentions.domain + data.page.url);
        },
    },
};