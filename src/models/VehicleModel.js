const db = require("../config/db");

const getAllVehicle = (queryString) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT * FROM vehicle";
        if(queryString.search) {
            sqlQuery += ` WHERE vehiclename like '%${queryString.search}%' OR category like '%${queryString.search}%' `
        }
        if(queryString.sort && queryString.sortBy) {
            sqlQuery += ` ORDER BY ${queryString.sortBy} ${queryString.sort}`
        }
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })

    })
}

const createVehicle = ( vehiclename, location, price, status, photo, stock, category ) => {
    return new Promise((resolve, reject) => {
        const sqlQuery = `INSERT INTO vehicle (vehiclename,location,price,status,photo,stock,category) ` +
        `VALUES ("${vehiclename}","${location}","${price}", "${status}","${photo}","${stock}","${category}")`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    });
}

const getVehicleById = (vehicleId) => {
    return new Promise ((resolve,reject) =>{
        const sqlQuery = `SELECT * FROM vehicle WHERE id = ${vehicleId} LIMIT 1`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const updateVehicle = (vehicleId,body) => {
    const { vehiclename, location, price, status, photo, stock, category } = body
    return new Promise ((resolve,reject) =>{
        const sqlQuery = `UPDATE vehicle SET vehiclename = "${vehiclename}", location = "${location}",price ="${price}",status = "${status}",photo = "${photo}",stock = "${stock}",category = "${category}" WHERE id = ${vehicleId};`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const getVehicleByType = (type) => {
    return new Promise ((resolve,reject) =>{
        const sqlQuery = `SELECT * FROM vehicle WHERE category = '${type}'`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const deleteVehicle = (vehicleId) => {
    return new Promise ((resolve,reject) =>{
        const sqlQuery = `DELETE FROM vehicle WHERE id = ${vehicleId}`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

module.exports = { getAllVehicle, createVehicle, getVehicleById,updateVehicle, getVehicleByType,deleteVehicle}