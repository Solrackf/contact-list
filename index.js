import express from 'express'
import {database} from './config/firebase_config.js'

const app = express()

app.listen('8000',(req,res)=>{
    console.log('App start in localhost:8000')
})

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('./styles'))
app.use(express.urlencoded({extended:true}))

app.get('/', async(req,res)=>{
    const petition = await database.collection('contacts').get()
    const {docs} = petition
    const contacts = docs.map(contact =>({id:contact.id,data:contact.data()}))
    res.render('index',{contacts})
})

app.post('/add', (req,res)=>{
    const contact ={
        name:req.body.name,
        numbernumero:Number(req.body.number),
        direction:req.body.direction,
        email:req.body.email,
    }
    database.collection('contacts').add(contact);
    res.redirect('/')
})
app.get('/delete/:id',(req,res)=>{
    let id = req.params.id
    database.collection('contacts').doc(id).delete()
    res.redirect('/')
})