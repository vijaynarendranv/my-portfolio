import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Home as HomeIcon,
  Code,
  Phone,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const PageContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#121212",
  color: "#fff",
  minHeight: "100vh",
  padding: theme.spacing(6, 2),
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
}));

const Section = styled("div")(({ theme }) => ({
  margin: theme.spacing(6, "auto"),
  maxWidth: "90%",
  padding: theme.spacing(4, 2),
  borderRadius: "10px",
  textAlign: "center",
}));

const Navbar = styled(AppBar)({
  backgroundColor: "#1f1f1f",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
});

const Home = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Section id="home">
      <Box display="flex" flexDirection={isMobile ? "column" : "row"} alignItems="center" justifyContent="center" gap={2}>
        <Avatar src="/profile.jpg" alt="Vijay Narendran" sx={{ width: 80, height: 80 }} />
        <Typography variant={isMobile ? "h4" : "h2"}>Vijay Narendran V</Typography>
      </Box>
      <Typography variant="h6">Full Stack Developer | Data Analyst</Typography>
      <Typography>Seeking opportunities to contribute and grow in a dynamic environment.</Typography>
    </Section>
  );
};

const Projects = () => {
  const projects = [
    { title: "Checkers Multiplayer Game", desc: "React.js and Node.js with WebSockets with sqlite3.", link: "https://github.com/vijaynarendranv/Checkers-Multiplayer-game" },
    { title: "FlexFit", desc: "An Android fitness app with OpenAI integration.", link: "https://github.com/vijaynarendranv/FlexFit" },
    { title: "Dine Dash", desc: "A food ordering app with React and Node.js.", link: "https://github.com/vijaynarendranv/food_delivery_main" },
  ];
  return (
    <Section id="projects">
      <Typography variant="h4"><Code /> Projects</Typography><br />
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "1rem" }}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography sx={{ marginBottom: "20px" }}>{project.desc}</Typography>
                <Button href={project.link} target="_blank" color="primary" variant="contained">View on GitHub</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact">
    <Typography variant="h4">Contact</Typography>
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
      <IconButton href="mailto:vijaynarendranvadivel@gmail.com" color="primary"><Email /></IconButton>
      <IconButton href="https://linkedin.com/in/vijaynarendranv" target="_blank" color="primary"><LinkedIn /></IconButton>
      <IconButton href="https://github.com/vijaynarendranv" target="_blank" color="primary"><GitHub /></IconButton>
      <IconButton href="tel:+919597357534" target="_blank" color="primary"><Phone /></IconButton>
    </Box>
  </Section>
);

const Main1 = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <PageContainer>
      <Navbar>
        <Toolbar sx={{ justifyContent: "center", flexWrap: "wrap" }}>
          <Button color="inherit" href="#home" size={isMobile ? "small" : "medium"}><HomeIcon /> Home</Button>
          <Button color="inherit" href="#projects" size={isMobile ? "small" : "medium"}>Projects</Button>
          <Button color="inherit" href="#contact" size={isMobile ? "small" : "medium"}>Contact</Button>
        </Toolbar>
      </Navbar>
      <Home />
      <Projects />
      <Contact />
    </PageContainer>
  );
};

export default Main1;
