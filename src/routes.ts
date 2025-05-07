import { Request, Response, Router } from "express";
import { spotifyAPI } from ".";
import crypto from "crypto"

const generateRandomString = (length: number) => crypto.randomBytes(length).toString('hex').slice(0, length);

const router = Router();

// Route hit to get the access token from Spotify Service
router.get('/login', (req: Request, res: Response) => {
    const scopes = ["user-read-private", "user-read-email", "user-read-playback-state", "user-modify-playback-state"];
    const state = generateRandomString(16);
    res.redirect(spotifyAPI.createAuthorizeURL(scopes, state));
});

router.get('/callback', (req: Request, res: Response) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error){
        throw new Error(`Error occured: ${error}`);
    }

    if (state === null){
        res.redirect('/#error=state_mismatch'); 
        return
    }

    if (typeof code === "string"){
        spotifyAPI.authorizationCodeGrant(code).then(data => {
            
        })
    }
})


