import * as React from "react";
import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material";

export default function ButtonAppBar({ getData, data }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Demo Company
          </Typography>
          <Button
            color="inherit"
            disabled={Boolean(data.length)}
            onClick={getData}
          >
            Get users
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
