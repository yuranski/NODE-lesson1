const fs = require('fs');
const path = require('path');
const listOfPeopleDir = path.join(__dirname, '/listJSON/listOfPeople.json');
const listOfPeople = require(listOfPeopleDir);

const createDir = (nameDirs = []) => {
    for (const nameOfDir of nameDirs) {
        fs.mkdir(`${__dirname}/${nameOfDir}`, e => {
            if (e) {
                return;
            }
        });
    }
    return nameDirs;
};

const sortPeople = (someFn) => {
    for (const listOfPerson of listOfPeople) {

        if (listOfPerson.age > 20 && listOfPerson.gender === 'Male') {
            fs.writeFile(
                `${__dirname}/${someFn[0]}/${listOfPerson.name}.txt`,
                `${listOfPerson.name}\n${listOfPerson.gender}\n${listOfPerson.age}`,
                err => {
                    if (err) {
                        return;
                    }
                    console.log(err);
                });
            continue;
        }

        if (listOfPerson.age < 20 && listOfPerson.gender === 'Male') {
            fs.writeFile(
                `${__dirname}/${someFn[1]}/${listOfPerson.name}.txt`,
                `${listOfPerson.name}\n${listOfPerson.gender}\n${listOfPerson.age}`,
                err => {
                    if (err) {
                        return;
                    }
                    console.log(err);
                });
            continue;
        }

        if (listOfPerson.age > 20 && listOfPerson.gender === 'Female') {
            fs.writeFile(
                `${__dirname}/${someFn[2]}/${listOfPerson.name}.txt`,
                `${listOfPerson.name}\n${listOfPerson.gender}\n${listOfPerson.age}`,
                err => {
                    if (err) {
                        return;
                    }
                    console.log(err);
                });
            continue;
        }

        if (listOfPerson.age < 20 && listOfPerson.gender === 'Female') {
            fs.writeFile(
                `${__dirname}/${someFn[3]}/${listOfPerson.name}.txt`,
                `${listOfPerson.name}\n${listOfPerson.gender}\n${listOfPerson.age}`,
                err => {
                    if (err) {
                        return;
                    }
                    console.log(err);
                });
        }

    }
};

module.exports = {createDir, sortPeople};