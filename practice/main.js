const myObj = {
    person: {
        name: 'babul Akter',
        age: 26,
        bio: {
            profression: 'web development',
            salary: 700
        }
    },
    languages: ['javascript', 'typescript'],
    hobby: 'playing cricket',
    isStudent: false
}

const {person:{name: myName}, person: {bio: {profression: myprofession, salary: mySalary}}, languages: [,secondarylanguage]} = myObj;

console.log(`${myName}'s profession is ${myprofession} and salary is ${mySalary} who knows ${secondarylanguage} also`);