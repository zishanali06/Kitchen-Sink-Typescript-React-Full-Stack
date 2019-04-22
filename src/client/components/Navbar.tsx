import * as React from 'react';

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
            <h1>Testing</h1>
        );
    }
}
 
export default Navbar;