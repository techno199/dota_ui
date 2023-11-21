// Single audio loop. Loop audio play one after another.
export class Loop {
  // Loop name
  name: string;
  // Loop audio refs
  audioRefs: string[];
  // Index of currently played audion within loop
  currentAudioIndex: number = 0;

  constructor(name: string, audioRefs: string[]) {
    this.name = name;
    this.audioRefs = audioRefs;

    for (let audioRef of audioRefs) {
      const audio = new Audio(audioRef);
      audio.onended = () => {
        this.currentAudioIndex++;
      }
    }
  }

  // Plays next audio
  next() {

  }

  // Plays prev audio
  prev() {

  }
}