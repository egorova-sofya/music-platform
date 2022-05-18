import React, { useEffect } from "react";
import { Delete, Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
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
  const { pauseTrack, playTrack } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      audio.src = track.audio;
    }
  });

  const play = () => {
    if (pause) {
      audio.play();
      playTrack();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

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
        <div> {track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}> {track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};

export default Player;
