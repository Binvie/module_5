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

        );
    }
}