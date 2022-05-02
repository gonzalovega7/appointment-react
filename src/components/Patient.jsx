import React from 'react'

const Patient = () => {
    return (
        
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                <span className="font-normal normal-case">Gonzalo</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '} 
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {' '}
                <span className="font-normal normal-case">10/10/22</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Facilis consequatur, minus obcaecati aspernatur rerum, ex ea error, non quo dolores eaque ducimus nostrum 
                    possimus voluptates exercitationem labore nulla expedita adipisci!</span>
            </p>
        </div>
    )
}

export default Patient
