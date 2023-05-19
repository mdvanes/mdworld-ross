import{S as ws,i as gs,s as vs,k as c,q as t,a as k,l,m as i,r as o,h as s,c as m,n as u,b as e,D as a,E as Gn}from"./index.ce9a7868.js";function bs(cs){let d,ln,_,un,rn,$,f,kn,E,mn,fn,A,dn,hn,O,yn,wn,z,y,gn,T,vn,bn,G,j,ls=`<code class="language-javascript"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'banana'</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">case</span> <span class="token string">'apple'</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'First'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'banana'</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Second'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'coconut'</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Third'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Last'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">// Logs "Second"</span></code>`,K,w,xn,J,_n,En,Q,C,is=`<code class="language-javascript"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token function-variable function">apple</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'First'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">banana</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Second'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">coconut</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Third'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'banana'</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>actions<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    actions<span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Last'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">// Logs "Second"</span></code>`,U,q,An,V,L,us=`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr<span class="token punctuation">,</span> mapping</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>stderr <span class="token operator">&amp;&amp;</span> stderr<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stderr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'A problem occurred'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not found'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>error <span class="token operator">||</span> <span class="token punctuation">(</span>stderr <span class="token operator">&amp;&amp;</span> stderr<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Execution error </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token punctuation">[</span>error<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'|'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>mapping<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Invalid configuration </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token punctuation">[</span>error<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr<span class="token punctuation">,</span> mapping<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'|'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>stdout <span class="token operator">||</span> stdout<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No output'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Result from some process with mapping and stdout'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">'A problem occurred'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Not found"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Execution error Error||"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Invalid configuration |||"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "No output"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">'Foo'</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Result from some process with mapping and stdout"</span></code>`,W,D,jn,X,S,rs=`<code class="language-javascript"><span class="token comment">// First part</span>
  <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span>
    <span class="token function-variable function">condition</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> <span class="token operator">!</span>stdout <span class="token operator">||</span> stdout<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No result'</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token function-variable function">condition</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> <span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>mapping<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Config invalid'</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token function-variable function">condition</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> error <span class="token operator">||</span> <span class="token punctuation">(</span>stderr <span class="token operator">&amp;&amp;</span> stderr<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Error executing'</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    <span class="token function-variable function">condition</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> stderr <span class="token operator">&amp;&amp;</span> stderr<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stderr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'A problem occurred'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Not found'</span><span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">]</span></code>`,Y,r,Cn,I,Ln,Sn,P,Pn,Rn,N,Fn,qn,H,Dn,On,Z,R,ks=`<code class="language-javascript"><span class="token comment">// Second part</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> stdout<span class="token punctuation">,</span> stderr<span class="token punctuation">,</span> mapping</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token operator">...</span> <span class="token comment">// See above</span>

  <span class="token keyword">const</span> selectedAction <span class="token operator">=</span> actions
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">action</span> <span class="token operator">=></span> action<span class="token punctuation">.</span><span class="token function">condition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulated<span class="token punctuation">,</span> currentAction</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// By design, reduce will only keep the last match when the accumulator </span>
      <span class="token comment">// is ignored, so the order inside the actions array has significance.</span>
      <span class="token keyword">return</span> currentAction<span class="token punctuation">.</span>action<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token comment">// Else clause</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Result from some process with mapping and stdout'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">selectedAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'A problem occurred'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Not found"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Error executing"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Config invalid"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "No result"</span>
<span class="token function">example</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'Foo'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Logs "Result from some process with mapping and stdout"</span></code>`,nn,g,Tn,F,Jn,In,sn,v,Nn,B,Hn,Bn,an,b,Mn,M,$n,zn;return{c(){d=c("p"),ln=t("Reducing the cyclomatic complexity in a JavaScript application is a good, "),_=c("a"),un=t("quantifiable"),rn=t(`
way to make code more readable and maintainable.`),$=k(),f=c("p"),kn=t(`Cyclomatic complexity increases as more control statements are used. For a summary of the factors that influence complexity,
see `),E=c("a"),mn=t("“Complexity for JavaScript”"),fn=t(`. Because
it is quantifiable, it can be automatically validated in build setups with `),A=c("a"),dn=t("eslint"),hn=t(`.
Bear in mind that a single `),O=c("code"),yn=t("switch"),wn=t(` statement with a large amount of options will have a high cyclomatic complexity but
probably is still perfectly readable. As always, rely on common sense when refactoring.`),z=k(),y=c("p"),gn=t("Control statements that concern one parameter often use "),T=c("code"),vn=t("switch"),bn=t(", for example:"),G=k(),j=c("pre"),K=k(),w=c("p"),xn=t("A very common way to reduce the cyclomatic complexity with "),J=c("code"),_n=t("switch"),En=t(` is to use a JavaScript object as a map. Instead of
traversing the switch statement, do a lookup in the map where the key is the condition and the value is the action. For the
example above this could look like this:`),Q=k(),C=c("pre"),U=k(),q=c("p"),An=t(`This does not work directly with more complex conditions. e.g. a composite condition that checks against multiple parameters
within one statement or between statements.`),V=k(),L=c("pre"),W=k(),D=c("p"),jn=t("In this case a JavaScript Array of objects can be used here, with one property holding the condition and another holding the desired action."),X=k(),S=c("pre"),Y=k(),r=c("p"),Cn=t("It would be possible to loop over each entry with a "),I=c("code"),Ln=t("for"),Sn=t(" loop or an "),P=c("a"),Pn=t("iterator (see an example)"),Rn=t(`, but this is where the expressiveness of
the functional operators `),N=c("code"),Fn=t("Array.prototype.filter"),qn=t(" and "),H=c("code"),Dn=t("Array.prototype.reduce"),On=t(" shines."),Z=k(),R=c("pre"),nn=k(),g=c("p"),Tn=t("A working example can be found in "),F=c("a"),Jn=t("this fiddle"),In=t("."),sn=k(),v=c("p"),Nn=t("This shows how to use functional operators to reduce cyclomatic complexity for an "),B=c("code"),Hn=t("if else"),Bn=t(` condition. Do keep in mind
it may not be beneficial for performance. For instance, do not declare the action array inside of the function as in
the example, as it would redeclare the array each time the function is executed. Another improvement would be to stop
iteration in filter/reduce
as soon as a matching action was found.`),an=k(),b=c("p"),Mn=t("Also note that the example with the "),M=c("code"),$n=t("if else"),zn=t(` condition itself is quite readable, so it will not be worth the trade off of
refactoring to resolution through an array of objects in this case.`),this.h()},l(n){d=l(n,"P",{});var p=i(d);ln=o(p,"Reducing the cyclomatic complexity in a JavaScript application is a good, "),_=l(p,"A",{href:!0,rel:!0});var Kn=i(_);un=o(Kn,"quantifiable"),Kn.forEach(s),rn=o(p,`
way to make code more readable and maintainable.`),p.forEach(s),$=m(n),f=l(n,"P",{});var x=i(f);kn=o(x,`Cyclomatic complexity increases as more control statements are used. For a summary of the factors that influence complexity,
see `),E=l(x,"A",{href:!0,rel:!0});var Qn=i(E);mn=o(Qn,"“Complexity for JavaScript”"),Qn.forEach(s),fn=o(x,`. Because
it is quantifiable, it can be automatically validated in build setups with `),A=l(x,"A",{href:!0,rel:!0});var Un=i(A);dn=o(Un,"eslint"),Un.forEach(s),hn=o(x,`.
Bear in mind that a single `),O=l(x,"CODE",{});var Vn=i(O);yn=o(Vn,"switch"),Vn.forEach(s),wn=o(x,` statement with a large amount of options will have a high cyclomatic complexity but
probably is still perfectly readable. As always, rely on common sense when refactoring.`),x.forEach(s),z=m(n),y=l(n,"P",{});var tn=i(y);gn=o(tn,"Control statements that concern one parameter often use "),T=l(tn,"CODE",{});var Wn=i(T);vn=o(Wn,"switch"),Wn.forEach(s),bn=o(tn,", for example:"),tn.forEach(s),G=m(n),j=l(n,"PRE",{class:!0});var ms=i(j);ms.forEach(s),K=m(n),w=l(n,"P",{});var on=i(w);xn=o(on,"A very common way to reduce the cyclomatic complexity with "),J=l(on,"CODE",{});var Xn=i(J);_n=o(Xn,"switch"),Xn.forEach(s),En=o(on,` is to use a JavaScript object as a map. Instead of
traversing the switch statement, do a lookup in the map where the key is the condition and the value is the action. For the
example above this could look like this:`),on.forEach(s),Q=m(n),C=l(n,"PRE",{class:!0});var fs=i(C);fs.forEach(s),U=m(n),q=l(n,"P",{});var Yn=i(q);An=o(Yn,`This does not work directly with more complex conditions. e.g. a composite condition that checks against multiple parameters
within one statement or between statements.`),Yn.forEach(s),V=m(n),L=l(n,"PRE",{class:!0});var ds=i(L);ds.forEach(s),W=m(n),D=l(n,"P",{});var Zn=i(D);jn=o(Zn,"In this case a JavaScript Array of objects can be used here, with one property holding the condition and another holding the desired action."),Zn.forEach(s),X=m(n),S=l(n,"PRE",{class:!0});var hs=i(S);hs.forEach(s),Y=m(n),r=l(n,"P",{});var h=i(r);Cn=o(h,"It would be possible to loop over each entry with a "),I=l(h,"CODE",{});var ns=i(I);Ln=o(ns,"for"),ns.forEach(s),Sn=o(h," loop or an "),P=l(h,"A",{href:!0,rel:!0});var ss=i(P);Pn=o(ss,"iterator (see an example)"),ss.forEach(s),Rn=o(h,`, but this is where the expressiveness of
the functional operators `),N=l(h,"CODE",{});var as=i(N);Fn=o(as,"Array.prototype.filter"),as.forEach(s),qn=o(h," and "),H=l(h,"CODE",{});var ts=i(H);Dn=o(ts,"Array.prototype.reduce"),ts.forEach(s),On=o(h," shines."),h.forEach(s),Z=m(n),R=l(n,"PRE",{class:!0});var ys=i(R);ys.forEach(s),nn=m(n),g=l(n,"P",{});var pn=i(g);Tn=o(pn,"A working example can be found in "),F=l(pn,"A",{href:!0,rel:!0});var os=i(F);Jn=o(os,"this fiddle"),os.forEach(s),In=o(pn,"."),pn.forEach(s),sn=m(n),v=l(n,"P",{});var en=i(v);Nn=o(en,"This shows how to use functional operators to reduce cyclomatic complexity for an "),B=l(en,"CODE",{});var ps=i(B);Hn=o(ps,"if else"),ps.forEach(s),Bn=o(en,` condition. Do keep in mind
it may not be beneficial for performance. For instance, do not declare the action array inside of the function as in
the example, as it would redeclare the array each time the function is executed. Another improvement would be to stop
iteration in filter/reduce
as soon as a matching action was found.`),en.forEach(s),an=m(n),b=l(n,"P",{});var cn=i(b);Mn=o(cn,"Also note that the example with the "),M=l(cn,"CODE",{});var es=i(M);$n=o(es,"if else"),es.forEach(s),zn=o(cn,` condition itself is quite readable, so it will not be worth the trade off of
refactoring to resolution through an array of objects in this case.`),cn.forEach(s),this.h()},h(){u(_,"href","https://eslint.org/docs/rules/complexity"),u(_,"rel","nofollow"),u(E,"href","https://craftsmanshipforsoftware.com/2015/05/25/complexity-for-javascript/"),u(E,"rel","nofollow"),u(A,"href","https://eslint.org/docs/rules/complexity"),u(A,"rel","nofollow"),u(j,"class","language-javascript"),u(C,"class","language-javascript"),u(L,"class","language-javascript"),u(S,"class","language-javascript"),u(P,"href","http://webuniverse.io/cyclomatic-complexity-refactoring-tips/"),u(P,"rel","nofollow"),u(R,"class","language-javascript"),u(F,"href","https://jsfiddle.net/mdvanes/367q8p35/"),u(F,"rel","nofollow")},m(n,p){e(n,d,p),a(d,ln),a(d,_),a(_,un),a(d,rn),e(n,$,p),e(n,f,p),a(f,kn),a(f,E),a(E,mn),a(f,fn),a(f,A),a(A,dn),a(f,hn),a(f,O),a(O,yn),a(f,wn),e(n,z,p),e(n,y,p),a(y,gn),a(y,T),a(T,vn),a(y,bn),e(n,G,p),e(n,j,p),j.innerHTML=ls,e(n,K,p),e(n,w,p),a(w,xn),a(w,J),a(J,_n),a(w,En),e(n,Q,p),e(n,C,p),C.innerHTML=is,e(n,U,p),e(n,q,p),a(q,An),e(n,V,p),e(n,L,p),L.innerHTML=us,e(n,W,p),e(n,D,p),a(D,jn),e(n,X,p),e(n,S,p),S.innerHTML=rs,e(n,Y,p),e(n,r,p),a(r,Cn),a(r,I),a(I,Ln),a(r,Sn),a(r,P),a(P,Pn),a(r,Rn),a(r,N),a(N,Fn),a(r,qn),a(r,H),a(H,Dn),a(r,On),e(n,Z,p),e(n,R,p),R.innerHTML=ks,e(n,nn,p),e(n,g,p),a(g,Tn),a(g,F),a(F,Jn),a(g,In),e(n,sn,p),e(n,v,p),a(v,Nn),a(v,B),a(B,Hn),a(v,Bn),e(n,an,p),e(n,b,p),a(b,Mn),a(b,M),a(M,$n),a(b,zn)},p:Gn,i:Gn,o:Gn,d(n){n&&s(d),n&&s($),n&&s(f),n&&s(z),n&&s(y),n&&s(G),n&&s(j),n&&s(K),n&&s(w),n&&s(Q),n&&s(C),n&&s(U),n&&s(q),n&&s(V),n&&s(L),n&&s(W),n&&s(D),n&&s(X),n&&s(S),n&&s(Y),n&&s(r),n&&s(Z),n&&s(R),n&&s(nn),n&&s(g),n&&s(sn),n&&s(v),n&&s(an),n&&s(b)}}}const _s={title:"Reducing cyclomatic complexity with functional operators",cover:"https://picsum.photos/800/600?image=1",date:"02-10-2017",category:"webdevelopment",tags:["webdevelopment"],preview:`Reducing the cyclomatic complexity in a JavaScript application is a good, quantifiable 
way to make code more readable and maintainable.

Cyclomatic complexity increases as more control statements are used. For a summary of the factors that...`,previewHtml:'<p>Reducing the cyclomatic complexity in a JavaScript application is a good, <a href="https://eslint.org/docs/rules/complexity" rel="nofollow">quantifiable</a> way to make code more readable and maintainable.</p> <p>Cyclomatic complexity increases as more control statements are used. For a summary of the factors that influence c...</p>'};class Es extends ws{constructor(d){super(),gs(this,d,null,bs,vs,{})}}export{Es as default,_s as metadata};
