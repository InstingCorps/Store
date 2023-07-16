

export default function Maths() {
    const getPrice = sessionStorage.getItem('FinalPrice')

    return(
        <div>{getPrice}</div>
    )
    
}
