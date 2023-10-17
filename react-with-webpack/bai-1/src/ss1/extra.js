//bai 1
let checkPrime = (a => {
    let count = 0;
    for (let i = 2; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
});

//bai 1.2
let arr = [1, 2, 3, 4, 5];
let array = arr.filter(item => checkPrime(item))
console.log(array)

//bai 2

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'America',
    city: 'New York',
    hobbies: ['reading', 'travaleing', 'photography'],
    language: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University',
    }
}
    let student = {
    firstName : person.firstName,
    gender: person.gender,
    degree: person.education.degree,
    english: 'english'
    };
console.log(student)


//bai 3

let result3 = ({firstName='Quan',degree = 'NA'}) =>{
    console.log(firstName)
    console.log(degree)
}
result3(student)