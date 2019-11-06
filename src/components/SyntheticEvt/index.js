import React from 'react';

class SyntheticEvt extends React.Component{

    constructor(){
        super();
        this.state = {currentEvent: '----'};
        // update method needs to be binded to execute with the current context
        this.update = this.update.bind(this);
    }

    // synthetic event is a wrapper that makes events in all browsers the same
    update(e){
        this.setState({currentEvent: e.type})
    }

    render() {
        return(
            <div>
                <h1>Current Event: {this.state.currentEvent}</h1>
                <input
                    onClick={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onKeyPress={this.update}
                    type="text"/>
            </div>
        )
    }
}

export default SyntheticEvt;
