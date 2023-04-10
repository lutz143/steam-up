const express = require('express');
const fetch = require('node-fetch');
const app = express();

// input actual Steam API key
const STEAM_API_KEY = 'STEAM_API_KEY_';

// Example route that retrieves data from the Steam API
app.get('/api/steam/user/:steamid', async (req, res) => {
  try {
    const steamid = req.params.steamid;
    const response = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${steamid}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});