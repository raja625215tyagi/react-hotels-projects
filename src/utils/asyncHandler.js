const asyncHandler = (requestHandler) => {
    (req, res, next, err) => {
        Promise.resolve(requestHandler(req, res, next, err)).catch((error) => next(err))
    }
}


export { asyncHandler }












// second senrio using try catch 

// asyncHandler ak higeorder funcation hai.
// highoder funcation kya hote hai:- ve funcation jo ki funcation as a parameter accepet krta ya fir use return krr te hai

// example
// const asyncHandler=()=>{
//    async ()=>{

//     }
// }


// const asyncHandler=(fn)=> async( req,res,next,err)=>{
// try{
// await fn( req,res,next,err)
// }catch(error){
//     res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//     })

// }
// }
