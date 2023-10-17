let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5
    }
];
// bai 1
let result1 = courses.filter(final =>
    (final.rating >= 4.0)
)
console.log(result1);


// bai 2
// let result2 = courses.filter(rate => rate.rating<4)
// let result = result2.map(item => item.id + "-" + item.title + "-" + item.rating)
// console.log(result)
let result2 = courses.filter(rate => rate.rating < 4).map(item => item.id + "-" + item.title + "-" + item.rating);
console.log(result2);


let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

//bai 3
let result3 = [...courses,...addedCourses];
console.log(result3)