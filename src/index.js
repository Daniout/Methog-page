const express = require('express')
const expbhs = require ('express-handlebars')
const { extname } = require('path')
const path = require ('path')


//inicializaciones
const app = express()

//Ajustes
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', expbhs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}))

app.set('view engine', '.hbs')

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())



//Carpetas de archivos estaticos
app.use(express.static(path.join(__dirname,'public')))




//Rutas
app.use(require('./routes/index'))

//Server iniciado
app.listen(3000, ()=>{
    console.log('Server on port',  3000)
})