const dotenv = require('dotenv');
const users = require('./data/users');
const User = require('./models/userModel')
const connectDB = require('./config/db.js')

connectDB()
dotenv.config()


const importData = async () => {
    try{
        await User.deleteMany()
        await User.insertMany(users);
        console.log(users);
        console.log('Data Imported !!!!!')
        console.log(process.env.MONGO_URI)
        process.exit()
    }

    catch(error){
        console.log(error);
        process.exit(1)
    }
}


const destoryData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Deleted !!!!!')
        process.exit()
    }

    catch(error){
        console.log(error);
        process.exit(1)
    }
}


if(process.argv[2]==='-d') destoryData()
else importData()
