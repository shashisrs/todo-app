// import the model
const Todo=require('../models/Todo');
// define route handler
exports.getTodo = async (req,res)=>{
    try{
        // fetch all todo items from database
        const todos= await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:'Todo fetched successfully'
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

    exports.getTodoById = async (req,res)=>{
        try{
            // fetch all todo items from database
            const {id}=req.params;
            const todo= await Todo.findById({_id:id});
                if(!todo){
                   return res.status(404).json({
                        success:false,
                        message:'No data found with given id',
                   })
                }
            res.status(200).json({
                success:true,
                data:todo,
                message:`Todo ${id} fetched successfully`
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