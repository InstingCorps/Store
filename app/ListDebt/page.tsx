  'use client'
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
import { Badge } from 'flowbite-react';
  
  const Debt = () => {
    const [transactions, setTransactions] = useState<any[]>([]);
    const [selectedBuyer, setSelectedBuyer] = useState<string>('all');
    const [filteredTransactions, setFilteredTransactions] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        try {
          const apikey = "APIKEYFR09"
          const responseAPI = await axios.get(`/api/getData?API_KEY=${apikey}`)
          console.log(responseAPI.data.responseAPI);
          setTransactions(responseAPI.data.responseAPI);
          setFilteredTransactions(responseAPI.data.responseAPI); // Initialize filteredTransactions with all transactions
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchAPI();
    }, []);
  
    const handleBuyerChange = (buyerName: string) => {
      setSelectedBuyer(buyerName);
      filterTransactions(buyerName);
    };
  
    const filterTransactions = (buyerName: string) => {
      // Filter transactions based on the selected buyerName
      if (buyerName === 'all') {
        setFilteredTransactions(transactions);
      } else {
        const filteredData = transactions.filter(transaction => transaction.buyerName === buyerName);
        setFilteredTransactions(filteredData);
      }
    };
  
    return (
      <div className="text-black bg-white min-h-screen">
        <h2>Transaction List</h2>
        <label htmlFor="buyerDropdown">Select Buyer: </label>
        <select id="buyerDropdown" value={selectedBuyer} onChange={(e) => handleBuyerChange(e.target.value)}>
          <option value="all">All Buyers</option>
          {transactions.map((transaction, index) => (
            <option key={index} value={transaction.buyerName}>{transaction.buyerName}</option>
          ))}
        </select>
        <div className="overflow-x-auto">
  <table className="min-w-full table-auto text-white">
    <thead className='bg-color-primary'>
      <tr className=''>
        <th className="m-1 p-1">Buyer Name</th>
        <th className="m-1 p-1">Items Name</th>
        <th className="m-1 p-1">Status</th>
        <th className="m-1 p-1">Buyer Price</th>
        {/* <!-- Add more columns as needed --> */}
      </tr>
    </thead>
    <tbody className=''>
      {filteredTransactions.map((transaction, index) => (
        <tr
        key={index}
        className="bg-color-secondary items-center align-middle text-center"
      >

          <td className="m-1 p-1">{transaction.buyerName}</td>
          <td className="m-1 p-1">{transaction.product}</td>
          <td className="bg-color-secondary items-center align-middle text-center">
            <Badge className='' color={`${
          transaction.statusMetodePembayaran === 'lunas'
            ? 'success'
            : 'failure'
        }`}>{transaction.statusMetodePembayaran.toUpperCase()}</Badge></td>
          <td className="m-1 p-1">{transaction.buyerPrice}</td>
          {/* <!-- Add more columns as needed --> */}
        </tr>
      ))}
    </tbody>
  </table>
</div>



      </div>
    );
  }
  
  export default Debt;
  