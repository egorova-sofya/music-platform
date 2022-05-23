import { Track } from "./../../types";

export const fetchTrack = (payload: Track[]) => {
  return {
    type: "FETCH_TRACKS",
    payload,
  } as const;
};

export const fetchTrackError = (payload: string) => {
  return {
    type: "FETCH_TRACKS_ERROR",
    payload,
  } as const;
};
