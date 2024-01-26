'use client'
import React, { useState } from 'react';
import { OrderDigiflazz } from '../../ordersDigiflazz';
import { DecryptAutomated } from '@/encrypt/encrypt';
import { ORDERvalidation } from '@/components/validation/URLvalidation';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';
import axios from 'axios';

const AcceptOrder: React.FC<{ params: { accept: string } }> = ({ params }) => {
  const [step, setStep] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [orderResult, setOrderResult] = useState('');
  const [openModal, setOpenModal] = useState(false)
  const [enteredUsername, setEnteredUsername] = useState<string>('');

  const response = params.accept;
  
  const data = response.replace(/%3A/g, ':');
  const DataUser = DecryptAutomated(data)


  async function GetAPI () {
    const res: any = await axios.get(`/api/Transaction/${DataUser.transactionID}`);
    if (res.data.transaction) {
      console.log(res.data.transaction.transaction_id)
      return true
    }else {
      console.log("waduh datanya hilang!");
      return false
    }
  }
  try {
    const verify = DataUser.verify
    if (ORDERvalidation(verify)) {
      const correctPassword = '250106';
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, stateSetter: React.Dispatch<React.SetStateAction<string>>) => {
        stateSetter(event.target.value);
      };


    
      const handleOrderClick = async () => {
        setIsProcessing(true);
        const API = await GetAPI()
        if (API) {
          console.log("OK");
            await OrderDigiflazz(data, enteredPassword , response);
            setStep(0)
        } else {
          console.log("NOT");
          
        }
        if (enteredPassword === correctPassword) {
      // await OrderDigiflazz(data, enteredPassword , DataUser.transactionID);
          setOrderResult("SUKSESS , ORDER SEDANG DI PROSSES");
          setIsProcessing(false);
        } else {
          setOrderResult('Password salah. Silakan coba lagi.');
          setIsProcessing(false);
        }
      };
      console.log(DataUser);
      
      const handleNextStep = async () => {
        
        if (step === 1) {
          // Logika verifikasi username, gantilah dengan logika validasi yang sesuai
          const Passwords: boolean = enteredPassword === correctPassword;
    
          if (Passwords) {
            setIsProcessing(true);
            const API = await GetAPI()
            setOpenModal(API)
            setIsProcessing(false);
            setStep(2); // Pindah ke langkah berikutnya (password)
          } else {
            setOrderResult('Username incorrect. Please try again.');
          }
        } else if (step === 2) {
          // Logika verifikasi password, gantilah dengan logika validasi yang sesuai
          const sssss: boolean = enteredPassword === 'password123';
    
          if (sssss) {
            setStep(3); // Pindah ke langkah berikutnya (additional info)
          } else {
            setOrderResult('Password incorrect. Please try again.');
          }
        }
      };


    
      return (
        <>
        <Button className="bg-color-accent" onClick={() => setStep(1)}>ORDER</Button>

        {step === 1 && (
        <Modal show={true} size="md" popup onClose={() => setStep(0)}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Enter Password!</h3>
              {orderResult && <div>{orderResult}</div>}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Enter an admin password!" />
                </div>
              <TextInput value={enteredPassword} type="password" placeholder="Masukkan password" onChange={(e) => handleInputChange(e, setEnteredPassword)} required />
              </div>
              <div className="w-full">
                <Button
                  className="bg-color-accent"
                  disabled={isProcessing} 
                  isProcessing={isProcessing}
                  processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />} 
                  onClick={handleNextStep}>
                  Next
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

        <Modal show={step === 2} size="md" popup onClose={() => setStep(0)}>
        <Modal.Header />
        {openModal ? (
  <Modal.Body>
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Accept The Order</h3>
      {orderResult && <div>{orderResult}</div>}
      <div>
        <div className='flex justify-between'>Product Name : <p>{DataUser.product_name}</p></div>
        <div className='flex justify-between'>Price : <p>{DataUser.price}</p></div>
        <div className='flex justify-between'>seller_price : <p>{DataUser.seller_price}</p></div>
        <div className='flex justify-between'>seller_name : <p>{DataUser.seller_name}</p></div>
        {/* <TextInput value={enteredPassword} type="password" placeholder="Masukkan password" onChange={(e) => handleInputChange(e, setEnteredPassword)} required /> */}
      </div>
      <div className="w-full">
        <Button
          className="bg-color-accent"
          disabled={isProcessing} 
          isProcessing={isProcessing}
          processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />} 
          onClick={handleOrderClick}
        >
          {isProcessing ? 'Memproses...' : 'I accept'}
        </Button>
      </div>
    </div>
  </Modal.Body>
) : (
  <Modal.Body>
    <div className="space-y-6">
     <h3 className="text-xl font-medium text-gray-900 dark:text-white">Error!</h3>
     <div>transaksi ini sudah usang, silahkan buat transaksi baru</div>
    </div>

  </Modal.Body>
)}

      </Modal>
        </>
      );
  
    } else {
   return (
    <div className="text-center font-bold text-white mt-20">PASTIKAN URL ANDA BENAR!</div>
   )
    }  
  } catch (error) {
    return (
      <div className="text-center font-bold text-white mt-20">ERROR URL TIDAK VALID</div>
  )
  }
 
};

export default AcceptOrder;
