'use client'
import React, { useState , useRef } from 'react';
import { OrderDigiflazz } from '../../ordersDigiflazz';
import { HiInformationCircle } from 'react-icons/hi';
import { DecryptAutomated, EncryptAutomated } from '@/encrypt/encrypt';
import { ORDERvalidation } from '@/components/validation/URLvalidation';
import { Alert, Button, Dropdown, Label, Modal, TextInput } from 'flowbite-react';
import { AiOutlineLoading } from 'react-icons/ai';
import axios from 'axios';

const AcceptOrder: React.FC<{ params: { accept: string } }> = ({ params }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [Error, setError] = useState<string>();
  const [openModal, setOpenModal] = useState(false)
  const [Debt, setDebt] = useState<string>("silahkan pilih status pembayaran!");
  const [NameBuyer, setNameBuyer] = useState<string>();

  const response = params.accept;
  
  const data = response.replace(/%3A/g, ':');
  const DataUser = DecryptAutomated(data)

  const sendData = {
    buyer_sku_code: DataUser.buyer_sku_code,
    transactionID: DataUser.transactionID,
    id: DataUser.id,
    verify: DataUser.verify,
    statusPembayaran: Debt,
    buyerName: NameBuyer
  };

  

  async function getTRX () {
    const res: any = await axios.get(`/api/Transaction/${DataUser.transactionID}`);
    if (res.data.transaction) {
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


      const handleEnterClick = () => {
        // Menggunakan conditional chaining untuk mengakses properti .value dengan aman
        const inputValue = inputRef.current?.value.toLowerCase();

        // Lakukan sesuatu dengan nilai inputValue, misalnya, menyimpannya dalam state Debt
        if (inputValue !== undefined) {
          setNameBuyer(inputValue);
        }
      };
    
    
      const handleOrderClick = async () => {
        setIsProcessing(true);
        const API = await getTRX()
        if (API && NameBuyer !== undefined && Debt !== "silahkan pilih status pembayaran!") {
          console.log("OK");
        const DataSend: any = EncryptAutomated(sendData)
            await OrderDigiflazz(DataSend, enteredPassword, response);
            setStep(0)
        } else {
          console.log("NOT");
          setIsProcessing(false);
          setError("Silahkan Isi Nama Pembeli Dan Status!")
          
        }
      };
      
      
      const handleNextStep = async () => {
        
        if (step === 1) {
          // Logika verifikasi username, gantilah dengan logika validasi yang sesuai
          const Passwords: boolean = enteredPassword === correctPassword;
    
          if (Passwords) {
            setIsProcessing(true);
            const API = await getTRX()
            setOpenModal(API)
            setIsProcessing(false);
            setStep(2); // Pindah ke langkah berikutnya (password)
          } else {
            setError('Password incorrect. Please try again.');
          }
        } else if (step === 2) {
          // Logika verifikasi password, gantilah dengan logika validasi yang sesuai
          const sssss: boolean = enteredPassword === 'password123';
    
          if (sssss) {
            setStep(3); // Pindah ke langkah berikutnya (additional info)
          } else {
            setError('Password incorrect. Please try again.');
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
        {Error && (
        <Alert color="failure" onDismiss={() => setError('')} icon={HiInformationCircle}>
          <div>{Error}</div>
        </Alert>
      )}
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
      {Error && (
        <Alert color="failure" onDismiss={() => setError('')} icon={HiInformationCircle}>
          <div>{Error}</div>
        </Alert>
      )}
      <div>
        <div className='flex justify-between'>Product Name : <p>{DataUser.product_name}</p></div>
        <div className='flex justify-between'>Price : <p>{DataUser.price}</p></div>
        <div className='flex justify-between'>seller_price : <p>{DataUser.seller_price}</p></div>
        <div className='flex justify-between'>seller_name : <p>{DataUser.seller_name}</p></div>
      </div>
      <div>
        <div>silahkan isi nama Pembeli.</div>
        <div className='flex gap-5'><p>nama Pembeli :</p><p>{NameBuyer}</p></div>
        <input type="text" ref={inputRef} />
      <Button className="bg-color-accent mt-3" type='submit' onClick={handleEnterClick}>Enter</Button>
      </div>
      {/* )} */}
      <div className='flex justify-between'>
      <div>Status Pembayaran : </div>
      <div>{Debt}</div>
      </div>

      <div className='bg-color-primary flex justify-end rounded'>
      <Dropdown className='font-bold' label="Pilih Status Pembayaran" dismissOnClick={true}>
      <Dropdown.Item onClick={() => setDebt("Utang")}>Utang</Dropdown.Item>
      <Dropdown.Item onClick={() => setDebt("Lunas")}>Lunas</Dropdown.Item>
    </Dropdown>
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
