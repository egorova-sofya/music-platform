import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import StepWrapper from "../../components/StepWrapper/StepWrapper";
import MainLayout from "../../layouts/MainLayout";
import FileUpload from "./../../components/FileUpload/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
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
            <TextField style={{ marginTop: 10 }} label="Track name" />
            <TextField style={{ marginTop: 10 }} label="Artist name" />
            <TextField style={{ marginTop: 10 }} label="Lyrics" />
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
