(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const bt='<a class="back-link" href="#">← Back to my task</a>',ae=[["Name it.","Say what feeling you're avoiding: “this feels confusing / boring / scary.”"],["Shrink it.","Find the tiniest physical action: open the file, write one sentence, find the email address."],["Clear the path.","Phone in another room, one tab open."],["Set a 5-minute timer","and give yourself full permission to stop when it rings."],["Check in.","Most of the time you'll want to keep going. If not, you still moved it forward."]],re=[["“I'm just lazy.”","Most procrastinators care a lot. That's often why the task feels so heavy."],["“I need to feel motivated first.”","Motivation usually shows up after you start, not before."],["“Being hard on myself will fix it.”","Self-criticism feeds the loop. Forgiving yourself reduces future delay."]];function le(t=""){return`
    <main class="view" aria-labelledby="advice-title">
      <nav class="back-bar">${bt}</nav>

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
          ${ae.map(([e,n])=>`<li><strong>${e}</strong> ${n}</li>`).join("")}
        </ol>
      </section>

      ${t}

      <section class="card">
        <h3>Common myths</h3>
        <ul class="plain-list">
          ${re.map(([e,n])=>`<li><span class="myth">${e}</span> ${n}</li>`).join("")}
        </ul>
      </section>

      <nav class="back-bar">${bt}</nav>
    </main>
  `}const W="momentum.v1",ot=[5,15,25],B=120,N=200,ce=`${W}.backup`,x={finished:"Finished task","kept-going":"Kept going",stopped:"Stopped",distracted:"Got distracted"},de=1e4;function G(){return{tasks:[],checkIns:[],active:null}}function U(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return!1;const[n,s,o]=e.slice(1).map(Number),i=new Date(n,s-1,o);return i.getFullYear()===n&&i.getMonth()===s-1&&i.getDate()===o}function vt(t){return t.trim()===""?"Write a tiny step, something you could do in 2 minutes.":t.trim().length>N?`Keep the step to ${N} characters or fewer.`:null}function ue(t,e,n=""){return t.trim()===""?{field:"title",message:"Name the task you're putting off."}:e.trim()===""?{field:"firstStep",message:"Add a tiny first step, something you could do in 2 minutes."}:t.trim().length>B?{field:"title",message:`Keep the task name to ${B} characters or fewer.`}:e.trim().length>N?{field:"firstStep",message:`Keep the first step to ${N} characters or fewer.`}:n!==""&&!U(n)?{field:"deadline",message:"Pick a real date for the deadline, or leave it empty."}:null}function Ct(t,e,n,s,o=""){const i={id:`${s}-${Math.random().toString(36).slice(2,8)}`,title:e.trim(),firstStep:n.trim(),createdAt:s,...o!==""?{deadline:o}:{}};return{...t,tasks:[...t.tasks,i]}}function wt(t,e,n){return{...t,tasks:t.tasks.map(s=>{if(s.id!==e)return s;const{deadline:o,...i}=s;return n===""?i:{...i,deadline:n}})}}function $t(t,e,n){return{...t,tasks:t.tasks.map(s=>s.id===e?{...s,firstStep:n.trim()}:s)}}function pe(t,e){return{...t,tasks:t.tasks.filter(n=>n.id!==e)}}function fe(t,e){return t.tasks.some(n=>n.id===e.id)?t:{...t,tasks:[...t.tasks,e]}}const Mt="Open it and read what it asks for";function Nt(t,e){const n=e.title.trim().toLowerCase();return t.tasks.some(s=>s.title.toLowerCase()===n&&s.deadline===e.due)}function me(t,e,n,s=!1){let o=t,i=0;for(const r of e){const y=r.title.trim().slice(0,B);if(!(y===""||!U(r.due)||Nt(o,{title:y,due:r.due}))){if(o=Ct(o,y,Mt,n+i,r.due),s){const c=o.tasks[o.tasks.length-1];o={...o,tasks:[...o.tasks.slice(0,-1),{...c,demo:!0}]}}i+=1}}return{state:o,added:i}}function xt(t,e){return t.tasks.some(n=>n.id===e&&n.demo===!0)}function Ft(t){return t.checkIns.filter(e=>!xt(t,e.taskId))}function ye(t){return t.tasks.some(e=>e.demo===!0)}function he(t){const e=new Set(t.tasks.filter(n=>n.demo===!0).map(n=>n.id));return{...t,tasks:t.tasks.filter(n=>!e.has(n.id)),checkIns:t.checkIns.filter(n=>!e.has(n.taskId)),active:t.active&&e.has(t.active.taskId)?null:t.active}}function ge(t,e){return{...t,tasks:t.tasks.map(n=>{if(n.id!==e)return n;const{completedAt:s,...o}=n;return o})}}function _t(t){return ve(t.filter(e=>e.completedAt===void 0))}function Pt(t){const e=i=>t.checkIns.filter(r=>r.taskId===i).length,n=_t(t.tasks).filter(i=>!i.demo),s=n.filter(i=>i.deadline!==void 0),o=n.filter(i=>i.deadline===void 0).sort((i,r)=>e(i.id)-e(r.id)||i.createdAt-r.createdAt);return[...s,...o]}function ke(t,e=[]){const n=Pt(t);return n.find(s=>!e.includes(s.id))??n[0]??null}function be(t){return t.filter(e=>e.completedAt!==void 0).sort((e,n)=>(n.completedAt??0)-(e.completedAt??0))}function ve(t){return[...t].sort((e,n)=>e.deadline&&n.deadline?e.deadline.localeCompare(n.deadline)||e.createdAt-n.createdAt:e.deadline?-1:n.deadline?1:e.createdAt-n.createdAt)}function I(t){const e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${s}`}const we={overdue:"Overdue",today:"Today",tomorrow:"Tomorrow",soon:"Soon"};function $e(t,e){const[n,s,o]=t.split("-").map(Number),i=new Date(e),r=new Date(i.getFullYear(),i.getMonth(),i.getDate());return Math.round((new Date(n,s-1,o).getTime()-r.getTime())/864e5)}function Se(t,e){if(!t)return null;const n=$e(t,e);return n<0?"overdue":n===0?"today":n===1?"tomorrow":n<=3?"soon":null}function it(t,e){const n=I(e);if(t===n)return"Due today";const[s,o,i]=t.split("-").map(Number),r=new Date(s,o-1,i).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",...s!==new Date(e).getFullYear()?{year:"numeric"}:{}});return t<n?`Overdue: ${r}`:`Due ${r}`}function Ee(t,e,n,s){return{...t,active:{taskId:e,minutes:n,startedAt:s,endsAt:s+n*6e4,leftCount:0,awayMs:0}}}function Ae(t,e){const n=t.active;return!n||n.leftCount===void 0||n.hiddenAt!==void 0||O(n,e)<=0?t:{...t,active:{...n,hiddenAt:e}}}function et(t,e){const n=t.active;if(!n||n.hiddenAt===void 0)return t;const{hiddenAt:s,...o}=n,i=n.endedEarlyAt??n.endsAt,r=Math.max(0,Math.min(e,i)-s);return r<de?{...t,active:o}:{...t,active:{...o,leftCount:(o.leftCount??0)+1,awayMs:(o.awayMs??0)+r}}}function Te(t,e){return t.active?{...t,active:{...t.active,endedEarlyAt:e}}:t}function O(t,e){return t.endedEarlyAt!==void 0?0:Math.max(0,t.endsAt-e)}function Ie(t,e,n){const s=et(t,n).active;if(!s)return t;const o={taskId:s.taskId,minutes:s.minutes,startedAt:s.startedAt,endedAt:Math.min(s.endedEarlyAt??s.endsAt,n),outcome:e,...s.leftCount!==void 0?{leftCount:s.leftCount,awayMs:s.awayMs??0}:{}},i=e==="finished"?t.tasks.map(r=>r.id===s.taskId?{...r,completedAt:n}:r):t.tasks;return{...t,tasks:i,checkIns:[...t.checkIns,o],active:null}}function De(t,e){const n=I(e),s=Ft(t).map(({startedAt:r,endedAt:y})=>({startedAt:r,endedAt:y}));if(t.active&&!xt(t,t.active.taskId)){const{startedAt:r,endsAt:y,endedEarlyAt:c}=t.active;s.push({startedAt:r,endedAt:Math.min(c??y,e)})}const o=s.filter(r=>I(r.startedAt)===n),i=o.reduce((r,y)=>r+Math.max(0,y.endedAt-y.startedAt),0);return{sessionsStarted:o.length,minutesFocused:Math.floor(i/6e4)}}function Le(t,e){return[...t.checkIns].reverse().find(n=>n.taskId===e)}function Oe(t){const e=t.filter(i=>i.leftCount!==void 0),n=e.filter(i=>(i.leftCount??0)>0),s=e.filter(i=>i.leftCount===0),o=i=>i.filter(r=>r.outcome==="distracted").length;return{tracked:e.length,left:n.length,awayMs:n.reduce((i,r)=>i+(r.awayMs??0),0),distractedWhenLeft:o(n),distractedWhenStayed:o(s)}}function St(t){const[e,n,s]=t.split("-").map(Number);return I(new Date(e,n-1,s-1).getTime())}function Ce(t,e){const n=Ft(t),s=new Set(n.map(d=>I(d.startedAt))),o=I(e),i=s.has(o);let r=i?o:St(o),y=0;for(;s.has(r);)y+=1,r=St(r);const c=ot.map(d=>{const m=n.filter(k=>k.minutes===d);return{minutes:d,sessions:m.length,keptGoing:m.filter(k=>k.outcome==="kept-going").length}}),p=c.filter(d=>d.keptGoing>0).sort((d,m)=>m.keptGoing/m.sessions-d.keptGoing/d.sessions||m.sessions-d.sessions)[0],f=Object.fromEntries(Object.keys(x).map(d=>[d,n.filter(m=>m.outcome===d).length]));return{streakDays:y,sessionToday:i,lengths:c,bestLength:(p==null?void 0:p.minutes)??null,outcomeCounts:f,totalSessions:n.length,drift:Oe(n)}}function nt(t){const e=Math.ceil(t/1e3),n=Math.floor(e/60),s=e%60;return`${n}:${String(s).padStart(2,"0")}`}function Et(t){if(!t)return G();let e;try{e=t.getItem(W)}catch{return G()}if(e===null)return G();let n;try{n=JSON.parse(e)}catch{return At(t,e),G()}const s=Ne(n);return JSON.stringify(s)!==JSON.stringify(n)&&At(t,e),s}function Me(t,e){t.setItem(W,JSON.stringify(e))}function At(t,e){try{t.setItem(ce,e)}catch{}}function Ne(t){if(!K(t))return G();const e=Array.isArray(t.tasks)?t.tasks.filter(xe).map(Fe).map(Pe).map(_e):[],n=Array.isArray(t.checkIns)?t.checkIns.filter(He).map(Tt):[],s=Ge(t.active)?Tt(t.active):null;return{tasks:e,checkIns:n,active:s}}function Tt(t){const e=s=>typeof s=="number"&&Number.isFinite(s)&&s>=0;let n=t;if((t.leftCount!==void 0||t.awayMs!==void 0)&&(!e(t.leftCount)||!e(t.awayMs??0))){const{leftCount:s,awayMs:o,...i}=n;n=i}if(n.hiddenAt!==void 0&&!e(n.hiddenAt)){const{hiddenAt:s,...o}=n;n=o}return n}function K(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function xe(t){return K(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.firstStep=="string"&&typeof t.createdAt=="number"}function Fe(t){if(t.deadline===void 0||typeof t.deadline=="string"&&U(t.deadline))return t;const{deadline:e,...n}=t;return n}function _e(t){if(t.demo===void 0||t.demo===!0)return t;const{demo:e,...n}=t;return n}function Pe(t){if(t.completedAt===void 0||typeof t.completedAt=="number")return t;const{completedAt:e,...n}=t;return n}function He(t){return K(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endedAt=="number"&&typeof t.outcome=="string"&&Object.hasOwn(x,t.outcome)}function Ge(t){return K(t)&&typeof t.taskId=="string"&&typeof t.minutes=="number"&&typeof t.startedAt=="number"&&typeof t.endsAt=="number"&&(t.endedEarlyAt===void 0||typeof t.endedEarlyAt=="number")}const Be=1e6,Ue=120,qe=100,st={google:"Google Calendar",outlook:"Outlook"},Ye={google:[["Problem set 9",1],["Read chapter 7 before discussion",2],["Lab report draft",5]],outlook:[["Email advisor about spring classes",1],["Scholarship application",4],["Group project check-in slides",6]]};function Ve(t,e){const n=new Date(e);return Ye[t].map(([s,o])=>({title:s,due:I(new Date(n.getFullYear(),n.getMonth(),n.getDate()+o).getTime())}))}function Re(t,e){var y,c;if(!/BEGIN:VCALENDAR/i.test(t))return{error:"That file isn't a calendar file. Look for one ending in .ics."};const n=I(e),s=new Date(e),o=I(new Date(s.getFullYear(),s.getMonth(),s.getDate()+Ue).getTime()),i=[],r=new Set;for(const p of We(je(t))){const f=Ke(p.lines);if(f.has("RRULE")||((y=f.get("STATUS"))==null?void 0:y.value.toUpperCase())==="CANCELLED")continue;const d=(p.kind==="VTODO"?f.get("DUE"):void 0)??f.get("DTSTART"),m=d?ze(d.value):null,k=Je(((c=f.get("SUMMARY"))==null?void 0:c.value)??"").slice(0,B).trim();if(!m||k===""||m<n||m>o)continue;const w=`${k.toLowerCase()}|${m}`;r.has(w)||(r.add(w),i.push({title:k,due:m}))}return i.sort((p,f)=>p.due.localeCompare(f.due)||p.title.localeCompare(f.title)),{events:i.slice(0,qe)}}function je(t){return t.replace(/\r\n?/g,`
`).replace(/\n[ \t]/g,"").split(`
`)}function We(t){const e=[];let n=null;for(const s of t){const o=s.trim().toUpperCase();o==="BEGIN:VEVENT"||o==="BEGIN:VTODO"?n={kind:o==="BEGIN:VEVENT"?"VEVENT":"VTODO",lines:[]}:(o==="END:VEVENT"||o==="END:VTODO")&&n?(e.push(n),n=null):n&&n.lines.push(s)}return e}function Ke(t){const e=new Map;for(const n of t){const s=n.indexOf(":");if(s<=0)continue;const o=n.slice(0,s).split(";")[0].trim().toUpperCase();e.has(o)||e.set(o,{value:n.slice(s+1).trim()})}return e}function ze(t){const e=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?$/.exec(t);if(!e)return null;const[,n,s,o,i,r,y,c]=e;if(c){const f=Date.UTC(+n,+s-1,+o,+i,+r,+y);return Number.isNaN(f)?null:I(f)}const p=`${n}-${s}-${o}`;return U(p)?p:null}function Je(t){return t.replace(/\\[nN]/g," ").replace(/\\([,;\\])/g,"$1").replace(/\s+/g," ")}const Xe=[523.25,659.25,783.99],Ze=.22,It=1.4,Qe=.12;function tn(){let t=null,e=null,n=null,s=[];const o=()=>{for(const r of s){try{r.stop()}catch{}r.disconnect()}s=[],n=null},i=()=>{if(!t||t.state!=="running"||e===null||n===e)return;o();const r=(e-Date.now())/1e3;if(r<0)return;const y=t.currentTime+r;s=Xe.map((c,p)=>{const f=y+p*Ze,d=t.createOscillator(),m=t.createGain();return d.type="sine",d.frequency.value=c,m.gain.setValueAtTime(0,f),m.gain.linearRampToValueAtTime(Qe,f+.03),m.gain.exponentialRampToValueAtTime(1e-4,f+It),d.connect(m).connect(t.destination),d.start(f),d.stop(f+It),d}),n=e};return{unlock(){try{t??(t=new AudioContext)}catch{return}t.state==="running"?i():t.resume().then(i,()=>{})},chimeAt(r){e=r,i()},cancel(){e=null,o()}}}const Ht="momentum.sound.v1",Gt=500,R={brown:"Brown noise",rain:"Rain",hum:"Warm hum"},Z={soundscape:"rain",volume:.4,playing:!1,playlistLink:"",panelOpen:!0},Q="Paste a YouTube or Spotify playlist link, like https://www.youtube.com/playlist?list=…",en=/^[A-Za-z0-9_-]{2,64}$/,nn=/^[A-Za-z0-9_-]{11}$/,sn=/^[A-Za-z0-9]{22}$/,on=["playlist","album","track","episode","show"];function at(t){const e=t.trim();if(e==="")return{error:"Paste a playlist link first."};if(e.length>Gt)return{error:"That link is too long to be a playlist link."};const n=/^spotify:([a-z]+):([A-Za-z0-9]+)$/.exec(e);if(n)return Dt(n[1],n[2]);let s;try{s=new URL(/^[a-z]+:\/\//i.test(e)?e:`https://${e}`)}catch{return{error:Q}}if(s.protocol!=="https:"&&s.protocol!=="http:")return{error:Q};const o=s.hostname.toLowerCase().replace(/^(www|m|music)\./,"");if(o==="youtube.com"||o==="youtu.be"||o==="youtube-nocookie.com")return an(s,o);if(o==="open.spotify.com"){const i=s.pathname.split("/").filter(c=>c!==""&&!c.startsWith("intl-")),r=i[0]==="embed"?i[1]:i[0],y=i[0]==="embed"?i[2]:i[1];return Dt(r??"",y??"")}return{error:Q}}function an(t,e){var o;const n=t.searchParams.get("list");if(n!==null)return en.test(n)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/videoseries?list=${n}`}:{error:"That YouTube playlist link looks broken. Copy it again from YouTube."};let s=null;return e==="youtu.be"?s=t.pathname.slice(1):t.pathname==="/watch"?s=t.searchParams.get("v"):s=((o=/^\/(?:embed|shorts|live)\/([^/]+)/.exec(t.pathname))==null?void 0:o[1])??null,s!==null&&nn.test(s)?{service:"youtube",embedUrl:`https://www.youtube-nocookie.com/embed/${s}`}:{error:"That YouTube link has no playlist or video in it. Open the playlist and copy its link."}}function Dt(t,e){return!on.includes(t)||!sn.test(e)?{error:"That Spotify link has no playlist in it. In Spotify, use Share → Copy link to playlist."}:{service:"spotify",embedUrl:`https://open.spotify.com/embed/${t}/${e}`}}function rn(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(Ht))??"null")}catch{return{...Z}}if(typeof e!="object"||e===null||Array.isArray(e))return{...Z};const n=e,s={...Z};return typeof n.soundscape=="string"&&Object.hasOwn(R,n.soundscape)&&(s.soundscape=n.soundscape),typeof n.volume=="number"&&n.volume>=0&&n.volume<=1&&(s.volume=n.volume),typeof n.playing=="boolean"&&(s.playing=n.playing),typeof n.panelOpen=="boolean"&&(s.panelOpen=n.panelOpen),typeof n.playlistLink=="string"&&!("error"in at(n.playlistLink))&&(s.playlistLink=n.playlistLink),s}function ln(t,e){try{return t?(t.setItem(Ht,JSON.stringify(e)),!0):!1}catch{return!1}}const Lt=.35,cn=.6,dn=.8,un=2,pn=4;function fn(){let t=null,e=null;const n=new Map,s=()=>{try{t??(t=new AudioContext)}catch{return null}return t.state!=="running"&&t.resume().catch(()=>{}),t},o=(c,p)=>{const f=n.get(p);if(f)return f;const d=c.createBuffer(1,c.sampleRate*pn,c.sampleRate),m=d.getChannelData(0);let k=0;for(let w=0;w<m.length;w++){const S=Math.random()*2-1;p==="white"?m[w]=S*.5:(k=(k+.02*S)/1.02,m[w]=k*3.5)}return n.set(p,d),d},i=(c,p,f,d)=>{const m=c.createBufferSource();m.buffer=o(c,p),m.loop=!0;const k=c.createGain();return k.gain.value=d,m.connect(k).connect(f),m},r=(c,p,f)=>{if(p==="brown")return[i(c,"brown",f,1)];if(p==="rain"){const E=c.createBiquadFilter();E.type="highpass",E.frequency.value=500;const D=c.createBiquadFilter();D.type="lowpass",D.frequency.value=5e3,E.connect(D).connect(f);const A=c.createGain();A.gain.value=.8,A.connect(E);const v=c.createOscillator();v.frequency.value=.13;const L=c.createGain();return L.gain.value=.15,v.connect(L).connect(A.gain),[i(c,"white",A,.7),i(c,"brown",f,.4),v]}const d=c.createBiquadFilter();d.type="lowpass",d.frequency.value=700;const m=c.createGain();m.gain.value=.35,m.connect(d).connect(f);const w=[{frequency:110,type:"sine",level:.5},{frequency:110.6,type:"sine",level:.35},{frequency:164.8,type:"sine",level:.25},{frequency:220.4,type:"triangle",level:.08}].map(({frequency:E,type:D,level:A})=>{const v=c.createOscillator();v.type=D,v.frequency.value=E;const L=c.createGain();return L.gain.value=A,v.connect(L).connect(m),v}),S=c.createOscillator();S.frequency.value=.08;const C=c.createGain();return C.gain.value=.1,S.connect(C).connect(m.gain),[...w,S]},y=(c,p,f)=>{const d=c.currentTime;p.fade.gain.cancelScheduledValues(d),p.fade.gain.setValueAtTime(p.fade.gain.value,d),p.fade.gain.linearRampToValueAtTime(0,d+f);for(const m of p.sources)m.stop(d+f+.05)};return{play(c,p,f){const d=s();if(!d)return;e&&y(d,e,.3);const m=d.currentTime,k=d.createGain();k.gain.setValueAtTime(0,m),k.gain.linearRampToValueAtTime(p*Lt,m+cn);const w=d.createGain();k.connect(w).connect(d.destination);const S=(f-Date.now())/1e3;S>0&&(w.gain.setValueAtTime(1,m+Math.max(0,S-un)),w.gain.linearRampToValueAtTime(0,m+S));const C=r(d,c,k);for(const E of C)E.start(m);e={sources:C,volume:k,fade:w}},setVolume(c){!t||!e||(e.volume.gain.cancelScheduledValues(t.currentTime),e.volume.gain.setTargetAtTime(c*Lt,t.currentTime,.05))},stop(){!t||!e||(y(t,e,dn),e=null)},isPlaying(){return e!==null}}}const Bt="momentum.toolkit.v1",Ut=["Getting started","Staying focused","Planning","Mindset"],H=[{id:"tiny-first-step",category:"Getting started",title:"Make the first step ridiculously small",why:"The hardest part of any task is starting. When the first step is tiny, there's nothing for your brain to dread.",how:["Ask: what's the smallest physical action that counts as starting?","Commit only to that: “open the doc and write the title”","Let momentum carry you; stopping after is allowed"],example:"Not “write the report”, but “paste in last quarter's numbers.”"},{id:"name-the-feeling",category:"Mindset",title:"Name the feeling you're avoiding",why:"Since procrastination is really about dodging a bad feeling, naming it takes away a lot of its power.",how:["Pause when you notice yourself stalling","Finish the sentence: “I'm avoiding this because it feels…”","Respond to that feeling: confused? Find one question to answer first"],example:"“It feels vague” → spend 5 minutes just listing what “done” looks like."},{id:"if-then-plans",category:"Planning",title:"Use if-then plans",why:"Deciding in advance exactly when and where you'll act removes the daily decision, and it's one of the best-supported tactics in research.",how:["Write: “If [time/situation], then I will [specific action]”","Tie it to something that already happens every day","Put it in your calendar with the action as the title"],example:"“If I finish my morning coffee, then I open the proposal draft.”"},{id:"short-sessions",category:"Staying focused",title:"Work in short focus sessions",why:"“Work on it for 25 minutes” is far less scary than “finish it.” A clear end point makes starting easier.",how:["Press Start 5 min on the focus card for your top task","Only that task until the timer ends","Take a 5-minute break, then decide on another round"],example:"Four sessions ≈ one solid, guilt-free morning."},{id:"friction",category:"Staying focused",title:"Add friction to distractions",why:"You'll grab whatever is easiest. Make distractions a little harder to reach and the task a little easier.",how:["Put your phone in another room or in a drawer","Log out of social apps or use a site blocker during work blocks","Leave the task open and ready the night before"],example:"Even 20 seconds of extra effort to reach a distraction cuts how often you reach for it."},{id:"earlier-deadline",category:"Planning",title:"Set an earlier personal deadline, and pad estimates",why:"We almost always underestimate how long things take (the planning fallacy). Real deadlines then arrive too fast.",how:["Set your own deadline 1–2 days before the real one, and give that date to the task in Momentum","Add 20–50% to how long you think it will take","Compare your guess with how long it really took, and adjust next time"],example:"Due Friday? Your deadline is Wednesday evening."},{id:"do-it-badly",category:"Getting started",title:"Give yourself permission to do it badly",why:"Perfectionism is one of the biggest drivers of delay. If the first try must be great, it's safer not to try at all.",how:["Label the first pass “draft zero”: it's meant to be rough","Aim for done, then improve","Set a low bar on purpose: “one ugly paragraph”"],example:"A messy draft you can fix beats a perfect one that doesn't exist."},{id:"temptation-bundling",category:"Mindset",title:"Pair the task with something you enjoy",why:"Temptation bundling links a dreaded task with a treat, so you start looking forward to it instead.",how:["Choose a treat you'll only have while doing the task","Examples: a favorite playlist, podcast, nice coffee, a cozy spot","Keep the rule strict: no task, no treat"],example:"Only listen to your favorite podcast while folding laundry or doing admin."},{id:"accountability",category:"Staying focused",title:"Get some accountability",why:"It's easy to break promises to yourself, much harder to break them to someone else.",how:["Tell a friend what you'll finish and by when","Try body doubling: work alongside someone, in person or on a video call","Share a quick “done!” message when you finish"],example:"“I'll send you the draft by 4pm” works better than “I'll try to do it today.”"},{id:"forgive-and-restart",category:"Mindset",title:"Forgive yourself and restart",why:"Research on students found that those who forgave themselves for procrastinating on one exam procrastinated less on the next. Guilt feeds the loop; kindness breaks it.",how:["Acknowledge it plainly: “I put that off. That happens.”","Skip the self-lecture; ask “what's one thing I can do now?”","Treat every day as a fresh start, not a streak to protect"],example:"Missed yesterday? Today's first small step still counts fully."}];function qt(t,e){return t==="all"?[...H]:t==="toolkit"?H.filter(n=>e.includes(n.id)):H.filter(n=>n.category===t)}function mn(t){return t==="all"||t==="toolkit"||Ut.includes(t)}function yn(t,e){return H.some(n=>n.id===e)?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[...t]}function hn(t){return qt("toolkit",t)}function gn(t){let e;try{e=JSON.parse((t==null?void 0:t.getItem(Bt))??"[]")}catch{return[]}if(!Array.isArray(e))return[];const n=new Set(H.map(s=>s.id));return[...new Set(e.filter(s=>typeof s=="string"&&n.has(s)))]}function kn(t,e){try{return t?(t.setItem(Bt,JSON.stringify(e)),!0):!1}catch{return!1}}const rt="#getting-unstuck",tt="Momentum",bn="⏰ Time's up!";function vn(t){return t===rt?"advice":"focus"}function u(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const wn=`
  <a class="advice-link" href="${rt}">
    Feeling stuck? Read tips for getting unstuck <span aria-hidden="true">→</span>
  </a>`;function $n(t,e){const n=u(t.id);return(e==null?void 0:e.taskId)===t.id?`
      <form class="task-step-editor" data-task-id="${n}" novalidate>
        <label for="step-edit">Tiny first step for ${u(t.title)}</label>
        <input id="step-edit" name="firstStep" autocomplete="off" maxlength="${N}"
          value="${u(t.firstStep)}" />
        ${e.error?`<p class="form-error" role="alert">${u(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save step</button>
          <button type="button" data-action="cancel-step-edit">Cancel</button>
        </div>
      </form>`:`
    <p class="muted">First step: ${u(t.firstStep)}
      <button type="button" class="link-button" data-action="edit-step" data-task-id="${n}"
        aria-label="Edit step for ${u(t.title)}">Edit step</button></p>`}function Sn(t,e,n){const s=u(t.id);if((e==null?void 0:e.taskId)===t.id){const r=t.deadline?`<button type="button" data-action="remove-deadline" data-task-id="${s}">Remove deadline</button>`:"";return`
      <form class="deadline-editor" data-task-id="${s}" novalidate>
        <label for="deadline-edit">Deadline for ${u(t.title)}</label>
        <input id="deadline-edit" name="deadline" type="date" value="${u(t.deadline??"")}" />
        ${e.error?`<p class="form-error" role="alert">${u(e.error)}</p>`:""}
        <div class="deadline-actions">
          <button type="submit" class="primary">Save</button>
          <button type="button" data-action="cancel-deadline">Cancel</button>
          ${r}
        </div>
      </form>`}const o=r=>`<button type="button" class="link-button" data-action="edit-deadline" data-task-id="${s}"
      aria-label="${r} for ${u(t.title)}">${r}</button>`;return t.deadline?`<p class="deadline${t.deadline<=I(n)?" deadline-urgent":""}"><span class="deadline-date">${it(t.deadline,n)}</span> ${o("Change")}</p>`:`<p class="deadline">${o("Add deadline")}</p>`}function Yt(t,e){const n=Se(t.deadline,e);return n?`<span class="urgency urgency-${n}">${we[n]}</span>`:""}const En={finished:{heading:"You finished it!",message:"It's in your Completed list now. That's one less thing hanging over you."},"kept-going":{heading:"You kept going. Nice momentum!",message:"Write the next tiny step while it's fresh, or keep riding it with another 15 minutes."},stopped:{heading:"Stopping is okay.",message:"You started, and starting is the hardest part. If the step felt too big, shrink it so it's easier to pick back up."},distracted:{heading:"Getting pulled away happens to everyone.",message:"It doesn't undo what you did. A smaller step is easier to come back to. What could you do in 2 minutes?"}};function An(t,e){const n=e.outcome==="kept-going",s=n?"":'<button type="button" data-action="cancel-step">Cancel</button>',o=n?'<button type="button" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";return`
    <form class="step-editor" novalidate>
      <label for="next-step">${n?"Next tiny step":"A smaller tiny step"}</label>
      <input id="next-step" name="firstStep" autocomplete="off" maxlength="${N}"
        value="${u(t.firstStep)}" />
      ${e.error?`<p class="form-error" role="alert">${u(e.error)}</p>`:""}
      <div class="step-actions">
        <button type="submit" class="primary">${n?"Save next step":"Save smaller step"}</button>
        ${o}${s}
      </div>
    </form>`}const Tn={all:"All","Getting started":"Getting started","Staying focused":"Staying focused",Planning:"Planning",Mindset:"Mindset",toolkit:"My toolkit"};function In(t,e){const n=u(t.id),s=e?"Remove from my toolkit":"Add to my toolkit";return`
    <article class="strategy${e?" in-toolkit":""}" data-strategy-id="${n}">
      <p class="strategy-top">
        <span class="strategy-category">${u(t.category)}</span>
        ${e?'<span class="strategy-picked">✓ In your toolkit</span>':""}
      </p>
      <h4 class="strategy-title">${u(t.title)}</h4>
      <p class="strategy-why">${u(t.why)}</p>
      <ul class="strategy-how">${t.how.map(o=>`<li>${u(o)}</li>`).join("")}</ul>
      <p class="strategy-example">${u(t.example)}</p>
      <button type="button" class="${e?"":"primary "}toolkit-toggle" data-action="toggle-toolkit"
        data-strategy-id="${n}" aria-pressed="${e}"
        aria-label="${s}: ${u(t.title)}">${s}</button>
    </article>`}function Dn(t,e){const n=["all",...Ut,"toolkit"].map(i=>{const r=i==="toolkit"?`My toolkit (${e.length})`:Tn[i];return`<button type="button" class="strategy-filter${i===t?" active":""}"
        data-action="strategy-filter" data-filter="${u(i)}" aria-pressed="${i===t}">${r}</button>`}).join(""),s=qt(t,e),o=s.length>0?`<div class="strategy-grid">${s.map(i=>In(i,e.includes(i.id))).join("")}</div>`:'<p class="muted toolkit-empty">Nothing in your toolkit yet. Under <strong>All</strong>, press <strong>Add to my toolkit</strong> on two or three that fit how you get stuck.</p>';return`
    <section class="card strategies" aria-labelledby="strategies-title">
      <h3 id="strategies-title">10 strategies you can use today</h3>
      <p class="muted">You don't need all of them. Pick two or three that fit how you get stuck; they'll show up when a session goes sideways.</p>
      <div class="strategy-filters" role="group" aria-label="Show strategies">${n}</div>
      <p class="toolkit-count"><strong>${e.length}</strong> of ${H.length} in your toolkit</p>
      ${o}
    </section>`}function Ln(t){const e=hn(t);return e.length===0?"":`
    <div class="toolkit-reminder">
      <p class="toolkit-reminder-title">From your toolkit</p>
      <ul>${e.map(s=>`<li><strong>${u(s.title)}.</strong> ${u(s.how[0])}</li>`).join("")}</ul>
    </div>`}function On(t,e,n){const{heading:s,message:o}=En[e.outcome],i=e.outcome==="stopped"||e.outcome==="distracted";let r="";if(e.stepSaved){const y=e.outcome==="kept-going"?'<button type="button" class="primary" data-action="start-now" data-minutes="15">Start 15 min now</button>':"";r=`
      <p class="step-saved" role="status">Saved. Your tiny step is now: <strong>${u(t.firstStep)}</strong></p>
      <div class="step-actions">${y}<button type="button" data-action="dismiss-follow-up">Done</button></div>`}else e.outcome==="kept-going"||e.editingStep?(r=An(t,e),e.outcome==="kept-going"&&(r+='<button type="button" class="link-button" data-action="dismiss-follow-up">Not now</button>')):i?r=`
      <p class="muted">Your tiny step: ${u(t.firstStep)}</p>
      ${Ln(n)}
      <div class="step-actions">
        <button type="button" class="primary" data-action="shrink-step">Shrink my tiny step</button>
        <a class="advice-link" href="${rt}">Open Getting unstuck</a>
        <button type="button" data-action="dismiss-follow-up">Not now</button>
      </div>`:r='<div class="step-actions"><button type="button" data-action="dismiss-follow-up">Got it</button></div>';return`
    <section class="card follow-up follow-up-${e.outcome}" aria-labelledby="follow-up-title">
      <h2 id="follow-up-title" tabindex="-1">${s}</h2>
      <p class="muted">${u(t.title)}. ${o}</p>
      ${r}
    </section>`}function j(t,e){return e===0?0:Math.round(t/e*100)}function Cn(t){const e=t.streakDays===1?"day":"days";let n;return t.sessionToday?n="You've focused today. Nice.":t.streakDays>0?n="Do one session today to keep it going.":n="Do one session today to start a streak.",`
    <p class="streak"><strong class="streak-days">${t.streakDays}</strong> ${e} in a row</p>
    <p class="muted">${n}</p>`}function Mn(t){const e=t.lengths.find(o=>o.minutes===t.bestLength),n=e?`<p class="best-length"><strong>${e.minutes}-minute</strong> sessions: you kept going in ${e.keptGoing} of ${e.sessions} (${j(e.keptGoing,e.sessions)}%).</p>`:'<p class="best-length muted">No “Kept going” yet. Try a few lengths and see which one sticks.</p>',s=t.lengths.map(o=>{const i=o.sessions===0?"not tried yet":`${o.keptGoing} of ${o.sessions} kept going (${j(o.keptGoing,o.sessions)}%)`;return`<li${o.minutes===t.bestLength?' class="best"':""} data-minutes="${o.minutes}">${o.minutes} min: ${i}</li>`}).join("");return`${n}<ul class="length-rates">${s}</ul>`}function Nn(t){const e=Object.keys(x).map(s=>{const o=t.outcomeCounts[s],i=j(o,t.totalSessions);return`
        <li data-outcome="${s}">
          <span class="outcome-label">${x[s]}</span>
          <span class="bar" aria-hidden="true"><span class="bar-fill bar-${s}" style="width: ${i}%"></span></span>
          <span class="outcome-count">${o} (${i}%)</span>
        </li>`}).join(""),n=t.totalSessions===1?"session":"sessions";return`<ul class="outcome-breakdown">${e}</ul><p class="muted">${t.totalSessions} ${n} in all</p>`}function xn(t){const{tracked:e,left:n,awayMs:s,distractedWhenLeft:o,distractedWhenStayed:i}=t.drift;if(e===0)return"";const r=e-n,y=e===1?"session":"sessions",c=n===0?`You stayed on the page in all ${e} ${y}.`:`You left the page in <strong class="drift-left">${n}</strong> of ${e} ${y} (${jt(s)} away in all).`,p=(f,d)=>d===0?"none yet":`${f} of ${d} ended in Got distracted (${j(f,d)}%)`;return`
    <h4>Leaving the page</h4>
    <p class="drift-summary">${c}</p>
    <ul class="length-rates drift-rates">
      <li data-drift="left">When you left: ${p(o,n)}</li>
      <li data-drift="stayed">When you stayed: ${p(i,r)}</li>
    </ul>`}function Fn(t,e,n){const s=Ce(t,n),o=s.totalSessions===0?'<p class="muted">Finish a focus session and answer “How did it go?”, and your patterns will show up here.</p>':`
        <h4>Streak</h4>${Cn(s)}
        <h4>Best length for keeping going</h4>${Mn(s)}
        <h4>How sessions ended</h4>${Nn(s)}
        ${xn(s)}`;return`
    <details class="patterns"${e?" open":""}>
      <summary>Your Patterns &amp; Streak</summary>
      ${o}
    </details>`}function _n(t,e){const n=be(t.tasks);if(n.length===0)return"";const s=n.map(o=>{const i=new Date(o.completedAt).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"});return`
        <li class="completed-task">
          <p class="completed-title">${u(o.title)}</p>
          <p class="muted">Finished ${i}
            <button type="button" class="link-button" data-action="reopen" data-task-id="${u(o.id)}"
              aria-label="Move ${u(o.title)} back to your tasks">Move back</button></p>
        </li>`}).join("");return`
    <details class="completed-tasks"${e?" open":""}>
      <summary>Completed (${n.length})</summary>
      <ul class="task-list">${s}</ul>
    </details>`}function Pn(t,e,n){const s=_t(t.tasks).map(o=>{const i=Le(t,o.id),r=i?`<p class="last-check-in">Last time: ${x[i.outcome]} (${i.minutes} min)</p>`:"",y=Sn(o,e.deadlineEdit,n),c=o.demo?'<span class="demo-badge">Demo</span>':"",p=`<button type="button" class="delete-task" data-action="delete-task"
        data-task-id="${u(o.id)}" aria-label="Delete ${u(o.title)}" title="Delete task">×</button>`,f=ot.map(d=>`<button type="button" data-action="start" data-task-id="${u(o.id)}" data-minutes="${d}"
            aria-label="Start a ${d}-minute focus on ${u(o.title)}">${d} min</button>`).join("");return`
        <li class="task">
          <div class="task-heading">
            <p class="task-title">${u(o.title)}</p>${c}${Yt(o,n)}${p}
          </div>
          ${y}
          ${$n(o,e.stepEdit)}
          ${r}
          <div class="timer-choices"><span class="muted">Focus for</span>${f}</div>
        </li>`}).join("");return`
    <div class="columns">
    <div class="column-stack">
    <section class="card" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">What are you putting off?</h2>
      <form id="add-task" class="add-task" novalidate>
        <label for="task-title">Task</label>
        <input id="task-title" name="title" autocomplete="off" maxlength="${B}"
          placeholder="Email my professor" />
        <label for="first-step">Tiny first step</label>
        <input id="first-step" name="firstStep" autocomplete="off" maxlength="${N}"
          placeholder="Find their email address" />
        <label for="deadline">Deadline <span class="optional">(optional)</span></label>
        <input id="deadline" name="deadline" type="date" />
        ${e.formError?`<p class="form-error" role="alert">${u(e.formError.message)}</p>`:""}
        <button type="submit" class="primary">Add task</button>
      </form>
    </section>
    ${Un(t,e.importer,n)}
    </div>
    <section class="card" aria-labelledby="tasks-title">
      <h3 id="tasks-title">Your tasks</h3>
      ${Hn(e.deletedTask)}
      ${s?`<ul class="task-list">${s}</ul>`:qn(t)}
      ${_n(t,e.completedOpen)}
      ${Fn(t,e.patternsOpen,n)}
    </section>
    </div>`}function Hn(t){return t?`
    <p class="undo-notice" role="status">Deleted “${u(t.title)}”.
      <button type="button" class="link-button" data-action="undo-delete">Undo</button></p>`:""}function Gn(t,e,n){if(t.tasks.length===0)return"";const s=ke(t,e);if(!s)return`
      <section class="focus-hero focus-hero-empty" aria-label="Focus on this one first">
        <p class="hero-eyebrow">Focus on this one first</p>
        <p class="hero-title">You're all caught up.</p>
        <p class="hero-note">Add the next thing you're putting off.</p>
      </section>`;const o=u(s.id),i=u(s.title),r=s.deadline?`<p class="hero-deadline">${it(s.deadline,n)}</p>`:"",y=ot.map((f,d)=>`<button type="button" class="${d===0?"hero-start-main":"hero-start"}" data-action="start"
        data-task-id="${o}" data-minutes="${f}"
        aria-label="Start a ${f}-minute focus on ${i}">Start ${f} min</button>`).join(""),p=Pt(t).length>1?`<button type="button" class="hero-skip" data-action="skip-focus" data-task-id="${o}">Not this one</button>`:"";return`
    <section class="focus-hero" aria-labelledby="focus-hero-title">
      <p class="hero-eyebrow">Focus on this one first</p>
      <div class="hero-heading">
        <h2 id="focus-hero-title" class="hero-title">${i}</h2>${Yt(s,n)}
      </div>
      ${r}
      <p class="hero-eyebrow">Your tiny first step</p>
      <p class="hero-step">${u(s.firstStep)}</p>
      <div class="hero-actions">${y}${p}</div>
    </section>`}function Bn(t,e,n){const s=e.source!=="file",o=e.events.map((r,y)=>{const c=Nt(t,r);return`
        <li>
          <label class="import-row${c?" import-present":""}">
            <input type="checkbox" name="import-event" value="${y}"${c?" disabled":" checked"} />
            <span class="import-title">${u(r.title)}</span>
            <span class="import-due">${c?"Already in your tasks":it(r.due,n)}</span>
          </label>
        </li>`}).join(""),i=s?`<p class="import-demo-note"><strong>Demo:</strong> made-up deadlines from a pretend ${u(e.label)}. They'll be marked <strong>Demo</strong>, stay off the focus card and out of your stats, and <strong>Remove demo tasks</strong> clears them.</p>`:`<p class="muted">Upcoming deadlines in <strong>${u(e.label)}</strong>. Untick any you don't want.</p>`;return`
    <form class="import-preview" novalidate aria-labelledby="import-preview-title">
      <h4 id="import-preview-title" tabindex="-1">${s?`Demo import: ${u(e.label)}`:"Pick deadlines to add"}</h4>
      ${i}
      <ul class="import-list">${o}</ul>
      <div class="deadline-actions">
        <button type="submit" class="primary">Add selected tasks</button>
        <button type="button" data-action="cancel-import">Cancel</button>
      </div>
    </form>`}function Un(t,e,n){const s=Object.keys(st).map(r=>`<button type="button" class="demo-import" data-action="demo-import" data-source="${r}">Demo: ${st[r]}</button>`).join(""),o=e.error?`<p class="form-error" role="alert">${u(e.error)}</p>`:e.notice?`<p class="import-notice" role="status">${u(e.notice)}</p>`:"",i=ye(t)?'<p class="demo-present">Demo tasks are in your list. <button type="button" class="link-button" data-action="remove-demo">Remove demo tasks</button></p>':"";return`
    <section class="card calendar-import" aria-labelledby="calendar-title">
      <h3 id="calendar-title">Bring in deadlines</h3>
      <p class="muted">Canvas, Google Calendar, and Outlook can save a calendar as an <strong>.ics</strong> file. Choose one to add its upcoming deadlines. The file stays on this device.</p>
      <label class="file-pick" for="ics-file">Choose an .ics file</label>
      <input id="ics-file" class="file-input" type="file" accept=".ics,text/calendar" />
      ${o}
      ${e.preview?Bn(t,e.preview,n):""}
      <div class="demo-row">
        <p class="muted">Showing someone how it works? Try it with made-up deadlines:</p>
        <div class="deadline-actions">${s}</div>
      </div>
      ${i}
    </section>`}function qn(t){return t.tasks.length>0?`<p class="muted">Everything here is finished. Add the next thing you're putting off when you're ready.</p>`:'<p class="muted">No tasks yet. Add one, then pick a timer to start on it.</p>'}function Yn(t,e,n,s){return`
    <section class="card session" aria-labelledby="focus-title">
      <p class="eyebrow">Focusing on</p>
      <h2 id="focus-title" tabindex="-1">${u(t)}</h2>
      <p class="eyebrow">Your tiny first step</p>
      <p class="first-step">${u(e)}</p>
      <p class="countdown" role="timer">${nt(n)}</p>
      <button type="button" data-action="end-early">End early</button>
      ${s}
    </section>`}function Vt(t){const e=t.service==="youtube"?"YouTube":"Spotify";return`
    <iframe class="mini-player mini-player-${t.service}" src="${u(t.embedUrl)}"
      title="${e} study playlist player" loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
    <button type="button" class="link-button" data-action="remove-playlist">Remove playlist</button>`}function Rt(t){return t?"Pause":"Play"}function Vn(t){const{settings:e}=t,n=Object.keys(R).map(i=>`
        <label class="soundscape-choice">
          <input type="radio" name="soundscape" value="${i}"${i===e.soundscape?" checked":""} />
          ${R[i]}
        </label>`).join(""),s=e.playlistLink?at(e.playlistLink):null,o=t.playerLoaded&&s&&!("error"in s)?Vt(s):"";return`
    <details class="sound-panel"${e.panelOpen?" open":""}>
      <summary>Focus sounds</summary>
      <fieldset class="soundscapes">
        <legend>Soundscape</legend>
        <div class="soundscape-choices">${n}</div>
      </fieldset>
      <div class="sound-controls">
        <button type="button" class="primary sound-toggle" data-action="toggle-sound"
          aria-pressed="${t.playing}">${Rt(t.playing)}</button>
        <label for="sound-volume">Volume</label>
        <input id="sound-volume" type="range" min="0" max="100" step="1" value="${Math.round(e.volume*100)}" />
      </div>
      <form class="playlist-form" novalidate>
        <label for="playlist-link">My Study Playlist</label>
        <div class="playlist-row">
          <input id="playlist-link" name="playlist" type="url" inputmode="url" autocomplete="off"
            maxlength="${Gt}" placeholder="Paste a YouTube or Spotify link"
            value="${u(e.playlistLink)}" />
          <button type="submit">Load player</button>
        </div>
        <p class="form-error playlist-error" role="alert"${t.playlistError?"":" hidden"}>${u(t.playlistError??"")}</p>
        <p class="muted playlist-hint">Works best on a laptop: Spotify plays 30-second previews unless you're signed in to Spotify in this browser, and phones pause YouTube when the screen locks.</p>
      </form>
      <div class="mini-player-slot">${o}</div>
    </details>`}function jt(t){const e=Math.round(t/1e3);return e<60?`${e} sec`:`${Math.round(e/60)} min`}function Rn(t){return t.leftCount===void 0?"":t.leftCount===0?'<p class="away-line">You stayed on this page the whole time.</p>':`<p class="away-line">You left this page ${t.leftCount===1?"1 time":`${t.leftCount} times`} (${jt(t.awayMs??0)} in all).</p>`}function jn(t,e){const n=e.minutes,s=Object.keys(x).map(o=>`<button type="button" class="primary" data-action="check-in" data-outcome="${o}">${x[o]}</button>`).join("");return`
    <section class="card session" aria-labelledby="focus-title">
      <h2 id="focus-title" tabindex="-1">How did it go?</h2>
      <p class="muted">${u(t)}, ${n}-minute session</p>
      ${Rn(e)}
      <div class="outcomes">${s}</div>
    </section>`}function Wt(t,e){const{sessionsStarted:n,minutesFocused:s}=De(t,e);return`<span class="stats-label">Today</span>
    <span><strong class="stats-sessions">${n}</strong> ${n===1?"session":"sessions"} started</span>
    <span><strong class="stats-minutes">${s}</strong> min focused</span>`}function Wn(t,e,n){const s=t.active,o=s?t.tasks.find(p=>p.id===s.taskId):void 0;let i;if(s)if(O(s,n)>0){const p=Vn(e.sound);i=Yn((o==null?void 0:o.title)??"Your task",(o==null?void 0:o.firstStep)??"",O(s,n),p)}else i=jn((o==null?void 0:o.title)??"Your task",s);else{const p=e.followUp&&t.tasks.find(d=>d.id===e.followUp.taskId);i=(p?On(p,e.followUp,e.toolkit):Gn(t,e.skippedFocus,n))+Pn(t,e,n)}const r=e.saveFailed?`<p class="form-error" role="alert">This browser isn't letting Momentum save, so your tasks will be gone after a refresh. Private browsing can cause this.</p>`:"",y=s?"":" wide";return`${`<p class="stats-bar" aria-label="Today's focus">${Wt(t,n)}</p>`}<main class="view${y}">${r}${i}${wn}</main>`}function Kn(t){return`
    <header class="top">
      <h1>Momentum</h1>
      <p class="muted">Start small. Keep going.</p>
    </header>
    ${t}`}function zn(){try{return window.localStorage}catch{return null}}function Jn(t,e=zn(),n=tn(),s=fn()){var kt;let o=Et(e);const i={formError:null,deadlineEdit:null,stepEdit:null,deletedTask:null,followUp:null,completedOpen:!1,patternsOpen:!1,saveFailed:e===null,sound:{settings:rn(e),playing:!1,playerLoaded:!1,playlistError:null},skippedFocus:[],strategyFilter:"all",toolkit:gn(e),importer:{preview:null,error:null,notice:null}};let r="";const y=l=>vn(window.location.hash)==="advice"?"advice":o.active?O(o.active,l)>0?"running":"check-in":"list",c=l=>{var g;const a=Date.now();r=y(a),i.sound.playing=s.isPlaying(),t.innerHTML=Kn(r==="advice"?le(Dn(i.strategyFilter,i.toolkit)):Wn(o,i,a)),D(a);const h=l==null?void 0:l();if(h){h.focus();return}document.documentElement.scrollTop=0,(g=t.querySelector("h2[tabindex]"))==null||g.focus()},p=(l,a)=>()=>[...t.querySelectorAll(`[data-action="${l}"]`)].find(h=>h.dataset.taskId===a)??null,f=l=>p("edit-deadline",l),d=()=>t.querySelector("#deadline-edit"),m=()=>t.querySelector("#step-edit"),k=()=>t.querySelector('[data-action="undo-delete"]'),w=()=>t.querySelector("#next-step"),S=()=>t.querySelector("#follow-up-title"),C=()=>t.querySelector(".hero-skip"),E=(l,a,h)=>()=>[...t.querySelectorAll(`[data-action="${l}"]`)].find(g=>g.dataset[a]===h)??null,D=l=>{const a=o.active;if(!a)document.title=tt,n.cancel();else if(O(a,l)>0){document.title=`${nt(O(a,l))} · ${tt}`,n.chimeAt(a.endsAt);return}else document.title=`${bn} · ${tt}`,a.endedEarlyAt!==void 0&&n.cancel();s.stop(),i.sound.playerLoaded=!1},A=l=>{o=l;try{if(!e)throw new Error("No storage");Me(e,o),i.saveFailed=!1}catch{i.saveFailed=!0}},v=(l,a)=>{A(l),c(a)},L=()=>{const l=Date.now();if(document.visibilityState==="hidden"){A(Ae(o,l));return}const a=o;if(A(et(o,l)),o!==a&&y(l)==="check-in"&&r==="check-in"){c();return}yt()},z=l=>{var h;const a=((h=i.deadlineEdit)==null?void 0:h.taskId)??"";i.deadlineEdit=null,v(l,f(a))},lt=(l,a)=>{i.formError=null,i.stepEdit=null,i.deletedTask=null,i.deadlineEdit=null,i.followUp=null,i.skippedFocus=[],A(Ee(o,l,a,Date.now())),i.sound.settings.playing&&o.active&&J(o.active.endsAt),c()},F=()=>ln(e,i.sound.settings),J=l=>{const{soundscape:a,volume:h}=i.sound.settings;s.play(a,h,l)},Kt=()=>{const l=t.querySelector(".sound-toggle");l&&(l.textContent=Rt(s.isPlaying()),l.setAttribute("aria-pressed",String(s.isPlaying())))},zt=()=>{const l=o.active;s.isPlaying()?(s.stop(),i.sound.settings.playing=!1):l&&O(l,Date.now())>0&&(J(l.endsAt),i.sound.settings.playing=!0),F(),Kt()},Jt=l=>{i.sound.settings.soundscape=l,F(),s.isPlaying()&&o.active&&J(o.active.endsAt)},Xt=l=>{i.sound.settings.volume=Math.min(1,Math.max(0,l/100)),s.setVolume(i.sound.settings.volume),F()},Zt=l=>{const a=l.querySelector("#playlist-link"),h=l.querySelector(".playlist-error"),g=at(a.value);if("error"in g){i.sound.playlistError=g.error,h.textContent=g.error,h.hidden=!1,a.focus();return}i.sound.playlistError=null,h.hidden=!0,i.sound.settings.playlistLink=a.value.trim(),i.sound.playerLoaded=!0,F(),t.querySelector(".mini-player-slot").innerHTML=Vt(g)},Qt=()=>{i.sound.settings.playlistLink="",i.sound.playerLoaded=!1,F(),t.querySelector(".mini-player-slot").innerHTML="";const l=t.querySelector("#playlist-link");l&&(l.value="",l.focus())},te=()=>t.querySelector("#import-preview-title"),X=()=>t.querySelector(".calendar-import [role=alert], .calendar-import [role=status]"),ct=l=>{i.importer={preview:l,error:null,notice:null},c(te)},q=l=>{i.importer={preview:null,error:l,notice:null},c(X)},ee=async l=>{var $;const a=($=l.files)==null?void 0:$[0];if(l.value="",!a)return;if(a.size>Be){q("That file is too big to be a calendar file. Choose the .ics file for one calendar.");return}let h;try{h=await a.text()}catch{q("Momentum couldn't read that file. Try choosing it again.");return}const g=Re(h,Date.now());"error"in g?q(g.error):g.events.length===0?q("No upcoming deadlines were found in that file (it looks at the next 4 months)."):ct({source:"file",label:a.name,events:g.events})},ne=l=>{const a=i.importer.preview;if(!a)return;const h=[...l.querySelectorAll('input[name="import-event"]:checked')].map(_=>a.events[Number(_.value)]).filter(_=>_!==void 0),g=a.source!=="file",{state:$,added:T}=me(o,h,Date.now(),g),M=T===1?"task":"tasks",V=T===0?"Nothing was added: no deadlines were ticked, or they're already in your tasks.":g?`Added ${T} demo ${M}, marked Demo.`:`Added ${T} ${M}. Each starts with the step “${Mt}”; use Edit step to make it yours.`;i.importer={preview:null,error:null,notice:V},v($,X)},dt=l=>{const a=l.target;a.id==="ics-file"&&ee(a)},Y=l=>{const a=l.target;a.name==="soundscape"&&Object.hasOwn(R,a.value)?Jt(a.value):a.id==="sound-volume"&&Xt(Number(a.value))},ut=()=>{const l=i.followUp,a=t.querySelector("#next-step");if(!l||!a)return!0;const h=vt(a.value);if(h){const g=a.value;return i.followUp={...l,editingStep:!0,error:h},c(w),t.querySelector("#next-step").value=g,!1}return o=$t(o,l.taskId,a.value),!0},pt=l=>{l.key!==W&&l.key!==null||(o=Et(e),c())},ft=()=>{i.formError=null,c()},mt=l=>{const a=l.target;a instanceof HTMLDetailsElement&&(a.classList.contains("completed-tasks")&&(i.completedOpen=a.open),a.classList.contains("patterns")&&(i.patternsOpen=a.open),a.classList.contains("sound-panel")&&(i.sound.settings.panelOpen=a.open,F()))},yt=()=>{const l=Date.now();if(y(l)!==r){c();return}const a=t.querySelector(".countdown");a&&o.active&&(a.textContent=nt(O(o.active,l)));const h=t.querySelector(".stats-bar");h&&o.active&&(h.innerHTML=Wt(o,l)),D(l)},ht=l=>{var T,M,V,_;n.unlock();const a=l.target.closest("[data-action]");if(!a)return;const h=Date.now(),g=i.followUp,$=a.dataset.taskId??"";switch(a.dataset.action){case"edit-deadline":i.stepEdit=null,i.deadlineEdit={taskId:$,error:null},c(d);break;case"edit-step":i.deadlineEdit=null,i.stepEdit={taskId:$,error:null},c(m);break;case"cancel-step-edit":{const b=((T=i.stepEdit)==null?void 0:T.taskId)??"";i.stepEdit=null,c(p("edit-step",b));break}case"delete-task":{const b=o.tasks.find(P=>P.id===$)??null;i.deletedTask=b,((M=i.stepEdit)==null?void 0:M.taskId)===$&&(i.stepEdit=null),((V=i.deadlineEdit)==null?void 0:V.taskId)===$&&(i.deadlineEdit=null),v(pe(o,$),k);break}case"undo-delete":{const b=i.deletedTask;i.deletedTask=null,b&&v(fe(o,b),p("delete-task",b.id));break}case"cancel-deadline":z(o);break;case"remove-deadline":z(wt(o,a.dataset.taskId??"",""));break;case"start":lt(a.dataset.taskId??"",Number(a.dataset.minutes));break;case"end-early":v(Te(o,h));break;case"check-in":{const b=((_=o.active)==null?void 0:_.taskId)??"",P=a.dataset.outcome;i.followUp={taskId:b,outcome:P,editingStep:!1,stepSaved:!1,error:null},v(Ie(o,P,h));break}case"start-now":g&&ut()&&lt(g.taskId,Number(a.dataset.minutes));break;case"shrink-step":g&&(i.followUp={...g,editingStep:!0,error:null}),c(w);break;case"cancel-step":g&&(i.followUp={...g,editingStep:!1,error:null}),c(S);break;case"dismiss-follow-up":i.followUp=null,c();break;case"demo-import":{const b=a.dataset.source;(b==="google"||b==="outlook")&&ct({source:b,label:st[b],events:Ve(b,h)});break}case"cancel-import":i.importer={preview:null,error:null,notice:null},c(()=>t.querySelector("#calendar-title"));break;case"remove-demo":i.importer={preview:null,error:null,notice:"Removed the demo tasks and any sessions on them."},v(he(o),X);break;case"strategy-filter":{const b=a.dataset.filter??"";mn(b)&&(i.strategyFilter=b),c(E("strategy-filter","filter",i.strategyFilter));break}case"toggle-toolkit":{const b=a.dataset.strategyId??"";i.toolkit=yn(i.toolkit,b),kn(e,i.toolkit);const P=E("toggle-toolkit","strategyId",b);c(()=>P()??E("strategy-filter","filter",i.strategyFilter)());break}case"skip-focus":i.skippedFocus=[...i.skippedFocus,$],c(C);break;case"toggle-sound":zt();break;case"remove-playlist":Qt();break;case"reopen":v(ge(o,a.dataset.taskId??""));break}},se=l=>{const a=l.dataset.taskId??"",h=l.elements.namedItem("deadline").value;if(h!==""&&!U(h)){i.deadlineEdit={taskId:a,error:"Pick a real date, or remove the deadline."},c(d);return}z(wt(o,a,h))},oe=l=>{const a=l.dataset.taskId??"",h=l.elements.namedItem("firstStep").value,g=vt(h);if(g){i.stepEdit={taskId:a,error:g},c(m),t.querySelector("#step-edit").value=h;return}i.stepEdit=null,v($t(o,a,h),p("edit-step",a))},gt=l=>{const a=l.target;if(a.classList.contains("deadline-editor")){l.preventDefault(),se(a);return}if(a.classList.contains("import-preview")){l.preventDefault(),ne(a);return}if(a.classList.contains("playlist-form")){l.preventDefault(),Zt(a);return}if(a.classList.contains("task-step-editor")){l.preventDefault(),oe(a);return}if(a.classList.contains("step-editor")){l.preventDefault(),i.followUp&&ut()&&(i.followUp={...i.followUp,editingStep:!1,stepSaved:!0,error:null},v(o,S));return}if(a.id!=="add-task")return;l.preventDefault();const h=a.elements.namedItem("title").value,g=a.elements.namedItem("firstStep").value,$=a.elements.namedItem("deadline").value,T=ue(h,g,$);if(i.formError=T,T){c(),t.querySelector("#task-title").value=h,t.querySelector("#first-step").value=g,t.querySelector("#deadline").value=$;const M={title:"#task-title",firstStep:"#first-step",deadline:"#deadline"};t.querySelector(M[T.field]).focus();return}v(Ct(o,h,g,Date.now(),$))};t.addEventListener("click",ht),t.addEventListener("submit",gt),t.addEventListener("toggle",mt,!0),t.addEventListener("change",Y),t.addEventListener("change",dt),t.addEventListener("input",Y),window.addEventListener("hashchange",ft),window.addEventListener("storage",pt),((kt=o.active)==null?void 0:kt.hiddenAt)!==void 0&&document.visibilityState!=="hidden"&&A(et(o,Date.now())),document.addEventListener("visibilitychange",L);const ie=window.setInterval(yt,1e3);return c(),()=>{n.cancel(),s.stop(),t.removeEventListener("click",ht),t.removeEventListener("submit",gt),t.removeEventListener("toggle",mt,!0),t.removeEventListener("change",Y),t.removeEventListener("change",dt),t.removeEventListener("input",Y),window.removeEventListener("hashchange",ft),window.removeEventListener("storage",pt),document.removeEventListener("visibilitychange",L),window.clearInterval(ie)}}const Ot=document.getElementById("app");Ot&&Jn(Ot);
