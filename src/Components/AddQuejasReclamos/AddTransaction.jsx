import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import FormularioClient from "./FormularioQuejasReclamos";
import { useNavigate } from "react-router";

export const AddTransaction = () => {
    const navigate = useNavigate(); 
    const list = useSelector((state) => state.list.people)
    const [currentClient, SetClient] = useState();

    useEffect(() => {
        if (list.head) {
            console.log("Setting client to:", list.head);
            SetClient(list.head);
        }
    }, [list]);
    
    const goBack = () => {
        if (currentClient !== null && currentClient.prev !== null) {
            SetClient(currentClient.prev);
        }
    };

    const goForward = () => {
        if (currentClient !== null && currentClient.next !== null) {
            SetClient(currentClient.next);
        }
    };

    
    const handleAddTransaction = (type, text) => {
        if(type == "Consulta"){
            console.log(currentClient)
            currentClient.value.consultas.enqueue(text);
        }else{
            console.log(currentClient)
            currentClient.value.reclamos.push(text);
        }
    }
    return (
        <div>
            <div>
            <h1>Cliente a actualizar: {currentClient ? currentClient.value?.name : "No client"}</h1>
           
            <button onClick={goBack} disabled={currentClient === null || currentClient?.prev === null}>
                Anterior cliente
            </button>

            <button onClick={goForward} disabled={currentClient === null || currentClient?.next === null}>
                Siguiente cliente
            </button>

            <br />
        </div>
        <FormularioClient
        handleAddTransaction = {handleAddTransaction}
        />
        <button
        onClick={() => navigate('/')}
        className="volver-button"
      >
        Volver a Agregar cliente
      </button>
      
      <button
        onClick={() => navigate('/listar')}
        className="lista"
      >
        Ver Clientes
      </button>
    </div>
        
        
    )
}
