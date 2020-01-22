import React,{Component} from 'react'
import './Die.css'
class Die extends Component
{
    render()
    {
        let classNames=['one','two','three','four','five','six'];
        let cls1=`fas fa-dice-${classNames[this.props.no]}`
       console.log(cls1);
        return (
            <div className={`anim ${cls1} ${this.props.rolling?'shaking':''}`}></div>
            
        )
       
    }
}
export default Die;