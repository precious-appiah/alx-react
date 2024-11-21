import {Seq} from "immutable"
export function printBestStudents(grades) {
    const studentsSeq = Seq(grades);
  
    const bestStudents = studentsSeq.filter(student => student.score >= 70);
  
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  
    bestStudents.forEach(student => {
      const fullName = `${capitalize(student.firstName)} ${capitalize(student.lastName)}`;
      console.log(fullName);
    });
  }