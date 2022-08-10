const express = require('express');
const { Instance } = require('sequelize');

const db = require('../config/db.config.js');
const Shareholders = db.shareholders;
const ShareService=require('../service/share.service.js');


//Find user portfolio
exports.showUserPortfolio=(req,res)=>{
	ShareService.showUserPortfolio(req.params.id, (err,data)=>{
		
		if(err)
		{ 
			return	res.status(500).send({message:err.message || "Error occurred."});
		}
		return res.send(data);
	})
};



// Find all Shareholders
exports.findAll = (err, res) => {
	Shareholders.findAll().then(shareholders => {

		// Send all shareholders to Client
		res.send(shareholders);
	});
};

// Find a Shareholder by Id
exports.findById = (req, res) => {
	Shareholders.findById(req.params.id).then(shareholder => {
		res.send(shareholder);
	})
};



// Update a Shareholder
exports.update = (req, res) => {
	const id = req.params.id;
	Shareholders.update({ firstname: req.body.first_name, lastname: req.body.last_name, email: req.body.email },
		{ where: { id: req.params.id } }
	).then(() => {
		res.status(200).send("updated successfully");
	});
};

// Delete a Shareholder by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Shareholders.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send("deleted successfully");
	});
};