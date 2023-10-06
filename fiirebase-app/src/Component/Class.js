import React, { Component } from 'react'

export default class classcomp extends Component {

    constructor(props){
       super(props)
       this.state={
        name:"kalaip",
        phoneno:987654321,
        city:"cheanni"

}
console.log("constructor -1")
    }
    componentDidMount(){
        console.log("component dimount-2")
        setTimeout( ()=>{
            this.setState({name:"selvip"})
        },2000)
    }
    chnageCity= ()=>{
        this.setState({city:"Cheanni"})
    }
  render() {
console.log("Reander working-3")
    return (
      <div>
        <h1>User Name{this.state.name}</h1>
        <h1>phoneno{this.state.phoneno}</h1>
        <h1>city{this.state.city}</h1>
      </div>
    )
  }
}
