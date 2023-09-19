
import mongoose ,{ Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  createdAt: {
    type: Date,
    expires: 10, // Dokumen akan terhapus setelah 25000 detik (sekitar 6 jam 56 menit 40 detik)
    default: Date.now,
  },
  // tambahkan bidang lain sesuai kebutuhan
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
