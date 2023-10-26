import React from 'react'
import style from '../styles/compartimiento.module.css'
import Button from '../components/Buttons';
import Link from 'next/link';
import Header from '../components/Header'
function compartimiento() {
  const compartimento1 = () => {fetch('http://localhost:5000/compartimento1')};
  const compartimento2 = () => {fetch('http://localhost:5000/compartimento2')};
  const compartimento3 = () => {fetch('http://localhost:5000/compartimento3')};
  const compartimento4 = () => {fetch('http://localhost:5000/compartimento4')};



  

  return (
    <form>
       <Header/>
    <h1 className={style.title}>Seleccione el compartimiento</h1>
    <div className={style.container}>
    <div className={style.containerimg}>
        <div className={style.botonComp1}>
        <button id="1" className={style.calendario} onClick={() => compartimento1()}>
           
          <img
            src='/Image/btn1.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          />
       
      </button>
        </div> <br />
        <div className={style.botonComp2}>
        <button id="2" className={style.calendario} onClick={() => compartimento2()}>
        <img
            src='/Image/btn2.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          /> 
       </button>
        </div> <br />
    </div>

    <div className={style.containerimg}>
    <div className={style.botonComp3}>
    <button id="3" className={style.calendario} onClick={() => compartimento3()}>
        <img
            src='/Image/btn3.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          /> 
       </button> 
     </div> <br />
     <div className={style.botonComp4}>
     <button id="4" className={style.calendario} onClick={() => compartimento4()}>
        <img
            src='/Image/btn4.png' // Reemplaza con la ruta correcta de tu imagen
            alt="Botón"
            className="boton-imagen"
          /> 
       </button> 
        </div> <br />
    </div>

    </div>
    </form>
   

  )
}

export default compartimiento
