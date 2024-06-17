import { useEffect, useState } from 'react'
import Card from '../Card'
import SuccessScreen from '../SuccessScreen'
import './index.css'

const GameBoard=({name})=>{
    let arrayOfImgs=[
        {
          num:1,
          image:'https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/dhawanheadshot-min.jpg',
          isMatch:false,
        },
        {
          num:2,
          image:' https://yespunjab.com/wp-content/uploads/2022/07/Rohit-Sharma-to-696x497.jpg',
          isMatch:false,
        },
        {
          num:3,
          image:'https://unfoldedstars.in/wp-content/uploads/2024/02/Virat-Kohli-Height-958x575.webp',
          isMatch:false,
        },
        {
          num:4,
          image:'https://assets.telegraphindia.com/telegraph/2024/May/1717058490_new-project-8.jpg',
          isMatch:false,
        },
        {
          num:5,
          image:'https://images.mid-day.com/images/images/2024/feb/yashj_d.jpeg',
          isMatch:false,
        },
        {
          num:6,
          image:'https://sc0.blr1.cdn.digitaloceanspaces.com/article/194126-cynipgbelc-1694804639.jpg',
          isMatch:false,
        }
      ]
    
      const [cards,setCards]=useState([]);
      const [selectedCards,setSelectedCards]=useState([])
      const [score,setScore]=useState(0)
      const [tries,setTries]=useState(0)
      const [gameOver,setGameOver]=useState(false)
      const [seconds,setSeconds]=useState(0)
      const [minutes,setMinutes]=useState(0);
    
      const shuffleImages=()=>{
        //double array
        let shuffledArray=[...arrayOfImgs,...arrayOfImgs]
        //add id
        .map((item,index)=>({...item,id:index+1}))
        //shuffle
        .sort((a,b)=>0.5-Math.random())

        setCards(shuffledArray);
      }
  
      var timer;
      useEffect(()=>{
        timer=setInterval(()=>{
          setSeconds(seconds+1);
          if(seconds==59){
            setMinutes(minutes+1)
            setSeconds(0);
          }
        },1000)
        return ()=>clearInterval(timer)
      })


      useEffect(()=>{
       shuffleImages();
      },[])


    useEffect(()=>{
     if(selectedCards.length===2){
      setTimeout(()=>{
        setSelectedCards([]);
      },1000)
      checkMatch()
     }
    },[selectedCards])

    const checkMatch=()=>{
      if (selectedCards[0].num===selectedCards[1].num){
        setScore(prevState=>prevState+1)
        let updatedCards=cards.map((card)=>{
          if (card.num===selectedCards[0].num){
            return {...card,isMatch:true};
          }
          return card
        })
        setCards(updatedCards)
      }else{
        setTries(prevState=>prevState+1)
      }
    }

    //restart the Game 

    useEffect(()=>{
      if(score===arrayOfImgs.length){
        setGameOver(true)
      }
    })
    return(
      <>
      {gameOver && <SuccessScreen tries={tries} setGameOver={setGameOver} minutes={minutes} seconds={seconds}/>}
      <div className='game-name-container'><h1>Mahajong Game</h1></div>
       <div className='container'>
          <div className='score-container'>
           <div className='score'>Score:{score}</div>
           <div className='tries'>Tries: {tries}</div>
           <div className='time'>Timer: {`${minutes}:${seconds}`}</div>
          </div>
          <div className='welcome-container'>
          <h2 className='heading'>Welcome {name}🥳🥳🥳</h2>
          </div>
        <div className='cards-container'>
            {
              cards.map((card)=>(
              <Card key={card.id} card={card} setSelectedCards={setSelectedCards} selectedCards={selectedCards}/>
              ))}
        </div>
        </div>
      </>
        
    )
}
export default GameBoard