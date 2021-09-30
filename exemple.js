


// const builder = require('./userBilder/user-builder')
// const a = builder.createUser('asd',22)

const fs = require('fs')
const path = require('path')

const appendFilePath = path.join(__dirname, 'files', 'append.txt')
const mkdirFilePath = path.join(__dirname, 'files', '22', 'users.txt')

fs.rename(
    `${__dirname}/files/text.txt`,
    `${__dirname}/userBilder/text.txt`,
    (err) => {
        console.log(err)
    })


// fs.readFile(`${__dirname}/files/text.txt`, ((err, data) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(data.toString())
// }))

// fs.writeFile(`${__dirname}/files/write.txt`,"hello world 2022", (err) => {
//     console.log(err)
// })

// fs.appendFile(appendFilePath,"hello world 2022 \n", (err) => {
//     console.log(err)
// })
// fs.mkdir(mkdirFilePath, {recursive: true}, (e)=>{
//     console.log(e)
// })
// fs.rmdir(`${__dirname}/22`, {recursive: true}, err => {
//     console.log(err)
// })







    // [
    // {
    //     "name": "Дмитрий",
    //     "gender": "Male",
    //     "age": 74
    // },
    //     {
    //         "name": "Кристина",
    //         "gender": "Female",
    //         "age": 72
    //     },
    //     {
    //         "name": "Яна",
    //         "gender": "Female",
    //         "age": 58
    //     },
    //     {
    //         "name": "Глеб",
    //         "gender": "Male",
    //         "age": 20
    //     },
    //     {
    //         "name": "Степан",
    //         "gender": "Male",
    //         "age": 49
    //     },
    //     {
    //         "name": "Марина",
    //         "gender": "Female",
    //         "age": 32
    //     },
    //     {
    //         "name": "Ева",
    //         "gender": "Female",
    //         "age": 69
    //     },
    //     {
    //         "name": "Никита",
    //         "gender": "Male",
    //         "age": 54
    //     },
    //     {
    //         "name": "Богдан",
    //         "gender": "Male",
    //         "age": 23
    //     },
    //     {
    //         "name": "Максим",
    //         "gender": "Male",
    //         "age": 32
    //     }
    // ]
