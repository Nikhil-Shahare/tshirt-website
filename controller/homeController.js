exports.home =(req,res) =>{
    res.status(200).json({
        success:true,
        greeting: "Hare krishna"
    })
}