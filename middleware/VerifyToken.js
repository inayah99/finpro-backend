import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const authHeader = req.cookies['accessToken'];
    console.log(req.cookies);
    if(authHeader == null) return res.sendStatus(401);
    jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403);
        console.log(decoded);
        req.email = decoded.email;
        req.userId = decoded.userId;
        next();
    })
}