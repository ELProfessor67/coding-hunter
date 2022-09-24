import {readFileSync,writeFileSync} from 'fs';

export default function contact(req,res){
	if(!(req.method === "POST")){
		return res.status(500).send(`cannot not ${req.method} ${req.url}`);
	}
	
	try{
		let file = readFileSync('contactData/contact.json','utf-8');
		file = JSON.parse(file);
		file.contact.push(req.body);
		writeFileSync('contactData/contact.json',JSON.stringify(file));
	}catch(err){
		console.log(err)
		const data = {contact:[]};
		data.contact.push(req.body);
		writeFileSync('contactData/contact.json',JSON.stringify(data));
	}
	res.status(201).json({
		success : true,
		message : 'your message submit successfully'
	});

}