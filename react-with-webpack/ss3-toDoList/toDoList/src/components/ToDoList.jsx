import React from 'react';

function ToDoList() {
    return (
        <div>
            <h1>TO DO LIST</h1>
            <input type="text" value={this.state.item} onChange={(event) => {
                this.HandleChange(event.target.value)
            }}/>
            <input type="button" value="Add" onClick={() => this.handleAddItem()}/>
            <ul>
                {this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                )}
            </ul>
        </div>
    );
}

export default ToDoList;