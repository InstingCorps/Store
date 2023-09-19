import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Fahrur:OJdg3sy2HFzHtOnx@cluster0.ybhonk4.mongodb.net/RoziStore')
    
    console.log('Terhubung ke MongoDB');
  } catch (error: any) {
    console.error('Kesalahan koneksi MongoDB:', error.message);
  }
};

export default connectDB;
