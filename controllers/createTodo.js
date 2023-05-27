const Todo=require('../models/Todo');

exports.createTodo = async (req,res)=>{
try{
    const{title,description}=req.body;
    const newTodo= await Todo.create({title,description});
    res.status(200).json({
        success:true,
        data:newTodo,
        message:'Todo created successfully'
    });

}
catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
        success:false,
        message:err.message
    });
}}