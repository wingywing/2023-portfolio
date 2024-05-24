---
date: 2024-05-24T18:07:16.371Z
inReplyTo: https://chrisburnell.com/article/webmention-eleventy-setup/
category:
  - webmentions
  - eleventy
  - webmention
  - indieweb
visibility: public
references:
  https://chrisburnellCom/article/webmentionEleventySetup/:
    url: https://chrisburnell.com/article/webmention-eleventy-setup/
    children:
      - type: entry
        name:
          - Webmention Setup for Eleventy
          - Webmention Setup for Eleventy
        category: https://chrisburnell.com/articles/
        published: 2022-08-25T16:31:04+01:00
        updated: 2024-01-14T03:45:00+08:00
        summary: Here’s a quick run-through of how I retrieve and utilise Webmentions with my Eleventy website.
        content:
          html: |-
            <h2 id="1">
            				1. Account Creation
            				<a href="#1" title="Permalink for 1. Account Creation" data-pagefind-ignore="" class="[ fragment-anchor ]"><small class="visually-hidden">Permalink </small>¶</a>
            			</h2>
            <p>Unless you already have your own Webmention receiver, sign up for one and add the secret key/token to your project. Below are two examples:</p>
            <p>If you’re using <strong><a href="https://webmention.io/">Webmention.io</a></strong>, add your <strong>API Key</strong> (found on your <a href="https://webmention.io/settings">settings page</a>) to your project as an environment variable, i.e. in a <code>.env</code> file in the root of your project:</p>
            <pre class="language-text"><code tabindex="0" class="language-text">WEBMENTION_IO_TOKEN=njJql0lKXnotreal4x3Wmd</code></pre>
            <p>If you’re using <strong><a href="https://git.brainbaking.com/wgroeneveld/go-jamming">go-jamming</a></strong>, once you’ve set up your server and defined your token, you’ll need add it to your project as an environment variable, i.e. in a <code>.env</code> file in the root of your project:</p>
            <pre class="language-text"><code tabindex="0" class="language-text">GO_JAMMING_TOKEN=njJql0lKXnotreal4x3Wmd</code></pre>
            <h2 id="2">
            				2. Installation
            				<a href="#2" title="Permalink for 2. Installation" data-pagefind-ignore="" class="[ fragment-anchor ]"><small class="visually-hidden">Permalink </small>¶</a>
            			</h2>
            <p>Install the <a href="https://chrisburnell.com/eleventy-cache-webmentions/"><code>eleventy-cache-webmentions</code></a> package from <em>npm</em>:</p>
            <pre class="language-bash"><code tabindex="0" class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @chrisburnell/eleventy-cache-webmentions</code></pre>
            <h2 id="3">
            				3. Configuration
            				<a href="#3" title="Permalink for 3. Configuration" data-pagefind-ignore="" class="[ fragment-anchor ]"><small class="visually-hidden">Permalink </small>¶</a>
            			</h2>
            <p>Create a config file. You may wish to put this file in your <a href="https://www.11ty.dev/docs/data-global/">Global Data Folder</a> so you can access the data across your Eleventy project. The location and filename of your config file are up to you, as long as it’s somewhere in your project that you can access with JavaScript using <code>require()</code>.</p>
            <p>If you’re using <strong><a href="https://webmention.io/">Webmention.io</a></strong>:</p>
            <pre class="language-javascript"><code tabindex="0" class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span> defaults <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@chrisburnell/eleventy-cache-webmentions"</span><span class="token punctuation">)</span>

            <span class="token comment">// Load .env variables with dotenv</span>
            <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"dotenv"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            	<span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">"https://EXAMPLE.COM"</span><span class="token punctuation">,</span>
            	<span class="token literal-property property">feed</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://webmention.io/api/mentions.jf2?domain=EXAMPLE.COM&amp;token=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">WEBMENTION_IO_TOKEN</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;per-page=9001</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            	<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"children"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>
            <p>If you’re using <strong><a href="https://git.brainbaking.com/wgroeneveld/go-jamming">go-jamming</a></strong>:</p>
            <pre class="language-javascript"><code tabindex="0" class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span> defaults <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@chrisburnell/eleventy-cache-webmentions"</span><span class="token punctuation">)</span>

            <span class="token comment">// Load .env variables with dotenv</span>
            <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"dotenv"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaults<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            	<span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">"https://EXAMPLE.COM"</span><span class="token punctuation">,</span>
            	<span class="token literal-property property">feed</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://JAM.EXAMPLE.COM/webmention/EXAMPLE.COM/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GO_JAMMING_TOKEN</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            	<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"json"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>
            <h2 id="4">
            				4. Integrate with Eleventy
            				<a href="#4" title="Permalink for 4. Integrate with Eleventy" data-pagefind-ignore="" class="[ fragment-anchor ]"><small class="visually-hidden">Permalink </small>¶</a>
            			</h2>
            <p>Add both to Eleventy by adding them to your <a href="https://www.11ty.dev/docs/config/">Eleventy Config</a>:</p>
            <p><em>Note: The path to your Webmentions config depends on where your Data files live, e.g. <code>./src/data/configWebmentions.js</code>.</em></p>
            <pre class="language-javascript"><code tabindex="0" class="language-javascript"><span class="token keyword">const</span> pluginWebmentions <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@chrisburnell/eleventy-cache-webmentions"</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> configWebmentions <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"../path_to_your_config/configWebmentions.js"</span><span class="token punctuation">)</span>

            module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eleventyConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            	eleventyConfig<span class="token punctuation">.</span><span class="token function">addPlugin</span><span class="token punctuation">(</span>pluginWebmentions<span class="token punctuation">,</span> configWebmentions<span class="token punctuation">)</span>
            <span class="token punctuation">}</span></code></pre>
            <h2 id="5">
            				5. Attach Webmentions to Pages
            				<a href="#5" title="Permalink for 5. Attach Webmentions to Pages" data-pagefind-ignore="" class="[ fragment-anchor ]"><small class="visually-hidden">Permalink </small>¶</a>
            			</h2>
            <p>Add some <a href="https://www.11ty.dev/docs/data-template-dir/">Directory Specific Data Files</a> wherever your pages and/or posts live. For example, if your pages all live in a <code>pages/</code> folder, you would add the following code block to a <code>pages.11tydata.js</code> file inside <code>pages/</code>:</p>
            <pre class="language-javascript"><code tabindex="0" class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span> getWebmentions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@chrisburnell/eleventy-cache-webmentions"</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> configWebmentions <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"../path_to_your_config/configWebmentions.js"</span><span class="token punctuation">)</span>

            module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
            	<span class="token literal-property property">eleventyComputed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            		<span class="token function-variable function">webmentions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            			<span class="token keyword">return</span> <span class="token function">getWebmentions</span><span class="token punctuation">(</span>configWebmentions<span class="token punctuation">,</span> configWebmentions<span class="token punctuation">.</span>domain <span class="token operator">+</span> data<span class="token punctuation">.</span>page<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
            		<span class="token punctuation">}</span><span class="token punctuation">,</span>
            	<span class="token punctuation">}</span>
            <span class="token punctuation">}</span></code></pre>
            <h2 id="6">
            				6. Use Webmentions
            				<a href="#6" title="Permalink for 6. Use Webmentions" data-pagefind-ignore="" class="[ fragment-anchor ]"><small class="visually-hidden">Permalink </small>¶</a>
            			</h2>
            <p>Webmentions are now attached to each page!</p>
            <p>You can access them quite easily on a given page:</p>
            <pre class="language-twig"><code tabindex="0" class="language-twig"><span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">for</span> webmention <span class="token operator">in</span> webmentions <span class="token delimiter punctuation">%}</span></span>
            	<span class="token comment">&lt;!-- Loop through all webmentions on a given page --&gt;</span>
            	<span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> webmention<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name <span class="token delimiter punctuation">}}</span></span> sent this page a <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> webmention <span class="token operator">|</span> getType <span class="token delimiter punctuation">}}</span></span>
            <span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">endfor</span> <span class="token delimiter punctuation">%}</span></span></code></pre>
            <p>And even when looping through something like a collection:</p>
            <pre class="language-twig"><code tabindex="0" class="language-twig"><span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">for</span> item <span class="token operator">in</span> collections<span class="token punctuation">.</span>pages <span class="token delimiter punctuation">%}</span></span>
            	<span class="token comment">&lt;!-- Loop through all items in a collection --&gt;</span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title <span class="token delimiter punctuation">}}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This page has <span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>webmentions<span class="token punctuation">.</span>length <span class="token delimiter punctuation">}}</span></span> webmention<span class="token twig language-twig"><span class="token delimiter punctuation">{{</span> <span class="token string"><span class="token punctuation">'</span>s<span class="token punctuation">'</span></span> <span class="token keyword">if</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>webmentions<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token delimiter punctuation">}}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">endfor</span> <span class="token delimiter punctuation">%}</span></span></code></pre>
            <p>How you want to filter the array of Webmentions attached to each page is up to you, but I recommend using the <code>getWebmentionsByTypes</code> Filter to split Webmentions into groups categorised by type—this will make it easier to figure out which Webmentions are binary interactions (e.g. likes, reposts) and which have richer content you might want to display (e.g. mentions, replies).</p>
            <pre class="language-twig"><code tabindex="0" class="language-twig"><span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">set</span> reactions <span class="token operator">=</span> webmentions <span class="token operator">|</span> getWebmentionsByTypes<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string"><span class="token punctuation">'</span>like-of<span class="token punctuation">'</span></span><span class="token punctuation">,</span> <span class="token string"><span class="token punctuation">'</span>repost-of<span class="token punctuation">'</span></span><span class="token punctuation">,</span> <span class="token string"><span class="token punctuation">'</span>bookmark-of<span class="token punctuation">'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token delimiter punctuation">%}</span></span>

            <span class="token twig language-twig"><span class="token delimiter punctuation">{%</span> <span class="token tag-name keyword">set</span> replies <span class="token operator">=</span> webmentions <span class="token operator">|</span> getWebmentionsByTypes<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string"><span class="token punctuation">'</span>mention-of<span class="token punctuation">'</span></span><span class="token punctuation">,</span> <span class="token string"><span class="token punctuation">'</span>in-reply-to<span class="token punctuation">'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token delimiter punctuation">%}</span></span></code></pre>
            <hr>
            <p>And that's pretty much all there is to it! Let me know if you have any suggestions or issues, and feel free to contribute back to the Eleventy plugin that is the workhorse behind this implementation <a href="https://github.com/chrisburnell/eleventy-cache-webmentions">over on GitHub</a> or just <a href="https://chrisburnell.com/about/#contact">get in touch</a>.</p>
          text: |-
            1. Account Creation
            				Permalink ¶
            			
            Unless you already have your own Webmention receiver, sign up for one and add the secret key/token to your project. Below are two examples:
            If you’re using Webmention.io, add your API Key (found on your settings page) to your project as an environment variable, i.e. in a .env file in the root of your project:
            WEBMENTION_IO_TOKEN=njJql0lKXnotreal4x3Wmd
            If you’re using go-jamming, once you’ve set up your server and defined your token, you’ll need add it to your project as an environment variable, i.e. in a .env file in the root of your project:
            GO_JAMMING_TOKEN=njJql0lKXnotreal4x3Wmd

            				2. Installation
            				Permalink ¶
            			
            Install the eleventy-cache-webmentions package from npm:
            npm install @chrisburnell/eleventy-cache-webmentions

            				3. Configuration
            				Permalink ¶
            			
            Create a config file. You may wish to put this file in your Global Data Folder so you can access the data across your Eleventy project. The location and filename of your config file are up to you, as long as it’s somewhere in your project that you can access with JavaScript using require().
            If you’re using Webmention.io:
            const { defaults } = require("@chrisburnell/eleventy-cache-webmentions")

            // Load .env variables with dotenv
            require("dotenv").config()

            module.exports = Object.assign({}, defaults, {
            	domain: "https://EXAMPLE.COM",
            	feed: `https://webmention.io/api/mentions.jf2?domain=EXAMPLE.COM&token=${process.env.WEBMENTION_IO_TOKEN}&per-page=9001`,
            	key: "children",
            })
            If you’re using go-jamming:
            const { defaults } = require("@chrisburnell/eleventy-cache-webmentions")

            // Load .env variables with dotenv
            require("dotenv").config()

            module.exports = Object.assign({}, defaults, {
            	domain: "https://EXAMPLE.COM",
            	feed: `https://JAM.EXAMPLE.COM/webmention/EXAMPLE.COM/${process.env.GO_JAMMING_TOKEN}`,
            	key: "json",
            })

            				4. Integrate with Eleventy
            				Permalink ¶
            			
            Add both to Eleventy by adding them to your Eleventy Config:
            Note: The path to your Webmentions config depends on where your Data files live, e.g. ./src/data/configWebmentions.js.
            const pluginWebmentions = require("@chrisburnell/eleventy-cache-webmentions")
            const configWebmentions = require("../path_to_your_config/configWebmentions.js")

            module.exports = function(eleventyConfig) {
            	eleventyConfig.addPlugin(pluginWebmentions, configWebmentions)
            }

            				5. Attach Webmentions to Pages
            				Permalink ¶
            			
            Add some Directory Specific Data Files wherever your pages and/or posts live. For example, if your pages all live in a pages/ folder, you would add the following code block to a pages.11tydata.js file inside pages/:
            const { getWebmentions } = require("@chrisburnell/eleventy-cache-webmentions")
            const configWebmentions = require("../path_to_your_config/configWebmentions.js")

            module.exports = {
            	eleventyComputed: {
            		webmentions: (data) => {
            			return getWebmentions(configWebmentions, configWebmentions.domain + data.page.url)
            		},
            	}
            }

            				6. Use Webmentions
            				Permalink ¶
            			
            Webmentions are now attached to each page!
            You can access them quite easily on a given page:
            {% for webmention in webmentions %}
            	<!-- Loop through all webmentions on a given page -->
            	{{ webmention.author.name }} sent this page a {{ webmention | getType }}
            {% endfor %}
            And even when looping through something like a collection:
            {% for item in collections.pages %}
            	<!-- Loop through all items in a collection -->
            	<h2>{{ item.data.title }}</h2>
            	<p>This page has {{ item.data.webmentions.length }} webmention{{ 's' if item.data.webmentions.length > 1 }}</p>
            {% endfor %}
            How you want to filter the array of Webmentions attached to each page is up to you, but I recommend using the getWebmentionsByTypes Filter to split Webmentions into groups categorised by type—this will make it easier to figure out which Webmentions are binary interactions (e.g. likes, reposts) and which have richer content you might want to display (e.g. mentions, replies).
            {% set reactions = webmentions | getWebmentionsByTypes(['like-of', 'repost-of', 'bookmark-of']) %}

            {% set replies = webmentions | getWebmentionsByTypes(['mention-of', 'in-reply-to']) %}

            And that's pretty much all there is to it! Let me know if you have any suggestions or issues, and feel free to contribute back to the Eleventy plugin that is the workhorse behind this implementation over on GitHub or just get in touch.
        tag:
          - eleventy
          - indieweb
          - javascript
        url: https://chrisburnell.com/article/webmention-eleventy-setup/
        author:
          type: card
          name: Chris Burnell
          url:
            - https://chrisburnell.com/
            - https://chrisburnell.com/about
          uid: https://chrisburnell.com/
          photo: https://chrisburnell.com/images/avatar@4x.jpeg
      - type: card
        url: https://chrisburnell.com/about/
        uid: https://chrisburnell.com/about/
        photo:
          - alt: Chris Burnell
            url: https://chrisburnell.com/images/avatar.jpeg
        name: Chris Burnell
        note: I’m Chris Burnell /krɪs bɜːrˈnɛl/ (he/him), a Canadian Front End Developer / Software Engineer living in Singapore. I’m often found rabbit hole deep-diving. This is where I think, write, and share my passion for front end development and the web.
        jobTitle: Front End Developer
        locality: Singapore
        xPronounNominative: he
        xPronounOblique: him
        xPronounPossessive: his
---

This helped me so much!

The only thing I had an issue with here (I'm not a super technical person) was in Part 6, where the `getType` filter was used –– I don't think it was documented in the earlier steps!

I ended up doing filtering another way, but I think it could be useful to include that in the guide.

Thanks for the great work!
