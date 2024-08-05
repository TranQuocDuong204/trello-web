import { FC } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const App: FC = () => {
  return (
    <h1 className="text-6xl font-bold underline text-red-600">
      <Button variant="contained">Hello world</Button>
      <Typography variant="h2" component="h2" color="text.secondary">
        h1. Heading
      </Typography>
      Hello world!
    </h1>
  );
};

export default App;
