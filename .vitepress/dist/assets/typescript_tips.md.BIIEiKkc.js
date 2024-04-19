import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.E4YCCYO0.js";const g=JSON.parse('{"title":"TypeScript技巧","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/tips.md","filePath":"typescript/tips.md"}'),n={name:"typescript/tips.md"},p=t(`<h1 id="typescript技巧" tabindex="-1">TypeScript技巧 <a class="header-anchor" href="#typescript技巧" aria-label="Permalink to &quot;TypeScript技巧&quot;">​</a></h1><p>这个文档介绍一些我知道的TypeScript技巧</p><h2 id="类型取反" tabindex="-1">类型取反 <a class="header-anchor" href="#类型取反" aria-label="Permalink to &quot;类型取反&quot;">​</a></h2><p>结合泛型和never类型可以对变量类型进行取反约束,比如我们想要约束函数参数类型为除了string之外的类型都可以：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fuction </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(x:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> extends string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">never</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tian&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//报错</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//通过类型检验</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//通过检验</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//通过检验</span></span></code></pre></div>`,5),h=[p];function e(l,k,r,E,d,c){return a(),i("div",null,h)}const o=s(n,[["render",e]]);export{g as __pageData,o as default};