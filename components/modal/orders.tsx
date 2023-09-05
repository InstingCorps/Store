'use client'

import { Modal, Button } from 'flowbite-react';
import {HiShoppingCart } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { EncryptAutomated } from '@/crypto/encrypt';
import { useState } from 'react';
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

    const {
      product_name,
        Price,
        buyer_sku_code
      } = productInfo;
      
    const data: any = productInfo

  const encrypt = EncryptAutomated(data)

    const router = useRouter()
    const accept  = () => {
        setIsProcessing(true);
        router.push(`/checkout/${encrypt}`)
    
    }

  return (
    <Modal className="items-center justify-center" popup dismissible show={open} onClose={onClose}>
      <Modal.Header className="font-bold mt-5">ORDER DETAIL</Modal.Header>
      <Modal.Body>
        <div className="space-y-3">
        <p>ID: {product_name}</p>
        <p>Zone ID: {product_name}</p>
        <p>Product Name: {buyer_sku_code}</p>
        <p>Price: {Price}</p>
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
