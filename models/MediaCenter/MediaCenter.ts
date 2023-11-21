import {makeAutoObservable} from "mobx";
import {Loop} from "../Loop/Loop";

export class MediaCenter {
  loops: Loop[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLoop(loop: Loop) {
    this.loops.push(loop);
  }

  getLoopByName(name: string) {
    return this.loops.find(l => l.name === name);
  }
}

export const mediaCenter = new MediaCenter();