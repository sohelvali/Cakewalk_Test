/*
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import SearchableTable from './SearchableTable';
import {data} from './data';
//import Register from './register';
import LandingPage from './landingPage';

// Filterable CheatSheet Component

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            
            <div>
                <div>Testing jignesh123 </div>
                <LandingPage/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, document.getElementById('searchableTable') );