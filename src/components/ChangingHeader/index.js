import React from 'react';

import {TweenMax} from 'gsap';


class ChangingHeader extends React.Component {
    constructor(props) {
        super(props);
        // element reference
        this.myElement = null;
        //animation reference
        this.myTween = null;
        this.state = {
            coolStateKey: 'Cool state value'
        };
        this.elRef = React.createRef();
    }

    handleClick(e) {
        TweenMax.to(this.elRef.current, 5, {x:200})
        //
        // TweenMax.to(node, 5, {x: 200});
    }

    componentDidMount() {
        const node = this.elRef.current;
        console.log(node)
        // var node = this.getDOMNode();
        // TweenMax.to(node, 5, {x:200})
    }

    render() {
        return (
            <div onClick={this.handleClick} ref={this.elRef}
                 style={{"width": "100px", "height": "100px", "background": "red"}}>
                blah
            </div>
        )
    }
}

export default ChangingHeader;

