import React, { useRef, useState } from 'react';
import Link from 'next/link';
import style from '../styles/Registrarse.module.css';
import Button from '../components/Buttons';
import Header from '../components/Header';

const Registrarse = () => {
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Nuevo estado para la confirmación de la contraseña

  //const [Confirmpassword, setConfirmPassword] = useState("");
  const registrarse = async (e) => {
    e.preventDefault();

    console.log("AAAAAAAA");
    if (password !== confirmPassword) {
      console.error('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/registrarse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, mail, password }),
      });

      if (response.ok) {
        // La solicitud fue exitosa, puedes realizar alguna acción aquí si es necesario.
        console.log('Registro exitoso');
        history.push('/InicioSesion');
      } else {
        // La solicitud falló, manejar el error aquí si es necesario.
        console.error('Error al registrar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form ref={form}>

      <Header/>

      <h1 className={style.title}>Crea tu cuenta</h1>
      <div className={style.flexbox}>
        
      <div className={style.row}>
        <div className={style.contenedorflotante}>
          <input type="email" className="form-control" id="nombre" placeholder="Nombre Completo"  onChange={(event) => setNombre(event.target.value)}/>
        </div>

        <div className={style.contenedorflotante}>
          <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com"   onChange={(event) => setMail(event.target.value)}/>
        </div>

     </div>


    <div className={style.row}>
        <div className={style.contenedorflotante}>
          <input type="password" className="form-control" id="contraseña" placeholder="Contraseña"  onChange={(event) => setPassword(event.target.value)} />
        </div>
       
        <div className={style.contenedorflotante}>
          <input type="password" className="form-control" id="repcontraseña" placeholder="Repetir Contraseña"   onChange={(event) => setConfirmPassword(event.target.value)}/>
        </div>
  
     </div>


      </div>

      <div className={style.container1}>

      <label className={style.seguimiento}>
        Hay alguna persona que realizara un seguimiento sobre su actividad en la app?
      </label>


      <div className={style.checkBox}>

      SI <input type="checkbox" value="yes" /> 

      </div>


      </div>

      <div className={style.container}>
        <button className={style.IR} onClick={registrarse}>IR</button> <br />
      </div>
    </form>
  );
};

export default Registrarse;