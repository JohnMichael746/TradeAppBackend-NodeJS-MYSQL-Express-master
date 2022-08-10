module.exports = function(app) {
 
    const shareholders = require('../controller/shareholder.controller.js');
 

    //Show User Portfolio
    app.get('/api/shareholders/portfolio/:id', shareholders.showUserPortfolio);


    // Retrieve all Shareholder
    app.get('/api/shareholders', shareholders.findAll);

    
    // Retrieve a single Shareholder by Id
    app.get('/api/shareholders/:id', shareholders.findById);
 
    // Update a Shareholder with Id
    app.put('/api/shareholders/:id', shareholders.update);
 
    // Delete a Shareholder with Id
    app.delete('/api/shareholders/:id', shareholders.delete);
}