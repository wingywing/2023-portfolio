const { defaults } = require("@chrisburnell/eleventy-cache-webmentions")

// Load .env variables with dotenv
require("dotenv").config()

module.exports = Object.assign({}, defaults, {
	domain: "https://wingpang.com",
	feed: `https://webmention.io/api/mentions.jf2?domain=wingpang.com&token=WEBMENTION_IO_TOKEN&per-page=9001`,
	key: "children",
})