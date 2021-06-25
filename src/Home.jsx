import React from "react";
import { Typography, Container } from "@material-ui/core";
import Navbar from "./Navbar";

const Home = () => {
  return (
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
          </Container>
        </div>
  );
};
export default Home;
