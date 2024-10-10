import{_ as r,c,a as s,e,d as t,w as n,b as p,r as o,o as g}from"./app-BgTtORTE.js";const m={};function u(v,i){const h=o("RouteLink"),a=o("VPIcon"),k=o("CodeTabs");return g(),c("div",null,[i[14]||(i[14]=s("h2",{id:"概述",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#概述"},[s("span",null,"概述")])],-1)),i[15]||(i[15]=s("p",null,[e("在 Markdown 文件中使用 "),s("a",{href:"https://iconify.design/",target:"_blank",rel:"noopener noreferrer"},"iconify"),e(" 的图标。")],-1)),s("p",null,[i[1]||(i[1]=e("主题一方面提供了")),t(h,{to:"/notes/theme/guide/%E5%8A%9F%E8%83%BD/%E7%BB%84%E4%BB%B6.html#%E5%9B%BE%E6%A0%87"},{default:n(()=>i[0]||(i[0]=[s("code",null,"<Icon />",-1)])),_:1}),i[2]||(i[2]=e(" 组件来支持在 markdown 中使用图标； 另一方面，主题还提供了图标的 markdown 语法，以更简单的方式，在 Markdown 中使用图标。"))]),i[16]||(i[16]=s("p",null,[e("为了更好的使用该功能，主题推荐你安装 "),s("code",null,"@iconify/json"),e(" 依赖。主题会自动解析 "),s("code",null,"@iconify/json"),e(" 中的图标数据， 将有使用的图标打包为本地资源，以获得更好的访问体验。")],-1)),t(k,{id:"0",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"npm-to-12"},{title0:n(({value:l,isActive:d})=>[t(a,{name:"vscode-icons:file-type-light-pnpm"}),i[3]||(i[3]=s("span",null,"pnpm",-1))]),title1:n(({value:l,isActive:d})=>[t(a,{name:"vscode-icons:file-type-yarn"}),i[4]||(i[4]=s("span",null,"yarn",-1))]),title2:n(({value:l,isActive:d})=>[t(a,{name:"logos:npm-icon"}),i[5]||(i[5]=s("span",null,"npm",-1))]),tab0:n(({value:l,isActive:d})=>i[6]||(i[6]=[s("div",{class:"language-sh","data-ext":"sh","data-title":"sh"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"pnpm"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," add"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," @iconify/json")])])])],-1)])),tab1:n(({value:l,isActive:d})=>i[7]||(i[7]=[s("div",{class:"language-sh","data-ext":"sh","data-title":"sh"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"yarn"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," add"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," @iconify/json")])])])],-1)])),tab2:n(({value:l,isActive:d})=>i[8]||(i[8]=[s("div",{class:"language-sh","data-ext":"sh","data-title":"sh"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"npm"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," install"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," @iconify/json")])])])],-1)])),_:1}),i[17]||(i[17]=p(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">collect:name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span></code></pre></div><p>设置图标大小和颜色</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:[collect:name size]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:[collect:name /color]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:[collect:name size/color]:</span></span></code></pre></div><p><code>iconify</code> 拥有非常多的图标，这些图标被分组为不同的 <code>collect</code>，每个 <code>collect</code> 都有自己的 图标。</p><p>你可以从 <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">https://icon-sets.iconify.design/</a> 中获取 collect 和 name。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ion:logo-markdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span></code></pre></div><p>输出：</p>`,10)),s("p",null,[t(a,{name:"ion:logo-markdown"})]),i[18]||(i[18]=p(`<p>该语法为行内语法，因此，你可以在同一行中跟其他 markdown 语法 一起使用。</p><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">github: :</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tdesign:logo-github-filled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">修改颜色：:[tdesign:logo-github-filled /#f00]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">修改大小：:[tdesign:logo-github-filled 36px]:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">修改大小颜色：:[tdesign:logo-github-filled 36px/#f00]:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">彩色图标 :[skill-icons:vscode-dark 36px]:</span></span></code></pre></div><p>输出：</p>`,4)),s("p",null,[i[9]||(i[9]=e("github: ")),t(a,{name:"tdesign:logo-github-filled"}),i[10]||(i[10]=e(" 修改颜色：")),t(a,{name:"tdesign:logo-github-filled",color:"#f00"}),i[11]||(i[11]=e(" 修改大小：")),t(a,{name:"tdesign:logo-github-filled",size:"36px"}),i[12]||(i[12]=e(" 修改大小颜色：")),t(a,{name:"tdesign:logo-github-filled",size:"36px",color:"#f00"})]),s("p",null,[i[13]||(i[13]=e("彩色图标 ")),t(a,{name:"skill-icons:vscode-dark",size:"36px"})])])}const A=r(m,[["render",u],["__file","index.html.vue"]]),f=JSON.parse(`{"path":"/guide/markdown/iconify/","title":"图标","lang":"zh-CN","frontmatter":{"title":"图标","createTime":"2024/09/30 14:49:39","icon":"grommet-icons:emoji","permalink":"/guide/markdown/iconify/","gitInclude":[],"head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"notes/theme/guide/markdown/图标.md"}`);export{A as comp,f as data};
