import React, { useState, useEffect } from "react";
import { Box, Grid, Card, Typography, TextField, Button, InputAdornment } from "@mui/material";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPosts(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get("http://localhost:8080/allPosts");
      setPosts(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <Box sx={{ padding: "2%" }}>
      <Box sx={{ marginBottom: "2%" }}>
        <Button sx={{ margin: "1% 2%" }} variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <TextField
          sx={{ width: "100%", margin: "2% 0" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search for jobs..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Grid container spacing={3}>
        {posts && posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ padding: "2%", height: "100%" }}>
              <Typography variant="h6" sx={{ fontWeight: "600", marginBottom: "1rem" }}>
                {post.profile}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "1rem", color: "#555" }}>
                {post.desc}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                Years of Experience: {post.exp} years
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                Skills: {post.techs.join(', ')}
              </Typography>
              <Button variant="contained" fullWidth>
                Apply
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feed;
