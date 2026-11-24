(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ut='<a class="back-link" href="#">← Back to my task</a>',Ut=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],Gt=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]],jt=[["Make the first step tiny","Not “write the essay,” but “open the doc and type the title.” Starting is the hard part."],["Put the phone out of reach","Drift is easier to prevent than to resist. Another room beats willpower."],["Plan with if-then","“If it's 7pm, then I open the assignment.” A cue does the deciding for you."],["Pair it with something you like","Save a favorite playlist or drink for the task you keep avoiding."]];function Vt(){return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${ut}</nav>

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
          ${Ut.map(([t,e])=>`<li><strong>${t}</strong> ${e}</li>`).join("")}
        </ol>
      </section>

      <section class="card">
        <h3>Things that help</h3>
        <ul class="plain-list">
          ${jt.map(([t,e])=>`<li><strong>${t}.</strong> ${e}</li>`).join("")}
        </ul>
      </section>

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${Gt.map(([t,e])=>`<li><span class="myth">${t}</span> ${e}</li>`).join("")}
        </ul>
      </section>

      <nav class="back-bar">${ut}</nav>
    </main>
  `}const Wt=[523.25,659.25,783.99],Kt=.22,pt=1.4,Rt=.12;function zt(){let t=null,e=null,n=null,i=[];const o=()=>{for(const l of i){try{l.stop()}catch{}l.disconnect()}i=[],n=null},s=()=>{if(!t||t.state!=="running"||e===null||n===e)return;o();const l=(e-Date.now())/1e3;if(l<0)return;const h=t.currentTime+l;i=Wt.map((c,p)=>{const u=h+p*Kt,d=t.createOscillator(),y=t.createGain();return d.type="sine",d.frequency.value=c,y.gain.setValueAtTime(0,u),y.gain.linearRampToValueAtTime(Rt,u+.03),y.gain.exponentialRampToValueAtTime(1e-4,u+pt),d.connect(y).connect(t.destination),d.start(u),d.stop(u+pt),d}),n=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?s():t.resume().then(s,()=>{})},chimeAt(l){e=l,s()},cancel(){e=null,o()}}}const St="momentum.sound.v1",At=500,q={brown:"Brown noise",rain:"Rain",hum:"Warm hum"},j={soundscape:"rain",volume:.4,playing:!1,playlistLink:"",panelOpen:!0},V="Paste a YouTube or Spotify playlist link, like https://www.youtube.com/playlist?list=…",Jt=/^[A-Za-z0-9_-]{2,64}$/,Zt=/^[A-Za-z0-9_-]{11}$/,Xt=/^[A-Za-z0-9]{22}$/,Qt=["playlist","album","track","episode","show"];function J(t){const e=t.trim();if(e==="")return{error:"Paste a playlist link first."};if(e.length>At)return{error:"That link is too long to be a playlist link."};const n=/^spotify:([a-z]+):([A-Za-z0-9]+)$/.exec(e);if(n)return ft(n[1],n[2]);let i;try{i=new URL(/^[a-z]+:\/\//i.test(e)?e:`https://${e}`)}catch{return{error:V}}if(i.protocol!=="https:"&&i.protocol!=="http:")return{error:V};const o=i.hostname.toLowerCase().replace(/^(www|m|music)\./,"");if(o==="youtube.com"||o==="youtu.be"||o==="youtube-nocookie.com")return te(i,o);if(o==="open.spotify.com"){const s=i.pathname.split("/").filter(c=>c!==""&&!c.startsWith("intl-")),l=s[0]==="embed"?s[1]:s[0],h=s[0]==="embed"?s[2]:s[1];return ft(l??"",h??"")}return{error:V}}function te(t,e){var o;const n=t.searchParams.get("list");if(n!==null)return Jt.test(n)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/videoseries?list=${n}`}:{error:"That YouTube playlist link looks broken. Copy it again from YouTube."};let i=null;return e==="youtu.be"?i=t.pathname.slice(1):t.pathname==="/watch"?i=t.searchParams.get("v"):i=((o=/^\/(?:embed|shorts|live)\/([^/]+)/.exec(t.pathname))==null?void 0:o[1])??null,i!==null&&Zt.test(i)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/${i}`}:{error:"That YouTube link has no playlist or video in it. Open the playlist and copy its link."}}function ft(t,e){return!Qt.includes(t)||!Xt.test(e)?{error:"That Spotify link has no playlist in it. In Spotify, use Share → Copy link to playlist."}:{service:"spotify",embedUrl:`https://open.spotify.com/embed/${t}/${e}`}}function ee(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(St))??"null")}catch{return{...j}}if(typeof e!="object"||e===null||Array.isArray(e))return{...j};const n=e,i={...j};return typeof n.soundscape=="string"&&Object.hasOwn(q,n.soundscape)&&(i.soundscape=n.soundscape),typeof n.volume=="number"&&n.volume>=0&&n.volume<=1&&(i.volume=n.volume),typeof n.playing=="boolean"&&(i.playing=n.playing),typeof n.panelOpen=="boolean"&&(i.panelOpen=n.panelOpen),typeof n.playlistLink=="string"&&!("error"in J(n.playlistLink))&&(i.playlistLink=n.playlistLink),i}function ne(t,e){try{return t?(t.setItem(St,JSON.stringify(e)),!0):!1}catch{return!1}}const mt=.35,se=.6,oe=.8,ie=2,ae=4;function re(){let t=null,e=null;const n=new Map,i=()=>{try{t??(t=new AudioContext)}catch{return null}return t.state!=="running"&&t.resume().catch(()=>{}),t},o=(c,p)=>{const u=n.get(p);if(u)return u;const d=c.createBuffer(1,c.sampleRate*ae,c.sampleRate),y=d.getChannelData(0);let k=0;for(let v=0;v<y.length;v++){const $=Math.random()*2-1;p==="white"?y[v]=$*.5:(k=(k+.02*$)/1.02,y[v]=k*3.5)}return n.set(p,d),d},s=(c,p,u,d)=>{const y=c.createBufferSource();y.buffer=o(c,p),y.loop=!0;const k=c.createGain();return k.gain.value=d,y.connect(k).connect(u),y},l=(c,p,u)=>{if(p==="brown")return[s(c,"brown",u,1)];if(p==="rain"){const w=c.createBiquadFilter();w.type="highpass",w.frequency.value=500;const S=c.createBiquadFilter();S.type="lowpass",S.frequency.value=5e3,w.connect(S).connect(u);const b=c.createGain();b.gain.value=.8,b.connect(w);const A=c.createOscillator();A.frequency.value=.13;const T=c.createGain();return T.gain.value=.15,A.connect(T).connect(b.gain),[s(c,"white",b,.7),s(c,"brown",u,.4),A]}const d=c.createBiquadFilter();d.type="lowpass",d.frequency.value=700;const y=c.createGain();y.gain.value=.35,y.connect(d).connect(u);const v=[{frequency:110,type:"sine",level:.5},{frequency:110.6,type:"sine",level:.35},{frequency:164.8,type:"sine",level:.25},{frequency:220.4,type:"triangle",level:.08}].map(({frequency:w,type:S,level:b})=>{const A=c.createOscillator();A.type=S,A.frequency.value=w;const T=c.createGain();return T.gain.value=b,A.connect(T).connect(y),A}),$=c.createOscillator();$.frequency.value=.08;const D=c.createGain();return D.gain.value=.1,$.connect(D).connect(y.gain),[...v,$]},h=(c,p,u)=>{const d=c.currentTime;p.fade.gain.cancelScheduledValues(d),p.fade.gain.setValueAtTime(p.fade.gain.value,d),p.fade.gain.linearRampToValueAtTime(0,d+u);for(const y of p.sources)y.stop(d+u+.05)};return{play(c,p,u){const d=i();if(!d)return;e&&h(d,e,.3);const y=d.currentTime,k=d.createGain();k.gain.setValueAtTime(0,y),k.gain.linearRampToValueAtTime(p*mt,y+se);const v=d.createGain();k.connect(v).connect(d.destination);const $=(u-Date.now())/1e3;$>0&&(v.gain.setValueAtTime(1,y+Math.max(0,$-ie)),v.gain.linearRampToValueAtTime(0,y+$));const D=l(d,c,k);for(const w of D)w.start(y);e={sources:D,volume:k,fade:v}},setVolume(c){!t||!e||(e.volume.gain.cancelScheduledValues(t.currentTime),e.volume.gain.setTargetAtTime(c*mt,t.currentTime,.05))},stop(){!t||!e||(h(t,e,oe),e=null)},isPlaying(){return e!==null}}}const B="momentum.v1",Z=[5,15,25],K=120,O=200,le=`${B}.backup`,M={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"},ce=1e4;function x(){return{tasks:[],checkIns:[],active:null}}function X(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[n,i,o]=e.slice(1).map(Number),s=new Date(n,i-1,o);return s.getFullYear()===n&&s.getMonth()===i-1&&s.getDate()===o}function yt(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>O?`Keep the step to ${O} characters or fewer.`:null}function de(t,e,n=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>K?{field:"title",message:`Keep the task name to ${K} characters or fewer.`}:e.trim().length>O?{field:"firstStep",message:`Keep the first step to ${O} characters or fewer.`}:n!==""&&!X(n)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function ue(t,e,n,i,o=""){const s={id:`${i}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:n.trim(),createdAt:i,...o!==""?{deadline:o}:{}};return{...t,tasks:[...t.tasks,s]}}function ht(t,e,n){return{...t,tasks:t.tasks.map(i=>{if(i.id!==e)return i;const{deadline:o,...s}=i;return n===""?s:{...s,deadline:n}})}}function gt(t,e,n){return{...t,tasks:t.tasks.map(i=>i.id===e?{...i,firstStep:n.trim()}:i)}}function pe(t,e){return{...t,tasks:t.tasks.filter(n=>n.id!==e)}}function fe(t,e){return t.tasks.some(n=>n.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}function me(t,e){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{completedAt:i,...o}=n;return o})}}function Et(t){return ge(t.filter(e=>e.completedAt===void 0))}function Tt(t){const e=s=>t.checkIns.filter(l=>l.taskId===s).length,n=Et(t.tasks),i=n.filter(s=>s.deadline!==void 0),o=n.filter(s=>s.deadline===void 0).sort((s,l)=>e(s.id)-e(l.id)||s.createdAt-l.createdAt);return[...i,...o]}function ye(t,e=[]){const n=Tt(t);return n.find(i=>!e.includes(i.id))??n[0]??null}function he(t){return t.filter(e=>e.completedAt!==void 0).sort((e,n)=>(n.completedAt??0)-(e.completedAt??0))}function ge(t){return[...t].sort((e,n)=>e.deadline&&n.deadline?e.deadline.localeCompare(n.deadline)||e.createdAt-n.createdAt:e.deadline?-1:n.deadline?1:e.createdAt-n.createdAt)}function C(t){const e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${i}`}const be={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function ke(t,e){const[n,i,o]=t.split("-").map(Number),s=new Date(e),l=new Date(s.getFullYear(),s.getMonth(),s.getDate());return Math.round((new Date(n,i-1,o).getTime()-l.getTime())/864e5)}function ve(t,e){if(!t)return null;const n=ke(t,e);return n<0?"overdue":n===0?"today":n===1?"tomorrow":n<=3?"soon":null}function It(t,e){const n=C(e);if(t===n)return"Due today";const[i,o,s]=t.split("-").map(Number),l=new Date(i,o-1,s).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...i!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<n?`Overdue: ${l}`:`Due ${l}`}function $e(t,e,n,i){return{...t,active:{taskId:e,minutes:n,startedAt:i,endsAt:i+n*6e4,leftCount:0,awayMs:0}}}function we(t,e){const n=t.active;return!n||n.leftCount===void 0||n.hiddenAt!==void 0||L(n,e)<=0?t:{...t,active:{...n,hiddenAt:e}}}function R(t,e){const n=t.active;if(!n||n.hiddenAt===void 0)return t;const{hiddenAt:i,...o}=n,s=n.endedEarlyAt??n.endsAt,l=Math.max(0,Math.min(e,s)-i);return l<ce?{...t,active:o}:{...t,active:{...o,leftCount:(o.leftCount??0)+1,awayMs:(o.awayMs??0)+l}}}function Se(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function L(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function Ae(t,e,n){const i=R(t,n).active;if(!i)return t;const o={taskId:i.taskId,minutes:i.minutes,startedAt:i.startedAt,endedAt:Math.min(i.endedEarlyAt??i.endsAt,n),outcome:e,...i.leftCount!==void 0?{leftCount:i.leftCount,awayMs:i.awayMs??0}:{}},s=e==="finished"?t.tasks.map(l=>l.id===i.taskId?{...l,completedAt:n}:l):t.tasks;return{...t,tasks:s,checkIns:[...t.checkIns,o],active:null}}function Ee(t,e){const n=C(e),i=t.checkIns.map(({startedAt:l,endedAt:h})=>({startedAt:l,endedAt:h}));if(t.active){const{startedAt:l,endsAt:h,endedEarlyAt:c}=t.active;i.push({startedAt:l,endedAt:Math.min(c??h,e)})}const o=i.filter(l=>C(l.startedAt)===n),s=o.reduce((l,h)=>l+Math.max(0,h.endedAt-h.startedAt),0);return{sessionsStarted:o.length,minutesFocused:Math.floor(s/6e4)}}function Te(t,e){return[...t.checkIns].reverse().find(n=>n.taskId===e)}function Ie(t){const e=t.filter(s=>s.leftCount!==void 0),n=e.filter(s=>(s.leftCount??0)>0),i=e.filter(s=>s.leftCount===0),o=s=>s.filter(l=>l.outcome==="distracted").length;return{tracked:e.length,left:n.length,awayMs:n.reduce((s,l)=>s+(l.awayMs??0),0),distractedWhenLeft:o(n),distractedWhenStayed:o(i)}}function bt(t){const[e,n,i]=t.split("-").map(Number);return C(new Date(e,n-1,i-1).getTime())}function Le(t,e){const n=new Set(t.checkIns.map(u=>C(u.startedAt))),i=C(e),o=n.has(i);let s=o?i:bt(i),l=0;for(;n.has(s);)l+=1,s=bt(s);const h=Z.map(u=>{const d=t.checkIns.filter(y=>y.minutes===u);return{minutes:u,sessions:d.length,keptGoing:d.filter(y=>y.outcome==="kept-going").length}}),c=h.filter(u=>u.keptGoing>0).sort((u,d)=>d.keptGoing/d.sessions-u.keptGoing/u.sessions||d.sessions-u.sessions)[0],p=Object.fromEntries(Object.keys(M).map(u=>[u,t.checkIns.filter(d=>d.outcome===u).length]));return{streakDays:l,sessionToday:o,lengths:h,bestLength:(c==null?void 0:c.minutes)??null,outcomeCounts:p,totalSessions:t.checkIns.length,drift:Ie(t.checkIns)}}function z(t){const e=Math.ceil(t/1e3),n=Math.floor(e/60),i=e%60;return`${n}:${String(i).padStart(2,"0")}`}function kt(t){if(!t)return x();let e;try{e=t.getItem(B)}catch{return x()}if(e===null)return x();let n;try{n=JSON.parse(e)}catch{return vt(t,e),x()}const i=Oe(n);return JSON.stringify(i)!==JSON.stringify(n)&&vt(t,e),i}function De(t,e){t.setItem(B,JSON.stringify(e))}function vt(t,e){try{t.setItem(le,e)}catch{}}function Oe(t){if(!U(t))return x();const e=Array.isArray(t.tasks)?t.tasks.filter(Me).map(Ce).map(Ne):[],n=Array.isArray(t.checkIns)?t.checkIns.filter(_e).map($t):[],i=xe(t.active)?$t(t.active):null;return{tasks:e,checkIns:n,active:i}}function $t(t){const e=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0;let n=t;if((t.leftCount!==void 0||t.awayMs!==void 0)&&(!e(t.leftCount)||!e(t.awayMs??0))){const{leftCount:i,awayMs:o,...s}=n;n=s}if(n.hiddenAt!==void 0&&!e(n.hiddenAt)){const{hiddenAt:i,...o}=n;n=o}return n}function U(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function Me(t){return U(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function Ce(t){if(t.deadline===void 0||typeof t.deadline=="string"&&X(t.deadline))return t;const{deadline:e,...n}=t;return n}function Ne(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...n}=t;return n}function _e(t){return U(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(M,t.outcome)}function xe(t){return U(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const Q="#getting-unstuck",W="Momentum",Fe="⏰ Time's up!";function Pe(t){return t===Q?"advice":"focus"}function f(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const He=`
  <a class="advice-link" href="${Q}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function qe(t,e){const n=f(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${n}" novalidate>
        <label for="step-edit">Tiny first step for ${f(t.title)}</label>
        <input id="step-edit" name="firstStep" autocomplete="off" maxlength="${O}"
          value="${f(t.firstStep)}" />
        ${e.error?`<p class="form-error" role="alert">${f(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save step</button>
          <button type="button" data-action="cancel-step-edit">Cancel</button>
        </div>
      </form>`:`
    <p class="muted">First step: ${f(t.firstStep)}
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${n}"
        aria-label="Edit step for ${f(t.title)}">Edit step</button></p>`}function Ye(t,e,n){const i=f(t.id);if((e==null?void 0:e.taskId)===t.id){const l=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${i}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${i}" novalidate>
        <label for="deadline-edit">Deadline for ${f(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${f(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${f(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${l}
        </div>
      </form>`}const o=l=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${i}"
      aria-label="${l} for ${f(t.title)}">${l}</button>`;return t.deadline?`<p class="deadline${t.deadline<=C(n)?" deadline-urgent":""}"><span class="deadline-date">${It(t.deadline,n)}</span> ${o("Change")}</p>`:`<p class="deadline">${o("Add deadline")}</p>`}function Lt(t,e){const n=ve(t.deadline,e);return n?`<span class="urgency urgency-${n}">${be[n]}</span>`:""}const Be={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function Ue(t,e){const n=e.outcome==="kept-going",i=n?"":'<button type="button" data-action="cancel-step">Cancel</button>',o=n?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${n?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${O}"
        value="${f(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${f(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${n?"Save next step":"Save smaller step"}</button>
        ${o}${i}
      </div>
    </form>`}function Ge(t,e){const{heading:n,message:i}=Be[e.outcome],o=e.outcome==="stopped"||e.outcome==="distracted";let s="";if(e.stepSaved){const l=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";s=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${f(t.firstStep)}</strong></p>
      <div class="step-actions">${l}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(s=Ue(t,e),e.outcome==="kept-going"&&(s+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):o?s=`
      <p class="muted">Your tiny step: ${f(t.firstStep)}</p>
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${Q}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:s='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${n}</h2>
      <p class="muted">${f(t.title)}. ${i}</p>
      ${s}
    </section>`}function Y(t,e){return e===0?0:Math.round(t/e*100)}function je(t){const e=t.streakDays===1?"day":"days";let n;return t.sessionToday?n="You've focused today. Nice.":t.streakDays>0?n="Do one session today to keep it going.":n="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${n}</p>`}function Ve(t){const e=t.lengths.find(o=>o.minutes===t.bestLength),n=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${Y(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',i=t.lengths.map(o=>{const s=o.sessions===0?"not tried yet":`${o.keptGoing} of ${o.sessions} kept going (${Y(o.keptGoing,o.sessions)}%)`;return`<li${o.minutes===t.bestLength?' class="best"':""} data-minutes="${o.minutes}">${o.minutes} min: ${s}</li>`}).join("");return`${n}<ul class="length-rates">${i}</ul>`}function We(t){const e=Object.keys(M).map(i=>{const o=t.outcomeCounts[i],s=Y(o,t.totalSessions);return`
        <li data-outcome="${i}">
          <span class="outcome-label">${M[i]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${i}" style="width: ${s}%"></span></span>
          <span class="outcome-count">${o} (${s}%)</span>
        </li>`}).join(""),n=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${n} in all</p>`}function Ke(t){const{tracked:e,left:n,awayMs:i,distractedWhenLeft:o,distractedWhenStayed:s}=t.drift;if(e===0)return"";const l=e-n,h=e===1?"session":"sessions",c=n===0?`You stayed on the page in all ${e} ${h}.`:`You left the page in <strong class="drift-left">${n}</strong> of ${e} ${h} (${Mt(i)} away in all).`,p=(u,d)=>d===0?"none yet":`${u} of ${d} ended in Got distracted (${Y(u,d)}%)`;return`
    <h4>Leaving the page</h4>
    <p class="drift-summary">${c}</p>
    <ul class="length-rates drift-rates">
      <li data-drift="left">When you left: ${p(o,n)}</li>
      <li data-drift="stayed">When you stayed: ${p(s,l)}</li>
    </ul>`}function Re(t,e,n){const i=Le(t,n),o=i.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${je(i)}
        <h4>Best length for keeping going</h4>${Ve(i)}
        <h4>How sessions ended</h4>${We(i)}
        ${Ke(i)}`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${o}
    </details>`}function ze(t,e){const n=he(t.tasks);if(n.length===0)return"";const i=n.map(o=>{const s=new Date(o.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${f(o.title)}</p>
          <p class="muted">Finished ${s}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${f(o.id)}"
              aria-label="Move ${f(o.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${n.length})</summary>
      <ul class="task-list">${i}</ul>
    </details>`}function Je(t,e,n){const i=Et(t.tasks).map(o=>{const s=Te(t,o.id),l=s?`<p class="last-check-in">Last time: ${M[s.outcome]} (${s.minutes} min)</p>`:"",h=Ye(o,e.deadlineEdit,n),c=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${f(o.id)}" aria-label="Delete ${f(o.title)}" title="Delete task">×</button>`,p=Z.map(u=>`<button type="button" data-action="start" data-task-id="${f(o.id)}" data-minutes="${u}"
            aria-label="Start a ${u}-minute focus on ${f(o.title)}">${u} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading"><p class="task-title">${f(o.title)}</p>${Lt(o,n)}${c}</div>
          ${h}
          ${qe(o,e.stepEdit)}
          ${l}
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
        ${e.formError?`<p class="form-error" role="alert">${f(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${Ze(e.deletedTask)}
      ${i?`<ul class="task-list">${i}</ul>`:Qe(t)}
      ${ze(t,e.completedOpen)}
      ${Re(t,e.patternsOpen,n)}
    </section>
    </div>`}function Ze(t){return t?`
    <p class="undo-notice" role="status">Deleted “${f(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function Xe(t,e,n){if(t.tasks.length===0)return"";const i=ye(t,e);if(!i)return`
      <section class="focus-hero focus-hero-empty" aria-label="Focus on this one first">
        <p class="hero-eyebrow">Focus on this one first</p>
        <p class="hero-title">You're all caught up.</p>
        <p class="hero-note">Add the next thing you're putting off.</p>
      </section>`;const o=f(i.id),s=f(i.title),l=i.deadline?`<p class="hero-deadline">${It(i.deadline,n)}</p>`:"",h=Z.map((u,d)=>`<button type="button" class="${d===0?"hero-start-main":"hero-start"}" data-action="start"
        data-task-id="${o}" data-minutes="${u}"
        aria-label="Start a ${u}-minute focus on ${s}">Start ${u} min</button>`).join(""),p=Tt(t).length>1?`<button type="button" class="hero-skip" data-action="skip-focus" data-task-id="${o}">Not this one</button>`:"";return`
    <section class="focus-hero" aria-labelledby="focus-hero-title">
      <p class="hero-eyebrow">Focus on this one first</p>
      <div class="hero-heading">
        <h2 id="focus-hero-title" class="hero-title">${s}</h2>${Lt(i,n)}
      </div>
      ${l}
      <p class="hero-eyebrow">Your tiny first step</p>
      <p class="hero-step">${f(i.firstStep)}</p>
      <div class="hero-actions">${h}${p}</div>
    </section>`}function Qe(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function tn(t,e,n,i){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${f(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${f(e)}</p>
      <p class="countdown" role="timer">${z(n)}</p>
      <button type="button" data-action="end-early">End early</button>
      ${i}
    </section>`}function Dt(t){const e=t.service==="youtube"?"YouTube":"Spotify";return`
    <iframe class="mini-player mini-player-${t.service}" src="${f(t.embedUrl)}"
      title="${e} study playlist player" loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    <button type="button" class="link-button" data-action="remove-playlist">Remove playlist</button>`}function Ot(t){return t?"Pause":"Play"}function en(t){const{settings:e}=t,n=Object.keys(q).map(s=>`
        <label class="soundscape-choice">
          <input type="radio" name="soundscape" value="${s}"${s===e.soundscape?" checked":""} />
          ${q[s]}
        </label>`).join(""),i=e.playlistLink?J(e.playlistLink):null,o=t.playerLoaded&&i&&!("error"in i)?Dt(i):"";return`
    <details class="sound-panel"${e.panelOpen?" open":""}>
      <summary>Focus sounds</summary>
      <fieldset class="soundscapes">
        <legend>Soundscape</legend>
        <div class="soundscape-choices">${n}</div>
      </fieldset>
      <div class="sound-controls">
        <button type="button" class="primary sound-toggle" data-action="toggle-sound"
          aria-pressed="${t.playing}">${Ot(t.playing)}</button>
        <label for="sound-volume">Volume</label>
        <input id="sound-volume" type="range" min="0" max="100" step="1" value="${Math.round(e.volume*100)}" />
      </div>
      <form class="playlist-form" novalidate>
        <label for="playlist-link">My Study Playlist</label>
        <div class="playlist-row">
          <input id="playlist-link" name="playlist" type="url" inputmode="url" autocomplete="off"
            maxlength="${At}" placeholder="Paste a YouTube or Spotify link"
            value="${f(e.playlistLink)}" />
          <button type="submit">Load player</button>
        </div>
        <p class="form-error playlist-error" role="alert"${t.playlistError?"":" hidden"}>${f(t.playlistError??"")}</p>
        <p class="muted playlist-hint">Works best on a laptop: Spotify plays 30-second previews unless you're signed in to Spotify in this browser, and phones pause YouTube when the screen locks.</p>
      </form>
      <div class="mini-player-slot">${o}</div>
    </details>`}function Mt(t){const e=Math.round(t/1e3);return e<60?`${e} sec`:`${Math.round(e/60)} min`}function nn(t){return t.leftCount===void 0?"":t.leftCount===0?'<p class="away-line">You stayed on this page the whole time.</p>':`<p class="away-line">You left this page ${t.leftCount===1?"1 time":`${t.leftCount} times`} (${Mt(t.awayMs??0)} in all).</p>`}function sn(t,e){const n=e.minutes,i=Object.keys(M).map(o=>`<button type="button" class="primary" data-action="check-in" data-outcome="${o}">${M[o]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${f(t)}, ${n}-minute session</p>
      ${nn(e)}
      <div class="outcomes">${i}</div>
    </section>`}function Ct(t,e){const{sessionsStarted:n,minutesFocused:i}=Ee(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${n}</strong> ${n===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${i}</strong> min focused</span>`}function on(t,e,n){const i=t.active,o=i?t.tasks.find(p=>p.id===i.taskId):void 0;let s;if(i)if(L(i,n)>0){const p=en(e.sound);s=tn((o==null?void 0:o.title)??"Your task",(o==null?void 0:o.firstStep)??"",L(i,n),p)}else s=sn((o==null?void 0:o.title)??"Your task",i);else{const p=e.followUp&&t.tasks.find(d=>d.id===e.followUp.taskId);s=(p?Ge(p,e.followUp):Xe(t,e.skippedFocus,n))+Je(t,e,n)}const l=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",h=i?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${Ct(t,n)}</p>`}<main class="view${h}">${l}${s}${He}</main>`}function an(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function rn(){try{return window.localStorage}catch{return null}}function ln(t,e=rn(),n=zt(),i=re()){var lt;let o=kt(e);const s={formError:null,deadlineEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null,sound:{settings:ee(e),playing:!1,playerLoaded:!1,playlistError:null},skippedFocus:[]};let l="";const h=a=>Pe(window.location.hash)==="advice"?"advice":o.active?L(o.active,a)>0?"running":"check-in":"list",c=a=>{var g;const r=Date.now();l=h(r),s.sound.playing=i.isPlaying(),t.innerHTML=an(l==="advice"?Vt():on(o,s,r)),w(r);const m=a==null?void 0:a();if(m){m.focus();return}document.documentElement.scrollTop=0,(g=t.querySelector("h2[tabindex]"))==null||g.focus()},p=(a,r)=>()=>[...t.querySelectorAll(`[data-action="${a}"]`)].find(m=>m.dataset.taskId===r)??null,u=a=>p("edit-deadline",a),d=()=>t.querySelector("#deadline-edit"),y=()=>t.querySelector("#step-edit"),k=()=>t.querySelector('[data-action="undo-delete"]'),v=()=>t.querySelector("#next-step"),$=()=>t.querySelector("#follow-up-title"),D=()=>t.querySelector(".hero-skip"),w=a=>{const r=o.active;if(!r)document.title=W,n.cancel();else if(L(r,a)>0){document.title=`${z(L(r,a))} · ${W}`,n.chimeAt(r.endsAt);return}else document.title=`${Fe} · ${W}`,r.endedEarlyAt!==void 0&&n.cancel();i.stop(),s.sound.playerLoaded=!1},S=a=>{o=a;try{if(!e)throw new Error("No storage");De(e,o),s.saveFailed=!1}catch{s.saveFailed=!0}},b=(a,r)=>{S(a),c(r)},A=()=>{const a=Date.now();if(document.visibilityState==="hidden"){S(we(o,a));return}const r=o;if(S(R(o,a)),o!==r&&h(a)==="check-in"&&l==="check-in"){c();return}it()},T=a=>{var m;const r=((m=s.deadlineEdit)==null?void 0:m.taskId)??"";s.deadlineEdit=null,b(a,u(r))},tt=(a,r)=>{s.formError=null,s.stepEdit=null,s.deletedTask=null,s.deadlineEdit=null,s.followUp=null,s.skippedFocus=[],S($e(o,a,r,Date.now())),s.sound.settings.playing&&o.active&&G(o.active.endsAt),c()},N=()=>ne(e,s.sound.settings),G=a=>{const{soundscape:r,volume:m}=s.sound.settings;i.play(r,m,a)},Nt=()=>{const a=t.querySelector(".sound-toggle");a&&(a.textContent=Ot(i.isPlaying()),a.setAttribute("aria-pressed",String(i.isPlaying())))},_t=()=>{const a=o.active;i.isPlaying()?(i.stop(),s.sound.settings.playing=!1):a&&L(a,Date.now())>0&&(G(a.endsAt),s.sound.settings.playing=!0),N(),Nt()},xt=a=>{s.sound.settings.soundscape=a,N(),i.isPlaying()&&o.active&&G(o.active.endsAt)},Ft=a=>{s.sound.settings.volume=Math.min(1,Math.max(0,a/100)),i.setVolume(s.sound.settings.volume),N()},Pt=a=>{const r=a.querySelector("#playlist-link"),m=a.querySelector(".playlist-error"),g=J(r.value);if("error"in g){s.sound.playlistError=g.error,m.textContent=g.error,m.hidden=!1,r.focus();return}s.sound.playlistError=null,m.hidden=!0,s.sound.settings.playlistLink=r.value.trim(),s.sound.playerLoaded=!0,N(),t.querySelector(".mini-player-slot").innerHTML=Dt(g)},Ht=()=>{s.sound.settings.playlistLink="",s.sound.playerLoaded=!1,N(),t.querySelector(".mini-player-slot").innerHTML="";const a=t.querySelector("#playlist-link");a&&(a.value="",a.focus())},F=a=>{const r=a.target;r.name==="soundscape"&&Object.hasOwn(q,r.value)?xt(r.value):r.id==="sound-volume"&&Ft(Number(r.value))},et=()=>{const a=s.followUp,r=t.querySelector("#next-step");if(!a||!r)return!0;const m=yt(r.value);if(m){const g=r.value;return s.followUp={...a,editingStep:!0,error:m},c(v),t.querySelector("#next-step").value=g,!1}return o=gt(o,a.taskId,r.value),!0},nt=a=>{a.key!==B&&a.key!==null||(o=kt(e),c())},st=()=>{s.formError=null,c()},ot=a=>{const r=a.target;r instanceof HTMLDetailsElement&&(r.classList.contains("completed-tasks")&&(s.completedOpen=r.open),r.classList.contains("patterns")&&(s.patternsOpen=r.open),r.classList.contains("sound-panel")&&(s.sound.settings.panelOpen=r.open,N()))},it=()=>{const a=Date.now();if(h(a)!==l){c();return}const r=t.querySelector(".countdown");r&&o.active&&(r.textContent=z(L(o.active,a)));const m=t.querySelector(".stats-bar");m&&o.active&&(m.innerHTML=Ct(o,a)),w(a)},at=a=>{var _,P,ct,dt;n.unlock();const r=a.target.closest("[data-action]");if(!r)return;const m=Date.now(),g=s.followUp,E=r.dataset.taskId??"";switch(r.dataset.action){case"edit-deadline":s.stepEdit=null,s.deadlineEdit={taskId:E,error:null},c(d);break;case"edit-step":s.deadlineEdit=null,s.stepEdit={taskId:E,error:null},c(y);break;case"cancel-step-edit":{const I=((_=s.stepEdit)==null?void 0:_.taskId)??"";s.stepEdit=null,c(p("edit-step",I));break}case"delete-task":{const I=o.tasks.find(H=>H.id===E)??null;s.deletedTask=I,((P=s.stepEdit)==null?void 0:P.taskId)===E&&(s.stepEdit=null),((ct=s.deadlineEdit)==null?void 0:ct.taskId)===E&&(s.deadlineEdit=null),b(pe(o,E),k);break}case"undo-delete":{const I=s.deletedTask;s.deletedTask=null,I&&b(fe(o,I),p("delete-task",I.id));break}case"cancel-deadline":T(o);break;case"remove-deadline":T(ht(o,r.dataset.taskId??"",""));break;case"start":tt(r.dataset.taskId??"",Number(r.dataset.minutes));break;case"end-early":b(Se(o,m));break;case"check-in":{const I=((dt=o.active)==null?void 0:dt.taskId)??"",H=r.dataset.outcome;s.followUp={taskId:I,outcome:H,editingStep:!1,stepSaved:!1,error:null},b(Ae(o,H,m));break}case"start-now":g&&et()&&tt(g.taskId,Number(r.dataset.minutes));break;case"shrink-step":g&&(s.followUp={...g,editingStep:!0,error:null}),c(v);break;case"cancel-step":g&&(s.followUp={...g,editingStep:!1,error:null}),c($);break;case"dismiss-follow-up":s.followUp=null,c();break;case"skip-focus":s.skippedFocus=[...s.skippedFocus,E],c(D);break;case"toggle-sound":_t();break;case"remove-playlist":Ht();break;case"reopen":b(me(o,r.dataset.taskId??""));break}},qt=a=>{const r=a.dataset.taskId??"",m=a.elements.namedItem("deadline").value;if(m!==""&&!X(m)){s.deadlineEdit={taskId:r,error:"Pick a real date, or remove the deadline."},c(d);return}T(ht(o,r,m))},Yt=a=>{const r=a.dataset.taskId??"",m=a.elements.namedItem("firstStep").value,g=yt(m);if(g){s.stepEdit={taskId:r,error:g},c(y),t.querySelector("#step-edit").value=m;return}s.stepEdit=null,b(gt(o,r,m),p("edit-step",r))},rt=a=>{const r=a.target;if(r.classList.contains("deadline-editor")){a.preventDefault(),qt(r);return}if(r.classList.contains("playlist-form")){a.preventDefault(),Pt(r);return}if(r.classList.contains("task-step-editor")){a.preventDefault(),Yt(r);return}if(r.classList.contains("step-editor")){a.preventDefault(),s.followUp&&et()&&(s.followUp={...s.followUp,editingStep:!1,stepSaved:!0,error:null},b(o,$));return}if(r.id!=="add-task")return;a.preventDefault();const m=r.elements.namedItem("title").value,g=r.elements.namedItem("firstStep").value,E=r.elements.namedItem("deadline").value,_=de(m,g,E);if(s.formError=_,_){c(),t.querySelector("#task-title").value=m,t.querySelector("#first-step").value=g,t.querySelector("#deadline").value=E;const P={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(P[_.field]).focus();return}b(ue(o,m,g,Date.now(),E))};t.addEventListener("click",at),t.addEventListener("submit",rt),t.addEventListener("toggle",ot,!0),t.addEventListener("change",F),t.addEventListener("input",F),window.addEventListener("hashchange",st),window.addEventListener("storage",nt),((lt=o.active)==null?void 0:lt.hiddenAt)!==void 0&&document.visibilityState!=="hidden"&&S(R(o,Date.now())),document.addEventListener("visibilitychange",A);const Bt=window.setInterval(it,1e3);return c(),()=>{n.cancel(),i.stop(),t.removeEventListener("click",at),t.removeEventListener("submit",rt),t.removeEventListener("toggle",ot,!0),t.removeEventListener("change",F),t.removeEventListener("input",F),window.removeEventListener("hashchange",st),window.removeEventListener("storage",nt),document.removeEventListener("visibilitychange",A),window.clearInterval(Bt)}}const wt=document.getElementById("app");wt&&ln(wt);
