import React, {Component} from "react";

class ViewMore extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', padding: 30}}>Conditional Rendering</h1>
                <button onClick={this.props.showMore}>Xem Giới thiệu</button>
            </div>
        );
    }
}

export default ViewMore;