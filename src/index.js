import React from 'react';
import ReactDOM from 'react-dom';

//Una forma es la siguiente: 
// ReactDOM.render(
//   <React.StrictMode>
//     <h1>Hola Miguel!</h1>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//O también se puede escribir de esta forma con JSX:
//ReactDOM.render(<h1>Hola Miguel!</h1>,document.getElementById('root'));

//También lo podemos escribir así usando codigo JSX:
//const JSX = <h1>Hola Miguel!</h1>;
//ReactDOM.render(JSX, document.getElementById('root'));

//O usando codigo JS en las llaves
/*const nombre = 'Miguel Angel';
const JSX = <h1>Hola {nombre}!</h1>;
ReactDOM.render(JSX, document.getElementById('root'));*/

//O usando un contenedor cuando tenemos que poner más de una sentencia JSX
//Dejar <></> como si fueran contenedores sin div se llaman fragment JSX

/*const nombre = 'Miguel Angel';
const JSX = (
  <> 
      <h1>Hola {nombre}!</h1>
      <p>Vamos Independiente!!!</p>
  </>
);
ReactDOM.render(JSX, document.getElementById('root'));*/

//Usando clases dentro de JSX

const nombre = 'Miguel Angel';
const JSX = (
  <> 
      <h1 >Hola {nombre}!</h1>
      <p style={{color:'red',fontSize:'3em',font:'bold',fontStyle:'italic'}}>Vamos Independiente!!!</p>
  </>
);
ReactDOM.render(JSX, document.getElementById('root'));