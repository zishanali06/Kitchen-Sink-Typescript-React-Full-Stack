import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarProps {
    
}
 
export interface NavbarState {
    
}
 
class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow">
            <span className="navbar-brand mb-0 h1">ZtheDon Blog</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink to="/" className="nav-item nav-link" exact activeClassName="nav-item nav-link active">Blog</NavLink>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;