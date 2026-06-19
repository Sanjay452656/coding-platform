import express from 'express';
import cors from 'cors'
import healthRoute from './routes/health.route.js'

const app = express();

app.use(cors());
app.use(express.json());


app.use('/health' , healthRoute)

app.get('/',(req, res) => {
    res.send("Hello World!");
})

export default app;