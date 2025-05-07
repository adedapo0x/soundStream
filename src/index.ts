import express from "express"
import dotenv from "dotenv"
dotenv.config()

import spotifyWebAPI from "spotify-web-api-node" 
import router from "./routes";

const app = express();
const port = process.env?.PORT || 3050

app.use(express.json());

app.use(router)

export const spotifyAPI = new spotifyWebAPI({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URL
})



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`) 
})