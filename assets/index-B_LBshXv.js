(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const Yt='<a class="back-link" href="#">← Back to my task</a>',se=[{id:"rescue-title",label:"Stuck right now?"},{id:"strategies-title",label:"10 strategies"},{id:"why-title",label:"Why it matters"}],He=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],Ye=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]],Be=[["😮‍💨","More stress, later","Studies of students found procrastinators felt less stressed early in a term but far more stressed, and got sick more often, as deadlines hit. The stress isn't avoided, just postponed and concentrated."],["🩺","Health slips too","Chronic procrastination is linked to worse sleep, less exercise, and putting off medical checkups: small delays in the things that keep you well."],["📉","Rushed work, lower quality","Last-minute work leaves no room to review, ask questions, or fix mistakes. “I work better under pressure” usually means “pressure is the only thing that gets me started.”"],["🔁","It compounds","One delayed task squeezes the next one. A missed reply becomes an awkward follow-up; a late bill becomes a fee. Small delays snowball into bigger problems."],["🤝","Eroded self-trust","Every broken promise to yourself teaches you that your plans don't count. Over time that makes it harder to believe “I'll do it tomorrow,” even when you mean it."],["🧭","Lost opportunities","Applications not sent, ideas never started, conversations not had. The biggest cost is often the things that never happen at all."]],Ge=`
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
  </svg>`,qe=`
  <section class="card why" aria-labelledby="why-title">
    <p class="eyebrow">Understand it</p>
    <h3 id="why-title" class="jump-target" tabindex="-1">Why it matters</h3>
    <p class="muted">Putting things off feels harmless in the moment; that's exactly what makes it tricky. The cost doesn't arrive when you delay; it arrives later, with interest. Knowing how the trap works makes it much easier to step around.</p>

    <h4>The relief trap</h4>
    ${Ge}
    <p><strong>Procrastination is mostly about feelings, not time management.</strong> A task stirs up something unpleasant (boredom, confusion, fear of doing it badly) and avoiding it makes that feeling go away instantly. Your brain learns that avoidance “works.”</p>
    <p>But the relief is borrowed. The task is still there, now with less time and more guilt attached, so it feels even harder to start next time. Each lap around the loop makes it tighter.</p>
    <p><strong>The good news:</strong> because it's a loop, breaking it at <em>any</em> point helps, and the easiest point is usually just making the start smaller.</p>

    <h4>What it quietly costs you</h4>
    <p class="muted">None of these show up on the day you delay. They pile up in the background.</p>
    <ul class="costs">
      ${Be.map(([t,e,s])=>`
        <li class="cost">
          <span class="cost-icon" aria-hidden="true">${t}</span>
          <strong class="cost-title">${e}</strong>
          <p>${s}</p>
        </li>`).join("")}
    </ul>
  </section>`,Ue=`
  <p class="sources">
    Ideas here draw on research by Tim Pychyl and Fuschia Sirois (procrastination as emotion regulation),
    Tice &amp; Baumeister (stress and health in student procrastinators), Wohl, Pychyl &amp; Bennett
    (self-forgiveness), Peter Gollwitzer (if-then planning), Katy Milkman (temptation bundling), and
    Kahneman &amp; Tversky (the planning fallacy). This page offers general guidance. If procrastination is
    seriously affecting your work or wellbeing, talking to a counselor or doctor can help, especially since
    it can sometimes be linked to things like ADHD, anxiety, or depression.
  </p>`;function We(t=""){const e=se.map(({id:s,label:n})=>`<button type="button" class="jump-link" data-action="jump" data-target="${s}">${n}</button>`).join("");return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${Yt}</nav>

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
          ${He.map(([s,n])=>`<li><strong>${s}</strong> ${n}</li>`).join("")}
        </ol>
      </section>

      ${t}

      ${qe}

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${Ye.map(([s,n])=>`<li><span class="myth">${s}</span> ${n}</li>`).join("")}
        </ul>
        ${Ue}
      </section>

      <nav class="back-bar">${Yt}</nav>
    </main>
  `}const Q="momentum.v1",ft=[5,15,25],W=120,_=200,je=`${Q}.backup`,C={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"},ht=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 hour"},{minutes:120,label:"2 hours"},{minutes:240,label:"4+ hours"}],Re=120;function yt(t){return ht.some(e=>e.minutes===t)}function Ve(t){var e;return((e=ht.find(s=>s.minutes===t))==null?void 0:e.label)??`${t} min`}const Ke=1e4;function U(){return{tasks:[],checkIns:[],active:null}}function R(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[s,n,o]=e.slice(1).map(Number),i=new Date(s,n-1,o);return i.getFullYear()===s&&i.getMonth()===n-1&&i.getDate()===o}function Bt(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>_?`Keep the step to ${_} characters or fewer.`:null}function ze(t,e,s=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>W?{field:"title",message:`Keep the task name to ${W} characters or fewer.`}:e.trim().length>_?{field:"firstStep",message:`Keep the first step to ${_} characters or fewer.`}:s!==""&&!R(s)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function ne(t,e,s,n,o="",i){const a={id:`${n}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:s.trim(),createdAt:n,...o!==""?{deadline:o}:{},...yt(i)?{estimateMinutes:i}:{}};return{...t,tasks:[...t.tasks,a]}}function Gt(t,e,s){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{estimateMinutes:o,...i}=n;return yt(s)?{...i,estimateMinutes:s}:i})}}function oe(t,e){const s=t.checkIns.filter(n=>n.taskId===e).reduce((n,o)=>n+Math.max(0,o.endedAt-o.startedAt),0);return Math.floor(s/6e4)}function J(t,e){return e.estimateMinutes===void 0?null:Math.max(0,e.estimateMinutes-oe(t,e.id))}function ct(t,e){if(!e.deadline)return null;const s=J(t,e)??0,n=Math.max(1,Math.ceil(s/Re)),[o,i,a]=e.deadline.split("-").map(Number);return w(new Date(o,i-1,a-(n-1)).getTime())}function qt(t,e,s){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{deadline:o,...i}=n;return s===""?i:{...i,deadline:s}})}}function Ut(t,e,s){return{...t,tasks:t.tasks.map(n=>n.id===e?{...n,firstStep:s.trim()}:n)}}function Je(t,e){return{...t,tasks:t.tasks.filter(s=>s.id!==e)}}function Xe(t,e){return t.tasks.some(s=>s.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}const ie="Open it and read what it asks for";function ae(t,e){const s=e.title.trim().toLowerCase();return t.tasks.some(n=>n.title.toLowerCase()===s&&n.deadline===e.due)}function Ze(t,e,s,n=!1){let o=t,i=0;for(const a of e){const d=a.title.trim().slice(0,W);if(!(d===""||!R(a.due)||ae(o,{title:d,due:a.due}))){if(o=ne(o,d,ie,s+i,a.due),n){const r=o.tasks[o.tasks.length-1];o={...o,tasks:[...o.tasks.slice(0,-1),{...r,demo:!0}]}}i+=1}}return{state:o,added:i}}function re(t,e){return t.tasks.some(s=>s.id===e&&s.demo===!0)}function q(t){return t.checkIns.filter(e=>!re(t,e.taskId))}function Qe(t){return t.tasks.some(e=>e.demo===!0)}function ts(t){const e=new Set(t.tasks.filter(s=>s.demo===!0).map(s=>s.id));return{...t,tasks:t.tasks.filter(s=>!e.has(s.id)),checkIns:t.checkIns.filter(s=>!e.has(s.taskId)),active:t.active&&e.has(t.active.taskId)?null:t.active}}function es(t,e){return{...t,tasks:t.tasks.map(s=>{if(s.id!==e)return s;const{completedAt:n,...o}=s;return o})}}function gt(t){return os(t.filter(e=>e.completedAt===void 0))}function le(t){const e=i=>t.checkIns.filter(a=>a.taskId===i).length,s=gt(t.tasks).filter(i=>!i.demo),n=s.filter(i=>i.deadline!==void 0).sort((i,a)=>ct(t,i).localeCompare(ct(t,a))||(J(t,a)??0)-(J(t,i)??0)||i.deadline.localeCompare(a.deadline)||i.createdAt-a.createdAt),o=s.filter(i=>i.deadline===void 0).sort((i,a)=>e(i.id)-e(a.id)||i.createdAt-a.createdAt);return[...n,...o]}function ss(t,e=[]){const s=le(t);return s.find(n=>!e.includes(n.id))??s[0]??null}function ns(t){return t.filter(e=>e.completedAt!==void 0).sort((e,s)=>(s.completedAt??0)-(e.completedAt??0))}function os(t){return[...t].sort((e,s)=>e.deadline&&s.deadline?e.deadline.localeCompare(s.deadline)||e.createdAt-s.createdAt:e.deadline?-1:s.deadline?1:e.createdAt-s.createdAt)}function w(t){const e=new Date(t),s=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`}const is={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function as(t,e){const[s,n,o]=t.split("-").map(Number),i=new Date(e),a=new Date(i.getFullYear(),i.getMonth(),i.getDate());return Math.round((new Date(s,n-1,o).getTime()-a.getTime())/864e5)}function rs(t,e){if(!t)return null;const s=as(t,e);return s<0?"overdue":s===0?"today":s===1?"tomorrow":s<=3?"soon":null}function kt(t,e){const s=w(e);if(t===s)return"Due today";const[n,o,i]=t.split("-").map(Number),a=new Date(n,o-1,i).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...n!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<s?`Overdue: ${a}`:`Due ${a}`}function ls(t,e,s,n){return{...t,active:{taskId:e,minutes:s,startedAt:n,endsAt:n+s*6e4,leftCount:0,awayMs:0}}}function cs(t,e){const s=t.active;return!s||s.leftCount===void 0||s.hiddenAt!==void 0||F(s,e)<=0?t:{...t,active:{...s,hiddenAt:e}}}function dt(t,e){const s=t.active;if(!s||s.hiddenAt===void 0)return t;const{hiddenAt:n,...o}=s,i=s.endedEarlyAt??s.endsAt,a=Math.max(0,Math.min(e,i)-n);return a<Ke?{...t,active:o}:{...t,active:{...o,leftCount:(o.leftCount??0)+1,awayMs:(o.awayMs??0)+a}}}function ds(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function F(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function us(t,e,s){const n=dt(t,s).active;if(!n)return t;const o={taskId:n.taskId,minutes:n.minutes,startedAt:n.startedAt,endedAt:Math.min(n.endedEarlyAt??n.endsAt,s),outcome:e,...n.leftCount!==void 0?{leftCount:n.leftCount,awayMs:n.awayMs??0}:{}},i=e==="finished"?t.tasks.map(a=>a.id===n.taskId?{...a,completedAt:s}:a):t.tasks;return{...t,tasks:i,checkIns:[...t.checkIns,o],active:null}}function ps(t,e){const s=w(e),n=q(t).map(({startedAt:a,endedAt:d})=>({startedAt:a,endedAt:d}));if(t.active&&!re(t,t.active.taskId)){const{startedAt:a,endsAt:d,endedEarlyAt:r}=t.active;n.push({startedAt:a,endedAt:Math.min(r??d,e)})}const o=n.filter(a=>w(a.startedAt)===s),i=o.reduce((a,d)=>a+Math.max(0,d.endedAt-d.startedAt),0);return{sessionsStarted:o.length,minutesFocused:Math.floor(i/6e4)}}function G(t){return`${t.taskId}|${t.startedAt}`}const ce=["kept-going","stopped","distracted"];function ms(t,e,s){return ce.includes(s)?{...t,checkIns:t.checkIns.map(n=>G(n)===e&&n.outcome!=="finished"?{...n,outcome:s}:n)}:t}function fs(t,e){const s=t.checkIns.find(n=>G(n)===e)??null;return s?{state:{...t,checkIns:t.checkIns.filter(n=>n!==s)},removed:s}:{state:t,removed:null}}function hs(t,e){if(t.checkIns.some(n=>G(n)===G(e)))return t;const s=[...t.checkIns,e].sort((n,o)=>n.startedAt-o.startedAt);return{...t,checkIns:s}}function ys(t,e){return[...t.checkIns].reverse().find(s=>s.taskId===e)}function gs(t){const e=t.filter(i=>i.leftCount!==void 0),s=e.filter(i=>(i.leftCount??0)>0),n=e.filter(i=>i.leftCount===0),o=i=>i.filter(a=>a.outcome==="distracted").length;return{tracked:e.length,left:s.length,awayMs:s.reduce((i,a)=>i+(a.awayMs??0),0),distractedWhenLeft:o(s),distractedWhenStayed:o(n)}}function Wt(t){const[e,s,n]=t.split("-").map(Number);return w(new Date(e,s-1,n-1).getTime())}function V(t,e){const s=q(t),n=new Set(s.map(p=>w(p.startedAt))),o=w(e),i=n.has(o);let a=i?o:Wt(o),d=0;for(;n.has(a);)d+=1,a=Wt(a);const r=ft.map(p=>{const f=s.filter(g=>g.minutes===p);return{minutes:p,sessions:f.length,keptGoing:f.filter(g=>g.outcome==="kept-going").length}}),u=r.filter(p=>p.keptGoing>0).sort((p,f)=>f.keptGoing/f.sessions-p.keptGoing/p.sessions||f.sessions-p.sessions)[0],m=Object.fromEntries(Object.keys(C).map(p=>[p,s.filter(f=>f.outcome===p).length]));return{streakDays:d,sessionToday:i,lengths:r,bestLength:(u==null?void 0:u.minutes)??null,outcomeCounts:m,totalSessions:s.length,drift:gs(s)}}function ut(t){const e=Math.ceil(t/1e3),s=Math.floor(e/60),n=e%60;return`${s}:${String(n).padStart(2,"0")}`}function jt(t){if(!t)return U();let e;try{e=t.getItem(Q)}catch{return U()}if(e===null)return U();let s;try{s=JSON.parse(e)}catch{return Rt(t,e),U()}const n=bs(s);return JSON.stringify(n)!==JSON.stringify(s)&&Rt(t,e),n}function ks(t,e){t.setItem(Q,JSON.stringify(e))}function Rt(t,e){try{t.setItem(je,e)}catch{}}function bs(t){if(!tt(t))return U();const e=Array.isArray(t.tasks)?t.tasks.filter(ws).map(vs).map(As).map(Ss).map($s):[],s=Array.isArray(t.checkIns)?t.checkIns.filter(Ts).map(Vt):[],n=Es(t.active)?Vt(t.active):null;return{tasks:e,checkIns:s,active:n}}function Vt(t){const e=n=>typeof n=="number"&&Number.isFinite(n)&&n>=0;let s=t;if((t.leftCount!==void 0||t.awayMs!==void 0)&&(!e(t.leftCount)||!e(t.awayMs??0))){const{leftCount:n,awayMs:o,...i}=s;s=i}if(s.hiddenAt!==void 0&&!e(s.hiddenAt)){const{hiddenAt:n,...o}=s;s=o}return s}function tt(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function ws(t){return tt(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function vs(t){if(t.deadline===void 0||typeof t.deadline=="string"&&R(t.deadline))return t;const{deadline:e,...s}=t;return s}function $s(t){if(t.estimateMinutes===void 0||yt(t.estimateMinutes))return t;const{estimateMinutes:e,...s}=t;return s}function Ss(t){if(t.demo===void 0||t.demo===!0)return t;const{demo:e,...s}=t;return s}function As(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...s}=t;return s}function Ts(t){return tt(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(C,t.outcome)}function Es(t){return tt(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const de=3,Kt=3,bt=.2,it=864e5;function Ds(t){const e=new Date(t).getHours();return e>=5&&e<12?"morning":e>=12&&e<17?"afternoon":e>=17&&e<22?"evening":"night"}const Is=t=>t.filter(e=>e.outcome==="kept-going").length,X=t=>`“${t.title}”`;function pt(t,e){const[s,n,o]=t.split("-").map(Number);return w(new Date(s,n-1,o+e).getTime())}function xs(t,e){const{left:s,distractedWhenLeft:n,distractedWhenStayed:o,tracked:i}=V(t,e).drift,a=i-s;return s<3||a<1||n/s-o/a<bt?null:{kind:"drift",text:`When you leave the page, ${n} of ${s} sessions end in Got distracted; when you stay, ${o} of ${a}. Putting your phone in another room before you start may help.`}}function Ms(t,e){const{lengths:s,bestLength:n}=V(t,e),o=s.find(d=>d.minutes===n),i=s.filter(d=>d.minutes!==n&&d.sessions>0);if(!o||o.sessions<3||i.length===0)return null;const a=o.keptGoing/o.sessions;return i.some(d=>a-d.keptGoing/d.sessions<bt)?null:{kind:"best-length",text:`${o.minutes}-minute sessions go best for you: you kept going in ${o.keptGoing} of ${o.sessions}. Try ${o.minutes} first.`}}function Ls(t){const e=["morning","afternoon","evening","night"].map(o=>{const i=t.filter(a=>Ds(a.startedAt)===o);return{part:o,sessions:i.length,kept:Is(i)}}).filter(o=>o.sessions>=3).sort((o,i)=>i.kept/i.sessions-o.kept/o.sessions);if(e.length<2)return null;const[s,n]=e;return s.kept===0||s.kept/s.sessions-n.kept/n.sessions<bt?null:{kind:"time-of-day",text:`Your ${s.part}s go best: you kept going in ${s.kept} of ${s.sessions}. Put the hardest task there when you can.`}}function Os(t,e,s){const n=w(s),o=pt(n,3),i=t.filter(u=>!e.some(m=>m.taskId===u.id)),a=i.find(u=>u.deadline!==void 0&&u.deadline>=n&&u.deadline<=o);if(a){const u=Math.round((new Date(`${a.deadline}T00:00:00`).getTime()-new Date(`${n}T00:00:00`).getTime())/it),m=u===0?"today":u===1?"tomorrow":`in ${u} days`;return{kind:"avoided",text:`${X(a)} is due ${m} and hasn't had a session yet. Its first step might be too big; try shrinking it.`}}const d=i.filter(u=>s-u.createdAt>=7*it).sort((u,m)=>u.createdAt-m.createdAt)[0];if(!d)return null;const r=Math.floor((s-d.createdAt)/it);return{kind:"avoided",text:`${X(d)} has been on your list ${r} days without a session. Its first step might be too big; try shrinking it.`}}function Cs(t,e){const s=w(e),n=t.filter(a=>a.deadline!==void 0&&a.deadline<s).sort((a,d)=>a.deadline.localeCompare(d.deadline));if(n.length===0)return null;const o=n[0];return{kind:"overdue",text:n.length===1?`${X(o)} is overdue. One 5-minute session on it breaks the freeze.`:`${n.length} tasks are overdue. One 5-minute session on ${X(o)} breaks the freeze.`}}function Ns(t,e,s){const{streakDays:n}=V(t,s);if(n>=3)return{kind:"streak",text:`${n} days in a row. That's a habit forming.`};if(n>0)return null;const o=new Set(e.map(r=>w(r.startedAt))),i=w(s),a=[...o].filter(r=>r<i).sort().at(-1);if(!a||a<pt(i,-7))return null;let d=0;for(let r=a;o.has(r);r=pt(r,-1))d+=1;return d<3?null:{kind:"streak",text:`Your ${d}-day streak ended. Today's first small step starts a new one, and it counts fully.`}}function Fs(t,e){const s=t.filter(n=>n.outcome==="distracted").length;return s<3||e.length>0?null:{kind:"toolkit",text:`You've been pulled away in ${s} sessions. Pick a strategy or two for those moments.`,link:{href:"#getting-unstuck",label:"Open the 10 strategies"}}}function ue(t){return q(t).length>=de}function _s(t,e,s=[]){if(!ue(t))return[];const n=q(t),o=gt(t.tasks).filter(u=>!u.demo),a=[xs(t,e),Ms(t,e),Ls(n),Os(o,n,e),Cs(o,e),Ns(t,n,e),Fs(n,s)].filter(u=>u!==null),d=a.slice(0,Kt),r=a.find(u=>zt.includes(u.kind));return r&&!d.some(u=>zt.includes(u.kind))&&d.splice(Kt-1,1,r),d}const zt=["avoided","overdue"],Ps=5,Hs=[{name:"Seedling",note:"One session today sprouts its first leaves."},{name:"First sprout",note:"One day of focus, planted. Keep it going tomorrow."},{name:"Young shoot",note:"Two days in a row: it's starting to show."},{name:"Leafing out",note:"Three days in a row. This is what a rhythm looks like."},{name:"Full bloom",note:"Four days in a row: a real habit forming."},{name:"Flourishing",note:"Five days or more in a row. This is what consistency looks like."}];function Ys(t){const e=new Date(t),s=(e.getDay()+6)%7;return new Date(e.getFullYear(),e.getMonth(),e.getDate()-s).getTime()}function Bs(t,e){const s=q(t),{streakDays:n}=V(t,e),o=s.map(({startedAt:g,endedAt:v})=>({startedAt:g,endedAt:v})),i=t.active;i&&!t.tasks.some(g=>g.id===i.taskId&&g.demo)&&o.push({startedAt:i.startedAt,endedAt:Math.min(i.endedEarlyAt??i.endsAt,e)});const a=Ys(e),d=new Date(a),r=new Date(d.getFullYear(),d.getMonth(),d.getDate()-7).getTime(),u=(g,v)=>Math.floor(o.filter(A=>A.startedAt>=g&&A.startedAt<v).reduce((A,I)=>A+Math.max(0,I.endedAt-I.startedAt),0)/6e4),m=t.tasks.filter(g=>g.completedAt!==void 0&&!g.demo),p=m.filter(g=>g.deadline!==void 0),f=p.filter(g=>w(g.completedAt)<=g.deadline);return{stage:Math.min(n,Ps),streakDays:n,notStarted:s.length===0&&o.length===0,freshStart:n===0&&s.length>0,finishedWithDeadline:p.length,finishedOnTime:f.length,focusedThisWeek:u(a,Number.POSITIVE_INFINITY),focusedLastWeek:u(r,a),tasksFinished:m.length}}const Gs=30;function Jt(t,e){const s=t.tasks.find(o=>o.id===e.taskId),n=Math.floor(Math.max(0,e.endedAt-e.startedAt)/6e4);return{key:G(e),startedAt:e.startedAt,taskId:e.taskId,taskTitle:(s==null?void 0:s.title)??null,demo:(s==null?void 0:s.demo)===!0,plannedMinutes:e.minutes,actualMinutes:n,endedEarly:e.endedAt-e.startedAt<e.minutes*6e4-3e4,outcome:e.outcome,...e.leftCount!==void 0?{leftCount:e.leftCount,awayMs:e.awayMs??0}:{}}}function qs(t,e,s="",n=!1){const o=t.checkIns.filter(m=>s===""||m.taskId===s),i=new Date(e),a=w(new Date(i.getFullYear(),i.getMonth(),i.getDate()-(Gs-1)).getTime()),d=n?o:o.filter(m=>w(m.startedAt)>=a),r=new Map;for(const m of[...d].sort((p,f)=>f.startedAt-p.startedAt)){const p=w(m.startedAt);r.set(p,[...r.get(p)??[],Jt(t,m)])}return{days:[...r.entries()].map(([m,p])=>({day:m,entries:p,minutes:p.reduce((f,g)=>f+g.actualMinutes,0)})),totalSessions:o.length,totalMinutes:o.reduce((m,p)=>m+Jt(t,p).actualMinutes,0),hasOlder:d.length<o.length}}function Us(t,e){const s=new Date(e);if(t===w(e))return"Today";if(t===w(new Date(s.getFullYear(),s.getMonth(),s.getDate()-1).getTime()))return"Yesterday";const[n,o,i]=t.split("-").map(Number);return new Date(n,o-1,i).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...n!==s.getFullYear()?{year:"numeric"}:{}})}function Xt(t){return new Date(t).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}).toLowerCase()}function Ws(t){return t.endedEarly?`ended at ${t.actualMinutes} of ${t.plannedMinutes} min`:`${t.plannedMinutes} min`}function js(t){const e=new Set(t.checkIns.map(s=>s.taskId));return t.tasks.filter(s=>e.has(s.id)).map(s=>({id:s.id,title:s.title})).sort((s,n)=>s.title.localeCompare(n.title))}const Rs=1e6,Vs=120,Ks=100,mt={google:"Google Calendar",outlook:"Outlook"},zs={google:[["Problem set 9",1],["Read chapter 7 before discussion",2],["Lab report draft",5]],outlook:[["Email advisor about spring classes",1],["Scholarship application",4],["Group project check-in slides",6]]};function Js(t,e){const s=new Date(e);return zs[t].map(([n,o])=>({title:n,due:w(new Date(s.getFullYear(),s.getMonth(),s.getDate()+o).getTime())}))}function Xs(t,e){var d,r;if(!/BEGIN:VCALENDAR/i.test(t))return{error:"That file isn't a calendar file. Look for one ending in .ics."};const s=w(e),n=new Date(e),o=w(new Date(n.getFullYear(),n.getMonth(),n.getDate()+Vs).getTime()),i=[],a=new Set;for(const u of Qs(Zs(t))){const m=tn(u.lines);if(m.has("RRULE")||((d=m.get("STATUS"))==null?void 0:d.value.toUpperCase())==="CANCELLED")continue;const p=(u.kind==="VTODO"?m.get("DUE"):void 0)??m.get("DTSTART"),f=p?en(p.value):null,g=sn(((r=m.get("SUMMARY"))==null?void 0:r.value)??"").slice(0,W).trim();if(!f||g===""||f<s||f>o)continue;const v=`${g.toLowerCase()}|${f}`;a.has(v)||(a.add(v),i.push({title:g,due:f}))}return i.sort((u,m)=>u.due.localeCompare(m.due)||u.title.localeCompare(m.title)),{events:i.slice(0,Ks)}}function Zs(t){return t.replace(/\r\n?/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function Qs(t){const e=[];let s=null;for(const n of t){const o=n.trim().toUpperCase();o==="BEGIN:VEVENT"||o==="BEGIN:VTODO"?s={kind:o==="BEGIN:VEVENT"?"VEVENT":"VTODO",lines:[]}:(o==="END:VEVENT"||o==="END:VTODO")&&s?(e.push(s),s=null):s&&s.lines.push(n)}return e}function tn(t){const e=new Map;for(const s of t){const n=s.indexOf(":");if(n<=0)continue;const o=s.slice(0,n).split(";")[0].trim().toUpperCase();e.has(o)||e.set(o,{value:s.slice(n+1).trim()})}return e}function en(t){const e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?$/.exec(t);if(!e)return null;const[,s,n,o,i,a,d,r]=e;if(r){const m=Date.UTC(+s,+n-1,+o,+i,+a,+d);return Number.isNaN(m)?null:w(m)}const u=`${s}-${n}-${o}`;return R(u)?u:null}function sn(t){return t.replace(/\\[nN]/g," ").replace(/\\([,;\\])/g,"$1").replace(/\s+/g," ")}const nn=[523.25,659.25,783.99],on=.22,Zt=1.4,an=.12;function rn(){let t=null,e=null,s=null,n=[];const o=()=>{for(const a of n){try{a.stop()}catch{}a.disconnect()}n=[],s=null},i=()=>{if(!t||t.state!=="running"||e===null||s===e)return;o();const a=(e-Date.now())/1e3;if(a<0)return;const d=t.currentTime+a;n=nn.map((r,u)=>{const m=d+u*on,p=t.createOscillator(),f=t.createGain();return p.type="sine",p.frequency.value=r,f.gain.setValueAtTime(0,m),f.gain.linearRampToValueAtTime(an,m+.03),f.gain.exponentialRampToValueAtTime(1e-4,m+Zt),p.connect(f).connect(t.destination),p.start(m),p.stop(m+Zt),p}),s=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?i():t.resume().then(i,()=>{})},chimeAt(a){e=a,i()},cancel(){e=null,o()}}}const pe="momentum.sound.v1",me=500,Z={brown:"Brown noise",rain:"Rain",hum:"Warm hum"},at={soundscape:"rain",volume:.4,playing:!1,playlistLink:"",panelOpen:!0},rt="Paste a YouTube or Spotify playlist link, like https://www.youtube.com/playlist?list=…",ln=/^[A-Za-z0-9_-]{2,64}$/,cn=/^[A-Za-z0-9_-]{11}$/,dn=/^[A-Za-z0-9]{22}$/,un=["playlist","album","track","episode","show"];function wt(t){const e=t.trim();if(e==="")return{error:"Paste a playlist link first."};if(e.length>me)return{error:"That link is too long to be a playlist link."};const s=/^spotify:([a-z]+):([A-Za-z0-9]+)$/.exec(e);if(s)return Qt(s[1],s[2]);let n;try{n=new URL(/^[a-z]+:\/\//i.test(e)?e:`https://${e}`)}catch{return{error:rt}}if(n.protocol!=="https:"&&n.protocol!=="http:")return{error:rt};const o=n.hostname.toLowerCase().replace(/^(www|m|music)\./,"");if(o==="youtube.com"||o==="youtu.be"||o==="youtube-nocookie.com")return pn(n,o);if(o==="open.spotify.com"){const i=n.pathname.split("/").filter(r=>r!==""&&!r.startsWith("intl-")),a=i[0]==="embed"?i[1]:i[0],d=i[0]==="embed"?i[2]:i[1];return Qt(a??"",d??"")}return{error:rt}}function pn(t,e){var o;const s=t.searchParams.get("list");if(s!==null)return ln.test(s)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/videoseries?list=${s}`}:{error:"That YouTube playlist link looks broken. Copy it again from YouTube."};let n=null;return e==="youtu.be"?n=t.pathname.slice(1):t.pathname==="/watch"?n=t.searchParams.get("v"):n=((o=/^\/(?:embed|shorts|live)\/([^/]+)/.exec(t.pathname))==null?void 0:o[1])??null,n!==null&&cn.test(n)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/${n}`}:{error:"That YouTube link has no playlist or video in it. Open the playlist and copy its link."}}function Qt(t,e){return!un.includes(t)||!dn.test(e)?{error:"That Spotify link has no playlist in it. In Spotify, use Share → Copy link to playlist."}:{service:"spotify",embedUrl:`https://open.spotify.com/embed/${t}/${e}`}}function mn(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(pe))??"null")}catch{return{...at}}if(typeof e!="object"||e===null||Array.isArray(e))return{...at};const s=e,n={...at};return typeof s.soundscape=="string"&&Object.hasOwn(Z,s.soundscape)&&(n.soundscape=s.soundscape),typeof s.volume=="number"&&s.volume>=0&&s.volume<=1&&(n.volume=s.volume),typeof s.playing=="boolean"&&(n.playing=s.playing),typeof s.panelOpen=="boolean"&&(n.panelOpen=s.panelOpen),typeof s.playlistLink=="string"&&!("error"in wt(s.playlistLink))&&(n.playlistLink=s.playlistLink),n}function fn(t,e){try{return t?(t.setItem(pe,JSON.stringify(e)),!0):!1}catch{return!1}}const te=.35,hn=.6,yn=.8,gn=2,kn=4;function bn(){let t=null,e=null;const s=new Map,n=()=>{try{t??(t=new AudioContext)}catch{return null}return t.state!=="running"&&t.resume().catch(()=>{}),t},o=(r,u)=>{const m=s.get(u);if(m)return m;const p=r.createBuffer(1,r.sampleRate*kn,r.sampleRate),f=p.getChannelData(0);let g=0;for(let v=0;v<f.length;v++){const A=Math.random()*2-1;u==="white"?f[v]=A*.5:(g=(g+.02*A)/1.02,f[v]=g*3.5)}return s.set(u,p),p},i=(r,u,m,p)=>{const f=r.createBufferSource();f.buffer=o(r,u),f.loop=!0;const g=r.createGain();return g.gain.value=p,f.connect(g).connect(m),f},a=(r,u,m)=>{if(u==="brown")return[i(r,"brown",m,1)];if(u==="rain"){const x=r.createBiquadFilter();x.type="highpass",x.frequency.value=500;const D=r.createBiquadFilter();D.type="lowpass",D.frequency.value=5e3,x.connect(D).connect(m);const L=r.createGain();L.gain.value=.8,L.connect(x);const E=r.createOscillator();E.frequency.value=.13;const $=r.createGain();return $.gain.value=.15,E.connect($).connect(L.gain),[i(r,"white",L,.7),i(r,"brown",m,.4),E]}const p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=700;const f=r.createGain();f.gain.value=.35,f.connect(p).connect(m);const v=[{frequency:110,type:"sine",level:.5},{frequency:110.6,type:"sine",level:.35},{frequency:164.8,type:"sine",level:.25},{frequency:220.4,type:"triangle",level:.08}].map(({frequency:x,type:D,level:L})=>{const E=r.createOscillator();E.type=D,E.frequency.value=x;const $=r.createGain();return $.gain.value=L,E.connect($).connect(f),E}),A=r.createOscillator();A.frequency.value=.08;const I=r.createGain();return I.gain.value=.1,A.connect(I).connect(f.gain),[...v,A]},d=(r,u,m)=>{const p=r.currentTime;u.fade.gain.cancelScheduledValues(p),u.fade.gain.setValueAtTime(u.fade.gain.value,p),u.fade.gain.linearRampToValueAtTime(0,p+m);for(const f of u.sources)f.stop(p+m+.05)};return{play(r,u,m){const p=n();if(!p)return;e&&d(p,e,.3);const f=p.currentTime,g=p.createGain();g.gain.setValueAtTime(0,f),g.gain.linearRampToValueAtTime(u*te,f+hn);const v=p.createGain();g.connect(v).connect(p.destination);const A=(m-Date.now())/1e3;A>0&&(v.gain.setValueAtTime(1,f+Math.max(0,A-gn)),v.gain.linearRampToValueAtTime(0,f+A));const I=a(p,r,g);for(const x of I)x.start(f);e={sources:I,volume:g,fade:v}},setVolume(r){!t||!e||(e.volume.gain.cancelScheduledValues(t.currentTime),e.volume.gain.setTargetAtTime(r*te,t.currentTime,.05))},stop(){!t||!e||(d(t,e,yn),e=null)},isPlaying(){return e!==null}}}const fe="momentum.toolkit.v1",he=["Getting started","Staying focused","Planning","Mindset"],B=[{id:"tiny-first-step",category:"Getting started",title:"Make the first step ridiculously small",why:"The hardest part of any task is starting. When the first step is tiny, there's nothing for your brain to dread.",how:["Ask: what's the smallest physical action that counts as starting?","Commit only to that: “open the doc and write the title”","Let momentum carry you; stopping after is allowed"],example:"Not “write the report”, but “paste in last quarter's numbers.”"},{id:"name-the-feeling",category:"Mindset",title:"Name the feeling you're avoiding",why:"Since procrastination is really about dodging a bad feeling, naming it takes away a lot of its power.",how:["Pause when you notice yourself stalling","Finish the sentence: “I'm avoiding this because it feels…”","Respond to that feeling: confused? Find one question to answer first"],example:"“It feels vague” → spend 5 minutes just listing what “done” looks like."},{id:"if-then-plans",category:"Planning",title:"Use if-then plans",why:"Deciding in advance exactly when and where you'll act removes the daily decision, and it's one of the best-supported tactics in research.",how:["Write: “If [time/situation], then I will [specific action]”","Tie it to something that already happens every day","Put it in your calendar with the action as the title"],example:"“If I finish my morning coffee, then I open the proposal draft.”"},{id:"short-sessions",category:"Staying focused",title:"Work in short focus sessions",why:"“Work on it for 25 minutes” is far less scary than “finish it.” A clear end point makes starting easier.",how:["Press Start 5 min on the focus card for your top task","Only that task until the timer ends","Take a 5-minute break, then decide on another round"],example:"Four sessions ≈ one solid, guilt-free morning."},{id:"friction",category:"Staying focused",title:"Add friction to distractions",why:"You'll grab whatever is easiest. Make distractions a little harder to reach and the task a little easier.",how:["Put your phone in another room or in a drawer","Log out of social apps or use a site blocker during work blocks","Leave the task open and ready the night before"],example:"Even 20 seconds of extra effort to reach a distraction cuts how often you reach for it."},{id:"earlier-deadline",category:"Planning",title:"Set an earlier personal deadline, and pad estimates",why:"We almost always underestimate how long things take (the planning fallacy). Real deadlines then arrive too fast.",how:["Set your own deadline 1–2 days before the real one, and give that date to the task in Momentum","Add 20–50% to how long you think it will take","Compare your guess with how long it really took, and adjust next time"],example:"Due Friday? Your deadline is Wednesday evening."},{id:"do-it-badly",category:"Getting started",title:"Give yourself permission to do it badly",why:"Perfectionism is one of the biggest drivers of delay. If the first try must be great, it's safer not to try at all.",how:["Label the first pass “draft zero”: it's meant to be rough","Aim for done, then improve","Set a low bar on purpose: “one ugly paragraph”"],example:"A messy draft you can fix beats a perfect one that doesn't exist."},{id:"temptation-bundling",category:"Mindset",title:"Pair the task with something you enjoy",why:"Temptation bundling links a dreaded task with a treat, so you start looking forward to it instead.",how:["Choose a treat you'll only have while doing the task","Examples: a favorite playlist, podcast, nice coffee, a cozy spot","Keep the rule strict: no task, no treat"],example:"Only listen to your favorite podcast while folding laundry or doing admin."},{id:"accountability",category:"Staying focused",title:"Get some accountability",why:"It's easy to break promises to yourself, much harder to break them to someone else.",how:["Tell a friend what you'll finish and by when","Try body doubling: work alongside someone, in person or on a video call","Share a quick “done!” message when you finish"],example:"“I'll send you the draft by 4pm” works better than “I'll try to do it today.”"},{id:"forgive-and-restart",category:"Mindset",title:"Forgive yourself and restart",why:"Research on students found that those who forgave themselves for procrastinating on one exam procrastinated less on the next. Guilt feeds the loop; kindness breaks it.",how:["Acknowledge it plainly: “I put that off. That happens.”","Skip the self-lecture; ask “what's one thing I can do now?”","Treat every day as a fresh start, not a streak to protect"],example:"Missed yesterday? Today's first small step still counts fully."}];function ye(t,e){return t==="all"?[...B]:t==="toolkit"?B.filter(s=>e.includes(s.id)):B.filter(s=>s.category===t)}function wn(t){return t==="all"||t==="toolkit"||he.includes(t)}function vn(t,e){return B.some(s=>s.id===e)?t.includes(e)?t.filter(s=>s!==e):[...t,e]:[...t]}function $n(t){return ye("toolkit",t)}function Sn(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(fe))??"[]")}catch{return[]}if(!Array.isArray(e))return[];const s=new Set(B.map(n=>n.id));return[...new Set(e.filter(n=>typeof n=="string"&&s.has(n)))]}function An(t,e){try{return t?(t.setItem(fe,JSON.stringify(e)),!0):!1}catch{return!1}}const vt="#getting-unstuck",ge="#history",lt="Momentum",Tn="⏰ Time's up!";function En(t){return t===vt?"advice":t===ge?"history":"focus"}function h(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const Dn=`
  <a class="advice-link" href="${vt}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function In(t,e){const s=h(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${s}" novalidate>
        <label for="step-edit">Tiny first step for ${h(t.title)}</label>
        <input id="step-edit" name="firstStep" autocomplete="off" maxlength="${_}"
          value="${h(t.firstStep)}" />
        ${e.error?`<p class="form-error" role="alert">${h(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save step</button>
          <button type="button" data-action="cancel-step-edit">Cancel</button>
        </div>
      </form>`:`
    <p class="muted">First step: ${h(t.firstStep)}
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${s}"
        aria-label="Edit step for ${h(t.title)}">Edit step</button></p>`}function xn(t){return t.leftCount===void 0?"":t.leftCount===0?"stayed on the page":`left ${t.leftCount===1?"once":`${t.leftCount}×`}, ${$t(t.awayMs??0)}`}function Mn(t,e){const s=h(t.key),n=t.taskTitle===null?'<span class="session-task deleted">Deleted task</span>':`<span class="session-task">${h(t.taskTitle)}</span>`,o=t.demo?' <span class="demo-badge">Demo</span>':"",i=xn(t),a=`${t.taskTitle===null?"a deleted task":h(t.taskTitle)} at ${Xt(t.startedAt)}`;let d;if(e){const r=ce.map(u=>`<button type="button" class="${u===t.outcome?"primary ":""}outcome-choice" data-action="set-outcome"
          data-key="${s}" data-outcome="${u}" aria-pressed="${u===t.outcome}">${C[u]}</button>`).join("");d=`
      <div class="session-actions" role="group" aria-label="Change the answer for ${a}">
        ${r}<button type="button" class="link-button" data-action="cancel-outcome" data-key="${s}">Cancel</button>
      </div>`}else d=`
      <div class="session-actions">
        ${t.outcome==="finished"?"":`<button type="button" class="link-button" data-action="edit-outcome" data-key="${s}" aria-label="Change answer for ${a}">Change answer</button>`}<button type="button" class="link-button" data-action="delete-session" data-key="${s}" aria-label="Delete the session on ${a}">Delete</button>
      </div>`;return`
    <li class="session" data-key="${s}">
      <div class="session-line">
        <span class="session-time">${Xt(t.startedAt)}</span>
        ${n}${o}
      </div>
      <div class="session-line">
        <span class="session-length">${Ws(t)}</span>
        <span class="outcome-badge outcome-${t.outcome}">${C[t.outcome]}</span>
        ${i?`<span class="session-away">${i}</span>`:""}
      </div>
      ${d}
    </li>`}function Ln(t,e,s){const n='<nav class="back-bar"><a class="back-link" href="#">← Back to my tasks</a></nav>',o=qs(t,s,e.taskId,e.showOlder),i=['<option value="">All tasks</option>',...js(t).map(f=>`<option value="${h(f.id)}"${f.id===e.taskId?" selected":""}>${h(f.title)}</option>`)].join(""),a=o.totalSessions===1?"session":"sessions",d=o.totalSessions===0?"":`<p class="history-summary">${o.totalSessions} ${a} · ${P(o.totalMinutes)} in all</p>`,r=e.deleted?'<p class="undo-notice" role="status">Deleted a session. <button type="button" class="link-button" data-action="undo-session-delete">Undo</button></p>':"",u=o.days.map(f=>{const g=f.entries.length===1?"1 session":`${f.entries.length} sessions`;return`
        <section class="card history-day" aria-labelledby="day-${f.day}">
          <h3 id="day-${f.day}">${Us(f.day,s)} <span class="history-day-total">${g} · ${P(f.minutes)}</span></h3>
          <ul class="session-list">${f.entries.map(v=>Mn(v,e.editing===v.key)).join("")}</ul>
        </section>`}).join(""),m=o.totalSessions>0?"":`<section class="card"><p class="muted history-empty">${e.taskId===""?"No sessions yet. Your first one will show up here.":"No sessions on this task yet."}</p></section>`,p=o.hasOlder?'<button type="button" class="show-older" data-action="show-older">Show older sessions</button>':"";return`
    <main class="view" aria-labelledby="history-title">
      ${n}
      <section class="card history-head">
        <h2 id="history-title" tabindex="-1">Session history</h2>
        <label for="history-task">Task</label>
        <select id="history-task">${i}</select>
        ${d}
        ${r}
      </section>
      ${u}${m}${p}
      ${n}
    </main>`}function P(t){if(t<60)return`${t} min`;const e=Math.floor(t/60),s=t%60;return s===0?`${e} h`:`${e} h ${s} min`}function On(t){const[e,s,n]=t.split("-").map(Number);return new Date(e,s-1,n).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function ke(t){return['<option value="">Not sure</option>',...ht.map(e=>`<option value="${e.minutes}"${e.minutes===t?" selected":""}>${e.label}</option>`)].join("")}function be(t,e){const s=oe(t,e.id),n=`About ${Ve(e.estimateMinutes)}`;return s===0?n:s>=e.estimateMinutes?`${n} · ${P(s)} done, more than you guessed`:`${n} · ${P(s)} done so far`}function Cn(t,e,s){const n=h(e.id);if((s==null?void 0:s.taskId)===e.id){const i=e.estimateMinutes?`<button type="button" data-action="remove-estimate" data-task-id="${n}">Remove estimate</button>`:"";return`
      <form class="estimate-editor" data-task-id="${n}" novalidate>
        <label for="estimate-edit">About how long is ${h(e.title)}?</label>
        <select id="estimate-edit" name="estimate">${ke(e.estimateMinutes)}</select>
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-estimate">Cancel</button>
          ${i}
        </div>
      </form>`}const o=i=>`<button type="button" class="link-button" data-action="edit-estimate" data-task-id="${n}"
      aria-label="${i} for ${h(e.title)}">${i}</button>`;return e.estimateMinutes?`<p class="estimate"><span class="estimate-text">${be(t,e)}</span> ${o("Change")}</p>`:`<p class="estimate">${o("Add estimate")}</p>`}function Nn(t,e,s){const n=J(t,e),o=ct(t,e),i=w(s);return!n||!o||!e.deadline||e.deadline<i?"":`<p class="hero-start-by">${o<i?`Start today: about ${P(n)} left, more than the days before it's due allow at 2 hours a day.`:o===i?"Start today to finish on time.":`Start by ${On(o)} to finish on time.`}</p>`}function Fn(t,e,s){const n=h(t.id);if((e==null?void 0:e.taskId)===t.id){const a=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${n}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${n}" novalidate>
        <label for="deadline-edit">Deadline for ${h(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${h(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${h(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${a}
        </div>
      </form>`}const o=a=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${n}"
      aria-label="${a} for ${h(t.title)}">${a}</button>`;return t.deadline?`<p class="deadline${t.deadline<=w(s)?" deadline-urgent":""}"><span class="deadline-date">${kt(t.deadline,s)}</span> ${o("Change")}</p>`:`<p class="deadline">${o("Add deadline")}</p>`}function we(t,e){const s=rs(t.deadline,e);return s?`<span class="urgency urgency-${s}">${is[s]}</span>`:""}const _n={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function Pn(t,e){const s=e.outcome==="kept-going",n=s?"":'<button type="button" data-action="cancel-step">Cancel</button>',o=s?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${s?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${_}"
        value="${h(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${h(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${s?"Save next step":"Save smaller step"}</button>
        ${o}${n}
      </div>
    </form>`}const Hn={all:"All","Getting started":"Getting started","Staying focused":"Staying focused",Planning:"Planning",Mindset:"Mindset",toolkit:"My toolkit"};function Yn(t,e){const s=h(t.id),n=e?"Remove from my toolkit":"Add to my toolkit";return`
    <article class="strategy${e?" in-toolkit":""}" data-strategy-id="${s}">
      <p class="strategy-top">
        <span class="strategy-category">${h(t.category)}</span>
        ${e?'<span class="strategy-picked">✓ In your toolkit</span>':""}
      </p>
      <h4 class="strategy-title">${h(t.title)}</h4>
      <p class="strategy-why">${h(t.why)}</p>
      <ul class="strategy-how">${t.how.map(o=>`<li>${h(o)}</li>`).join("")}</ul>
      <p class="strategy-example">${h(t.example)}</p>
      <button type="button" class="${e?"":"primary "}toolkit-toggle" data-action="toggle-toolkit"
        data-strategy-id="${s}" aria-pressed="${e}"
        aria-label="${n}: ${h(t.title)}">${n}</button>
    </article>`}function Bn(t,e){const s=["all",...he,"toolkit"].map(i=>{const a=i==="toolkit"?`My toolkit (${e.length})`:Hn[i];return`<button type="button" class="strategy-filter${i===t?" active":""}"
        data-action="strategy-filter" data-filter="${h(i)}" aria-pressed="${i===t}">${a}</button>`}).join(""),n=ye(t,e),o=n.length>0?`<div class="strategy-grid">${n.map(i=>Yn(i,e.includes(i.id))).join("")}</div>`:'<p class="muted toolkit-empty">Nothing in your toolkit yet. Under <strong>All</strong>, press <strong>Add to my toolkit</strong> on two or three that fit how you get stuck.</p>';return`
    <section class="card strategies" aria-labelledby="strategies-title">
      <h3 id="strategies-title" class="jump-target" tabindex="-1">10 strategies you can use today</h3>
      <p class="muted">You don't need all of them. Pick two or three that fit how you get stuck; they'll show up when a session goes sideways.</p>
      <div class="strategy-filters" role="group" aria-label="Show strategies">${s}</div>
      <p class="toolkit-count"><strong>${e.length}</strong> of ${B.length} in your toolkit</p>
      ${o}
    </section>`}function Gn(t){const e=$n(t);return e.length===0?"":`
    <div class="toolkit-reminder">
      <p class="toolkit-reminder-title">From your toolkit</p>
      <ul>${e.map(n=>`<li><strong>${h(n.title)}.</strong> ${h(n.how[0])}</li>`).join("")}</ul>
    </div>`}function qn(t,e,s){const{heading:n,message:o}=_n[e.outcome],i=e.outcome==="stopped"||e.outcome==="distracted";let a="";if(e.stepSaved){const d=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";a=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${h(t.firstStep)}</strong></p>
      <div class="step-actions">${d}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(a=Pn(t,e),e.outcome==="kept-going"&&(a+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):i?a=`
      <p class="muted">Your tiny step: ${h(t.firstStep)}</p>
      ${Gn(s)}
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${vt}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:a='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${n}</h2>
      <p class="muted">${h(t.title)}. ${o}</p>
      ${a}
    </section>`}function Un(t){const e='<ellipse cx="50" cy="88" rx="30" ry="7" fill="var(--moss-pale)"/>',s=a=>`<line x1="50" y1="88" x2="50" y2="${88-a}" stroke="var(--forest)" stroke-width="3.5" stroke-linecap="round"/>`,n=(a,d,r,u,m)=>`<ellipse cx="${a}" cy="${d}" rx="${r}" ry="${u}" fill="var(--moss)" transform="rotate(${m} ${a} ${d})"/>`,o=(a,d)=>[0,60,120,180,240,300].map(r=>`<ellipse cx="${a}" cy="${d-7}" rx="4.5" ry="7" fill="var(--gold)" transform="rotate(${r} ${a} ${d})"/>`).join("")+`<circle cx="${a}" cy="${d}" r="4" fill="#8A6414"/>`;return`<svg class="plant" viewBox="0 0 100 100" aria-hidden="true">${[e+'<circle cx="50" cy="83" r="4" fill="var(--forest)"/>',e+s(14)+n(46,74,6,3,-20)+n(54,74,6,3,20),e+s(26)+n(42,66,8,4,-30)+n(58,66,8,4,30)+n(50,60,6,3,0),e+s(38)+n(38,60,9,4.5,-35)+n(62,60,9,4.5,35)+n(35,48,8,4,-15)+n(65,48,8,4,15)+n(50,42,7,4,0),e+s(44)+n(36,58,9,4.5,-35)+n(64,58,9,4.5,35)+n(33,44,8,4,-15)+n(67,44,8,4,15)+o(50,36),e+s(46)+n(34,56,9,4.5,-35)+n(66,56,9,4.5,35)+n(30,42,8,4,-15)+n(70,42,8,4,15)+n(40,30,7,4,-10)+n(60,30,7,4,10)+o(50,26)][t]}</svg>`}function Wn(t,e){const s=Bs(t,e),{name:n,note:o}=Hs[s.stage],i=s.notStarted?"Your plant starts growing with your first session.":s.freshStart?"A fresh start. One session today plants it again.":o,a=s.finishedWithDeadline===0?"—":`${s.finishedOnTime} of ${s.finishedWithDeadline} (${j(s.finishedOnTime,s.finishedWithDeadline)}%)`,d=s.focusedLastWeek>0?`<span class="growth-compare">last week ${P(s.focusedLastWeek)}</span>`:"";return`
    <section class="card growth" aria-labelledby="growth-title">
      <h3 id="growth-title">Your growth</h3>
      <div class="growth-plant">
        ${Un(s.stage)}
        <div>
          <p class="growth-stage">${n}</p>
          <p class="muted growth-caption">${i}</p>
        </div>
      </div>
      <dl class="growth-stats">
        <div class="growth-stat" data-stat="on-time"><dt>Finished on time</dt><dd>${a}</dd></div>
        <div class="growth-stat" data-stat="this-week"><dt>Focused this week</dt><dd>${P(s.focusedThisWeek)} ${d}</dd></div>
        <div class="growth-stat" data-stat="finished"><dt>Tasks finished</dt><dd>${s.tasksFinished} in all</dd></div>
      </dl>
    </section>`}function jn(t,e,s){if(t.tasks.length===0)return"";let n;if(ue(t)){const o=_s(t,s,e);n=o.length===0?'<p class="muted coaching-wait">Nothing stands out yet. Notes show up when your check-ins show a clear pattern.</p>':`<ul class="coaching-notes">${o.map(i=>{const a=i.link?` <a class="coaching-link" href="${h(i.link.href)}">${h(i.link.label)}</a>`:"";return`<li class="coaching-note" data-note="${i.kind}">${h(i.text)}${a}</li>`}).join("")}</ul>`}else{const o=q(t).length;n=`<p class="muted coaching-wait">Coaching notes start after ${de} sessions. You've done ${o}.</p>`}return`
    <section class="coaching" aria-labelledby="coaching-title">
      <h4 id="coaching-title">Coaching notes</h4>
      ${n}
    </section>`}function j(t,e){return e===0?0:Math.round(t/e*100)}function Rn(t){const e=t.streakDays===1?"day":"days";let s;return t.sessionToday?s="You've focused today. Nice.":t.streakDays>0?s="Do one session today to keep it going.":s="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${s}</p>`}function Vn(t){const e=t.lengths.find(o=>o.minutes===t.bestLength),s=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${j(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',n=t.lengths.map(o=>{const i=o.sessions===0?"not tried yet":`${o.keptGoing} of ${o.sessions} kept going (${j(o.keptGoing,o.sessions)}%)`;return`<li${o.minutes===t.bestLength?' class="best"':""} data-minutes="${o.minutes}">${o.minutes} min: ${i}</li>`}).join("");return`${s}<ul class="length-rates">${n}</ul>`}function Kn(t){const e=Object.keys(C).map(n=>{const o=t.outcomeCounts[n],i=j(o,t.totalSessions);return`
        <li data-outcome="${n}">
          <span class="outcome-label">${C[n]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${n}" style="width: ${i}%"></span></span>
          <span class="outcome-count">${o} (${i}%)</span>
        </li>`}).join(""),s=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${s} in all</p>`}function zn(t){const{tracked:e,left:s,awayMs:n,distractedWhenLeft:o,distractedWhenStayed:i}=t.drift;if(e===0)return"";const a=e-s,d=e===1?"session":"sessions",r=s===0?`You stayed on the page in all ${e} ${d}.`:`You left the page in <strong class="drift-left">${s}</strong> of ${e} ${d} (${$t(n)} away in all).`,u=(m,p)=>p===0?"none yet":`${m} of ${p} ended in Got distracted (${j(m,p)}%)`;return`
    <h4>Leaving the page</h4>
    <p class="drift-summary">${r}</p>
    <ul class="length-rates drift-rates">
      <li data-drift="left">When you left: ${u(o,s)}</li>
      <li data-drift="stayed">When you stayed: ${u(i,a)}</li>
    </ul>`}function Jn(t,e,s){const n=V(t,s),o=n.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${Rn(n)}
        <h4>Best length for keeping going</h4>${Vn(n)}
        <h4>How sessions ended</h4>${Kn(n)}
        ${zn(n)}
        <p><button type="button" class="link-button see-history" data-action="open-history">See every session</button></p>`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${o}
    </details>`}function Xn(t,e){const s=ns(t.tasks);if(s.length===0)return"";const n=s.map(o=>{const i=new Date(o.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${h(o.title)}</p>
          <p class="muted">Finished ${i}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${h(o.id)}"
              aria-label="Move ${h(o.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${s.length})</summary>
      <ul class="task-list">${n}</ul>
    </details>`}function Zn(t,e,s){const n=gt(t.tasks).map(o=>{const i=ys(t,o.id),a=i?`<p class="last-check-in">Last time: ${C[i.outcome]} (${i.minutes} min)
            <button type="button" class="link-button" data-action="open-history" data-task-id="${h(o.id)}"
              aria-label="Session history for ${h(o.title)}">History</button></p>`:"",d=Fn(o,e.deadlineEdit,s),r=Cn(t,o,e.estimateEdit),u=o.demo?'<span class="demo-badge">Demo</span>':"",m=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${h(o.id)}" aria-label="Delete ${h(o.title)}" title="Delete task">×</button>`,p=ft.map(f=>`<button type="button" data-action="start" data-task-id="${h(o.id)}" data-minutes="${f}"
            aria-label="Start a ${f}-minute focus on ${h(o.title)}">${f} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading">
            <p class="task-title">${h(o.title)}</p>${u}${we(o,s)}${m}
          </div>
          ${d}
          ${r}
          ${In(o,e.stepEdit)}
          ${a}
          <div class="timer-choices"><span class="muted">Focus for</span>${p}</div>
        </li>`}).join("");return`
    <div class="columns">
    <div class="column-stack">
    <section class="card" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">What are you putting off?</h2>
      <form id="add-task" class="add-task" novalidate>
        <label for="task-title">Task</label>
        <input id="task-title" name="title" autocomplete="off" maxlength="${W}"
          placeholder="Email my professor" />
        <label for="first-step">Tiny first step</label>
        <input id="first-step" name="firstStep" autocomplete="off" maxlength="${_}"
          placeholder="Find their email address" />
        <label for="deadline">Deadline <span class="optional">(optional)</span></label>
        <input id="deadline" name="deadline" type="date" />
        <label for="estimate">About how long? <span class="optional">(optional)</span></label>
        <select id="estimate" name="estimate">${ke()}</select>
        ${e.formError?`<p class="form-error" role="alert">${h(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    ${so(t,e.importer,s)}
    ${Wn(t,s)}
    </div>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${Qn(e.deletedTask)}
      ${n?`<ul class="task-list">${n}</ul>`:no(t)}
      ${jn(t,e.toolkit,s)}
      ${Xn(t,e.completedOpen)}
      ${Jn(t,e.patternsOpen,s)}
    </section>
    </div>`}function Qn(t){return t?`
    <p class="undo-notice" role="status">Deleted “${h(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function to(t,e,s){if(t.tasks.length===0)return"";const n=ss(t,e);if(!n)return`
      <section class="focus-hero focus-hero-empty" aria-label="Focus on this one first">
        <p class="hero-eyebrow">Focus on this one first</p>
        <p class="hero-title">You're all caught up.</p>
        <p class="hero-note">Add the next thing you're putting off.</p>
      </section>`;const o=h(n.id),i=h(n.title),a=n.deadline?`<p class="hero-deadline">${kt(n.deadline,s)}</p>`:"",d=n.estimateMinutes?`<p class="hero-estimate">${be(t,n)}</p>`:"",r=ft.map((p,f)=>`<button type="button" class="${f===0?"hero-start-main":"hero-start"}" data-action="start"
        data-task-id="${o}" data-minutes="${p}"
        aria-label="Start a ${p}-minute focus on ${i}">Start ${p} min</button>`).join(""),m=le(t).length>1?`<button type="button" class="hero-skip" data-action="skip-focus" data-task-id="${o}">Not this one</button>`:"";return`
    <section class="focus-hero" aria-labelledby="focus-hero-title">
      <p class="hero-eyebrow">Focus on this one first</p>
      <div class="hero-heading">
        <h2 id="focus-hero-title" class="hero-title">${i}</h2>${we(n,s)}
      </div>
      ${a}
      ${d}
      ${Nn(t,n,s)}
      <p class="hero-eyebrow">Your tiny first step</p>
      <p class="hero-step">${h(n.firstStep)}</p>
      <div class="hero-actions">${r}${m}</div>
    </section>`}function eo(t,e,s){const n=e.source!=="file",o=e.events.map((a,d)=>{const r=ae(t,a);return`
        <li>
          <label class="import-row${r?" import-present":""}">
            <input type="checkbox" name="import-event" value="${d}"${r?" disabled":" checked"} />
            <span class="import-title">${h(a.title)}</span>
            <span class="import-due">${r?"Already in your tasks":kt(a.due,s)}</span>
          </label>
        </li>`}).join(""),i=n?`<p class="import-demo-note"><strong>Demo:</strong> made-up deadlines from a pretend ${h(e.label)}. They'll be marked <strong>Demo</strong>, stay off the focus card and out of your stats, and <strong>Remove demo tasks</strong> clears them.</p>`:`<p class="muted">Upcoming deadlines in <strong>${h(e.label)}</strong>. Untick any you don't want.</p>`;return`
    <form class="import-preview" novalidate aria-labelledby="import-preview-title">
      <h4 id="import-preview-title" tabindex="-1">${n?`Demo import: ${h(e.label)}`:"Pick deadlines to add"}</h4>
      ${i}
      <ul class="import-list">${o}</ul>
      <div class="deadline-actions">
        <button type="submit" class="primary">Add selected tasks</button>
        <button type="button" data-action="cancel-import">Cancel</button>
      </div>
    </form>`}function so(t,e,s){const n=Object.keys(mt).map(a=>`<button type="button" class="demo-import" data-action="demo-import" data-source="${a}">Demo: ${mt[a]}</button>`).join(""),o=e.error?`<p class="form-error" role="alert">${h(e.error)}</p>`:e.notice?`<p class="import-notice" role="status">${h(e.notice)}</p>`:"",i=Qe(t)?'<p class="demo-present">Demo tasks are in your list. <button type="button" class="link-button" data-action="remove-demo">Remove demo tasks</button></p>':"";return`
    <section class="card calendar-import" aria-labelledby="calendar-title">
      <h3 id="calendar-title">Bring in deadlines</h3>
      <p class="muted">Canvas, Google Calendar, and Outlook can save a calendar as an <strong>.ics</strong> file. Choose one to add its upcoming deadlines. The file stays on this device.</p>
      <label class="file-pick" for="ics-file">Choose an .ics file</label>
      <input id="ics-file" class="file-input" type="file" accept=".ics,text/calendar" />
      ${o}
      ${e.preview?eo(t,e.preview,s):""}
      <div class="demo-row">
        <p class="muted">Showing someone how it works? Try it with made-up deadlines:</p>
        <div class="deadline-actions">${n}</div>
      </div>
      ${i}
    </section>`}function no(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function oo(t,e,s,n){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${h(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${h(e)}</p>
      <p class="countdown" role="timer">${ut(s)}</p>
      <button type="button" data-action="end-early">End early</button>
      ${n}
    </section>`}function ve(t){const e=t.service==="youtube"?"YouTube":"Spotify";return`
    <iframe class="mini-player mini-player-${t.service}" src="${h(t.embedUrl)}"
      title="${e} study playlist player" loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    <button type="button" class="link-button" data-action="remove-playlist">Remove playlist</button>`}function $e(t){return t?"Pause":"Play"}function io(t){const{settings:e}=t,s=Object.keys(Z).map(i=>`
        <label class="soundscape-choice">
          <input type="radio" name="soundscape" value="${i}"${i===e.soundscape?" checked":""} />
          ${Z[i]}
        </label>`).join(""),n=e.playlistLink?wt(e.playlistLink):null,o=t.playerLoaded&&n&&!("error"in n)?ve(n):"";return`
    <details class="sound-panel"${e.panelOpen?" open":""}>
      <summary>Focus sounds</summary>
      <fieldset class="soundscapes">
        <legend>Soundscape</legend>
        <div class="soundscape-choices">${s}</div>
      </fieldset>
      <div class="sound-controls">
        <button type="button" class="primary sound-toggle" data-action="toggle-sound"
          aria-pressed="${t.playing}">${$e(t.playing)}</button>
        <label for="sound-volume">Volume</label>
        <input id="sound-volume" type="range" min="0" max="100" step="1" value="${Math.round(e.volume*100)}" />
      </div>
      <form class="playlist-form" novalidate>
        <label for="playlist-link">My Study Playlist</label>
        <div class="playlist-row">
          <input id="playlist-link" name="playlist" type="url" inputmode="url" autocomplete="off"
            maxlength="${me}" placeholder="Paste a YouTube or Spotify link"
            value="${h(e.playlistLink)}" />
          <button type="submit">Load player</button>
        </div>
        <p class="form-error playlist-error" role="alert"${t.playlistError?"":" hidden"}>${h(t.playlistError??"")}</p>
        <p class="muted playlist-hint">Works best on a laptop: Spotify plays 30-second previews unless you're signed in to Spotify in this browser, and phones pause YouTube when the screen locks.</p>
      </form>
      <div class="mini-player-slot">${o}</div>
    </details>`}function $t(t){const e=Math.round(t/1e3);return e<60?`${e} sec`:`${Math.round(e/60)} min`}function ao(t){return t.leftCount===void 0?"":t.leftCount===0?'<p class="away-line">You stayed on this page the whole time.</p>':`<p class="away-line">You left this page ${t.leftCount===1?"1 time":`${t.leftCount} times`} (${$t(t.awayMs??0)} in all).</p>`}function ro(t,e){const s=e.minutes,n=Object.keys(C).map(o=>`<button type="button" class="primary" data-action="check-in" data-outcome="${o}">${C[o]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${h(t)}, ${s}-minute session</p>
      ${ao(e)}
      <div class="outcomes">${n}</div>
    </section>`}function Se(t,e){const{sessionsStarted:s,minutesFocused:n}=ps(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${s}</strong> ${s===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${n}</strong> min focused</span>`}function lo(t,e,s){const n=t.active,o=n?t.tasks.find(u=>u.id===n.taskId):void 0;let i;if(n)if(F(n,s)>0){const u=io(e.sound);i=oo((o==null?void 0:o.title)??"Your task",(o==null?void 0:o.firstStep)??"",F(n,s),u)}else i=ro((o==null?void 0:o.title)??"Your task",n);else{const u=e.followUp&&t.tasks.find(p=>p.id===e.followUp.taskId);i=(u?qn(u,e.followUp,e.toolkit):to(t,e.skippedFocus,s))+Zn(t,e,s)}const a=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",d=n?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${Se(t,s)}</p>`}<main class="view${d}">${a}${i}${Dn}</main>`}function co(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function uo(){try{return window.localStorage}catch{return null}}function po(t,e=uo(),s=rn(),n=bn()){var Ft;let o=jt(e);const i={formError:null,deadlineEdit:null,estimateEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null,sound:{settings:mn(e),playing:!1,playerLoaded:!1,playlistError:null},skippedFocus:[],strategyFilter:"all",toolkit:Sn(e),importer:{preview:null,error:null,notice:null},history:{taskId:"",showOlder:!1,editing:null,deleted:null}};let a="";const d=c=>{const l=En(window.location.hash);return l!=="focus"?l:o.active?F(o.active,c)>0?"running":"check-in":"list"},r=c=>{var b;const l=Date.now();a=d(l),i.sound.playing=n.isPlaying(),t.innerHTML=co(a==="advice"?We(Bn(i.strategyFilter,i.toolkit)):a==="history"?Ln(o,i.history,l):lo(o,i,l)),L(l);const y=c==null?void 0:c();if(y){y.focus();return}document.documentElement.scrollTop=0,(b=t.querySelector("h2[tabindex]"))==null||b.focus()},u=(c,l)=>()=>[...t.querySelectorAll(`[data-action="${c}"]`)].find(y=>y.dataset.taskId===l)??null,m=c=>u("edit-deadline",c),p=()=>t.querySelector("#deadline-edit"),f=()=>t.querySelector("#estimate-edit"),g=()=>t.querySelector("#step-edit"),v=()=>t.querySelector('[data-action="undo-delete"]'),A=()=>t.querySelector("#next-step"),I=()=>t.querySelector("#follow-up-title"),x=()=>t.querySelector(".hero-skip"),D=(c,l,y)=>()=>[...t.querySelectorAll(`[data-action="${c}"]`)].find(b=>b.dataset[l]===y)??null,L=c=>{const l=o.active;if(!l)document.title=lt,s.cancel();else if(F(l,c)>0){document.title=`${ut(F(l,c))} · ${lt}`,s.chimeAt(l.endsAt);return}else document.title=`${Tn} · ${lt}`,l.endedEarlyAt!==void 0&&s.cancel();n.stop(),i.sound.playerLoaded=!1},E=c=>{o=c;try{if(!e)throw new Error("No storage");ks(e,o),i.saveFailed=!1}catch{i.saveFailed=!0}},$=(c,l)=>{E(c),r(l)},St=()=>{const c=Date.now();if(document.visibilityState==="hidden"){E(cs(o,c));return}const l=o;if(E(dt(o,c)),o!==l&&d(c)==="check-in"&&a==="check-in"){r();return}Ot()},et=c=>{var y;const l=((y=i.estimateEdit)==null?void 0:y.taskId)??"";i.estimateEdit=null,$(c,u("edit-estimate",l))},st=c=>{var y;const l=((y=i.deadlineEdit)==null?void 0:y.taskId)??"";i.deadlineEdit=null,$(c,m(l))},At=(c,l)=>{i.formError=null,i.stepEdit=null,i.deletedTask=null,i.deadlineEdit=null,i.followUp=null,i.skippedFocus=[],E(ls(o,c,l,Date.now())),i.sound.settings.playing&&o.active&&nt(o.active.endsAt),r()},H=()=>fn(e,i.sound.settings),nt=c=>{const{soundscape:l,volume:y}=i.sound.settings;n.play(l,y,c)},Ae=()=>{const c=t.querySelector(".sound-toggle");c&&(c.textContent=$e(n.isPlaying()),c.setAttribute("aria-pressed",String(n.isPlaying())))},Te=()=>{const c=o.active;n.isPlaying()?(n.stop(),i.sound.settings.playing=!1):c&&F(c,Date.now())>0&&(nt(c.endsAt),i.sound.settings.playing=!0),H(),Ae()},Ee=c=>{i.sound.settings.soundscape=c,H(),n.isPlaying()&&o.active&&nt(o.active.endsAt)},De=c=>{i.sound.settings.volume=Math.min(1,Math.max(0,c/100)),n.setVolume(i.sound.settings.volume),H()},Ie=c=>{const l=c.querySelector("#playlist-link"),y=c.querySelector(".playlist-error"),b=wt(l.value);if("error"in b){i.sound.playlistError=b.error,y.textContent=b.error,y.hidden=!1,l.focus();return}i.sound.playlistError=null,y.hidden=!0,i.sound.settings.playlistLink=l.value.trim(),i.sound.playerLoaded=!0,H(),t.querySelector(".mini-player-slot").innerHTML=ve(b)},xe=()=>{i.sound.settings.playlistLink="",i.sound.playerLoaded=!1,H(),t.querySelector(".mini-player-slot").innerHTML="";const c=t.querySelector("#playlist-link");c&&(c.value="",c.focus())},Me=()=>t.querySelector("#import-preview-title"),ot=()=>t.querySelector(".calendar-import [role=alert], .calendar-import [role=status]"),Tt=c=>{i.importer={preview:c,error:null,notice:null},r(Me)},K=c=>{i.importer={preview:null,error:c,notice:null},r(ot)},Le=async c=>{var S;const l=(S=c.files)==null?void 0:S[0];if(c.value="",!l)return;if(l.size>Rs){K("That file is too big to be a calendar file. Choose the .ics file for one calendar.");return}let y;try{y=await l.text()}catch{K("Momentum couldn't read that file. Try choosing it again.");return}const b=Xs(y,Date.now());"error"in b?K(b.error):b.events.length===0?K("No upcoming deadlines were found in that file (it looks at the next 4 months)."):Tt({source:"file",label:l.name,events:b.events})},Oe=c=>{const l=i.importer.preview;if(!l)return;const y=[...c.querySelectorAll('input[name="import-event"]:checked')].map(Y=>l.events[Number(Y.value)]).filter(Y=>Y!==void 0),b=l.source!=="file",{state:S,added:M}=Ze(o,y,Date.now(),b),O=M===1?"task":"tasks",N=M===0?"Nothing was added: no deadlines were ticked, or they're already in your tasks.":b?`Added ${M} demo ${O}, marked Demo.`:`Added ${M} ${O}. Each starts with the step “${ie}”; use Edit step to make it yours.`;i.importer={preview:null,error:null,notice:N},$(S,ot)},Et=c=>{const l=c.target;l.id==="ics-file"&&Le(l)},Dt=c=>{const l=c.target;l.id==="history-task"&&(i.history={taskId:l.value,showOlder:!1,editing:null,deleted:null},r(()=>t.querySelector("#history-task")))},z=c=>{const l=c.target;l.name==="soundscape"&&Object.hasOwn(Z,l.value)?Ee(l.value):l.id==="sound-volume"&&De(Number(l.value))},It=()=>{const c=i.followUp,l=t.querySelector("#next-step");if(!c||!l)return!0;const y=Bt(l.value);if(y){const b=l.value;return i.followUp={...c,editingStep:!0,error:y},r(A),t.querySelector("#next-step").value=b,!1}return o=Ut(o,c.taskId,l.value),!0},xt=c=>{c.key!==Q&&c.key!==null||(o=jt(e),r())},Mt=()=>{i.formError=null,i.history.editing=null,i.history.deleted=null,r()},Lt=c=>{const l=c.target;l instanceof HTMLDetailsElement&&(l.classList.contains("completed-tasks")&&(i.completedOpen=l.open),l.classList.contains("patterns")&&(i.patternsOpen=l.open),l.classList.contains("sound-panel")&&(i.sound.settings.panelOpen=l.open,H()))},Ot=()=>{const c=Date.now();if(d(c)!==a){r();return}const l=t.querySelector(".countdown");l&&o.active&&(l.textContent=ut(F(o.active,c)));const y=t.querySelector(".stats-bar");y&&o.active&&(y.innerHTML=Se(o,c)),L(c)},Ct=c=>{var M,O,N,Y,_t,Pt,Ht;s.unlock();const l=c.target.closest("[data-action]");if(!l)return;const y=Date.now(),b=i.followUp,S=l.dataset.taskId??"";switch(l.dataset.action){case"edit-deadline":i.stepEdit=null,i.estimateEdit=null,i.deadlineEdit={taskId:S,error:null},r(p);break;case"edit-step":i.deadlineEdit=null,i.estimateEdit=null,i.stepEdit={taskId:S,error:null},r(g);break;case"cancel-step-edit":{const k=((M=i.stepEdit)==null?void 0:M.taskId)??"";i.stepEdit=null,r(u("edit-step",k));break}case"delete-task":{const k=o.tasks.find(T=>T.id===S)??null;i.deletedTask=k,((O=i.stepEdit)==null?void 0:O.taskId)===S&&(i.stepEdit=null),((N=i.deadlineEdit)==null?void 0:N.taskId)===S&&(i.deadlineEdit=null),((Y=i.estimateEdit)==null?void 0:Y.taskId)===S&&(i.estimateEdit=null),$(Je(o,S),v);break}case"undo-delete":{const k=i.deletedTask;i.deletedTask=null,k&&$(Xe(o,k),u("delete-task",k.id));break}case"edit-estimate":i.deadlineEdit=null,i.stepEdit=null,i.estimateEdit={taskId:S},r(f);break;case"cancel-estimate":et(o);break;case"remove-estimate":et(Gt(o,S,void 0));break;case"cancel-deadline":st(o);break;case"remove-deadline":st(qt(o,l.dataset.taskId??"",""));break;case"start":At(l.dataset.taskId??"",Number(l.dataset.minutes));break;case"end-early":$(ds(o,y));break;case"check-in":{const k=((_t=o.active)==null?void 0:_t.taskId)??"",T=l.dataset.outcome;i.followUp={taskId:k,outcome:T,editingStep:!1,stepSaved:!1,error:null},$(us(o,T,y));break}case"start-now":b&&It()&&At(b.taskId,Number(l.dataset.minutes));break;case"shrink-step":b&&(i.followUp={...b,editingStep:!0,error:null}),r(A);break;case"cancel-step":b&&(i.followUp={...b,editingStep:!1,error:null}),r(I);break;case"dismiss-follow-up":i.followUp=null,r();break;case"demo-import":{const k=l.dataset.source;(k==="google"||k==="outlook")&&Tt({source:k,label:mt[k],events:Js(k,y)});break}case"cancel-import":i.importer={preview:null,error:null,notice:null},r(()=>t.querySelector("#calendar-title"));break;case"remove-demo":i.importer={preview:null,error:null,notice:"Removed the demo tasks and any sessions on them."},$(ts(o),ot);break;case"open-history":i.history={taskId:S,showOlder:!1,editing:null,deleted:null},window.location.hash=ge;break;case"show-older":i.history.showOlder=!0,r(()=>t.querySelector(".history-day:last-of-type h3"));break;case"edit-outcome":i.history.editing=l.dataset.key??null,r(()=>t.querySelector(".outcome-choice[aria-pressed='true']"));break;case"cancel-outcome":{const k=i.history.editing??"";i.history.editing=null,r(D("edit-outcome","key",k));break}case"set-outcome":{const k=l.dataset.key??"";i.history.editing=null,$(ms(o,k,l.dataset.outcome),D("edit-outcome","key",k));break}case"delete-session":{const{state:k,removed:T}=fs(o,l.dataset.key??"");i.history.deleted=T,i.history.editing=null,$(k,()=>t.querySelector('[data-action="undo-session-delete"]'));break}case"undo-session-delete":{const k=i.history.deleted;i.history.deleted=null,k&&$(hs(o,k),D("delete-session","key",G(k)));break}case"jump":{const k=se.find(Pe=>Pe.id===l.dataset.target),T=k?t.querySelector(`#${k.id}`):null,_e=((Pt=window.matchMedia)==null?void 0:Pt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;(Ht=T==null?void 0:T.scrollIntoView)==null||Ht.call(T,{block:"start",behavior:_e?"auto":"smooth"}),T==null||T.focus({preventScroll:!0});break}case"strategy-filter":{const k=l.dataset.filter??"";wn(k)&&(i.strategyFilter=k),r(D("strategy-filter","filter",i.strategyFilter));break}case"toggle-toolkit":{const k=l.dataset.strategyId??"";i.toolkit=vn(i.toolkit,k),An(e,i.toolkit);const T=D("toggle-toolkit","strategyId",k);r(()=>T()??D("strategy-filter","filter",i.strategyFilter)());break}case"skip-focus":i.skippedFocus=[...i.skippedFocus,S],r(x);break;case"toggle-sound":Te();break;case"remove-playlist":xe();break;case"reopen":$(es(o,l.dataset.taskId??""));break}},Ce=c=>{const l=c.dataset.taskId??"",y=c.elements.namedItem("deadline").value;if(y!==""&&!R(y)){i.deadlineEdit={taskId:l,error:"Pick a real date, or remove the deadline."},r(p);return}st(qt(o,l,y))},Ne=c=>{const l=c.dataset.taskId??"",y=c.elements.namedItem("firstStep").value,b=Bt(y);if(b){i.stepEdit={taskId:l,error:b},r(g),t.querySelector("#step-edit").value=y;return}i.stepEdit=null,$(Ut(o,l,y),u("edit-step",l))},Nt=c=>{const l=c.target;if(l.classList.contains("estimate-editor")){c.preventDefault();const N=Number(l.elements.namedItem("estimate").value);et(Gt(o,l.dataset.taskId??"",N||void 0));return}if(l.classList.contains("deadline-editor")){c.preventDefault(),Ce(l);return}if(l.classList.contains("import-preview")){c.preventDefault(),Oe(l);return}if(l.classList.contains("playlist-form")){c.preventDefault(),Ie(l);return}if(l.classList.contains("task-step-editor")){c.preventDefault(),Ne(l);return}if(l.classList.contains("step-editor")){c.preventDefault(),i.followUp&&It()&&(i.followUp={...i.followUp,editingStep:!1,stepSaved:!0,error:null},$(o,I));return}if(l.id!=="add-task")return;c.preventDefault();const y=l.elements.namedItem("title").value,b=l.elements.namedItem("firstStep").value,S=l.elements.namedItem("deadline").value,M=l.elements.namedItem("estimate").value,O=ze(y,b,S);if(i.formError=O,O){r(),t.querySelector("#task-title").value=y,t.querySelector("#first-step").value=b,t.querySelector("#deadline").value=S,t.querySelector("#estimate").value=M;const N={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(N[O.field]).focus();return}$(ne(o,y,b,Date.now(),S,Number(M)||void 0))};t.addEventListener("click",Ct),t.addEventListener("submit",Nt),t.addEventListener("toggle",Lt,!0),t.addEventListener("change",z),t.addEventListener("change",Et),t.addEventListener("change",Dt),t.addEventListener("input",z),window.addEventListener("hashchange",Mt),window.addEventListener("storage",xt),((Ft=o.active)==null?void 0:Ft.hiddenAt)!==void 0&&document.visibilityState!=="hidden"&&E(dt(o,Date.now())),document.addEventListener("visibilitychange",St);const Fe=window.setInterval(Ot,1e3);return r(),()=>{s.cancel(),n.stop(),t.removeEventListener("click",Ct),t.removeEventListener("submit",Nt),t.removeEventListener("toggle",Lt,!0),t.removeEventListener("change",z),t.removeEventListener("change",Et),t.removeEventListener("change",Dt),t.removeEventListener("input",z),window.removeEventListener("hashchange",Mt),window.removeEventListener("storage",xt),document.removeEventListener("visibilitychange",St),window.clearInterval(Fe)}}const ee=document.getElementById("app");ee&&po(ee);
