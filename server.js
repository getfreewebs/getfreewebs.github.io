const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join
