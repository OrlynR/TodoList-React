import React, { Component } from 'react'
import './index.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  
  deleteItem = key => { 
    console.log('este es el item que quiero borrar: ', key)
    const filterItems = this.state.items.filter(item => { 
      return item.key !== key
    }) 
    this.setState ({ 
      items: filterItems , 
    }) 
  }

  handleInput = e => { 
    const itemText = e.target.value 
    const currentItem = {text: itemText, key: Date.now ()} 
    this.setState ({ 
      currentItem, 
    }) 
  }
  addItem = e => { 
    e.preventDefault () 
    const newItem = this.state.currentItem 
    if (newItem.text !== '') { 
      console.log (newItem) 
      const items = [... this.state.items,  newItem] 
      console.log(items)
      this.setState ({ 
        items: items, 
        currentItem: {text: '', key: ''}, 
      }) 
    } 
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}
export default App
