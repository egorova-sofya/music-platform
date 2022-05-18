import { StepLabel, Stepper, Step, Grid, Card } from "@mui/material";
import { Container } from "@mui/system";
import React, { FC, ReactNode } from "react";

interface Props {
  activeStep: number;
  children: ReactNode;
}

const steps = ["Track information", "Wrapper loading", "Audio loading"];
const StepWrapper: FC<Props> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: "70px 0", height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
