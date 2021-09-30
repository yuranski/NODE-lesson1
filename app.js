// - у вас є масив юзрів (до 10), з такими полями наприклад - const users =
// [{ name: 'olya', gender: 'female', age: 20 }...],

// вам потрібно написати метод який створює файлики - де назва файлику -
// це імя вашого юзера (наприклад - Olya.txt),

// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }

//TODO
// перед тим створити 4 папки (програмно) -
// наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках

const fs = require('fs');
const path = require('path');

const listOfPeopleDir = path.join(__dirname, 'listOfPeople.json');
const listOfPeople = require(listOfPeopleDir)

for (const listOfPerson of listOfPeople) {
    // fs.createWriteStream(`${listOfPerson.name}.txt`)
    fs.writeFile(
        `${__dirname}/${listOfPerson.name}.txt`,
        `${listOfPerson.name}\n${listOfPerson.gender}\n${listOfPerson.age}`,
        err => {
            if (err) {
                return;
            }
            console.log(err)
        })
}

// fs.readFile(`${__dirname}/listOfPeople.json`, (err,data) => {
//     if (err){
//         return;
//     }
//     console.log(data.toString());
// })