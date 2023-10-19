import React from "react";
import {Component} from 'react';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.state({color: 'pink'})
        },5000)
    }
    render() {
        return (
            <div>
                <div style={{
                    backgroundColor: this.state.color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: 'auto'
                }}>
                </div>
            </div>
        );
    }
}

export default Background;