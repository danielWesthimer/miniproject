const express = require("express")
const bodyPerser = require('body-parser')
const app = express();
const fs = require('fs')
const cors = require('cors')

app.use(cors());
// app.use('/public',pagesRouter)
app.use(express.static('public'));
// app.use(bodyPerser.urlencoded({axtended:false}))
// app.use(bodyPerser.json())


// app.get('/', (req, res) => {
//     fs.readdir('public', (err, files) => {
//         const objects = files.map((file) => {
//             return {
//                 fileName: file, isDirectory: fs.lstatSync(`./public/${file}`).isDirectory(),
//                 size: fs.lstatSync(`./public/${file}`).size

//             }
//         })
//         res.send(objects)
//     })
// })

app.get('*', (req, res) => {
    const url = req.url
    console.log("url:", url);

    fs.readdir(`public${url}`, (err, files) => {
        if (err) res.status(404).send("is non faond")
        else {
            res.send(files.map((file) => {
                console.log(fs.lstatSync(`public/${url}${file}`).size);
                return {
                    fileName: file,
                    isDirectory: fs.lstatSync(`public/${url}${file}`).isDirectory(),
                    size: fs.lstatSync(`public/${url}${file}`).size
                }
            }))
        }
    })


    // else {
    //     fs.readdir(`public/${url}`, (err, files) => {
    //         const objects = files.map((file) => {
    //             if (err) res.json(500)
    //             return { 
    //                 fileName: file, isDirectory: fs.lstatSync(`./public/${file}`).isDirectory(),
    //                 size: fs.lstatSync(`./public/${file}`).size
    //             }
    //         })
    //         res.send(objects)
    //     })
    // }
})



app.listen(8000, () => console.log("listning to port 8000...."))