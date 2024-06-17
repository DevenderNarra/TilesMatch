import { useEffect, useState } from 'react';
import './index.css'

const Card=({card,selectedCards,setSelectedCards})=>{
    const [isFlipped,setIsFlipped]=useState(false);

   const handleOnclick=()=>{
    setSelectedCards([...selectedCards,card])
   }

useEffect(()=>{
    if (selectedCards[0]===card || selectedCards[1]===card || card.isMatch){
        setIsFlipped(true)
    }else{
        setIsFlipped(false)
    }
},[selectedCards])

    return(
        <div className={isFlipped?'card open':'card'} onClick={handleOnclick}>
         <div className="front">
            <img src={card.image} alt=""/>
         </div>
         <div className='back'>

         </div>
        </div>
    )
}
export default Card