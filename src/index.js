import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

class Clima extends Component{

  state={
    data : []
  }

  componentDidMount(){
    console.log("Componente montado")
    //cargar datos de la API en el atributo datos
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Lima&appid=0cceeabb761b2dcfbac3d81db70108bb&units=metric")
        .then(data => data.json())
        .then(data => this.setState({
          temperatura: data.main.temp,
          descripcion: data.weather[0]. description,
          humedad: data.main.humidity,
          presion: data.main.pressure,
          nombre: data.name,
          pais: data.sys.country,
          id: data.cod
        }
           
        ))
      
  }

  render(){
    return (
     
      <body>
      
        <div className="abajo">
          <div className="container p-4">
          
            <div className="col-md-7 ">
              <h1>Informacion Del Clima De {this.state.nombre}</h1><hr/> 
                {  console.log(this.state.data)}
                
                <p><b>Codigo:</b>&nbsp;  <i> {this.state.id}</i> </p>
                <p><b>Nombre Ciudad:</b>&nbsp;  <i> {this.state.nombre}</i> </p>
                <p><b>Temperatura:</b>&nbsp;  <i> {this.state.temperatura} C°</i> </p>
                <p><b>Humedad:</b>&nbsp;  <i> {this.state.humedad}</i> </p>
                <p><b>Descripcion:</b>&nbsp;  <i> {this.state.descripcion} </i></p>
                <p><b>País:</b>&nbsp;  <i> {this.state.pais} </i></p>
            </div>
          </div>
        </div>
      </body>
   
     
      

      
    );
  }


}

ReactDOM.render(
  <Clima />,
  document.getElementById('root')
);

