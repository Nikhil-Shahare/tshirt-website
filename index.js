
//getting data from dotenv
require("dotenv").config()
const app = require("./app")

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running at PORT ${process.env.PORT}`)
})