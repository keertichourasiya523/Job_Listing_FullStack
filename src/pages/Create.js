import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, TextField, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material"; // Import missing components

const Create = () => {
  const skillSet = ["JavaScript", "Java", "Python", "Django", "Rust"];
  const navigate = useNavigate();
  const [form, setForm] = useState({ profile: "", exp: 0, techs: [], desc: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(() => navigate('/employer/dashboard'));
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      techs: checked ? [...prevForm.techs, value] : prevForm.techs.filter((tech) => tech !== value),
    }));
  };

  return (
    <Paper sx={{ padding: "3%", maxWidth: "600px", margin: "auto" }} elevation={3}>
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "2%" }}>
        Create New Job Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField
          label="Job Profile"
          variant="outlined"
          fullWidth
          required
          sx={{ marginBottom: "1rem" }}
          value={form.profile}
          onChange={(e) => setForm({ ...form, profile: e.target.value })}
        />
        <TextField
          label="Years of Experience"
          type="number"
          fullWidth
          required
          sx={{ marginBottom: "1rem" }}
          value={form.exp}
          onChange={(e) => setForm({ ...form, exp: e.target.value })}
        />
        <TextField
          label="Job Description"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          sx={{ marginBottom: "1rem" }}
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />
        <Typography sx={{ marginBottom: "1rem" }}>Select Required Skills:</Typography>
        <FormGroup row sx={{ marginBottom: "1rem" }}>
          {skillSet.map((skill, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox value={skill} onChange={handleChange} />}
              label={skill}
            />
          ))}
        </FormGroup>
        <Button variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Create;
