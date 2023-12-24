import jwt from 'jsonwebtoken';
import users from '../models/auth.js'

export const login = async (req, res) => {
    const { email } = req.body;
    try
    {
        const existingUser = await users.findOne({ email });
        if (!existingUser) {
            try
            {
                const newUser = await users.create({ email });   
                const token = jwt.sign({
                    email: newUser.email, id:newUser._id
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                })
                res.status(200).json({result:newUser,token})
            }
            catch (error)
            {
                res.status(500).json({error:"Something went Wrong..."})
            }
        }
        else
        {
                const token = jwt.sign({
                email: existingUser.email, id:existingUser._id
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                })
                res.status(200).json({result:existingUser,token})    
        }
    }
    catch (error)
    {  
        res.status(500).send({"error": "Something Went Wrong ..."});
    }
}