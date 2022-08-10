const db = require('../config/db.config.js');
const Portfolios = db.portfolios;


// Find all Portfolios
exports.findAll = (err, res) => {
	Portfolios.findAll().then(portfolios => {
		
	  // Send all portfolios to Client
	  res.send(portfolios);
	});
};

// Find a Portfolio by Id
exports.findById = (req, res) => {	
	Portfolios.findById(req.params.id).then(portfolio => {
		res.send(portfolio);
	})
};
 
// Update a Portfolio
exports.update = (req, res) => {
	const id = req.params.id;
	Portfolios.update( { firstname: req.body.first_name, lastname: req.body.last_name, email: req.body.email }, 
					 { where: {id: req.params.id} }
				   ).then(() => {
					 res.status(200).send("updated successfully a portfolio with id = " + id);
				   });
};
 
// Delete a Portfolio by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Portfolios.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a portfolio with id = ' + id);
	});
};