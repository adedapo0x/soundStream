import express from "express"
import dotenv from "dotenv"
dotenv.config()

import spotifyWebAPI from "spotify-web-api-node" 

const app = express();
const port = process.env?.PORT || 3000

app.use(express.json());

export const spotifyAPI = new spotifyWebAPI({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URL
})



app.listen(port, () => {
    console.log(`Server running on http:`)
})