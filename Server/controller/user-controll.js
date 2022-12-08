import User from "../Schema/userSchema.js";

export const addUser = async (request,response) =>{
    const user = request.body;

    const newUser =  new User(user);

    try{
       await newUser.save();
       response.status(201).json(newUser)
    }catch(error)
    {
        response.status(401).json({message:error.message});
        console.log("error");
    }

}

export const getUsers=async(request,response)=>{
    try {
         const user = await User.find();
        response.status(201).json(user);
    } catch (error) {
        response.status(404).json({message:error.message});
    }
   }