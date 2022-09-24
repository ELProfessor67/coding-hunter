const {readFileSync,readdirSync} = require('fs');


export default function getBlog(req,res){
	const data = readdirSync('blogData','utf-8');
	const blogs = [];
	const length = data.length;
	data.forEach(item => {
		let blog = readFileSync('blogData/'+item,'utf-8');
		blog = JSON.parse(blog);
		blog.path = item.replace(".json",'');
		blogs.push(blog);
	});
	res.status(200).json({blogs,length});
}