import Users from "../models/Users.js"

 export const getAllUsers = async (req, res) => {
    try{
        const users = await Users.find()
        if(users.length < 1){
            return res.status(400).json({message : 'Users not found'})
        }   
        return res.status(200).json(users)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server errore'})
    }
}

export const getUserById = async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await Users.findById(id)
        return res.status(200).json(userByID)
    }
    catch(err){
        return res.status(500).json({message : 'Internal server error'})
    }

}

export const createUser = async (req, res) => {
    const {first_name, last_name, passion} = req.body
    try{
        const newUser = await Users.create(req.body)
        return res.status(201).json(newUser)
    }   
    catch(err){
        return res.status(500).json({message : 'Internal server errorii'})
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Users.findByIdAndDelete(id); 
        if (!user) {
            return res.status(404).json({ message: 'User to delete not found' });  
        }

        return res.status(200).json({ message: 'User deleted successfully', user }); 
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error in deleteUser', error: err.message }); 
    }
};