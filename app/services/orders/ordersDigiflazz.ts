
import axios from "axios";
import { config } from "dotenv";
config();

export const OrderDigiflazz = async (encryptedData: string, password: string): Promise<any> => {
    // const encryptionKey = process.env.APP_ENCRYPTION_KEY
    // const decryptedData = Decrypt(encryptedData , encryptionKey)
    const url = `/api/ordersDigiflazz/ORDER`;
    const data = {
        data: encryptedData,
    };
    const passwords = "250106"
    
    if (password === passwords) {
        try {
            const response = await axios.post(url, data);
            const resData = response.data
            return resData;
        } catch (error:any) {
            return { error: "error", message: error.message };
        }
    } else {
        return "PASSWORD SALAH"
    }
};
