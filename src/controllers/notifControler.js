// const notif = {};
// const response = require("../helpers/response");
const admin = require("firebase-admin");
const key = require("../../private/vehicle-c0086-firebase-adminsdk-ct1ed-568cbdcc47.json");
const { getUser } = require("../models/UserModel");
// const ServiceResponse = require("../helper/ServiceResponse");
// const models = require("../models/firebase");

// FIREBASE
admin.initializeApp({
  credential: admin.credential.cert(key),
});
const message = admin.messaging();

const notifSend = async (req,res) => {
    const {body} = req
    console.log(body);
    try {
         const result = await getUser(body.id)
         if (result.length===0) return res.status(404).json({pesan:"id tidak ditemukan"})
         const token = result[0].token_fcm
        await message.send({
            token: token,
            notification: {
                title: body.title,
                body: body.message,
            },
        })
        return res.status(200).json({
                  pesan: "notification sent",
                  token
                });
    } catch (error) {
        return res.status(500).json({
                  pesan: "firebase-server",
                  error,
                });
    }
}

module.exports={notifSend}

// notif.send = async (req, res) => {
//   try {
//     const { body } = req;
//     await message.send({
//       token: body.receiver,
//       notification: {
//         title: body.title,
//         body: body.message,
//       },
//     });
//     return res.status(200).json({
//       pesan: "notification sent",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       pesan: "internal server error firebase",
//       error,
//     });
//   }
// };

// notif.getToken = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("id", id);
//     const result = await models.getUserToken(id);
//     console.log(result[0]);
//     return res.status(200).json({
//       pesan: "Get Data Success",
//       data: {
//         id: result[0].id,
//         token: result[0].FBtoken,
//       },
//     });
//   } catch (error) {
//     return res.statuys(500).json({
//       pesan: "internal server error",
//       error,
//     });
//   }
// };

// module.exports = notif;