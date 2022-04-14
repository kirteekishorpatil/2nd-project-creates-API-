const meraki_data=require('../controller/data.json')
// console.log(meraki_data)
const knex=require("../model/conection")
// console.log(meraki_data);
const fs=require("fs")
const { param } = require('../router/router')


const getdata=(req,res)=>{
  res.json(meraki_data)
}


  const postdata=(req,res)=>{
    const data={
        id: req.body.id,
        name: req.body.name,
        logo: req.body.log,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type:req.body.course_type,
        lang_available: req.body.lang_available

    }
    knex('data_meraki').insert(data).then(()=>{
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"data post successfully"})
        console.log("Data inserted")
    }).catch((err)=>{
        console.log("Data does not inserted")
    })
}
  const putdata=(req,res)=>{
  knex("data_meraki")
  .where("id","=",req.params.id)
  .update({ id:req.body.id,
    name:req.body.name,
    logo: req.body.log,
    notes: req.body.notes,
    days_to_complete: req.body.days_to_complete,
    short_description: req.body.short_description,
    type: req.body.type,
    course_type:req.body.course_type,
    lang_available: req.body.lang_available

  })
  .then(()=>{
      console.log("update succesfully")
      res.send({message:"data put successfully"})
    })
    .catch((err)=>{
      console.log(err)
    });
  }
  const deletedata=(req,res)=>{
  knex.delete("*").from("data_meraki").where("id","=",req.params.id)
  .then(()=>{
    console.log("delet succesfully")
    res.send({message:"data delet successfully"})
  })
  .catch((err)=>{
    console.log(err)
  });
}

module.exports={getdata,postdata,putdata,deletedata}
