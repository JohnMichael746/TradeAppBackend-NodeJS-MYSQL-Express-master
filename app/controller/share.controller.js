const db = require('../config/db.config.js');
const Shares = db.shares;

//Buy share
exports.buyShare=(req,res)=>{
	let data={
		id:req.params.id,
		shareName:req.params.share_name,
		count:parseInt(req.params.count),
		rate:parseFloat(req.params.rate),
		countOfCanBuy:0
	}
	ShareService.findShareByNameFromShares(data, (err,instance)=>{
		if(err) return	res.status(500).send({message:err.message || "Error occurred."});

		countOfCanBuy=(instance[0].share_count)-(instance[0].sum_of_sold);
		
		if(data.count>countOfCanBuy || data.rate!=instance[0].rate){
			return res.status(400).send("(400) Bad Request!");
		}
		
		var newSold=(instance[0].sum_of_sold)+data.count;

		ShareService.updateAcquiredShare(newSold,data,(err,instance)=>{
			if(err) return	res.status(500).send({message:err.message || "Error occurred."});
			
			ShareService.updatePortfolioForBuy(data,(err,instance)=>{
				if(err) return	res.status(500).send({message:err.message || "Error occurred."});
				
				return res.send("Successfull!");

			});
		});
		
	});
};


//Sell share
exports.sellShare=(req,res)=>{
	let data={
		id:req.params.id,
		shareName:req.params.share_name,
		count:parseInt(req.params.count),
		rate:parseFloat(req.params.rate)
	}
	ShareService.findShareByNameFromPortfolios(data, (err,instance)=>{
		
		if(data.count>instance[0].count ){
			return res.status(400).send("(400) Bad Request!");
		}

		if(err) return	res.status(500).send({message:err.message +"Error occurred(1)."});

		var newCount=(instance[0].count)-data.count;
		var instanceID=instance[0].id;

		ShareService.updatePortfolioInstanceCount(instanceID, newCount, (err,instance)=>{
			if(err) return	res.status(500).send({message:err.message || "Error occurred."});

			ShareService.findShareByNameFromShares(data, (err,instance)=>{
				if(err) return	res.status(500).send({message:err.message || "Error occurred."});

				var newSum=(instance[0].sum_of_sold)-data.count;
				shareService.updateSoldShare(newSum, data, (err,instance)=>{
					if(err) return	res.status(500).send({message:err.message || "Error occurred."});

					return res.send("Successfull!");
				})
			})
			
		})

	});
};


 
// Find all Shares
exports.findAll = (err, res) => {
	Shares.findAll().then(shares => {
		
      // Send all shares to Client
	  res.send(shares);
	});
};

// Find a Share by Id
exports.findById = (req, res) => {	
	Shares.findById(req.params.id).then(share => {
		res.send(share);
	})
};
 
// Update a Share
exports.update = (req, res) => {
	const id = req.params.id;
	Shares.update( { firstname: req.body.first_name, lastname: req.body.last_name, email: req.body.email }, 
					 { where: {id: req.params.id} }
				   ).then(() => {
					 res.status(200).send("updated successfully a share with id = " + id);
				   });
};
 
// Delete a Share by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Shares.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a share with id = ' + id);
	});
};