'use client'

import { Modal, Button } from 'flowbite-react';
import {HiShoppingCart } from 'react-icons/hi';
// import { useRouter } from 'next/navigation';
import { EncryptAutomated } from '@/encrypt/encrypt';
import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';


interface ModalProps {
  open: boolean;
  onClose: () => void;
  productInfo: {
    verify: any
    product_name: string;
    Price: any;
    buyer_sku_code: any;
  };
}

const OrdersModal: React.FC<ModalProps> = ({ open, onClose , productInfo }) => {

    const [isProcessing, setIsProcessing] = useState(false);

    const [PlayerID, setPlayerID] = useState('');
    const [ZoneID, setZoneID] = useState('');
    const [Payments, setPayments] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (typeof window !== 'undefined') {
          // Mengambil nilai dari sessionStorage dan menyimpannya dalam state saat komponen dimuat
          const userID = sessionStorage.getItem('PlayerID');
          const zoneID = sessionStorage.getItem('ZoneID');
          const Payment = sessionStorage.getItem('Payment')
  
          // Memperbarui state dengan nilai-nilai dari sessionStorage
          if (userID) {
            setPlayerID(userID || ''); // Gunakan default string kosong jika tidak ada nilai
          }
          if (zoneID) {
            setZoneID(zoneID || ''); // Gunakan default string kosong jika tidak ada nilai
          }
          if (Payment) {
            setPayments(Payment || ''); // Gunakan default string kosong jika tidak ada nilai
          }
        }
      }, 1500); // Setiap 1000 milidetik (1 detik)
  
      // Membersihkan interval saat komponen unmount
      return () => clearInterval(interval);
    }, []);

    const {
      product_name,
        Price,
      } = productInfo;
      
    const data: any = productInfo

  const encrypt = EncryptAutomated(data)

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const formattedPrice = formatter.format(Price).replace(/,00$/, "");


    // const router = useRouter()
    const accept  = () => {

        setIsProcessing(true);
        window.location.href = `/checkout/${encrypt}`
        // router.push(`/checkout/${encrypt}`)
    
    }

  return (
    <Modal className="items-center justify-center" popup dismissible show={open} onClose={onClose}>
      <Modal.Header className="font-bold mt-5">ORDER DETAIL!</Modal.Header>
      <Modal.Body>
        <div className="space-y-3 font-bold">
        <p>ID: {PlayerID}</p>
        {ZoneID !== "" &&
      (<div>Zone ID = &#40; {ZoneID} &#41;</div>)}
        <p>Product Name: {product_name}</p>
        <p>Price: {formattedPrice}</p>
        <p>Metode Pembayaran :{Payments}</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-between">
        <Button color="failure" onClick={onClose}>Decline</Button>
        <Button color="success" onClick={accept}
        disabled={isProcessing} 
        isProcessing={isProcessing}
        processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}
        >
            <HiShoppingCart className="mr-2 h-5 w-5" />
        <p>
        {isProcessing ? 'Memproses...' : 'I accept'}
      </p></Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrdersModal;
