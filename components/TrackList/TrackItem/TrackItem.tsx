import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Track } from "../../../types";
import s from "./TrackItem.module.scss";

interface Props {
  track: Track;
  active?: boolean;
}

const TrackItem: FC<Props> = ({ track, active = false }) => {
  const router = useRouter();
  return (
    <>
      <Card
        className={s.track}
        onClick={() => router.push("/tracks/" + track._id)}
      >
        <IconButton onClick={(e) => e.stopPropagation}>
          {active ? <Pause /> : <PlayArrow />}
        </IconButton>
        <Image width="70" height="70" alt={track.name} src={track.picture} />
        <Grid
          container
          direction="column"
          style={{ width: "200px", margin: "0 20px" }}
        >
          <div> {track.name}</div>
          <div style={{ fontSize: 12, color: "gray" }}> {track.artist}</div>
        </Grid>
        {active && <div>02:42 / 03:22</div>}
        <IconButton
          onClick={(e) => e.stopPropagation}
          style={{ marginLeft: "auto" }}
        >
          <Delete />
        </IconButton>
      </Card>
    </>
  );
};

export default TrackItem;
