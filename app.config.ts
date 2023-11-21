import {Loop} from "@/./models/Loop/Loop";

export const AppConfig = {
  logoTimeoutMs: 1500,
  // Time in milliseconds between slide transitions
  mainMenuSliderTransitionTimeoutMs: 15000,
  mainMenuMusic: [
    {
      startAt: 2,
      volume: 0.1,
      sourcePath: '/music/2.mp3'
    },
    {
      startAt: 12.05,
      volume: 0.035,
      sourcePath: '/music/1.mp3'
    },
  ] as Loop['audioRefs']
}