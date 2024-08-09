import { FC } from "react";
import { Box } from "@mui/material";
const BoardBar: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board bar duong
    </Box>
  );
};

export default BoardBar;
