
import express from 'express'


// dotenv.config({path:'./src/.env'})

const app = express()

// const server = createServer(app)
// app.use(morgan('÷dev'))
// app.use(cors())÷
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(express.static('asset/file/'));

app.use('/tes', (req,res)=>{
    res.send("hello")
});
// app.use((req, res, next) => {
//     res.status(200).json({ status: '404', message: "gagal, tidak ada endpoint" });
// })

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`telah tersambung pada port : ${port}`)
});
