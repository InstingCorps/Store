'use client'
import React from 'react'
import ListItems from "../../../components/ListItems/OthersListItems";

const Client = ({ data, url }: { data: any, url: any }) => {
    console.log("CILENT");
    
  // Tambahkan kondisi untuk menampilkan loading jika data belum siap
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ListItems data={data} ImgSrc={url} />
    </div>
  );
};

export default Client;

