"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
var userRoutes = require('./routes/userRoutes');
app.get('/', function (req, res) {
    // res.send('Hello World');
    res.json({ info: "The greater the sensibility the greater the suffering … much suffering. " }); // JSON response we can see this in the browser if we go to http://localhost:3000/ and 
});
app.listen(port, function () {
    console.log("Server is running on port http://localhost:".concat(port));
});
//endpoints 
app.use('/users', userRoutes);
