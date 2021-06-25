import React from "react";
import { Typography, Container } from "@material-ui/core";

const Login = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Login Page
        </Typography>
      </Container>
    </div>
  );
};
export default Login;
