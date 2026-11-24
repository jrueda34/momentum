(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const z='<a class="back-link" href="#">← Back to my task</a>',ut=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],pt=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]],mt=[["Make the first step tiny","Not “write the essay,” but “open the doc and type the title.” Starting is the hard part."],["Put the phone out of reach","Drift is easier to prevent than to resist. Another room beats willpower."],["Plan with if-then","“If it's 7pm, then I open the assignment.” A cue does the deciding for you."],["Pair it with something you like","Save a favorite playlist or drink for the task you keep avoiding."]];function ft(){return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${z}</nav>

      <section class="card">
        <h2 id="advice-title" tabindex="-1">Getting unstuck</h2>
        <p>
          <strong>Procrastination is mostly about feelings, not time.</strong>
          A task stirs up something unpleasant, and avoiding it makes that feeling go away right away.
          But the relief is borrowed: the task is still there, with less time and more guilt, so it
          feels even harder next time. Breaking the loop anywhere helps, and the easiest place is
          making the start smaller.
        </p>
      </section>

      <section class="card rescue">
        <h3>Stuck right now? The 5-minute rescue</h3>
        <ol>
          ${ut.map(([t,e])=>`<li><strong>${t}</strong> ${e}</li>`).join("")}
        </ol>
      </section>

      <section class="card">
        <h3>Things that help</h3>
        <ul class="plain-list">
          ${mt.map(([t,e])=>`<li><strong>${t}.</strong> ${e}</li>`).join("")}
        </ul>
      </section>

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${pt.map(([t,e])=>`<li><span class="myth">${t}</span> ${e}</li>`).join("")}
        </ul>
      </section>

      <nav class="back-bar">${z}</nav>
    </main>
  `}const ht=[523.25,659.25,783.99],yt=.22,Z=1.4,gt=.12;function kt(){let t=null,e=null,s=null,i=[];const n=()=>{for(const r of i){try{r.stop()}catch{}r.disconnect()}i=[],s=null},a=()=>{if(!t||t.state!=="running"||e===null||s===e)return;n();const r=(e-Date.now())/1e3;if(r<0)return;const c=t.currentTime+r;i=ht.map((h,y)=>{const u=c+y*yt,m=t.createOscillator(),g=t.createGain();return m.type="sine",m.frequency.value=h,g.gain.setValueAtTime(0,u),g.gain.linearRampToValueAtTime(gt,u+.03),g.gain.exponentialRampToValueAtTime(1e-4,u+Z),m.connect(g).connect(t.destination),m.start(u),m.stop(u+Z),m}),s=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?a():t.resume().then(a,()=>{})},chimeAt(r){e=r,a()},cancel(){e=null,n()}}}const D="momentum.v1",ot=[5,15,25],x=120,v=200,bt=`${D}.backup`,S={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"};function I(){return{tasks:[],checkIns:[],active:null}}function B(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[s,i,n]=e.slice(1).map(Number),a=new Date(s,i-1,n);return a.getFullYear()===s&&a.getMonth()===i-1&&a.getDate()===n}function Q(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>v?`Keep the step to ${v} characters or fewer.`:null}function $t(t,e,s=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>x?{field:"title",message:`Keep the task name to ${x} characters or fewer.`}:e.trim().length>v?{field:"firstStep",message:`Keep the first step to ${v} characters or fewer.`}:s!==""&&!B(s)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function vt(t,e,s,i,n=""){const a={id:`${i}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:s.trim(),createdAt:i,...n!==""?{deadline:n}:{}};return{...t,tasks:[...t.tasks,a]}}function tt(t,e,s){return{...t,tasks:t.tasks.map(i=>{if(i.id!==e)return i;const{deadline:n,...a}=i;return s===""?a:{...a,deadline:s}})}}function et(t,e,s){return{...t,tasks:t.tasks.map(i=>i.id===e?{...i,firstStep:s.trim()}:i)}}function St(t,e){return{...t,tasks:t.tasks.filter(s=>s.id!==e)}}function wt(t,e){return t.tasks.some(s=>s.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}function Et(t,e){return{...t,tasks:t.tasks.map(s=>{if(s.id!==e)return s;const{completedAt:i,...n}=s;return n})}}function At(t){return Tt(t.filter(e=>e.completedAt===void 0))}function It(t){return t.filter(e=>e.completedAt!==void 0).sort((e,s)=>(s.completedAt??0)-(e.completedAt??0))}function Tt(t){return[...t].sort((e,s)=>e.deadline&&s.deadline?e.deadline.localeCompare(s.deadline)||e.createdAt-s.createdAt:e.deadline?-1:s.deadline?1:e.createdAt-s.createdAt)}function w(t){const e=new Date(t),s=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${s}-${i}`}const Lt={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function Dt(t,e){const[s,i,n]=t.split("-").map(Number),a=new Date(e),r=new Date(a.getFullYear(),a.getMonth(),a.getDate());return Math.round((new Date(s,i-1,n).getTime()-r.getTime())/864e5)}function Nt(t,e){if(!t)return null;const s=Dt(t,e);return s<0?"overdue":s===0?"today":s===1?"tomorrow":s<=3?"soon":null}function Ot(t,e){const s=w(e);if(t===s)return"Due today";const[i,n,a]=t.split("-").map(Number),r=new Date(i,n-1,a).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...i!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<s?`Overdue: ${r}`:`Due ${r}`}function Mt(t,e,s,i){return{...t,active:{taskId:e,minutes:s,startedAt:i,endsAt:i+s*6e4}}}function Ht(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function A(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function xt(t,e,s){const i=t.active;if(!i)return t;const n={taskId:i.taskId,minutes:i.minutes,startedAt:i.startedAt,endedAt:Math.min(i.endedEarlyAt??i.endsAt,s),outcome:e},a=e==="finished"?t.tasks.map(r=>r.id===i.taskId?{...r,completedAt:s}:r):t.tasks;return{...t,tasks:a,checkIns:[...t.checkIns,n],active:null}}function Ct(t,e){const s=w(e),i=t.checkIns.map(({startedAt:r,endedAt:c})=>({startedAt:r,endedAt:c}));if(t.active){const{startedAt:r,endsAt:c,endedEarlyAt:h}=t.active;i.push({startedAt:r,endedAt:Math.min(h??c,e)})}const n=i.filter(r=>w(r.startedAt)===s),a=n.reduce((r,c)=>r+Math.max(0,c.endedAt-c.startedAt),0);return{sessionsStarted:n.length,minutesFocused:Math.floor(a/6e4)}}function Ft(t,e){return[...t.checkIns].reverse().find(s=>s.taskId===e)}function nt(t){const[e,s,i]=t.split("-").map(Number);return w(new Date(e,s-1,i-1).getTime())}function Bt(t,e){const s=new Set(t.checkIns.map(u=>w(u.startedAt))),i=w(e),n=s.has(i);let a=n?i:nt(i),r=0;for(;s.has(a);)r+=1,a=nt(a);const c=ot.map(u=>{const m=t.checkIns.filter(g=>g.minutes===u);return{minutes:u,sessions:m.length,keptGoing:m.filter(g=>g.outcome==="kept-going").length}}),h=c.filter(u=>u.keptGoing>0).sort((u,m)=>m.keptGoing/m.sessions-u.keptGoing/u.sessions||m.sessions-u.sessions)[0],y=Object.fromEntries(Object.keys(S).map(u=>[u,t.checkIns.filter(m=>m.outcome===u).length]));return{streakDays:r,sessionToday:n,lengths:c,bestLength:(h==null?void 0:h.minutes)??null,outcomeCounts:y,totalSessions:t.checkIns.length}}function C(t){const e=Math.ceil(t/1e3),s=Math.floor(e/60),i=e%60;return`${s}:${String(i).padStart(2,"0")}`}function st(t){if(!t)return I();let e;try{e=t.getItem(D)}catch{return I()}if(e===null)return I();let s;try{s=JSON.parse(e)}catch{return it(t,e),I()}const i=Gt(s);return JSON.stringify(i)!==JSON.stringify(s)&&it(t,e),i}function _t(t,e){t.setItem(D,JSON.stringify(e))}function it(t,e){try{t.setItem(bt,e)}catch{}}function Gt(t){if(!N(t))return I();const e=Array.isArray(t.tasks)?t.tasks.filter(Ut).map(Pt).map(qt):[],s=Array.isArray(t.checkIns)?t.checkIns.filter(Yt):[],i=jt(t.active)?t.active:null;return{tasks:e,checkIns:s,active:i}}function N(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Ut(t){return N(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function Pt(t){if(t.deadline===void 0||typeof t.deadline=="string"&&B(t.deadline))return t;const{deadline:e,...s}=t;return s}function qt(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...s}=t;return s}function Yt(t){return N(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(S,t.outcome)}function jt(t){return N(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const _="#getting-unstuck",H="Momentum",Kt="⏰ Time's up!";function Wt(t){return t===_?"advice":"focus"}function d(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const Rt=`
  <a class="advice-link" href="${_}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function Vt(t,e){const s=d(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${s}" novalidate>
        <label for="step-edit">Tiny first step for ${d(t.title)}</label>
        <input id="step-edit" name="firstStep" autocomplete="off" maxlength="${v}"
          value="${d(t.firstStep)}" />
        ${e.error?`<p class="form-error" role="alert">${d(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save step</button>
          <button type="button" data-action="cancel-step-edit">Cancel</button>
        </div>
      </form>`:`
    <p class="muted">First step: ${d(t.firstStep)}
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${s}"
        aria-label="Edit step for ${d(t.title)}">Edit step</button></p>`}function Jt(t,e,s){const i=d(t.id);if((e==null?void 0:e.taskId)===t.id){const r=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${i}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${i}" novalidate>
        <label for="deadline-edit">Deadline for ${d(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${d(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${d(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${r}
        </div>
      </form>`}const n=r=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${i}"
      aria-label="${r} for ${d(t.title)}">${r}</button>`;return t.deadline?`<p class="deadline${t.deadline<=w(s)?" deadline-urgent":""}"><span class="deadline-date">${Ot(t.deadline,s)}</span> ${n("Change")}</p>`:`<p class="deadline">${n("Add deadline")}</p>`}function Xt(t,e){const s=Nt(t.deadline,e);return s?`<span class="urgency urgency-${s}">${Lt[s]}</span>`:""}const zt={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function Zt(t,e){const s=e.outcome==="kept-going",i=s?"":'<button type="button" data-action="cancel-step">Cancel</button>',n=s?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${s?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${v}"
        value="${d(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${d(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${s?"Save next step":"Save smaller step"}</button>
        ${n}${i}
      </div>
    </form>`}function Qt(t,e){const{heading:s,message:i}=zt[e.outcome],n=e.outcome==="stopped"||e.outcome==="distracted";let a="";if(e.stepSaved){const r=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";a=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${d(t.firstStep)}</strong></p>
      <div class="step-actions">${r}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(a=Zt(t,e),e.outcome==="kept-going"&&(a+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):n?a=`
      <p class="muted">Your tiny step: ${d(t.firstStep)}</p>
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${_}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:a='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${s}</h2>
      <p class="muted">${d(t.title)}. ${i}</p>
      ${a}
    </section>`}function F(t,e){return e===0?0:Math.round(t/e*100)}function te(t){const e=t.streakDays===1?"day":"days";let s;return t.sessionToday?s="You've focused today. Nice.":t.streakDays>0?s="Do one session today to keep it going.":s="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${s}</p>`}function ee(t){const e=t.lengths.find(n=>n.minutes===t.bestLength),s=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${F(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',i=t.lengths.map(n=>{const a=n.sessions===0?"not tried yet":`${n.keptGoing} of ${n.sessions} kept going (${F(n.keptGoing,n.sessions)}%)`;return`<li${n.minutes===t.bestLength?' class="best"':""} data-minutes="${n.minutes}">${n.minutes} min: ${a}</li>`}).join("");return`${s}<ul class="length-rates">${i}</ul>`}function ne(t){const e=Object.keys(S).map(i=>{const n=t.outcomeCounts[i],a=F(n,t.totalSessions);return`
        <li data-outcome="${i}">
          <span class="outcome-label">${S[i]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${i}" style="width: ${a}%"></span></span>
          <span class="outcome-count">${n} (${a}%)</span>
        </li>`}).join(""),s=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${s} in all</p>`}function se(t,e,s){const i=Bt(t,s),n=i.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${te(i)}
        <h4>Best length for keeping going</h4>${ee(i)}
        <h4>How sessions ended</h4>${ne(i)}`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${n}
    </details>`}function ie(t,e){const s=It(t.tasks);if(s.length===0)return"";const i=s.map(n=>{const a=new Date(n.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${d(n.title)}</p>
          <p class="muted">Finished ${a}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${d(n.id)}"
              aria-label="Move ${d(n.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${s.length})</summary>
      <ul class="task-list">${i}</ul>
    </details>`}function ae(t,e,s){const i=At(t.tasks).map(n=>{const a=Ft(t,n.id),r=a?`<p class="last-check-in">Last time: ${S[a.outcome]} (${a.minutes} min)</p>`:"",c=Jt(n,e.deadlineEdit,s),h=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${d(n.id)}" aria-label="Delete ${d(n.title)}" title="Delete task">×</button>`,y=ot.map(u=>`<button type="button" data-action="start" data-task-id="${d(n.id)}" data-minutes="${u}"
            aria-label="Start a ${u}-minute focus on ${d(n.title)}">${u} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading"><p class="task-title">${d(n.title)}</p>${Xt(n,s)}${h}</div>
          ${c}
          ${Vt(n,e.stepEdit)}
          ${r}
          <div class="timer-choices"><span class="muted">Focus for</span>${y}</div>
        </li>`}).join("");return`
    <div class="columns">
    <section class="card" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">What are you putting off?</h2>
      <form id="add-task" class="add-task" novalidate>
        <label for="task-title">Task</label>
        <input id="task-title" name="title" autocomplete="off" maxlength="${x}"
          placeholder="Email my professor" />
        <label for="first-step">Tiny first step</label>
        <input id="first-step" name="firstStep" autocomplete="off" maxlength="${v}"
          placeholder="Find their email address" />
        <label for="deadline">Deadline <span class="optional">(optional)</span></label>
        <input id="deadline" name="deadline" type="date" />
        ${e.formError?`<p class="form-error" role="alert">${d(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${oe(e.deletedTask)}
      ${i?`<ul class="task-list">${i}</ul>`:re(t)}
      ${ie(t,e.completedOpen)}
      ${se(t,e.patternsOpen,s)}
    </section>
    </div>`}function oe(t){return t?`
    <p class="undo-notice" role="status">Deleted “${d(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function re(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function le(t,e,s){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${d(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${d(e)}</p>
      <p class="countdown" role="timer">${C(s)}</p>
      <button type="button" data-action="end-early">End early</button>
    </section>`}function ce(t,e){const s=Object.keys(S).map(i=>`<button type="button" class="primary" data-action="check-in" data-outcome="${i}">${S[i]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${d(t)}, ${e}-minute session</p>
      <div class="outcomes">${s}</div>
    </section>`}function rt(t,e){const{sessionsStarted:s,minutesFocused:i}=Ct(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${s}</strong> ${s===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${i}</strong> min focused</span>`}function de(t,e,s){const i=t.active,n=i?t.tasks.find(y=>y.id===i.taskId):void 0;let a;if(i)A(i,s)>0?a=le((n==null?void 0:n.title)??"Your task",(n==null?void 0:n.firstStep)??"",A(i,s)):a=ce((n==null?void 0:n.title)??"Your task",i.minutes);else{const y=e.followUp&&t.tasks.find(u=>u.id===e.followUp.taskId);a=(y?Qt(y,e.followUp):"")+ae(t,e,s)}const r=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",c=i?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${rt(t,s)}</p>`}<main class="view${c}">${r}${a}${Rt}</main>`}function ue(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function pe(){try{return window.localStorage}catch{return null}}function me(t,e=pe(),s=kt()){let i=st(e);const n={formError:null,deadlineEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null};let a="";const r=l=>Wt(window.location.hash)==="advice"?"advice":i.active?A(i.active,l)>0?"running":"check-in":"list",c=l=>{var f;const o=Date.now();a=r(o),t.innerHTML=ue(a==="advice"?ft():de(i,n,o)),P(o);const p=l==null?void 0:l();if(p){p.focus();return}document.documentElement.scrollTop=0,(f=t.querySelector("h2[tabindex]"))==null||f.focus()},h=(l,o)=>()=>[...t.querySelectorAll(`[data-action="${l}"]`)].find(p=>p.dataset.taskId===o)??null,y=l=>h("edit-deadline",l),u=()=>t.querySelector("#deadline-edit"),m=()=>t.querySelector("#step-edit"),g=()=>t.querySelector('[data-action="undo-delete"]'),G=()=>t.querySelector("#next-step"),U=()=>t.querySelector("#follow-up-title"),P=l=>{const o=i.active;o?A(o,l)>0?(document.title=`${C(A(o,l))} · ${H}`,s.chimeAt(o.endsAt)):(document.title=`${Kt} · ${H}`,o.endedEarlyAt!==void 0&&s.cancel()):(document.title=H,s.cancel())},k=(l,o)=>{i=l;try{if(!e)throw new Error("No storage");_t(e,i),n.saveFailed=!1}catch{n.saveFailed=!0}c(o)},O=l=>{var p;const o=((p=n.deadlineEdit)==null?void 0:p.taskId)??"";n.deadlineEdit=null,k(l,y(o))},q=(l,o)=>{n.formError=null,n.stepEdit=null,n.deletedTask=null,n.deadlineEdit=null,n.followUp=null,k(Mt(i,l,o,Date.now()))},Y=()=>{const l=n.followUp,o=t.querySelector("#next-step");if(!l||!o)return!0;const p=Q(o.value);if(p){const f=o.value;return n.followUp={...l,editingStep:!0,error:p},c(G),t.querySelector("#next-step").value=f,!1}return i=et(i,l.taskId,o.value),!0},j=l=>{l.key!==D&&l.key!==null||(i=st(e),c())},K=()=>{n.formError=null,c()},W=l=>{const o=l.target;o instanceof HTMLDetailsElement&&(o.classList.contains("completed-tasks")&&(n.completedOpen=o.open),o.classList.contains("patterns")&&(n.patternsOpen=o.open))},M=()=>{const l=Date.now();if(r(l)!==a){c();return}const o=t.querySelector(".countdown");o&&i.active&&(o.textContent=C(A(i.active,l)));const p=t.querySelector(".stats-bar");p&&i.active&&(p.innerHTML=rt(i,l)),P(l)},R=l=>{var E,T,J,X;s.unlock();const o=l.target.closest("[data-action]");if(!o)return;const p=Date.now(),f=n.followUp,b=o.dataset.taskId??"";switch(o.dataset.action){case"edit-deadline":n.stepEdit=null,n.deadlineEdit={taskId:b,error:null},c(u);break;case"edit-step":n.deadlineEdit=null,n.stepEdit={taskId:b,error:null},c(m);break;case"cancel-step-edit":{const $=((E=n.stepEdit)==null?void 0:E.taskId)??"";n.stepEdit=null,c(h("edit-step",$));break}case"delete-task":{const $=i.tasks.find(L=>L.id===b)??null;n.deletedTask=$,((T=n.stepEdit)==null?void 0:T.taskId)===b&&(n.stepEdit=null),((J=n.deadlineEdit)==null?void 0:J.taskId)===b&&(n.deadlineEdit=null),k(St(i,b),g);break}case"undo-delete":{const $=n.deletedTask;n.deletedTask=null,$&&k(wt(i,$),h("delete-task",$.id));break}case"cancel-deadline":O(i);break;case"remove-deadline":O(tt(i,o.dataset.taskId??"",""));break;case"start":q(o.dataset.taskId??"",Number(o.dataset.minutes));break;case"end-early":k(Ht(i,p));break;case"check-in":{const $=((X=i.active)==null?void 0:X.taskId)??"",L=o.dataset.outcome;n.followUp={taskId:$,outcome:L,editingStep:!1,stepSaved:!1,error:null},k(xt(i,L,p));break}case"start-now":f&&Y()&&q(f.taskId,Number(o.dataset.minutes));break;case"shrink-step":f&&(n.followUp={...f,editingStep:!0,error:null}),c(G);break;case"cancel-step":f&&(n.followUp={...f,editingStep:!1,error:null}),c(U);break;case"dismiss-follow-up":n.followUp=null,c();break;case"reopen":k(Et(i,o.dataset.taskId??""));break}},lt=l=>{const o=l.dataset.taskId??"",p=l.elements.namedItem("deadline").value;if(p!==""&&!B(p)){n.deadlineEdit={taskId:o,error:"Pick a real date, or remove the deadline."},c(u);return}O(tt(i,o,p))},ct=l=>{const o=l.dataset.taskId??"",p=l.elements.namedItem("firstStep").value,f=Q(p);if(f){n.stepEdit={taskId:o,error:f},c(m),t.querySelector("#step-edit").value=p;return}n.stepEdit=null,k(et(i,o,p),h("edit-step",o))},V=l=>{const o=l.target;if(o.classList.contains("deadline-editor")){l.preventDefault(),lt(o);return}if(o.classList.contains("task-step-editor")){l.preventDefault(),ct(o);return}if(o.classList.contains("step-editor")){l.preventDefault(),n.followUp&&Y()&&(n.followUp={...n.followUp,editingStep:!1,stepSaved:!0,error:null},k(i,U));return}if(o.id!=="add-task")return;l.preventDefault();const p=o.elements.namedItem("title").value,f=o.elements.namedItem("firstStep").value,b=o.elements.namedItem("deadline").value,E=$t(p,f,b);if(n.formError=E,E){c(),t.querySelector("#task-title").value=p,t.querySelector("#first-step").value=f,t.querySelector("#deadline").value=b;const T={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(T[E.field]).focus();return}k(vt(i,p,f,Date.now(),b))};t.addEventListener("click",R),t.addEventListener("submit",V),t.addEventListener("toggle",W,!0),window.addEventListener("hashchange",K),window.addEventListener("storage",j),document.addEventListener("visibilitychange",M);const dt=window.setInterval(M,1e3);return c(),()=>{s.cancel(),t.removeEventListener("click",R),t.removeEventListener("submit",V),t.removeEventListener("toggle",W,!0),window.removeEventListener("hashchange",K),window.removeEventListener("storage",j),document.removeEventListener("visibilitychange",M),window.clearInterval(dt)}}const at=document.getElementById("app");at&&me(at);
