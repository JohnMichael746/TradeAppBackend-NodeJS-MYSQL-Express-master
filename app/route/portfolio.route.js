module.exports = function(app) {
 
    const portfolios = require('../controller/portfolio.controller.js');
 
 
    // Retrieve all Portfolio
    app.get('/api/portfolios', portfolios.findAll);
 
    // Retrieve a single Portfolio by Id
    app.get('/api/portfolios/:id', portfolios.findById);
 
    // Update a Portfolio with Id
    app.put('/api/portfolios/:id', portfolios.update);
 
    // Delete a Portfolio with Id
    app.delete('/api/portfolios/:id', portfolios.delete);
}