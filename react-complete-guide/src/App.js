import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  state = {
    Persons :
    [{name :"Aakash"},
    {name :"Anshu"}
  ],
    visibility: false
};

  btnStyle ={
    margin:"20px"
  }

  populatePerson =()=>{

    if(this.state.visibility){
    console.log("entered populatePerson")
    let personsList = [...this.state.Persons];
    return personsList.map(
      (x, key)=>{
       return <Person clickHandler= {()=>this.personClickHandler(key)} key={key} name={x.name}/>

      }
    );
  }
  else{
    return null;
  }
  }

  buttonClickHandler =()=>{
    console.log("clicked")
    this.setState(
      {
        visibility : !this.state.visibility
      }
    )
    
}

personClickHandler =(index)=>{

  console.log("entered personClickHandler")
  console.log("index", index);
    let personsList = [...this.state.Persons];

    let newpersonList =personsList.filter((x,key)=>{
      console.log("key", key);

      return key !== index;
    });
    this.setState({
      Persons : newpersonList
    })
}

  render() {
    return (
      <div className="App">
        <button style={this.btnStyle} className="btn btn-primary" onClick={this.buttonClickHandler}>Toggle</button>
        {this.populatePerson()}
        
      </div>
    );
  }
}

export default App;
