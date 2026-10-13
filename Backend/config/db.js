import mongoose from "mongoose";
import dns from "dns";

// Fix: Windows DNS proxy (127.0.0.1) refuses SRV queries required by mongodb+srv.
// Force public DNS before connecting.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
