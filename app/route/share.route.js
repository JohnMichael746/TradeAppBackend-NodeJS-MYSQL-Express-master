module.exports = function(app) {
 
    const shares = require('../controller/share.controller.js');
 

    //Buy Share
    app.post('/api/shares/buyshare/:id/:share_name/:count/:rate', shares.buyShare);

    //Sell Share
    app.post('/api/shares/sellshare/:id/:share_name/:count/:rate', shares.sellShare);

 
    // Retrieve all Share
    app.get('/api/shares', shares.findAll);
 
    // Retrieve a single Share by Id
    app.get('/api/shares/:id', shares.findById);
 
    // Update a Share with Id
    app.put('/api/shares/:id', shares.update);
 
    // Delete a Share with Id
    app.delete('/api/shares/:id', shares.delete);
}