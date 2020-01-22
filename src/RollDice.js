import React,{Component} from 'react';
import Die from './Die'
import './RollDice.css'
import 'bootstrap/dist/css/bootstrap.css'
class RollDice extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            dice1:1,
            dice2:2,
            rolling:false
        }
        this.passStates=this.passStates.bind(this);
    }
    passStates(e)
    {
        let d1=Math.ceil(Math.random()*5);
        let d2=Math.ceil(Math.random()*5);
        this.setState({
            dice1:d1,
            dice2:d2,
            rolling:true
        })
        setTimeout(()=>
        {this.setState({
         rolling:false  
        })},1000);
    }
    render()
    {
        console.log(this.state.dice2)
        return( <div className="RollDice">
            <div className="RollDice-flex">
            <Die no={this.state.dice1} rolling={this.state.rolling}/>
            <Die no={this.state.dice2} rolling={this.state.rolling}/>
            </div>
            <button className="btn btn-primary btn-lg" onClick={this.passStates}>{this.state.rolling?"Rolling...":'Roll Dice'}</button>
            
        </div>)
    }
}
export default RollDice;