import { Container, Grid } from "@material-ui/core";
import React from "react";

const NotFound = () => {
  return (
    <Container>
      <Grid data-testid="not-found-title">
        <h2>Oops...Page not found. - 404</h2>
      </Grid>
    </Container>
  );
};

export default NotFound;
