import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Form from './components/Form';

import "./styles/App.css";

const App = () => {

    const [name, setName] = useState("") // [valor, () => {}]
    const [show, setShow] = useState(false);

    const [search, setSearch] = useState("");

    const [nombres, setNombres] = useState(["Hugo", "Paco", "Luis"]);


    const cambiarNombre = (evento) => {
        //console.log(evento)
        setName(evento.target.value);
    }

    useEffect(() => {
        console.log("Componente Cargado...")
    }, [])

    useEffect(() => {
        console.log("Show ha cambiado su valor ...")
    }, [show])

    useEffect(() => {
        console.log(`El tamaño del arreglo es ${nombres.length}`)
    }, [nombres])

    return (
        <>
            <p>{name}</p>
            {/* <button onClick={cambiarNombre}>Cambiar Nombre</button> */}
            
            <input type="text" onChange={cambiarNombre} /> {/* Forma 1 */}

            <button onClick={() => {  {/* Forma 2 */}
                setShow(!show)
            }}>Cambiar Show</button>

            <input type="text" onChange={(e) => setName(e.target.value)} />  {/* Forma 3 */}
            <p>Buscando: {search}</p> <br />
            
            <Form search={search} setSearch={setSearch} />

            <ul>
                {
                    nombres.map((nombre) => {
                        return (
                            <li key={nombre}>{nombre}</li>
                        )
                    })
                }
            </ul>

            <div className="box"></div>
        </>
    )
}

export default App;