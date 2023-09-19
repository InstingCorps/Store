import Transaction from "./transaction";


export async function updateExpirationTime(transactionId: any) {
    try {
      // Cari dokumen berdasarkan transactionId
      const transaction = await Transaction.findOne({ transaction_id: transactionId });
      if (transaction) {

        //Perbarui status menjadi "PENDING"
        transaction.statusMetodePembayaran = "SUCCESS DI BAYAR"
        transaction.status = "BELUM DI PROCCESS"

        // Perbarui waktu penghapusan menjadi 1 menit dari sekarang
        transaction.createdAt = new Date(Date.now() + 604800 * 1000); // 60 detik * 1000 milidetik
        await transaction.save();
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  }
