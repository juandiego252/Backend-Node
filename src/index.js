// Inovcar a la libreria de express
const express = require('express')
// Importacion de handlebars
const {engine} = require('express-handlebars')

// Instancia de la variable express
const app = express()
// Puerto
const port = 3000

/*
// Motor de plantillas
app.engine('handlebars', engine());
// extension de la paginas
app.set('view engine', 'handlebars');

// Ubicacion del directorio views
app.set('views', './src/views');

app.get('/index', (req, res) => {
    res.render('home');
});

*/ 

// informacion al servidor en jsonn
app.use(express.json())
// Crear un midleware

app.get('/',(req,res)=>{
  res.send("Landing page")
})

app.get((''),()=>{})


app.listen(port)
