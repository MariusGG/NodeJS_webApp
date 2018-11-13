
const express = require('express');
const app = express();
const messages = require('./modMessage.js');
let all_notes = ' ';

app.get("/", function(request,response){

	for(var i = 0; i <= messages["notes"].length -1; i++){
		all_notes += messages["notes"][i] + "<br>";
	}
	response.send(all_notes);
});

app.listen(3000,function(error){
	if(error == true){
		console.log("some error occured");
	}else{
		console.log("listening on localHost:3000");
	}
 });
