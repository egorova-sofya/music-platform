import { useInput } from "@mui/base";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import StepWrapper from "../../components/StepWrapper/StepWrapper";
import MainLayout from "../../layouts/MainLayout";
import FileUpload from "./../../components/FileUpload/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const router = useRouter();

  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);
      formData.append("picture", picture);
      formData.append("audio", audio);
      axios
        .post("http://...", formData)
        .then((rest) => router.push("/tracks"))
        .catch((e) => console.log(e));
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <h1>Step 1</h1>
            <TextField {...name} style={{ marginTop: 10 }} label="Track name" />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label="Artist name"
            />
            <TextField {...text} style={{ marginTop: 10 }} label="Lyrics" />
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <h1>Step 2</h1>
            <FileUpload setFile={setPicture} accept="image/*">
              <Button>Load wrapper</Button>
            </FileUpload>
          </Grid>
        )}
        {activeStep === 2 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <h1>Step 3</h1>
            <FileUpload setFile={setAudio} accept="audio/*">
              <Button>Load audio</Button>
            </FileUpload>
          </Grid>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
