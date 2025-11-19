import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVER RUNNING: http://localhost:${PORT}`);
})

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}))

app.get('/',(req, res)=>{
    res.send('<h1>This is Home page<h1/>')
})

app.get('/api/jokes', (req, res) => {

    let jokes = [
        {
            id: 1,
            body: 'This is Joke 1',
            desc: 'YKUADwefLJscSKLVDdscYUAJKSCHJB'
        },
        {
            id: 2,
            body: 'This is Joke 2',
            desc: 'YKUADwefLJscSKLVDdscYUAJKSCHJB'
        },
        {
            id: 3,
            body: 'This is Joke 3',
            desc: 'YKUADwefLJscSKLVDdscYUAJKSCHJB'
        },
        {
            id: 4,
            body: 'This is Joke 4',
            desc: 'YKUADwefLJscSKLVDdscYUAJKSCHJB'
        },
        {
            id: 5,
            body: 'This is Joke 5',
            desc: 'YKUADwefLJscSKLVDdscYUAJKSCHJB'
        },
    ]

    res.send(jokes)
})