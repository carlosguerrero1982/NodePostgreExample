 import express from 'express';
import indexRoutes from './routes/index';

 const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


 app.use(indexRoutes);


 app.listen(3000, ()=>console.log('server en puerto', 3000))