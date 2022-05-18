import { Container } from "@mui/system";
import React, { FC, ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Player from "../components/Player/Player";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: "90px auto" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
