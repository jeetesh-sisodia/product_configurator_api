var validator=require("validator");
exports.sales_quote_followup_fetch_all = function(req, res, next){
	var checkValid=1;
	var fields = ["user_id"];
	if(typeof req.header("authentication_token")=="undefined" || req.header("authentication_token")==""){
		checkValid=0;
		res.json({"statusCode": 404, "success": "false", "message": "Authentication token not found"});
	}
	else if(checkValid==1){
		for(var i=0; i<fields.length; i++){
			if(typeof req.params[fields[i]]=="undefined" || req.params[fields[i]]=="" || !validator.isNumeric(req.params[fields[i]])){
				checkValid=0;
				res.json({"statusCode": 404, "success": "false", "message": fields[i]+" not found"});
				break;
			}
		}
	}
	if(checkValid==1){
		connection.query("SELECT `id`, `authentication_token` FROM `organization_users` WHERE `authentication_token`='"+req.header("authentication_token")+"' AND `id`="+req.params.user_id, function(err, organization_users) {
			if(err){
				console.log(err);
					res.json({"statusCode": 500, "success":"false", "message": "internal error"});
			}
			else{
				if (organization_users.length>0) {
						next();				
				}
				else{
					res.json({"statusCode": 404, "success":"false", "message": "user not found"});
				}
			}
		});
	}
};


exports.sales_quote_followup_fetch_one = function(req, res, next){
	var checkValid=1;
	var fields = ["user_id", "rfq_id"];
	if(typeof req.header("authentication_token")=="undefined" || req.header("authentication_token")==""){
		checkValid=0;
		res.json({"statusCode": 404, "success": "false", "message": "Authentication token not found"});
	}
	else if(checkValid==1){
		for(var i=0; i<fields.length; i++){
			if(typeof req.params[fields[i]]=="undefined" || req.params[fields[i]]=="" || !validator.isNumeric(req.params[fields[i]])){
				checkValid=0;
				res.json({"statusCode": 404, "success": "false", "message": fields[i]+" not found"});
				break;
			}
		}
	}
	if(checkValid==1){
		connection.query("SELECT `id`, `authentication_token` FROM `organization_users` WHERE `authentication_token`='"+req.header("authentication_token")+"' AND `id`="+req.params.user_id, function(err, organization_users) {
			if(err){
				console.log(err);
					res.json({"statusCode": 500, "success":"false", "message": "internal error"});
			}
			else{
				if (organization_users.length>0) {
						next();				
				}
				else{
					res.json({"statusCode": 404, "success":"false", "message": "user not found"});
				}
			}
		});
	}
};


exports.sales_quote_followup_update = function(req, res, next){
	var checkValid=1;
	var fields="";
	if(typeof req.body.rfq_status_id=="undefined" || req.body.rfq_status_id==""){
		res.json({"statusCode": 404, "success": "false", "message": "rfq_status_id not found"});
	}
	else{
		if(req.body.rfq_status_id==6) {
			fields = ["user_id", "rfq_id", "probability", "next_action", "by_when"];
		}
		else{
			fields = ["user_id", "rfq_id", "probability"];
		}
		if(typeof req.header("authentication_token")=="undefined" || req.header("authentication_token")==""){
			checkValid=0;
			res.json({"statusCode": 404, "success": "false", "message": "Authentication token not found"});
		}
		else if(checkValid==1){
			for(var i=0; i<fields.length; i++){
				if(typeof req.body[fields[i]]=="undefined" || req.body[fields[i]]==""){
					checkValid=0;
					res.json({"statusCode": 404, "success": "false", "message": fields[i]+" not found"});
					break;
				}
			}
		}
		if(checkValid==1){
			connection.query("SELECT `id`, `authentication_token` FROM `organization_users` WHERE `authentication_token`='"+req.header("authentication_token")+"' AND `id`="+req.body.user_id, function(err, organization_users) {
				if(err){
					console.log(err);
					res.json({"statusCode": 500, "success":"false", "message": "internal error"});
				}
				else{
					if (organization_users.length>0) {
						next();
					}
					else{
						res.json({"statusCode": 404, "success":"false", "message": "user not found"});
					}
				}
			});
		}
	}
};

exports.sales_quote_followup_obsolete = function(req, res, next){
	var checkValid=1;
	// rfq_status_id --> 7
	var fields = ["user_id", "rfq_id", "rfq_status_id"];
	if(typeof req.header("authentication_token")=="undefined" || req.header("authentication_token")==""){
		checkValid=0;
		res.json({"statusCode": 404, "success": "false", "message": "Authentication token not found"});
	}
	// else if(typeof req.body.quote_submission_date=="undefined" || req.body.quote_submission_date==""){
	// 			checkValid=0;
	// 			res.json({"statusCode": 404, "success": "false", "message": "quote_submission_date not found"});
	// 			// break;
	// }
	else if(checkValid==1){
		for(var i=0; i<fields.length; i++){
			if(typeof req.body[fields[i]]=="undefined" || req.body[fields[i]]=="" || !validator.isNumeric(req.body[fields[i]])){
				checkValid=0;
				res.json({"statusCode": 404, "success": "false", "message": fields[i]+" not found"});
				break;
			}
		}
	}
	if(checkValid==1){
		connection.query("SELECT `id`, `authentication_token` FROM `organization_users` WHERE `authentication_token`='"+req.header("authentication_token")+"' AND `id`="+req.body.user_id, function(err, organization_users) {
			if(err){
				console.log(err);
					res.json({"statusCode": 500, "success":"false", "message": "internal error"});
			}
			else{
				if (organization_users.length>0) {
						next();
				}
				else{
					res.json({"statusCode": 404, "success":"false", "message": "user not found"});
				}
			}
		});
	}
};

exports.extend_validity_period_quote = function(req, res, next){
	var checkValid=1;
	// rfq_status_id --> 7
	var fields = ["user_id", "rfq_id", "validity_date"];
	if(typeof req.header("authentication_token")=="undefined" || req.header("authentication_token")==""){
		checkValid=0;
		res.json({"statusCode": 404, "success": "false", "message": "Authentication token not found"});
	}
	// else if(typeof req.body.quote_submission_date=="undefined" || req.body.quote_submission_date==""){
	// 			checkValid=0;
	// 			res.json({"statusCode": 404, "success": "false", "message": "quote_submission_date not found"});
	// 			// break;
	// }
	else if(checkValid==1){
		for(var i=0; i<fields.length; i++){
			if(typeof req.body[fields[i]]=="undefined" || req.body[fields[i]]==""){
				checkValid=0;
				res.json({"statusCode": 404, "success": "false", "message": fields[i]+" not found"});
				break;
			}
		}
	}
	if(checkValid==1){
		connection.query("SELECT `id`, `authentication_token` FROM `organization_users` WHERE `authentication_token`='"+req.header("authentication_token")+"' AND `id`="+req.body.user_id, function(err, organization_users) {
			if(err){
				console.log(err);
				res.json({"statusCode": 500, "success":"false", "message": "internal error"});
			}
			else{
				if (organization_users.length>0) {
					next();
				}
				else{
					res.json({"statusCode": 404, "success":"false", "message": "user not found"});
				}
			}
		});
	}
};