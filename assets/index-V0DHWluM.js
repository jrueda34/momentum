(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const ct='<a class="back-link" href="#">← Back to my task</a>',Ht=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],Ft=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]],qt=[["Make the first step tiny","Not “write the essay,” but “open the doc and type the title.” Starting is the hard part."],["Put the phone out of reach","Drift is easier to prevent than to resist. Another room beats willpower."],["Plan with if-then","“If it's 7pm, then I open the assignment.” A cue does the deciding for you."],["Pair it with something you like","Save a favorite playlist or drink for the task you keep avoiding."]];function Bt(){return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${ct}</nav>

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
          ${Ht.map(([t,e])=>`<li><strong>${t}</strong> ${e}</li>`).join("")}
        </ol>
      </section>

      <section class="card">
        <h3>Things that help</h3>
        <ul class="plain-list">
          ${qt.map(([t,e])=>`<li><strong>${t}.</strong> ${e}</li>`).join("")}
        </ul>
      </section>

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${Ft.map(([t,e])=>`<li><span class="myth">${t}</span> ${e}</li>`).join("")}
        </ul>
      </section>

      <nav class="back-bar">${ct}</nav>
    </main>
  `}const Ut=[523.25,659.25,783.99],Yt=.22,dt=1.4,Gt=.12;function Vt(){let t=null,e=null,n=null,o=[];const s=()=>{for(const c of o){try{c.stop()}catch{}c.disconnect()}o=[],n=null},i=()=>{if(!t||t.state!=="running"||e===null||n===e)return;s();const c=(e-Date.now())/1e3;if(c<0)return;const h=t.currentTime+c;o=Ut.map((l,p)=>{const d=h+p*Yt,u=t.createOscillator(),m=t.createGain();return u.type="sine",u.frequency.value=l,m.gain.setValueAtTime(0,d),m.gain.linearRampToValueAtTime(Gt,d+.03),m.gain.exponentialRampToValueAtTime(1e-4,d+dt),u.connect(m).connect(t.destination),u.start(d),u.stop(d+dt),u}),n=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?i():t.resume().then(i,()=>{})},chimeAt(c){e=c,i()},cancel(){e=null,s()}}}const $t="momentum.sound.v1",wt=500,q={brown:"Brown noise",rain:"Rain",hum:"Warm hum"},V={soundscape:"rain",volume:.4,playing:!1,playlistLink:"",panelOpen:!0},j="Paste a YouTube or Spotify playlist link, like https://www.youtube.com/playlist?list=…",jt=/^[A-Za-z0-9_-]{2,64}$/,Wt=/^[A-Za-z0-9_-]{11}$/,Kt=/^[A-Za-z0-9]{22}$/,Rt=["playlist","album","track","episode","show"];function J(t){const e=t.trim();if(e==="")return{error:"Paste a playlist link first."};if(e.length>wt)return{error:"That link is too long to be a playlist link."};const n=/^spotify:([a-z]+):([A-Za-z0-9]+)$/.exec(e);if(n)return ut(n[1],n[2]);let o;try{o=new URL(/^[a-z]+:\/\//i.test(e)?e:`https://${e}`)}catch{return{error:j}}if(o.protocol!=="https:"&&o.protocol!=="http:")return{error:j};const s=o.hostname.toLowerCase().replace(/^(www|m|music)\./,"");if(s==="youtube.com"||s==="youtu.be"||s==="youtube-nocookie.com")return zt(o,s);if(s==="open.spotify.com"){const i=o.pathname.split("/").filter(l=>l!==""&&!l.startsWith("intl-")),c=i[0]==="embed"?i[1]:i[0],h=i[0]==="embed"?i[2]:i[1];return ut(c??"",h??"")}return{error:j}}function zt(t,e){var s;const n=t.searchParams.get("list");if(n!==null)return jt.test(n)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/videoseries?list=${n}`}:{error:"That YouTube playlist link looks broken. Copy it again from YouTube."};let o=null;return e==="youtu.be"?o=t.pathname.slice(1):t.pathname==="/watch"?o=t.searchParams.get("v"):o=((s=/^\/(?:embed|shorts|live)\/([^/]+)/.exec(t.pathname))==null?void 0:s[1])??null,o!==null&&Wt.test(o)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/${o}`}:{error:"That YouTube link has no playlist or video in it. Open the playlist and copy its link."}}function ut(t,e){return!Rt.includes(t)||!Kt.test(e)?{error:"That Spotify link has no playlist in it. In Spotify, use Share → Copy link to playlist."}:{service:"spotify",embedUrl:`https://open.spotify.com/embed/${t}/${e}`}}function Jt(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem($t))??"null")}catch{return{...V}}if(typeof e!="object"||e===null||Array.isArray(e))return{...V};const n=e,o={...V};return typeof n.soundscape=="string"&&Object.hasOwn(q,n.soundscape)&&(o.soundscape=n.soundscape),typeof n.volume=="number"&&n.volume>=0&&n.volume<=1&&(o.volume=n.volume),typeof n.playing=="boolean"&&(o.playing=n.playing),typeof n.panelOpen=="boolean"&&(o.panelOpen=n.panelOpen),typeof n.playlistLink=="string"&&!("error"in J(n.playlistLink))&&(o.playlistLink=n.playlistLink),o}function Zt(t,e){try{return t?(t.setItem($t,JSON.stringify(e)),!0):!1}catch{return!1}}const pt=.35,Xt=.6,Qt=.8,te=2,ee=4;function ne(){let t=null,e=null;const n=new Map,o=()=>{try{t??(t=new AudioContext)}catch{return null}return t.state!=="running"&&t.resume().catch(()=>{}),t},s=(l,p)=>{const d=n.get(p);if(d)return d;const u=l.createBuffer(1,l.sampleRate*ee,l.sampleRate),m=u.getChannelData(0);let b=0;for(let v=0;v<m.length;v++){const w=Math.random()*2-1;p==="white"?m[v]=w*.5:(b=(b+.02*w)/1.02,m[v]=b*3.5)}return n.set(p,u),u},i=(l,p,d,u)=>{const m=l.createBufferSource();m.buffer=s(l,p),m.loop=!0;const b=l.createGain();return b.gain.value=u,m.connect(b).connect(d),m},c=(l,p,d)=>{if(p==="brown")return[i(l,"brown",d,1)];if(p==="rain"){const $=l.createBiquadFilter();$.type="highpass",$.frequency.value=500;const k=l.createBiquadFilter();k.type="lowpass",k.frequency.value=5e3,$.connect(k).connect(d);const E=l.createGain();E.gain.value=.8,E.connect($);const S=l.createOscillator();S.frequency.value=.13;const L=l.createGain();return L.gain.value=.15,S.connect(L).connect(E.gain),[i(l,"white",E,.7),i(l,"brown",d,.4),S]}const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=700;const m=l.createGain();m.gain.value=.35,m.connect(u).connect(d);const v=[{frequency:110,type:"sine",level:.5},{frequency:110.6,type:"sine",level:.35},{frequency:164.8,type:"sine",level:.25},{frequency:220.4,type:"triangle",level:.08}].map(({frequency:$,type:k,level:E})=>{const S=l.createOscillator();S.type=k,S.frequency.value=$;const L=l.createGain();return L.gain.value=E,S.connect(L).connect(m),S}),w=l.createOscillator();w.frequency.value=.08;const I=l.createGain();return I.gain.value=.1,w.connect(I).connect(m.gain),[...v,w]},h=(l,p,d)=>{const u=l.currentTime;p.fade.gain.cancelScheduledValues(u),p.fade.gain.setValueAtTime(p.fade.gain.value,u),p.fade.gain.linearRampToValueAtTime(0,u+d);for(const m of p.sources)m.stop(u+d+.05)};return{play(l,p,d){const u=o();if(!u)return;e&&h(u,e,.3);const m=u.currentTime,b=u.createGain();b.gain.setValueAtTime(0,m),b.gain.linearRampToValueAtTime(p*pt,m+Xt);const v=u.createGain();b.connect(v).connect(u.destination);const w=(d-Date.now())/1e3;w>0&&(v.gain.setValueAtTime(1,m+Math.max(0,w-te)),v.gain.linearRampToValueAtTime(0,m+w));const I=c(u,l,b);for(const $ of I)$.start(m);e={sources:I,volume:b,fade:v}},setVolume(l){!t||!e||(e.volume.gain.cancelScheduledValues(t.currentTime),e.volume.gain.setTargetAtTime(l*pt,t.currentTime,.05))},stop(){!t||!e||(h(t,e,Qt),e=null)},isPlaying(){return e!==null}}}const U="momentum.v1",St=[5,15,25],K=120,O=200,se=`${U}.backup`,M={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"},ie=1e4;function x(){return{tasks:[],checkIns:[],active:null}}function Z(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[n,o,s]=e.slice(1).map(Number),i=new Date(n,o-1,s);return i.getFullYear()===n&&i.getMonth()===o-1&&i.getDate()===s}function ft(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>O?`Keep the step to ${O} characters or fewer.`:null}function oe(t,e,n=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>K?{field:"title",message:`Keep the task name to ${K} characters or fewer.`}:e.trim().length>O?{field:"firstStep",message:`Keep the first step to ${O} characters or fewer.`}:n!==""&&!Z(n)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function ae(t,e,n,o,s=""){const i={id:`${o}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:n.trim(),createdAt:o,...s!==""?{deadline:s}:{}};return{...t,tasks:[...t.tasks,i]}}function mt(t,e,n){return{...t,tasks:t.tasks.map(o=>{if(o.id!==e)return o;const{deadline:s,...i}=o;return n===""?i:{...i,deadline:n}})}}function yt(t,e,n){return{...t,tasks:t.tasks.map(o=>o.id===e?{...o,firstStep:n.trim()}:o)}}function re(t,e){return{...t,tasks:t.tasks.filter(n=>n.id!==e)}}function le(t,e){return t.tasks.some(n=>n.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}function ce(t,e){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{completedAt:o,...s}=n;return s})}}function de(t){return pe(t.filter(e=>e.completedAt===void 0))}function ue(t){return t.filter(e=>e.completedAt!==void 0).sort((e,n)=>(n.completedAt??0)-(e.completedAt??0))}function pe(t){return[...t].sort((e,n)=>e.deadline&&n.deadline?e.deadline.localeCompare(n.deadline)||e.createdAt-n.createdAt:e.deadline?-1:n.deadline?1:e.createdAt-n.createdAt)}function C(t){const e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${o}`}const fe={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function me(t,e){const[n,o,s]=t.split("-").map(Number),i=new Date(e),c=new Date(i.getFullYear(),i.getMonth(),i.getDate());return Math.round((new Date(n,o-1,s).getTime()-c.getTime())/864e5)}function ye(t,e){if(!t)return null;const n=me(t,e);return n<0?"overdue":n===0?"today":n===1?"tomorrow":n<=3?"soon":null}function he(t,e){const n=C(e);if(t===n)return"Due today";const[o,s,i]=t.split("-").map(Number),c=new Date(o,s-1,i).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...o!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<n?`Overdue: ${c}`:`Due ${c}`}function ge(t,e,n,o){return{...t,active:{taskId:e,minutes:n,startedAt:o,endsAt:o+n*6e4,leftCount:0,awayMs:0}}}function be(t,e){const n=t.active;return!n||n.leftCount===void 0||n.hiddenAt!==void 0||D(n,e)<=0?t:{...t,active:{...n,hiddenAt:e}}}function R(t,e){const n=t.active;if(!n||n.hiddenAt===void 0)return t;const{hiddenAt:o,...s}=n,i=n.endedEarlyAt??n.endsAt,c=Math.max(0,Math.min(e,i)-o);return c<ie?{...t,active:s}:{...t,active:{...s,leftCount:(s.leftCount??0)+1,awayMs:(s.awayMs??0)+c}}}function ke(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function D(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function ve(t,e,n){const o=R(t,n).active;if(!o)return t;const s={taskId:o.taskId,minutes:o.minutes,startedAt:o.startedAt,endedAt:Math.min(o.endedEarlyAt??o.endsAt,n),outcome:e,...o.leftCount!==void 0?{leftCount:o.leftCount,awayMs:o.awayMs??0}:{}},i=e==="finished"?t.tasks.map(c=>c.id===o.taskId?{...c,completedAt:n}:c):t.tasks;return{...t,tasks:i,checkIns:[...t.checkIns,s],active:null}}function $e(t,e){const n=C(e),o=t.checkIns.map(({startedAt:c,endedAt:h})=>({startedAt:c,endedAt:h}));if(t.active){const{startedAt:c,endsAt:h,endedEarlyAt:l}=t.active;o.push({startedAt:c,endedAt:Math.min(l??h,e)})}const s=o.filter(c=>C(c.startedAt)===n),i=s.reduce((c,h)=>c+Math.max(0,h.endedAt-h.startedAt),0);return{sessionsStarted:s.length,minutesFocused:Math.floor(i/6e4)}}function we(t,e){return[...t.checkIns].reverse().find(n=>n.taskId===e)}function Se(t){const e=t.filter(i=>i.leftCount!==void 0),n=e.filter(i=>(i.leftCount??0)>0),o=e.filter(i=>i.leftCount===0),s=i=>i.filter(c=>c.outcome==="distracted").length;return{tracked:e.length,left:n.length,awayMs:n.reduce((i,c)=>i+(c.awayMs??0),0),distractedWhenLeft:s(n),distractedWhenStayed:s(o)}}function ht(t){const[e,n,o]=t.split("-").map(Number);return C(new Date(e,n-1,o-1).getTime())}function Ae(t,e){const n=new Set(t.checkIns.map(d=>C(d.startedAt))),o=C(e),s=n.has(o);let i=s?o:ht(o),c=0;for(;n.has(i);)c+=1,i=ht(i);const h=St.map(d=>{const u=t.checkIns.filter(m=>m.minutes===d);return{minutes:d,sessions:u.length,keptGoing:u.filter(m=>m.outcome==="kept-going").length}}),l=h.filter(d=>d.keptGoing>0).sort((d,u)=>u.keptGoing/u.sessions-d.keptGoing/d.sessions||u.sessions-d.sessions)[0],p=Object.fromEntries(Object.keys(M).map(d=>[d,t.checkIns.filter(u=>u.outcome===d).length]));return{streakDays:c,sessionToday:s,lengths:h,bestLength:(l==null?void 0:l.minutes)??null,outcomeCounts:p,totalSessions:t.checkIns.length,drift:Se(t.checkIns)}}function z(t){const e=Math.ceil(t/1e3),n=Math.floor(e/60),o=e%60;return`${n}:${String(o).padStart(2,"0")}`}function gt(t){if(!t)return x();let e;try{e=t.getItem(U)}catch{return x()}if(e===null)return x();let n;try{n=JSON.parse(e)}catch{return bt(t,e),x()}const o=Te(n);return JSON.stringify(o)!==JSON.stringify(n)&&bt(t,e),o}function Ee(t,e){t.setItem(U,JSON.stringify(e))}function bt(t,e){try{t.setItem(se,e)}catch{}}function Te(t){if(!Y(t))return x();const e=Array.isArray(t.tasks)?t.tasks.filter(Ie).map(Le).map(De):[],n=Array.isArray(t.checkIns)?t.checkIns.filter(Oe).map(kt):[],o=Me(t.active)?kt(t.active):null;return{tasks:e,checkIns:n,active:o}}function kt(t){const e=o=>typeof o=="number"&&Number.isFinite(o)&&o>=0;let n=t;if((t.leftCount!==void 0||t.awayMs!==void 0)&&(!e(t.leftCount)||!e(t.awayMs??0))){const{leftCount:o,awayMs:s,...i}=n;n=i}if(n.hiddenAt!==void 0&&!e(n.hiddenAt)){const{hiddenAt:o,...s}=n;n=s}return n}function Y(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Ie(t){return Y(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function Le(t){if(t.deadline===void 0||typeof t.deadline=="string"&&Z(t.deadline))return t;const{deadline:e,...n}=t;return n}function De(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...n}=t;return n}function Oe(t){return Y(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(M,t.outcome)}function Me(t){return Y(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const X="#getting-unstuck",W="Momentum",Ce="⏰ Time's up!";function Ne(t){return t===X?"advice":"focus"}function y(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const _e=`
  <a class="advice-link" href="${X}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function xe(t,e){const n=y(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${n}" novalidate>
        <label for="step-edit">Tiny first step for ${y(t.title)}</label>
        <input id="step-edit" name="firstStep" autocomplete="off" maxlength="${O}"
          value="${y(t.firstStep)}" />
        ${e.error?`<p class="form-error" role="alert">${y(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save step</button>
          <button type="button" data-action="cancel-step-edit">Cancel</button>
        </div>
      </form>`:`
    <p class="muted">First step: ${y(t.firstStep)}
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${n}"
        aria-label="Edit step for ${y(t.title)}">Edit step</button></p>`}function Pe(t,e,n){const o=y(t.id);if((e==null?void 0:e.taskId)===t.id){const c=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${o}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${o}" novalidate>
        <label for="deadline-edit">Deadline for ${y(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${y(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${y(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${c}
        </div>
      </form>`}const s=c=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${o}"
      aria-label="${c} for ${y(t.title)}">${c}</button>`;return t.deadline?`<p class="deadline${t.deadline<=C(n)?" deadline-urgent":""}"><span class="deadline-date">${he(t.deadline,n)}</span> ${s("Change")}</p>`:`<p class="deadline">${s("Add deadline")}</p>`}function He(t,e){const n=ye(t.deadline,e);return n?`<span class="urgency urgency-${n}">${fe[n]}</span>`:""}const Fe={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function qe(t,e){const n=e.outcome==="kept-going",o=n?"":'<button type="button" data-action="cancel-step">Cancel</button>',s=n?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${n?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${O}"
        value="${y(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${y(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${n?"Save next step":"Save smaller step"}</button>
        ${s}${o}
      </div>
    </form>`}function Be(t,e){const{heading:n,message:o}=Fe[e.outcome],s=e.outcome==="stopped"||e.outcome==="distracted";let i="";if(e.stepSaved){const c=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";i=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${y(t.firstStep)}</strong></p>
      <div class="step-actions">${c}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(i=qe(t,e),e.outcome==="kept-going"&&(i+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):s?i=`
      <p class="muted">Your tiny step: ${y(t.firstStep)}</p>
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${X}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:i='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${n}</h2>
      <p class="muted">${y(t.title)}. ${o}</p>
      ${i}
    </section>`}function B(t,e){return e===0?0:Math.round(t/e*100)}function Ue(t){const e=t.streakDays===1?"day":"days";let n;return t.sessionToday?n="You've focused today. Nice.":t.streakDays>0?n="Do one session today to keep it going.":n="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${n}</p>`}function Ye(t){const e=t.lengths.find(s=>s.minutes===t.bestLength),n=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${B(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',o=t.lengths.map(s=>{const i=s.sessions===0?"not tried yet":`${s.keptGoing} of ${s.sessions} kept going (${B(s.keptGoing,s.sessions)}%)`;return`<li${s.minutes===t.bestLength?' class="best"':""} data-minutes="${s.minutes}">${s.minutes} min: ${i}</li>`}).join("");return`${n}<ul class="length-rates">${o}</ul>`}function Ge(t){const e=Object.keys(M).map(o=>{const s=t.outcomeCounts[o],i=B(s,t.totalSessions);return`
        <li data-outcome="${o}">
          <span class="outcome-label">${M[o]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${o}" style="width: ${i}%"></span></span>
          <span class="outcome-count">${s} (${i}%)</span>
        </li>`}).join(""),n=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${n} in all</p>`}function Ve(t){const{tracked:e,left:n,awayMs:o,distractedWhenLeft:s,distractedWhenStayed:i}=t.drift;if(e===0)return"";const c=e-n,h=e===1?"session":"sessions",l=n===0?`You stayed on the page in all ${e} ${h}.`:`You left the page in <strong class="drift-left">${n}</strong> of ${e} ${h} (${Tt(o)} away in all).`,p=(d,u)=>u===0?"none yet":`${d} of ${u} ended in Got distracted (${B(d,u)}%)`;return`
    <h4>Leaving the page</h4>
    <p class="drift-summary">${l}</p>
    <ul class="length-rates drift-rates">
      <li data-drift="left">When you left: ${p(s,n)}</li>
      <li data-drift="stayed">When you stayed: ${p(i,c)}</li>
    </ul>`}function je(t,e,n){const o=Ae(t,n),s=o.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${Ue(o)}
        <h4>Best length for keeping going</h4>${Ye(o)}
        <h4>How sessions ended</h4>${Ge(o)}
        ${Ve(o)}`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${s}
    </details>`}function We(t,e){const n=ue(t.tasks);if(n.length===0)return"";const o=n.map(s=>{const i=new Date(s.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${y(s.title)}</p>
          <p class="muted">Finished ${i}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${y(s.id)}"
              aria-label="Move ${y(s.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${n.length})</summary>
      <ul class="task-list">${o}</ul>
    </details>`}function Ke(t,e,n){const o=de(t.tasks).map(s=>{const i=we(t,s.id),c=i?`<p class="last-check-in">Last time: ${M[i.outcome]} (${i.minutes} min)</p>`:"",h=Pe(s,e.deadlineEdit,n),l=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${y(s.id)}" aria-label="Delete ${y(s.title)}" title="Delete task">×</button>`,p=St.map(d=>`<button type="button" data-action="start" data-task-id="${y(s.id)}" data-minutes="${d}"
            aria-label="Start a ${d}-minute focus on ${y(s.title)}">${d} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading"><p class="task-title">${y(s.title)}</p>${He(s,n)}${l}</div>
          ${h}
          ${xe(s,e.stepEdit)}
          ${c}
          <div class="timer-choices"><span class="muted">Focus for</span>${p}</div>
        </li>`}).join("");return`
    <div class="columns">
    <section class="card" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">What are you putting off?</h2>
      <form id="add-task" class="add-task" novalidate>
        <label for="task-title">Task</label>
        <input id="task-title" name="title" autocomplete="off" maxlength="${K}"
          placeholder="Email my professor" />
        <label for="first-step">Tiny first step</label>
        <input id="first-step" name="firstStep" autocomplete="off" maxlength="${O}"
          placeholder="Find their email address" />
        <label for="deadline">Deadline <span class="optional">(optional)</span></label>
        <input id="deadline" name="deadline" type="date" />
        ${e.formError?`<p class="form-error" role="alert">${y(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${Re(e.deletedTask)}
      ${o?`<ul class="task-list">${o}</ul>`:ze(t)}
      ${We(t,e.completedOpen)}
      ${je(t,e.patternsOpen,n)}
    </section>
    </div>`}function Re(t){return t?`
    <p class="undo-notice" role="status">Deleted “${y(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function ze(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function Je(t,e,n,o){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${y(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${y(e)}</p>
      <p class="countdown" role="timer">${z(n)}</p>
      <button type="button" data-action="end-early">End early</button>
      ${o}
    </section>`}function At(t){const e=t.service==="youtube"?"YouTube":"Spotify";return`
    <iframe class="mini-player mini-player-${t.service}" src="${y(t.embedUrl)}"
      title="${e} study playlist player" loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    <button type="button" class="link-button" data-action="remove-playlist">Remove playlist</button>`}function Et(t){return t?"Pause":"Play"}function Ze(t){const{settings:e}=t,n=Object.keys(q).map(i=>`
        <label class="soundscape-choice">
          <input type="radio" name="soundscape" value="${i}"${i===e.soundscape?" checked":""} />
          ${q[i]}
        </label>`).join(""),o=e.playlistLink?J(e.playlistLink):null,s=t.playerLoaded&&o&&!("error"in o)?At(o):"";return`
    <details class="sound-panel"${e.panelOpen?" open":""}>
      <summary>Focus sounds</summary>
      <fieldset class="soundscapes">
        <legend>Soundscape</legend>
        <div class="soundscape-choices">${n}</div>
      </fieldset>
      <div class="sound-controls">
        <button type="button" class="primary sound-toggle" data-action="toggle-sound"
          aria-pressed="${t.playing}">${Et(t.playing)}</button>
        <label for="sound-volume">Volume</label>
        <input id="sound-volume" type="range" min="0" max="100" step="1" value="${Math.round(e.volume*100)}" />
      </div>
      <form class="playlist-form" novalidate>
        <label for="playlist-link">My Study Playlist</label>
        <div class="playlist-row">
          <input id="playlist-link" name="playlist" type="url" inputmode="url" autocomplete="off"
            maxlength="${wt}" placeholder="Paste a YouTube or Spotify link"
            value="${y(e.playlistLink)}" />
          <button type="submit">Load player</button>
        </div>
        <p class="form-error playlist-error" role="alert"${t.playlistError?"":" hidden"}>${y(t.playlistError??"")}</p>
        <p class="muted playlist-hint">Works best on a laptop: Spotify plays 30-second previews unless you're signed in to Spotify in this browser, and phones pause YouTube when the screen locks.</p>
      </form>
      <div class="mini-player-slot">${s}</div>
    </details>`}function Tt(t){const e=Math.round(t/1e3);return e<60?`${e} sec`:`${Math.round(e/60)} min`}function Xe(t){return t.leftCount===void 0?"":t.leftCount===0?'<p class="away-line">You stayed on this page the whole time.</p>':`<p class="away-line">You left this page ${t.leftCount===1?"1 time":`${t.leftCount} times`} (${Tt(t.awayMs??0)} in all).</p>`}function Qe(t,e){const n=e.minutes,o=Object.keys(M).map(s=>`<button type="button" class="primary" data-action="check-in" data-outcome="${s}">${M[s]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${y(t)}, ${n}-minute session</p>
      ${Xe(e)}
      <div class="outcomes">${o}</div>
    </section>`}function It(t,e){const{sessionsStarted:n,minutesFocused:o}=$e(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${n}</strong> ${n===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${o}</strong> min focused</span>`}function tn(t,e,n){const o=t.active,s=o?t.tasks.find(p=>p.id===o.taskId):void 0;let i;if(o)if(D(o,n)>0){const p=Ze(e.sound);i=Je((s==null?void 0:s.title)??"Your task",(s==null?void 0:s.firstStep)??"",D(o,n),p)}else i=Qe((s==null?void 0:s.title)??"Your task",o);else{const p=e.followUp&&t.tasks.find(d=>d.id===e.followUp.taskId);i=(p?Be(p,e.followUp):"")+Ke(t,e,n)}const c=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",h=o?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${It(t,n)}</p>`}<main class="view${h}">${c}${i}${_e}</main>`}function en(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function nn(){try{return window.localStorage}catch{return null}}function sn(t,e=nn(),n=Vt(),o=ne()){var at;let s=gt(e);const i={formError:null,deadlineEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null,sound:{settings:Jt(e),playing:!1,playerLoaded:!1,playlistError:null}};let c="";const h=a=>Ne(window.location.hash)==="advice"?"advice":s.active?D(s.active,a)>0?"running":"check-in":"list",l=a=>{var g;const r=Date.now();c=h(r),i.sound.playing=o.isPlaying(),t.innerHTML=en(c==="advice"?Bt():tn(s,i,r)),I(r);const f=a==null?void 0:a();if(f){f.focus();return}document.documentElement.scrollTop=0,(g=t.querySelector("h2[tabindex]"))==null||g.focus()},p=(a,r)=>()=>[...t.querySelectorAll(`[data-action="${a}"]`)].find(f=>f.dataset.taskId===r)??null,d=a=>p("edit-deadline",a),u=()=>t.querySelector("#deadline-edit"),m=()=>t.querySelector("#step-edit"),b=()=>t.querySelector('[data-action="undo-delete"]'),v=()=>t.querySelector("#next-step"),w=()=>t.querySelector("#follow-up-title"),I=a=>{const r=s.active;if(!r)document.title=W,n.cancel();else if(D(r,a)>0){document.title=`${z(D(r,a))} · ${W}`,n.chimeAt(r.endsAt);return}else document.title=`${Ce} · ${W}`,r.endedEarlyAt!==void 0&&n.cancel();o.stop(),i.sound.playerLoaded=!1},$=a=>{s=a;try{if(!e)throw new Error("No storage");Ee(e,s),i.saveFailed=!1}catch{i.saveFailed=!0}},k=(a,r)=>{$(a),l(r)},E=()=>{const a=Date.now();if(document.visibilityState==="hidden"){$(be(s,a));return}const r=s;if($(R(s,a)),s!==r&&h(a)==="check-in"&&c==="check-in"){l();return}st()},S=a=>{var f;const r=((f=i.deadlineEdit)==null?void 0:f.taskId)??"";i.deadlineEdit=null,k(a,d(r))},L=(a,r)=>{i.formError=null,i.stepEdit=null,i.deletedTask=null,i.deadlineEdit=null,i.followUp=null,$(ge(s,a,r,Date.now())),i.sound.settings.playing&&s.active&&G(s.active.endsAt),l()},N=()=>Zt(e,i.sound.settings),G=a=>{const{soundscape:r,volume:f}=i.sound.settings;o.play(r,f,a)},Lt=()=>{const a=t.querySelector(".sound-toggle");a&&(a.textContent=Et(o.isPlaying()),a.setAttribute("aria-pressed",String(o.isPlaying())))},Dt=()=>{const a=s.active;o.isPlaying()?(o.stop(),i.sound.settings.playing=!1):a&&D(a,Date.now())>0&&(G(a.endsAt),i.sound.settings.playing=!0),N(),Lt()},Ot=a=>{i.sound.settings.soundscape=a,N(),o.isPlaying()&&s.active&&G(s.active.endsAt)},Mt=a=>{i.sound.settings.volume=Math.min(1,Math.max(0,a/100)),o.setVolume(i.sound.settings.volume),N()},Ct=a=>{const r=a.querySelector("#playlist-link"),f=a.querySelector(".playlist-error"),g=J(r.value);if("error"in g){i.sound.playlistError=g.error,f.textContent=g.error,f.hidden=!1,r.focus();return}i.sound.playlistError=null,f.hidden=!0,i.sound.settings.playlistLink=r.value.trim(),i.sound.playerLoaded=!0,N(),t.querySelector(".mini-player-slot").innerHTML=At(g)},Nt=()=>{i.sound.settings.playlistLink="",i.sound.playerLoaded=!1,N(),t.querySelector(".mini-player-slot").innerHTML="";const a=t.querySelector("#playlist-link");a&&(a.value="",a.focus())},P=a=>{const r=a.target;r.name==="soundscape"&&Object.hasOwn(q,r.value)?Ot(r.value):r.id==="sound-volume"&&Mt(Number(r.value))},Q=()=>{const a=i.followUp,r=t.querySelector("#next-step");if(!a||!r)return!0;const f=ft(r.value);if(f){const g=r.value;return i.followUp={...a,editingStep:!0,error:f},l(v),t.querySelector("#next-step").value=g,!1}return s=yt(s,a.taskId,r.value),!0},tt=a=>{a.key!==U&&a.key!==null||(s=gt(e),l())},et=()=>{i.formError=null,l()},nt=a=>{const r=a.target;r instanceof HTMLDetailsElement&&(r.classList.contains("completed-tasks")&&(i.completedOpen=r.open),r.classList.contains("patterns")&&(i.patternsOpen=r.open),r.classList.contains("sound-panel")&&(i.sound.settings.panelOpen=r.open,N()))},st=()=>{const a=Date.now();if(h(a)!==c){l();return}const r=t.querySelector(".countdown");r&&s.active&&(r.textContent=z(D(s.active,a)));const f=t.querySelector(".stats-bar");f&&s.active&&(f.innerHTML=It(s,a)),I(a)},it=a=>{var _,H,rt,lt;n.unlock();const r=a.target.closest("[data-action]");if(!r)return;const f=Date.now(),g=i.followUp,A=r.dataset.taskId??"";switch(r.dataset.action){case"edit-deadline":i.stepEdit=null,i.deadlineEdit={taskId:A,error:null},l(u);break;case"edit-step":i.deadlineEdit=null,i.stepEdit={taskId:A,error:null},l(m);break;case"cancel-step-edit":{const T=((_=i.stepEdit)==null?void 0:_.taskId)??"";i.stepEdit=null,l(p("edit-step",T));break}case"delete-task":{const T=s.tasks.find(F=>F.id===A)??null;i.deletedTask=T,((H=i.stepEdit)==null?void 0:H.taskId)===A&&(i.stepEdit=null),((rt=i.deadlineEdit)==null?void 0:rt.taskId)===A&&(i.deadlineEdit=null),k(re(s,A),b);break}case"undo-delete":{const T=i.deletedTask;i.deletedTask=null,T&&k(le(s,T),p("delete-task",T.id));break}case"cancel-deadline":S(s);break;case"remove-deadline":S(mt(s,r.dataset.taskId??"",""));break;case"start":L(r.dataset.taskId??"",Number(r.dataset.minutes));break;case"end-early":k(ke(s,f));break;case"check-in":{const T=((lt=s.active)==null?void 0:lt.taskId)??"",F=r.dataset.outcome;i.followUp={taskId:T,outcome:F,editingStep:!1,stepSaved:!1,error:null},k(ve(s,F,f));break}case"start-now":g&&Q()&&L(g.taskId,Number(r.dataset.minutes));break;case"shrink-step":g&&(i.followUp={...g,editingStep:!0,error:null}),l(v);break;case"cancel-step":g&&(i.followUp={...g,editingStep:!1,error:null}),l(w);break;case"dismiss-follow-up":i.followUp=null,l();break;case"toggle-sound":Dt();break;case"remove-playlist":Nt();break;case"reopen":k(ce(s,r.dataset.taskId??""));break}},_t=a=>{const r=a.dataset.taskId??"",f=a.elements.namedItem("deadline").value;if(f!==""&&!Z(f)){i.deadlineEdit={taskId:r,error:"Pick a real date, or remove the deadline."},l(u);return}S(mt(s,r,f))},xt=a=>{const r=a.dataset.taskId??"",f=a.elements.namedItem("firstStep").value,g=ft(f);if(g){i.stepEdit={taskId:r,error:g},l(m),t.querySelector("#step-edit").value=f;return}i.stepEdit=null,k(yt(s,r,f),p("edit-step",r))},ot=a=>{const r=a.target;if(r.classList.contains("deadline-editor")){a.preventDefault(),_t(r);return}if(r.classList.contains("playlist-form")){a.preventDefault(),Ct(r);return}if(r.classList.contains("task-step-editor")){a.preventDefault(),xt(r);return}if(r.classList.contains("step-editor")){a.preventDefault(),i.followUp&&Q()&&(i.followUp={...i.followUp,editingStep:!1,stepSaved:!0,error:null},k(s,w));return}if(r.id!=="add-task")return;a.preventDefault();const f=r.elements.namedItem("title").value,g=r.elements.namedItem("firstStep").value,A=r.elements.namedItem("deadline").value,_=oe(f,g,A);if(i.formError=_,_){l(),t.querySelector("#task-title").value=f,t.querySelector("#first-step").value=g,t.querySelector("#deadline").value=A;const H={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(H[_.field]).focus();return}k(ae(s,f,g,Date.now(),A))};t.addEventListener("click",it),t.addEventListener("submit",ot),t.addEventListener("toggle",nt,!0),t.addEventListener("change",P),t.addEventListener("input",P),window.addEventListener("hashchange",et),window.addEventListener("storage",tt),((at=s.active)==null?void 0:at.hiddenAt)!==void 0&&document.visibilityState!=="hidden"&&$(R(s,Date.now())),document.addEventListener("visibilitychange",E);const Pt=window.setInterval(st,1e3);return l(),()=>{n.cancel(),o.stop(),t.removeEventListener("click",it),t.removeEventListener("submit",ot),t.removeEventListener("toggle",nt,!0),t.removeEventListener("change",P),t.removeEventListener("input",P),window.removeEventListener("hashchange",et),window.removeEventListener("storage",tt),document.removeEventListener("visibilitychange",E),window.clearInterval(Pt)}}const vt=document.getElementById("app");vt&&sn(vt);
