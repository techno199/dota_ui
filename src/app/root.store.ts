import {makeAutoObservable} from 'mobx'

export class AppState {
  // "Play" btn pressed
  gameLaunched = false;
  // Initial logo is shown, intro not visible
  launchSequenceLoaded = false;
  // Intro sequence finished or closed
  launchSequenceFinished = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export const appState = new AppState();
