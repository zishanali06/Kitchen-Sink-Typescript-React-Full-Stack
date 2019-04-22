import * as React from 'react';

export interface BloghomeProps {
    
}
 
export interface BloghomeState {
    
}
 
class Bloghome extends React.Component<BloghomeProps, BloghomeState> {
    constructor(props: BloghomeProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <h1>Testing123</h1>
        );
    }
}
 
export default Bloghome;