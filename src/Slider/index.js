import React from 'react'

class Slider extends React.Component {

    constructor() {
        super();
        this.state = {
            a: '',
            b: ''
        }
    }

    update(e) {
        this.setState({a: e.target.value})
    }

    render() {
        return (
            <div>
                <input ref="a"
                       type="text"
                       onChange={this.update.bind(this)}/>{this.state.a}
                <hr/>
                <input ref="b"
                       type="text"
                       onChange={this.update.bind(this)}/>{this.state.b}
            </div>
        );
    }
}

export default Slider;
