let zahlenArray = [1, 2, 3, 4, 5];
let verdoppelteZahlen = zahlenArray.map(function(zahl) {
    return zahl * 2;
});
console.log(verdoppelteZahlen);

let woerter = ["Mercedes", "Audi", "Toyota", "Ford", "Tesla"];
let langeWoerter = woerter.filter(function(wort) {
    return wort.length > 5;
});
console.log(langeWoerter);

let zahlenArray2 = [10, 20, 30, 40];
let summe = zahlenArray2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(summe);

let zahlenArray3 = [5, 8, 12, 15];
let mindestensEineGroesserAls10 = zahlenArray3.some(function(zahl) {
    return zahl > 10;
});
console.log(mindestensEineGroesserAls10);

const person: { name: string; alter?: number } = {
    name: "Hans",
    alter: 30
};

console.log(person);



type Grade = number | string;

function printStudentGrades(firstName: string, lastName: string, age: number, grades: Grade[]): void {
    console.log(firstName + " " + lastName + " (" + age + ")");
    console.log("=".repeat(30));

    const gradesString = grades.map(grade => {
        if (grade === undefined) {
            return "*";
        } else if (typeof grade === "string") {
            return grade;
        } else if (grade === 1) {
            return "A";
        } else if (grade === 2) {
            return "B";
        } else if (grade === 3) {
            return "C";
        } else if (grade === 4) {
            return "D";
        } else if (grade === 5) {
            return "E";
        } else if (grade === 6) {
            return "F";
        }

        return grade.toString();
    }).join(",");

    console.log("Noten: " + gradesString);
}

const students = [
    { firstName: "Bernd", lastName: "Meier", age: 17, grades: [1, 4, 3, 1, "D", "A", 1, 2] },
    { firstName: "Uwe", lastName: "Müller", age: 18, grades: ["A", "B", 1] },
    { firstName: "Hans", lastName: "Schmidt", age: 17, grades: ["B", 1, "C", 3, 2, 4, 5] }
];

function printAllStudents(): void {
    students.forEach(student => {
        printStudentGrades(student.firstName, student.lastName, student.age, student.grades);
        console.log();
    });
}

printAllStudents();