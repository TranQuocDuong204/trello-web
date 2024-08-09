import  { FC } from "react";
import { Box } from "@mui/material";
const BoardContent: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board bar
    </Box>
  );
};

export default BoardContent;
