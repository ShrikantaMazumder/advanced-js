const students = [
    {id:21,name: "Shrikanta"},
    {id:31,name: "Sajid"},
    {id:41,name: "Mehedi"}
];

/**

const newArr = [];
for(let i=0; i<students.length; i++){
    const element = students[i];
    newArr.push(element);
}
console.log(newArr);

 */

const studentsName = students.map(x => x.name);
console.log(studentsName);

//filtered student from object
const studentsName2 = students.filter(s => s.id >30);
const studentNameAnother = studentsName2.map(s => s.name);
console.log(studentsName2);
console.log(studentNameAnother)