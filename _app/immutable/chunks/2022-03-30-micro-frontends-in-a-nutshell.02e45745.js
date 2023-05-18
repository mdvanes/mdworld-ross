import{S as Nn,i as Cn,s as Sn,k as r,a as p,q as i,l as n,m as a,h as t,c as f,r as l,C as zt,n as d,b as m,D as o,U as Tn,u as $n,E as Dr,V as Hn,w as Rn,y as Bt,z as jt,W as Pn,A as Vt,g as Jt,d as qt,B as Yt}from"./index.0eacb17f.js";function Dn(y){let u,w,F,g,c,_,A,L,b,S,W,T,j,M,k,V,R;return{c(){u=r("button"),w=r("img"),g=p(),c=r("dialog"),_=r("div"),A=r("h1"),L=i(y[1]),b=p(),S=r("div"),W=r("button"),T=i("✕"),j=p(),M=r("img"),this.h()},l(h){u=n(h,"BUTTON",{class:!0});var v=a(u);w=n(v,"IMG",{src:!0,alt:!0}),v.forEach(t),g=f(h),c=n(h,"DIALOG",{class:!0});var $=a(c);_=n($,"DIV",{class:!0});var I=a(_);A=n(I,"H1",{});var D=a(A);L=l(D,y[1]),D.forEach(t),b=f(I),S=n(I,"DIV",{});var fe=a(S);W=n(fe,"BUTTON",{});var de=a(W);T=l(de,"✕"),de.forEach(t),fe.forEach(t),I.forEach(t),j=f($),M=n($,"IMG",{src:!0,alt:!0}),$.forEach(t),this.h()},h(){zt(w.src,F=y[0])||d(w,"src",F),d(w,"alt",y[1]),d(u,"class","lightbox"),d(_,"class","lightbox__dialog-header"),zt(M.src,k=y[0])||d(M,"src",k),d(M,"alt",y[1]),d(c,"class","lightbox__dialog")},m(h,v){m(h,u,v),o(u,w),m(h,g,v),m(h,c,v),o(c,_),o(_,A),o(A,L),o(_,b),o(_,S),o(S,W),o(W,T),o(c,j),o(c,M),y[5](c),V||(R=[Tn(u,"click",y[3]),Tn(W,"click",y[4])],V=!0)},p(h,[v]){v&1&&!zt(w.src,F=h[0])&&d(w,"src",F),v&2&&d(w,"alt",h[1]),v&2&&$n(L,h[1]),v&1&&!zt(M.src,k=h[0])&&d(M,"src",k),v&2&&d(M,"alt",h[1])},i:Dr,o:Dr,d(h){h&&t(u),h&&t(g),h&&t(c),y[5](null),V=!1,Hn(R)}}}function On(y,u,w){let{imgpath:F}=u,{imgtitle:g}=u,c;const _=()=>{c&&c.showModal()},A=()=>{c&&c.close()};function L(b){Rn[b?"unshift":"push"](()=>{c=b,w(2,c)})}return y.$$set=b=>{"imgpath"in b&&w(0,F=b.imgpath),"imgtitle"in b&&w(1,g=b.imgtitle)},[F,g,c,_,A,L]}class Xt extends Nn{constructor(u){super(),Cn(this,u,On,Dn,Sn,{imgpath:0,imgtitle:1})}}function Gn(y){let u,w,F,g,c,_,A,L,b,S,W,T,j,M,k,V,R,h,v,$,I,D,fe,de,at,O,Kt,Ve,Qt,Zt,it,ce,eo,lt,P,Je,to,oo,qe,ro,no,Ye,ao,st,G,io,Xe,lo,so,mt,U,mo,Ke,po,fo,pt,J,Qe,co,uo,ft,ue,ho,dt,E,he,bo,Ze,wo,vo,be,yo,et,go,_o,we,Mo,tt,Eo,ko,q,Fo,ot,Io,xo,Ao,ve,Lo,rt,Wo,ct,ye,To,ut,ge,Po,ht,_e,Me,bt,Y,wt,Ee,No,vt,X,yt,N,Co,K,So,$o,Q,Ho,Ro,gt,ke,Do,_t,Z,nt,Oo,Go,Mt,Fe,Uo,Et,Ie,zo,kt,xe,Bo,Ft,ee,It,Ae,jo,xt,Le,Vo,At,We,Jo,Lt,te,Wt,Te,qo,Tt,z,Yo,oe,Xo,Ko,Pt,Pe,Qo,Nt,Ne,Zo,Ct,x,Ce,er,re,tr,or,Se,rr,ne,nr,ar,$e,ir,H,He,lr,ae,sr,mr,Re,pr,ie,fr,dr,De,cr,le,ur,hr,Oe,br,se,Ge,wr,me,vr,yr,Ue,gr,pe,_r,St;return Y=new Xt({props:{imgpath:"/lightbox/mfe/page.svg",imgtitle:"Overview of a page"}}),X=new Xt({props:{imgpath:"/lightbox/mfe/web-components.svg",imgtitle:"Web Components"}}),ee=new Xt({props:{imgpath:"/lightbox/mfe/hyperlinks-and-monolith.svg",imgtitle:"Hyperlinks and Monolith"}}),te=new Xt({props:{imgpath:"/lightbox/mfe/module-federation.svg",imgtitle:"Module Federation"}}),{c(){u=r("p"),w=i("You may have heard of a Micro Frontends recently and felt it a bit difficult to grasp what exactly it is and if it is something you should get involved in. I’ll try to give a summary of the what, why, how, and when of the current state. To provide a high-over summary, I’ll also add some recommended reading if you would like to get more details."),F=p(),g=r("h2"),c=r("em"),_=i("Why"),A=i(" use Micro Frontends?"),L=p(),b=r("p"),S=i("Do you have a very large front-end code-base?"),W=p(),T=r("p"),j=i(`And by large, I’m talking about 50+ developers in a dozen of teams or more, probably cross-department, working on the same code-base in some manner.
Do you have enterprise-scale continuous integration with e.g. GitLab, Bamboo running so many pipelines that the bottleneck is no longer a matter of adding more pods?
Do you employ configuration managers or an Ops department to make sure deployments won’t affect each other too much?
Do you have considerable codebases in incompatible front-end stacks, e.g. because of a migration from AngularJS to Angular >2?`),M=p(),k=r("p"),V=i("Then chances are you need to use Micro Frontends. Or actually, you most probably are "),R=r("em"),h=i("already"),v=i(" using Micro Frontends."),$=p(),I=r("h2"),D=r("em"),fe=i("What"),de=i(" are Micro Frontends?"),at=p(),O=r("p"),Kt=i("How is it possible you would not know you are using Micro Frontends? And why are we just now hearing so much about them? The truth is that although the term is relatively new it actually covers "),Ve=r("strong"),Qt=i("any range of solutions to integrate a collection of smaller frontends into one application"),Zt=i("."),it=p(),ce=r("p"),eo=i("Similar to Micro Service architectures, Micro Frontends facilitate large codebases by breaking them up into manageable pieces. This means:"),lt=p(),P=r("ul"),Je=r("li"),to=i("Technological stack across Micro Frontends in the same application may differ"),oo=p(),qe=r("li"),ro=i("A Micro Frontend has a clear and concise purpose, following the SOLID principles"),no=p(),Ye=r("li"),ao=i("Teams of developers maintain one or more Micro Frontend that are isolated in runtime from the rest of the code"),st=p(),G=r("p"),io=i("The term is now popularized because of the advent of "),Xe=r("em"),lo=i("Module Federation"),so=i(" in Webpack 5. Webpack 5 has been released towards the end of 2020, but this new major release is taking some time to be integrated in relevant tooling, e.g. Nx and Ng CLI."),mt=p(),U=r("p"),mo=i("Note that Micro Frontends (MFEs) are sometimes also referred to as "),Ke=r("em"),po=i("Micro Apps"),fo=i("."),pt=p(),J=r("h2"),Qe=r("em"),co=i("How"),uo=i(" do you build Micro Frontends?"),ft=p(),ue=r("p"),ho=i("Since Micro Frontends as a concept are not new, some solutions that can be classified as Micro Frontends are ancient, considering the speed of development in the frontend ecosystem. Here are some of them, to give an idea of how broad Micro Frontends can be interpreted:"),dt=p(),E=r("ul"),he=r("li"),bo=i("Run several frontend applications on different URLs and cross refer them with plain "),Ze=r("strong"),wo=i("hyperlinks"),vo=p(),be=r("li"),yo=i("Run several frontend applications on different URLs on the same page in "),et=r("strong"),go=i("iframes"),_o=p(),we=r("li"),Mo=i("Develop frontend components in separate teams and integrate them at build time to be deployed as a "),tt=r("strong"),Eo=i("deployment monolith"),ko=p(),q=r("li"),Fo=i("Use macro "),ot=r("strong"),Io=i("Web Components"),xo=i(" as an abstraction layer for components"),Ao=p(),ve=r("li"),Lo=i("Develop frontend components in separate teams and integrate them at runtime with "),rt=r("strong"),Wo=i("Module Federation"),ct=p(),ye=r("p"),To=i("I won’t go into all the details about the pros and cons of each of these solutions. Instead I refer you to the recommended reading list below."),ut=p(),ge=r("p"),Po=i(`Note that solutions can be combined: you can have a deployment monolith (that expects components that are all using the same stack) but wrap components in Web Components to provide an abstraction layer and use different stacks to produce the Web Components. Additionally, you can use Web Components in combination with Module Federation for instance if you are migrating towards Module Federation as a Micro Frontends solution.
Consider this schematic representation of a web application:`),ht=p(),_e=r("p"),Me=r("simple-light-box"),bt=p(),Bt(Y.$$.fragment),wt=p(),Ee=r("p"),No=i("This could be implemented with different platforms like Angular and React by wrapping them in Web Components:"),vt=p(),Bt(X.$$.fragment),yt=p(),N=r("p"),Co=i("Module Federation is the newest solution and many libraries are still adapting to it. Last year, Nx 12 released with support for Webpack 5 and Module Federation. See a real working example here "),K=r("a"),So=i("https://code-star.github.io/nx-reference-shell/"),$o=i(" or its source in "),Q=r("a"),Ho=i("https://github.com/code-star/nx-reference"),Ro=i("."),gt=p(),ke=r("p"),Do=i("Because Micro Frontends break up a codebase into smaller, more manageable fragments, they are often mentioned in combination with Monorepo solutions like Nx or yarn/npm workspaces. However, it is perfectly possible to implement Micro Frontends without monorepos!"),_t=p(),Z=r("h2"),nt=r("em"),Oo=i("When"),Go=i(" to use Micro Frontends?"),Mt=p(),Fe=r("p"),Uo=i("New technology inspires developers to experiment, but Micro Frontends and with that Module Federation are not worth the upkeep for small to medium applications. All-in solutions like Next or Gatsby are great fits for smaller applications and custom Angular applications, when well organized, scale very well up to enterprise level."),Et=p(),Ie=r("p"),zo=i("However, no framework inherently supports older versions of itself. So if a big bang migration from AngularJS to Angular or any other framework for that matter, you’ll end up with some kind of Micro Frontends solution. Plenty of enterprise codebases currently use some combination of hyperlinks and deployment monoliths."),kt=p(),xe=r("p"),Bo=i("This could look like a bank that offers a set of public pages (e.g. the general home page, and the landing pages of its departments) referencing each other with hyperlinks and a protected monolith app with many components (e.g. checking account, subscriptions to bank products, investments on one page)."),Ft=p(),Bt(ee.$$.fragment),It=p(),Ae=r("p"),jo=i("Exploring Module Federation can be worth it if continuous integration is slowed down too much because of the large amounts of tests and compilation of all the involved components. But note that there are other approaches, such as using Nx monorepos with properly set up hierarchy and running only affected tests."),xt=p(),Le=r("p"),Vo=i("Another reason to use Module Federation can be the need to support multiple frameworks. Compared to Web Components, Module Federation improves the runtime isolation of components while simultaneously reducing isolation of shared dependencies to reduce the overall footprint of the application."),At=p(),We=r("p"),Jo=i("Compare to the diagram for the earlier example using macro Web Components, you can see that lodash, Angular and React are only loaded once, despite being used by multiple isolated components:"),Lt=p(),Bt(te.$$.fragment),Wt=p(),Te=r("h2"),qo=i("Want to know more?"),Tt=p(),z=r("p"),Yo=i("If you want to know more about Micro Frontends, Module Federation or Monorepos, you can contact met at "),oe=r("a"),Xo=i("@mdworldNL"),Ko=i(" on Twitter. We have experience with enterprise frontend at all the major banks and many governmental departments in the Netherlands."),Pt=p(),Pe=r("p"),Qo=i("When you want more background information as a developer, you can also read the articles provided below."),Nt=p(),Ne=r("h2"),Zo=i("Recommended in-depth reading"),Ct=p(),x=r("ul"),Ce=r("li"),er=i("Introduction to Micro Frontends: "),re=r("a"),tr=i("https://micro-frontends.org/"),or=p(),Se=r("li"),rr=i("Introduction to Micro Frontends: "),ne=r("a"),nr=i("https://martinfowler.com/articles/micro-frontends.html"),ar=p(),$e=r("li"),ir=i("Angular Architects"),H=r("ul"),He=r("li"),lr=i("Micro Frontends introduction: "),ae=r("a"),sr=i("https://www.angulararchitects.io/en/aktuelles/a-software-architects-approach-towards/"),mr=p(),Re=r("li"),pr=i("Micro Frontends series: "),ie=r("a"),fr=i("https://www.angulararchitects.io/en/aktuelles/micro-apps-with-web-components-using-angular-elements/"),dr=p(),De=r("li"),cr=i("Module Federation series: "),le=r("a"),ur=i("https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/"),hr=p(),Oe=r("li"),br=i("By my colleague Peter Eijgermans:"),se=r("ul"),Ge=r("li"),wr=i("Micro Frontends by Example: "),me=r("a"),vr=i("https://dzone.com/articles/micro-frontends-by-example-8"),yr=p(),Ue=r("li"),gr=i("(Video) Micro Frontends: The What, the Why and the How by Peter Eijgermans "),pe=r("a"),_r=i("https://youtu.be/TWcoziCdPkE"),this.h()},l(e){u=n(e,"P",{});var s=a(u);w=l(s,"You may have heard of a Micro Frontends recently and felt it a bit difficult to grasp what exactly it is and if it is something you should get involved in. I’ll try to give a summary of the what, why, how, and when of the current state. To provide a high-over summary, I’ll also add some recommended reading if you would like to get more details."),s.forEach(t),F=f(e),g=n(e,"H2",{});var Mr=a(g);c=n(Mr,"EM",{});var Or=a(c);_=l(Or,"Why"),Or.forEach(t),A=l(Mr," use Micro Frontends?"),Mr.forEach(t),L=f(e),b=n(e,"P",{});var Gr=a(b);S=l(Gr,"Do you have a very large front-end code-base?"),Gr.forEach(t),W=f(e),T=n(e,"P",{});var Ur=a(T);j=l(Ur,`And by large, I’m talking about 50+ developers in a dozen of teams or more, probably cross-department, working on the same code-base in some manner.
Do you have enterprise-scale continuous integration with e.g. GitLab, Bamboo running so many pipelines that the bottleneck is no longer a matter of adding more pods?
Do you employ configuration managers or an Ops department to make sure deployments won’t affect each other too much?
Do you have considerable codebases in incompatible front-end stacks, e.g. because of a migration from AngularJS to Angular >2?`),Ur.forEach(t),M=f(e),k=n(e,"P",{});var $t=a(k);V=l($t,"Then chances are you need to use Micro Frontends. Or actually, you most probably are "),R=n($t,"EM",{});var zr=a(R);h=l(zr,"already"),zr.forEach(t),v=l($t," using Micro Frontends."),$t.forEach(t),$=f(e),I=n(e,"H2",{});var Er=a(I);D=n(Er,"EM",{});var Br=a(D);fe=l(Br,"What"),Br.forEach(t),de=l(Er," are Micro Frontends?"),Er.forEach(t),at=f(e),O=n(e,"P",{});var Ht=a(O);Kt=l(Ht,"How is it possible you would not know you are using Micro Frontends? And why are we just now hearing so much about them? The truth is that although the term is relatively new it actually covers "),Ve=n(Ht,"STRONG",{});var jr=a(Ve);Qt=l(jr,"any range of solutions to integrate a collection of smaller frontends into one application"),jr.forEach(t),Zt=l(Ht,"."),Ht.forEach(t),it=f(e),ce=n(e,"P",{});var Vr=a(ce);eo=l(Vr,"Similar to Micro Service architectures, Micro Frontends facilitate large codebases by breaking them up into manageable pieces. This means:"),Vr.forEach(t),lt=f(e),P=n(e,"UL",{});var ze=a(P);Je=n(ze,"LI",{});var Jr=a(Je);to=l(Jr,"Technological stack across Micro Frontends in the same application may differ"),Jr.forEach(t),oo=f(ze),qe=n(ze,"LI",{});var qr=a(qe);ro=l(qr,"A Micro Frontend has a clear and concise purpose, following the SOLID principles"),qr.forEach(t),no=f(ze),Ye=n(ze,"LI",{});var Yr=a(Ye);ao=l(Yr,"Teams of developers maintain one or more Micro Frontend that are isolated in runtime from the rest of the code"),Yr.forEach(t),ze.forEach(t),st=f(e),G=n(e,"P",{});var Rt=a(G);io=l(Rt,"The term is now popularized because of the advent of "),Xe=n(Rt,"EM",{});var Xr=a(Xe);lo=l(Xr,"Module Federation"),Xr.forEach(t),so=l(Rt," in Webpack 5. Webpack 5 has been released towards the end of 2020, but this new major release is taking some time to be integrated in relevant tooling, e.g. Nx and Ng CLI."),Rt.forEach(t),mt=f(e),U=n(e,"P",{});var Dt=a(U);mo=l(Dt,"Note that Micro Frontends (MFEs) are sometimes also referred to as "),Ke=n(Dt,"EM",{});var Kr=a(Ke);po=l(Kr,"Micro Apps"),Kr.forEach(t),fo=l(Dt,"."),Dt.forEach(t),pt=f(e),J=n(e,"H2",{});var kr=a(J);Qe=n(kr,"EM",{});var Qr=a(Qe);co=l(Qr,"How"),Qr.forEach(t),uo=l(kr," do you build Micro Frontends?"),kr.forEach(t),ft=f(e),ue=n(e,"P",{});var Zr=a(ue);ho=l(Zr,"Since Micro Frontends as a concept are not new, some solutions that can be classified as Micro Frontends are ancient, considering the speed of development in the frontend ecosystem. Here are some of them, to give an idea of how broad Micro Frontends can be interpreted:"),Zr.forEach(t),dt=f(e),E=n(e,"UL",{});var C=a(E);he=n(C,"LI",{});var Fr=a(he);bo=l(Fr,"Run several frontend applications on different URLs and cross refer them with plain "),Ze=n(Fr,"STRONG",{});var en=a(Ze);wo=l(en,"hyperlinks"),en.forEach(t),Fr.forEach(t),vo=f(C),be=n(C,"LI",{});var Ir=a(be);yo=l(Ir,"Run several frontend applications on different URLs on the same page in "),et=n(Ir,"STRONG",{});var tn=a(et);go=l(tn,"iframes"),tn.forEach(t),Ir.forEach(t),_o=f(C),we=n(C,"LI",{});var xr=a(we);Mo=l(xr,"Develop frontend components in separate teams and integrate them at build time to be deployed as a "),tt=n(xr,"STRONG",{});var on=a(tt);Eo=l(on,"deployment monolith"),on.forEach(t),xr.forEach(t),ko=f(C),q=n(C,"LI",{});var Ot=a(q);Fo=l(Ot,"Use macro "),ot=n(Ot,"STRONG",{});var rn=a(ot);Io=l(rn,"Web Components"),rn.forEach(t),xo=l(Ot," as an abstraction layer for components"),Ot.forEach(t),Ao=f(C),ve=n(C,"LI",{});var Ar=a(ve);Lo=l(Ar,"Develop frontend components in separate teams and integrate them at runtime with "),rt=n(Ar,"STRONG",{});var nn=a(rt);Wo=l(nn,"Module Federation"),nn.forEach(t),Ar.forEach(t),C.forEach(t),ct=f(e),ye=n(e,"P",{});var an=a(ye);To=l(an,"I won’t go into all the details about the pros and cons of each of these solutions. Instead I refer you to the recommended reading list below."),an.forEach(t),ut=f(e),ge=n(e,"P",{});var ln=a(ge);Po=l(ln,`Note that solutions can be combined: you can have a deployment monolith (that expects components that are all using the same stack) but wrap components in Web Components to provide an abstraction layer and use different stacks to produce the Web Components. Additionally, you can use Web Components in combination with Module Federation for instance if you are migrating towards Module Federation as a Micro Frontends solution.
Consider this schematic representation of a web application:`),ln.forEach(t),ht=f(e),_e=n(e,"P",{});var sn=a(_e);Me=n(sn,"SIMPLE-LIGHT-BOX",{"img-path":!0,"img-title":!0}),a(Me).forEach(t),sn.forEach(t),bt=f(e),jt(Y.$$.fragment,e),wt=f(e),Ee=n(e,"P",{});var mn=a(Ee);No=l(mn,"This could be implemented with different platforms like Angular and React by wrapping them in Web Components:"),mn.forEach(t),vt=f(e),jt(X.$$.fragment,e),yt=f(e),N=n(e,"P",{});var Be=a(N);Co=l(Be,"Module Federation is the newest solution and many libraries are still adapting to it. Last year, Nx 12 released with support for Webpack 5 and Module Federation. See a real working example here "),K=n(Be,"A",{href:!0,rel:!0});var pn=a(K);So=l(pn,"https://code-star.github.io/nx-reference-shell/"),pn.forEach(t),$o=l(Be," or its source in "),Q=n(Be,"A",{href:!0,rel:!0});var fn=a(Q);Ho=l(fn,"https://github.com/code-star/nx-reference"),fn.forEach(t),Ro=l(Be,"."),Be.forEach(t),gt=f(e),ke=n(e,"P",{});var dn=a(ke);Do=l(dn,"Because Micro Frontends break up a codebase into smaller, more manageable fragments, they are often mentioned in combination with Monorepo solutions like Nx or yarn/npm workspaces. However, it is perfectly possible to implement Micro Frontends without monorepos!"),dn.forEach(t),_t=f(e),Z=n(e,"H2",{});var Lr=a(Z);nt=n(Lr,"EM",{});var cn=a(nt);Oo=l(cn,"When"),cn.forEach(t),Go=l(Lr," to use Micro Frontends?"),Lr.forEach(t),Mt=f(e),Fe=n(e,"P",{});var un=a(Fe);Uo=l(un,"New technology inspires developers to experiment, but Micro Frontends and with that Module Federation are not worth the upkeep for small to medium applications. All-in solutions like Next or Gatsby are great fits for smaller applications and custom Angular applications, when well organized, scale very well up to enterprise level."),un.forEach(t),Et=f(e),Ie=n(e,"P",{});var hn=a(Ie);zo=l(hn,"However, no framework inherently supports older versions of itself. So if a big bang migration from AngularJS to Angular or any other framework for that matter, you’ll end up with some kind of Micro Frontends solution. Plenty of enterprise codebases currently use some combination of hyperlinks and deployment monoliths."),hn.forEach(t),kt=f(e),xe=n(e,"P",{});var bn=a(xe);Bo=l(bn,"This could look like a bank that offers a set of public pages (e.g. the general home page, and the landing pages of its departments) referencing each other with hyperlinks and a protected monolith app with many components (e.g. checking account, subscriptions to bank products, investments on one page)."),bn.forEach(t),Ft=f(e),jt(ee.$$.fragment,e),It=f(e),Ae=n(e,"P",{});var wn=a(Ae);jo=l(wn,"Exploring Module Federation can be worth it if continuous integration is slowed down too much because of the large amounts of tests and compilation of all the involved components. But note that there are other approaches, such as using Nx monorepos with properly set up hierarchy and running only affected tests."),wn.forEach(t),xt=f(e),Le=n(e,"P",{});var vn=a(Le);Vo=l(vn,"Another reason to use Module Federation can be the need to support multiple frameworks. Compared to Web Components, Module Federation improves the runtime isolation of components while simultaneously reducing isolation of shared dependencies to reduce the overall footprint of the application."),vn.forEach(t),At=f(e),We=n(e,"P",{});var yn=a(We);Jo=l(yn,"Compare to the diagram for the earlier example using macro Web Components, you can see that lodash, Angular and React are only loaded once, despite being used by multiple isolated components:"),yn.forEach(t),Lt=f(e),jt(te.$$.fragment,e),Wt=f(e),Te=n(e,"H2",{});var gn=a(Te);qo=l(gn,"Want to know more?"),gn.forEach(t),Tt=f(e),z=n(e,"P",{});var Gt=a(z);Yo=l(Gt,"If you want to know more about Micro Frontends, Module Federation or Monorepos, you can contact met at "),oe=n(Gt,"A",{href:!0,rel:!0});var _n=a(oe);Xo=l(_n,"@mdworldNL"),_n.forEach(t),Ko=l(Gt," on Twitter. We have experience with enterprise frontend at all the major banks and many governmental departments in the Netherlands."),Gt.forEach(t),Pt=f(e),Pe=n(e,"P",{});var Mn=a(Pe);Qo=l(Mn,"When you want more background information as a developer, you can also read the articles provided below."),Mn.forEach(t),Nt=f(e),Ne=n(e,"H2",{});var En=a(Ne);Zo=l(En,"Recommended in-depth reading"),En.forEach(t),Ct=f(e),x=n(e,"UL",{});var B=a(x);Ce=n(B,"LI",{});var Wr=a(Ce);er=l(Wr,"Introduction to Micro Frontends: "),re=n(Wr,"A",{href:!0,rel:!0});var kn=a(re);tr=l(kn,"https://micro-frontends.org/"),kn.forEach(t),Wr.forEach(t),or=f(B),Se=n(B,"LI",{});var Tr=a(Se);rr=l(Tr,"Introduction to Micro Frontends: "),ne=n(Tr,"A",{href:!0,rel:!0});var Fn=a(ne);nr=l(Fn,"https://martinfowler.com/articles/micro-frontends.html"),Fn.forEach(t),Tr.forEach(t),ar=f(B),$e=n(B,"LI",{});var Pr=a($e);ir=l(Pr,"Angular Architects"),H=n(Pr,"UL",{});var je=a(H);He=n(je,"LI",{});var Nr=a(He);lr=l(Nr,"Micro Frontends introduction: "),ae=n(Nr,"A",{href:!0,rel:!0});var In=a(ae);sr=l(In,"https://www.angulararchitects.io/en/aktuelles/a-software-architects-approach-towards/"),In.forEach(t),Nr.forEach(t),mr=f(je),Re=n(je,"LI",{});var Cr=a(Re);pr=l(Cr,"Micro Frontends series: "),ie=n(Cr,"A",{href:!0,rel:!0});var xn=a(ie);fr=l(xn,"https://www.angulararchitects.io/en/aktuelles/micro-apps-with-web-components-using-angular-elements/"),xn.forEach(t),Cr.forEach(t),dr=f(je),De=n(je,"LI",{});var Sr=a(De);cr=l(Sr,"Module Federation series: "),le=n(Sr,"A",{href:!0,rel:!0});var An=a(le);ur=l(An,"https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/"),An.forEach(t),Sr.forEach(t),je.forEach(t),Pr.forEach(t),hr=f(B),Oe=n(B,"LI",{});var $r=a(Oe);br=l($r,"By my colleague Peter Eijgermans:"),se=n($r,"UL",{});var Ut=a(se);Ge=n(Ut,"LI",{});var Hr=a(Ge);wr=l(Hr,"Micro Frontends by Example: "),me=n(Hr,"A",{href:!0,rel:!0});var Ln=a(me);vr=l(Ln,"https://dzone.com/articles/micro-frontends-by-example-8"),Ln.forEach(t),Hr.forEach(t),yr=f(Ut),Ue=n(Ut,"LI",{});var Rr=a(Ue);gr=l(Rr,"(Video) Micro Frontends: The What, the Why and the How by Peter Eijgermans "),pe=n(Rr,"A",{href:!0,rel:!0});var Wn=a(pe);_r=l(Wn,"https://youtu.be/TWcoziCdPkE"),Wn.forEach(t),Rr.forEach(t),Ut.forEach(t),$r.forEach(t),B.forEach(t),this.h()},h(){Pn(Me,"img-path","/lightbox/mfe/page.svg"),Pn(Me,"img-title","Overview of a page"),d(K,"href","https://code-star.github.io/nx-reference-shell/"),d(K,"rel","nofollow"),d(Q,"href","https://github.com/code-star/nx-reference"),d(Q,"rel","nofollow"),d(oe,"href","https://twitter.com/mdworldNL"),d(oe,"rel","nofollow"),d(re,"href","https://micro-frontends.org/"),d(re,"rel","nofollow"),d(ne,"href","https://martinfowler.com/articles/micro-frontends.html"),d(ne,"rel","nofollow"),d(ae,"href","https://www.angulararchitects.io/en/aktuelles/a-software-architects-approach-towards/"),d(ae,"rel","nofollow"),d(ie,"href","https://www.angulararchitects.io/en/aktuelles/micro-apps-with-web-components-using-angular-elements/"),d(ie,"rel","nofollow"),d(le,"href","https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/"),d(le,"rel","nofollow"),d(me,"href","https://dzone.com/articles/micro-frontends-by-example-8"),d(me,"rel","nofollow"),d(pe,"href","https://youtu.be/TWcoziCdPkE"),d(pe,"rel","nofollow")},m(e,s){m(e,u,s),o(u,w),m(e,F,s),m(e,g,s),o(g,c),o(c,_),o(g,A),m(e,L,s),m(e,b,s),o(b,S),m(e,W,s),m(e,T,s),o(T,j),m(e,M,s),m(e,k,s),o(k,V),o(k,R),o(R,h),o(k,v),m(e,$,s),m(e,I,s),o(I,D),o(D,fe),o(I,de),m(e,at,s),m(e,O,s),o(O,Kt),o(O,Ve),o(Ve,Qt),o(O,Zt),m(e,it,s),m(e,ce,s),o(ce,eo),m(e,lt,s),m(e,P,s),o(P,Je),o(Je,to),o(P,oo),o(P,qe),o(qe,ro),o(P,no),o(P,Ye),o(Ye,ao),m(e,st,s),m(e,G,s),o(G,io),o(G,Xe),o(Xe,lo),o(G,so),m(e,mt,s),m(e,U,s),o(U,mo),o(U,Ke),o(Ke,po),o(U,fo),m(e,pt,s),m(e,J,s),o(J,Qe),o(Qe,co),o(J,uo),m(e,ft,s),m(e,ue,s),o(ue,ho),m(e,dt,s),m(e,E,s),o(E,he),o(he,bo),o(he,Ze),o(Ze,wo),o(E,vo),o(E,be),o(be,yo),o(be,et),o(et,go),o(E,_o),o(E,we),o(we,Mo),o(we,tt),o(tt,Eo),o(E,ko),o(E,q),o(q,Fo),o(q,ot),o(ot,Io),o(q,xo),o(E,Ao),o(E,ve),o(ve,Lo),o(ve,rt),o(rt,Wo),m(e,ct,s),m(e,ye,s),o(ye,To),m(e,ut,s),m(e,ge,s),o(ge,Po),m(e,ht,s),m(e,_e,s),o(_e,Me),m(e,bt,s),Vt(Y,e,s),m(e,wt,s),m(e,Ee,s),o(Ee,No),m(e,vt,s),Vt(X,e,s),m(e,yt,s),m(e,N,s),o(N,Co),o(N,K),o(K,So),o(N,$o),o(N,Q),o(Q,Ho),o(N,Ro),m(e,gt,s),m(e,ke,s),o(ke,Do),m(e,_t,s),m(e,Z,s),o(Z,nt),o(nt,Oo),o(Z,Go),m(e,Mt,s),m(e,Fe,s),o(Fe,Uo),m(e,Et,s),m(e,Ie,s),o(Ie,zo),m(e,kt,s),m(e,xe,s),o(xe,Bo),m(e,Ft,s),Vt(ee,e,s),m(e,It,s),m(e,Ae,s),o(Ae,jo),m(e,xt,s),m(e,Le,s),o(Le,Vo),m(e,At,s),m(e,We,s),o(We,Jo),m(e,Lt,s),Vt(te,e,s),m(e,Wt,s),m(e,Te,s),o(Te,qo),m(e,Tt,s),m(e,z,s),o(z,Yo),o(z,oe),o(oe,Xo),o(z,Ko),m(e,Pt,s),m(e,Pe,s),o(Pe,Qo),m(e,Nt,s),m(e,Ne,s),o(Ne,Zo),m(e,Ct,s),m(e,x,s),o(x,Ce),o(Ce,er),o(Ce,re),o(re,tr),o(x,or),o(x,Se),o(Se,rr),o(Se,ne),o(ne,nr),o(x,ar),o(x,$e),o($e,ir),o($e,H),o(H,He),o(He,lr),o(He,ae),o(ae,sr),o(H,mr),o(H,Re),o(Re,pr),o(Re,ie),o(ie,fr),o(H,dr),o(H,De),o(De,cr),o(De,le),o(le,ur),o(x,hr),o(x,Oe),o(Oe,br),o(Oe,se),o(se,Ge),o(Ge,wr),o(Ge,me),o(me,vr),o(se,yr),o(se,Ue),o(Ue,gr),o(Ue,pe),o(pe,_r),St=!0},p:Dr,i(e){St||(Jt(Y.$$.fragment,e),Jt(X.$$.fragment,e),Jt(ee.$$.fragment,e),Jt(te.$$.fragment,e),St=!0)},o(e){qt(Y.$$.fragment,e),qt(X.$$.fragment,e),qt(ee.$$.fragment,e),qt(te.$$.fragment,e),St=!1},d(e){e&&t(u),e&&t(F),e&&t(g),e&&t(L),e&&t(b),e&&t(W),e&&t(T),e&&t(M),e&&t(k),e&&t($),e&&t(I),e&&t(at),e&&t(O),e&&t(it),e&&t(ce),e&&t(lt),e&&t(P),e&&t(st),e&&t(G),e&&t(mt),e&&t(U),e&&t(pt),e&&t(J),e&&t(ft),e&&t(ue),e&&t(dt),e&&t(E),e&&t(ct),e&&t(ye),e&&t(ut),e&&t(ge),e&&t(ht),e&&t(_e),e&&t(bt),Yt(Y,e),e&&t(wt),e&&t(Ee),e&&t(vt),Yt(X,e),e&&t(yt),e&&t(N),e&&t(gt),e&&t(ke),e&&t(_t),e&&t(Z),e&&t(Mt),e&&t(Fe),e&&t(Et),e&&t(Ie),e&&t(kt),e&&t(xe),e&&t(Ft),Yt(ee,e),e&&t(It),e&&t(Ae),e&&t(xt),e&&t(Le),e&&t(At),e&&t(We),e&&t(Lt),Yt(te,e),e&&t(Wt),e&&t(Te),e&&t(Tt),e&&t(z),e&&t(Pt),e&&t(Pe),e&&t(Nt),e&&t(Ne),e&&t(Ct),e&&t(x)}}}const zn={title:"Micro Frontends In A Nutshell",cover:"",date:"30-03-2022",category:"webdevelopment",tags:["webdevelopment"]};class Bn extends Nn{constructor(u){super(),Cn(this,u,null,Gn,Sn,{})}}export{Bn as default,zn as metadata};