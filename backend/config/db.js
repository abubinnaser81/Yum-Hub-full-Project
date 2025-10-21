import mongoose from "mongoose";

export const connectDB = async () =>{
 await mongoose.connect('mongodb+srv://abunaser50033:<db_password>@cluster0.raex7lo.mongodb.net/Yum-Hub').then(()=>console.log("DB Connected"));
}