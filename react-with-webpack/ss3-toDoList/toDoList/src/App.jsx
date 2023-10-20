import React, {Component, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from "./components/ToDoList";

class App extends Component {
    constructor() {
        super();
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
            <>
                <ToDoList/>
            </>
        )
    }
}

export default App
