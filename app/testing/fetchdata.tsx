
'use client'
import { useState , useEffect } from "react"

export default function TestFetch() {
    const [ID , setID] = useState(null)
    const uid = 6651977708650
    const link = `https://v1.apigames.id/merchant/M230331TXQU1280OR/cek-username/mobilelegend?user_id=${uid}&signature=6081e07e665cde449d954de3ed05e71b` 

    useEffect(() =>{
        fetch(link)
        .then((response) => response.json())
        .then((data) => setID(data.data.username))
    },[link])

    return(
        <div className="text-white font-bold">fetch api{ID}</div>
    )
}