var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    firstname:String,
    lastname:String,
    password: String,
    name: String,
    designation:String,
    contactNo:String,
    email:String,


    team: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],
    interns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
    // ongoingProject: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user"
    // }],
    // doneProjects: [{
    //     type: Strings,
    //     ref: "user"
    // }]
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);
