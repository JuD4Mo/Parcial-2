import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormularioClient from "./FormularioClient";
import { append } from "../Store/Slices/listSlice";
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from "react-router";

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      return this.items.length > 0 ? this.items.pop() : null;
    }
  
    peek() {
      return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      return this.items.slice().reverse();
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.length > 0 ? this.items.shift() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[0] : null;
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return [...this.items];
    }
}


export const Client = () => {
  const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const list = useSelector((state) => state.list.people);

    const handleAddClient = (name, type, text) => {
                let myuuid = uuidv4();
                if(type == "Consulta"){
                    let newQueue = new Queue();
                    let stack = new Stack();
                    newQueue.enqueue(text);
                    dispatch(append({id: myuuid,name: name, consultas: newQueue, reclamos: stack}))
                }else{
                    let newStack = new Stack();
                    let queue = new Queue();                    
                    newStack.push(text)
                    dispatch(append({id: myuuid, name: name, consultas: queue, reclamos : newStack}))
                }
            console.log(list)
    }


    return (
        <div>
        <FormularioClient
        handleAddClient = {handleAddClient}
        />
        <button onClick={() => navigate("/AddTransaction")} className="button-primary">
          Ir a agregar transacciones
        </button>
        <button onClick={() => navigate("/listar")} className="button-primary">
          Ir a la información de los clientes
        </button>
    </div>
    )
}