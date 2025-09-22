"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const ClientSchema = new mongoose_1.Schema({
    name: { type: String, },
    email: { type: String, unique: true },
    password: { type: String },
    BaseImage64: { type: String },
    fcmtoken: { type: String },
    isVerified: { type: Boolean, default: false },
    googleId: { type: String, unique: true, sparse: true },
}, { timestamps: true, });
exports.ClientModel = mongoose_2.default.model('Client', ClientSchema);
