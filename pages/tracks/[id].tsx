import { Button, Grid, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";

const TrackPage = () => {
  const router = useRouter();
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
  return (
    <MainLayout>
      <Button variant="outlined" onClick={() => router.push("/tracks")}>
        Back to list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <Image width={200} height={200} src={track.picture} alt={track.name} />
        <div style={{ margin: "20px" }}>
          <p>Name{track.name}</p>
          <p>Artist{track.artist}</p>
          <p>Listens{track.listens}</p>
        </div>
      </Grid>
      <h3>Lyrics</h3>
      <p>{track.text}</p>
      <h2>Comments</h2>
      <Grid container>
        <TextField label="Your name" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Send</Button>
      </Grid>

      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div>{comment.username}</div>
            <div>Comment: {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
