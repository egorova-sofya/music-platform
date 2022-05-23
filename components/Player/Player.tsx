import React, { useEffect } from "react";
import {
  Delete,
  NumbersOutlined,
  Pause,
  PlayArrow,
  VolumeUp,
} from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import s from "./Player.module.scss";
import TrackProgress from "../TrackProgress/TrackProgress";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

let audio;

const Player = () => {
  const track = {
    _id: "1",
    artist: "vfdv",
    audio: "/",
    comments: [{ _id: "1", text: "cool", username: "Bob" }],
    name: "fff",
    text: "fddgd",
    listens: 4,
    picture: "/images/c56eb4eb130e107e74c58a3154f37476.jpeg",
  };

  const { active, currentTime, duration, pause, volume } = useTypedSelector(
    (state) => state.player
  );
  const {
    pauseTrack,
    playTrack,
    setVolume,
    setCurrentTime,
    setDuration,
    // setActiveTrack
  } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };

      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (pause) {
      audio.play();
      playTrack();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={s.player}>
      <IconButton onClick={play}>
        {!pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: "200px", margin: "0 20px" }}
      >
        <div> {active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}> {active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
