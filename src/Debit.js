import React from 'react';
import {Link} from 'react-router-dom';
import DebitDescription from './DebitDescription';
import AccountBalance from './AccountBalance';

class Debit extends React.Component{
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


    render(){
        return(
            <div>
                <h1>Debit</h1>
                <Link to="/">Home</Link>
                <AccountBalance accountBalance={this.props.accountBalance}/>

                <form>
                    <h2>Adding Debit</h2>
                    <input type="text" value="" placeholder="Enter debit amount" onChange={this.handleChange} />
                    <input type="text" value="" placeholder="Enter debit description" onChange={this.handleChange} />
                    <input type="text" value="" placeholder="Enter debit date" onChange={this.handleChange} />
                    <input type='submit' value="Add" />
                </form>

                <div>{this.getCreditInfo()}</div>
                
                
            </div>
        )
    }
}

export default Debit;