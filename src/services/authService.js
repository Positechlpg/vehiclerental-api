const authModel = require('./../models/authModel')
const ServiceResponse = require('./../helper/ServiceResponse')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (body)=>{
    const { email, password } = body;
    
    try {
        const result = await authModel.login(email)
        const user = result[0];
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return ServiceResponse(null,400,"pasword wrong")
        const payload = {
            id: user.id,
            name: user.name,
            role: user.role
          };
        const jwtOptions = {
            expiresIn: "5m",
          };
          const token = jwt.sign(payload, process.env.SECRET_KEY, jwtOptions);
          await authModel.insertWhiteList(token)
          return ServiceResponse({token},200, "login success")
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
        
    }
}
const createUser = async (body) =>{
    const  {username, email, password, phone, adress, birthday, displayname, image }=body
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const result = await authModel.createUser(username, email, passwordHash, phone, adress, birthday, displayname, image)
        return ServiceResponse(result,200, "sign up succes")
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
        
    }
}

const logout = async (token) => {
    try {
        const user = await authModel.deleteWhiteList(token);
        return ServiceResponse(user, 200, 'logout succes')
    } catch (error) {
        return ServiceResponse(null, 500, 'Terjadi Error', error)
    }
}

module.exports={login, createUser, logout}