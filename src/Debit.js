import React from 'react';
import {Link} from 'react-router-dom';
import DebitDescription from './DebitDescription';
import AccountBalance from './AccountBalance';

class Debit extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            amount : "",
            desc:"",
            
        }
    }
    getCreditInfo = () =>{
        let data = this.props.debitData;
        let container = []

        container = data.map( (element) =>{
            return(
                <DebitDescription key={element.id} descrition = {element.description} amount={element.amount} date={element.date} />
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

    addDebit = (event) =>{
        event.preventDefault();
        let date = this.getDate()
        this.props.updateDebit(Number(this.state.amount),
            {
                amount: Number(event.target[1].value),
                description: event.target[0].value,
                date: date,
                id: Math.floor(Math.random() * 100)
            } );
        this.setState({amount:"",desc:"" });



    }

    changeAmount = (event) =>{
        this.setState({amount: event.target.value})
    }

    changeDesc = (event) =>{
        this.setState({desc: event.target.value})
    }

    


    render(){
        return(
            <div>
                <h1>Debit</h1>
                <Link to="/">Home</Link>
                <AccountBalance accountBalance={this.props.accountBalance}/>

                <form onSubmit={this.addDebit}>
                    <h2>Adding Debit</h2>
                    <input type="text" value={this.state.desc}  placeholder="Enter debit description" onChange={this.changeDesc} />
                    <input type="text" value={this.state.amount} placeholder="Enter debit amount" onChange={this.changeAmount} />
                    <input type='submit' value="Add Debit" />
                </form>

                <div>{this.getCreditInfo()}</div>
                
                
            </div>
        )
    }
}

export default Debit;