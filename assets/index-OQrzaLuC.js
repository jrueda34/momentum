(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const et='<a class="back-link" href="#">← Back to my task</a>',gt=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],kt=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]],bt=[["Make the first step tiny","Not “write the essay,” but “open the doc and type the title.” Starting is the hard part."],["Put the phone out of reach","Drift is easier to prevent than to resist. Another room beats willpower."],["Plan with if-then","“If it's 7pm, then I open the assignment.” A cue does the deciding for you."],["Pair it with something you like","Save a favorite playlist or drink for the task you keep avoiding."]];function $t(){return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${et}</nav>

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
          ${gt.map(([t,e])=>`<li><strong>${t}</strong> ${e}</li>`).join("")}
        </ol>
      </section>

      <section class="card">
        <h3>Things that help</h3>
        <ul class="plain-list">
          ${bt.map(([t,e])=>`<li><strong>${t}.</strong> ${e}</li>`).join("")}
        </ul>
      </section>

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${kt.map(([t,e])=>`<li><span class="myth">${t}</span> ${e}</li>`).join("")}
        </ul>
      </section>

      <nav class="back-bar">${et}</nav>
    </main>
  `}const vt=[523.25,659.25,783.99],wt=.22,nt=1.4,St=.12;function At(){let t=null,e=null,n=null,i=[];const s=()=>{for(const r of i){try{r.stop()}catch{}r.disconnect()}i=[],n=null},a=()=>{if(!t||t.state!=="running"||e===null||n===e)return;s();const r=(e-Date.now())/1e3;if(r<0)return;const d=t.currentTime+r;i=vt.map((h,y)=>{const c=d+y*wt,f=t.createOscillator(),g=t.createGain();return f.type="sine",f.frequency.value=h,g.gain.setValueAtTime(0,c),g.gain.linearRampToValueAtTime(St,c+.03),g.gain.exponentialRampToValueAtTime(1e-4,c+nt),f.connect(g).connect(t.destination),f.start(c),f.stop(c+nt),f}),n=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?a():t.resume().then(a,()=>{})},chimeAt(r){e=r,a()},cancel(){e=null,s()}}}const C="momentum.v1",ut=[5,15,25],x=120,w=200,Et=`${C}.backup`,S={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"},It=1e4;function I(){return{tasks:[],checkIns:[],active:null}}function B(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[n,i,s]=e.slice(1).map(Number),a=new Date(n,i-1,s);return a.getFullYear()===n&&a.getMonth()===i-1&&a.getDate()===s}function st(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>w?`Keep the step to ${w} characters or fewer.`:null}function Tt(t,e,n=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>x?{field:"title",message:`Keep the task name to ${x} characters or fewer.`}:e.trim().length>w?{field:"firstStep",message:`Keep the first step to ${w} characters or fewer.`}:n!==""&&!B(n)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function Lt(t,e,n,i,s=""){const a={id:`${i}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:n.trim(),createdAt:i,...s!==""?{deadline:s}:{}};return{...t,tasks:[...t.tasks,a]}}function it(t,e,n){return{...t,tasks:t.tasks.map(i=>{if(i.id!==e)return i;const{deadline:s,...a}=i;return n===""?a:{...a,deadline:n}})}}function at(t,e,n){return{...t,tasks:t.tasks.map(i=>i.id===e?{...i,firstStep:n.trim()}:i)}}function Dt(t,e){return{...t,tasks:t.tasks.filter(n=>n.id!==e)}}function Mt(t,e){return t.tasks.some(n=>n.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}function Ct(t,e){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{completedAt:i,...s}=n;return s})}}function Nt(t){return Ot(t.filter(e=>e.completedAt===void 0))}function Ht(t){return t.filter(e=>e.completedAt!==void 0).sort((e,n)=>(n.completedAt??0)-(e.completedAt??0))}function Ot(t){return[...t].sort((e,n)=>e.deadline&&n.deadline?e.deadline.localeCompare(n.deadline)||e.createdAt-n.createdAt:e.deadline?-1:n.deadline?1:e.createdAt-n.createdAt)}function A(t){const e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${i}`}const xt={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function _t(t,e){const[n,i,s]=t.split("-").map(Number),a=new Date(e),r=new Date(a.getFullYear(),a.getMonth(),a.getDate());return Math.round((new Date(n,i-1,s).getTime()-r.getTime())/864e5)}function Ft(t,e){if(!t)return null;const n=_t(t,e);return n<0?"overdue":n===0?"today":n===1?"tomorrow":n<=3?"soon":null}function Bt(t,e){const n=A(e);if(t===n)return"Due today";const[i,s,a]=t.split("-").map(Number),r=new Date(i,s-1,a).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...i!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<n?`Overdue: ${r}`:`Due ${r}`}function Gt(t,e,n,i){return{...t,active:{taskId:e,minutes:n,startedAt:i,endsAt:i+n*6e4,leftCount:0,awayMs:0}}}function Yt(t,e){const n=t.active;return!n||n.leftCount===void 0||n.hiddenAt!==void 0||v(n,e)<=0?t:{...t,active:{...n,hiddenAt:e}}}function _(t,e){const n=t.active;if(!n||n.hiddenAt===void 0)return t;const{hiddenAt:i,...s}=n,a=n.endedEarlyAt??n.endsAt,r=Math.max(0,Math.min(e,a)-i);return r<It?{...t,active:s}:{...t,active:{...s,leftCount:(s.leftCount??0)+1,awayMs:(s.awayMs??0)+r}}}function Ut(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function v(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function Pt(t,e,n){const i=_(t,n).active;if(!i)return t;const s={taskId:i.taskId,minutes:i.minutes,startedAt:i.startedAt,endedAt:Math.min(i.endedEarlyAt??i.endsAt,n),outcome:e,...i.leftCount!==void 0?{leftCount:i.leftCount,awayMs:i.awayMs??0}:{}},a=e==="finished"?t.tasks.map(r=>r.id===i.taskId?{...r,completedAt:n}:r):t.tasks;return{...t,tasks:a,checkIns:[...t.checkIns,s],active:null}}function qt(t,e){const n=A(e),i=t.checkIns.map(({startedAt:r,endedAt:d})=>({startedAt:r,endedAt:d}));if(t.active){const{startedAt:r,endsAt:d,endedEarlyAt:h}=t.active;i.push({startedAt:r,endedAt:Math.min(h??d,e)})}const s=i.filter(r=>A(r.startedAt)===n),a=s.reduce((r,d)=>r+Math.max(0,d.endedAt-d.startedAt),0);return{sessionsStarted:s.length,minutesFocused:Math.floor(a/6e4)}}function Wt(t,e){return[...t.checkIns].reverse().find(n=>n.taskId===e)}function jt(t){const e=t.filter(a=>a.leftCount!==void 0),n=e.filter(a=>(a.leftCount??0)>0),i=e.filter(a=>a.leftCount===0),s=a=>a.filter(r=>r.outcome==="distracted").length;return{tracked:e.length,left:n.length,awayMs:n.reduce((a,r)=>a+(r.awayMs??0),0),distractedWhenLeft:s(n),distractedWhenStayed:s(i)}}function ot(t){const[e,n,i]=t.split("-").map(Number);return A(new Date(e,n-1,i-1).getTime())}function Kt(t,e){const n=new Set(t.checkIns.map(c=>A(c.startedAt))),i=A(e),s=n.has(i);let a=s?i:ot(i),r=0;for(;n.has(a);)r+=1,a=ot(a);const d=ut.map(c=>{const f=t.checkIns.filter(g=>g.minutes===c);return{minutes:c,sessions:f.length,keptGoing:f.filter(g=>g.outcome==="kept-going").length}}),h=d.filter(c=>c.keptGoing>0).sort((c,f)=>f.keptGoing/f.sessions-c.keptGoing/c.sessions||f.sessions-c.sessions)[0],y=Object.fromEntries(Object.keys(S).map(c=>[c,t.checkIns.filter(f=>f.outcome===c).length]));return{streakDays:r,sessionToday:s,lengths:d,bestLength:(h==null?void 0:h.minutes)??null,outcomeCounts:y,totalSessions:t.checkIns.length,drift:jt(t.checkIns)}}function F(t){const e=Math.ceil(t/1e3),n=Math.floor(e/60),i=e%60;return`${n}:${String(i).padStart(2,"0")}`}function rt(t){if(!t)return I();let e;try{e=t.getItem(C)}catch{return I()}if(e===null)return I();let n;try{n=JSON.parse(e)}catch{return lt(t,e),I()}const i=Rt(n);return JSON.stringify(i)!==JSON.stringify(n)&&lt(t,e),i}function Vt(t,e){t.setItem(C,JSON.stringify(e))}function lt(t,e){try{t.setItem(Et,e)}catch{}}function Rt(t){if(!N(t))return I();const e=Array.isArray(t.tasks)?t.tasks.filter(Jt).map(Xt).map(zt):[],n=Array.isArray(t.checkIns)?t.checkIns.filter(Zt).map(dt):[],i=Qt(t.active)?dt(t.active):null;return{tasks:e,checkIns:n,active:i}}function dt(t){const e=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0;let n=t;if((t.leftCount!==void 0||t.awayMs!==void 0)&&(!e(t.leftCount)||!e(t.awayMs??0))){const{leftCount:i,awayMs:s,...a}=n;n=a}if(n.hiddenAt!==void 0&&!e(n.hiddenAt)){const{hiddenAt:i,...s}=n;n=s}return n}function N(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Jt(t){return N(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function Xt(t){if(t.deadline===void 0||typeof t.deadline=="string"&&B(t.deadline))return t;const{deadline:e,...n}=t;return n}function zt(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...n}=t;return n}function Zt(t){return N(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(S,t.outcome)}function Qt(t){return N(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const G="#getting-unstuck",O="Momentum",te="⏰ Time's up!";function ee(t){return t===G?"advice":"focus"}function u(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const ne=`
  <a class="advice-link" href="${G}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function se(t,e){const n=u(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${n}" novalidate>
        <label for="step-edit">Tiny first step for ${u(t.title)}</label>
        <input id="step-edit" name="firstStep" autocomplete="off" maxlength="${w}"
          value="${u(t.firstStep)}" />
        ${e.error?`<p class="form-error" role="alert">${u(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save step</button>
          <button type="button" data-action="cancel-step-edit">Cancel</button>
        </div>
      </form>`:`
    <p class="muted">First step: ${u(t.firstStep)}
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${n}"
        aria-label="Edit step for ${u(t.title)}">Edit step</button></p>`}function ie(t,e,n){const i=u(t.id);if((e==null?void 0:e.taskId)===t.id){const r=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${i}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${i}" novalidate>
        <label for="deadline-edit">Deadline for ${u(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${u(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${u(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${r}
        </div>
      </form>`}const s=r=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${i}"
      aria-label="${r} for ${u(t.title)}">${r}</button>`;return t.deadline?`<p class="deadline${t.deadline<=A(n)?" deadline-urgent":""}"><span class="deadline-date">${Bt(t.deadline,n)}</span> ${s("Change")}</p>`:`<p class="deadline">${s("Add deadline")}</p>`}function ae(t,e){const n=Ft(t.deadline,e);return n?`<span class="urgency urgency-${n}">${xt[n]}</span>`:""}const oe={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function re(t,e){const n=e.outcome==="kept-going",i=n?"":'<button type="button" data-action="cancel-step">Cancel</button>',s=n?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${n?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${w}"
        value="${u(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${u(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${n?"Save next step":"Save smaller step"}</button>
        ${s}${i}
      </div>
    </form>`}function le(t,e){const{heading:n,message:i}=oe[e.outcome],s=e.outcome==="stopped"||e.outcome==="distracted";let a="";if(e.stepSaved){const r=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";a=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${u(t.firstStep)}</strong></p>
      <div class="step-actions">${r}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(a=re(t,e),e.outcome==="kept-going"&&(a+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):s?a=`
      <p class="muted">Your tiny step: ${u(t.firstStep)}</p>
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${G}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:a='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${n}</h2>
      <p class="muted">${u(t.title)}. ${i}</p>
      ${a}
    </section>`}function M(t,e){return e===0?0:Math.round(t/e*100)}function de(t){const e=t.streakDays===1?"day":"days";let n;return t.sessionToday?n="You've focused today. Nice.":t.streakDays>0?n="Do one session today to keep it going.":n="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${n}</p>`}function ce(t){const e=t.lengths.find(s=>s.minutes===t.bestLength),n=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${M(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',i=t.lengths.map(s=>{const a=s.sessions===0?"not tried yet":`${s.keptGoing} of ${s.sessions} kept going (${M(s.keptGoing,s.sessions)}%)`;return`<li${s.minutes===t.bestLength?' class="best"':""} data-minutes="${s.minutes}">${s.minutes} min: ${a}</li>`}).join("");return`${n}<ul class="length-rates">${i}</ul>`}function ue(t){const e=Object.keys(S).map(i=>{const s=t.outcomeCounts[i],a=M(s,t.totalSessions);return`
        <li data-outcome="${i}">
          <span class="outcome-label">${S[i]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${i}" style="width: ${a}%"></span></span>
          <span class="outcome-count">${s} (${a}%)</span>
        </li>`}).join(""),n=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${n} in all</p>`}function pe(t){const{tracked:e,left:n,awayMs:i,distractedWhenLeft:s,distractedWhenStayed:a}=t.drift;if(e===0)return"";const r=e-n,d=e===1?"session":"sessions",h=n===0?`You stayed on the page in all ${e} ${d}.`:`You left the page in <strong class="drift-left">${n}</strong> of ${e} ${d} (${pt(i)} away in all).`,y=(c,f)=>f===0?"none yet":`${c} of ${f} ended in Got distracted (${M(c,f)}%)`;return`
    <h4>Leaving the page</h4>
    <p class="drift-summary">${h}</p>
    <ul class="length-rates drift-rates">
      <li data-drift="left">When you left: ${y(s,n)}</li>
      <li data-drift="stayed">When you stayed: ${y(a,r)}</li>
    </ul>`}function fe(t,e,n){const i=Kt(t,n),s=i.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${de(i)}
        <h4>Best length for keeping going</h4>${ce(i)}
        <h4>How sessions ended</h4>${ue(i)}
        ${pe(i)}`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${s}
    </details>`}function me(t,e){const n=Ht(t.tasks);if(n.length===0)return"";const i=n.map(s=>{const a=new Date(s.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${u(s.title)}</p>
          <p class="muted">Finished ${a}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${u(s.id)}"
              aria-label="Move ${u(s.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${n.length})</summary>
      <ul class="task-list">${i}</ul>
    </details>`}function he(t,e,n){const i=Nt(t.tasks).map(s=>{const a=Wt(t,s.id),r=a?`<p class="last-check-in">Last time: ${S[a.outcome]} (${a.minutes} min)</p>`:"",d=ie(s,e.deadlineEdit,n),h=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${u(s.id)}" aria-label="Delete ${u(s.title)}" title="Delete task">×</button>`,y=ut.map(c=>`<button type="button" data-action="start" data-task-id="${u(s.id)}" data-minutes="${c}"
            aria-label="Start a ${c}-minute focus on ${u(s.title)}">${c} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading"><p class="task-title">${u(s.title)}</p>${ae(s,n)}${h}</div>
          ${d}
          ${se(s,e.stepEdit)}
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
        <input id="first-step" name="firstStep" autocomplete="off" maxlength="${w}"
          placeholder="Find their email address" />
        <label for="deadline">Deadline <span class="optional">(optional)</span></label>
        <input id="deadline" name="deadline" type="date" />
        ${e.formError?`<p class="form-error" role="alert">${u(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${ye(e.deletedTask)}
      ${i?`<ul class="task-list">${i}</ul>`:ge(t)}
      ${me(t,e.completedOpen)}
      ${fe(t,e.patternsOpen,n)}
    </section>
    </div>`}function ye(t){return t?`
    <p class="undo-notice" role="status">Deleted “${u(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function ge(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function ke(t,e,n){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${u(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${u(e)}</p>
      <p class="countdown" role="timer">${F(n)}</p>
      <button type="button" data-action="end-early">End early</button>
    </section>`}function pt(t){const e=Math.round(t/1e3);return e<60?`${e} sec`:`${Math.round(e/60)} min`}function be(t){return t.leftCount===void 0?"":t.leftCount===0?'<p class="away-line">You stayed on this page the whole time.</p>':`<p class="away-line">You left this page ${t.leftCount===1?"1 time":`${t.leftCount} times`} (${pt(t.awayMs??0)} in all).</p>`}function $e(t,e){const n=e.minutes,i=Object.keys(S).map(s=>`<button type="button" class="primary" data-action="check-in" data-outcome="${s}">${S[s]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${u(t)}, ${n}-minute session</p>
      ${be(e)}
      <div class="outcomes">${i}</div>
    </section>`}function ft(t,e){const{sessionsStarted:n,minutesFocused:i}=qt(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${n}</strong> ${n===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${i}</strong> min focused</span>`}function ve(t,e,n){const i=t.active,s=i?t.tasks.find(y=>y.id===i.taskId):void 0;let a;if(i)v(i,n)>0?a=ke((s==null?void 0:s.title)??"Your task",(s==null?void 0:s.firstStep)??"",v(i,n)):a=$e((s==null?void 0:s.title)??"Your task",i);else{const y=e.followUp&&t.tasks.find(c=>c.id===e.followUp.taskId);a=(y?le(y,e.followUp):"")+he(t,e,n)}const r=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",d=i?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${ft(t,n)}</p>`}<main class="view${d}">${r}${a}${ne}</main>`}function we(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function Se(){try{return window.localStorage}catch{return null}}function Ae(t,e=Se(),n=At()){var Z;let i=rt(e);const s={formError:null,deadlineEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null};let a="";const r=l=>ee(window.location.hash)==="advice"?"advice":i.active?v(i.active,l)>0?"running":"check-in":"list",d=l=>{var m;const o=Date.now();a=r(o),t.innerHTML=we(a==="advice"?$t():ve(i,s,o)),P(o);const p=l==null?void 0:l();if(p){p.focus();return}document.documentElement.scrollTop=0,(m=t.querySelector("h2[tabindex]"))==null||m.focus()},h=(l,o)=>()=>[...t.querySelectorAll(`[data-action="${l}"]`)].find(p=>p.dataset.taskId===o)??null,y=l=>h("edit-deadline",l),c=()=>t.querySelector("#deadline-edit"),f=()=>t.querySelector("#step-edit"),g=()=>t.querySelector('[data-action="undo-delete"]'),Y=()=>t.querySelector("#next-step"),U=()=>t.querySelector("#follow-up-title"),P=l=>{const o=i.active;o?v(o,l)>0?(document.title=`${F(v(o,l))} · ${O}`,n.chimeAt(o.endsAt)):(document.title=`${te} · ${O}`,o.endedEarlyAt!==void 0&&n.cancel()):(document.title=O,n.cancel())},T=l=>{i=l;try{if(!e)throw new Error("No storage");Vt(e,i),s.saveFailed=!1}catch{s.saveFailed=!0}},k=(l,o)=>{T(l),d(o)},q=()=>{const l=Date.now();if(document.visibilityState==="hidden"){T(Yt(i,l));return}const o=i;if(T(_(i,l)),i!==o&&r(l)==="check-in"&&a==="check-in"){d();return}J()},H=l=>{var p;const o=((p=s.deadlineEdit)==null?void 0:p.taskId)??"";s.deadlineEdit=null,k(l,y(o))},W=(l,o)=>{s.formError=null,s.stepEdit=null,s.deletedTask=null,s.deadlineEdit=null,s.followUp=null,k(Gt(i,l,o,Date.now()))},j=()=>{const l=s.followUp,o=t.querySelector("#next-step");if(!l||!o)return!0;const p=st(o.value);if(p){const m=o.value;return s.followUp={...l,editingStep:!0,error:p},d(Y),t.querySelector("#next-step").value=m,!1}return i=at(i,l.taskId,o.value),!0},K=l=>{l.key!==C&&l.key!==null||(i=rt(e),d())},V=()=>{s.formError=null,d()},R=l=>{const o=l.target;o instanceof HTMLDetailsElement&&(o.classList.contains("completed-tasks")&&(s.completedOpen=o.open),o.classList.contains("patterns")&&(s.patternsOpen=o.open))},J=()=>{const l=Date.now();if(r(l)!==a){d();return}const o=t.querySelector(".countdown");o&&i.active&&(o.textContent=F(v(i.active,l)));const p=t.querySelector(".stats-bar");p&&i.active&&(p.innerHTML=ft(i,l)),P(l)},X=l=>{var E,L,Q,tt;n.unlock();const o=l.target.closest("[data-action]");if(!o)return;const p=Date.now(),m=s.followUp,b=o.dataset.taskId??"";switch(o.dataset.action){case"edit-deadline":s.stepEdit=null,s.deadlineEdit={taskId:b,error:null},d(c);break;case"edit-step":s.deadlineEdit=null,s.stepEdit={taskId:b,error:null},d(f);break;case"cancel-step-edit":{const $=((E=s.stepEdit)==null?void 0:E.taskId)??"";s.stepEdit=null,d(h("edit-step",$));break}case"delete-task":{const $=i.tasks.find(D=>D.id===b)??null;s.deletedTask=$,((L=s.stepEdit)==null?void 0:L.taskId)===b&&(s.stepEdit=null),((Q=s.deadlineEdit)==null?void 0:Q.taskId)===b&&(s.deadlineEdit=null),k(Dt(i,b),g);break}case"undo-delete":{const $=s.deletedTask;s.deletedTask=null,$&&k(Mt(i,$),h("delete-task",$.id));break}case"cancel-deadline":H(i);break;case"remove-deadline":H(it(i,o.dataset.taskId??"",""));break;case"start":W(o.dataset.taskId??"",Number(o.dataset.minutes));break;case"end-early":k(Ut(i,p));break;case"check-in":{const $=((tt=i.active)==null?void 0:tt.taskId)??"",D=o.dataset.outcome;s.followUp={taskId:$,outcome:D,editingStep:!1,stepSaved:!1,error:null},k(Pt(i,D,p));break}case"start-now":m&&j()&&W(m.taskId,Number(o.dataset.minutes));break;case"shrink-step":m&&(s.followUp={...m,editingStep:!0,error:null}),d(Y);break;case"cancel-step":m&&(s.followUp={...m,editingStep:!1,error:null}),d(U);break;case"dismiss-follow-up":s.followUp=null,d();break;case"reopen":k(Ct(i,o.dataset.taskId??""));break}},mt=l=>{const o=l.dataset.taskId??"",p=l.elements.namedItem("deadline").value;if(p!==""&&!B(p)){s.deadlineEdit={taskId:o,error:"Pick a real date, or remove the deadline."},d(c);return}H(it(i,o,p))},ht=l=>{const o=l.dataset.taskId??"",p=l.elements.namedItem("firstStep").value,m=st(p);if(m){s.stepEdit={taskId:o,error:m},d(f),t.querySelector("#step-edit").value=p;return}s.stepEdit=null,k(at(i,o,p),h("edit-step",o))},z=l=>{const o=l.target;if(o.classList.contains("deadline-editor")){l.preventDefault(),mt(o);return}if(o.classList.contains("task-step-editor")){l.preventDefault(),ht(o);return}if(o.classList.contains("step-editor")){l.preventDefault(),s.followUp&&j()&&(s.followUp={...s.followUp,editingStep:!1,stepSaved:!0,error:null},k(i,U));return}if(o.id!=="add-task")return;l.preventDefault();const p=o.elements.namedItem("title").value,m=o.elements.namedItem("firstStep").value,b=o.elements.namedItem("deadline").value,E=Tt(p,m,b);if(s.formError=E,E){d(),t.querySelector("#task-title").value=p,t.querySelector("#first-step").value=m,t.querySelector("#deadline").value=b;const L={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(L[E.field]).focus();return}k(Lt(i,p,m,Date.now(),b))};t.addEventListener("click",X),t.addEventListener("submit",z),t.addEventListener("toggle",R,!0),window.addEventListener("hashchange",V),window.addEventListener("storage",K),((Z=i.active)==null?void 0:Z.hiddenAt)!==void 0&&document.visibilityState!=="hidden"&&T(_(i,Date.now())),document.addEventListener("visibilitychange",q);const yt=window.setInterval(J,1e3);return d(),()=>{n.cancel(),t.removeEventListener("click",X),t.removeEventListener("submit",z),t.removeEventListener("toggle",R,!0),window.removeEventListener("hashchange",V),window.removeEventListener("storage",K),document.removeEventListener("visibilitychange",q),window.clearInterval(yt)}}const ct=document.getElementById("app");ct&&Ae(ct);
