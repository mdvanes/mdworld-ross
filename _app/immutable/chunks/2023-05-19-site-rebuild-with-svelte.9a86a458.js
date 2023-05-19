import{S as gt,i as $t,s as yt,k as r,q as l,a as f,y as V,l as n,m,r as s,h as t,c as h,z as W,n as p,b as a,D as o,A as B,E as xt,g as Q,d as U,B as Y}from"./index.ce9a7868.js";import{L as Z}from"./Lightbox.ede124cd.js";function Et(ct){let u,_e,D,ge,$e,ee,S,ye,k,xe,Ee,te,w,Ge,z,Ie,Te,J,je,Me,oe,_,kt=`<code class="language-mdsvex"># This is a markdown heading

This is markdown text

&lt;script&gt;
import Lightbox from &#39;$lib/components/Lightbox/Lightbox.svelte&#39;
&lt;/script&gt;

&lt;Lightbox imgpath=&quot;/lightbox/mfe/module-federation.svg&quot; imgtitle=&quot;Module Federation&quot; /&gt;</code>`,ie,A,De,le,g,se,b,Ae,N,Le,Pe,$,qe,He,ae,d,Ce,y,Fe,Re,x,Oe,Ke,re,c,Xe,L,ze,Je,ne,P,Ne,me,v,Ve,E,We,Be,G,Qe,Ue,fe,q,Ye,he,I,pe,H,Ze,ue,T,we,C,et,be,j,de,F,tt,ve,M,Se;return g=new Z({props:{imgpath:"/lightbox/mfe/module-federation.svg",imgtitle:"Module Federation"}}),I=new Z({props:{imgpath:"/lightbox/site-rebuild-with-svelte/theme-jackson.jpg",imgtitle:"Theme 2018-2023"}}),T=new Z({props:{imgpath:"/lightbox/site-rebuild-with-svelte/theme-ingram.jpg",imgtitle:"Theme 2013-2018"}}),j=new Z({props:{imgpath:"/lightbox/site-rebuild-with-svelte/theme-simon.jpg",imgtitle:"Theme 2010-2013"}}),M=new Z({props:{imgpath:"https://mdvanes.github.io/mdworld-simon/sites/default/files/images/vorig_design.jpg",imgtitle:"Theme until 2010"}}),{c(){u=r("p"),_e=l("I wanted to update the previous version of the blog ("),D=r("a"),ge=l("mdworld-jackson"),$e=l(`) built on SSG (Static Site Generation) with Gatsby.
It was several majors of Gatsby behind and contained several workarounds that would take a lot of time to figure out, so I took it as an opportunity to move to a new stack. SSG with SvelteKit. Shying away from runtime component libraries or CSS sets, the target is to make a package that is a small as possible.`),ee=f(),S=r("p"),ye=l("Recently I built "),k=r("a"),xe=l("codestar-website-next"),Ee=l(`, a
blog-like site built on SSG with NextJS. This was such a breeze, that I wanted to look at a
similar SSG driven stack for this new theme. I wanted to look into Svelte for some time, so after
experimenting for a couple of hours I landed on a new stack with Svelte, SvelteKit and Vite.`),te=f(),w=r("p"),Ge=l("An important requirement to keep from the previous theme, is to support code in Markdown. In Gatsby it is possible to use React in Markdown with "),z=r("code"),Ie=l("MDX"),Te=l(", and Svelte supports a similar way of working with "),J=r("code"),je=l("MDsveX"),Me=l(":"),oe=f(),_=r("pre"),ie=f(),A=r("p"),De=l("Which is rendered as a clickable image:"),le=f(),V(g.$$.fragment),se=f(),b=r("p"),Ae=l("See the code for the "),N=r("code"),Le=l("Lightbox"),Pe=l(" component in the "),$=r("a"),qe=l("mdworld-ross repo"),He=l("."),ae=f(),d=r("p"),Ce=l(`The only missing technology from my wishlist was Deno, because of my preference for TypeScript. My
first SSG attempt `),y=r("a"),Fe=l("deno-ssg-blog"),Re=l(` used a library that
was still experimental, but now there is `),x=r("a"),Oe=l("Deno Fresh"),Ke=l(`. It was too much
time to figure that out now when combining it with Svelte, so I will keep that for another
experiment.`),re=f(),c=r("p"),Xe=l("For more information about the current stack, see the "),L=r("a"),ze=l("about page"),Je=l("."),ne=f(),P=r("h1"),Ne=l("Old themes"),me=f(),v=r("p"),Ve=l("Static versions of the 2 last themes still run "),E=r("a"),We=l("here (2013-2018)"),Be=l(`
and `),G=r("a"),Qe=l("here (2010-2013)"),Ue=l("."),fe=f(),q=r("h2"),Ye=l("Theme 2018-2023"),he=f(),V(I.$$.fragment),pe=f(),H=r("h2"),Ze=l("Theme 2013-2018"),ue=f(),V(T.$$.fragment),we=f(),C=r("h2"),et=l("Theme 2010-2013"),be=f(),V(j.$$.fragment),de=f(),F=r("h2"),tt=l("Theme until 2010"),ve=f(),V(M.$$.fragment),this.h()},l(e){u=n(e,"P",{});var i=m(u);_e=s(i,"I wanted to update the previous version of the blog ("),D=n(i,"A",{href:!0});var ot=m(D);ge=s(ot,"mdworld-jackson"),ot.forEach(t),$e=s(i,`) built on SSG (Static Site Generation) with Gatsby.
It was several majors of Gatsby behind and contained several workarounds that would take a lot of time to figure out, so I took it as an opportunity to move to a new stack. SSG with SvelteKit. Shying away from runtime component libraries or CSS sets, the target is to make a package that is a small as possible.`),i.forEach(t),ee=h(e),S=n(e,"P",{});var ce=m(S);ye=s(ce,"Recently I built "),k=n(ce,"A",{href:!0,rel:!0});var it=m(k);xe=s(it,"codestar-website-next"),it.forEach(t),Ee=s(ce,`, a
blog-like site built on SSG with NextJS. This was such a breeze, that I wanted to look at a
similar SSG driven stack for this new theme. I wanted to look into Svelte for some time, so after
experimenting for a couple of hours I landed on a new stack with Svelte, SvelteKit and Vite.`),ce.forEach(t),te=h(e),w=n(e,"P",{});var R=m(w);Ge=s(R,"An important requirement to keep from the previous theme, is to support code in Markdown. In Gatsby it is possible to use React in Markdown with "),z=n(R,"CODE",{});var lt=m(z);Ie=s(lt,"MDX"),lt.forEach(t),Te=s(R,", and Svelte supports a similar way of working with "),J=n(R,"CODE",{});var st=m(J);je=s(st,"MDsveX"),st.forEach(t),Me=s(R,":"),R.forEach(t),oe=h(e),_=n(e,"PRE",{class:!0});var _t=m(_);_t.forEach(t),ie=h(e),A=n(e,"P",{});var at=m(A);De=s(at,"Which is rendered as a clickable image:"),at.forEach(t),le=h(e),W(g.$$.fragment,e),se=h(e),b=n(e,"P",{});var O=m(b);Ae=s(O,"See the code for the "),N=n(O,"CODE",{});var rt=m(N);Le=s(rt,"Lightbox"),rt.forEach(t),Pe=s(O," component in the "),$=n(O,"A",{href:!0,rel:!0});var nt=m($);qe=s(nt,"mdworld-ross repo"),nt.forEach(t),He=s(O,"."),O.forEach(t),ae=h(e),d=n(e,"P",{});var K=m(d);Ce=s(K,`The only missing technology from my wishlist was Deno, because of my preference for TypeScript. My
first SSG attempt `),y=n(K,"A",{href:!0,rel:!0});var mt=m(y);Fe=s(mt,"deno-ssg-blog"),mt.forEach(t),Re=s(K,` used a library that
was still experimental, but now there is `),x=n(K,"A",{href:!0,rel:!0});var ft=m(x);Oe=s(ft,"Deno Fresh"),ft.forEach(t),Ke=s(K,`. It was too much
time to figure that out now when combining it with Svelte, so I will keep that for another
experiment.`),K.forEach(t),re=h(e),c=n(e,"P",{});var ke=m(c);Xe=s(ke,"For more information about the current stack, see the "),L=n(ke,"A",{href:!0});var ht=m(L);ze=s(ht,"about page"),ht.forEach(t),Je=s(ke,"."),ke.forEach(t),ne=h(e),P=n(e,"H1",{});var pt=m(P);Ne=s(pt,"Old themes"),pt.forEach(t),me=h(e),v=n(e,"P",{});var X=m(v);Ve=s(X,"Static versions of the 2 last themes still run "),E=n(X,"A",{href:!0,rel:!0});var ut=m(E);We=s(ut,"here (2013-2018)"),ut.forEach(t),Be=s(X,`
and `),G=n(X,"A",{href:!0,rel:!0});var wt=m(G);Qe=s(wt,"here (2010-2013)"),wt.forEach(t),Ue=s(X,"."),X.forEach(t),fe=h(e),q=n(e,"H2",{});var bt=m(q);Ye=s(bt,"Theme 2018-2023"),bt.forEach(t),he=h(e),W(I.$$.fragment,e),pe=h(e),H=n(e,"H2",{});var dt=m(H);Ze=s(dt,"Theme 2013-2018"),dt.forEach(t),ue=h(e),W(T.$$.fragment,e),we=h(e),C=n(e,"H2",{});var vt=m(C);et=s(vt,"Theme 2010-2013"),vt.forEach(t),be=h(e),W(j.$$.fragment,e),de=h(e),F=n(e,"H2",{});var St=m(F);tt=s(St,"Theme until 2010"),St.forEach(t),ve=h(e),W(M.$$.fragment,e),this.h()},h(){p(D,"href","https://github.com/mdvanes/mdworld-jackson"),p(k,"href","https://github.com/code-star/codestar-website-next"),p(k,"rel","nofollow"),p(_,"class","language-mdsvex"),p($,"href","https://github.com/mdvanes/mdworld-ross/blob/main/src/lib/components/Lightbox/Lightbox.svelte"),p($,"rel","nofollow"),p(y,"href","https://github.com/mdvanes/deno-ssg-blog"),p(y,"rel","nofollow"),p(x,"href","https://fresh.deno.dev/"),p(x,"rel","nofollow"),p(L,"href","../about"),p(E,"href","https://mdvanes.github.io/mdworld-ingram"),p(E,"rel","nofollow"),p(G,"href","https://mdvanes.github.io/mdworld-simon"),p(G,"rel","nofollow")},m(e,i){a(e,u,i),o(u,_e),o(u,D),o(D,ge),o(u,$e),a(e,ee,i),a(e,S,i),o(S,ye),o(S,k),o(k,xe),o(S,Ee),a(e,te,i),a(e,w,i),o(w,Ge),o(w,z),o(z,Ie),o(w,Te),o(w,J),o(J,je),o(w,Me),a(e,oe,i),a(e,_,i),_.innerHTML=kt,a(e,ie,i),a(e,A,i),o(A,De),a(e,le,i),B(g,e,i),a(e,se,i),a(e,b,i),o(b,Ae),o(b,N),o(N,Le),o(b,Pe),o(b,$),o($,qe),o(b,He),a(e,ae,i),a(e,d,i),o(d,Ce),o(d,y),o(y,Fe),o(d,Re),o(d,x),o(x,Oe),o(d,Ke),a(e,re,i),a(e,c,i),o(c,Xe),o(c,L),o(L,ze),o(c,Je),a(e,ne,i),a(e,P,i),o(P,Ne),a(e,me,i),a(e,v,i),o(v,Ve),o(v,E),o(E,We),o(v,Be),o(v,G),o(G,Qe),o(v,Ue),a(e,fe,i),a(e,q,i),o(q,Ye),a(e,he,i),B(I,e,i),a(e,pe,i),a(e,H,i),o(H,Ze),a(e,ue,i),B(T,e,i),a(e,we,i),a(e,C,i),o(C,et),a(e,be,i),B(j,e,i),a(e,de,i),a(e,F,i),o(F,tt),a(e,ve,i),B(M,e,i),Se=!0},p:xt,i(e){Se||(Q(g.$$.fragment,e),Q(I.$$.fragment,e),Q(T.$$.fragment,e),Q(j.$$.fragment,e),Q(M.$$.fragment,e),Se=!0)},o(e){U(g.$$.fragment,e),U(I.$$.fragment,e),U(T.$$.fragment,e),U(j.$$.fragment,e),U(M.$$.fragment,e),Se=!1},d(e){e&&t(u),e&&t(ee),e&&t(S),e&&t(te),e&&t(w),e&&t(oe),e&&t(_),e&&t(ie),e&&t(A),e&&t(le),Y(g,e),e&&t(se),e&&t(b),e&&t(ae),e&&t(d),e&&t(re),e&&t(c),e&&t(ne),e&&t(P),e&&t(me),e&&t(v),e&&t(fe),e&&t(q),e&&t(he),Y(I,e),e&&t(pe),e&&t(H),e&&t(ue),Y(T,e),e&&t(we),e&&t(C),e&&t(be),Y(j,e),e&&t(de),e&&t(F),e&&t(ve),Y(M,e)}}}const Tt={title:"Site Rebuild with Svelte",cover:"",date:"19-05-2023",category:"webdevelopment",tags:["webdevelopment"],preview:`I wanted to update the previous version of the blog (mdworld-jackson) built on SSG (Static Site Generation) with Gatsby.
It was several majors of Gatsby behind and contained several workarounds that would take a lot of time to figure out, so I took...`,previewHtml:"<p>I wanted to update the previous version of the blog (mdworld-jackson) built on SSG (Static Site Generation) with Gatsby. It was several majors of Gatsby behind and contained several workarounds that would take a lot of time to figure out, so I took i...</p>"};class jt extends gt{constructor(u){super(),$t(this,u,null,Et,yt,{})}}export{jt as default,Tt as metadata};
