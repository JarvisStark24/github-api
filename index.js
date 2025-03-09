require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const GITHUB_USERNAME = "JarvisStark24";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_API_URL = "https://api.github.com";

// Fetch general GitHub profile data
app.get("/github", async (req, res) => {
  try {
    const { data } = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    res.json({
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      repos_url: data.repos_url,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch specific repository data
app.get("/github/:repo", async (req, res) => {
  try {
    const { repo } = req.params;
    const { data } = await axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create an issue in a specific repository
app.post("/github/:repo/issues", async (req, res) => {
  try {
    const { repo } = req.params;
    const { title, body } = req.body;

    const { data } = await axios.post(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo}/issues`,
      { title, body },
      { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
    );

    res.json({ issue_url: data.html_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
