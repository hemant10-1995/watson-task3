import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Timeline from './Timeline';


const App = () => ( 
<MuiThemeProvider>
<Timeline />
</MuiThemeProvider>
);

ReactDOM.render(<App /> , document.getElementById('root')); 

