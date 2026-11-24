(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const _t='<a class="back-link" href="#">← Back to my task</a>',Xt=[{id:"rescue-title",label:"Stuck right now?"},{id:"strategies-title",label:"10 strategies"},{id:"why-title",label:"Why it matters"}],Oe=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],Ne=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]],Ce=[["😮‍💨","More stress, later","Studies of students found procrastinators felt less stressed early in a term but far more stressed, and got sick more often, as deadlines hit. The stress isn't avoided, just postponed and concentrated."],["🩺","Health slips too","Chronic procrastination is linked to worse sleep, less exercise, and putting off medical checkups: small delays in the things that keep you well."],["📉","Rushed work, lower quality","Last-minute work leaves no room to review, ask questions, or fix mistakes. “I work better under pressure” usually means “pressure is the only thing that gets me started.”"],["🔁","It compounds","One delayed task squeezes the next one. A missed reply becomes an awkward follow-up; a late bill becomes a fee. Small delays snowball into bigger problems."],["🤝","Eroded self-trust","Every broken promise to yourself teaches you that your plans don't count. Over time that makes it harder to believe “I'll do it tomorrow,” even when you mean it."],["🧭","Lost opportunities","Applications not sent, ideas never started, conversations not had. The biggest cost is often the things that never happen at all."]],Fe=`
  <svg class="loop-svg" viewBox="0 0 360 250" role="img"
    aria-label="A loop: the task feels bad; you avoid it and feel relief; pressure and guilt build up; the task feels even worse; and around again.">
    <defs>
      <marker id="loop-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" class="loop-arrowhead"/>
      </marker>
    </defs>
    <path class="loop-arrow" d="M232 40 Q300 50 305 95" marker-end="url(#loop-arrowhead)"/>
    <path class="loop-arrow" d="M300 150 Q290 200 235 210" marker-end="url(#loop-arrowhead)"/>
    <path class="loop-arrow" d="M125 210 Q70 200 60 150" marker-end="url(#loop-arrowhead)"/>
    <path class="loop-arrow" d="M55 95 Q60 50 128 40" marker-end="url(#loop-arrowhead)"/>
    <rect class="loop-node" x="128" y="18" width="104" height="40" rx="20"/>
    <text x="180" y="42" text-anchor="middle">Task feels bad</text>
    <rect class="loop-node calm" x="250" y="100" width="104" height="44" rx="20"/>
    <text x="302" y="126" text-anchor="middle">Avoid → relief</text>
    <rect class="loop-node hot" x="118" y="190" width="124" height="44" rx="20"/>
    <text x="180" y="216" text-anchor="middle">Pressure + guilt</text>
    <rect class="loop-node hot" x="6" y="100" width="104" height="44" rx="20"/>
    <text x="58" y="119" text-anchor="middle">Task feels</text>
    <text x="58" y="134" text-anchor="middle">even worse</text>
  </svg>`,_e=`
  <section class="card why" aria-labelledby="why-title">
    <p class="eyebrow">Understand it</p>
    <h3 id="why-title" class="jump-target" tabindex="-1">Why it matters</h3>
    <p class="muted">Putting things off feels harmless in the moment; that's exactly what makes it tricky. The cost doesn't arrive when you delay; it arrives later, with interest. Knowing how the trap works makes it much easier to step around.</p>

    <h4>The relief trap</h4>
    ${Fe}
    <p><strong>Procrastination is mostly about feelings, not time management.</strong> A task stirs up something unpleasant (boredom, confusion, fear of doing it badly) and avoiding it makes that feeling go away instantly. Your brain learns that avoidance “works.”</p>
    <p>But the relief is borrowed. The task is still there, now with less time and more guilt attached, so it feels even harder to start next time. Each lap around the loop makes it tighter.</p>
    <p><strong>The good news:</strong> because it's a loop, breaking it at <em>any</em> point helps, and the easiest point is usually just making the start smaller.</p>

    <h4>What it quietly costs you</h4>
    <p class="muted">None of these show up on the day you delay. They pile up in the background.</p>
    <ul class="costs">
      ${Ce.map(([t,e,n])=>`
        <li class="cost">
          <span class="cost-icon" aria-hidden="true">${t}</span>
          <strong class="cost-title">${e}</strong>
          <p>${n}</p>
        </li>`).join("")}
    </ul>
  </section>`,Pe=`
  <p class="sources">
    Ideas here draw on research by Tim Pychyl and Fuschia Sirois (procrastination as emotion regulation),
    Tice &amp; Baumeister (stress and health in student procrastinators), Wohl, Pychyl &amp; Bennett
    (self-forgiveness), Peter Gollwitzer (if-then planning), Katy Milkman (temptation bundling), and
    Kahneman &amp; Tversky (the planning fallacy). This page offers general guidance. If procrastination is
    seriously affecting your work or wellbeing, talking to a counselor or doctor can help, especially since
    it can sometimes be linked to things like ADHD, anxiety, or depression.
  </p>`;function Be(t=""){const e=Xt.map(({id:n,label:s})=>`<button type="button" class="jump-link" data-action="jump" data-target="${n}">${s}</button>`).join("");return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${_t}</nav>

      <section class="card">
        <h2 id="advice-title" tabindex="-1">Getting unstuck</h2>
        <p>
          <strong>Procrastination is mostly about feelings, not time.</strong>
          A task stirs up something unpleasant, and avoiding it makes that feeling go away right away.
          But the relief is borrowed: the task is still there, with less time and more guilt, so it
          feels even harder next time. Breaking the loop anywhere helps, and the easiest place is
          making the start smaller.
        </p>
        <p class="muted">For how that loop works and what it costs, see <strong>Why it matters</strong> further down.</p>
        <nav class="jump-links" aria-label="Jump to a section">${e}</nav>
      </section>

      <section class="card rescue" aria-labelledby="rescue-title">
        <h3 id="rescue-title" class="jump-target" tabindex="-1">Stuck right now? The 5-minute rescue</h3>
        <ol>
          ${Oe.map(([n,s])=>`<li><strong>${n}</strong> ${s}</li>`).join("")}
        </ol>
      </section>

      ${t}

      ${_e}

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${Ne.map(([n,s])=>`<li><span class="myth">${n}</span> ${s}</li>`).join("")}
        </ul>
        ${Pe}
      </section>

      <nav class="back-bar">${_t}</nav>
    </main>
  `}const Z="momentum.v1",mt=[5,15,25],q=120,F=200,He=`${Z}.backup`,_={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"},ft=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 hour"},{minutes:120,label:"2 hours"},{minutes:240,label:"4+ hours"}],Ge=120;function ht(t){return ft.some(e=>e.minutes===t)}function Ye(t){var e;return((e=ft.find(n=>n.minutes===t))==null?void 0:e.label)??`${t} min`}const qe=1e4;function Y(){return{tasks:[],checkIns:[],active:null}}function j(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[n,s,o]=e.slice(1).map(Number),i=new Date(n,s-1,o);return i.getFullYear()===n&&i.getMonth()===s-1&&i.getDate()===o}function Pt(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>F?`Keep the step to ${F} characters or fewer.`:null}function Ue(t,e,n=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>q?{field:"title",message:`Keep the task name to ${q} characters or fewer.`}:e.trim().length>F?{field:"firstStep",message:`Keep the first step to ${F} characters or fewer.`}:n!==""&&!j(n)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function Zt(t,e,n,s,o="",i){const a={id:`${s}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:n.trim(),createdAt:s,...o!==""?{deadline:o}:{},...ht(i)?{estimateMinutes:i}:{}};return{...t,tasks:[...t.tasks,a]}}function Bt(t,e,n){return{...t,tasks:t.tasks.map(s=>{if(s.id!==e)return s;const{estimateMinutes:o,...i}=s;return ht(n)?{...i,estimateMinutes:n}:i})}}function Qt(t,e){const n=t.checkIns.filter(s=>s.taskId===e).reduce((s,o)=>s+Math.max(0,o.endedAt-o.startedAt),0);return Math.floor(n/6e4)}function z(t,e){return e.estimateMinutes===void 0?null:Math.max(0,e.estimateMinutes-Qt(t,e.id))}function lt(t,e){if(!e.deadline)return null;const n=z(t,e)??0,s=Math.max(1,Math.ceil(n/Ge)),[o,i,a]=e.deadline.split("-").map(Number);return $(new Date(o,i-1,a-(s-1)).getTime())}function Ht(t,e,n){return{...t,tasks:t.tasks.map(s=>{if(s.id!==e)return s;const{deadline:o,...i}=s;return n===""?i:{...i,deadline:n}})}}function Gt(t,e,n){return{...t,tasks:t.tasks.map(s=>s.id===e?{...s,firstStep:n.trim()}:s)}}function We(t,e){return{...t,tasks:t.tasks.filter(n=>n.id!==e)}}function je(t,e){return t.tasks.some(n=>n.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}const te="Open it and read what it asks for";function ee(t,e){const n=e.title.trim().toLowerCase();return t.tasks.some(s=>s.title.toLowerCase()===n&&s.deadline===e.due)}function Ve(t,e,n,s=!1){let o=t,i=0;for(const a of e){const d=a.title.trim().slice(0,q);if(!(d===""||!j(a.due)||ee(o,{title:d,due:a.due}))){if(o=Zt(o,d,te,n+i,a.due),s){const l=o.tasks[o.tasks.length-1];o={...o,tasks:[...o.tasks.slice(0,-1),{...l,demo:!0}]}}i+=1}}return{state:o,added:i}}function ne(t,e){return t.tasks.some(n=>n.id===e&&n.demo===!0)}function G(t){return t.checkIns.filter(e=>!ne(t,e.taskId))}function Re(t){return t.tasks.some(e=>e.demo===!0)}function Ke(t){const e=new Set(t.tasks.filter(n=>n.demo===!0).map(n=>n.id));return{...t,tasks:t.tasks.filter(n=>!e.has(n.id)),checkIns:t.checkIns.filter(n=>!e.has(n.taskId)),active:t.active&&e.has(t.active.taskId)?null:t.active}}function ze(t,e){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{completedAt:s,...o}=n;return o})}}function yt(t){return Ze(t.filter(e=>e.completedAt===void 0))}function se(t){const e=i=>t.checkIns.filter(a=>a.taskId===i).length,n=yt(t.tasks).filter(i=>!i.demo),s=n.filter(i=>i.deadline!==void 0).sort((i,a)=>lt(t,i).localeCompare(lt(t,a))||(z(t,a)??0)-(z(t,i)??0)||i.deadline.localeCompare(a.deadline)||i.createdAt-a.createdAt),o=n.filter(i=>i.deadline===void 0).sort((i,a)=>e(i.id)-e(a.id)||i.createdAt-a.createdAt);return[...s,...o]}function Je(t,e=[]){const n=se(t);return n.find(s=>!e.includes(s.id))??n[0]??null}function Xe(t){return t.filter(e=>e.completedAt!==void 0).sort((e,n)=>(n.completedAt??0)-(e.completedAt??0))}function Ze(t){return[...t].sort((e,n)=>e.deadline&&n.deadline?e.deadline.localeCompare(n.deadline)||e.createdAt-n.createdAt:e.deadline?-1:n.deadline?1:e.createdAt-n.createdAt)}function $(t){const e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${s}`}const Qe={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function tn(t,e){const[n,s,o]=t.split("-").map(Number),i=new Date(e),a=new Date(i.getFullYear(),i.getMonth(),i.getDate());return Math.round((new Date(n,s-1,o).getTime()-a.getTime())/864e5)}function en(t,e){if(!t)return null;const n=tn(t,e);return n<0?"overdue":n===0?"today":n===1?"tomorrow":n<=3?"soon":null}function gt(t,e){const n=$(e);if(t===n)return"Due today";const[s,o,i]=t.split("-").map(Number),a=new Date(s,o-1,i).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...s!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<n?`Overdue: ${a}`:`Due ${a}`}function nn(t,e,n,s){return{...t,active:{taskId:e,minutes:n,startedAt:s,endsAt:s+n*6e4,leftCount:0,awayMs:0}}}function sn(t,e){const n=t.active;return!n||n.leftCount===void 0||n.hiddenAt!==void 0||C(n,e)<=0?t:{...t,active:{...n,hiddenAt:e}}}function ct(t,e){const n=t.active;if(!n||n.hiddenAt===void 0)return t;const{hiddenAt:s,...o}=n,i=n.endedEarlyAt??n.endsAt,a=Math.max(0,Math.min(e,i)-s);return a<qe?{...t,active:o}:{...t,active:{...o,leftCount:(o.leftCount??0)+1,awayMs:(o.awayMs??0)+a}}}function on(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function C(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function an(t,e,n){const s=ct(t,n).active;if(!s)return t;const o={taskId:s.taskId,minutes:s.minutes,startedAt:s.startedAt,endedAt:Math.min(s.endedEarlyAt??s.endsAt,n),outcome:e,...s.leftCount!==void 0?{leftCount:s.leftCount,awayMs:s.awayMs??0}:{}},i=e==="finished"?t.tasks.map(a=>a.id===s.taskId?{...a,completedAt:n}:a):t.tasks;return{...t,tasks:i,checkIns:[...t.checkIns,o],active:null}}function rn(t,e){const n=$(e),s=G(t).map(({startedAt:a,endedAt:d})=>({startedAt:a,endedAt:d}));if(t.active&&!ne(t,t.active.taskId)){const{startedAt:a,endsAt:d,endedEarlyAt:l}=t.active;s.push({startedAt:a,endedAt:Math.min(l??d,e)})}const o=s.filter(a=>$(a.startedAt)===n),i=o.reduce((a,d)=>a+Math.max(0,d.endedAt-d.startedAt),0);return{sessionsStarted:o.length,minutesFocused:Math.floor(i/6e4)}}function ln(t,e){return[...t.checkIns].reverse().find(n=>n.taskId===e)}function cn(t){const e=t.filter(i=>i.leftCount!==void 0),n=e.filter(i=>(i.leftCount??0)>0),s=e.filter(i=>i.leftCount===0),o=i=>i.filter(a=>a.outcome==="distracted").length;return{tracked:e.length,left:n.length,awayMs:n.reduce((i,a)=>i+(a.awayMs??0),0),distractedWhenLeft:o(n),distractedWhenStayed:o(s)}}function Yt(t){const[e,n,s]=t.split("-").map(Number);return $(new Date(e,n-1,s-1).getTime())}function V(t,e){const n=G(t),s=new Set(n.map(p=>$(p.startedAt))),o=$(e),i=s.has(o);let a=i?o:Yt(o),d=0;for(;s.has(a);)d+=1,a=Yt(a);const l=mt.map(p=>{const h=n.filter(g=>g.minutes===p);return{minutes:p,sessions:h.length,keptGoing:h.filter(g=>g.outcome==="kept-going").length}}),u=l.filter(p=>p.keptGoing>0).sort((p,h)=>h.keptGoing/h.sessions-p.keptGoing/p.sessions||h.sessions-p.sessions)[0],f=Object.fromEntries(Object.keys(_).map(p=>[p,n.filter(h=>h.outcome===p).length]));return{streakDays:d,sessionToday:i,lengths:l,bestLength:(u==null?void 0:u.minutes)??null,outcomeCounts:f,totalSessions:n.length,drift:cn(n)}}function dt(t){const e=Math.ceil(t/1e3),n=Math.floor(e/60),s=e%60;return`${n}:${String(s).padStart(2,"0")}`}function qt(t){if(!t)return Y();let e;try{e=t.getItem(Z)}catch{return Y()}if(e===null)return Y();let n;try{n=JSON.parse(e)}catch{return Ut(t,e),Y()}const s=un(n);return JSON.stringify(s)!==JSON.stringify(n)&&Ut(t,e),s}function dn(t,e){t.setItem(Z,JSON.stringify(e))}function Ut(t,e){try{t.setItem(He,e)}catch{}}function un(t){if(!Q(t))return Y();const e=Array.isArray(t.tasks)?t.tasks.filter(pn).map(mn).map(yn).map(hn).map(fn):[],n=Array.isArray(t.checkIns)?t.checkIns.filter(gn).map(Wt):[],s=kn(t.active)?Wt(t.active):null;return{tasks:e,checkIns:n,active:s}}function Wt(t){const e=s=>typeof s=="number"&&Number.isFinite(s)&&s>=0;let n=t;if((t.leftCount!==void 0||t.awayMs!==void 0)&&(!e(t.leftCount)||!e(t.awayMs??0))){const{leftCount:s,awayMs:o,...i}=n;n=i}if(n.hiddenAt!==void 0&&!e(n.hiddenAt)){const{hiddenAt:s,...o}=n;n=o}return n}function Q(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function pn(t){return Q(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function mn(t){if(t.deadline===void 0||typeof t.deadline=="string"&&j(t.deadline))return t;const{deadline:e,...n}=t;return n}function fn(t){if(t.estimateMinutes===void 0||ht(t.estimateMinutes))return t;const{estimateMinutes:e,...n}=t;return n}function hn(t){if(t.demo===void 0||t.demo===!0)return t;const{demo:e,...n}=t;return n}function yn(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...n}=t;return n}function gn(t){return Q(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(_,t.outcome)}function kn(t){return Q(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const oe=3,jt=3,kt=.2,ot=864e5;function bn(t){const e=new Date(t).getHours();return e>=5&&e<12?"morning":e>=12&&e<17?"afternoon":e>=17&&e<22?"evening":"night"}const vn=t=>t.filter(e=>e.outcome==="kept-going").length,J=t=>`“${t.title}”`;function ut(t,e){const[n,s,o]=t.split("-").map(Number);return $(new Date(n,s-1,o+e).getTime())}function wn(t,e){const{left:n,distractedWhenLeft:s,distractedWhenStayed:o,tracked:i}=V(t,e).drift,a=i-n;return n<3||a<1||s/n-o/a<kt?null:{kind:"drift",text:`When you leave the page, ${s} of ${n} sessions end in Got distracted; when you stay, ${o} of ${a}. Putting your phone in another room before you start may help.`}}function $n(t,e){const{lengths:n,bestLength:s}=V(t,e),o=n.find(d=>d.minutes===s),i=n.filter(d=>d.minutes!==s&&d.sessions>0);if(!o||o.sessions<3||i.length===0)return null;const a=o.keptGoing/o.sessions;return i.some(d=>a-d.keptGoing/d.sessions<kt)?null:{kind:"best-length",text:`${o.minutes}-minute sessions go best for you: you kept going in ${o.keptGoing} of ${o.sessions}. Try ${o.minutes} first.`}}function Sn(t){const e=["morning","afternoon","evening","night"].map(o=>{const i=t.filter(a=>bn(a.startedAt)===o);return{part:o,sessions:i.length,kept:vn(i)}}).filter(o=>o.sessions>=3).sort((o,i)=>i.kept/i.sessions-o.kept/o.sessions);if(e.length<2)return null;const[n,s]=e;return n.kept===0||n.kept/n.sessions-s.kept/s.sessions<kt?null:{kind:"time-of-day",text:`Your ${n.part}s go best: you kept going in ${n.kept} of ${n.sessions}. Put the hardest task there when you can.`}}function Tn(t,e,n){const s=$(n),o=ut(s,3),i=t.filter(u=>!e.some(f=>f.taskId===u.id)),a=i.find(u=>u.deadline!==void 0&&u.deadline>=s&&u.deadline<=o);if(a){const u=Math.round((new Date(`${a.deadline}T00:00:00`).getTime()-new Date(`${s}T00:00:00`).getTime())/ot),f=u===0?"today":u===1?"tomorrow":`in ${u} days`;return{kind:"avoided",text:`${J(a)} is due ${f} and hasn't had a session yet. Its first step might be too big; try shrinking it.`}}const d=i.filter(u=>n-u.createdAt>=7*ot).sort((u,f)=>u.createdAt-f.createdAt)[0];if(!d)return null;const l=Math.floor((n-d.createdAt)/ot);return{kind:"avoided",text:`${J(d)} has been on your list ${l} days without a session. Its first step might be too big; try shrinking it.`}}function An(t,e){const n=$(e),s=t.filter(a=>a.deadline!==void 0&&a.deadline<n).sort((a,d)=>a.deadline.localeCompare(d.deadline));if(s.length===0)return null;const o=s[0];return{kind:"overdue",text:s.length===1?`${J(o)} is overdue. One 5-minute session on it breaks the freeze.`:`${s.length} tasks are overdue. One 5-minute session on ${J(o)} breaks the freeze.`}}function En(t,e,n){const{streakDays:s}=V(t,n);if(s>=3)return{kind:"streak",text:`${s} days in a row. That's a habit forming.`};if(s>0)return null;const o=new Set(e.map(l=>$(l.startedAt))),i=$(n),a=[...o].filter(l=>l<i).sort().at(-1);if(!a||a<ut(i,-7))return null;let d=0;for(let l=a;o.has(l);l=ut(l,-1))d+=1;return d<3?null:{kind:"streak",text:`Your ${d}-day streak ended. Today's first small step starts a new one, and it counts fully.`}}function In(t,e){const n=t.filter(s=>s.outcome==="distracted").length;return n<3||e.length>0?null:{kind:"toolkit",text:`You've been pulled away in ${n} sessions. Pick a strategy or two for those moments.`,link:{href:"#getting-unstuck",label:"Open the 10 strategies"}}}function ie(t){return G(t).length>=oe}function Dn(t,e,n=[]){if(!ie(t))return[];const s=G(t),o=yt(t.tasks).filter(u=>!u.demo),a=[wn(t,e),$n(t,e),Sn(s),Tn(o,s,e),An(o,e),En(t,s,e),In(s,n)].filter(u=>u!==null),d=a.slice(0,jt),l=a.find(u=>Vt.includes(u.kind));return l&&!d.some(u=>Vt.includes(u.kind))&&d.splice(jt-1,1,l),d}const Vt=["avoided","overdue"],xn=5,Ln=[{name:"Seedling",note:"One session today sprouts its first leaves."},{name:"First sprout",note:"One day of focus, planted. Keep it going tomorrow."},{name:"Young shoot",note:"Two days in a row: it's starting to show."},{name:"Leafing out",note:"Three days in a row. This is what a rhythm looks like."},{name:"Full bloom",note:"Four days in a row: a real habit forming."},{name:"Flourishing",note:"Five days or more in a row. This is what consistency looks like."}];function Mn(t){const e=new Date(t),n=(e.getDay()+6)%7;return new Date(e.getFullYear(),e.getMonth(),e.getDate()-n).getTime()}function On(t,e){const n=G(t),{streakDays:s}=V(t,e),o=n.map(({startedAt:g,endedAt:v})=>({startedAt:g,endedAt:v})),i=t.active;i&&!t.tasks.some(g=>g.id===i.taskId&&g.demo)&&o.push({startedAt:i.startedAt,endedAt:Math.min(i.endedEarlyAt??i.endsAt,e)});const a=Mn(e),d=new Date(a),l=new Date(d.getFullYear(),d.getMonth(),d.getDate()-7).getTime(),u=(g,v)=>Math.floor(o.filter(S=>S.startedAt>=g&&S.startedAt<v).reduce((S,I)=>S+Math.max(0,I.endedAt-I.startedAt),0)/6e4),f=t.tasks.filter(g=>g.completedAt!==void 0&&!g.demo),p=f.filter(g=>g.deadline!==void 0),h=p.filter(g=>$(g.completedAt)<=g.deadline);return{stage:Math.min(s,xn),streakDays:s,notStarted:n.length===0&&o.length===0,freshStart:s===0&&n.length>0,finishedWithDeadline:p.length,finishedOnTime:h.length,focusedThisWeek:u(a,Number.POSITIVE_INFINITY),focusedLastWeek:u(l,a),tasksFinished:f.length}}const Nn=1e6,Cn=120,Fn=100,pt={google:"Google Calendar",outlook:"Outlook"},_n={google:[["Problem set 9",1],["Read chapter 7 before discussion",2],["Lab report draft",5]],outlook:[["Email advisor about spring classes",1],["Scholarship application",4],["Group project check-in slides",6]]};function Pn(t,e){const n=new Date(e);return _n[t].map(([s,o])=>({title:s,due:$(new Date(n.getFullYear(),n.getMonth(),n.getDate()+o).getTime())}))}function Bn(t,e){var d,l;if(!/BEGIN:VCALENDAR/i.test(t))return{error:"That file isn't a calendar file. Look for one ending in .ics."};const n=$(e),s=new Date(e),o=$(new Date(s.getFullYear(),s.getMonth(),s.getDate()+Cn).getTime()),i=[],a=new Set;for(const u of Gn(Hn(t))){const f=Yn(u.lines);if(f.has("RRULE")||((d=f.get("STATUS"))==null?void 0:d.value.toUpperCase())==="CANCELLED")continue;const p=(u.kind==="VTODO"?f.get("DUE"):void 0)??f.get("DTSTART"),h=p?qn(p.value):null,g=Un(((l=f.get("SUMMARY"))==null?void 0:l.value)??"").slice(0,q).trim();if(!h||g===""||h<n||h>o)continue;const v=`${g.toLowerCase()}|${h}`;a.has(v)||(a.add(v),i.push({title:g,due:h}))}return i.sort((u,f)=>u.due.localeCompare(f.due)||u.title.localeCompare(f.title)),{events:i.slice(0,Fn)}}function Hn(t){return t.replace(/\r\n?/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function Gn(t){const e=[];let n=null;for(const s of t){const o=s.trim().toUpperCase();o==="BEGIN:VEVENT"||o==="BEGIN:VTODO"?n={kind:o==="BEGIN:VEVENT"?"VEVENT":"VTODO",lines:[]}:(o==="END:VEVENT"||o==="END:VTODO")&&n?(e.push(n),n=null):n&&n.lines.push(s)}return e}function Yn(t){const e=new Map;for(const n of t){const s=n.indexOf(":");if(s<=0)continue;const o=n.slice(0,s).split(";")[0].trim().toUpperCase();e.has(o)||e.set(o,{value:n.slice(s+1).trim()})}return e}function qn(t){const e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?$/.exec(t);if(!e)return null;const[,n,s,o,i,a,d,l]=e;if(l){const f=Date.UTC(+n,+s-1,+o,+i,+a,+d);return Number.isNaN(f)?null:$(f)}const u=`${n}-${s}-${o}`;return j(u)?u:null}function Un(t){return t.replace(/\\[nN]/g," ").replace(/\\([,;\\])/g,"$1").replace(/\s+/g," ")}const Wn=[523.25,659.25,783.99],jn=.22,Rt=1.4,Vn=.12;function Rn(){let t=null,e=null,n=null,s=[];const o=()=>{for(const a of s){try{a.stop()}catch{}a.disconnect()}s=[],n=null},i=()=>{if(!t||t.state!=="running"||e===null||n===e)return;o();const a=(e-Date.now())/1e3;if(a<0)return;const d=t.currentTime+a;s=Wn.map((l,u)=>{const f=d+u*jn,p=t.createOscillator(),h=t.createGain();return p.type="sine",p.frequency.value=l,h.gain.setValueAtTime(0,f),h.gain.linearRampToValueAtTime(Vn,f+.03),h.gain.exponentialRampToValueAtTime(1e-4,f+Rt),p.connect(h).connect(t.destination),p.start(f),p.stop(f+Rt),p}),n=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?i():t.resume().then(i,()=>{})},chimeAt(a){e=a,i()},cancel(){e=null,o()}}}const ae="momentum.sound.v1",re=500,X={brown:"Brown noise",rain:"Rain",hum:"Warm hum"},it={soundscape:"rain",volume:.4,playing:!1,playlistLink:"",panelOpen:!0},at="Paste a YouTube or Spotify playlist link, like https://www.youtube.com/playlist?list=…",Kn=/^[A-Za-z0-9_-]{2,64}$/,zn=/^[A-Za-z0-9_-]{11}$/,Jn=/^[A-Za-z0-9]{22}$/,Xn=["playlist","album","track","episode","show"];function bt(t){const e=t.trim();if(e==="")return{error:"Paste a playlist link first."};if(e.length>re)return{error:"That link is too long to be a playlist link."};const n=/^spotify:([a-z]+):([A-Za-z0-9]+)$/.exec(e);if(n)return Kt(n[1],n[2]);let s;try{s=new URL(/^[a-z]+:\/\//i.test(e)?e:`https://${e}`)}catch{return{error:at}}if(s.protocol!=="https:"&&s.protocol!=="http:")return{error:at};const o=s.hostname.toLowerCase().replace(/^(www|m|music)\./,"");if(o==="youtube.com"||o==="youtu.be"||o==="youtube-nocookie.com")return Zn(s,o);if(o==="open.spotify.com"){const i=s.pathname.split("/").filter(l=>l!==""&&!l.startsWith("intl-")),a=i[0]==="embed"?i[1]:i[0],d=i[0]==="embed"?i[2]:i[1];return Kt(a??"",d??"")}return{error:at}}function Zn(t,e){var o;const n=t.searchParams.get("list");if(n!==null)return Kn.test(n)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/videoseries?list=${n}`}:{error:"That YouTube playlist link looks broken. Copy it again from YouTube."};let s=null;return e==="youtu.be"?s=t.pathname.slice(1):t.pathname==="/watch"?s=t.searchParams.get("v"):s=((o=/^\/(?:embed|shorts|live)\/([^/]+)/.exec(t.pathname))==null?void 0:o[1])??null,s!==null&&zn.test(s)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/${s}`}:{error:"That YouTube link has no playlist or video in it. Open the playlist and copy its link."}}function Kt(t,e){return!Xn.includes(t)||!Jn.test(e)?{error:"That Spotify link has no playlist in it. In Spotify, use Share → Copy link to playlist."}:{service:"spotify",embedUrl:`https://open.spotify.com/embed/${t}/${e}`}}function Qn(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(ae))??"null")}catch{return{...it}}if(typeof e!="object"||e===null||Array.isArray(e))return{...it};const n=e,s={...it};return typeof n.soundscape=="string"&&Object.hasOwn(X,n.soundscape)&&(s.soundscape=n.soundscape),typeof n.volume=="number"&&n.volume>=0&&n.volume<=1&&(s.volume=n.volume),typeof n.playing=="boolean"&&(s.playing=n.playing),typeof n.panelOpen=="boolean"&&(s.panelOpen=n.panelOpen),typeof n.playlistLink=="string"&&!("error"in bt(n.playlistLink))&&(s.playlistLink=n.playlistLink),s}function ts(t,e){try{return t?(t.setItem(ae,JSON.stringify(e)),!0):!1}catch{return!1}}const zt=.35,es=.6,ns=.8,ss=2,os=4;function is(){let t=null,e=null;const n=new Map,s=()=>{try{t??(t=new AudioContext)}catch{return null}return t.state!=="running"&&t.resume().catch(()=>{}),t},o=(l,u)=>{const f=n.get(u);if(f)return f;const p=l.createBuffer(1,l.sampleRate*os,l.sampleRate),h=p.getChannelData(0);let g=0;for(let v=0;v<h.length;v++){const S=Math.random()*2-1;u==="white"?h[v]=S*.5:(g=(g+.02*S)/1.02,h[v]=g*3.5)}return n.set(u,p),p},i=(l,u,f,p)=>{const h=l.createBufferSource();h.buffer=o(l,u),h.loop=!0;const g=l.createGain();return g.gain.value=p,h.connect(g).connect(f),h},a=(l,u,f)=>{if(u==="brown")return[i(l,"brown",f,1)];if(u==="rain"){const D=l.createBiquadFilter();D.type="highpass",D.frequency.value=500;const L=l.createBiquadFilter();L.type="lowpass",L.frequency.value=5e3,D.connect(L).connect(f);const M=l.createGain();M.gain.value=.8,M.connect(D);const E=l.createOscillator();E.frequency.value=.13;const T=l.createGain();return T.gain.value=.15,E.connect(T).connect(M.gain),[i(l,"white",M,.7),i(l,"brown",f,.4),E]}const p=l.createBiquadFilter();p.type="lowpass",p.frequency.value=700;const h=l.createGain();h.gain.value=.35,h.connect(p).connect(f);const v=[{frequency:110,type:"sine",level:.5},{frequency:110.6,type:"sine",level:.35},{frequency:164.8,type:"sine",level:.25},{frequency:220.4,type:"triangle",level:.08}].map(({frequency:D,type:L,level:M})=>{const E=l.createOscillator();E.type=L,E.frequency.value=D;const T=l.createGain();return T.gain.value=M,E.connect(T).connect(h),E}),S=l.createOscillator();S.frequency.value=.08;const I=l.createGain();return I.gain.value=.1,S.connect(I).connect(h.gain),[...v,S]},d=(l,u,f)=>{const p=l.currentTime;u.fade.gain.cancelScheduledValues(p),u.fade.gain.setValueAtTime(u.fade.gain.value,p),u.fade.gain.linearRampToValueAtTime(0,p+f);for(const h of u.sources)h.stop(p+f+.05)};return{play(l,u,f){const p=s();if(!p)return;e&&d(p,e,.3);const h=p.currentTime,g=p.createGain();g.gain.setValueAtTime(0,h),g.gain.linearRampToValueAtTime(u*zt,h+es);const v=p.createGain();g.connect(v).connect(p.destination);const S=(f-Date.now())/1e3;S>0&&(v.gain.setValueAtTime(1,h+Math.max(0,S-ss)),v.gain.linearRampToValueAtTime(0,h+S));const I=a(p,l,g);for(const D of I)D.start(h);e={sources:I,volume:g,fade:v}},setVolume(l){!t||!e||(e.volume.gain.cancelScheduledValues(t.currentTime),e.volume.gain.setTargetAtTime(l*zt,t.currentTime,.05))},stop(){!t||!e||(d(t,e,ns),e=null)},isPlaying(){return e!==null}}}const le="momentum.toolkit.v1",ce=["Getting started","Staying focused","Planning","Mindset"],H=[{id:"tiny-first-step",category:"Getting started",title:"Make the first step ridiculously small",why:"The hardest part of any task is starting. When the first step is tiny, there's nothing for your brain to dread.",how:["Ask: what's the smallest physical action that counts as starting?","Commit only to that: “open the doc and write the title”","Let momentum carry you; stopping after is allowed"],example:"Not “write the report”, but “paste in last quarter's numbers.”"},{id:"name-the-feeling",category:"Mindset",title:"Name the feeling you're avoiding",why:"Since procrastination is really about dodging a bad feeling, naming it takes away a lot of its power.",how:["Pause when you notice yourself stalling","Finish the sentence: “I'm avoiding this because it feels…”","Respond to that feeling: confused? Find one question to answer first"],example:"“It feels vague” → spend 5 minutes just listing what “done” looks like."},{id:"if-then-plans",category:"Planning",title:"Use if-then plans",why:"Deciding in advance exactly when and where you'll act removes the daily decision, and it's one of the best-supported tactics in research.",how:["Write: “If [time/situation], then I will [specific action]”","Tie it to something that already happens every day","Put it in your calendar with the action as the title"],example:"“If I finish my morning coffee, then I open the proposal draft.”"},{id:"short-sessions",category:"Staying focused",title:"Work in short focus sessions",why:"“Work on it for 25 minutes” is far less scary than “finish it.” A clear end point makes starting easier.",how:["Press Start 5 min on the focus card for your top task","Only that task until the timer ends","Take a 5-minute break, then decide on another round"],example:"Four sessions ≈ one solid, guilt-free morning."},{id:"friction",category:"Staying focused",title:"Add friction to distractions",why:"You'll grab whatever is easiest. Make distractions a little harder to reach and the task a little easier.",how:["Put your phone in another room or in a drawer","Log out of social apps or use a site blocker during work blocks","Leave the task open and ready the night before"],example:"Even 20 seconds of extra effort to reach a distraction cuts how often you reach for it."},{id:"earlier-deadline",category:"Planning",title:"Set an earlier personal deadline, and pad estimates",why:"We almost always underestimate how long things take (the planning fallacy). Real deadlines then arrive too fast.",how:["Set your own deadline 1–2 days before the real one, and give that date to the task in Momentum","Add 20–50% to how long you think it will take","Compare your guess with how long it really took, and adjust next time"],example:"Due Friday? Your deadline is Wednesday evening."},{id:"do-it-badly",category:"Getting started",title:"Give yourself permission to do it badly",why:"Perfectionism is one of the biggest drivers of delay. If the first try must be great, it's safer not to try at all.",how:["Label the first pass “draft zero”: it's meant to be rough","Aim for done, then improve","Set a low bar on purpose: “one ugly paragraph”"],example:"A messy draft you can fix beats a perfect one that doesn't exist."},{id:"temptation-bundling",category:"Mindset",title:"Pair the task with something you enjoy",why:"Temptation bundling links a dreaded task with a treat, so you start looking forward to it instead.",how:["Choose a treat you'll only have while doing the task","Examples: a favorite playlist, podcast, nice coffee, a cozy spot","Keep the rule strict: no task, no treat"],example:"Only listen to your favorite podcast while folding laundry or doing admin."},{id:"accountability",category:"Staying focused",title:"Get some accountability",why:"It's easy to break promises to yourself, much harder to break them to someone else.",how:["Tell a friend what you'll finish and by when","Try body doubling: work alongside someone, in person or on a video call","Share a quick “done!” message when you finish"],example:"“I'll send you the draft by 4pm” works better than “I'll try to do it today.”"},{id:"forgive-and-restart",category:"Mindset",title:"Forgive yourself and restart",why:"Research on students found that those who forgave themselves for procrastinating on one exam procrastinated less on the next. Guilt feeds the loop; kindness breaks it.",how:["Acknowledge it plainly: “I put that off. That happens.”","Skip the self-lecture; ask “what's one thing I can do now?”","Treat every day as a fresh start, not a streak to protect"],example:"Missed yesterday? Today's first small step still counts fully."}];function de(t,e){return t==="all"?[...H]:t==="toolkit"?H.filter(n=>e.includes(n.id)):H.filter(n=>n.category===t)}function as(t){return t==="all"||t==="toolkit"||ce.includes(t)}function rs(t,e){return H.some(n=>n.id===e)?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[...t]}function ls(t){return de("toolkit",t)}function cs(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(le))??"[]")}catch{return[]}if(!Array.isArray(e))return[];const n=new Set(H.map(s=>s.id));return[...new Set(e.filter(s=>typeof s=="string"&&n.has(s)))]}function ds(t,e){try{return t?(t.setItem(le,JSON.stringify(e)),!0):!1}catch{return!1}}const vt="#getting-unstuck",rt="Momentum",us="⏰ Time's up!";function ps(t){return t===vt?"advice":"focus"}function m(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const ms=`
  <a class="advice-link" href="${vt}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function fs(t,e){const n=m(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${n}" novalidate>
        <label for="step-edit">Tiny first step for ${m(t.title)}</label>
        <input id="step-edit" name="firstStep" autocomplete="off" maxlength="${F}"
          value="${m(t.firstStep)}" />
        ${e.error?`<p class="form-error" role="alert">${m(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save step</button>
          <button type="button" data-action="cancel-step-edit">Cancel</button>
        </div>
      </form>`:`
    <p class="muted">First step: ${m(t.firstStep)}
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${n}"
        aria-label="Edit step for ${m(t.title)}">Edit step</button></p>`}function U(t){if(t<60)return`${t} min`;const e=Math.floor(t/60),n=t%60;return n===0?`${e} h`:`${e} h ${n} min`}function hs(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function ue(t){return['<option value="">Not sure</option>',...ft.map(e=>`<option value="${e.minutes}"${e.minutes===t?" selected":""}>${e.label}</option>`)].join("")}function pe(t,e){const n=Qt(t,e.id),s=`About ${Ye(e.estimateMinutes)}`;return n===0?s:n>=e.estimateMinutes?`${s} · ${U(n)} done, more than you guessed`:`${s} · ${U(n)} done so far`}function ys(t,e,n){const s=m(e.id);if((n==null?void 0:n.taskId)===e.id){const i=e.estimateMinutes?`<button type="button" data-action="remove-estimate" data-task-id="${s}">Remove estimate</button>`:"";return`
      <form class="estimate-editor" data-task-id="${s}" novalidate>
        <label for="estimate-edit">About how long is ${m(e.title)}?</label>
        <select id="estimate-edit" name="estimate">${ue(e.estimateMinutes)}</select>
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-estimate">Cancel</button>
          ${i}
        </div>
      </form>`}const o=i=>`<button type="button" class="link-button" data-action="edit-estimate" data-task-id="${s}"
      aria-label="${i} for ${m(e.title)}">${i}</button>`;return e.estimateMinutes?`<p class="estimate"><span class="estimate-text">${pe(t,e)}</span> ${o("Change")}</p>`:`<p class="estimate">${o("Add estimate")}</p>`}function gs(t,e,n){const s=z(t,e),o=lt(t,e),i=$(n);return!s||!o||!e.deadline||e.deadline<i?"":`<p class="hero-start-by">${o<i?`Start today: about ${U(s)} left, more than the days before it's due allow at 2 hours a day.`:o===i?"Start today to finish on time.":`Start by ${hs(o)} to finish on time.`}</p>`}function ks(t,e,n){const s=m(t.id);if((e==null?void 0:e.taskId)===t.id){const a=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${s}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${s}" novalidate>
        <label for="deadline-edit">Deadline for ${m(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${m(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${m(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${a}
        </div>
      </form>`}const o=a=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${s}"
      aria-label="${a} for ${m(t.title)}">${a}</button>`;return t.deadline?`<p class="deadline${t.deadline<=$(n)?" deadline-urgent":""}"><span class="deadline-date">${gt(t.deadline,n)}</span> ${o("Change")}</p>`:`<p class="deadline">${o("Add deadline")}</p>`}function me(t,e){const n=en(t.deadline,e);return n?`<span class="urgency urgency-${n}">${Qe[n]}</span>`:""}const bs={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function vs(t,e){const n=e.outcome==="kept-going",s=n?"":'<button type="button" data-action="cancel-step">Cancel</button>',o=n?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${n?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${F}"
        value="${m(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${m(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${n?"Save next step":"Save smaller step"}</button>
        ${o}${s}
      </div>
    </form>`}const ws={all:"All","Getting started":"Getting started","Staying focused":"Staying focused",Planning:"Planning",Mindset:"Mindset",toolkit:"My toolkit"};function $s(t,e){const n=m(t.id),s=e?"Remove from my toolkit":"Add to my toolkit";return`
    <article class="strategy${e?" in-toolkit":""}" data-strategy-id="${n}">
      <p class="strategy-top">
        <span class="strategy-category">${m(t.category)}</span>
        ${e?'<span class="strategy-picked">✓ In your toolkit</span>':""}
      </p>
      <h4 class="strategy-title">${m(t.title)}</h4>
      <p class="strategy-why">${m(t.why)}</p>
      <ul class="strategy-how">${t.how.map(o=>`<li>${m(o)}</li>`).join("")}</ul>
      <p class="strategy-example">${m(t.example)}</p>
      <button type="button" class="${e?"":"primary "}toolkit-toggle" data-action="toggle-toolkit"
        data-strategy-id="${n}" aria-pressed="${e}"
        aria-label="${s}: ${m(t.title)}">${s}</button>
    </article>`}function Ss(t,e){const n=["all",...ce,"toolkit"].map(i=>{const a=i==="toolkit"?`My toolkit (${e.length})`:ws[i];return`<button type="button" class="strategy-filter${i===t?" active":""}"
        data-action="strategy-filter" data-filter="${m(i)}" aria-pressed="${i===t}">${a}</button>`}).join(""),s=de(t,e),o=s.length>0?`<div class="strategy-grid">${s.map(i=>$s(i,e.includes(i.id))).join("")}</div>`:'<p class="muted toolkit-empty">Nothing in your toolkit yet. Under <strong>All</strong>, press <strong>Add to my toolkit</strong> on two or three that fit how you get stuck.</p>';return`
    <section class="card strategies" aria-labelledby="strategies-title">
      <h3 id="strategies-title" class="jump-target" tabindex="-1">10 strategies you can use today</h3>
      <p class="muted">You don't need all of them. Pick two or three that fit how you get stuck; they'll show up when a session goes sideways.</p>
      <div class="strategy-filters" role="group" aria-label="Show strategies">${n}</div>
      <p class="toolkit-count"><strong>${e.length}</strong> of ${H.length} in your toolkit</p>
      ${o}
    </section>`}function Ts(t){const e=ls(t);return e.length===0?"":`
    <div class="toolkit-reminder">
      <p class="toolkit-reminder-title">From your toolkit</p>
      <ul>${e.map(s=>`<li><strong>${m(s.title)}.</strong> ${m(s.how[0])}</li>`).join("")}</ul>
    </div>`}function As(t,e,n){const{heading:s,message:o}=bs[e.outcome],i=e.outcome==="stopped"||e.outcome==="distracted";let a="";if(e.stepSaved){const d=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";a=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${m(t.firstStep)}</strong></p>
      <div class="step-actions">${d}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(a=vs(t,e),e.outcome==="kept-going"&&(a+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):i?a=`
      <p class="muted">Your tiny step: ${m(t.firstStep)}</p>
      ${Ts(n)}
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${vt}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:a='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${s}</h2>
      <p class="muted">${m(t.title)}. ${o}</p>
      ${a}
    </section>`}function Es(t){const e='<ellipse cx="50" cy="88" rx="30" ry="7" fill="var(--moss-pale)"/>',n=a=>`<line x1="50" y1="88" x2="50" y2="${88-a}" stroke="var(--forest)" stroke-width="3.5" stroke-linecap="round"/>`,s=(a,d,l,u,f)=>`<ellipse cx="${a}" cy="${d}" rx="${l}" ry="${u}" fill="var(--moss)" transform="rotate(${f} ${a} ${d})"/>`,o=(a,d)=>[0,60,120,180,240,300].map(l=>`<ellipse cx="${a}" cy="${d-7}" rx="4.5" ry="7" fill="var(--gold)" transform="rotate(${l} ${a} ${d})"/>`).join("")+`<circle cx="${a}" cy="${d}" r="4" fill="#8A6414"/>`;return`<svg class="plant" viewBox="0 0 100 100" aria-hidden="true">${[e+'<circle cx="50" cy="83" r="4" fill="var(--forest)"/>',e+n(14)+s(46,74,6,3,-20)+s(54,74,6,3,20),e+n(26)+s(42,66,8,4,-30)+s(58,66,8,4,30)+s(50,60,6,3,0),e+n(38)+s(38,60,9,4.5,-35)+s(62,60,9,4.5,35)+s(35,48,8,4,-15)+s(65,48,8,4,15)+s(50,42,7,4,0),e+n(44)+s(36,58,9,4.5,-35)+s(64,58,9,4.5,35)+s(33,44,8,4,-15)+s(67,44,8,4,15)+o(50,36),e+n(46)+s(34,56,9,4.5,-35)+s(66,56,9,4.5,35)+s(30,42,8,4,-15)+s(70,42,8,4,15)+s(40,30,7,4,-10)+s(60,30,7,4,10)+o(50,26)][t]}</svg>`}function Is(t,e){const n=On(t,e),{name:s,note:o}=Ln[n.stage],i=n.notStarted?"Your plant starts growing with your first session.":n.freshStart?"A fresh start. One session today plants it again.":o,a=n.finishedWithDeadline===0?"—":`${n.finishedOnTime} of ${n.finishedWithDeadline} (${W(n.finishedOnTime,n.finishedWithDeadline)}%)`,d=n.focusedLastWeek>0?`<span class="growth-compare">last week ${U(n.focusedLastWeek)}</span>`:"";return`
    <section class="card growth" aria-labelledby="growth-title">
      <h3 id="growth-title">Your growth</h3>
      <div class="growth-plant">
        ${Es(n.stage)}
        <div>
          <p class="growth-stage">${s}</p>
          <p class="muted growth-caption">${i}</p>
        </div>
      </div>
      <dl class="growth-stats">
        <div class="growth-stat" data-stat="on-time"><dt>Finished on time</dt><dd>${a}</dd></div>
        <div class="growth-stat" data-stat="this-week"><dt>Focused this week</dt><dd>${U(n.focusedThisWeek)} ${d}</dd></div>
        <div class="growth-stat" data-stat="finished"><dt>Tasks finished</dt><dd>${n.tasksFinished} in all</dd></div>
      </dl>
    </section>`}function Ds(t,e,n){if(t.tasks.length===0)return"";let s;if(ie(t)){const o=Dn(t,n,e);s=o.length===0?'<p class="muted coaching-wait">Nothing stands out yet. Notes show up when your check-ins show a clear pattern.</p>':`<ul class="coaching-notes">${o.map(i=>{const a=i.link?` <a class="coaching-link" href="${m(i.link.href)}">${m(i.link.label)}</a>`:"";return`<li class="coaching-note" data-note="${i.kind}">${m(i.text)}${a}</li>`}).join("")}</ul>`}else{const o=G(t).length;s=`<p class="muted coaching-wait">Coaching notes start after ${oe} sessions. You've done ${o}.</p>`}return`
    <section class="coaching" aria-labelledby="coaching-title">
      <h4 id="coaching-title">Coaching notes</h4>
      ${s}
    </section>`}function W(t,e){return e===0?0:Math.round(t/e*100)}function xs(t){const e=t.streakDays===1?"day":"days";let n;return t.sessionToday?n="You've focused today. Nice.":t.streakDays>0?n="Do one session today to keep it going.":n="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${n}</p>`}function Ls(t){const e=t.lengths.find(o=>o.minutes===t.bestLength),n=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${W(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',s=t.lengths.map(o=>{const i=o.sessions===0?"not tried yet":`${o.keptGoing} of ${o.sessions} kept going (${W(o.keptGoing,o.sessions)}%)`;return`<li${o.minutes===t.bestLength?' class="best"':""} data-minutes="${o.minutes}">${o.minutes} min: ${i}</li>`}).join("");return`${n}<ul class="length-rates">${s}</ul>`}function Ms(t){const e=Object.keys(_).map(s=>{const o=t.outcomeCounts[s],i=W(o,t.totalSessions);return`
        <li data-outcome="${s}">
          <span class="outcome-label">${_[s]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${s}" style="width: ${i}%"></span></span>
          <span class="outcome-count">${o} (${i}%)</span>
        </li>`}).join(""),n=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${n} in all</p>`}function Os(t){const{tracked:e,left:n,awayMs:s,distractedWhenLeft:o,distractedWhenStayed:i}=t.drift;if(e===0)return"";const a=e-n,d=e===1?"session":"sessions",l=n===0?`You stayed on the page in all ${e} ${d}.`:`You left the page in <strong class="drift-left">${n}</strong> of ${e} ${d} (${ye(s)} away in all).`,u=(f,p)=>p===0?"none yet":`${f} of ${p} ended in Got distracted (${W(f,p)}%)`;return`
    <h4>Leaving the page</h4>
    <p class="drift-summary">${l}</p>
    <ul class="length-rates drift-rates">
      <li data-drift="left">When you left: ${u(o,n)}</li>
      <li data-drift="stayed">When you stayed: ${u(i,a)}</li>
    </ul>`}function Ns(t,e,n){const s=V(t,n),o=s.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${xs(s)}
        <h4>Best length for keeping going</h4>${Ls(s)}
        <h4>How sessions ended</h4>${Ms(s)}
        ${Os(s)}`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${o}
    </details>`}function Cs(t,e){const n=Xe(t.tasks);if(n.length===0)return"";const s=n.map(o=>{const i=new Date(o.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${m(o.title)}</p>
          <p class="muted">Finished ${i}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${m(o.id)}"
              aria-label="Move ${m(o.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${n.length})</summary>
      <ul class="task-list">${s}</ul>
    </details>`}function Fs(t,e,n){const s=yt(t.tasks).map(o=>{const i=ln(t,o.id),a=i?`<p class="last-check-in">Last time: ${_[i.outcome]} (${i.minutes} min)</p>`:"",d=ks(o,e.deadlineEdit,n),l=ys(t,o,e.estimateEdit),u=o.demo?'<span class="demo-badge">Demo</span>':"",f=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${m(o.id)}" aria-label="Delete ${m(o.title)}" title="Delete task">×</button>`,p=mt.map(h=>`<button type="button" data-action="start" data-task-id="${m(o.id)}" data-minutes="${h}"
            aria-label="Start a ${h}-minute focus on ${m(o.title)}">${h} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading">
            <p class="task-title">${m(o.title)}</p>${u}${me(o,n)}${f}
          </div>
          ${d}
          ${l}
          ${fs(o,e.stepEdit)}
          ${a}
          <div class="timer-choices"><span class="muted">Focus for</span>${p}</div>
        </li>`}).join("");return`
    <div class="columns">
    <div class="column-stack">
    <section class="card" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">What are you putting off?</h2>
      <form id="add-task" class="add-task" novalidate>
        <label for="task-title">Task</label>
        <input id="task-title" name="title" autocomplete="off" maxlength="${q}"
          placeholder="Email my professor" />
        <label for="first-step">Tiny first step</label>
        <input id="first-step" name="firstStep" autocomplete="off" maxlength="${F}"
          placeholder="Find their email address" />
        <label for="deadline">Deadline <span class="optional">(optional)</span></label>
        <input id="deadline" name="deadline" type="date" />
        <label for="estimate">About how long? <span class="optional">(optional)</span></label>
        <select id="estimate" name="estimate">${ue()}</select>
        ${e.formError?`<p class="form-error" role="alert">${m(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    ${Hs(t,e.importer,n)}
    ${Is(t,n)}
    </div>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${_s(e.deletedTask)}
      ${s?`<ul class="task-list">${s}</ul>`:Gs(t)}
      ${Ds(t,e.toolkit,n)}
      ${Cs(t,e.completedOpen)}
      ${Ns(t,e.patternsOpen,n)}
    </section>
    </div>`}function _s(t){return t?`
    <p class="undo-notice" role="status">Deleted “${m(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function Ps(t,e,n){if(t.tasks.length===0)return"";const s=Je(t,e);if(!s)return`
      <section class="focus-hero focus-hero-empty" aria-label="Focus on this one first">
        <p class="hero-eyebrow">Focus on this one first</p>
        <p class="hero-title">You're all caught up.</p>
        <p class="hero-note">Add the next thing you're putting off.</p>
      </section>`;const o=m(s.id),i=m(s.title),a=s.deadline?`<p class="hero-deadline">${gt(s.deadline,n)}</p>`:"",d=s.estimateMinutes?`<p class="hero-estimate">${pe(t,s)}</p>`:"",l=mt.map((p,h)=>`<button type="button" class="${h===0?"hero-start-main":"hero-start"}" data-action="start"
        data-task-id="${o}" data-minutes="${p}"
        aria-label="Start a ${p}-minute focus on ${i}">Start ${p} min</button>`).join(""),f=se(t).length>1?`<button type="button" class="hero-skip" data-action="skip-focus" data-task-id="${o}">Not this one</button>`:"";return`
    <section class="focus-hero" aria-labelledby="focus-hero-title">
      <p class="hero-eyebrow">Focus on this one first</p>
      <div class="hero-heading">
        <h2 id="focus-hero-title" class="hero-title">${i}</h2>${me(s,n)}
      </div>
      ${a}
      ${d}
      ${gs(t,s,n)}
      <p class="hero-eyebrow">Your tiny first step</p>
      <p class="hero-step">${m(s.firstStep)}</p>
      <div class="hero-actions">${l}${f}</div>
    </section>`}function Bs(t,e,n){const s=e.source!=="file",o=e.events.map((a,d)=>{const l=ee(t,a);return`
        <li>
          <label class="import-row${l?" import-present":""}">
            <input type="checkbox" name="import-event" value="${d}"${l?" disabled":" checked"} />
            <span class="import-title">${m(a.title)}</span>
            <span class="import-due">${l?"Already in your tasks":gt(a.due,n)}</span>
          </label>
        </li>`}).join(""),i=s?`<p class="import-demo-note"><strong>Demo:</strong> made-up deadlines from a pretend ${m(e.label)}. They'll be marked <strong>Demo</strong>, stay off the focus card and out of your stats, and <strong>Remove demo tasks</strong> clears them.</p>`:`<p class="muted">Upcoming deadlines in <strong>${m(e.label)}</strong>. Untick any you don't want.</p>`;return`
    <form class="import-preview" novalidate aria-labelledby="import-preview-title">
      <h4 id="import-preview-title" tabindex="-1">${s?`Demo import: ${m(e.label)}`:"Pick deadlines to add"}</h4>
      ${i}
      <ul class="import-list">${o}</ul>
      <div class="deadline-actions">
        <button type="submit" class="primary">Add selected tasks</button>
        <button type="button" data-action="cancel-import">Cancel</button>
      </div>
    </form>`}function Hs(t,e,n){const s=Object.keys(pt).map(a=>`<button type="button" class="demo-import" data-action="demo-import" data-source="${a}">Demo: ${pt[a]}</button>`).join(""),o=e.error?`<p class="form-error" role="alert">${m(e.error)}</p>`:e.notice?`<p class="import-notice" role="status">${m(e.notice)}</p>`:"",i=Re(t)?'<p class="demo-present">Demo tasks are in your list. <button type="button" class="link-button" data-action="remove-demo">Remove demo tasks</button></p>':"";return`
    <section class="card calendar-import" aria-labelledby="calendar-title">
      <h3 id="calendar-title">Bring in deadlines</h3>
      <p class="muted">Canvas, Google Calendar, and Outlook can save a calendar as an <strong>.ics</strong> file. Choose one to add its upcoming deadlines. The file stays on this device.</p>
      <label class="file-pick" for="ics-file">Choose an .ics file</label>
      <input id="ics-file" class="file-input" type="file" accept=".ics,text/calendar" />
      ${o}
      ${e.preview?Bs(t,e.preview,n):""}
      <div class="demo-row">
        <p class="muted">Showing someone how it works? Try it with made-up deadlines:</p>
        <div class="deadline-actions">${s}</div>
      </div>
      ${i}
    </section>`}function Gs(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function Ys(t,e,n,s){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${m(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${m(e)}</p>
      <p class="countdown" role="timer">${dt(n)}</p>
      <button type="button" data-action="end-early">End early</button>
      ${s}
    </section>`}function fe(t){const e=t.service==="youtube"?"YouTube":"Spotify";return`
    <iframe class="mini-player mini-player-${t.service}" src="${m(t.embedUrl)}"
      title="${e} study playlist player" loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    <button type="button" class="link-button" data-action="remove-playlist">Remove playlist</button>`}function he(t){return t?"Pause":"Play"}function qs(t){const{settings:e}=t,n=Object.keys(X).map(i=>`
        <label class="soundscape-choice">
          <input type="radio" name="soundscape" value="${i}"${i===e.soundscape?" checked":""} />
          ${X[i]}
        </label>`).join(""),s=e.playlistLink?bt(e.playlistLink):null,o=t.playerLoaded&&s&&!("error"in s)?fe(s):"";return`
    <details class="sound-panel"${e.panelOpen?" open":""}>
      <summary>Focus sounds</summary>
      <fieldset class="soundscapes">
        <legend>Soundscape</legend>
        <div class="soundscape-choices">${n}</div>
      </fieldset>
      <div class="sound-controls">
        <button type="button" class="primary sound-toggle" data-action="toggle-sound"
          aria-pressed="${t.playing}">${he(t.playing)}</button>
        <label for="sound-volume">Volume</label>
        <input id="sound-volume" type="range" min="0" max="100" step="1" value="${Math.round(e.volume*100)}" />
      </div>
      <form class="playlist-form" novalidate>
        <label for="playlist-link">My Study Playlist</label>
        <div class="playlist-row">
          <input id="playlist-link" name="playlist" type="url" inputmode="url" autocomplete="off"
            maxlength="${re}" placeholder="Paste a YouTube or Spotify link"
            value="${m(e.playlistLink)}" />
          <button type="submit">Load player</button>
        </div>
        <p class="form-error playlist-error" role="alert"${t.playlistError?"":" hidden"}>${m(t.playlistError??"")}</p>
        <p class="muted playlist-hint">Works best on a laptop: Spotify plays 30-second previews unless you're signed in to Spotify in this browser, and phones pause YouTube when the screen locks.</p>
      </form>
      <div class="mini-player-slot">${o}</div>
    </details>`}function ye(t){const e=Math.round(t/1e3);return e<60?`${e} sec`:`${Math.round(e/60)} min`}function Us(t){return t.leftCount===void 0?"":t.leftCount===0?'<p class="away-line">You stayed on this page the whole time.</p>':`<p class="away-line">You left this page ${t.leftCount===1?"1 time":`${t.leftCount} times`} (${ye(t.awayMs??0)} in all).</p>`}function Ws(t,e){const n=e.minutes,s=Object.keys(_).map(o=>`<button type="button" class="primary" data-action="check-in" data-outcome="${o}">${_[o]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${m(t)}, ${n}-minute session</p>
      ${Us(e)}
      <div class="outcomes">${s}</div>
    </section>`}function ge(t,e){const{sessionsStarted:n,minutesFocused:s}=rn(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${n}</strong> ${n===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${s}</strong> min focused</span>`}function js(t,e,n){const s=t.active,o=s?t.tasks.find(u=>u.id===s.taskId):void 0;let i;if(s)if(C(s,n)>0){const u=qs(e.sound);i=Ys((o==null?void 0:o.title)??"Your task",(o==null?void 0:o.firstStep)??"",C(s,n),u)}else i=Ws((o==null?void 0:o.title)??"Your task",s);else{const u=e.followUp&&t.tasks.find(p=>p.id===e.followUp.taskId);i=(u?As(u,e.followUp,e.toolkit):Ps(t,e.skippedFocus,n))+Fs(t,e,n)}const a=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",d=s?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${ge(t,n)}</p>`}<main class="view${d}">${a}${i}${ms}</main>`}function Vs(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function Rs(){try{return window.localStorage}catch{return null}}function Ks(t,e=Rs(),n=Rn(),s=is()){var Ot;let o=qt(e);const i={formError:null,deadlineEdit:null,estimateEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null,sound:{settings:Qn(e),playing:!1,playerLoaded:!1,playlistError:null},skippedFocus:[],strategyFilter:"all",toolkit:cs(e),importer:{preview:null,error:null,notice:null}};let a="";const d=c=>ps(window.location.hash)==="advice"?"advice":o.active?C(o.active,c)>0?"running":"check-in":"list",l=c=>{var k;const r=Date.now();a=d(r),i.sound.playing=s.isPlaying(),t.innerHTML=Vs(a==="advice"?Be(Ss(i.strategyFilter,i.toolkit)):js(o,i,r)),M(r);const y=c==null?void 0:c();if(y){y.focus();return}document.documentElement.scrollTop=0,(k=t.querySelector("h2[tabindex]"))==null||k.focus()},u=(c,r)=>()=>[...t.querySelectorAll(`[data-action="${c}"]`)].find(y=>y.dataset.taskId===r)??null,f=c=>u("edit-deadline",c),p=()=>t.querySelector("#deadline-edit"),h=()=>t.querySelector("#estimate-edit"),g=()=>t.querySelector("#step-edit"),v=()=>t.querySelector('[data-action="undo-delete"]'),S=()=>t.querySelector("#next-step"),I=()=>t.querySelector("#follow-up-title"),D=()=>t.querySelector(".hero-skip"),L=(c,r,y)=>()=>[...t.querySelectorAll(`[data-action="${c}"]`)].find(k=>k.dataset[r]===y)??null,M=c=>{const r=o.active;if(!r)document.title=rt,n.cancel();else if(C(r,c)>0){document.title=`${dt(C(r,c))} · ${rt}`,n.chimeAt(r.endsAt);return}else document.title=`${us} · ${rt}`,r.endedEarlyAt!==void 0&&n.cancel();s.stop(),i.sound.playerLoaded=!1},E=c=>{o=c;try{if(!e)throw new Error("No storage");dn(e,o),i.saveFailed=!1}catch{i.saveFailed=!0}},T=(c,r)=>{E(c),l(r)},wt=()=>{const c=Date.now();if(document.visibilityState==="hidden"){E(sn(o,c));return}const r=o;if(E(ct(o,c)),o!==r&&d(c)==="check-in"&&a==="check-in"){l();return}xt()},tt=c=>{var y;const r=((y=i.estimateEdit)==null?void 0:y.taskId)??"";i.estimateEdit=null,T(c,u("edit-estimate",r))},et=c=>{var y;const r=((y=i.deadlineEdit)==null?void 0:y.taskId)??"";i.deadlineEdit=null,T(c,f(r))},$t=(c,r)=>{i.formError=null,i.stepEdit=null,i.deletedTask=null,i.deadlineEdit=null,i.followUp=null,i.skippedFocus=[],E(nn(o,c,r,Date.now())),i.sound.settings.playing&&o.active&&nt(o.active.endsAt),l()},P=()=>ts(e,i.sound.settings),nt=c=>{const{soundscape:r,volume:y}=i.sound.settings;s.play(r,y,c)},ke=()=>{const c=t.querySelector(".sound-toggle");c&&(c.textContent=he(s.isPlaying()),c.setAttribute("aria-pressed",String(s.isPlaying())))},be=()=>{const c=o.active;s.isPlaying()?(s.stop(),i.sound.settings.playing=!1):c&&C(c,Date.now())>0&&(nt(c.endsAt),i.sound.settings.playing=!0),P(),ke()},ve=c=>{i.sound.settings.soundscape=c,P(),s.isPlaying()&&o.active&&nt(o.active.endsAt)},we=c=>{i.sound.settings.volume=Math.min(1,Math.max(0,c/100)),s.setVolume(i.sound.settings.volume),P()},$e=c=>{const r=c.querySelector("#playlist-link"),y=c.querySelector(".playlist-error"),k=bt(r.value);if("error"in k){i.sound.playlistError=k.error,y.textContent=k.error,y.hidden=!1,r.focus();return}i.sound.playlistError=null,y.hidden=!0,i.sound.settings.playlistLink=r.value.trim(),i.sound.playerLoaded=!0,P(),t.querySelector(".mini-player-slot").innerHTML=fe(k)},Se=()=>{i.sound.settings.playlistLink="",i.sound.playerLoaded=!1,P(),t.querySelector(".mini-player-slot").innerHTML="";const c=t.querySelector("#playlist-link");c&&(c.value="",c.focus())},Te=()=>t.querySelector("#import-preview-title"),st=()=>t.querySelector(".calendar-import [role=alert], .calendar-import [role=status]"),St=c=>{i.importer={preview:c,error:null,notice:null},l(Te)},R=c=>{i.importer={preview:null,error:c,notice:null},l(st)},Ae=async c=>{var w;const r=(w=c.files)==null?void 0:w[0];if(c.value="",!r)return;if(r.size>Nn){R("That file is too big to be a calendar file. Choose the .ics file for one calendar.");return}let y;try{y=await r.text()}catch{R("Momentum couldn't read that file. Try choosing it again.");return}const k=Bn(y,Date.now());"error"in k?R(k.error):k.events.length===0?R("No upcoming deadlines were found in that file (it looks at the next 4 months)."):St({source:"file",label:r.name,events:k.events})},Ee=c=>{const r=i.importer.preview;if(!r)return;const y=[...c.querySelectorAll('input[name="import-event"]:checked')].map(B=>r.events[Number(B.value)]).filter(B=>B!==void 0),k=r.source!=="file",{state:w,added:x}=Ve(o,y,Date.now(),k),O=x===1?"task":"tasks",N=x===0?"Nothing was added: no deadlines were ticked, or they're already in your tasks.":k?`Added ${x} demo ${O}, marked Demo.`:`Added ${x} ${O}. Each starts with the step “${te}”; use Edit step to make it yours.`;i.importer={preview:null,error:null,notice:N},T(w,st)},Tt=c=>{const r=c.target;r.id==="ics-file"&&Ae(r)},K=c=>{const r=c.target;r.name==="soundscape"&&Object.hasOwn(X,r.value)?ve(r.value):r.id==="sound-volume"&&we(Number(r.value))},At=()=>{const c=i.followUp,r=t.querySelector("#next-step");if(!c||!r)return!0;const y=Pt(r.value);if(y){const k=r.value;return i.followUp={...c,editingStep:!0,error:y},l(S),t.querySelector("#next-step").value=k,!1}return o=Gt(o,c.taskId,r.value),!0},Et=c=>{c.key!==Z&&c.key!==null||(o=qt(e),l())},It=()=>{i.formError=null,l()},Dt=c=>{const r=c.target;r instanceof HTMLDetailsElement&&(r.classList.contains("completed-tasks")&&(i.completedOpen=r.open),r.classList.contains("patterns")&&(i.patternsOpen=r.open),r.classList.contains("sound-panel")&&(i.sound.settings.panelOpen=r.open,P()))},xt=()=>{const c=Date.now();if(d(c)!==a){l();return}const r=t.querySelector(".countdown");r&&o.active&&(r.textContent=dt(C(o.active,c)));const y=t.querySelector(".stats-bar");y&&o.active&&(y.innerHTML=ge(o,c)),M(c)},Lt=c=>{var x,O,N,B,Nt,Ct,Ft;n.unlock();const r=c.target.closest("[data-action]");if(!r)return;const y=Date.now(),k=i.followUp,w=r.dataset.taskId??"";switch(r.dataset.action){case"edit-deadline":i.stepEdit=null,i.estimateEdit=null,i.deadlineEdit={taskId:w,error:null},l(p);break;case"edit-step":i.deadlineEdit=null,i.estimateEdit=null,i.stepEdit={taskId:w,error:null},l(g);break;case"cancel-step-edit":{const b=((x=i.stepEdit)==null?void 0:x.taskId)??"";i.stepEdit=null,l(u("edit-step",b));break}case"delete-task":{const b=o.tasks.find(A=>A.id===w)??null;i.deletedTask=b,((O=i.stepEdit)==null?void 0:O.taskId)===w&&(i.stepEdit=null),((N=i.deadlineEdit)==null?void 0:N.taskId)===w&&(i.deadlineEdit=null),((B=i.estimateEdit)==null?void 0:B.taskId)===w&&(i.estimateEdit=null),T(We(o,w),v);break}case"undo-delete":{const b=i.deletedTask;i.deletedTask=null,b&&T(je(o,b),u("delete-task",b.id));break}case"edit-estimate":i.deadlineEdit=null,i.stepEdit=null,i.estimateEdit={taskId:w},l(h);break;case"cancel-estimate":tt(o);break;case"remove-estimate":tt(Bt(o,w,void 0));break;case"cancel-deadline":et(o);break;case"remove-deadline":et(Ht(o,r.dataset.taskId??"",""));break;case"start":$t(r.dataset.taskId??"",Number(r.dataset.minutes));break;case"end-early":T(on(o,y));break;case"check-in":{const b=((Nt=o.active)==null?void 0:Nt.taskId)??"",A=r.dataset.outcome;i.followUp={taskId:b,outcome:A,editingStep:!1,stepSaved:!1,error:null},T(an(o,A,y));break}case"start-now":k&&At()&&$t(k.taskId,Number(r.dataset.minutes));break;case"shrink-step":k&&(i.followUp={...k,editingStep:!0,error:null}),l(S);break;case"cancel-step":k&&(i.followUp={...k,editingStep:!1,error:null}),l(I);break;case"dismiss-follow-up":i.followUp=null,l();break;case"demo-import":{const b=r.dataset.source;(b==="google"||b==="outlook")&&St({source:b,label:pt[b],events:Pn(b,y)});break}case"cancel-import":i.importer={preview:null,error:null,notice:null},l(()=>t.querySelector("#calendar-title"));break;case"remove-demo":i.importer={preview:null,error:null,notice:"Removed the demo tasks and any sessions on them."},T(Ke(o),st);break;case"jump":{const b=Xt.find(Me=>Me.id===r.dataset.target),A=b?t.querySelector(`#${b.id}`):null,Le=((Ct=window.matchMedia)==null?void 0:Ct.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;(Ft=A==null?void 0:A.scrollIntoView)==null||Ft.call(A,{block:"start",behavior:Le?"auto":"smooth"}),A==null||A.focus({preventScroll:!0});break}case"strategy-filter":{const b=r.dataset.filter??"";as(b)&&(i.strategyFilter=b),l(L("strategy-filter","filter",i.strategyFilter));break}case"toggle-toolkit":{const b=r.dataset.strategyId??"";i.toolkit=rs(i.toolkit,b),ds(e,i.toolkit);const A=L("toggle-toolkit","strategyId",b);l(()=>A()??L("strategy-filter","filter",i.strategyFilter)());break}case"skip-focus":i.skippedFocus=[...i.skippedFocus,w],l(D);break;case"toggle-sound":be();break;case"remove-playlist":Se();break;case"reopen":T(ze(o,r.dataset.taskId??""));break}},Ie=c=>{const r=c.dataset.taskId??"",y=c.elements.namedItem("deadline").value;if(y!==""&&!j(y)){i.deadlineEdit={taskId:r,error:"Pick a real date, or remove the deadline."},l(p);return}et(Ht(o,r,y))},De=c=>{const r=c.dataset.taskId??"",y=c.elements.namedItem("firstStep").value,k=Pt(y);if(k){i.stepEdit={taskId:r,error:k},l(g),t.querySelector("#step-edit").value=y;return}i.stepEdit=null,T(Gt(o,r,y),u("edit-step",r))},Mt=c=>{const r=c.target;if(r.classList.contains("estimate-editor")){c.preventDefault();const N=Number(r.elements.namedItem("estimate").value);tt(Bt(o,r.dataset.taskId??"",N||void 0));return}if(r.classList.contains("deadline-editor")){c.preventDefault(),Ie(r);return}if(r.classList.contains("import-preview")){c.preventDefault(),Ee(r);return}if(r.classList.contains("playlist-form")){c.preventDefault(),$e(r);return}if(r.classList.contains("task-step-editor")){c.preventDefault(),De(r);return}if(r.classList.contains("step-editor")){c.preventDefault(),i.followUp&&At()&&(i.followUp={...i.followUp,editingStep:!1,stepSaved:!0,error:null},T(o,I));return}if(r.id!=="add-task")return;c.preventDefault();const y=r.elements.namedItem("title").value,k=r.elements.namedItem("firstStep").value,w=r.elements.namedItem("deadline").value,x=r.elements.namedItem("estimate").value,O=Ue(y,k,w);if(i.formError=O,O){l(),t.querySelector("#task-title").value=y,t.querySelector("#first-step").value=k,t.querySelector("#deadline").value=w,t.querySelector("#estimate").value=x;const N={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(N[O.field]).focus();return}T(Zt(o,y,k,Date.now(),w,Number(x)||void 0))};t.addEventListener("click",Lt),t.addEventListener("submit",Mt),t.addEventListener("toggle",Dt,!0),t.addEventListener("change",K),t.addEventListener("change",Tt),t.addEventListener("input",K),window.addEventListener("hashchange",It),window.addEventListener("storage",Et),((Ot=o.active)==null?void 0:Ot.hiddenAt)!==void 0&&document.visibilityState!=="hidden"&&E(ct(o,Date.now())),document.addEventListener("visibilitychange",wt);const xe=window.setInterval(xt,1e3);return l(),()=>{n.cancel(),s.stop(),t.removeEventListener("click",Lt),t.removeEventListener("submit",Mt),t.removeEventListener("toggle",Dt,!0),t.removeEventListener("change",K),t.removeEventListener("change",Tt),t.removeEventListener("input",K),window.removeEventListener("hashchange",It),window.removeEventListener("storage",Et),document.removeEventListener("visibilitychange",wt),window.clearInterval(xe)}}const Jt=document.getElementById("app");Jt&&Ks(Jt);
