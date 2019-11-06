import React from 'react'

class SWApiComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }


    componentDidMount() {
        let API =  fetch('https://swapi.co/api/people/?format=json')
            .then( response => response.json())
            .then( ({results:items}) => this.setState({items}))
        console.log(API);
    }

    filter(e){
        this.setState({filter: e.target.value})
    }


    render() {
        let items = this.state.items;
        if (this.state.filter){
            items = items.filter( i => i.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
        return(
        <div>
            <input type="text"
            onChange={this.filter.bind(this)}/>
            {items.map( item => <h3 key={item.name}>{item.name}</h3>)}
        </div>
        );
    }
}

export default SWApiComponent;
