import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const DisplayClients = () => {
    const navigate = useNavigate(); 
    const list = useSelector((state) => state.list.people);
    const [currentClient, SetClient] = useState(null);

    useEffect(() => {
        if (list?.head) {
            SetClient(list.head);
        }
    }, [list]);

    const goBack = () => {
        if (currentClient?.prev) {
            SetClient(currentClient.prev);
        }
    };

    const goForward = () => {
        if (currentClient?.next) {
            SetClient(currentClient.next);
        }
    };

    const mostarConsultas = () => {
        if (currentClient?.value?.consultas && currentClient.value.consultas.peek() != null) {
            return currentClient.value.consultas.print().map((consulta, index) => (
                <li key={index}>{consulta}</li>
            ));
        }
        return <li>No hay consultas a mostrar</li>
    };
    
    const mostrarReclamos = () => {
        if (currentClient?.value?.reclamos && currentClient.value.reclamos.peek() != null) {
            return currentClient.value.reclamos.print().map((reclamo, index) => (
                <li key={index}>{reclamo}</li>
            ));
        }
        return <li>No hay reclamos a mostrar</li>
    };
    
    return (
        <div>
            <h1>Información de los clientes</h1>

            <button onClick={goBack} disabled={!currentClient?.prev}>
                Anterior cliente
            </button>
            <button onClick={goForward} disabled={!currentClient?.next}>
                Siguiente cliente
            </button>

            <br /><br />

            {currentClient ? (
                <div>
                    <h2>Nombre: {currentClient.value?.name}</h2>

                    <h3>Consultas</h3>
                    <ul>{mostarConsultas()}</ul>

                    <h3>Reclamos</h3>
                    <ul>{mostrarReclamos()}</ul>
                </div>
            ) : (
                <p>No hay cliente seleccionado.</p>
            )}

            <button
            onClick={() => navigate('/')}
            className="listar"
            >
            Volver a crear cliente
            </button>

            <button
            onClick={() => navigate('/AddTransaction')}
            className="listar"
            >
            Volver a agregar transacción
            </button>
        </div>
    );
};
