require("dotenv").config();
const express = require('express')
const server = express()

// server.get('/', function (req, res) {
//   res.send('Hello World')
// })
// setup mysql
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.UNAME,
  password: process.env.PASS,
  database: process.env.DB,
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`server is running port ${port}`);
})
server.use(express.urlencoded({ extended: true }));
server.use(express.json());



server.post("/users", (req, res) => {
  const {
    body: { username, email, password, phone, adress, birthday, displayname, image },
  } = req;
  const sqlQuery = `INSERT INTO users (username, email,password,phone,adress,birthday,displayname,image) ` +
    `VALUES ("${username}","${email}","${password}","${phone}", "${adress}","${birthday}","${displayname}","${image}")`;
  db.query(sqlQuery, (err, result) => {
    if (err) return res.status(500).json({ msg: "Terjadi Error", err });
    return res.status(201).json({
      msg: "Pembuatan Berhasil",
      result: {
        username,
        email,
        password,
        phone,
        adress,
        birthday,
        displayname,
        image,
        id: result.id,
      },
    });
  });
});

server.get("/users", (req, res) => {
  const sqlQuery = "SELECT * FROM users";
  db.query(sqlQuery, (err, result) => {
    if (err) return res.json({ msg: "Terjadi Error", err });
    return res.status(200).json({
      result,
    });
  });
});

server.post("/login", (req, res) => {
  const {
    body: { email, password },
  } = req;
  const sqlQuery = `SELECT * FROM users  WHERE email = '${email}' LIMIT 1`;
  db.query(sqlQuery, (err, result) => {
    const user = result[0];
    if (err) return res.json({ msg: "Terjadi Error", err });
    if (user.password !== password) return res.json({ msg: "pasword salah" });
    return res.status(200).json({
      result: user,
    });
  });
})


server.get("/profile/:userId", (req, res) => {
  const { userId } = req.params;
  const sqlQuery = `SELECT * FROM users WHERE id = ${userId} LIMIT 1`;
  db.query(sqlQuery, (err, result) => {
    const user = result[0];
    if (err) return res.json({ msg: "Terjadi Error", err });
    if (result.length === 0) return res.json({ msg: "not found" });
    return res.status(200).json({
      result: user,
    });
  });
})

server.post("/vehicle", (req, res) => {
  const {
    body: { vehiclename, location, price, status, photo, stock, category },
  } = req;
  const sqlQuery = `INSERT INTO vehicle (vehiclename,location,price,status,photo,stock,category) ` +
    `VALUES ("${vehiclename}","${location}","${price}", "${status}","${photo}","${stock}","${category}")`;
  db.query(sqlQuery, (err, result) => {
    if (err) return res.status(500).json({ msg: "Terjadi Error", err });
    return res.status(201).json({
      msg: "Pembuatan Berhasil",
      result:
        vehiclename,
      location,
      price,
      status,
      photo,
      stock,
      category,
      id: result.id,
    });
  });
});

server.get("/vehicle", (req, res) => {
  const sqlQuery = "SELECT * FROM vehicle";
  db.query(sqlQuery, (err, result) => {
    if (err) return res.json({ msg: "Terjadi Error", err });
    return res.status(200).json({
      result,
    });
  });
});



server.post("/editusers/:id", (req, res) => {
  const { id } = req.params;
  console.log(req);
  const {
    body: { username, email, password, phone, adress, birthday, displayname, image },
  } = req;
  const sqlQuery = `UPDATE users SET username = "${username}", email= "${email}",password ="${password}",phone = "${phone}",adress = "${adress}",birthday = "${birthday}",displayname = "${displayname}", image = "${image}" WHERE id = ${id};`;
  db.query(sqlQuery, (err, result) => {
    if (err) return res.status(500).json({ msg: "Terjadi Error", err });
    return res.status(201).json({
      msg: "edit Berhasil",
      result:
      username,
      email,
      password,
      phone,
      adress,
      birthday,
      displayname,
      image,
      id: result.id,
    });
  });
});


//    server.get('/edituser/(:id)', function(req, res) {

//     let id = req.params.id;

//     connection.query('SELECT * FROM posts WHERE id = ' + id, function(err, rows, fields) {
//         if(err) throw err

//         // if user not found
//         if (rows.length <= 0) {
//             req.flash('error', 'Data Post Dengan ID ' + id + " Tidak Ditemukan")
//             res.redirect('/posts')
//         }
//         // if book found
//         else {
//             // render to edit.ejs
//             res.render('posts/edit', {
//                 id:      rows[0].id,
//                 title:   rows[0].title,
//                 content: rows[0].content
//             })
//         }
//     })
// })