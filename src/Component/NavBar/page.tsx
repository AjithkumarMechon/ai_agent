import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function page() {
  return (
    <div>
      {" "}
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 0 0 rgba(0, 0, 0, 0.7)",
          borderBottom: "0.0125rem solid #eae7e6",
        }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ fontSize: "1rem" }}>
            AIChatGPT
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default page;
