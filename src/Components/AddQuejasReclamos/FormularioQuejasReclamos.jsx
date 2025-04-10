import React, { useState } from "react";

export const FormularioClient = ({handleAddTransaction}) => {
    const[currentType, setType] = useState("Consulta");
    const[currentText, setText] = useState("");

    const handleAddInfo = () => {
        if(!currentType || !currentText){
            console.warn("Fill all client data");
            return;
        }
        handleAddTransaction(currentType, currentText);
        setText("");
    }

    return (
        <div>
               <h1>Agrega consultas o reclamos</h1>
            <div>
                <select name="transaction type" onChange={(x) => setType(x.target.value)}>
                    <option>Consulta</option>
                    <option>Reclamo</option>
                </select>
            </div>
            <div>
                <input placeholder="Text" value={currentText} onChange={(x) => setText(x.target.value)}></input>
            </div>
            <div>
                <button onClick={handleAddInfo}>Insertar consulta o reclamo</button>
            </div>
        </div>
    )
}

export default FormularioClient;