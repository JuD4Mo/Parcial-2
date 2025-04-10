import React, { useState } from "react";

const FormularioClient = ({handleAddClient}) => {
    const[currentName, setName] = useState("");
    const[currentType, setType] = useState("Consulta");
    const[currentText, setText] = useState("");

    const handleAddInfo = () => {
        if(!currentType || !currentName || !currentText){
            console.warn("Fill all client data");
            return;
        }
        handleAddClient(currentName, currentType, currentText);
        setName("");
        setText("");
    }

    return (
        <div>
               <h1>Agrega clientes</h1>
            <div>
                <input placeholder="Nombre del cliente" value={currentName} onChange={(x) => setName(x.target.value)} ></input>
            </div>
            <div>
                <select name="transaction type" onChange={(x) => setType(x.target.value)}>
                    <option>Consulta</option>
                    <option>Reclamo</option>
                </select>
            </div>
            <div>
                <input placeholder="Texto" value={currentText} onChange={(x) => setText(x.target.value)}></input>
            </div>
            <div>
                <button onClick={handleAddInfo}>Insertar Cliente</button>
            </div>
        </div>
    )
}

export default FormularioClient;