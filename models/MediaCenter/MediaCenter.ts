import {makeAutoObservable} from "mobx";
import {Loop} from "../Loop/Loop";

export class MediaCenter {
  loops: Loop[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLoop(name: string, audioRefs: string[]) {

  }

  getLoopByName(name: string) {
    return this.loops.find(l => l.name === name);
  }
}