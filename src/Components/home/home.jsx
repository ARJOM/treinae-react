import React, {Component, Fragment} from "react";

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.setNome = this.setNome.bind(this);
        this.state = {
            name: this.props.name,
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let atualiza = nextState !== this.state;
        return atualiza;
    }

    setNome(e) {
        if (this.shouldComponentUpdate("", e.target.value, "")) {
            this.setState({ name: e.target.value })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Página de {this.state.name}</h1>
                <input type="text" value={this.state.name} onChange={e => this.setNome(e)} />
            </React.Fragment>
        )
    }

}