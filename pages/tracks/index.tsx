import { Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList/TrackList";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTrack } from "../../store/actions-creators/track";
import fetchTrackThunk from "../../store/actions-creators/trackThunk";
import { Track } from "../../types";

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);

  // const tracks: Track[] = [
  //   {
  //     _id: "1",
  //     artist: "vfdv",
  //     audio: "/",
  //     comments: [{ _id: "1", text: "cool", username: "Bob" }],
  //     name: "fff",
  //     text: "fddgd",
  //     listens: 4,
  //     picture: "/images/c56eb4eb130e107e74c58a3154f37476.jpeg",
  //   },
  //   {
  //     _id: "2",
  //     artist: "fff",
  //     audio: "/",
  //     comments: [{ _id: "1", text: "cool", username: "Bob" }],
  //     name: "fff",
  //     text: "bbb",
  //     listens: 4,
  //     picture: "/images/car.jpg",
  //   },
  //   {
  //     _id: "3",
  //     artist: "sss",
  //     audio: "/",
  //     comments: [{ _id: "1", text: "cool", username: "Bob" }],
  //     name: "fff",
  //     text: "ggb",
  //     listens: 4,
  //     picture: "/images/wall.jpg",
  //   },
  // ];

  if (error) {
    return <MainLayout>{error}</MainLayout>;
  }
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: "900px", padding: "20px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <h1>Track list</h1>
            <Button
              variant="contained"
              onClick={() => router.push("/tracks/create")}
            >
              Load
            </Button>
          </Grid>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

// export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
//   const dispatch = store.dispatch as NextThunkDispatch
//    await dispatch(await fetchTrack())
// })

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTrackThunk());
    return {
      props: {},
    };
  }
);
