 import jwt from "jsonwebtoken";
 import {
     TOKEN_SECRET
 } from "../config.js";

 export function createAccessToken(paylod) {
     return new Promise((resolve, reject) => {
         jwt.sign(
             paylod,
             TOKEN_SECRET, 
             {
                 expiresIn: "1D"
             }, (err, token) => {
                 if (err) reject(err)
                 resolve(token)
             });
     })

 }