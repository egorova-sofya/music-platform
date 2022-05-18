import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { Track } from "../../types";
import TrackItem from "./TrackItem/TrackItem";

interface Props {
  tracks: Track[];
}

const TrackList: FC<Props> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
