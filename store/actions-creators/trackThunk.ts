import { fetchTrack, fetchTrackError } from "./track";
import axios from "axios";
import { Dispatch } from "react";

const fetchTrackThunk = () => {
  return async (
    dispatch: Dispatch<typeof fetchTrack | typeof fetchTrackError>
  ) => {
    try {
      const response = await axios.get("http://localhost:3001/tracks");
      dispatch(fetchTrack);
    } catch (e) {
      dispatch(fetchTrackError);
    }
  };
};

export default fetchTrackThunk;
