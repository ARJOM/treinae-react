import React, { Component } from "react";
import "./Menu.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../Components/home/home";


export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.trocaTema = this.trocaTema.bind(this);
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
        this.setNome = this.setNome.bind(this);
        this.state = {
            theme: undefined,
            name: undefined,
        };
    }

    componentWillMount() {
        let name;
        if (this.props.name) {
            name = this.props.name;
        } else {
            name = 'visitante'
        }

        let theme;
        if (this.props.theme !== undefined) {
            theme = this.props.theme
        } else {
            theme = "light"
        }

        this.setState({ theme, name })

    }

    // componentDidMount() {
    //     alert("Bem vindo " + this.state.name)
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let atualiza = nextState !== this.state
        if (atualiza) {
            console.log("diferente")
        } else {
            console.log("igual")
        }
        return atualiza;
    }

    trocaTema() {
        let tema = (this.state.theme === "dark") ? 'light' : 'dark';
        this.setState({ theme: tema })
    }

    setNome(e) {
        if (this.shouldComponentUpdate("", e.target.value, "")) {
            this.setState({ name: e.target.value })
        }
    }

    render() {
        return (
            <div
                className={` initial ${this.state.theme}`}
            >
                <Router>

                    <div className="cabecalho">

                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                            <button onClick={this.trocaTema}>Troca</button>
                        </nav>
                    </div>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <div className="corpo">Sobre nós</div>
                        </Route>
                        <Route path="/users">
                            <div className="corpo">Usuários</div>
                        </Route>
                        <Route path="/">
                            <div className="corpo">
                                <Home name={this.state.name}/>
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }

}