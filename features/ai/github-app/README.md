Text-to-Speech feature (features/ai/github-app)

Overview
- This demo adds a lightweight in-browser TTS page that uses the Web Speech API (SpeechSynthesis).
- The Web Speech API is free and available in modern browsers; voice quality depends on the user's OS and browser — many systems provide very realistic voices.
- For strictly higher-quality or more controllable neural voices you can run an open-source TTS server (for example, Coqui TTS) and set the "Remote TTS endpoint" in the UI. The demo will POST JSON {text, voice, rate, pitch} and expect an audio/* response.

Files added
- features/ai/github-app/tts.html — simple UI to enter text, choose voice, rate/pitch, and use remote TTS.
- features/ai/github-app/tts.js — client-side logic for SpeechSynthesis and optional remote TTS playback/download.
- features/ai/github-app/README.md — this file.

How to use
1. Open features/ai/github-app/tts.html in a modern browser (Chrome, Edge, Firefox has limited support but usually works).
2. Enter text, choose a voice from the dropdown, adjust rate/pitch and click "Speak".
3. To use a higher-quality remote TTS server, enable "Use remote TTS" and enter an endpoint that accepts POST JSON and returns audio (wav/mp3). Example server: a Coqui TTS instance deployed behind HTTPS.

Notes & next steps
- The Web Speech API is the easiest fully-free option and will be realistic on systems that provide neural voices (for example, recent Windows/Mac builds and some Android devices).
- If you want me to integrate a hosted open-source model (for example, set up a small Coqui TTS Docker service and add a sample server call), tell me whether you want the server inside this repo (Dockerfile + model download) or instructions to connect to an externally hosted endpoint and I will add it.
