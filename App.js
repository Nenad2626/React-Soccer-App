import React from 'react';
import '../assets/css/App.css';
import Soccer from './Soccer';
import {useEffect} from 'react';

function App()  {

useEffect(() => { window.process = { ...window.process, }; }, []);

return (

<div className="ready">

<Soccer />

</div>


)


};



export default App;