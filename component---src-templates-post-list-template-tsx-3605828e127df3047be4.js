"use strict";(self.webpackChunkmichaeldemar_co=self.webpackChunkmichaeldemar_co||[]).push([[703],{5505:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),l=a(1883),n=a(5869),o=a(1574),m=a(9599),c=a(8032);var s=e=>{let{node:t,type:a}=e;const n=t.frontmatter.title||t.fields.slug,o="/"+a+t.fields.slug,m=(0,c.c)(t.frontmatter.featuredImage);if(void 0===m)throw new Error("Could not find header image for post with title "+n+"!");return r.createElement("article",{className:"PostHeader-module--post--ce34e"},r.createElement("header",null,r.createElement(c.G,{backgroundColor:"var(--background)",image:m,alt:n+" header",className:"PostHeader-module--image--fcf00"}),r.createElement("h3",{className:"PostHeader-module--title--10b8b"},r.createElement(l.Link,{style:{boxShadow:"none"},to:o},n)),r.createElement("p",{className:"PostHeader-module--date--458df"},t.frontmatter.date)),r.createElement("section",{className:"PostHeader-module--excerpt--7b804"},r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),r.createElement("p",{className:"PostHeader-module--more--cd09b"},r.createElement(l.Link,{style:{boxShadow:"none"},to:o},"Read more"))))};var d=e=>{let{data:t,pageContext:a,location:c}=e;const{site:{siteMetadata:{title:d}},allMarkdownRemark:{edges:i}}=t,{type:u,currentPage:p,numPages:E}=a,f=Math.min(p+1,E),h=Math.max(p-1,0);return r.createElement(o.Z,{location:c,title:d},r.createElement(m.Z,{title:u}),r.createElement(n.Z,null),r.createElement("div",{className:"PostListTemplate-module--posts--9eef9"},i.map(((e,t)=>{let{node:a}=e;return r.createElement(s,{key:t,type:u,node:a})}))),r.createElement("div",{className:"PostListTemplate-module--redirects--b8e31"},p>1&&r.createElement(l.Link,{to:"/"+u+(1===h?"":"/"+h)},"Back"),p>1&&p<E&&r.createElement("span",null,"•"),p<E&&r.createElement(l.Link,{to:"/"+u+"/"+f},"Next")))}}}]);
//# sourceMappingURL=component---src-templates-post-list-template-tsx-3605828e127df3047be4.js.map