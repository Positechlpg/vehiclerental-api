const UserModel = require('./../models/UserModel')
const bcrypt = require("bcrypt");
const ServiceResponse = require('./../helper/ServiceResponse');
const dayjs = require('dayjs');
const { sendForgotPass } = require('../helper/sendForgotPass');

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
const editPassword = async (userId,body) =>{
    try { 
        const {newpassword,oldpassword}=body
        const result = await UserModel.getUser(userId);
        const user = result[0]
        console.log(user);
        const isValid = await bcrypt.compare(oldpassword, user.password);
        if (!isValid) return ServiceResponse(null,400,"pasword wrong")
        const passwordHash = await bcrypt.hash(newpassword, 10)
        console.log(passwordHash);
        const update = await UserModel.updatePasswordUser(userId,passwordHash);
        return ServiceResponse(update, 200)
        // console.log(passwordlast,body);
        // return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}
const forgotPassword = async(email)=>{
    try { 
        // const {email}=body
        const data= await UserModel.getUserByEmail(email)
        console.log(data);
        
        if (data.length===0) return ServiceResponse(null,400,"email tidak ada")
        const generatePin = dayjs().format('YYmmssDD');
        const name = data[0].username
        console.log(name);
        const result= await UserModel.updatePinUser(generatePin,email)
        await sendForgotPass(email, {username:name, generatePin})
        // console.log(passwordlast,body);
        return ServiceResponse(result.info, 200,"email success")
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}
const resetPassword = async (pin,password) =>{
    try { 
        const result = await UserModel.getUserByPin(pin);
        // const user = result[0]
        // const isValid = await bcrypt.compare(oldpassword, user.password);
        if (result.length===0) return ServiceResponse(null,400,"pin wrong")
        const passwordHash = await bcrypt.hash(password, 10)
        const email= result[0].email
        const setPin = null
        console.log(passwordHash);
        const update = await UserModel.updatePasswordUserBypin(passwordHash,setPin,email);
        return ServiceResponse(update, 200)
        // console.log(passwordlast,body);
        // return ServiceResponse(user, 200)
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports = { getAllCustommer, getUser,updateUser,deleteUser,editPassword,forgotPassword,resetPassword };