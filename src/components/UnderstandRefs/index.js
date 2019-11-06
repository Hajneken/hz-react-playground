import React from 'react';

class UnderstandRefs extends React.Component {

    constructor() {
        super();
        this.state = {
            a: '',
            b: ''
        }
    }

    update(e) {
        // following is the sollution without refs
        // however 🤮 that updates both fields
        // this.setState({
        //     a: e.target.value,
        //     b: e.target.value
        // })

        // using refs referencing existing DOM node
        this.setState({
            a: this.refs.a,
            b: this.refs.b
        });
    }

    render() {
        return (
            <div>
                <h1>Input 1: {this.state.a}</h1>
                <input type="text" onChange={this.update.bind(this)} ref="a"/>
                <h1>Input 2: {this.state.b}</h1>
                <input type="text" onChange={this.update.bind(this)} ref="b"/>
            </div>

        )
    }
}

export default UnderstandRefs;
