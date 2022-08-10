const db = require('../config/db.config.js');
const Shareholders = db.shareholders;
const Shares = db.shares;
const Portfolios = db.portfolios;

const shareService={};

//Find user's portfolio by user id
shareService.showUserPortfolio=function(id, callback){
    Portfolios.findAll({
        where: { FK_shareholder_id: id }
    })
    .then(data => {
        return callback(null,data);
    })
    .catch(err => {
        return callback({message:err.message || "Error occurred."});
    });
}




//Find share by name from shares table
shareService.findShareByNameFromShares=function(data, callback){
    Shares.findAll({
        where: { share_name: data.shareName }
    })
    .then(instances => {
        
        return callback(null,instances);
    })
    .catch(err => {
        return callback({message:err.message || "Error occurred."});
    });
}

/////////BUY SHARE/////
// Update sum of sold shares 
shareService.updateAcquiredShare=function(newSold,data,callback){

    Shares.update({
        sum_of_sold: newSold
    },
    {
        where:{share_name : data.shareName}
    })
    .then(instance => {

        return callback(null,instance);
    })
    .catch(err => {
        return callback({message:err.message || "Error occurred."});
    });
}

function checkShareToBuy(portfolioInstance, data, callback){
    
    
    portfolioInstance.save()
    .then(savedInstance=>{
        return callback(null, savedInstance);
    })
    .catch(err=>{
        return callback({message:err.message || "Error occurred."});
    });
}

// Update Portfolio table
shareService.updatePortfolioForBuy=function(data,callback){
    Portfolios.findOrCreate({
        where: {
          FK_shareholder_id: data.id,
          FK_share_name: data.shareName
        },
        defaults:{
            FK_share_name: data.shareName,
            count: data.count,
            FK_shareholder_id: data.id
        }
    })
    .then(res => {
        var instance=res[0];
        var isCreated=res[1];
        console.log("Instance: "+instance);

        if(isCreated) return callback(null,instance);

        //varsa update
        updatePortfolioInstanceForAcquired(instance, data, function(err,savedInstance){
            return callback(null, savedInstance);
        });
    })
    .catch(err => {
        return callback({message:err.message || "Error occurred."});
    });
}

function updatePortfolioInstanceForAcquired(portfolioInstance, data, callback){
    
    portfolioInstance.FK_share_name= data.shareName || portfolioInstance.FK_share_name;
    portfolioInstance.count= (data.count+portfolioInstance.count) || (portfolioInstance.count+portfolioInstance.count);
    portfolioInstance.FK_shareholder_id= data.id || portfolioInstance.FK_shareholder_id;

    console.log("portfolioInstance.FK_share_name   "+portfolioInstance.FK_share_name);
    console.log("portfolioInstance.count   "+portfolioInstance.count);
    console.log("portfolioInstance.FK_shareholder_id   "+portfolioInstance.FK_shareholder_id);


    portfolioInstance.save()
    .then(savedInstance=>{
        return callback(null, savedInstance);
    })
    .catch(err=>{
        return callback({message:err.message || "Error occurred."});
    });
}


/////////SELL SHARE/////
//Find share by name from portfolios table
shareService.findShareByNameFromPortfolios=function(data, callback){
    Portfolios.findAll({
        where: { 
            FK_shareholder_id: data.id,
            FK_share_name: data.shareName 
        }
    })
    .then(instances => {
        
        return callback(null,instances);
    })
    .catch(err => {
        return callback({message:err.message || "Error occurred."});
    });
}
// Update count of shares (Portfolio count)
shareService.updatePortfolioInstanceCount=function(instanceID, newCount, callback){
    Portfolios.update({
        count: newCount
    },
    {
        where:{
            id: instanceID
        }
    })
    .then(instance => {

        return callback(null,instance);
    })
    .catch(err => {
        return callback({message:err.message || "Error occurred."});
    });
}

// Update sum of sold share table
shareService.updateSoldShare=function(newSum, data, callback){
    Shares.update({ 
        sum_of_sold: newSum
    },
    {
        where:{
            share_name: data.shareName
        }
    })
    .then(instance => {

        return callback(null,instance);
    })
    .catch(err => {
        return callback({message:err.message || "Error occurred."});
    });
}





















module.exports=shareService;