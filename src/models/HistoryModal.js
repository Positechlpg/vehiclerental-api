const db = require("../config/db");

const getAllHistory = (userid,queryString) => {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT history.*, vehicle.vehiclename, vehicle.category, vehicle.photo FROM history LEFT JOIN vehicle ON history.vehicle_id = vehicle.id";
        sqlQuery += ` WHERE user_id = ${userid} `;
        if(queryString.search) {
            sqlQuery += ` AND vehicle.vehiclename like '%${queryString.search}%' OR vehicle.category like '%${queryString.search}%' `
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

const createHistory = (userId, vehicleId, quantityTotal, startDate, returnDate, bookingCode, paymentCode, status,total_price) => {
    return new Promise((resolve, reject) => {
        const sqlQuery = `INSERT INTO history (user_id, vehicle_id, quantity_total, start_date, return_date, booking_code, payment_code, status,total_price) VALUES ("${userId}","${vehicleId}","${quantityTotal}","${startDate}", "${returnDate}","${bookingCode}","${paymentCode}","${status}","${total_price}")`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })

    })
}
const getHistoryByUserId = (userId) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `SELECT * FROM vehicle WHERE id = ${vehicleId} LIMIT 1`;
        db.query('SELECT * from history WHERE user_id = ?',[userId], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const updateHistory = (historyId,body) => {
    const { userId, vehicleId, quantityTotal, startDate, returnDate, bookingCode, paymentCode, status,total_price } = body 
    return new Promise ((resolve,reject) =>{
        const sqlQuery = `UPDATE history SET user_id = "${userId}", vehicle_id= "${vehicleId}",quantity_total ="${quantityTotal}",start_date = "${startDate}",return_date = "${returnDate}",booking_code = "${bookingCode}",payment_code = "${paymentCode}", status = "${status}", total_price = "${total_price}" WHERE id = ${historyId};`;
        db.query(sqlQuery, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const deleteHistory = (historyId) => {
    return new Promise ((resolve,reject) =>{
        // const sqlQuery = `DELETE FROM history WHERE id = ${historyId} `;
        db.query('DELETE FROM history WHERE id = ?',[historyId], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })
    })
}

const getPopulerVhicle = (location) => {
    return new Promise((resolve, reject) => {
        // const sqlQuery = `SELECT COUNT(history.id) as total_history, vehicle.*  FROM vehicle LEFT JOIN history ON history.vehicle_id = vehicle.id WHERE vehicle.location = '${location}' GROUP BY vehicle.id ORDER BY total_history DESC;`;
        db.query('SELECT COUNT(history.id) as total_history, vehicle.*  FROM vehicle LEFT JOIN history ON history.vehicle_id = vehicle.id WHERE vehicle.location = ? GROUP BY vehicle.id ORDER BY total_history DESC;',[location], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        })

    })
}

module.exports = {getAllHistory,createHistory,updateHistory,deleteHistory,getPopulerVhicle,getHistoryByUserId}