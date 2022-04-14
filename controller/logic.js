const fs=require("fs")
const express=require("express")
const axios=require("axios")
meraki_data=axios.get("https://api.merakilearn.org/courses")


.then(api=>{
    meraki_data=api.data
    // console.log(meraki_data)
    file=JSON.stringify(meraki_data,null,3)
    a=fs.writeFileSync("data.json",file)

});



const data=require("../model/conection")
const data1=require("./data.json")
for(i of data1){
    data("data_meraki").insert({
        id:i.id,
        name:i.name,
        logo:i.logo,
        notes:i.notes,
        days_to_complete:i.days_to_complete,
        short_description:i.short_description,
        type:i.type,
        course_type:i.course_type,
        lang_available:i.lang_available
    })
    .then(()=>{
        console.log("insert")
    })  .catch(()=>{
        console.log("not inserted")
    })      
}
