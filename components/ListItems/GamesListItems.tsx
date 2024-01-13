
'use client';
  import React, { useState, useEffect , useRef } from 'react';
  import { Button, Card, Spinner } from 'flowbite-react';
  import { HiOutlineArrowRight } from 'react-icons/hi';
  import PaymentMethod from '@/payment/paymentsMethod';
  import OrdersModal from '@/components/modal/orders';
  import ErrorID from '@/components/modal/errorID';
  import { v4 as uuidv4 } from 'uuid';

interface Components{
  data: any,
  ImgSrc: string
}
function DiamondsList({data, ImgSrc}:Components) {
  const [Price , setPrice] = useState('')
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [Product , setProduct] = useState('')
  const [showFooter, setShowFooter] = useState(false);
  const [showPayment , setShowPayment] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalError, setModalError] = useState<boolean>(false);
  const [productInfo, setProductInfo] = useState({
    verify: "",
    product_name: '',
    Price: null,
    buyer_sku_code: null,
  });
  const errorRef = useRef<any>(null);

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  useEffect(() => {
  const getPrice = Number(sessionStorage.getItem('Price'))

  if (getPrice) {
    const formattedNumber = formatter.format(getPrice).replace(/,00$/, "");
    setPrice(formattedNumber)
  }
  }, [Price]);


  const handleClick = (product_name: string , Price : any , buyer_sku_code: any , category:any , seller_name:any , seller_price: any) => () => {
    const verify: string = "25012006RoziStore_FahrurRozi_001"
    setProductInfo({
      verify,
      product_name,
      Price,
      buyer_sku_code,
    });
    setPrice(Price)
    setProduct(product_name)
    setShowFooter(true);
    sessionStorage.setItem('product_name', product_name);
    sessionStorage.setItem('category' , category);
    sessionStorage.setItem('seller_name' , seller_name);
    sessionStorage.setItem('buyer_sku_code' , buyer_sku_code);
    sessionStorage.setItem('Price', Price);
    sessionStorage.setItem('seller_price', seller_price);
  };

  const OnClicks = () => {

    const verifedID = sessionStorage.getItem("PlayerID")
    const PaymentMethod = sessionStorage.getItem('Payment')


    if (verifedID && PaymentMethod) {
      setModalVisible(true);
    } else {
       setModalError(true)
       if (errorRef.current) {
        errorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setShowPayment(true)
      }
    }
  }

  const ShowPayments = () => () => {
    setShowPayment(!showPayment);
  }

  const Diamonds = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      // Mendapatkan daftar unik jenis produk dari data
      const uniqueTypes = Array.from(new Set((data as { type: string }[]).map((product) => product.type)));
      setProductTypes(uniqueTypes);
      setLoading(false)
    }, [data]);

    // Fungsi untuk mengambil angka dari string
const extractNumber = (str : any) => {
  const matches = str.match(/\d+/);
  return matches ? parseInt(matches[0]) : 0;
};

  // Fungsi untuk menyaring data berdasarkan jenis produk
  const filteredData = selectedType
    ? data.filter((product: any) => product.type === selectedType)
    : data;


// Urutkan data berdasarkan product_name yang mengandung angka
const sortedData = filteredData.sort((a: any, b: any) => extractNumber(a.product_name) - extractNumber(b.product_name));

    return sortedData.map((product : any) => {
      // Menghitung harga baru dengan menambahkan 5%
      const keuntungan = 0.13 // persen

      const ProductPriceWithComma = product.price * (1 + keuntungan) + 1000
      const ProductPrice = Math.ceil(ProductPriceWithComma)
      
      return loading ? (
        // Display a loading indicator while data is being fetched
        <Card key={uuidv4()}>
          <Spinner />
      </Card>
      ) : (
            <Card
              imgSrc={ImgSrc}
              className="hover:bg-slate-800 font-bold hover:text-white focus:bg-slate-800 focus:text-white text-black bg-white"
              key={product.product_name}
              color=""
              onClick={handleClick(
                product.product_name,
                ProductPrice,
                product.buyer_sku_code,
                product.category,
                product.seller_name,
                product.price
              )}
            >
              {product.product_name}
            </Card>
      );
    });
  };

  return (
    <>

  <Card className='m-2 rounded-3xl bg-gray-800 text-white'>
    <div className='text-center font-extrabold'>Pilih Nominal Topup</div>
    <p className="font-bold">Type:</p>
    <div className="flex flex-col items-center space-y-2 overflow-auto max-h-96 rounded-lg">
    <div className="flex space-x-2 ml-auto">
      {productTypes.map((type) => (
        <button
          key={type}
          onClick={() => setSelectedType(type)}
          className={`bg-blue-500 text-white px-4 py-1 rounded-lg font-bold ${selectedType === type ? 'opacity-50 border-2 border-white' : ''}`}
        >
          {type}
        </button>
      ))}
    </div>
  </div>
    <div className="font-sans text-xl font-bold text-right mr-5">Harga :{Price}</div>
    <div className="grid grid-cols-2 md:grid-cols-8 gap-2 text-center">
      {Diamonds()}
    </div>
  </Card>

 { showFooter && 
 <Card className="fixed bottom-0 w-full text-center z-40 rounded-xl" horizontal>
        <div className="flex">
            <div>
              <div></div>
                <div>{Product}</div>
                <div className="font-bold">{Price}</div>
            </div>
          
        <Button className="ml-auto font-bold mt-4" pill color="success" size="md" onClick={OnClicks}
        >Bayar Sekarang</Button>
          <OrdersModal open={modalVisible} onClose={() => setModalVisible(false)} productInfo={productInfo} />
          <ErrorID open={modalError} onClose={() => setModalError(false)}/>
        </div>
    </Card>}
  <Card className="font-bold ml-2 m-5">Langkah 3. Pilih Methode Pembayaran.</Card>
  <div ref={errorRef} className="flex justify-center items-center mt-10">
  <Button onClick={ShowPayments()} size="lg" gradientDuoTone="greenToBlue">
    {showPayment ? 'Sembunyikan Metode Pembayaran' : 'Pilih Metode Pembayaran'}  <HiOutlineArrowRight className="ml-2 h-5 w-5" /></Button>

  </div>
  {showPayment && <PaymentMethod />}
  </>
  )
}

export default DiamondsList;


