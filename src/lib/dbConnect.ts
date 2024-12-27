import mongoose, { ConnectOptions } from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to the database. ", connection.isConnected);
    return;
  }

  const options: ConnectOptions = {
    dbName: "CareerDB",
  };

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", options);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Error connecting to database, ", error);
    process.exit(1);
  }
}

export default dbConnect;
