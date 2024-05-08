import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';


const app  = express();
const port = 3000
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({info: "The greater the sensibility the greater the suffering … much suffering. "}) // JSON response we can see this in the browser if we go to http://localhost:3000/ and 
    }
);
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    
    }
    
);
//endpoints 
app.use('/users', userRoutes);
