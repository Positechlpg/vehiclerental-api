const db = require("../config/db");

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        const sqlQuery = "SELECT * FROM users";
        db.query(sqlQuery, (error, result) => {
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
        const sqlQuery = `SELECT * FROM users WHERE id = ${userId} LIMIT 1`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const login = (email) => {
    return new Promise((resolve, reject) => {
        const sqlQuery = `SELECT * FROM users  WHERE email = '${email}' LIMIT 1`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }

        });
    })
}
const createUser = (username, email, password, phone, adress, birthday, displayname, image) => {
    return new Promise((resolve, reject) => {
        const sqlQuery = `INSERT INTO users (username, email,password,phone,adress,birthday,displayname,image) VALUES ("${username}","${email}","${password}","${phone}", "${adress}","${birthday}","${displayname}","${image}")`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    });
}

const updateUser = (userId,body) => {
    const { username, email, password, phone, adress, birthday, displayname, image } = body
    return new Promise ((resolve,reject) =>{
        const sqlQuery = `UPDATE users SET username = "${username}", email= "${email}",password ="${password}",phone = "${phone}",adress = "${adress}",birthday = "${birthday}",displayname = "${displayname}", image = "${image}" WHERE id = ${userId};`;
        db.query(sqlQuery, (error, result) => {
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
        const sqlQuery = `DELETE FROM users WHERE id = ${userId} `;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

module.exports = { getAllUser, login, createUser, getUser,updateUser, deleteUser }