
import ReactDOM from 'react-dom';
import './App.css';
import CreditDescription from './CreditDescription';
import {Link}  from 'react-router-dom';
import React from 'react';
import AccountBalance from './AccountBalance';
    
class Credit extends React.Component {
  constructor(props){
    super(props);

    this.state ={
        amount : "",
        description:"",
        
    }
}
getCreditInfo = () =>{
    let data = this.props.creditData;
    let container = []

    container = data.map( (element) =>{
        return(
            <CreditDescription key={element.id} description = {element.description} amount={element.amount} date={element.date} />
        )
    });

    return container;
}

getDate(){

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //As January is 0.
    let yyyy = today.getFullYear();
        
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
        
    return (mm+"/"+dd+"/"+yyyy);
    
}

addCredit = (event) =>{
    event.preventDefault();
    let date = this.getDate()
    this.props.updateCredit(Number(this.state.amount),
        {
            amount: Number(event.target[1].value),
            description: event.target[0].value,
            date: date,
            id: Math.floor(Math.random() * 100)
        } );
    this.setState({amount:"",description:"" });



}

changeAmount = (event) =>{
    this.setState({amount: event.target.value})
}

changeDescription = (event) =>{
    this.setState({desc: event.target.value})
}




render(){
    return(
        <div className="container">
            <h1 className="heading">Credit</h1>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/userProfile">User Profile</Link>
            <AccountBalance accountBalance={this.props.accountBalance}/>

            <form onSubmit={this.addCredit} className="credit-form">
                <h2>Adding Credit</h2>
                <input type="text" value={this.state.desc}  placeholder="Enter credit description" onChange={this.changeDesc} />
                <input type="text" value={this.state.amount} placeholder="Enter credit amount" onChange={this.changeAmount} />
                <input type='submit' value="Add Credit" />
            </form>

            <div>{this.getCreditInfo()}</div>
            
            
        </div>
    )
}
}

export default Credit;