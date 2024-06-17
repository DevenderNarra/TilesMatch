import './index.css'

const SuccessScreen=({tries,setGameOver,minutes,seconds})=>{
    const handlePlayClick=()=>{
        setGameOver(false)
    }
    return (
   <div className="game-over">
    <div className='box'>
    <div className='tries'>Game Over after {tries} tries in{`${minutes}:${seconds}`}.</div>
    <button  onClick={handlePlayClick}>Play Again</button>
    </div>
   </div>
)
}
export default SuccessScreen