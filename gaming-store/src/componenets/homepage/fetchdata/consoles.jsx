export default function Consoles ({details}) {

    const {image , title , price} = details
    return (
    
    <section className='consoles-conatainer'>
       
            <img src={image}/>
                <div className='product-title'>
                    <h1>{title}</h1>
                </div>
            <div className='products-price'>
                <p>{price}$</p>
            </div>
   
        </section>
    
    
  )
}