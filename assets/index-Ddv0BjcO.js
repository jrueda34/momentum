(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const Gt='<a class="back-link" href="#">← Back to my task</a>',oe=[{id:"rescue-title",label:"Stuck right now?"},{id:"strategies-title",label:"10 strategies"},{id:"why-title",label:"Why it matters"}],Ye=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],Be=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]],Ge=[["😮‍💨","More stress, later","Studies of students found procrastinators felt less stressed early in a term but far more stressed, and got sick more often, as deadlines hit. The stress isn't avoided, just postponed and concentrated."],["🩺","Health slips too","Chronic procrastination is linked to worse sleep, less exercise, and putting off medical checkups: small delays in the things that keep you well."],["📉","Rushed work, lower quality","Last-minute work leaves no room to review, ask questions, or fix mistakes. “I work better under pressure” usually means “pressure is the only thing that gets me started.”"],["🔁","It compounds","One delayed task squeezes the next one. A missed reply becomes an awkward follow-up; a late bill becomes a fee. Small delays snowball into bigger problems."],["🤝","Eroded self-trust","Every broken promise to yourself teaches you that your plans don't count. Over time that makes it harder to believe “I'll do it tomorrow,” even when you mean it."],["🧭","Lost opportunities","Applications not sent, ideas never started, conversations not had. The biggest cost is often the things that never happen at all."]],qe=`
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
  </svg>`,Ue=`
  <section class="card why" aria-labelledby="why-title">
    <p class="eyebrow">Understand it</p>
    <h3 id="why-title" class="jump-target" tabindex="-1">Why it matters</h3>
    <p class="muted">Putting things off feels harmless in the moment; that's exactly what makes it tricky. The cost doesn't arrive when you delay; it arrives later, with interest. Knowing how the trap works makes it much easier to step around.</p>

    <h4>The relief trap</h4>
    ${qe}
    <p><strong>Procrastination is mostly about feelings, not time management.</strong> A task stirs up something unpleasant (boredom, confusion, fear of doing it badly) and avoiding it makes that feeling go away instantly. Your brain learns that avoidance “works.”</p>
    <p>But the relief is borrowed. The task is still there, now with less time and more guilt attached, so it feels even harder to start next time. Each lap around the loop makes it tighter.</p>
    <p><strong>The good news:</strong> because it's a loop, breaking it at <em>any</em> point helps, and the easiest point is usually just making the start smaller.</p>

    <h4>What it quietly costs you</h4>
    <p class="muted">None of these show up on the day you delay. They pile up in the background.</p>
    <ul class="costs">
      ${Ge.map(([t,e,n])=>`
        <li class="cost">
          <span class="cost-icon" aria-hidden="true">${t}</span>
          <strong class="cost-title">${e}</strong>
          <p>${n}</p>
        </li>`).join("")}
    </ul>
  </section>`,We=`
  <p class="sources">
    Ideas here draw on research by Tim Pychyl and Fuschia Sirois (procrastination as emotion regulation),
    Tice &amp; Baumeister (stress and health in student procrastinators), Wohl, Pychyl &amp; Bennett
    (self-forgiveness), Peter Gollwitzer (if-then planning), Katy Milkman (temptation bundling), and
    Kahneman &amp; Tversky (the planning fallacy). This page offers general guidance. If procrastination is
    seriously affecting your work or wellbeing, talking to a counselor or doctor can help, especially since
    it can sometimes be linked to things like ADHD, anxiety, or depression.
  </p>`;function je(t=""){const e=oe.map(({id:n,label:s})=>`<button type="button" class="jump-link" data-action="jump" data-target="${n}">${s}</button>`).join("");return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${Gt}</nav>

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
          ${Ye.map(([n,s])=>`<li><strong>${n}</strong> ${s}</li>`).join("")}
        </ol>
      </section>

      ${t}

      ${Ue}

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${Be.map(([n,s])=>`<li><span class="myth">${n}</span> ${s}</li>`).join("")}
        </ul>
        ${We}
      </section>

      <nav class="back-bar">${Gt}</nav>
    </main>
  `}const tt="momentum.v1",yt=[5,15,25],W=120,_=200,Re=`${tt}.backup`,C={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"},gt=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 hour"},{minutes:120,label:"2 hours"},{minutes:240,label:"4+ hours"}],Ve=120;function kt(t){return gt.some(e=>e.minutes===t)}function Ke(t){var e;return((e=gt.find(n=>n.minutes===t))==null?void 0:e.label)??`${t} min`}const ze=1e4;function U(){return{tasks:[],checkIns:[],active:null}}function R(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[n,s,o]=e.slice(1).map(Number),i=new Date(n,s-1,o);return i.getFullYear()===n&&i.getMonth()===s-1&&i.getDate()===o}function qt(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>_?`Keep the step to ${_} characters or fewer.`:null}function Je(t,e,n=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>W?{field:"title",message:`Keep the task name to ${W} characters or fewer.`}:e.trim().length>_?{field:"firstStep",message:`Keep the first step to ${_} characters or fewer.`}:n!==""&&!R(n)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function ie(t,e,n,s,o="",i){const a={id:`${s}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:n.trim(),createdAt:s,...o!==""?{deadline:o}:{},...kt(i)?{estimateMinutes:i}:{}};return{...t,tasks:[...t.tasks,a]}}function Ut(t,e,n){return{...t,tasks:t.tasks.map(s=>{if(s.id!==e)return s;const{estimateMinutes:o,...i}=s;return kt(n)?{...i,estimateMinutes:n}:i})}}function J(t,e){const n=t.checkIns.filter(s=>s.taskId===e).reduce((s,o)=>s+Math.max(0,o.endedAt-o.startedAt),0);return Math.floor(n/6e4)}function X(t,e){return e.estimateMinutes===void 0?null:Math.max(0,e.estimateMinutes-J(t,e.id))}function ut(t,e){if(!e.deadline)return null;const n=X(t,e)??0,s=Math.max(1,Math.ceil(n/Ve)),[o,i,a]=e.deadline.split("-").map(Number);return w(new Date(o,i-1,a-(s-1)).getTime())}function Wt(t,e,n){return{...t,tasks:t.tasks.map(s=>{if(s.id!==e)return s;const{deadline:o,...i}=s;return n===""?i:{...i,deadline:n}})}}function jt(t,e,n){return{...t,tasks:t.tasks.map(s=>s.id===e?{...s,firstStep:n.trim()}:s)}}function Xe(t,e){return{...t,tasks:t.tasks.filter(n=>n.id!==e)}}function Ze(t,e){return t.tasks.some(n=>n.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}const ae="Open it and read what it asks for";function re(t,e){const n=e.title.trim().toLowerCase();return t.tasks.some(s=>s.title.toLowerCase()===n&&s.deadline===e.due)}function Qe(t,e,n,s=!1){let o=t,i=0;for(const a of e){const d=a.title.trim().slice(0,W);if(!(d===""||!R(a.due)||re(o,{title:d,due:a.due}))){if(o=ie(o,d,ae,n+i,a.due),s){const r=o.tasks[o.tasks.length-1];o={...o,tasks:[...o.tasks.slice(0,-1),{...r,demo:!0}]}}i+=1}}return{state:o,added:i}}function le(t,e){return t.tasks.some(n=>n.id===e&&n.demo===!0)}function q(t){return t.checkIns.filter(e=>!le(t,e.taskId))}function tn(t){return t.tasks.some(e=>e.demo===!0)}function en(t){const e=new Set(t.tasks.filter(n=>n.demo===!0).map(n=>n.id));return{...t,tasks:t.tasks.filter(n=>!e.has(n.id)),checkIns:t.checkIns.filter(n=>!e.has(n.taskId)),active:t.active&&e.has(t.active.taskId)?null:t.active}}function nn(t,e){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{completedAt:s,...o}=n;return o})}}function bt(t){return an(t.filter(e=>e.completedAt===void 0))}function ce(t){const e=i=>t.checkIns.filter(a=>a.taskId===i).length,n=bt(t.tasks).filter(i=>!i.demo),s=n.filter(i=>i.deadline!==void 0).sort((i,a)=>ut(t,i).localeCompare(ut(t,a))||(X(t,a)??0)-(X(t,i)??0)||i.deadline.localeCompare(a.deadline)||i.createdAt-a.createdAt),o=n.filter(i=>i.deadline===void 0).sort((i,a)=>e(i.id)-e(a.id)||i.createdAt-a.createdAt);return[...s,...o]}function sn(t,e=[]){const n=ce(t);return n.find(s=>!e.includes(s.id))??n[0]??null}function on(t){return t.filter(e=>e.completedAt!==void 0).sort((e,n)=>(n.completedAt??0)-(e.completedAt??0))}function an(t){return[...t].sort((e,n)=>e.deadline&&n.deadline?e.deadline.localeCompare(n.deadline)||e.createdAt-n.createdAt:e.deadline?-1:n.deadline?1:e.createdAt-n.createdAt)}function w(t){const e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${s}`}const rn={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function ln(t,e){const[n,s,o]=t.split("-").map(Number),i=new Date(e),a=new Date(i.getFullYear(),i.getMonth(),i.getDate());return Math.round((new Date(n,s-1,o).getTime()-a.getTime())/864e5)}function cn(t,e){if(!t)return null;const n=ln(t,e);return n<0?"overdue":n===0?"today":n===1?"tomorrow":n<=3?"soon":null}function wt(t,e){const n=w(e);if(t===n)return"Due today";const[s,o,i]=t.split("-").map(Number),a=new Date(s,o-1,i).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...s!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<n?`Overdue: ${a}`:`Due ${a}`}function dn(t,e,n,s){return{...t,active:{taskId:e,minutes:n,startedAt:s,endsAt:s+n*6e4,leftCount:0,awayMs:0}}}function un(t,e){const n=t.active;return!n||n.leftCount===void 0||n.hiddenAt!==void 0||F(n,e)<=0?t:{...t,active:{...n,hiddenAt:e}}}function pt(t,e){const n=t.active;if(!n||n.hiddenAt===void 0)return t;const{hiddenAt:s,...o}=n,i=n.endedEarlyAt??n.endsAt,a=Math.max(0,Math.min(e,i)-s);return a<ze?{...t,active:o}:{...t,active:{...o,leftCount:(o.leftCount??0)+1,awayMs:(o.awayMs??0)+a}}}function pn(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function F(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function mn(t,e,n){const s=pt(t,n).active;if(!s)return t;const o={taskId:s.taskId,minutes:s.minutes,startedAt:s.startedAt,endedAt:Math.min(s.endedEarlyAt??s.endsAt,n),outcome:e,...s.leftCount!==void 0?{leftCount:s.leftCount,awayMs:s.awayMs??0}:{}},i=e==="finished"?t.tasks.map(a=>a.id===s.taskId?{...a,completedAt:n}:a):t.tasks;return{...t,tasks:i,checkIns:[...t.checkIns,o],active:null}}function fn(t,e){const n=w(e),s=q(t).map(({startedAt:a,endedAt:d})=>({startedAt:a,endedAt:d}));if(t.active&&!le(t,t.active.taskId)){const{startedAt:a,endsAt:d,endedEarlyAt:r}=t.active;s.push({startedAt:a,endedAt:Math.min(r??d,e)})}const o=s.filter(a=>w(a.startedAt)===n),i=o.reduce((a,d)=>a+Math.max(0,d.endedAt-d.startedAt),0);return{sessionsStarted:o.length,minutesFocused:Math.floor(i/6e4)}}function G(t){return`${t.taskId}|${t.startedAt}`}const de=["kept-going","stopped","distracted"];function hn(t,e,n){return de.includes(n)?{...t,checkIns:t.checkIns.map(s=>G(s)===e&&s.outcome!=="finished"?{...s,outcome:n}:s)}:t}function yn(t,e){const n=t.checkIns.find(s=>G(s)===e)??null;return n?{state:{...t,checkIns:t.checkIns.filter(s=>s!==n)},removed:n}:{state:t,removed:null}}function gn(t,e){if(t.checkIns.some(s=>G(s)===G(e)))return t;const n=[...t.checkIns,e].sort((s,o)=>s.startedAt-o.startedAt);return{...t,checkIns:n}}function kn(t,e){return[...t.checkIns].reverse().find(n=>n.taskId===e)}function bn(t){const e=t.filter(i=>i.leftCount!==void 0),n=e.filter(i=>(i.leftCount??0)>0),s=e.filter(i=>i.leftCount===0),o=i=>i.filter(a=>a.outcome==="distracted").length;return{tracked:e.length,left:n.length,awayMs:n.reduce((i,a)=>i+(a.awayMs??0),0),distractedWhenLeft:o(n),distractedWhenStayed:o(s)}}function Rt(t){const[e,n,s]=t.split("-").map(Number);return w(new Date(e,n-1,s-1).getTime())}function V(t,e){const n=q(t),s=new Set(n.map(p=>w(p.startedAt))),o=w(e),i=s.has(o);let a=i?o:Rt(o),d=0;for(;s.has(a);)d+=1,a=Rt(a);const r=yt.map(p=>{const f=n.filter(g=>g.minutes===p);return{minutes:p,sessions:f.length,keptGoing:f.filter(g=>g.outcome==="kept-going").length}}),u=r.filter(p=>p.keptGoing>0).sort((p,f)=>f.keptGoing/f.sessions-p.keptGoing/p.sessions||f.sessions-p.sessions)[0],m=Object.fromEntries(Object.keys(C).map(p=>[p,n.filter(f=>f.outcome===p).length]));return{streakDays:d,sessionToday:i,lengths:r,bestLength:(u==null?void 0:u.minutes)??null,outcomeCounts:m,totalSessions:n.length,drift:bn(n)}}function mt(t){const e=Math.ceil(t/1e3),n=Math.floor(e/60),s=e%60;return`${n}:${String(s).padStart(2,"0")}`}function Vt(t){if(!t)return U();let e;try{e=t.getItem(tt)}catch{return U()}if(e===null)return U();let n;try{n=JSON.parse(e)}catch{return Kt(t,e),U()}const s=vn(n);return JSON.stringify(s)!==JSON.stringify(n)&&Kt(t,e),s}function wn(t,e){t.setItem(tt,JSON.stringify(e))}function Kt(t,e){try{t.setItem(Re,e)}catch{}}function vn(t){if(!et(t))return U();const e=Array.isArray(t.tasks)?t.tasks.filter($n).map(Sn).map(En).map(Tn).map(An):[],n=Array.isArray(t.checkIns)?t.checkIns.filter(Dn).map(zt):[],s=In(t.active)?zt(t.active):null;return{tasks:e,checkIns:n,active:s}}function zt(t){const e=s=>typeof s=="number"&&Number.isFinite(s)&&s>=0;let n=t;if((t.leftCount!==void 0||t.awayMs!==void 0)&&(!e(t.leftCount)||!e(t.awayMs??0))){const{leftCount:s,awayMs:o,...i}=n;n=i}if(n.hiddenAt!==void 0&&!e(n.hiddenAt)){const{hiddenAt:s,...o}=n;n=o}return n}function et(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function $n(t){return et(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function Sn(t){if(t.deadline===void 0||typeof t.deadline=="string"&&R(t.deadline))return t;const{deadline:e,...n}=t;return n}function An(t){if(t.estimateMinutes===void 0||kt(t.estimateMinutes))return t;const{estimateMinutes:e,...n}=t;return n}function Tn(t){if(t.demo===void 0||t.demo===!0)return t;const{demo:e,...n}=t;return n}function En(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...n}=t;return n}function Dn(t){return et(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(C,t.outcome)}function In(t){return et(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const ue=3,Jt=3,vt=.2,at=864e5;function xn(t){const e=new Date(t).getHours();return e>=5&&e<12?"morning":e>=12&&e<17?"afternoon":e>=17&&e<22?"evening":"night"}const Mn=t=>t.filter(e=>e.outcome==="kept-going").length,Z=t=>`“${t.title}”`;function ft(t,e){const[n,s,o]=t.split("-").map(Number);return w(new Date(n,s-1,o+e).getTime())}function Ln(t,e){const{left:n,distractedWhenLeft:s,distractedWhenStayed:o,tracked:i}=V(t,e).drift,a=i-n;return n<3||a<1||s/n-o/a<vt?null:{kind:"drift",text:`When you leave the page, ${s} of ${n} sessions end in Got distracted; when you stay, ${o} of ${a}. Putting your phone in another room before you start may help.`}}function On(t,e){const{lengths:n,bestLength:s}=V(t,e),o=n.find(d=>d.minutes===s),i=n.filter(d=>d.minutes!==s&&d.sessions>0);if(!o||o.sessions<3||i.length===0)return null;const a=o.keptGoing/o.sessions;return i.some(d=>a-d.keptGoing/d.sessions<vt)?null:{kind:"best-length",text:`${o.minutes}-minute sessions go best for you: you kept going in ${o.keptGoing} of ${o.sessions}. Try ${o.minutes} first.`}}const Cn=3;function rt(t){return String(Math.round(t*10)/10)}function Nn(t){const e=t.tasks.filter(a=>a.completedAt!==void 0&&!a.demo&&a.estimateMinutes!==void 0&&J(t,a.id)>0);if(e.length<Cn)return null;const n=e.reduce((a,d)=>a+d.estimateMinutes,0),o=e.reduce((a,d)=>a+J(t,d.id),0)/n,i=`${e.length} tasks`;return o>=1.25?{kind:"estimates",text:`Your finished tasks took about ${rt(o)}× your estimates (${i}). Padding your next guess by about ${Math.round((o-1)*100)}% may make deadlines calmer.`,link:{href:"#getting-unstuck",label:"Planning strategies"}}:o<=.75?{kind:"estimates",text:`Your finished tasks took ${rt(o)==="0.5"?"about half":`about ${rt(o)}×`} your estimates (${i}). Things may be smaller than they feel; worth remembering when one looks scary.`}:null}function Fn(t){const e=["morning","afternoon","evening","night"].map(o=>{const i=t.filter(a=>xn(a.startedAt)===o);return{part:o,sessions:i.length,kept:Mn(i)}}).filter(o=>o.sessions>=3).sort((o,i)=>i.kept/i.sessions-o.kept/o.sessions);if(e.length<2)return null;const[n,s]=e;return n.kept===0||n.kept/n.sessions-s.kept/s.sessions<vt?null:{kind:"time-of-day",text:`Your ${n.part}s go best: you kept going in ${n.kept} of ${n.sessions}. Put the hardest task there when you can.`}}function _n(t,e,n){const s=w(n),o=ft(s,3),i=t.filter(u=>!e.some(m=>m.taskId===u.id)),a=i.find(u=>u.deadline!==void 0&&u.deadline>=s&&u.deadline<=o);if(a){const u=Math.round((new Date(`${a.deadline}T00:00:00`).getTime()-new Date(`${s}T00:00:00`).getTime())/at),m=u===0?"today":u===1?"tomorrow":`in ${u} days`;return{kind:"avoided",text:`${Z(a)} is due ${m} and hasn't had a session yet. Its first step might be too big; try shrinking it.`}}const d=i.filter(u=>n-u.createdAt>=7*at).sort((u,m)=>u.createdAt-m.createdAt)[0];if(!d)return null;const r=Math.floor((n-d.createdAt)/at);return{kind:"avoided",text:`${Z(d)} has been on your list ${r} days without a session. Its first step might be too big; try shrinking it.`}}function Pn(t,e){const n=w(e),s=t.filter(a=>a.deadline!==void 0&&a.deadline<n).sort((a,d)=>a.deadline.localeCompare(d.deadline));if(s.length===0)return null;const o=s[0];return{kind:"overdue",text:s.length===1?`${Z(o)} is overdue. One 5-minute session on it breaks the freeze.`:`${s.length} tasks are overdue. One 5-minute session on ${Z(o)} breaks the freeze.`}}function Hn(t,e,n){const{streakDays:s}=V(t,n);if(s>=3)return{kind:"streak",text:`${s} days in a row. That's a habit forming.`};if(s>0)return null;const o=new Set(e.map(r=>w(r.startedAt))),i=w(n),a=[...o].filter(r=>r<i).sort().at(-1);if(!a||a<ft(i,-7))return null;let d=0;for(let r=a;o.has(r);r=ft(r,-1))d+=1;return d<3?null:{kind:"streak",text:`Your ${d}-day streak ended. Today's first small step starts a new one, and it counts fully.`}}function Yn(t,e){const n=t.filter(s=>s.outcome==="distracted").length;return n<3||e.length>0?null:{kind:"toolkit",text:`You've been pulled away in ${n} sessions. Pick a strategy or two for those moments.`,link:{href:"#getting-unstuck",label:"Open the 10 strategies"}}}function pe(t){return q(t).length>=ue}function Bn(t,e,n=[]){if(!pe(t))return[];const s=q(t),o=bt(t.tasks).filter(u=>!u.demo),a=[Ln(t,e),On(t,e),Fn(s),Nn(t),_n(o,s,e),Pn(o,e),Hn(t,s,e),Yn(s,n)].filter(u=>u!==null),d=a.slice(0,Jt),r=a.find(u=>Xt.includes(u.kind));return r&&!d.some(u=>Xt.includes(u.kind))&&d.splice(Jt-1,1,r),d}const Xt=["avoided","overdue"],Gn=5,qn=[{name:"Seedling",note:"One session today sprouts its first leaves."},{name:"First sprout",note:"One day of focus, planted. Keep it going tomorrow."},{name:"Young shoot",note:"Two days in a row: it's starting to show."},{name:"Leafing out",note:"Three days in a row. This is what a rhythm looks like."},{name:"Full bloom",note:"Four days in a row: a real habit forming."},{name:"Flourishing",note:"Five days or more in a row. This is what consistency looks like."}];function Un(t){const e=new Date(t),n=(e.getDay()+6)%7;return new Date(e.getFullYear(),e.getMonth(),e.getDate()-n).getTime()}function Wn(t,e){const n=q(t),{streakDays:s}=V(t,e),o=n.map(({startedAt:g,endedAt:v})=>({startedAt:g,endedAt:v})),i=t.active;i&&!t.tasks.some(g=>g.id===i.taskId&&g.demo)&&o.push({startedAt:i.startedAt,endedAt:Math.min(i.endedEarlyAt??i.endsAt,e)});const a=Un(e),d=new Date(a),r=new Date(d.getFullYear(),d.getMonth(),d.getDate()-7).getTime(),u=(g,v)=>Math.floor(o.filter(A=>A.startedAt>=g&&A.startedAt<v).reduce((A,I)=>A+Math.max(0,I.endedAt-I.startedAt),0)/6e4),m=t.tasks.filter(g=>g.completedAt!==void 0&&!g.demo),p=m.filter(g=>g.deadline!==void 0),f=p.filter(g=>w(g.completedAt)<=g.deadline);return{stage:Math.min(s,Gn),streakDays:s,notStarted:n.length===0&&o.length===0,freshStart:s===0&&n.length>0,finishedWithDeadline:p.length,finishedOnTime:f.length,focusedThisWeek:u(a,Number.POSITIVE_INFINITY),focusedLastWeek:u(r,a),tasksFinished:m.length}}const jn=30;function Zt(t,e){const n=t.tasks.find(o=>o.id===e.taskId),s=Math.floor(Math.max(0,e.endedAt-e.startedAt)/6e4);return{key:G(e),startedAt:e.startedAt,taskId:e.taskId,taskTitle:(n==null?void 0:n.title)??null,demo:(n==null?void 0:n.demo)===!0,plannedMinutes:e.minutes,actualMinutes:s,endedEarly:e.endedAt-e.startedAt<e.minutes*6e4-3e4,outcome:e.outcome,...e.leftCount!==void 0?{leftCount:e.leftCount,awayMs:e.awayMs??0}:{}}}function Rn(t,e,n="",s=!1){const o=t.checkIns.filter(m=>n===""||m.taskId===n),i=new Date(e),a=w(new Date(i.getFullYear(),i.getMonth(),i.getDate()-(jn-1)).getTime()),d=s?o:o.filter(m=>w(m.startedAt)>=a),r=new Map;for(const m of[...d].sort((p,f)=>f.startedAt-p.startedAt)){const p=w(m.startedAt);r.set(p,[...r.get(p)??[],Zt(t,m)])}return{days:[...r.entries()].map(([m,p])=>({day:m,entries:p,minutes:p.reduce((f,g)=>f+g.actualMinutes,0)})),totalSessions:o.length,totalMinutes:o.reduce((m,p)=>m+Zt(t,p).actualMinutes,0),hasOlder:d.length<o.length}}function Vn(t,e){const n=new Date(e);if(t===w(e))return"Today";if(t===w(new Date(n.getFullYear(),n.getMonth(),n.getDate()-1).getTime()))return"Yesterday";const[s,o,i]=t.split("-").map(Number);return new Date(s,o-1,i).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...s!==n.getFullYear()?{year:"numeric"}:{}})}function Qt(t){return new Date(t).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}).toLowerCase()}function Kn(t){return t.endedEarly?`ended at ${t.actualMinutes} of ${t.plannedMinutes} min`:`${t.plannedMinutes} min`}function zn(t){const e=new Set(t.checkIns.map(n=>n.taskId));return t.tasks.filter(n=>e.has(n.id)).map(n=>({id:n.id,title:n.title})).sort((n,s)=>n.title.localeCompare(s.title))}const Jn=1e6,Xn=120,Zn=100,ht={google:"Google Calendar",outlook:"Outlook"},Qn={google:[["Problem set 9",1],["Read chapter 7 before discussion",2],["Lab report draft",5]],outlook:[["Email advisor about spring classes",1],["Scholarship application",4],["Group project check-in slides",6]]};function ts(t,e){const n=new Date(e);return Qn[t].map(([s,o])=>({title:s,due:w(new Date(n.getFullYear(),n.getMonth(),n.getDate()+o).getTime())}))}function es(t,e){var d,r;if(!/BEGIN:VCALENDAR/i.test(t))return{error:"That file isn't a calendar file. Look for one ending in .ics."};const n=w(e),s=new Date(e),o=w(new Date(s.getFullYear(),s.getMonth(),s.getDate()+Xn).getTime()),i=[],a=new Set;for(const u of ss(ns(t))){const m=os(u.lines);if(m.has("RRULE")||((d=m.get("STATUS"))==null?void 0:d.value.toUpperCase())==="CANCELLED")continue;const p=(u.kind==="VTODO"?m.get("DUE"):void 0)??m.get("DTSTART"),f=p?is(p.value):null,g=as(((r=m.get("SUMMARY"))==null?void 0:r.value)??"").slice(0,W).trim();if(!f||g===""||f<n||f>o)continue;const v=`${g.toLowerCase()}|${f}`;a.has(v)||(a.add(v),i.push({title:g,due:f}))}return i.sort((u,m)=>u.due.localeCompare(m.due)||u.title.localeCompare(m.title)),{events:i.slice(0,Zn)}}function ns(t){return t.replace(/\r\n?/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function ss(t){const e=[];let n=null;for(const s of t){const o=s.trim().toUpperCase();o==="BEGIN:VEVENT"||o==="BEGIN:VTODO"?n={kind:o==="BEGIN:VEVENT"?"VEVENT":"VTODO",lines:[]}:(o==="END:VEVENT"||o==="END:VTODO")&&n?(e.push(n),n=null):n&&n.lines.push(s)}return e}function os(t){const e=new Map;for(const n of t){const s=n.indexOf(":");if(s<=0)continue;const o=n.slice(0,s).split(";")[0].trim().toUpperCase();e.has(o)||e.set(o,{value:n.slice(s+1).trim()})}return e}function is(t){const e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?$/.exec(t);if(!e)return null;const[,n,s,o,i,a,d,r]=e;if(r){const m=Date.UTC(+n,+s-1,+o,+i,+a,+d);return Number.isNaN(m)?null:w(m)}const u=`${n}-${s}-${o}`;return R(u)?u:null}function as(t){return t.replace(/\\[nN]/g," ").replace(/\\([,;\\])/g,"$1").replace(/\s+/g," ")}const rs=[523.25,659.25,783.99],ls=.22,te=1.4,cs=.12;function ds(){let t=null,e=null,n=null,s=[];const o=()=>{for(const a of s){try{a.stop()}catch{}a.disconnect()}s=[],n=null},i=()=>{if(!t||t.state!=="running"||e===null||n===e)return;o();const a=(e-Date.now())/1e3;if(a<0)return;const d=t.currentTime+a;s=rs.map((r,u)=>{const m=d+u*ls,p=t.createOscillator(),f=t.createGain();return p.type="sine",p.frequency.value=r,f.gain.setValueAtTime(0,m),f.gain.linearRampToValueAtTime(cs,m+.03),f.gain.exponentialRampToValueAtTime(1e-4,m+te),p.connect(f).connect(t.destination),p.start(m),p.stop(m+te),p}),n=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?i():t.resume().then(i,()=>{})},chimeAt(a){e=a,i()},cancel(){e=null,o()}}}const me="momentum.sound.v1",fe=500,Q={brown:"Brown noise",rain:"Rain",hum:"Warm hum"},lt={soundscape:"rain",volume:.4,playing:!1,playlistLink:"",panelOpen:!0},ct="Paste a YouTube or Spotify playlist link, like https://www.youtube.com/playlist?list=…",us=/^[A-Za-z0-9_-]{2,64}$/,ps=/^[A-Za-z0-9_-]{11}$/,ms=/^[A-Za-z0-9]{22}$/,fs=["playlist","album","track","episode","show"];function $t(t){const e=t.trim();if(e==="")return{error:"Paste a playlist link first."};if(e.length>fe)return{error:"That link is too long to be a playlist link."};const n=/^spotify:([a-z]+):([A-Za-z0-9]+)$/.exec(e);if(n)return ee(n[1],n[2]);let s;try{s=new URL(/^[a-z]+:\/\//i.test(e)?e:`https://${e}`)}catch{return{error:ct}}if(s.protocol!=="https:"&&s.protocol!=="http:")return{error:ct};const o=s.hostname.toLowerCase().replace(/^(www|m|music)\./,"");if(o==="youtube.com"||o==="youtu.be"||o==="youtube-nocookie.com")return hs(s,o);if(o==="open.spotify.com"){const i=s.pathname.split("/").filter(r=>r!==""&&!r.startsWith("intl-")),a=i[0]==="embed"?i[1]:i[0],d=i[0]==="embed"?i[2]:i[1];return ee(a??"",d??"")}return{error:ct}}function hs(t,e){var o;const n=t.searchParams.get("list");if(n!==null)return us.test(n)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/videoseries?list=${n}`}:{error:"That YouTube playlist link looks broken. Copy it again from YouTube."};let s=null;return e==="youtu.be"?s=t.pathname.slice(1):t.pathname==="/watch"?s=t.searchParams.get("v"):s=((o=/^\/(?:embed|shorts|live)\/([^/]+)/.exec(t.pathname))==null?void 0:o[1])??null,s!==null&&ps.test(s)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/${s}`}:{error:"That YouTube link has no playlist or video in it. Open the playlist and copy its link."}}function ee(t,e){return!fs.includes(t)||!ms.test(e)?{error:"That Spotify link has no playlist in it. In Spotify, use Share → Copy link to playlist."}:{service:"spotify",embedUrl:`https://open.spotify.com/embed/${t}/${e}`}}function ys(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(me))??"null")}catch{return{...lt}}if(typeof e!="object"||e===null||Array.isArray(e))return{...lt};const n=e,s={...lt};return typeof n.soundscape=="string"&&Object.hasOwn(Q,n.soundscape)&&(s.soundscape=n.soundscape),typeof n.volume=="number"&&n.volume>=0&&n.volume<=1&&(s.volume=n.volume),typeof n.playing=="boolean"&&(s.playing=n.playing),typeof n.panelOpen=="boolean"&&(s.panelOpen=n.panelOpen),typeof n.playlistLink=="string"&&!("error"in $t(n.playlistLink))&&(s.playlistLink=n.playlistLink),s}function gs(t,e){try{return t?(t.setItem(me,JSON.stringify(e)),!0):!1}catch{return!1}}const ne=.35,ks=.6,bs=.8,ws=2,vs=4;function $s(){let t=null,e=null;const n=new Map,s=()=>{try{t??(t=new AudioContext)}catch{return null}return t.state!=="running"&&t.resume().catch(()=>{}),t},o=(r,u)=>{const m=n.get(u);if(m)return m;const p=r.createBuffer(1,r.sampleRate*vs,r.sampleRate),f=p.getChannelData(0);let g=0;for(let v=0;v<f.length;v++){const A=Math.random()*2-1;u==="white"?f[v]=A*.5:(g=(g+.02*A)/1.02,f[v]=g*3.5)}return n.set(u,p),p},i=(r,u,m,p)=>{const f=r.createBufferSource();f.buffer=o(r,u),f.loop=!0;const g=r.createGain();return g.gain.value=p,f.connect(g).connect(m),f},a=(r,u,m)=>{if(u==="brown")return[i(r,"brown",m,1)];if(u==="rain"){const x=r.createBiquadFilter();x.type="highpass",x.frequency.value=500;const D=r.createBiquadFilter();D.type="lowpass",D.frequency.value=5e3,x.connect(D).connect(m);const L=r.createGain();L.gain.value=.8,L.connect(x);const E=r.createOscillator();E.frequency.value=.13;const $=r.createGain();return $.gain.value=.15,E.connect($).connect(L.gain),[i(r,"white",L,.7),i(r,"brown",m,.4),E]}const p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=700;const f=r.createGain();f.gain.value=.35,f.connect(p).connect(m);const v=[{frequency:110,type:"sine",level:.5},{frequency:110.6,type:"sine",level:.35},{frequency:164.8,type:"sine",level:.25},{frequency:220.4,type:"triangle",level:.08}].map(({frequency:x,type:D,level:L})=>{const E=r.createOscillator();E.type=D,E.frequency.value=x;const $=r.createGain();return $.gain.value=L,E.connect($).connect(f),E}),A=r.createOscillator();A.frequency.value=.08;const I=r.createGain();return I.gain.value=.1,A.connect(I).connect(f.gain),[...v,A]},d=(r,u,m)=>{const p=r.currentTime;u.fade.gain.cancelScheduledValues(p),u.fade.gain.setValueAtTime(u.fade.gain.value,p),u.fade.gain.linearRampToValueAtTime(0,p+m);for(const f of u.sources)f.stop(p+m+.05)};return{play(r,u,m){const p=s();if(!p)return;e&&d(p,e,.3);const f=p.currentTime,g=p.createGain();g.gain.setValueAtTime(0,f),g.gain.linearRampToValueAtTime(u*ne,f+ks);const v=p.createGain();g.connect(v).connect(p.destination);const A=(m-Date.now())/1e3;A>0&&(v.gain.setValueAtTime(1,f+Math.max(0,A-ws)),v.gain.linearRampToValueAtTime(0,f+A));const I=a(p,r,g);for(const x of I)x.start(f);e={sources:I,volume:g,fade:v}},setVolume(r){!t||!e||(e.volume.gain.cancelScheduledValues(t.currentTime),e.volume.gain.setTargetAtTime(r*ne,t.currentTime,.05))},stop(){!t||!e||(d(t,e,bs),e=null)},isPlaying(){return e!==null}}}const he="momentum.toolkit.v1",ye=["Getting started","Staying focused","Planning","Mindset"],B=[{id:"tiny-first-step",category:"Getting started",title:"Make the first step ridiculously small",why:"The hardest part of any task is starting. When the first step is tiny, there's nothing for your brain to dread.",how:["Ask: what's the smallest physical action that counts as starting?","Commit only to that: “open the doc and write the title”","Let momentum carry you; stopping after is allowed"],example:"Not “write the report”, but “paste in last quarter's numbers.”"},{id:"name-the-feeling",category:"Mindset",title:"Name the feeling you're avoiding",why:"Since procrastination is really about dodging a bad feeling, naming it takes away a lot of its power.",how:["Pause when you notice yourself stalling","Finish the sentence: “I'm avoiding this because it feels…”","Respond to that feeling: confused? Find one question to answer first"],example:"“It feels vague” → spend 5 minutes just listing what “done” looks like."},{id:"if-then-plans",category:"Planning",title:"Use if-then plans",why:"Deciding in advance exactly when and where you'll act removes the daily decision, and it's one of the best-supported tactics in research.",how:["Write: “If [time/situation], then I will [specific action]”","Tie it to something that already happens every day","Put it in your calendar with the action as the title"],example:"“If I finish my morning coffee, then I open the proposal draft.”"},{id:"short-sessions",category:"Staying focused",title:"Work in short focus sessions",why:"“Work on it for 25 minutes” is far less scary than “finish it.” A clear end point makes starting easier.",how:["Press Start 5 min on the focus card for your top task","Only that task until the timer ends","Take a 5-minute break, then decide on another round"],example:"Four sessions ≈ one solid, guilt-free morning."},{id:"friction",category:"Staying focused",title:"Add friction to distractions",why:"You'll grab whatever is easiest. Make distractions a little harder to reach and the task a little easier.",how:["Put your phone in another room or in a drawer","Log out of social apps or use a site blocker during work blocks","Leave the task open and ready the night before"],example:"Even 20 seconds of extra effort to reach a distraction cuts how often you reach for it."},{id:"earlier-deadline",category:"Planning",title:"Set an earlier personal deadline, and pad estimates",why:"We almost always underestimate how long things take (the planning fallacy). Real deadlines then arrive too fast.",how:["Set your own deadline 1–2 days before the real one, and give that date to the task in Momentum","Add 20–50% to how long you think it will take","Compare your guess with how long it really took, and adjust next time"],example:"Due Friday? Your deadline is Wednesday evening."},{id:"do-it-badly",category:"Getting started",title:"Give yourself permission to do it badly",why:"Perfectionism is one of the biggest drivers of delay. If the first try must be great, it's safer not to try at all.",how:["Label the first pass “draft zero”: it's meant to be rough","Aim for done, then improve","Set a low bar on purpose: “one ugly paragraph”"],example:"A messy draft you can fix beats a perfect one that doesn't exist."},{id:"temptation-bundling",category:"Mindset",title:"Pair the task with something you enjoy",why:"Temptation bundling links a dreaded task with a treat, so you start looking forward to it instead.",how:["Choose a treat you'll only have while doing the task","Examples: a favorite playlist, podcast, nice coffee, a cozy spot","Keep the rule strict: no task, no treat"],example:"Only listen to your favorite podcast while folding laundry or doing admin."},{id:"accountability",category:"Staying focused",title:"Get some accountability",why:"It's easy to break promises to yourself, much harder to break them to someone else.",how:["Tell a friend what you'll finish and by when","Try body doubling: work alongside someone, in person or on a video call","Share a quick “done!” message when you finish"],example:"“I'll send you the draft by 4pm” works better than “I'll try to do it today.”"},{id:"forgive-and-restart",category:"Mindset",title:"Forgive yourself and restart",why:"Research on students found that those who forgave themselves for procrastinating on one exam procrastinated less on the next. Guilt feeds the loop; kindness breaks it.",how:["Acknowledge it plainly: “I put that off. That happens.”","Skip the self-lecture; ask “what's one thing I can do now?”","Treat every day as a fresh start, not a streak to protect"],example:"Missed yesterday? Today's first small step still counts fully."}];function ge(t,e){return t==="all"?[...B]:t==="toolkit"?B.filter(n=>e.includes(n.id)):B.filter(n=>n.category===t)}function Ss(t){return t==="all"||t==="toolkit"||ye.includes(t)}function As(t,e){return B.some(n=>n.id===e)?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[...t]}function Ts(t){return ge("toolkit",t)}function Es(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(he))??"[]")}catch{return[]}if(!Array.isArray(e))return[];const n=new Set(B.map(s=>s.id));return[...new Set(e.filter(s=>typeof s=="string"&&n.has(s)))]}function Ds(t,e){try{return t?(t.setItem(he,JSON.stringify(e)),!0):!1}catch{return!1}}const St="#getting-unstuck",ke="#history",dt="Momentum",Is="⏰ Time's up!";function xs(t){return t===St?"advice":t===ke?"history":"focus"}function h(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const Ms=`
  <a class="advice-link" href="${St}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function Ls(t,e){const n=h(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${n}" novalidate>
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
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${n}"
        aria-label="Edit step for ${h(t.title)}">Edit step</button></p>`}function Os(t){return t.leftCount===void 0?"":t.leftCount===0?"stayed on the page":`left ${t.leftCount===1?"once":`${t.leftCount}×`}, ${At(t.awayMs??0)}`}function Cs(t,e){const n=h(t.key),s=t.taskTitle===null?'<span class="session-task deleted">Deleted task</span>':`<span class="session-task">${h(t.taskTitle)}</span>`,o=t.demo?' <span class="demo-badge">Demo</span>':"",i=Os(t),a=`${t.taskTitle===null?"a deleted task":h(t.taskTitle)} at ${Qt(t.startedAt)}`;let d;if(e){const r=de.map(u=>`<button type="button" class="${u===t.outcome?"primary ":""}outcome-choice" data-action="set-outcome"
          data-key="${n}" data-outcome="${u}" aria-pressed="${u===t.outcome}">${C[u]}</button>`).join("");d=`
      <div class="session-actions" role="group" aria-label="Change the answer for ${a}">
        ${r}<button type="button" class="link-button" data-action="cancel-outcome" data-key="${n}">Cancel</button>
      </div>`}else d=`
      <div class="session-actions">
        ${t.outcome==="finished"?"":`<button type="button" class="link-button" data-action="edit-outcome" data-key="${n}" aria-label="Change answer for ${a}">Change answer</button>`}<button type="button" class="link-button" data-action="delete-session" data-key="${n}" aria-label="Delete the session on ${a}">Delete</button>
      </div>`;return`
    <li class="session" data-key="${n}">
      <div class="session-line">
        <span class="session-time">${Qt(t.startedAt)}</span>
        ${s}${o}
      </div>
      <div class="session-line">
        <span class="session-length">${Kn(t)}</span>
        <span class="outcome-badge outcome-${t.outcome}">${C[t.outcome]}</span>
        ${i?`<span class="session-away">${i}</span>`:""}
      </div>
      ${d}
    </li>`}function Ns(t,e,n){const s='<nav class="back-bar"><a class="back-link" href="#">← Back to my tasks</a></nav>',o=Rn(t,n,e.taskId,e.showOlder),i=['<option value="">All tasks</option>',...zn(t).map(f=>`<option value="${h(f.id)}"${f.id===e.taskId?" selected":""}>${h(f.title)}</option>`)].join(""),a=o.totalSessions===1?"session":"sessions",d=o.totalSessions===0?"":`<p class="history-summary">${o.totalSessions} ${a} · ${P(o.totalMinutes)} in all</p>`,r=e.deleted?'<p class="undo-notice" role="status">Deleted a session. <button type="button" class="link-button" data-action="undo-session-delete">Undo</button></p>':"",u=o.days.map(f=>{const g=f.entries.length===1?"1 session":`${f.entries.length} sessions`;return`
        <section class="card history-day" aria-labelledby="day-${f.day}">
          <h3 id="day-${f.day}">${Vn(f.day,n)} <span class="history-day-total">${g} · ${P(f.minutes)}</span></h3>
          <ul class="session-list">${f.entries.map(v=>Cs(v,e.editing===v.key)).join("")}</ul>
        </section>`}).join(""),m=o.totalSessions>0?"":`<section class="card"><p class="muted history-empty">${e.taskId===""?"No sessions yet. Your first one will show up here.":"No sessions on this task yet."}</p></section>`,p=o.hasOlder?'<button type="button" class="show-older" data-action="show-older">Show older sessions</button>':"";return`
    <main class="view" aria-labelledby="history-title">
      ${s}
      <section class="card history-head">
        <h2 id="history-title" tabindex="-1">Session history</h2>
        <label for="history-task">Task</label>
        <select id="history-task">${i}</select>
        ${d}
        ${r}
      </section>
      ${u}${m}${p}
      ${s}
    </main>`}function P(t){if(t<60)return`${t} min`;const e=Math.floor(t/60),n=t%60;return n===0?`${e} h`:`${e} h ${n} min`}function Fs(t){const[e,n,s]=t.split("-").map(Number);return new Date(e,n-1,s).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function be(t){return['<option value="">Not sure</option>',...gt.map(e=>`<option value="${e.minutes}"${e.minutes===t?" selected":""}>${e.label}</option>`)].join("")}function we(t,e){const n=J(t,e.id),s=`About ${Ke(e.estimateMinutes)}`;return n===0?s:n>=e.estimateMinutes?`${s} · ${P(n)} done, more than you guessed`:`${s} · ${P(n)} done so far`}function _s(t,e,n){const s=h(e.id);if((n==null?void 0:n.taskId)===e.id){const i=e.estimateMinutes?`<button type="button" data-action="remove-estimate" data-task-id="${s}">Remove estimate</button>`:"";return`
      <form class="estimate-editor" data-task-id="${s}" novalidate>
        <label for="estimate-edit">About how long is ${h(e.title)}?</label>
        <select id="estimate-edit" name="estimate">${be(e.estimateMinutes)}</select>
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-estimate">Cancel</button>
          ${i}
        </div>
      </form>`}const o=i=>`<button type="button" class="link-button" data-action="edit-estimate" data-task-id="${s}"
      aria-label="${i} for ${h(e.title)}">${i}</button>`;return e.estimateMinutes?`<p class="estimate"><span class="estimate-text">${we(t,e)}</span> ${o("Change")}</p>`:`<p class="estimate">${o("Add estimate")}</p>`}function Ps(t,e,n){const s=X(t,e),o=ut(t,e),i=w(n);return!s||!o||!e.deadline||e.deadline<i?"":`<p class="hero-start-by">${o<i?`Start today: about ${P(s)} left, more than the days before it's due allow at 2 hours a day.`:o===i?"Start today to finish on time.":`Start by ${Fs(o)} to finish on time.`}</p>`}function Hs(t,e,n){const s=h(t.id);if((e==null?void 0:e.taskId)===t.id){const a=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${s}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${s}" novalidate>
        <label for="deadline-edit">Deadline for ${h(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${h(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${h(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${a}
        </div>
      </form>`}const o=a=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${s}"
      aria-label="${a} for ${h(t.title)}">${a}</button>`;return t.deadline?`<p class="deadline${t.deadline<=w(n)?" deadline-urgent":""}"><span class="deadline-date">${wt(t.deadline,n)}</span> ${o("Change")}</p>`:`<p class="deadline">${o("Add deadline")}</p>`}function ve(t,e){const n=cn(t.deadline,e);return n?`<span class="urgency urgency-${n}">${rn[n]}</span>`:""}const Ys={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function Bs(t,e){const n=e.outcome==="kept-going",s=n?"":'<button type="button" data-action="cancel-step">Cancel</button>',o=n?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${n?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${_}"
        value="${h(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${h(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${n?"Save next step":"Save smaller step"}</button>
        ${o}${s}
      </div>
    </form>`}const Gs={all:"All","Getting started":"Getting started","Staying focused":"Staying focused",Planning:"Planning",Mindset:"Mindset",toolkit:"My toolkit"};function qs(t,e){const n=h(t.id),s=e?"Remove from my toolkit":"Add to my toolkit";return`
    <article class="strategy${e?" in-toolkit":""}" data-strategy-id="${n}">
      <p class="strategy-top">
        <span class="strategy-category">${h(t.category)}</span>
        ${e?'<span class="strategy-picked">✓ In your toolkit</span>':""}
      </p>
      <h4 class="strategy-title">${h(t.title)}</h4>
      <p class="strategy-why">${h(t.why)}</p>
      <ul class="strategy-how">${t.how.map(o=>`<li>${h(o)}</li>`).join("")}</ul>
      <p class="strategy-example">${h(t.example)}</p>
      <button type="button" class="${e?"":"primary "}toolkit-toggle" data-action="toggle-toolkit"
        data-strategy-id="${n}" aria-pressed="${e}"
        aria-label="${s}: ${h(t.title)}">${s}</button>
    </article>`}function Us(t,e){const n=["all",...ye,"toolkit"].map(i=>{const a=i==="toolkit"?`My toolkit (${e.length})`:Gs[i];return`<button type="button" class="strategy-filter${i===t?" active":""}"
        data-action="strategy-filter" data-filter="${h(i)}" aria-pressed="${i===t}">${a}</button>`}).join(""),s=ge(t,e),o=s.length>0?`<div class="strategy-grid">${s.map(i=>qs(i,e.includes(i.id))).join("")}</div>`:'<p class="muted toolkit-empty">Nothing in your toolkit yet. Under <strong>All</strong>, press <strong>Add to my toolkit</strong> on two or three that fit how you get stuck.</p>';return`
    <section class="card strategies" aria-labelledby="strategies-title">
      <h3 id="strategies-title" class="jump-target" tabindex="-1">10 strategies you can use today</h3>
      <p class="muted">You don't need all of them. Pick two or three that fit how you get stuck; they'll show up when a session goes sideways.</p>
      <div class="strategy-filters" role="group" aria-label="Show strategies">${n}</div>
      <p class="toolkit-count"><strong>${e.length}</strong> of ${B.length} in your toolkit</p>
      ${o}
    </section>`}function Ws(t){const e=Ts(t);return e.length===0?"":`
    <div class="toolkit-reminder">
      <p class="toolkit-reminder-title">From your toolkit</p>
      <ul>${e.map(s=>`<li><strong>${h(s.title)}.</strong> ${h(s.how[0])}</li>`).join("")}</ul>
    </div>`}function js(t,e,n){const{heading:s,message:o}=Ys[e.outcome],i=e.outcome==="stopped"||e.outcome==="distracted";let a="";if(e.stepSaved){const d=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";a=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${h(t.firstStep)}</strong></p>
      <div class="step-actions">${d}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(a=Bs(t,e),e.outcome==="kept-going"&&(a+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):i?a=`
      <p class="muted">Your tiny step: ${h(t.firstStep)}</p>
      ${Ws(n)}
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${St}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:a='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${s}</h2>
      <p class="muted">${h(t.title)}. ${o}</p>
      ${a}
    </section>`}function Rs(t){const e='<ellipse cx="50" cy="88" rx="30" ry="7" fill="var(--moss-pale)"/>',n=a=>`<line x1="50" y1="88" x2="50" y2="${88-a}" stroke="var(--forest)" stroke-width="3.5" stroke-linecap="round"/>`,s=(a,d,r,u,m)=>`<ellipse cx="${a}" cy="${d}" rx="${r}" ry="${u}" fill="var(--moss)" transform="rotate(${m} ${a} ${d})"/>`,o=(a,d)=>[0,60,120,180,240,300].map(r=>`<ellipse cx="${a}" cy="${d-7}" rx="4.5" ry="7" fill="var(--gold)" transform="rotate(${r} ${a} ${d})"/>`).join("")+`<circle cx="${a}" cy="${d}" r="4" fill="#8A6414"/>`;return`<svg class="plant" viewBox="0 0 100 100" aria-hidden="true">${[e+'<circle cx="50" cy="83" r="4" fill="var(--forest)"/>',e+n(14)+s(46,74,6,3,-20)+s(54,74,6,3,20),e+n(26)+s(42,66,8,4,-30)+s(58,66,8,4,30)+s(50,60,6,3,0),e+n(38)+s(38,60,9,4.5,-35)+s(62,60,9,4.5,35)+s(35,48,8,4,-15)+s(65,48,8,4,15)+s(50,42,7,4,0),e+n(44)+s(36,58,9,4.5,-35)+s(64,58,9,4.5,35)+s(33,44,8,4,-15)+s(67,44,8,4,15)+o(50,36),e+n(46)+s(34,56,9,4.5,-35)+s(66,56,9,4.5,35)+s(30,42,8,4,-15)+s(70,42,8,4,15)+s(40,30,7,4,-10)+s(60,30,7,4,10)+o(50,26)][t]}</svg>`}function Vs(t,e){const n=Wn(t,e),{name:s,note:o}=qn[n.stage],i=n.notStarted?"Your plant starts growing with your first session.":n.freshStart?"A fresh start. One session today plants it again.":o,a=n.finishedWithDeadline===0?"—":`${n.finishedOnTime} of ${n.finishedWithDeadline} (${j(n.finishedOnTime,n.finishedWithDeadline)}%)`,d=n.focusedLastWeek>0?`<span class="growth-compare">last week ${P(n.focusedLastWeek)}</span>`:"";return`
    <section class="card growth" aria-labelledby="growth-title">
      <h3 id="growth-title">Your growth</h3>
      <div class="growth-plant">
        ${Rs(n.stage)}
        <div>
          <p class="growth-stage">${s}</p>
          <p class="muted growth-caption">${i}</p>
        </div>
      </div>
      <dl class="growth-stats">
        <div class="growth-stat" data-stat="on-time"><dt>Finished on time</dt><dd>${a}</dd></div>
        <div class="growth-stat" data-stat="this-week"><dt>Focused this week</dt><dd>${P(n.focusedThisWeek)} ${d}</dd></div>
        <div class="growth-stat" data-stat="finished"><dt>Tasks finished</dt><dd>${n.tasksFinished} in all</dd></div>
      </dl>
    </section>`}function Ks(t,e,n){if(t.tasks.length===0)return"";let s;if(pe(t)){const o=Bn(t,n,e);s=o.length===0?'<p class="muted coaching-wait">Nothing stands out yet. Notes show up when your check-ins show a clear pattern.</p>':`<ul class="coaching-notes">${o.map(i=>{const a=i.link?` <a class="coaching-link" href="${h(i.link.href)}">${h(i.link.label)}</a>`:"";return`<li class="coaching-note" data-note="${i.kind}">${h(i.text)}${a}</li>`}).join("")}</ul>`}else{const o=q(t).length;s=`<p class="muted coaching-wait">Coaching notes start after ${ue} sessions. You've done ${o}.</p>`}return`
    <section class="coaching" aria-labelledby="coaching-title">
      <h4 id="coaching-title">Coaching notes</h4>
      ${s}
    </section>`}function j(t,e){return e===0?0:Math.round(t/e*100)}function zs(t){const e=t.streakDays===1?"day":"days";let n;return t.sessionToday?n="You've focused today. Nice.":t.streakDays>0?n="Do one session today to keep it going.":n="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${n}</p>`}function Js(t){const e=t.lengths.find(o=>o.minutes===t.bestLength),n=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${j(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',s=t.lengths.map(o=>{const i=o.sessions===0?"not tried yet":`${o.keptGoing} of ${o.sessions} kept going (${j(o.keptGoing,o.sessions)}%)`;return`<li${o.minutes===t.bestLength?' class="best"':""} data-minutes="${o.minutes}">${o.minutes} min: ${i}</li>`}).join("");return`${n}<ul class="length-rates">${s}</ul>`}function Xs(t){const e=Object.keys(C).map(s=>{const o=t.outcomeCounts[s],i=j(o,t.totalSessions);return`
        <li data-outcome="${s}">
          <span class="outcome-label">${C[s]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${s}" style="width: ${i}%"></span></span>
          <span class="outcome-count">${o} (${i}%)</span>
        </li>`}).join(""),n=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${n} in all</p>`}function Zs(t){const{tracked:e,left:n,awayMs:s,distractedWhenLeft:o,distractedWhenStayed:i}=t.drift;if(e===0)return"";const a=e-n,d=e===1?"session":"sessions",r=n===0?`You stayed on the page in all ${e} ${d}.`:`You left the page in <strong class="drift-left">${n}</strong> of ${e} ${d} (${At(s)} away in all).`,u=(m,p)=>p===0?"none yet":`${m} of ${p} ended in Got distracted (${j(m,p)}%)`;return`
    <h4>Leaving the page</h4>
    <p class="drift-summary">${r}</p>
    <ul class="length-rates drift-rates">
      <li data-drift="left">When you left: ${u(o,n)}</li>
      <li data-drift="stayed">When you stayed: ${u(i,a)}</li>
    </ul>`}function Qs(t,e,n){const s=V(t,n),o=s.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${zs(s)}
        <h4>Best length for keeping going</h4>${Js(s)}
        <h4>How sessions ended</h4>${Xs(s)}
        ${Zs(s)}
        <p><button type="button" class="link-button see-history" data-action="open-history">See every session</button></p>`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${o}
    </details>`}function to(t,e){const n=on(t.tasks);if(n.length===0)return"";const s=n.map(o=>{const i=new Date(o.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${h(o.title)}</p>
          <p class="muted">Finished ${i}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${h(o.id)}"
              aria-label="Move ${h(o.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${n.length})</summary>
      <ul class="task-list">${s}</ul>
    </details>`}function eo(t,e,n){const s=bt(t.tasks).map(o=>{const i=kn(t,o.id),a=i?`<p class="last-check-in">Last time: ${C[i.outcome]} (${i.minutes} min)
            <button type="button" class="link-button" data-action="open-history" data-task-id="${h(o.id)}"
              aria-label="Session history for ${h(o.title)}">History</button></p>`:"",d=Hs(o,e.deadlineEdit,n),r=_s(t,o,e.estimateEdit),u=o.demo?'<span class="demo-badge">Demo</span>':"",m=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${h(o.id)}" aria-label="Delete ${h(o.title)}" title="Delete task">×</button>`,p=yt.map(f=>`<button type="button" data-action="start" data-task-id="${h(o.id)}" data-minutes="${f}"
            aria-label="Start a ${f}-minute focus on ${h(o.title)}">${f} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading">
            <p class="task-title">${h(o.title)}</p>${u}${ve(o,n)}${m}
          </div>
          ${d}
          ${r}
          ${Ls(o,e.stepEdit)}
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
        <select id="estimate" name="estimate">${be()}</select>
        ${e.formError?`<p class="form-error" role="alert">${h(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    ${io(t,e.importer,n)}
    ${Vs(t,n)}
    </div>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${no(e.deletedTask)}
      ${s?`<ul class="task-list">${s}</ul>`:ao(t)}
      ${Ks(t,e.toolkit,n)}
      ${to(t,e.completedOpen)}
      ${Qs(t,e.patternsOpen,n)}
    </section>
    </div>`}function no(t){return t?`
    <p class="undo-notice" role="status">Deleted “${h(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function so(t,e,n){if(t.tasks.length===0)return"";const s=sn(t,e);if(!s)return`
      <section class="focus-hero focus-hero-empty" aria-label="Focus on this one first">
        <p class="hero-eyebrow">Focus on this one first</p>
        <p class="hero-title">You're all caught up.</p>
        <p class="hero-note">Add the next thing you're putting off.</p>
      </section>`;const o=h(s.id),i=h(s.title),a=s.deadline?`<p class="hero-deadline">${wt(s.deadline,n)}</p>`:"",d=s.estimateMinutes?`<p class="hero-estimate">${we(t,s)}</p>`:"",r=yt.map((p,f)=>`<button type="button" class="${f===0?"hero-start-main":"hero-start"}" data-action="start"
        data-task-id="${o}" data-minutes="${p}"
        aria-label="Start a ${p}-minute focus on ${i}">Start ${p} min</button>`).join(""),m=ce(t).length>1?`<button type="button" class="hero-skip" data-action="skip-focus" data-task-id="${o}">Not this one</button>`:"";return`
    <section class="focus-hero" aria-labelledby="focus-hero-title">
      <p class="hero-eyebrow">Focus on this one first</p>
      <div class="hero-heading">
        <h2 id="focus-hero-title" class="hero-title">${i}</h2>${ve(s,n)}
      </div>
      ${a}
      ${d}
      ${Ps(t,s,n)}
      <p class="hero-eyebrow">Your tiny first step</p>
      <p class="hero-step">${h(s.firstStep)}</p>
      <div class="hero-actions">${r}${m}</div>
    </section>`}function oo(t,e,n){const s=e.source!=="file",o=e.events.map((a,d)=>{const r=re(t,a);return`
        <li>
          <label class="import-row${r?" import-present":""}">
            <input type="checkbox" name="import-event" value="${d}"${r?" disabled":" checked"} />
            <span class="import-title">${h(a.title)}</span>
            <span class="import-due">${r?"Already in your tasks":wt(a.due,n)}</span>
          </label>
        </li>`}).join(""),i=s?`<p class="import-demo-note"><strong>Demo:</strong> made-up deadlines from a pretend ${h(e.label)}. They'll be marked <strong>Demo</strong>, stay off the focus card and out of your stats, and <strong>Remove demo tasks</strong> clears them.</p>`:`<p class="muted">Upcoming deadlines in <strong>${h(e.label)}</strong>. Untick any you don't want.</p>`;return`
    <form class="import-preview" novalidate aria-labelledby="import-preview-title">
      <h4 id="import-preview-title" tabindex="-1">${s?`Demo import: ${h(e.label)}`:"Pick deadlines to add"}</h4>
      ${i}
      <ul class="import-list">${o}</ul>
      <div class="deadline-actions">
        <button type="submit" class="primary">Add selected tasks</button>
        <button type="button" data-action="cancel-import">Cancel</button>
      </div>
    </form>`}function io(t,e,n){const s=Object.keys(ht).map(a=>`<button type="button" class="demo-import" data-action="demo-import" data-source="${a}">Demo: ${ht[a]}</button>`).join(""),o=e.error?`<p class="form-error" role="alert">${h(e.error)}</p>`:e.notice?`<p class="import-notice" role="status">${h(e.notice)}</p>`:"",i=tn(t)?'<p class="demo-present">Demo tasks are in your list. <button type="button" class="link-button" data-action="remove-demo">Remove demo tasks</button></p>':"";return`
    <section class="card calendar-import" aria-labelledby="calendar-title">
      <h3 id="calendar-title">Bring in deadlines</h3>
      <p class="muted">Canvas, Google Calendar, and Outlook can save a calendar as an <strong>.ics</strong> file. Choose one to add its upcoming deadlines. The file stays on this device.</p>
      <label class="file-pick" for="ics-file">Choose an .ics file</label>
      <input id="ics-file" class="file-input" type="file" accept=".ics,text/calendar" />
      ${o}
      ${e.preview?oo(t,e.preview,n):""}
      <div class="demo-row">
        <p class="muted">Showing someone how it works? Try it with made-up deadlines:</p>
        <div class="deadline-actions">${s}</div>
      </div>
      ${i}
    </section>`}function ao(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function ro(t,e,n,s){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${h(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${h(e)}</p>
      <p class="countdown" role="timer">${mt(n)}</p>
      <button type="button" data-action="end-early">End early</button>
      ${s}
    </section>`}function $e(t){const e=t.service==="youtube"?"YouTube":"Spotify";return`
    <iframe class="mini-player mini-player-${t.service}" src="${h(t.embedUrl)}"
      title="${e} study playlist player" loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    <button type="button" class="link-button" data-action="remove-playlist">Remove playlist</button>`}function Se(t){return t?"Pause":"Play"}function lo(t){const{settings:e}=t,n=Object.keys(Q).map(i=>`
        <label class="soundscape-choice">
          <input type="radio" name="soundscape" value="${i}"${i===e.soundscape?" checked":""} />
          ${Q[i]}
        </label>`).join(""),s=e.playlistLink?$t(e.playlistLink):null,o=t.playerLoaded&&s&&!("error"in s)?$e(s):"";return`
    <details class="sound-panel"${e.panelOpen?" open":""}>
      <summary>Focus sounds</summary>
      <fieldset class="soundscapes">
        <legend>Soundscape</legend>
        <div class="soundscape-choices">${n}</div>
      </fieldset>
      <div class="sound-controls">
        <button type="button" class="primary sound-toggle" data-action="toggle-sound"
          aria-pressed="${t.playing}">${Se(t.playing)}</button>
        <label for="sound-volume">Volume</label>
        <input id="sound-volume" type="range" min="0" max="100" step="1" value="${Math.round(e.volume*100)}" />
      </div>
      <form class="playlist-form" novalidate>
        <label for="playlist-link">My Study Playlist</label>
        <div class="playlist-row">
          <input id="playlist-link" name="playlist" type="url" inputmode="url" autocomplete="off"
            maxlength="${fe}" placeholder="Paste a YouTube or Spotify link"
            value="${h(e.playlistLink)}" />
          <button type="submit">Load player</button>
        </div>
        <p class="form-error playlist-error" role="alert"${t.playlistError?"":" hidden"}>${h(t.playlistError??"")}</p>
        <p class="muted playlist-hint">Works best on a laptop: Spotify plays 30-second previews unless you're signed in to Spotify in this browser, and phones pause YouTube when the screen locks.</p>
      </form>
      <div class="mini-player-slot">${o}</div>
    </details>`}function At(t){const e=Math.round(t/1e3);return e<60?`${e} sec`:`${Math.round(e/60)} min`}function co(t){return t.leftCount===void 0?"":t.leftCount===0?'<p class="away-line">You stayed on this page the whole time.</p>':`<p class="away-line">You left this page ${t.leftCount===1?"1 time":`${t.leftCount} times`} (${At(t.awayMs??0)} in all).</p>`}function uo(t,e){const n=e.minutes,s=Object.keys(C).map(o=>`<button type="button" class="primary" data-action="check-in" data-outcome="${o}">${C[o]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${h(t)}, ${n}-minute session</p>
      ${co(e)}
      <div class="outcomes">${s}</div>
    </section>`}function Ae(t,e){const{sessionsStarted:n,minutesFocused:s}=fn(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${n}</strong> ${n===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${s}</strong> min focused</span>`}function po(t,e,n){const s=t.active,o=s?t.tasks.find(u=>u.id===s.taskId):void 0;let i;if(s)if(F(s,n)>0){const u=lo(e.sound);i=ro((o==null?void 0:o.title)??"Your task",(o==null?void 0:o.firstStep)??"",F(s,n),u)}else i=uo((o==null?void 0:o.title)??"Your task",s);else{const u=e.followUp&&t.tasks.find(p=>p.id===e.followUp.taskId);i=(u?js(u,e.followUp,e.toolkit):so(t,e.skippedFocus,n))+eo(t,e,n)}const a=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",d=s?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${Ae(t,n)}</p>`}<main class="view${d}">${a}${i}${Ms}</main>`}function mo(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function fo(){try{return window.localStorage}catch{return null}}function ho(t,e=fo(),n=ds(),s=$s()){var Pt;let o=Vt(e);const i={formError:null,deadlineEdit:null,estimateEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null,sound:{settings:ys(e),playing:!1,playerLoaded:!1,playlistError:null},skippedFocus:[],strategyFilter:"all",toolkit:Es(e),importer:{preview:null,error:null,notice:null},history:{taskId:"",showOlder:!1,editing:null,deleted:null}};let a="";const d=c=>{const l=xs(window.location.hash);return l!=="focus"?l:o.active?F(o.active,c)>0?"running":"check-in":"list"},r=c=>{var b;const l=Date.now();a=d(l),i.sound.playing=s.isPlaying(),t.innerHTML=mo(a==="advice"?je(Us(i.strategyFilter,i.toolkit)):a==="history"?Ns(o,i.history,l):po(o,i,l)),L(l);const y=c==null?void 0:c();if(y){y.focus();return}document.documentElement.scrollTop=0,(b=t.querySelector("h2[tabindex]"))==null||b.focus()},u=(c,l)=>()=>[...t.querySelectorAll(`[data-action="${c}"]`)].find(y=>y.dataset.taskId===l)??null,m=c=>u("edit-deadline",c),p=()=>t.querySelector("#deadline-edit"),f=()=>t.querySelector("#estimate-edit"),g=()=>t.querySelector("#step-edit"),v=()=>t.querySelector('[data-action="undo-delete"]'),A=()=>t.querySelector("#next-step"),I=()=>t.querySelector("#follow-up-title"),x=()=>t.querySelector(".hero-skip"),D=(c,l,y)=>()=>[...t.querySelectorAll(`[data-action="${c}"]`)].find(b=>b.dataset[l]===y)??null,L=c=>{const l=o.active;if(!l)document.title=dt,n.cancel();else if(F(l,c)>0){document.title=`${mt(F(l,c))} · ${dt}`,n.chimeAt(l.endsAt);return}else document.title=`${Is} · ${dt}`,l.endedEarlyAt!==void 0&&n.cancel();s.stop(),i.sound.playerLoaded=!1},E=c=>{o=c;try{if(!e)throw new Error("No storage");wn(e,o),i.saveFailed=!1}catch{i.saveFailed=!0}},$=(c,l)=>{E(c),r(l)},Tt=()=>{const c=Date.now();if(document.visibilityState==="hidden"){E(un(o,c));return}const l=o;if(E(pt(o,c)),o!==l&&d(c)==="check-in"&&a==="check-in"){r();return}Nt()},nt=c=>{var y;const l=((y=i.estimateEdit)==null?void 0:y.taskId)??"";i.estimateEdit=null,$(c,u("edit-estimate",l))},st=c=>{var y;const l=((y=i.deadlineEdit)==null?void 0:y.taskId)??"";i.deadlineEdit=null,$(c,m(l))},Et=(c,l)=>{i.formError=null,i.stepEdit=null,i.deletedTask=null,i.deadlineEdit=null,i.followUp=null,i.skippedFocus=[],E(dn(o,c,l,Date.now())),i.sound.settings.playing&&o.active&&ot(o.active.endsAt),r()},H=()=>gs(e,i.sound.settings),ot=c=>{const{soundscape:l,volume:y}=i.sound.settings;s.play(l,y,c)},Te=()=>{const c=t.querySelector(".sound-toggle");c&&(c.textContent=Se(s.isPlaying()),c.setAttribute("aria-pressed",String(s.isPlaying())))},Ee=()=>{const c=o.active;s.isPlaying()?(s.stop(),i.sound.settings.playing=!1):c&&F(c,Date.now())>0&&(ot(c.endsAt),i.sound.settings.playing=!0),H(),Te()},De=c=>{i.sound.settings.soundscape=c,H(),s.isPlaying()&&o.active&&ot(o.active.endsAt)},Ie=c=>{i.sound.settings.volume=Math.min(1,Math.max(0,c/100)),s.setVolume(i.sound.settings.volume),H()},xe=c=>{const l=c.querySelector("#playlist-link"),y=c.querySelector(".playlist-error"),b=$t(l.value);if("error"in b){i.sound.playlistError=b.error,y.textContent=b.error,y.hidden=!1,l.focus();return}i.sound.playlistError=null,y.hidden=!0,i.sound.settings.playlistLink=l.value.trim(),i.sound.playerLoaded=!0,H(),t.querySelector(".mini-player-slot").innerHTML=$e(b)},Me=()=>{i.sound.settings.playlistLink="",i.sound.playerLoaded=!1,H(),t.querySelector(".mini-player-slot").innerHTML="";const c=t.querySelector("#playlist-link");c&&(c.value="",c.focus())},Le=()=>t.querySelector("#import-preview-title"),it=()=>t.querySelector(".calendar-import [role=alert], .calendar-import [role=status]"),Dt=c=>{i.importer={preview:c,error:null,notice:null},r(Le)},K=c=>{i.importer={preview:null,error:c,notice:null},r(it)},Oe=async c=>{var S;const l=(S=c.files)==null?void 0:S[0];if(c.value="",!l)return;if(l.size>Jn){K("That file is too big to be a calendar file. Choose the .ics file for one calendar.");return}let y;try{y=await l.text()}catch{K("Momentum couldn't read that file. Try choosing it again.");return}const b=es(y,Date.now());"error"in b?K(b.error):b.events.length===0?K("No upcoming deadlines were found in that file (it looks at the next 4 months)."):Dt({source:"file",label:l.name,events:b.events})},Ce=c=>{const l=i.importer.preview;if(!l)return;const y=[...c.querySelectorAll('input[name="import-event"]:checked')].map(Y=>l.events[Number(Y.value)]).filter(Y=>Y!==void 0),b=l.source!=="file",{state:S,added:M}=Qe(o,y,Date.now(),b),O=M===1?"task":"tasks",N=M===0?"Nothing was added: no deadlines were ticked, or they're already in your tasks.":b?`Added ${M} demo ${O}, marked Demo.`:`Added ${M} ${O}. Each starts with the step “${ae}”; use Edit step to make it yours.`;i.importer={preview:null,error:null,notice:N},$(S,it)},It=c=>{const l=c.target;l.id==="ics-file"&&Oe(l)},xt=c=>{const l=c.target;l.id==="history-task"&&(i.history={taskId:l.value,showOlder:!1,editing:null,deleted:null},r(()=>t.querySelector("#history-task")))},z=c=>{const l=c.target;l.name==="soundscape"&&Object.hasOwn(Q,l.value)?De(l.value):l.id==="sound-volume"&&Ie(Number(l.value))},Mt=()=>{const c=i.followUp,l=t.querySelector("#next-step");if(!c||!l)return!0;const y=qt(l.value);if(y){const b=l.value;return i.followUp={...c,editingStep:!0,error:y},r(A),t.querySelector("#next-step").value=b,!1}return o=jt(o,c.taskId,l.value),!0},Lt=c=>{c.key!==tt&&c.key!==null||(o=Vt(e),r())},Ot=()=>{i.formError=null,i.history.editing=null,i.history.deleted=null,r()},Ct=c=>{const l=c.target;l instanceof HTMLDetailsElement&&(l.classList.contains("completed-tasks")&&(i.completedOpen=l.open),l.classList.contains("patterns")&&(i.patternsOpen=l.open),l.classList.contains("sound-panel")&&(i.sound.settings.panelOpen=l.open,H()))},Nt=()=>{const c=Date.now();if(d(c)!==a){r();return}const l=t.querySelector(".countdown");l&&o.active&&(l.textContent=mt(F(o.active,c)));const y=t.querySelector(".stats-bar");y&&o.active&&(y.innerHTML=Ae(o,c)),L(c)},Ft=c=>{var M,O,N,Y,Ht,Yt,Bt;n.unlock();const l=c.target.closest("[data-action]");if(!l)return;const y=Date.now(),b=i.followUp,S=l.dataset.taskId??"";switch(l.dataset.action){case"edit-deadline":i.stepEdit=null,i.estimateEdit=null,i.deadlineEdit={taskId:S,error:null},r(p);break;case"edit-step":i.deadlineEdit=null,i.estimateEdit=null,i.stepEdit={taskId:S,error:null},r(g);break;case"cancel-step-edit":{const k=((M=i.stepEdit)==null?void 0:M.taskId)??"";i.stepEdit=null,r(u("edit-step",k));break}case"delete-task":{const k=o.tasks.find(T=>T.id===S)??null;i.deletedTask=k,((O=i.stepEdit)==null?void 0:O.taskId)===S&&(i.stepEdit=null),((N=i.deadlineEdit)==null?void 0:N.taskId)===S&&(i.deadlineEdit=null),((Y=i.estimateEdit)==null?void 0:Y.taskId)===S&&(i.estimateEdit=null),$(Xe(o,S),v);break}case"undo-delete":{const k=i.deletedTask;i.deletedTask=null,k&&$(Ze(o,k),u("delete-task",k.id));break}case"edit-estimate":i.deadlineEdit=null,i.stepEdit=null,i.estimateEdit={taskId:S},r(f);break;case"cancel-estimate":nt(o);break;case"remove-estimate":nt(Ut(o,S,void 0));break;case"cancel-deadline":st(o);break;case"remove-deadline":st(Wt(o,l.dataset.taskId??"",""));break;case"start":Et(l.dataset.taskId??"",Number(l.dataset.minutes));break;case"end-early":$(pn(o,y));break;case"check-in":{const k=((Ht=o.active)==null?void 0:Ht.taskId)??"",T=l.dataset.outcome;i.followUp={taskId:k,outcome:T,editingStep:!1,stepSaved:!1,error:null},$(mn(o,T,y));break}case"start-now":b&&Mt()&&Et(b.taskId,Number(l.dataset.minutes));break;case"shrink-step":b&&(i.followUp={...b,editingStep:!0,error:null}),r(A);break;case"cancel-step":b&&(i.followUp={...b,editingStep:!1,error:null}),r(I);break;case"dismiss-follow-up":i.followUp=null,r();break;case"demo-import":{const k=l.dataset.source;(k==="google"||k==="outlook")&&Dt({source:k,label:ht[k],events:ts(k,y)});break}case"cancel-import":i.importer={preview:null,error:null,notice:null},r(()=>t.querySelector("#calendar-title"));break;case"remove-demo":i.importer={preview:null,error:null,notice:"Removed the demo tasks and any sessions on them."},$(en(o),it);break;case"open-history":i.history={taskId:S,showOlder:!1,editing:null,deleted:null},window.location.hash=ke;break;case"show-older":i.history.showOlder=!0,r(()=>t.querySelector(".history-day:last-of-type h3"));break;case"edit-outcome":i.history.editing=l.dataset.key??null,r(()=>t.querySelector(".outcome-choice[aria-pressed='true']"));break;case"cancel-outcome":{const k=i.history.editing??"";i.history.editing=null,r(D("edit-outcome","key",k));break}case"set-outcome":{const k=l.dataset.key??"";i.history.editing=null,$(hn(o,k,l.dataset.outcome),D("edit-outcome","key",k));break}case"delete-session":{const{state:k,removed:T}=yn(o,l.dataset.key??"");i.history.deleted=T,i.history.editing=null,$(k,()=>t.querySelector('[data-action="undo-session-delete"]'));break}case"undo-session-delete":{const k=i.history.deleted;i.history.deleted=null,k&&$(gn(o,k),D("delete-session","key",G(k)));break}case"jump":{const k=oe.find(He=>He.id===l.dataset.target),T=k?t.querySelector(`#${k.id}`):null,Pe=((Yt=window.matchMedia)==null?void 0:Yt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;(Bt=T==null?void 0:T.scrollIntoView)==null||Bt.call(T,{block:"start",behavior:Pe?"auto":"smooth"}),T==null||T.focus({preventScroll:!0});break}case"strategy-filter":{const k=l.dataset.filter??"";Ss(k)&&(i.strategyFilter=k),r(D("strategy-filter","filter",i.strategyFilter));break}case"toggle-toolkit":{const k=l.dataset.strategyId??"";i.toolkit=As(i.toolkit,k),Ds(e,i.toolkit);const T=D("toggle-toolkit","strategyId",k);r(()=>T()??D("strategy-filter","filter",i.strategyFilter)());break}case"skip-focus":i.skippedFocus=[...i.skippedFocus,S],r(x);break;case"toggle-sound":Ee();break;case"remove-playlist":Me();break;case"reopen":$(nn(o,l.dataset.taskId??""));break}},Ne=c=>{const l=c.dataset.taskId??"",y=c.elements.namedItem("deadline").value;if(y!==""&&!R(y)){i.deadlineEdit={taskId:l,error:"Pick a real date, or remove the deadline."},r(p);return}st(Wt(o,l,y))},Fe=c=>{const l=c.dataset.taskId??"",y=c.elements.namedItem("firstStep").value,b=qt(y);if(b){i.stepEdit={taskId:l,error:b},r(g),t.querySelector("#step-edit").value=y;return}i.stepEdit=null,$(jt(o,l,y),u("edit-step",l))},_t=c=>{const l=c.target;if(l.classList.contains("estimate-editor")){c.preventDefault();const N=Number(l.elements.namedItem("estimate").value);nt(Ut(o,l.dataset.taskId??"",N||void 0));return}if(l.classList.contains("deadline-editor")){c.preventDefault(),Ne(l);return}if(l.classList.contains("import-preview")){c.preventDefault(),Ce(l);return}if(l.classList.contains("playlist-form")){c.preventDefault(),xe(l);return}if(l.classList.contains("task-step-editor")){c.preventDefault(),Fe(l);return}if(l.classList.contains("step-editor")){c.preventDefault(),i.followUp&&Mt()&&(i.followUp={...i.followUp,editingStep:!1,stepSaved:!0,error:null},$(o,I));return}if(l.id!=="add-task")return;c.preventDefault();const y=l.elements.namedItem("title").value,b=l.elements.namedItem("firstStep").value,S=l.elements.namedItem("deadline").value,M=l.elements.namedItem("estimate").value,O=Je(y,b,S);if(i.formError=O,O){r(),t.querySelector("#task-title").value=y,t.querySelector("#first-step").value=b,t.querySelector("#deadline").value=S,t.querySelector("#estimate").value=M;const N={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(N[O.field]).focus();return}$(ie(o,y,b,Date.now(),S,Number(M)||void 0))};t.addEventListener("click",Ft),t.addEventListener("submit",_t),t.addEventListener("toggle",Ct,!0),t.addEventListener("change",z),t.addEventListener("change",It),t.addEventListener("change",xt),t.addEventListener("input",z),window.addEventListener("hashchange",Ot),window.addEventListener("storage",Lt),((Pt=o.active)==null?void 0:Pt.hiddenAt)!==void 0&&document.visibilityState!=="hidden"&&E(pt(o,Date.now())),document.addEventListener("visibilitychange",Tt);const _e=window.setInterval(Nt,1e3);return r(),()=>{n.cancel(),s.stop(),t.removeEventListener("click",Ft),t.removeEventListener("submit",_t),t.removeEventListener("toggle",Ct,!0),t.removeEventListener("change",z),t.removeEventListener("change",It),t.removeEventListener("change",xt),t.removeEventListener("input",z),window.removeEventListener("hashchange",Ot),window.removeEventListener("storage",Lt),document.removeEventListener("visibilitychange",Tt),window.clearInterval(_e)}}const se=document.getElementById("app");se&&ho(se);
