const sortPeople = require('./sortPeople.js');

const nameOfDirs = sortPeople.createDir(
    [
        'manOlder20',
        'manYounger20',
        'womanOlder20',
        'womanYounger20',
    ]);
sortPeople.sortPeople(nameOfDirs);

