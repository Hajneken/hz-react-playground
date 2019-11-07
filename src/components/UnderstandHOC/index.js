import React from 'react';

// the main idea of Higher Order Components is to share functionality
// HOC takes Component and returns a new Component
const HOC = (InnerComponent) => class extends React.Component {
    render(){
        return (
            <InnerComponent
                {...this.props}
            />
        )
    }
}

// Stateless component that we wrap in HOC
const Button = HOC((props) => <button>{props.children}</button>);

//Stateless component can be also written in a class fashion
const Label = (props) => <label>{props.children}</label>;

const LabelHOC = HOC(Label);

class UnderstandHOC extends React.Component{
    render(){
        return(
            <div>
                <LabelHOC>Label</LabelHOC>
                <hr/>
                <Button>Button</Button>
            </div>
        )
    }
}

export default UnderstandHOC;
