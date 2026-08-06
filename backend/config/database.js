// import mongoose from "mongoose"

// const database = async() =>{
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/testing");
//         console.log("Database connected successfully")
//     } catch (error) {
//         console.log("Database connection failed")
//         process.exit(1)
        
//     }
// }

// export default database;



// import mongoose from "mongoose"

// const database = async() =>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL);
//         console.log("Database connected successfully")
//     } catch (error) {
//         console.log("Database connection failed")
//         process.exit(1)
        
//     }
// }

// export default database;


import mongoose from  'mongoose';


const database = async() =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/coldrinks")
        console.log("Mongodb connected successfully");
        
    } catch (error) {
        console.log("Failed to connect mongodb",error.message)
        process.exit(1);
        
    }
}


export default database;