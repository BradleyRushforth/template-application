import { Box, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        gap: 6,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Template Application
      </Typography>
    </Box>
  );
};

export default LandingPage;
