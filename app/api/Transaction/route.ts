import { NextResponse } from "next/server";
import connectDB from "../database/connectToDB";

import Transaction from "../database/models/transaction";

connectDB()
export async function POST (request : Request) {
    const {transaction_id , statusMetodePembayaran , metodePembayaran} = await request.json()

    await Transaction.create({
        transaction_id,
        statusMetodePembayaran,
        metodePembayaran,
    })
    return NextResponse.json({message: "created"} , {status: 201})
}