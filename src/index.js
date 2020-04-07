const express = require('express');
const app = express();

// seccion de configuracion 
app.set('port', process.env.PORT || 3000);

//seccion de middleware
app.use(express.json()); 

//seccion de rutas
app.use(require('./routes/Empleados'));

// seccion de inicializacion de servedor
app.listen(3000, ()=>{
    console.log('serve on port 3000', app.get('port'));
})