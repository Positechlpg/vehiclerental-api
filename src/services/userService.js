const UserModel = require('./../models/UserModel')
const ServiceResponse = require('./../helper/ServiceResponse')

const getAllCustommer = async () => {
    try {
        const user = await UserModel.getAllUser();
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const getUser = async (userId) =>{
    try { 
        const user = await UserModel.getUser(userId);
        if(user.length ===0){
            return ServiceResponse(null,404,'not found')
        }
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

const login = async (body)=>{
    const { email, password } = body;
    try {
        const result = await UserModel.login(email)
        const user = result[0];
        if (user.password !== password) return ServiceResponse(null,400,"pasword salah")
        return ServiceResponse(user,200, "berhasil login")
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
        
    }
}
const createUser = async (body) =>{
    const  {username, email, password, phone, adress, birthday, displayname, image }=body
    try {
        const result = await UserModel.createUser(username, email, password, phone, adress, birthday, displayname, image)
        return ServiceResponse(result,200, "create succes")
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
        
    }
}

const updateUser = async (userId,body) =>{
    const { username, email, password, phone, adress, birthday, displayname, image } = body

    try { 
        await UserModel.updateUser(userId,body);
        const data ={ username, email, password, phone, adress, birthday, displayname, image }
        return ServiceResponse(data, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}
const deleteUser = async (userId) =>{
    try { 
        const user = await UserModel.deleteUser(userId);
        return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = { getAllCustommer, login, createUser, getUser,updateUser,deleteUser };