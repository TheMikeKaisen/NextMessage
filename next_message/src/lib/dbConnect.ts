import mongoose from 'mongoose'


type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

export async function DBconnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already Connected to Database")
        return 
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI || "")
        connection.isConnected = await db.connections[0].readyState
        console.log("Connected to Database")
    } catch (error) {
        console.log("Database Connection Error: ", error)
        process.exit(1)
    }
}

