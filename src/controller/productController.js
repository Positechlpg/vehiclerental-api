const get = function(req, res) {
    let data = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address":
        {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "array": [
            {
                "data": "a"
            },
            {
                "data": "1"
            }
        ]
        };

        data.name = req.query.name

    res.send(data)
};

const post = function(req, res) {

    const body = req.body;

    let data = {
        id: 1,
        name: body.name,
        username: "Bret",
        email: "Sincere@april.biz",
        address: body.alamat,
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        }

    res.send(data)
};


module.exports = {
    get,
    post
};
