import {Component } from 'react'
import GameBoard from '../GameBoard'
import './index.css'
class UserNameEntry extends Component{
    state={
        name:'',
        isClicked:false,
    }
    handleChangeName=(event)=>{
     this.setState({
        name:event.target.value,
     })
    }

    onClickPlay=()=>{
       this.setState({
        isClicked:true,
       })
    }

   renderUserPage=()=>(
    <div className="user-container">
    <h1 className='title'> React Tiles</h1>
    <div className="user-box">
        <h2 className='heading'>Enter Your Name</h2>
        <input type="text" onChange={this.handleChangeName}/>
        <button onClick={this.onClickPlay}>Play</button>
    </div>
  </div>
   )

    render(){
        const{name,isClicked}=this.state
        return(
            <>
            {isClicked?<GameBoard name={name}/>:this.renderUserPage()}
            </>
          )
    }
}
export default UserNameEntry