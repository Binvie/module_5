import React, {Component, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        }
    }

    HandleChange(event) {
        this.setState({item: event})

    }
    handleAddItem() {
        console.log(this.state.item);
        if (this.state.item !== "") {
            this.setState((prev) => {
                return {
                    list: [...prev.list, this.state.item],
                    item: ""
                }
            })
        }
    }

    render() {
        return (
            <div>
                <h1>TO DO LIST</h1>
                <input type="text" value={this.state.item} onChange={(event) => {this.HandleChange(event.target.value)}}/>
                <input type="button" value="Add" onClick={() => this.handleAddItem()}/>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default App
