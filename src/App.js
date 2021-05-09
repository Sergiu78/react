import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
    cars: [
      {name: 'Ford', year: 2019},
      {name: 'Hammer', year: 2010},
      {name: 'BMW', year: 2015}
    ],

    pageTitle: 'React Components',
    showCars: false
  }
  }
  

  toggleCarsHandler = () => {
    
    this.setState({
      showCars: !this.state.showCars 
    })

}
onChangeName(name, index){
  const car = this.state.cars[index]
  car.name = name
  const cars = [...this.state.cars]
  cars[index] = car
  this.setState({ cars }) 

}

deleteHandler(index){
  const cars = this.state.cars.concat()
  cars.splice(index, 1)
  this.setState({ cars })

}
  
  


  render() {
    const devStyle={
      textAlign: 'center'
    }

    let cars = null

    if(this.state.showCars){
      cars =  this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this,index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}

          />
        )
      })
    }


    return (
      <div style={devStyle}>
      
      <h1>{this.props.title}</h1>

       

       <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
       <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px'
       }}>
        {cars}
      </div>
      
        

      </div>
    );
  }
}

export default App;
