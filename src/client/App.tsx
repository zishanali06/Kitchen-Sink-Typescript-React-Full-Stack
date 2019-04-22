import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/app';
import Bloghome from './views/Bloghome';
import Navbar from './components/Navbar';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { name: null };
    }

    async componentWillMount() {

    }

    render () {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path ="/" component={Bloghome}></Route>
                </Switch>
            </Router>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
}