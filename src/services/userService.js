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



const updateUser = async (id, body) =>{
    console.log('hhhhh');
    const user = await UserModel.getUser(id);
    if(user.length ===0){
        return ServiceResponse(null,404,'not found')
    }
    const newBody = {
        ...user[0],
        ...body
    }
    try { 
        await UserModel.updateUser(id, newBody);
        const data = newBody
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

module.exports = { getAllCustommer, getUser,updateUser,deleteUser };