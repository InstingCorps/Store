
import axios from "axios";

export const OrderDigiflazz = async (encryptedData: string, password: string , urls:any): Promise<any> => {

    // const url = `/api/ordersDigiflazz/${urls}`;
    const url = `https://99b5f3e8-464e-4709-90d3-f0b12b2bb0d3-00-xn288uybktno.pike.replit.dev/senddataorder`;

    const data = {
        data: encryptedData ,
        validation: "01_ROZISTORE_VALIDATION_CODE0899",
    };
    console.log(data);
    
    const passwords = "250106"
    
    if (password === passwords) {
        try {
            const response = await axios.post(url, data);
            const resData = response.data
            return resData;
        } catch (error:any) {
            return { error: "error", message: error };
        }
        
    } else {
        return "PASSWORD SALAH"
    }
};
