const PACKS={
  essential:{
    "Basics":{"Yes":"✅","No":"❌","Please":"🙏","Thank you":"🙏","Help":"🆘","Stop":"✋","More":"➕","Want":"✋","Sorry":"😔","Okay":"👌"},
    "Feelings":{"Happy":"😊","Sad":"😢","Hungry":"🤤","Thirsty":"😋","Tired":"😴","Hurt":"💢","Scared":"😱","Sick":"🤒"},
    "Needs":{"Bathroom":"🚽","Water":"💧","Food":"🍽️","Rest":"🛌","Blanket":"🛏️","Quiet":"🤫"},
    "Social":{"Hello":"👋","Goodbye":"👋","Good morning":"🌅","Good night":"🌙","Wait":"⏳"},
    "People":{"I":"👤","You":"🫵","Mom":"👩‍🦰","Dad":"👨‍🦰","Friend":"🧑‍🤝‍🧑"}
  },
  school:{
    "Basics":{"Yes":"✅","No":"❌","Please":"🙏","Thank you":"🙏","Help":"🆘","Stop":"✋","More":"➕","Sorry":"😔","Okay":"👌"},
    "Feelings":{"Happy":"😊","Sad":"😢","Hungry":"🤤","Thirsty":"😋","Tired":"😴","Confused":"😕","Excited":"🤩","Bored":"😑"},
    "School":{"Class":"🏫","Homework":"📝","Recess":"🛝","Lunch":"🍱","Teacher":"🧑‍🫁","Book":"📚","Pencil":"✏️","Desk":"🪑","Bathroom":"🚽"},
    "Social":{"Hello":"👋","Goodbye":"👋","Good morning":"🌅","Wait":"⏳","I don't know":"🤷","Repeat":"🔁"},
    "People":{"I":"👤","You":"🫵","Mom":"👩‍🦰","Dad":"👨‍🦰","Teacher":"🧑‍🫁","Friend":"🧑‍🤝‍🧑"}
  },
  home:{
    "Basics":{"Yes":"✅","No":"❌","Please":"🙏","Thank you":"🙏","Help":"🆘","Stop":"✋","More":"➕","Want":"✋","Sorry":"😔","Okay":"👌"},
    "Needs":{"Bathroom":"🚽","Water":"💧","Food":"🍽️","Rest":"🛌","Medicine":"💊","Blanket":"🛏️","Charge":"🔌","Warm":"♨️","Cold":"❄️"},
    "Feelings":{"Happy":"😊","Sad":"😢","Hungry":"🤤","Thirsty":"😋","Tired":"😴","Hurt":"💢","Sick":"🤒","Calm":"😌"},
    "Home":{"Bedroom":"🛏️","Kitchen":"🍳","Bathroom":"🚽","TV":"📺","Outside":"🌳","Car":"🚗"},
    "People":{"I":"👤","You":"🫵","Mom":"👩‍🦰","Dad":"👨‍🦰","Brother":"👦","Sister":"👧","Caregiver":"🤲"}
  },
  all:{
    "Food & Drink":{"Apple":"🍎","Banana":"🍌","Bread":"🍞","Milk":"🥛","Water":"💧","Juice":"🧃","Rice":"🍚","Meat":"🥩","Cheese":"🧀","Egg":"🥚","Soup":"🥣","Cake":"🍰","Cookie":"🍪","Pizza":"🍕","Burger":"🍔","Fries":"🍟","Fish":"🐟","Pasta":"🍝","Salad":"🥗","Coffee":"☕","Tea":"🍵","Soda":"🥤","Sandwich":"🥪","Ice cream":"🍦","Snack":"🍿"},
    "Home":{"House":"🏠","Bedroom":"🛏️","Kitchen":"🍳","Bathroom":"🚽","Door":"🚪","Window":"🪟","Chair":"🪑","Table":"🛋️","Light":"💡","Bed":"🛏️","Sofa":"🛋️","TV":"📺","Fridge":"🧊","Phone":"📱","Keys":"🔑","Blanket":"🛏️","Pillow":"😴","Shower":"🚿"},
    "Places":{"School":"🏫","Park":"🏞️","Store":"🪪","Hospital":"🏥","Library":"📚","Beach":"🏖️","Restaurant":"🍴","Gym":"🏋️","Zoo":"🦁","Cafe":"☕","Bakery":"🥐","City":"🌆","Forest":"🌲","Mountain":"⛰️"},
    "Feelings":{"Happy":"😊","Sad":"😢","Angry":"😡","Tired":"😴","Excited":"🤩","Scared":"😱","Calm":"😌","Surprised":"😲","Bored":"😑","Proud":"😌","Worried":"😟","Joyful":"😁","Confused":"😕","Hungry":"🤤","Thirsty":"😋","Sick":"🤒","Okay":"👌","Frustrated":"😤","Grateful":"🙏","Nervous":"😬","Pain":"💢","Anxious":"😰","Loved":"🥰"},
    "People":{"I":"👤","You":"🫵","Mom":"👩‍🦰","Dad":"👨‍🦰","Brother":"👦","Sister":"👧","Friend":"🧑‍🤝‍🧑","Teacher":"🧑‍🫁","Doctor":"🩺","Baby":"👶","Grandma":"👵","Grandpa":"👴","Caregiver":"🤲","We":"👫","They":"👥","Family":"👨‍👩‍👧"},
    "Actions":{"Go":"🏃","Stop":"✋","Come":"👋","Look":"👀","Listen":"👂","Eat":"🍽️","Drink":"🥤","Play":"🎮","Read":"📖","Write":"✏️","Open":"🔓","Close":"🔒","Give":"🎁","Take":"🤲","Help":"🆘","Wait":"⏳","Wash":"🧼","Walk":"🚶","Run":"🏃","Sleep":"😴","Jump":"🤸","Hug":"🤗","Cry":"😭","Laugh":"😂","Smile":"😊","Wave":"👋"},
    "Needs":{"Help":"🆘","Bathroom":"🚽","Hungry":"🤤","Thirsty":"😋","Doctor":"🩺","Rest":"🛌","Sleep":"😴","Water":"💧","Food":"🍽️","Medicine":"💊","Charge":"🔌","Warm":"♨️","Cold":"❄️","Blanket":"🛏️","Pain relief":"💢","Emergency":"🆘","Quiet":"🤫","Break":"⏸️"},
    "Animals":{"Dog":"🐶","Cat":"🐱","Bird":"🐦","Fish":"🐟","Horse":"🐴","Cow":"🐄","Pig":"🐖","Rabbit":"🐇","Monkey":"🐒","Lion":"🦁","Tiger":"🐯","Elephant":"🐘","Bear":"🐻","Frog":"🐸","Duck":"🦆","Owl":"🦉","Penguin":"🐧","Fox":"🦊","Panda":"🐼","Shark":"🦈"},
    "Things":{"Book":"📚","Phone":"📱","Computer":"💻","Pen":"🖊️","Bag":"👜","Shoes":"👟","Watch":"⌚","Cup":"☕","Plate":"🍽️","Backpack":"🎒","Umbrella":"☂️","Toy":"🧸","Keys":"🔑","Scissors":"✂️","Bottle":"🍶","Wallet":"👛","Charger":"🔌","Tablet":"📱","Ball":"⚽","Bike":"🚲"},
    "Questions":{"What":"❓","Where":"📍","When":"⏰","Who":"👤","Why":"🤔","How":"🔧","Yes":"✅","No":"❌","Maybe":"🤷","I don't know":"🤷","Please":"🙏","Thank you":"🙏","Sorry":"😔","Help me":"🆘","Wait":"⏳","Repeat":"🔁","More":"➕","Less":"➖"},
    "Social":{"Hello":"👋","Goodbye":"👋","Good morning":"🌅","Good night":"🌙","Please":"🙏","Thank you":"🙏","Sorry":"😔","Excuse me":"🙋","Love you":"❤️","Good job":"👍","I agree":"✅","I disagree":"❌","Come with me":"🤝"},
    "Time":{"Now":"ⱱ️","Later":"⏰","Soon":"⌛","Today":"📅","Tomorrow":"🌅","Yesterday":"⬅️","Morning":"🌄","Afternoon":"☀️","Evening":"🌆","Night":"🌙","Weekend":"🎉"},
    "Transport":{"Car":"🚗","Bus":"🚌","Train":"🚂","Plane":"✈️","Bike":"🚲","Walk":"🚶","Taxi":"🚕","Truck":"🚛","Ambulance":"🚑","Wheelchair":"♿"},
    "Weather":{"Sunny":"☀️","Cloudy":"☁️","Rain":"🌧️","Snow":"❄️","Hot":"🔥","Cold":"🥶","Storm":"⛈️","Rainbow":"🌈","Wind":"💨"},
    "School":{"Class":"🏫","Homework":"📝","Test":"✏️","Lunch":"🍱","Recess":"🛝","Teacher":"🧑‍🫁","Pencil":"✏️","Book":"📚","Desk":"🪑","Art":"🎨","Music":"🎵","Math":"➕","Reading":"📖","Science":"🔬","Computer":"💻","Bus":"🚌"},
    "Health":{"Pain":"💢","Doctor":"🩺","Medicine":"💊","Hospital":"🏥","Ambulance":"🚑","Headache":"🤕","Fever":"🌡️","Nausea":"🤢","Dizzy":"😵","Tired":"😴","Sick":"🤒","Allergy":"🤧","Cough":"🤧"}
  }
};

const EMOJI_MAP={
  happy:"😊",sad:"😢",angry:"😡",love:"❤️",food:"🍽️",water:"💧",home:"🏠",
  school:"🏫",play:"🎮",sleep:"😴",run:"🏃",walk:"🚶",eat:"🍽️",drink:"🥤",
  help:"🆘",yes:"✅",no:"❌",please:"🙏",sorry:"😔",hello:"👋",bye:"👋",
  dog:"🐶",cat:"🐱",bird:"🐦",book:"📚",ball:"⚽",car:"🚗",bus:"🚌",
  bathroom:"🚽",bed:"🛏️",doctor:"🩺",medicine:"💊",music:"🎵",art:"🎨",
  friend:"🧑‍🤝‍🧑",family:"👨‍👩‍👧",mom:"👩‍🦰",dad:"👨‍🦰",baby:"👶",teacher:"🧑‍🫁",
  hurt:"💢",sick:"🤒",scared:"😱",excited:"🤩",tired:"😴",bored:"😑",
  hot:"🔥",cold:"❄️",sun:"☀️",rain:"🌧️",snow:"❄️",tree:"🌳",flower:"🌸",
  phone:"📱",computer:"💻",money:"💵",time:"⏰",stop:"✋",go:"🏃",more:"➕",
  want:"✋",need:"🆘",wait:"⏳",done:"✅",good:"👍",bad:"👎",big:"🔝",
  small:"🔽",fast:"⚡",slow:"🐢"
};

const KEY='halo_aac_v2';
const SYNC_KEYS=['profiles','currentProfile','customWords','removedWords','wordPack','sysVoice','accent','accentDark','bg','setup','portalHash'];
const DEFAULTS={
  profiles:{},currentProfile:null,sysVoice:null,
  accent:'#2c7be5',accentDark:'#0b63d6',bg:'#f0f2f5',
  setup:false,portalHash:null,wordPack:'essential',
  customWords:{},removedWords:{}
};

let data=(()=>{
  try{
    const r=localStorage.getItem(KEY);
    return r ? {...DEFAULTS,...JSON.parse(r)} : {...DEFAULTS};
  }catch(e){
    return {...DEFAULTS};
  }
})();

let _fireUser=null;
let _cloudTimer=null;

function save(){
  localStorage.setItem(KEY,JSON.stringify(data));
  syncToCloud();
}

// ── Firebase Auth (Google) + Firestore Cloud Sync ──

const FIREBASE_CONFIG={
  apiKey: "AIzaSyB79mC7YqkZeNvdowRFkbBfu53PV2Qo7pk",
  authDomain: "halo-add.firebaseapp.com",
  projectId: "halo-add",
  storageBucket: "halo-add.firebasestorage.app",
  messagingSenderId: "144851220987",
  appId: "1:144851220987:web:bd57adec75e2daafea335e"
};

let _fireAuth=null;
let _fireDb=null;
let _fireInitDone=false;
let _syncing=false;

function ensureFirebase(){
  if(_fireInitDone)return true;
  if(typeof firebase==='undefined'){
    console.warn('Firebase SDK not loaded');
    return false;
  }
  try{
    firebase.initializeApp(FIREBASE_CONFIG);
    _fireAuth=firebase.auth();
    _fireDb=firebase.firestore();
    _fireAuth.onAuthStateChanged(handleAuth);
    _fireInitDone=true;
    return true;
  }catch(e){
    console.warn('Firebase init:',e);
    return false;
  }
}

async function handleAuth(user){
  _fireUser=user;
  updateAuthUI();
  if(user){
    await loadFromCloud();
  }
}

async function toggleAuth(){
  if(_fireUser){
    await _fireAuth.signOut();
    _fireUser=null;
    updateAuthUI();
    hideSyncBadge();
  }else{
    await loginGoogle();
  }
}
window.toggleAuth=toggleAuth;

async function loginGoogle(){
  if(!ensureFirebase()){
    alert('Google sign-in not available. Check adblocker or network.');
    return;
  }
  try{
    const prov=new firebase.auth.GoogleAuthProvider();
    await _fireAuth.signInWithPopup(prov);
  }catch(e){
    if(e.code==='auth/popup-blocked')alert('Popup blocked! Allow popups then try again.');
    else if(e.code!=='auth/popup-closed-by-user')console.warn('Sign-in:',e);
  }
}

function updateAuthUI(){
  const btn=document.getElementById('authBtn');
  if(!btn)return;
  const cBtn=document.getElementById('cloudAuthBtn');
  const cStatus=document.getElementById('cloudStatus');
  if(_fireUser){
    const name=_fireUser.displayName||_fireUser.email||'User';
    btn.innerHTML='👤 '+name+' Sign&nbsp;out';
    if(cBtn)cBtn.innerHTML='Sign out';
    if(cStatus)cStatus.innerHTML='☁️ Signed in as <strong>'+name+'</strong>. Data syncs to cloud.';
    showSyncBadge('☁️ Synced',false);
  }else{
    btn.innerHTML='👤 Sign&nbsp;in&nbsp;with&nbsp;Google';
    if(cBtn)cBtn.innerHTML='👤 Sign&nbsp;in&nbsp;with&nbsp;Google';
    if(cStatus)cStatus.innerHTML='Sign in with Google to sync across devices.';
    hideSyncBadge();
  }
}

function showSyncBadge(text,syncing){
  const b=document.getElementById('syncBadge');
  if(!b)return;
  b.textContent=text;
  b.classList.add('show');
  b.classList.toggle('syncing',syncing);
}

function hideSyncBadge(){
  const b=document.getElementById('syncBadge');
  if(!b)return;
  b.classList.remove('show');
}

async function loadFromCloud(){
  if(!_fireUser||!_fireDb)return;
  try{
    showSyncBadge('☁️ Loading…',true);
    const snap=await _fireDb.collection('users').doc(_fireUser.uid).get();
    if(snap.exists){
      const remote=snap.data();
      const keys=['profiles','currentProfile','customWords','removedWords','wordPack','sysVoice','accent','accentDark','bg','setup','portalHash'];
      keys.forEach(k=>{
        if(remote[k]!==undefined&&remote[k]!==null){
          if(['customWords','removedWords'].includes(k)){
            data[k]=remote[k];
          }else if(remote[k]&&typeof remote[k]==='object'&&!Array.isArray(remote[k])){
            data[k]={...(data[k]||{}),...remote[k]};
          }else{
            data[k]=remote[k];
          }
        }
      });
      localStorage.setItem(KEY,JSON.stringify(data));
    }
    showSyncBadge('☁️ Synced',false);
    buildCats();buildGrid(document.getElementById('wordSearch').value);refreshPS();refreshPD();
  }catch(e){
    console.warn('Cloud load:',e);
    showSyncBadge('☁️ Sync error',false);
  }
}

function syncToCloud(){
  if(!_fireUser||!_fireDb)return;
  if(_cloudTimer)clearTimeout(_cloudTimer);
  _cloudTimer=setTimeout(async()=>{
    _syncing=true;
    showSyncBadge('☁️ Saving…',true);
    try{
      const payload={};
      SYNC_KEYS.forEach(k=>{payload[k]=data[k];});
      await _fireDb.collection('users').doc(_fireUser.uid).set(payload,{merge:true});
      showSyncBadge('☁️ Synced',false);
      setTimeout(()=>{hideSyncBadge();_syncing=false;},2000);
    }catch(e){
      console.warn('Firestore sync:',e);
      showSyncBadge('☁️ Sync error',false);
      _syncing=false;
    }
  },500);
}

ensureFirebase();

// ── Rest of app ──

function b64e(o){return btoa(unescape(encodeURIComponent(JSON.stringify(o))));}
function b64d(s){return JSON.parse(decodeURIComponent(escape(atob(s))));}

function simpleHash(s){let h=0;for(let i=0;i<s.length;i++)h=Math.imul(31,h)+s.charCodeAt(i)|0;return h.toString(36);}

let curCat=null;
let curSysVoice=data.sysVoice||null;
let wizardRole='parent';
let wizardPack='essential';
let selectedEmoji='❓';
let dictWord='';

const $=id=>document.getElementById(id);
const msgBox=$('message'),predictions=$('predictions'),speakBtn=$('speakBtn'),
      stopBtn=$('stopBtn'),bsBtn=$('bsBtn'),
      rateSlider=$('rateSlider'),rateVal=$('rateVal'),
      dot=$('dot'),ttsStatus=$('ttsStatus'),
      wordGrid=$('wordGrid'),gridTitle=$('gridTitle'),wordSearch=$('wordSearch'),
      catWrap=$('catWrap'),profileSel=$('profileSelect'),profileData=$('profileData');

function setStatus(msg,speaking=false){ttsStatus.textContent=msg;dot.classList.toggle('on',speaking);}
function stripEmoji(s){return s.replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\u200d\uFE0F]/gu,'').replace(/\s+/g,' ').trim();}
function speakSystem(text){
  speechSynthesis.cancel();
  const voices=speechSynthesis.getVoices();
  const u=new SpeechSynthesisUtterance(text);
  const pref=curSysVoice?voices.find(v=>v.name===curSysVoice):null;
  const eng=voices.find(v=>v.lang.startsWith('en-US'))||voices.find(v=>v.lang.startsWith('en'));
  const voice=pref||eng||voices[0];
  if(voice)u.voice=voice;
  u.rate=parseFloat(rateSlider.value);u.pitch=1;u.volume=1;
  u.onstart=()=>setStatus('▶ '+(voice?.name||'System'),true);
  u.onend=()=>setStatus('Done ✓');
  u.onerror=e=>setStatus('Error: '+e.error);
  speechSynthesis.speak(u);
}

speakBtn.onclick=()=>{
  const raw=msgBox.value.trim();
  if(!raw){setStatus('Nothing to say');return;}
  speakSystem(stripEmoji(raw)||raw);
};

stopBtn.onclick=()=>{
  speechSynthesis.cancel();
  setStatus('Stopped');
};

rateSlider.oninput=()=>{rateVal.textContent=parseFloat(rateSlider.value).toFixed(1)+'×';};

function getActiveWords(){
  const pack=PACKS[data.wordPack||'essential'];
  const merged={};
  Object.entries(pack).forEach(([cat,words])=>{
    merged[cat]={};
    Object.entries(words).forEach(([w,e])=>{
      const key=cat+'::'+w;
      if(!data.removedWords||!data.removedWords[key]) merged[cat][w]=e;
    });
  });
  if(data.customWords){
    Object.entries(data.customWords).forEach(([cat,words])=>{
      if(!merged[cat])merged[cat]={};
      Object.entries(words).forEach(([w,e])=>merged[cat][w]=e);
    });
  }
  return merged;
}

function buildGrid(filter=''){
  const words=getActiveWords();
  const catWords=words[curCat]||{};
  gridTitle.textContent=curCat||'Words';
  wordGrid.innerHTML='';
  Object.entries(catWords)
    .filter(([w])=>!filter||w.toLowerCase().includes(filter.toLowerCase()))
    .forEach(([w,e])=>{
      const btn=document.createElement('button');
      btn.className='word-btn';btn.type='button';
      btn.innerHTML='<span class="word-emoji">'+(e||'❓')+'</span><span class="word-text">'+w+'</span>';
      btn.onclick=()=>{msgBox.value=msgBox.value?(msgBox.value.trimEnd()+' '+w):w;updatePredictions();speakSystem(w);};
      wordGrid.appendChild(btn);
    });
}

wordSearch.addEventListener('input',e=>buildGrid(e.target.value));

function buildCats(){
  const words=getActiveWords();
  const cats=Object.keys(words).filter(c=>Object.keys(words[c]).length>0);
  catWrap.innerHTML='';
  if(!cats.length)return;
  if(!curCat||!cats.includes(curCat))curCat=cats[0];
  cats.forEach(cat=>{
    const b=document.createElement('button');
    b.className='cat-btn'+(cat===curCat?' active':'');
    b.textContent=cat;b.type='button';
    b.onclick=()=>{curCat=cat;buildCats();buildGrid(wordSearch.value);};
    catWrap.appendChild(b);
  });
}

function allWords(){
  const s=new Set();
  const words=getActiveWords();
  Object.values(words).forEach(c=>Object.keys(c).forEach(w=>s.add(w)));
  return[...s];
}

function updatePredictions(){
  predictions.innerHTML='';
  const last=msgBox.value.trim().split(/\s+/).pop().toLowerCase();
  if(!last)return;
  allWords().filter(w=>w.toLowerCase().startsWith(last)&&w.toLowerCase()!==last).slice(0,6)
    .forEach(m=>{
      const li=document.createElement('li');li.textContent=m;
      li.onclick=()=>{const arr=msgBox.value.trim().split(/\s+/);arr[arr.length-1]=m;msgBox.value=arr.join(' ');predictions.innerHTML='';};
      predictions.appendChild(li);
    });
}

msgBox.addEventListener('input',updatePredictions);

function refreshPS(){
  profileSel.innerHTML='';
  Object.keys(data.profiles).forEach(n=>{const o=document.createElement('option');o.value=n;o.textContent=n;profileSel.appendChild(o);});
  if(data.currentProfile)profileSel.value=data.currentProfile;
  refreshPD();
}

function refreshPD(){
  if(!data.currentProfile){profileData.textContent='No profile';return;}
  const words=getActiveWords();
  const total=Object.values(words).reduce((a,c)=>a+Object.keys(c).length,0);
  profileData.innerHTML='<b>'+data.currentProfile+'</b><br>Pack: '+capitalize(data.wordPack||'essential')+'<br>Visible words: '+total+'<br>Custom added: '+Object.values(data.customWords||{}).reduce((a,c)=>a+Object.keys(c).length,0);
}

function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}

profileSel.onchange=e=>{data.currentProfile=e.target.value;save();buildCats();buildGrid();refreshPD();};
$('addProfileBtn').onclick=()=>{const n=prompt('Profile name:');if(!n)return;data.profiles[n]={};data.currentProfile=n;save();refreshPS();buildCats();buildGrid();};
$('delProfileBtn').onclick=()=>{if(!data.currentProfile||!confirm('Delete "'+data.currentProfile+'"?'))return;delete data.profiles[data.currentProfile];data.currentProfile=Object.keys(data.profiles)[0]||null;save();refreshPS();buildCats();buildGrid();};

function openSettings(){$('settingsOverlay').classList.add('open');$('sysPickerWrap').classList.add('show');buildSysVoiceList();}
function closeSettings(){$('settingsOverlay').classList.remove('open');}

function buildSysVoiceList(){
  const vl=$('sysVoiceList');vl.innerHTML='';
  const voices=speechSynthesis.getVoices().filter(v=>v.lang.startsWith('en'));
  if(!voices.length){vl.innerHTML='<div style="padding:10px;color:#999;font-size:13px">No voices found</div>';return;}
  voices.forEach(v=>{
    const row=document.createElement('div');row.className='v-row'+(v.name===curSysVoice?' sel':'');
    row.innerHTML='<span class="v-name">'+v.name+'</span><span class="v-lang">'+v.lang+'</span><button class="v-play">▶</button>';
    row.querySelector('.v-play').onclick=e=>{e.stopPropagation();speechSynthesis.cancel();const u=new SpeechSynthesisUtterance('Hello, I am '+v.name);u.voice=v;speechSynthesis.speak(u);};
    row.onclick=()=>{curSysVoice=v.name;data.sysVoice=v.name;save();vl.querySelectorAll('.v-row').forEach(r=>r.classList.remove('sel'));row.classList.add('sel');};
    vl.appendChild(row);
  });
}
speechSynthesis.onvoiceschanged=buildSysVoiceList;
setTimeout(buildSysVoiceList,400);

$('swatchRow').querySelectorAll('.swatch').forEach(sw=>{
  sw.onclick=()=>{
    applyAccent(sw.dataset.a,sw.dataset.d);
    $('swatchRow').querySelectorAll('.swatch').forEach(s=>s.classList.remove('active'));
    sw.classList.add('active');
    data.accent=sw.dataset.a;data.accentDark=sw.dataset.d;save();
    $('accentPicker').value=sw.dataset.a;
  };
});
$('accentPicker').oninput=e=>{applyAccent(e.target.value,e.target.value);$('swatchRow').querySelectorAll('.swatch').forEach(s=>s.classList.remove('active'));data.accent=e.target.value;data.accentDark=e.target.value;save();};
$('bgPicker').oninput=e=>{document.body.style.background=e.target.value;data.bg=e.target.value;save();};
function applyAccent(a,d){
  document.documentElement.style.setProperty('--accent',a);
  document.documentElement.style.setProperty('--accent-dark',d);
  document.documentElement.style.setProperty('--accent-light',a+'28');
}

function doExportFn(){const code=b64e(data);if(navigator.clipboard?.writeText)navigator.clipboard.writeText(code).then(()=>alert('Copied!'));else prompt('Copy:',code);$('importArea').value=code;}
function doImportFn(){const txt=$('importArea').value.trim();if(!txt)return alert('Paste code first');try{const p=b64d(txt);if(p?.profiles){Object.assign(data,p);save();buildCats();buildGrid();refreshPS();refreshPD();alert('Imported!');}else alert('Invalid code');}catch(e){alert('Import failed');}}
$('doExport').onclick=doExportFn;
$('doImport').onclick=doImportFn;
$('exportBtn').onclick=doExportFn;
$('importTopBtn').onclick=()=>{const c=prompt('Paste code:');if(!c)return;$('importArea').value=c;doImportFn();};

function showStep(id){document.querySelectorAll('.modal-step').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');}
function wGoStep2(role){wizardRole=role;showStep('wStep2');}
function wBack(){
  const active=document.querySelector('.modal-step.active');
  if(active.id==='wStep2')showStep('wStep1');
  else if(active.id==='wStep3')showStep('wStep2');
}
function selectPack(el){
  document.querySelectorAll('.pack-card').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  wizardPack=el.dataset.pack;
}
function wStep2Next(){
  if(wizardRole==='parent') showStep('wStep3');
  else showStep('wStep3b');
}
function wFinish(){
  const p1=$('pw1').value,p2=$('pw2').value;
  if(!p1||p1!==p2){$('pwErr').classList.add('show');return;}
  $('pwErr').classList.remove('show');
  data.portalHash=simpleHash(p1);
  data.wordPack=wizardPack;
  data.setup=true;
  save();
  $('wizardOverlay').classList.remove('open');
  buildCats();buildGrid();refreshPD();
}
function wFinishChild(){
  data.wordPack=wizardPack;
  data.setup=true;
  save();
  $('wizardOverlay').classList.remove('open');
  buildCats();buildGrid();refreshPD();
}

function openPortalPrompt(){
  if(!data.portalHash){
    if(confirm('No parent password is set yet. Open portal anyway?')){openPortal();} return;
  }
  $('portalPwErr').classList.remove('show');
  $('portalPwInput').value='';
  $('portalPromptOverlay').classList.add('open');
  setTimeout(()=>$('portalPwInput').focus(),100);
}
function closePortalPrompt(){$('portalPromptOverlay').classList.remove('open');}
function checkPortalPw(){
  const val=$('portalPwInput').value;
  if(simpleHash(val)===data.portalHash){closePortalPrompt();openPortal();}
  else{$('portalPwErr').classList.add('show');}
}
$('portalPwInput').addEventListener('keydown',e=>{if(e.key==='Enter')checkPortalPw();});

function openPortal(){
  switchTab(document.querySelector('.ptab.active'),'tabAdd');
  document.querySelectorAll('.ptab').forEach((t,i)=>t.classList.toggle('active',i===0));
  document.querySelectorAll('.ptab-panel').forEach((p,i)=>p.classList.toggle('active',i===0));
  populateCatPicker();
  buildWordTable();
  updatePackLabel();
  $('portalOverlay').classList.add('open');
}
function closePortal(){$('portalOverlay').classList.remove('open');}

function switchTab(el,panelId){
  document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ptab-panel').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  $(panelId).classList.add('active');
  if(panelId==='tabManage')buildWordTable();
  if(panelId==='tabSettings')updatePackLabel();
}

async function lookupWord(){
  const w=$('dictInput').value.trim().toLowerCase();
  if(!w)return;
  dictWord=w;
  try{
    const res=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(w));
    const json=await res.json();
    if(!Array.isArray(json)||!json[0]){showDictResult(w,'No definition found.');return;}
    const entry=json[0];
    const def=entry.meanings?.[0]?.definitions?.[0]?.definition||'No definition found.';
    showDictResult(entry.word||w,def);
  }catch(e){showDictResult(w,'Could not reach dictionary. You can still add the word.');}
}

function showDictResult(word,def){
  $('dictWordTitle').textContent=word;
  $('dictDef').textContent=def;
  const row=$('emojiPickRow');row.innerHTML='';
  const lower=word.toLowerCase();
  const suggestions=[];
  Object.entries(EMOJI_MAP).forEach(([k,e])=>{if(lower.includes(k)||k.includes(lower))suggestions.push(e);});
  ['❓','🔤','💬','⭐','🌟','🎯'].forEach(e=>{if(!suggestions.includes(e))suggestions.push(e);});
  const shown=[...new Set(suggestions)].slice(0,10);
  selectedEmoji=shown[0]||'❓';
  shown.forEach((e,i)=>{
    const span=document.createElement('span');
    span.className='emoji-opt'+(i===0?' sel':'');
    span.textContent=e;
    span.onclick=()=>{selectedEmoji=e;row.querySelectorAll('.emoji-opt').forEach(s=>s.classList.remove('sel'));span.classList.add('sel');};
    row.appendChild(span);
  });
  $('dictResult').classList.add('show');
}

function populateCatPicker(){
  const sel=$('addWordCat');sel.innerHTML='';
  const allCats=[...Object.keys(PACKS[data.wordPack||'essential']),...Object.keys(data.customWords||{}),'Custom'];
  [...new Set(allCats)].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;sel.appendChild(o);});
}

function confirmAddWord(){
  if(!dictWord&&!$('dictInput').value.trim()){alert('Look up a word first.');return;}
  const word=$('dictWordTitle').textContent||$('dictInput').value.trim();
  const cat=$('addWordCat').value||'Custom';
  if(!data.customWords)data.customWords={};
  if(!data.customWords[cat])data.customWords[cat]={};
  data.customWords[cat][word]=selectedEmoji;
  if(data.removedWords){delete data.removedWords[cat+'::'+word];}
  save();
  buildCats();buildGrid();refreshPD();
  const msg=$('addWordMsg');
  msg.textContent='✓ "'+word+'" added to '+cat+'!';
  msg.style.display='block';
  setTimeout(()=>msg.style.display='none',2500);
  $('dictResult').classList.remove('show');
  $('dictInput').value='';
  dictWord='';
}

function buildWordTable(){
  const body=$('wordTableBody');body.innerHTML='';
  const filter=$('portalSearch').value.toLowerCase();
  const words=getActiveWords();
  const rows=[];
  Object.entries(words).forEach(([cat,catWords])=>{
    Object.entries(catWords).forEach(([w,e])=>{
      if(!filter||w.toLowerCase().includes(filter))rows.push({cat,w,e});
    });
  });
  rows.sort((a,b)=>a.w.localeCompare(b.w));
  rows.forEach(({cat,w,e})=>{
    const tr=document.createElement('tr');
    tr.innerHTML='<td>'+e+'</td><td>'+w+'</td><td style="color:#999;font-size:12px">'+cat+'</td><td><button class="del-word-btn" title="Remove">🗑️</button></td>';
    tr.querySelector('.del-word-btn').onclick=()=>removeWord(cat,w);
    body.appendChild(tr);
  });
  if(!rows.length){body.innerHTML='<tr><td colspan="4" style="padding:12px;color:#999;text-align:center">No words found</td></tr>';}
}

function removeWord(cat,word){
  if(!confirm('Remove "'+word+'" from '+cat+'?'))return;
  if(data.customWords?.[cat]?.[word]!==undefined){
    delete data.customWords[cat][word];
    if(!Object.keys(data.customWords[cat]).length)delete data.customWords[cat];
  } else {
    if(!data.removedWords)data.removedWords={};
    data.removedWords[cat+'::'+word]=true;
  }
  save();
  buildWordTable();
  buildCats();buildGrid();refreshPD();
}

function updatePackLabel(){
  $('currentPackLabel').textContent=capitalize(data.wordPack||'essential');
  document.querySelectorAll('#portalPackGrid .pack-card').forEach(c=>{
    c.classList.toggle('sel',c.dataset.pack===data.wordPack);
  });
}
function selectPortalPack(el){
  document.querySelectorAll('#portalPackGrid .pack-card').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  data.wordPack=el.dataset.pack;
  save();
  updatePackLabel();
  buildCats();buildGrid();refreshPD();
}
function changePassword(){
  const p1=$('newPw1').value,p2=$('newPw2').value;
  if(!p1||p1!==p2){$('changePwErr').classList.add('show');return;}
  $('changePwErr').classList.remove('show');
  data.portalHash=simpleHash(p1);save();
  $('newPw1').value='';$('newPw2').value='';
  alert('Password updated!');
}

document.querySelectorAll('#portalPackGrid .pack-card').forEach(c=>{
  c.onclick=()=>selectPortalPack(c);
});

function init(){
  if(!Object.keys(data.profiles).length){data.profiles={Default:{}};data.currentProfile='Default';save();}
  if(!data.currentProfile)data.currentProfile=Object.keys(data.profiles)[0];
  if(data.accent)applyAccent(data.accent,data.accentDark||data.accent);
  if(data.bg){document.body.style.background=data.bg;$('bgPicker').value=data.bg;}
  if(data.accent){$('accentPicker').value=data.accent;$('swatchRow').querySelectorAll('.swatch').forEach(s=>s.classList.toggle('active',s.dataset.a===data.accent));}
  refreshPS();buildCats();buildGrid();refreshPD();
  $('bsBtn').onclick=()=>{const arr=msgBox.value.trim().split(/\s+/);arr.pop();msgBox.value=arr.join(' ');updatePredictions();};
  if(!data.setup){
    $('wizardOverlay').classList.add('open');
  }
}

init();
