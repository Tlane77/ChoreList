import React, { Component } from 'react';
import MaterialIcon, { colorPalette } from "material-icons-react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
    
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items

    const list = [...this.state.list];

    //add new item to the list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];
    
    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
    <div className="App">
        <div class="container">
          Add a Chore...
           <br />
          <input type="text"
            placeholder="Type chore here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            
          />
          <button class="add-btn"
            onClick={()=> this.addItem()}
          >
            Add
             </button>
          

          <br />
          
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button class="delete-btn"onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
      </div>
        </div>
        
        
  );
}
      }

export default App;
