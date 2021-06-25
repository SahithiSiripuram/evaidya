import React from "react";
import { Typography, Container } from "@material-ui/core";
import Navbar from "./Navbar";

const Book = () => {
  return (
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Bookings page
            </Typography>
          </Container>
        </div>
  );
};
export default Book;
