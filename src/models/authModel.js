const db = require('./../config/db')

const login = (email) => {
    return new Promise((resolve, reject) => {
        // const sqlQuery = `SELECT * FROM users  WHERE email = '${email}' LIMIT 1`;
        db.query('SELECT * FROM users  WHERE email = ? LIMIT 1',[email], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }

        });
    })
}

const cekEmail = (email) => {
    return new Promise((resolve, reject) => {
        // const sqlQuery = `SELECT * FROM users  WHERE email = '${email}' LIMIT 1`;
        db.query('SELECT * FROM users  WHERE email = ? LIMIT 1',[email], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }

        });
    })
}

const createUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        // const sqlQuery = `INSERT INTO users (username, email,password,phone,address,birthday,displayname,image) VALUES ("${username}","${email}","${password}","${phone}", "${adress}","${birthday}","${displayname}","${image}")`;
        db.query('INSERT INTO users (username, email,password) VALUES (?,?,?)',[username, email, password],(error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    });
}

const cekWhiteListToken = (token) => {
    return new Promise((resolve, reject) => {
        // const sqlQuery = `SELECT * FROM users  WHERE email = '${email}' LIMIT 1`;
        db.query('SELECT * FROM white_list_token  WHERE token = ? LIMIT 1',[token], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }

        });
    })
}
const insertWhiteList = (token) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO white_list_token  (token) VALUES (?) ',[token], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }

        });
    })
}

const deleteWhiteList = (token) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM white_list_token  WHERE token = ? ',[token], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }

        });
    })
}

module.exports = {login, createUser,cekWhiteListToken , insertWhiteList ,deleteWhiteList,cekEmail}