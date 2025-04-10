import { createSlice } from "@reduxjs/toolkit";

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
  }
}


const listSlice = createSlice({
    name: "people",
    initialState:{
        people: new DoublyLinkedList()
    },
    reducers: {
        append: (state, action) => { 
            state.people.append(action.payload);
        }
    }
})


export const {append} = listSlice.actions
export default listSlice.reducer;