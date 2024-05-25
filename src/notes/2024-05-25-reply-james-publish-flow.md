---
date: 2024-05-25T17:30:06.244Z
inReplyTo: https://jamesg.blog/2024/05/25/new-publishing-workflow/
category:
  - ""
references:
  https://jamesgBlog/2024/05/25/newPublishingWorkflow/:
    url: https://jamesg.blog/2024/05/25/new-publishing-workflow/
    type: entry
    name: My new publishing workflow
    published: 2024-05-25T00:00:00
    category: Coding
    content:
      html: |-
        <div class="special-image">
        			<p><em>The intended audience for this post is programmers.</em></p>
        <p>My blog post publishing process is convoluted. To publish a blog post, I have to:</p>
        <ol>
        <li>Go to GitHub, where my blog is hosted.</li>
        <li>Navigate to my repository.</li>
        <li>Go into the posts folder.</li>
        <li>Wait for the page to load properly, since there are so many posts.</li>
        <li>Click <code>Add file</code>.</li>
        <li>Copy-paste the metadata from another blog post so I can set my post title, categories, and other pieces of information (and it can take a few seconds to find the right post from which I want to copy, since not all posts have the same metadata).</li>
        <li>Copy-paste my post content from the text editor I use, Typora, into the file on GitHub.</li>
        <li>Create the file.</li>
        </ol>
        <p>My static site generator then turns the file into a web page.</p>
        <p>If I want to include an image in my post, I <em>also</em> have to:</p>
        <ol>
        <li>Find, then click to go to, the assets folder in GitHub where all my images are stored.</li>
        <li>Click to upload an image.</li>
        <li>Upload an image.</li>
        </ol>
        <p>This is a lot of steps. And I have been following them for at least six months.</p>
        <p>This week, after talking with some fellow website makers, I had an idea: I could make a tool to simplify this.</p>
        <p>I did some research earlier today and found that there is a link structure you can use to take content and auto-paste it into GitHub. Herein lay an opportunity: I could make a form where I can type in all of the information I need for a post (i.e. title, post content), and auto-fill others (i.e. publication date). This form could have a button that structures all the information in the way required for my site to understand it, then open GitHub with the final post ready to publish.</p>
        <p>The URL structure is:</p>
        <pre><code class="language-text">
        `https://github.com/capjamesg/jamesg.blog/new/main/_posts/?filename=${filename}.md&amp;value={file_contents}`;
        </code></pre>

        <p>This afternoon, I made a web page that meets these requirements, allowing me to skip all of the steps above and format a post in a form I made. I can type in the information I need to publish a blog post, click a few buttons, and my blog post will be in GitHub. The form automatically adds the date and time a post was published, so I no longer have to add that to my posts. It also lists several categories that I use often from which I can choose, eliminating the risk I use the wrong name for a category (something I do often!).</p>
        <p>My form URL-encodes the file contents so the contents show up properly in GitHub when the form submits.</p>
        <p>The form doesn't actually create anything on my site: it creates the page and redirects me to GitHub, where I can click submit to save the file.</p>
        <p>Here is the form on my website, the final result of the project:</p>
        <p><a href="https://jamesg.blog/assets/publishing.png"></a><a href="https://jamesg.blog/assets/publishing.png"><img src="https://jamesg.blog/assets/publishing.png" alt="Publishing form"></a></p>
        <p>If you are interested in how this page works, the page is public! <a href="https://jamesg.blog/create/">View the blog post create page.</a></p>
        <p>I had a lot of fun making this tool. I had a problem -- a slow, convoluted, verging-on-frustrating publishing process -- and was able to make something simpler. I now wonder if I should add boxes for common things I need when formatting posts before publishing, like the HTML tags I use for code snippets. The opportunities are exciting! My mind is also thinking about other publishing tools I could make for use in my work as a technical writer.</p>
        <p>This is my first post published using the new tool! I'm excited!</p>
        			
        			<p><a href="https://news.ycombinator.com/submitlink?u=https://jamesg.blog//2024/05/25/new-publishing-workflow/&amp;t=My new publishing workflow">Share this post on Hacker News</a>.</p>
        		<p><a href="https://lobste.rs/stories/new?url=https://jamesg.blog//2024/05/25/new-publishing-workflow/&amp;title=My new publishing workflow">Share this post on Lobste.rs</a>.</p>
        		</div>
        		
        		

        		<!-- My site has a cute mascot! Learn more about him at https://jamesg.blog/mascot/.
        		A friend suggested I come up with a name other than James, which I gave to the mascot in the aforelinked post. I thought about MJ, short for Mascot James.
        		Herein, my mascot will be MJ and James. Or perhaps any of the myriad other nicknames I am likely to come up with over the years.

        		I hired someone to design this mascot. The aforelinked post provides more information and a recommendation for the designer!
        		--> 
        		<p><img src="https://jamesg.blog/assets/mascot.svg" alt="James' Coffee Blog mascot" class="mascot"></p>
        		<hr>
        	
        		<!-- Writing is a way for me to process the world around me. It is a craft that I enjoy refining. Please note: My words are written by me, not AI. -->
        		<!-- On a related note, I ask many AI bots not to crawl my website: https://jamesg.blog/robots.txt. This is my space. -->
        		<p><a href="https://notbyai.fyi/" class="notbyai_link"><img src="https://jamesg.blog/assets/ai.png" height="42" width="131" alt="Written by human, not by AI" class="notbyai"></a></p>
      text: |-
        The intended audience for this post is programmers.
        My blog post publishing process is convoluted. To publish a blog post, I have to:

        Go to GitHub, where my blog is hosted.
        Navigate to my repository.
        Go into the posts folder.
        Wait for the page to load properly, since there are so many posts.
        Click Add file.
        Copy-paste the metadata from another blog post so I can set my post title, categories, and other pieces of information (and it can take a few seconds to find the right post from which I want to copy, since not all posts have the same metadata).
        Copy-paste my post content from the text editor I use, Typora, into the file on GitHub.
        Create the file.

        My static site generator then turns the file into a web page.
        If I want to include an image in my post, I also have to:

        Find, then click to go to, the assets folder in GitHub where all my images are stored.
        Click to upload an image.
        Upload an image.

        This is a lot of steps. And I have been following them for at least six months.
        This week, after talking with some fellow website makers, I had an idea: I could make a tool to simplify this.
        I did some research earlier today and found that there is a link structure you can use to take content and auto-paste it into GitHub. Herein lay an opportunity: I could make a form where I can type in all of the information I need for a post (i.e. title, post content), and auto-fill others (i.e. publication date). This form could have a button that structures all the information in the way required for my site to understand it, then open GitHub with the final post ready to publish.
        The URL structure is:

        `https://github.com/capjamesg/jamesg.blog/new/main/_posts/?filename=${filename}.md&value={file_contents}`;


        This afternoon, I made a web page that meets these requirements, allowing me to skip all of the steps above and format a post in a form I made. I can type in the information I need to publish a blog post, click a few buttons, and my blog post will be in GitHub. The form automatically adds the date and time a post was published, so I no longer have to add that to my posts. It also lists several categories that I use often from which I can choose, eliminating the risk I use the wrong name for a category (something I do often!).
        My form URL-encodes the file contents so the contents show up properly in GitHub when the form submits.
        The form doesn't actually create anything on my site: it creates the page and redirects me to GitHub, where I can click submit to save the file.
        Here is the form on my website, the final result of the project:
         Publishing form 
        If you are interested in how this page works, the page is public! View the blog post create page.
        I had a lot of fun making this tool. I had a problem -- a slow, convoluted, verging-on-frustrating publishing process -- and was able to make something simpler. I now wonder if I should add boxes for common things I need when formatting posts before publishing, like the HTML tags I use for code snippets. The opportunities are exciting! My mind is also thinking about other publishing tools I could make for use in my work as a technical writer.
        This is my first post published using the new tool! I'm excited!
        			
        			Share this post on Hacker News.
        		Share this post on Lobste.rs.
        		
        		
        		

        		 
        		 James' Coffee Blog mascot 
        		
        	
        		
        		
        		 Written by human, not by AI
---

This is great!
Very keen to see what you do next. 😆
