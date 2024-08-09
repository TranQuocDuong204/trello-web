import { FC } from "react";
import Container from "@mui/material/Container";
import AppBar from "../../components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
const Board: FC = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      {/* AppBar is used in many places so put it in Component */}
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
