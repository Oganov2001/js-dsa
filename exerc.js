const studentsDatabase = ["jordan", "erick", "john", "michel"];

const findStudent = (allStudents, studentName) => {
    return allStudents.filter(student => student === studentName);
};

console.log(findStudent(studentsDatabase, "jordan"));