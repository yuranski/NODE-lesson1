const sortPeoples = require('./sortPeoples.js')

const nameOfDirs = sortPeoples.createDir(
    [
        'manOlder20',
        'manYounger20',
        'womanOlder20',
        'womanYounger20'
    ])
sortPeoples.sortPeoples(nameOfDirs)

