const db = require("../config/db");

const getAllVehicle = (queryString) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT * FROM vehicle ";
        
        let firstWhere = true;
        if(queryString.search) {
            sqlQuery += `${firstWhere ? 'WHERE' : 'AND'} (vehiclename like '%${queryString.search}%' OR category like '%${queryString.search}%')`
            firstWhere = false
        }
        if(queryString.location && queryString.location !== '') {
            sqlQuery += `${firstWhere ? 'WHERE' : 'AND'} location = '${queryString.location}' `
            firstWhere = false
        }
        if(queryString.type && queryString.type !== '') {
            sqlQuery += `${firstWhere ? 'WHERE' : 'AND'} category = '${queryString.type}' `
            firstWhere = false
        }
        if(queryString.status && queryString.status !== '') {
            sqlQuery += `${firstWhere ? 'WHERE' : 'AND'} status = '${queryString.status}' `
            firstWhere = false
        }
        if(queryString.date && queryString.date !== '') {
            sqlQuery += `${firstWhere ? 'WHERE' : 'AND'} created_at BETWEEN '${queryString.date} 00:00:00' AND '${queryString.date} 23:59:59' `
            firstWhere = false
        }
        if(queryString.sort && queryString.sortBy) {
            sqlQuery += ` ORDER BY ${queryString.sortBy} ${queryString.sort}`
        }
        sqlQuery += ` LIMIT ${queryString.limit} OFFSET ${queryString.offset}`
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })

    })
}

const getTotalVehicle = (queryString) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT COUNT(*) as total FROM vehicle";
        if(queryString.search) {
            sqlQuery += ` WHERE vehiclename like '%${queryString.search}%' OR category like '%${queryString.search}%' `
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


const createVehicle = ( vehiclename, location, price, status, photo, stock, category,description) => {
    return new Promise((resolve, reject) => {
        // const sqlQuery = `INSERT INTO vehicle (vehiclename,location,price,status,photo,stock,category) ` +
        // `VALUES ("${vehiclename}","${location}","${price}", "${status}","${photo}","${stock}","${category}")`;
        db.query('INSERT INTO vehicle (vehiclename,location,price,status,photo,stock,category,description) VALUES (?,?,?,?,?,?,?)',[vehiclename, location, price, status, photo, stock, category,description], (error, result) => {
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
        // const sqlQuery = `SELECT * FROM vehicle WHERE id = ${vehicleId} LIMIT 1`;
        db.query('SELECT * FROM vehicle WHERE id = ?',[vehicleId], (error, result) => {
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
        // const sqlQuery = `UPDATE vehicle SET vehiclename = "${vehiclename}", location = "${location}",price ="${price}",status = "${status}",photo = "${photo}",stock = "${stock}",category = "${category}" WHERE id = ${vehicleId};`;
        db.query('UPDATE vehicle SET vehiclename = ? , location = ?, price = ?, status = ?,photo = ?,stock = ?,category = ?  WHERE id = ?',[vehiclename, location, price, status, photo, stock, category,vehicleId], (error, result) => {
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
        // const sqlQuery = `SELECT * FROM vehicle WHERE category = '${type}'`;
        db.query('SELECT * FROM vehicle WHERE category = ?',[type], (error, result) => {
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
        // const sqlQuery = `DELETE FROM vehicle WHERE id = ${vehicleId}`;
        db.query('DELETE FROM vehicle WHERE id = ?',[vehicleId], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

module.exports = { getAllVehicle, createVehicle, getVehicleById,updateVehicle, getVehicleByType,deleteVehicle,getTotalVehicle}