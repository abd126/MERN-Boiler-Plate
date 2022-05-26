const UserModel = require("../../Model/UserSchema");


const allUser = (req , res) =>{
    UserModel.find({}, (err, users) => {
        if (err) {
            res.send("error", err);
          } else {
            res.send(users);
          }
    })
}


module.exports = allUser