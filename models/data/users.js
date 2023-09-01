import 'dotenv/config.js'
import {connect} from 'mongoose';
import User from '../User.js'

const users = [{
    name: "Ignacio",
    lastName: "Borraz",
    mail: "igna@mh.com",
    photo: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
    password: "Hola1234",
    country: "Argentina"
},{
    name: "Cinthia",
    lastName: "Di Risio",
    mail: "cin@mh.com",
    photo: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/0a982a46-6992-4157-8032-8b42cc99bbd2.b5c26b0f8677b1562fc15dda2715f735.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    password: "Hola1234",
    country: "Argentina"
},{
    name: "Franco",
    lastName: "Sosa",
    mail: "fran@mh.com",
    photo: "https://randomuser.me/api/portraits/lego/8.jpg",
    password: "Hola1234",
    country: "Argentina"
}]

connect(process.env.URI_LINK)
    .then(()=>{
        User.insertMany(users)
        console.log('done!');
    })
    .catch(err=>console.log(err))