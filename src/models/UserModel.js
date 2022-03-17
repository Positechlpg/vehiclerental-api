const db = require("../config/db");

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        // const sqlQuery = "SELECT * FROM users";
        db.query('SELECT * FROM users', (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })

    })
}

const getUser = (userId) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `SELECT * FROM users WHERE id = ${userId} LIMIT 1`;
        db.query('SELECT * FROM users WHERE id = ?',[userId], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const getUserByEmail = (email) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `SELECT * FROM users WHERE id = ${userId} LIMIT 1`;
        db.query('SELECT * FROM users WHERE email = ?',[email], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}
const getUserByPin = (pin) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `SELECT * FROM users WHERE id = ${userId} LIMIT 1`;
        db.query('SELECT * FROM users WHERE pin = ?',[pin], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}



const updatePasswordUser = (userId,password) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `UPDATE users SET username = "${username}", email= "${email}",phone = "${phone}",address = "${adress}",birthday = "${birthday}",displayname = "${displayname}", image = "${image}" WHERE id = ${userId};`;
        db.query('UPDATE users SET password = ?  WHERE id = ?',[password,userId], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}
const updatePasswordUserBypin = (password,pin,email) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `UPDATE users SET username = "${username}", email= "${email}",phone = "${phone}",address = "${adress}",birthday = "${birthday}",displayname = "${displayname}", image = "${image}" WHERE id = ${userId};`;
        db.query('UPDATE users SET password = ?,pin = ?  WHERE email = ?',[password,pin,email], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}
const updatePinUser = (generatePin,email) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `UPDATE users SET username = "${username}", email= "${email}",phone = "${phone}",address = "${adress}",birthday = "${birthday}",displayname = "${displayname}", image = "${image}" WHERE id = ${userId};`;
        db.query('UPDATE users SET pin = ?  WHERE email = ?',[generatePin,email], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const updateUser = (userId,body) => {
    const { username, phone, address, birthday, displayname, image } = body
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `UPDATE users SET username = "${username}", email= "${email}",phone = "${phone}",address = "${adress}",birthday = "${birthday}",displayname = "${displayname}", image = "${image}" WHERE id = ${userId};`;
        db.query('UPDATE users SET username = ? ,phone = ? ,address = ? ,birthday = ?, displayname = ?, image = ?  WHERE id = ?',[username, phone, address, birthday, displayname, image,userId], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const deleteUser = (userId) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `DELETE FROM users WHERE id = ${userId} `;
        db.query('DELETE FROM users WHERE id = ?',[userId], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

module.exports = { getAllUser, getUser,updateUser, deleteUser,updatePasswordUser,getUserByEmail,updatePinUser,getUserByPin,updatePasswordUserBypin }