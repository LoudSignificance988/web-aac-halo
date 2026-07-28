// Lightweight TTS demo script
// - Uses Web Speech API (speechSynthesis) by default (free, runs in-browser)
// - Optional: POST to a remote TTS endpoint (e.g., Coqui) that returns audio blob

(function(){
  const textEl = document.getElementById('text');
  const voiceSelect = document.getElementById('voiceSelect');
  const rate = document.getElementById('rate');
  const pitch = document.getElementById('pitch');
  const rateVal = document.getElementById('rateVal');
  const pitchVal = document.getElementById('pitchVal');
  const speakBtn = document.getElementById('speak');
  const stopBtn = document.getElementById('stop');
  const pauseBtn = document.getElementById('pause');
  const resumeBtn = document.getElementById('resume');
  const useRemote = document.getElementById('useRemote');
  const remoteEndpoint = document.getElementById('remoteEndpoint');
  const downloadBtn = document.getElementById('downloadAudio');

  let voices = [];
  let lastAudioBlob = null;

  function populateVoices(){
    voices = speechSynthesis.getVoices() || [];
    voiceSelect.innerHTML = '';
    voices.forEach((v, i) => {
      const lab = `${v.name} — ${v.lang}${v.default ? ' (default)' : ''}`;
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = lab;
      voiceSelect.appendChild(opt);
    });
    if(!voices.length){
      const opt = document.createElement('option');
      opt.textContent = 'No voices available in this browser';
      voiceSelect.appendChild(opt);
    }
  }

  populateVoices();
  if (typeof speechSynthesis !== 'undefined') {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  rate.addEventListener('input', () => rateVal.textContent = rate.value);
  pitch.addEventListener('input', () => pitchVal.textContent = pitch.value);

  speakBtn.addEventListener('click', async () => {
    const text = textEl.value.trim();
    if(!text) return;

    if(useRemote.checked && remoteEndpoint.value.trim()){
      // POST to remote TTS endpoint (expects audio/* response)
      try{
        speakBtn.disabled = true;
        const resp = await fetch(remoteEndpoint.value, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({text, voice: voices[voiceSelect.value]?.name || '', rate: parseFloat(rate.value), pitch: parseFloat(pitch.value)})
        });
        if(!resp.ok) throw new Error('Remote TTS request failed: '+resp.status);
        const blob = await resp.blob();
        lastAudioBlob = blob;
        downloadBtn.disabled = false;
        const url = URL.createObjectURL(blob);
        const a = new Audio(url);
        a.onended = () => { URL.revokeObjectURL(url); speakBtn.disabled = false; };
        a.play();
      }catch(err){
        speakBtn.disabled = false;
        alert('Remote TTS error: '+err.message);
        console.error(err);
      }
      return;
    }

    // Use browser Speech Synthesis (free)
    if(typeof speechSynthesis === 'undefined'){
      alert('Speech Synthesis API is not available in this browser.');
      return;
    }

    // Cancel any existing utterances
    speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(text);
    u.rate = parseFloat(rate.value);
    u.pitch = parseFloat(pitch.value);

    if(voices[voiceSelect.value]){
      u.voice = voices[voiceSelect.value];
    }

    u.onend = () => {
      // finished
    };
    u.onerror = (e) => { console.error('Utterance error', e); };

    speechSynthesis.speak(u);
  });

  stopBtn.addEventListener('click', () => {
    if(typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  });
  pauseBtn.addEventListener('click', () => { if(typeof speechSynthesis !== 'undefined') speechSynthesis.pause(); });
  resumeBtn.addEventListener('click', () => { if(typeof speechSynthesis !== 'undefined') speechSynthesis.resume(); });

  downloadBtn.addEventListener('click', () => {
    if(!lastAudioBlob){ alert('No audio available to download.'); return; }
    const url = URL.createObjectURL(lastAudioBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tts.wav';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

})();
