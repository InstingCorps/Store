import { NextResponse, type NextRequest } from 'next/server'
import connectDB from '../database/connectToDB'
import Order from '../database/models/orderSchema'
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('API_KEY')

  if (query === "APIKEYFR09") {
      try {
        connectDB()
    
        const responseAPI = await Order.find()
        
      return NextResponse.json({responseAPI} , {status: 200})
        
      } catch (error) {
      return NextResponse.json({error} , {status: 500})
        
      }} else {
      return NextResponse.json({response: "API KEY NOT SAME!"} , {status: 500})

      }
  }