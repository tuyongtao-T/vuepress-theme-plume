import{_ as e,c as s,b as t,o as i}from"./app-BgTtORTE.js";const l={};function n(d,a){return i(),s("div",null,a[0]||(a[0]=[t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>不过最需要强调的便是它的可读性。一份使用 Markdown 格式撰写的文件应该可以直接以纯文字发佈，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响， 包括 <a href="http://docutils.sourceforge.net/mirror/setext.html" target="_blank" rel="noopener noreferrer">Setext</a>、<a href="http://www.aaronsw.com/2002/atx/" target="_blank" rel="noopener noreferrer">atx</a>、<a href="http://textism.com/tools/textile/" target="_blank" rel="noopener noreferrer">Textile</a>、<a href="http://docutils.sourceforge.net/rst.html" target="_blank" rel="noopener noreferrer">reStructuredText</a>、<a href="http://www.triptico.com/software/grutatxt.html" target="_blank" rel="noopener noreferrer">Grutatext</a> 和 <a href="http://ettext.taint.org/doc/" target="_blank" rel="noopener noreferrer">EtText</a>，然而最大灵感来源其实是纯文字的电子邮件格式。</p><p>因此 Markdown 的语法全由标点符号所组成，并经过严谨慎选，是为了让它们看起来就像所要表达的意思。像是在文字两旁加上星号，看起来就像*强调*。Markdown 的列表看起来，嗯，就是列表。假如你有使用过电子邮件，引言写法看起来就真的像是引用一段文字。</p><p>Markdown 具有一系列衍生版本，用于扩展 Markdown 的功能 (如表格、脚注、内嵌 HTML 等等) ， 这些功能原初的 Markdown 尚不具备，它们能让 Markdown 转换成更多的格式，例如 LaTeX，Docbook。 Markdown 增强版中比较有名的有 Markdown Extra、MultiMarkdown、 Maruku 等。这些衍生版本要么基于工具，如 Pandoc；要么基于网站，如 GitHub 和 Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。</p><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h2><p>Markdown 的语法有个主要的目的: 用来作为一种网络内容的<em>写作</em>用语言。Markdown 的重点在于，它能让文件更容易阅读、编写。因此，Markdown 的格式语法只涵盖纯文字可以涵盖的范围。</p><p>Markdown 的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写博客。世界上最流行的博客平台 WordPress 能很好的支持 Markdown。</p><p>用于编写说明文档，并且以 <code>README.md</code> 的文件名保存在软件的目录下面。</p><p>除此之外，我们还可以快速将 Markdown 转化为演讲 PPT、Word 产品文档、LaTex 论文甚至是用非常少量的代码完成最小可用原型。在数据科学领域，Markdown 已经广泛使用，极大地推进了动态可重复性研究的历史进程。</p><h3 id="行内-html" tabindex="-1"><a class="header-anchor" href="#行内-html"><span>行内 HTML</span></a></h3><p>不在 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 撰写。不需要额外标注这是 HTML 或是 Markdown；只要直接加标签就可以了。</p><p>只有块元素 ── 比如 <code>&lt;div&gt;</code>、<code>&lt;table&gt;</code>、<code>&lt;pre&gt;</code>、<code>&lt;p&gt;</code> 等标签，必须在前后加上空行，以利与内容区隔。 而且这些 (元素) 的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 的解析器有智慧型判断，可以避免在块标签前后加上没有必要的 <code>&lt;p&gt;</code> 标签。</p><p>举例来说，在 Markdown 文件里加上一段 HTML 表格:</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">This is a regular paragraph.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">table</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">tr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">td</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Foo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">td</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">tr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">table</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">This is another regular paragraph.</span></span></code></pre></div><p>请注意，Markdown 语法在 HTML 块标签中将不会被进行处理。例如，你无法在 HTML 块内使用 Markdown 形式的 <code>*强调*</code>。</p><h3 id="特殊字元自动转换" tabindex="-1"><a class="header-anchor" href="#特殊字元自动转换"><span>特殊字元自动转换</span></a></h3><p>在 HTML 文件中，有两个字元需要特殊处理: <code>&lt;</code> 和 <code>&amp;</code> 。 <code>&lt;</code> 符号用于起始标签，<code>&amp;</code> 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 <code>&amp;lt;</code> 和 <code>&amp;amp;</code>。</p><p><code>&amp;</code> 符号其实很容易让写作网络文件的人感到困扰，如果你要打「AT&amp;T」 ，你必须要写成「<code>AT&amp;amp;T</code>」 ，还得转换网址内的 <code>&amp;</code> 符号，如果你要链接到 <code>http://images.google.com/images?num=30&amp;q=larry+bird</code></p><p>你必须要把网址转成:</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">http://images.google.com/images?num=30</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">amp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">q=larry+bird</span></span></code></pre></div><p>才能放到链接标签的 <code>href</code> 属性里。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。</p><p>Markdown 允许你直接使用这些符号，但是你要小心跳脱字元的使用，如果你是在 HTML 实体中使用 <code>&amp;</code> 符号的话，它不会被转换，而在其它情形下，它则会被转换成 <code>&amp;amp;</code>。所以你如果要在文件中插入一个著作权的符号，你可以这样写:</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">copy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span></code></pre></div><p>Markdown 将不会对这段文字做修改，但是如果你这样写:</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">AT&amp;T</span></span></code></pre></div><p>Markdown 就会将它转为:</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">AT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">amp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">T</span></span></code></pre></div><p>类似的状况也会发生在 <code>&lt;</code> 符号上，因为 Markdown 支持 <a href="#%E8%A1%8C%E5%86%85-html">行内 HTML</a> ，如果你是使用 <code>&lt;</code> 符号作为 HTML 标签使用，那 Markdown 也不会对它做任何转换，但是如果你是写:</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">4 &lt; 5</span></span></code></pre></div><p>Markdown 将会把它转换为:</p><div class="language-html" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">4 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&amp;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">lt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 5</span></span></code></pre></div><p>不过需要注意的是，code 范围内，不论是行内还是块， <code>&lt;</code> 和 <code>&amp;</code> 两个符号都<em>一定</em>会被转换成 HTML 实体， 这项特性让你可以很容易地用 Markdown 写 HTML code (和 HTML 相对而言， HTML 语法中， 你要把所有的 <code>&lt;</code> 和 <code>&amp;</code> 都转换为 HTML 实体，才能在 HTML 文件里面写出 HTML code。)</p>`,32)]))}const r=e(l,[["render",n],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/article/2z59hh8g/","title":"内容水印","lang":"zh-CN","frontmatter":{"title":"内容水印","author":"Plume Theme","createTime":"2024/04/10 20:28:32","permalink":"/article/2z59hh8g/","watermark":{"content":"Plume Theme","fullPage":false,"width":200,"height":200},"gitInclude":[],"head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"用途","slug":"用途","link":"#用途","children":[{"level":3,"title":"行内 HTML","slug":"行内-html","link":"#行内-html","children":[]},{"level":3,"title":"特殊字元自动转换","slug":"特殊字元自动转换","link":"#特殊字元自动转换","children":[]}]}],"readingTime":{"minutes":4.33,"words":1298},"filePathRelative":"1.示例/内容水印.md","categoryList":[{"id":"7e4ecf","sort":1,"name":"示例"}]}`);export{r as comp,h as data};
