// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {readFile} = require('fs');
const {join} = require('path');

export default function handler(req, res) {
  // console.log(`${req.query.file}`)
  readFile(join(__dirname,`../../../../blogData/${req.query.file}.json`),'utf-8',(err,data)=>{
    if(err){
      return res.status(500).json({
        error : err
      });
    }
    // console.log(data)
    res.status(200).json(JSON.parse(data));
  });
}