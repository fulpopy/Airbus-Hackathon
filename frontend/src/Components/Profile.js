import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import userIcon from "./Images/userIcon.png";
import { useAuth } from "../Auth";
import bgImg from "./Images/bgImg.jpg";

const theme = createTheme();

export default function Profile() {
  const { user, logout } = useAuth();
  //   console.log(user);
  const handleClick = () => {
    logout();
  };
  const [{ firstName, lastName, role, email }] = user;
  //   console.log(role);
  return (
    <Box
      class="candles"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        height: "100vh",
        // margin: "0"
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.67)",
              //   width: 100,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, height: "100px", width: "100px", src: userIcon }}
            ></Avatar>
            <Box
              sx={{
                alignItems: "left",
                // margin: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ m: 1 }} component="h3" variant="h5">
                User Name:{" "}
                {firstName + " " + (lastName === null ? "" : lastName)}
              </Typography>
              <Typography sx={{ m: 1 }} component="h3" variant="h5">
                Role: {role}
              </Typography>
              <Typography sx={{ m: 1 }} component="h3" variant="h5">
                EmailId: {email}
              </Typography>
            </Box>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logout
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
