type AudioRef = {
  sourcePath: string;
  startAt?: number;
  volume?: number;
}

type Options = {
  repeat?: boolean;
}

// Single audio loop. Loop audio play one after another.
export class Loop {
  // Loop name
  name: string;
  // Loop audio refs
  audioRefs: AudioRef[];
  // Index of currently played audion within loop
  private options: Options;
  private currentAudioIndex: number = 0;
  private currentAudio?: HTMLAudioElement = undefined;

  constructor(name: string, audioRefs: AudioRef[], options?: Options) {
    const defaultOptions: Options = {
      repeat: false
    }
    this.options = {...defaultOptions, ...options};
    this.name = name;
    this.audioRefs = audioRefs;

    this.playAudioAtIndex(0);
  }

  // Plays next audio
  playNext() {
    this.playAudioAtIndex(this.currentAudioIndex + 1);
  }

  // Plays prev audio
  playPrev() {
    this.playAudioAtIndex(this.currentAudioIndex - 1);
  }

  private playAudioAtIndex(index: number) {
    this.currentAudio?.pause();
    // Simply return if queue ended
    if (index >= this.audioRefs.length) {
      return;
    }
    const i = index % this.audioRefs.length;
    if (i < this.audioRefs.length) {
      this.currentAudio = new Audio(this.audioRefs[i].sourcePath);
      this.currentAudioIndex = i;
      this.currentAudio.volume = this.audioRefs[i].volume || 1;
      this.currentAudio.currentTime = this.audioRefs[i].startAt || 0;
      this.currentAudio.play();
      this.currentAudio.onended = () => {
        this.playNext();
      }
    }
  }
}