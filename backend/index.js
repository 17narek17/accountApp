/* eslint-disable */
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const Account = require("./model/account");

const app = express();

const allowCrossDomain = function allowCrossDomain(req, res, next) {
  console.log('>>>>>>>>>>');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-DAOMAKER, GOOGAPPUID, X-HACKERS, X-Parse-Master-Key, X-Parse-REST-API-Key, X-Parse-Javascript-Key, X-Parse-Application-Id, X-Parse-Client-Version, X-Parse-Session-Token, X-Requested-With, X-Parse-Revocable-Session, Content-Type, Cache-control, csrf-token, user-agent');
  res.header('Access-Control-Expose-Headers', 'Content-Disposition');
  if ('OPTIONS' == req.method) { // intercept OPTIONS method
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(
  allowCrossDomain
);

app.use(express.json());

mongoose.connect('mongodb+srv://taskUser:20narek20@cluster0.qkf13cq.mongodb.net/accounts?retryWrites=true&w=majority')

app.get('/', async (req, res) => {
    await Account.find({}, (err, result) => {
        res.send(result)
    }).clone()
})

app.get('/accounts/:id', async (req, res) => {
  const { id } = req.params;
  await Account.find({_id: id}, (err, result) => {
    res.send(result)
  }).clone()
})

app.listen(3001);
