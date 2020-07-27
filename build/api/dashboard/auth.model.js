"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    name: {
        type: String,
        match: /^[a-zA-Z ]{2,30}$/,
        required: [true, 'name is required...!']
    },
    email: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        unique: true,
        lowercase: true,
        required: [true, 'email is required...!']
    },
    username: {
        type: String,
        match: /^[a-zA-Z0-9]+$/,
        unique: true,
        required: [true, 'username is required...!']
    },
    password: {
        type: String,
        required: [true, 'password is required...!']
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.default.model('Users', userSchema);
