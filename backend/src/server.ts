import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import prisma from './utils/prisma.js'

const PORT = process.env.PORT || 5000;

async function startServer(){
    try {
        await prisma.$connect();
        console.log("Database connected");

        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`)
        })

    } catch (error) {
        console.log(error);
    }
}

startServer();

