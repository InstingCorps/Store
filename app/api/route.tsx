import axios from "axios";
import { hashData } from "../services/data/dataToHash";
import { ref_id } from "../services/data/ref_idGenerator";

import { config } from "dotenv";
config();

const OrderDigiflazz = async (skuCode: string, customer: string): Promise<any> => {
    const refID = ref_id();
    const hashing = hashData(refID);

    console.log(hashing);
    

    const url = `${process.env.APP_URL_DIGIFLAZZ}/transaction`;
    const data = {
        username: process.env.APP_USERNAME_DIGIFLAZZ,
        buyer_sku_code: skuCode,
        customer_no: customer,
        ref_id: refID,
        testing: true,
        sign: hashing
    };

    try {
        const response = await axios.post(url, data);
        const resData = response.data.data;
        console.log(resData);
    return (
        <div>OK</div>
    )
    } catch (error:any) {
        return { error: "error", message: error.message };
    }

};


export default OrderDigiflazz