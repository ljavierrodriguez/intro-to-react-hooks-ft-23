import React, { useState } from 'react'

const ComponentA = () => {
    return (
        <h1>Componente A</h1>
    )
}

const ComponentB = () => {
    return (
        <h1>Componente B</h1>
    )
}

const Ejemplo = () => {

    const [error, setError] = useState(null);

    const [show, setShow] = useState(false);


    const mostrarInfo = () => {
        setShow(show ? false : true)
    }

    return (
        <>
            {
                (error !== null && error.msg) && (
                    <div className="alert alert-danger" role="alert">
                        {error.msg}
                    </div>
                )
            }

            {
                show ? (
                    <ComponentA />
                ) : (
                    <ComponentB />
                )
            }


            {
                show ? <ComponentA /> : <ComponentB />
            }


            <button className="btn btn-danger" onClick={() => setError({ msg: 'Ha ocurrido un error.' })}>Generar Error</button>

            <button className={'btn btn-' + (show ? 'danger' : 'primary')} onClick={mostrarInfo}>
                {show ? 'Hide' : 'Show'}
            </button>
        </>
    )
}

export default Ejemplo