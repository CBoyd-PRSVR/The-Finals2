import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    console.log("Date Submitted: ", { email, password });

    if (email && password) {
      navigate('/products');  // Navigate to the products page
    }
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Human Clothes
      </Typography>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={submitHandler}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
        }}
      >
        <TextField
          variant="outlined"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 25 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Home;