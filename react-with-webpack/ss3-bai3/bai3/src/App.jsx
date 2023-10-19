import React, {Component, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewMore from "./component/ViewMore";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    handleMore = () => {
        this.setState({isExpand: true})
    }
    handleLess = () => {
        this.setState({isExpand: false})
    }

    render() {
        const {isExpand} = this.state;
        if (isExpand) return (<ViewMore showMore={this.handleLess}/>)
        return (
            <div>
                <h1 style={{textAlign: 'center', padding: 30}}>Conditional Rendering</h1>
                <button onClick={this.handleMore}>Đóng giới thiệu</button>
                <br/>
                <p>Trong ví dụ trên, chúng ta sử dụng hook useState để tạo một trạng thái expanded
                    ban đầu là false. Khi người dùng nhấp vào nút, hàm toggleContent
                    sẽ được gọi và đảo ngược trạng thái expanded bằng cách gọi
                    setExpanded(!expanded).</p>
            </div>
        )
    }

}

export default App
