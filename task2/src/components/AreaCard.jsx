import * as React from "react";
import {
  Button,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

export default function AreaCard({ data }) {
  const { email, first_name, last_name, avatar } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={avatar} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${first_name} ${last_name}`}
          </Typography>
          <Typography gutterBottom variant="pre" component="div">
            {`${email}`}
          </Typography>
          <Button
            href={`mailto:${email}`}
            variant="contained"
            size="small"
            color="primary"
          >
            Contact (Email)
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
