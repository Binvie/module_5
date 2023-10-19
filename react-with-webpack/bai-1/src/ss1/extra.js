//bai 1
let checkPrime = (number => {
    let count = 0;
    for (let i = 2; i <= number; i++) {
        if (number % i == 0) {
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
const student = {
    firstName: person.firstName,
    gender: person.gender,
    degree: person.education.degree,
    english: 'english'
};
console.log(student)

// cach 2
const {firstName, gender} = person
const student1 = {firstName, gender}
console.log(student1)

//bai 3

const result = ({firstName = 'Quan', degree = 'NA'}) => {
    console.log(firstName)
    console.log(degree)
}
result3(student)