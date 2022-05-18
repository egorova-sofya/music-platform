import { Button } from "@mui/material";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome!</h1>
          <h3>Your favorite music is here!</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center
            margin-top: 150px;
          }
        `}
      </style>
    </>
  );
};

export default Index;
