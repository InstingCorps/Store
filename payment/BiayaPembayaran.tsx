'use client' 

const BiayaPembayaran = (value : any) => {

        let toString
        const getPrice = sessionStorage.getItem('Price')
        
        if (getPrice !== null) {
            toString = parseFloat(getPrice);
          } else {
            toString = 0
          }

    const Prices = toString
    const Persen = value;
    const TotalPersen = (Prices * Persen) / 100;
    
    const result = Prices + TotalPersen
    const resultAsString = result.toString();
        return resultAsString;
}
export default BiayaPembayaran;
