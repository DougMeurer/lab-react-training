import style from './style.css'

function CreditCard ({type, number, expirationMonth, expirationYear,bank,owner,bgColor,color}) {

    let matricData = number.replace(/.(?=.{4,}$)/g, '*')
     
    return (

            <div style={{ display: 'flex', backgroundColor: `${bgColor}`, color:`${color}`, borderRadius: '0.5rem', padding: '40px 1px 40px 1px', gap: '1rem'}} >
               <div> <img src='../../assets/images/visa.png' alt='card flag'/></div>
               <h3>{matricData}</h3>
               <span>{expirationMonth}</span>
               <span> {expirationYear}</span><span>{bank}</span>
               <span>{owner}</span>
            </div> 
    )
}

export default CreditCard