import { FC } from "react";
import ModeSelect from "../ModeSelect";
import { Box } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import trelloLogo from "~/assets/trello-logo.svg";
import Typography from "@mui/material/Typography";
import Workspace from "./Menus/Workspace";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "./Menus/Profile";

const AppBar: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Box1 ----------------------------- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          px: "10px",
        }}
      >
        <AppsIcon
          sx={{
            color: "primary.main",
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={trelloLogo}
            alt="Trello Logo"
            sx={{
              width: "22px",
              height: "22px",
              color: "primary.main",
            }}
          />
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>

          <Workspace />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      {/* Box2---------------------------------- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          px: "10px",
        }}
      >
        <TextField
          id="outlined-search"
          label="Search...."
          type="search"
          size="small"
        />
        <ModeSelect />

        <Tooltip title="Notification" sx={{ cursor: "pointer" }}>
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Information" sx={{ cursor: "pointer" }}>
          <Badge color="secondary" variant="dot">
            <HelpOutlineIcon />
          </Badge>
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
};

export default AppBar;
