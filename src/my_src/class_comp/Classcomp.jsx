import React,{Component} from 'react'

class Classcomp extends Component{
        constructor(){
            super();
            this.state={
                greet:"",
            }
        }
        changeHandler(e){
            this.setState((prevstate)=>{
               return{ ...prevstate,...{[e.target.name]:e.target.value}}
            });
        }
        
        render(){
        return (<div>
            <h1>Class Compopnent</h1>
            <h2>Hi {this.state.greet}</h2>
            <input type="text" value={this.state.greet} onChange={this.changeHandler} />
            </div>
            )
        } 
}
export default Classcomp