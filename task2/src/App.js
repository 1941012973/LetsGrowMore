import { useState } from "react";
import AreaCard from "./components/AreaCard";
import ButtonAppBar from "./components/ButtonAppBar";
import { Grid, Container, Alert, CircularProgress } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);

  function getData() {
    setState(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((resp) => resp.json())
      .then((json) => {
        setTimeout(() => {
          setData(json.data);
          setState(false);
        }, 2000);
      });
  }

  return (
    <div className="App" style={{textAlign: "center"}}>
      <ButtonAppBar getData={getData} data={data} />
      <Container style={{ marginTop: "2rem" }}>
        {state ? (
          <CircularProgress />
        ) : data.length ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((d, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <AreaCard data={d} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Alert severity="error">
            No data available for preview. Click get users button to load data.
          </Alert>
        )}
      </Container>
    </div>
  );
}

export default App;
