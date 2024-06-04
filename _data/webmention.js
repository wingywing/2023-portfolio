import { defaults } from "@chrisburnell/eleventy-cache-webmentions";
import dotenv from "dotenv";

// Load .env variables with dotenv
dotenv.config();

export default Object.assign({}, defaults, {
    domain: "https://wingpang.com",
    feed: `https://webmention.io/api/mentions.jf2?domain=wingpang.com&token=${process.env.WEBMENTION_IO_TOKEN}&per-page=9001`,
    key: "children",
});
