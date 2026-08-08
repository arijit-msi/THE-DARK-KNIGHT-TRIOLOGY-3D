// Web Audio API procedural sound engine for Gotham ambiance

class GothamAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.rainGain = null;
    this.droneGain = null;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    if (this.isPlaying) {
      this.stopAll();
      this.isPlaying = false;
    } else {
      this.startAmbiance();
      this.isPlaying = true;
    }
    return this.isPlaying;
  }

  startAmbiance() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // --- 1. RAIN SYNTHESIS (Pink Noise + Lowpass Filter) ---
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.05; // volume
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const rainFilter = this.ctx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.setValueAtTime(1000, now);

    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.setValueAtTime(0.01, now);
    this.rainGain.gain.linearRampToValueAtTime(0.08, now + 3);

    whiteNoise.connect(rainFilter);
    rainFilter.connect(this.rainGain);
    this.rainGain.connect(this.ctx.destination);
    whiteNoise.start();
    this.rainNode = whiteNoise;

    // --- 2. NOLAN SUB-BASS DRONE (Dual Low-Frequency Sawtooth) ---
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc2 = this.ctx.createOscillator();

    this.droneOsc1.type = 'sawtooth';
    this.droneOsc2.type = 'sine';

    this.droneOsc1.frequency.setValueAtTime(45, now); // Low F#
    this.droneOsc2.frequency.setValueAtTime(45.5, now); // Detuned beat

    const droneFilter = this.ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(120, now);

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, now);
    this.droneGain.gain.linearRampToValueAtTime(0.05, now + 4);

    this.droneOsc1.connect(droneFilter);
    this.droneOsc2.connect(droneFilter);
    droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);

    this.droneOsc1.start();
    this.droneOsc2.start();
  }

  stopAll() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (this.rainGain) {
      this.rainGain.gain.linearRampToValueAtTime(0.0001, now + 1);
    }
    if (this.droneGain) {
      this.droneGain.gain.linearRampToValueAtTime(0.0001, now + 1);
    }
    setTimeout(() => {
      try {
        if (this.rainNode) this.rainNode.stop();
        if (this.droneOsc1) this.droneOsc1.stop();
        if (this.droneOsc2) this.droneOsc2.stop();
      } catch (e) {}
    }, 1200);
  }

  playThunder() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < output.length; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.4));
    }
    const thunder = this.ctx.createBufferSource();
    thunder.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2);

    thunder.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    thunder.start();
  }

  playBatSignalSound() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 1.2);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 2.6);
  }

  playClick() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 0.06);
  }
}

export const audioEngine = new GothamAudioEngine();
