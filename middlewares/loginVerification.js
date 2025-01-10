import jwt from "jsonwebtoken"

export const loginVerification = async (req, res, next) => {
    const {email, password} = req.body

    if(!email || !password) {
        return res.json({message: 'please provide aan email and a password'})
    }

    next()
}


export const verifyUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    const token = authHeader.split(" ")[1];
    try{
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verify
        next()
    }
    catch(err){
        console.error("Token verification error:", err.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}