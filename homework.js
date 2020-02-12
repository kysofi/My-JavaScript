// DATA
const courses = [
  {
    section: "INF310",
    title: "Modern JavaScript",
    instructor: "Mikov",
    department: "INF",
    credits: 1
  },
  {
    section: "INF240",
    title: "Website Development",
    instructor: "Dimitrov",
    department: "INF",
    credits: 3
  },
  {
    section: "INF280",
    title: "Database Systems",
    instructor: "Christozov",
    department: "INF",
    credits: 3
  },
  {
    section: "MAT104",
    title: "Calculus II",
    instructor: "Dalakov",
    department: "MAT",
    credits: 3
  },
  {
    section: "COS221",
    title: "Fundamental Data Structures",
    instructor: "Christozov",
    department: "COS",
    credits: 3
  },
  {
    section: "BUS260",
    title: "Marketing",
    instructor: "Petkov",
    department: "BUS",
    credits: 3
  },
  {
    section: "BUS300",
    title: "Business Ethics",
    instructor: "Schwartz",
    department: "BUS",
    credits: 4
  },
  {
    section: "BUS220",
    title: "Financial Accounting",
    instructor: "Cleary",
    department: "BUS",
    credits: 3
  },
  {
    section: "BUS448",
    title: "Strategic Management",
    instructor: "Pantelides",
    department: "BUS",
    credits: 3
  },
  {
    section: "THR130",
    title: "Beginning Acting",
    instructor: "Delchev",
    department: "FAR",
    credits: 3
  },
  {
    section: "ENG205",
    title: "Creative Writing",
    instructor: "Cohen",
    department: "ENG",
    credits: 4
  }
];

const students = [
  {
    name: "Adam Banff",
    standing: "Junior",
    courses: ["INF240", "BUS220", "ENG205"]
  },
  {
    name: "Betty Cahn",
    standing: "Senior",
    courses: ["INF280", "COS221", "INF310"]
  },
  {
    name: "Chisto Dotev",
    standing: "Senior",
    courses: ["BUS220", "BUS448", "THR130"]
  },
  {
    name: "Dani Emerson",
    standing: "Sophomore",
    courses: ["ENG205", "THR130", "INF310"]
  },
  {
    name: "Emy Fang",
    standing: "Senior",
    courses: ["BUS300", "BUS260", "BUS448"]
  },
  {
    name: "Filip Gomez",
    standing: "Junior",
    courses: ["COS221", "COS310", "INF240"]
  },
  {
    name: "Gergana Harris",
    standing: "Senior",
    courses: ["BUS448", "ENG205", "THR130"]
  },
  {
    name: "Harry Insman",
    standing: "Senior",
    courses: ["INF310", "ENG205", "THR130"]
  },
  {
    name: "Iliana Johnes",
    standing: "Sophomore",
    courses: ["BUS260", "BUS300", "ENG205"]
  },
  {
    name: "Jane Kelly",
    standing: "Sophomore",
    courses: ["BUS220", "BUS260", "THR130"]
  }
];

// STUDENT NAMES
const studentNames = students.map(student => student.name);
console.log(studentNames);

// STUDENTS PER COURSE
const studentsPerCourse = {};
for (let student of students) {
  for (let course of student.courses) {
    if (!studentsPerCourse[course]) {
      studentsPerCourse[course] = 0;
    }
    studentsPerCourse[course] += 1;
  }
}
console.log("STUDENTS PER COURSE");
console.log(studentsPerCourse);

// THE MOST STDUENTS INVOLVED
let mostInvolved = Object.values(studentsPerCourse)[0];
for (let x = 0; x < Object.values(studentsPerCourse).length; x++) {
  if (Object.values(studentsPerCourse)[x] > mostInvolved) {
    mostInvolved = Object.values(studentsPerCourse)[x];
  }
}
console.log("THE MOST STUDENTS INVOLVED");
console.log(mostInvolved);

// THE FEWEST STDUENTS INVOLVED
let fewestInvolved = Object.values(studentsPerCourse)[0];
for (let x = 0; x < Object.values(studentsPerCourse).length; x++) {
  if (Object.values(studentsPerCourse)[x] < fewestInvolved) {
    fewestInvolved = Object.values(studentsPerCourse)[x];
  }
}
console.log("THE FEWEST STUDENTS INVOLVED");
console.log(fewestInvolved);

// STUDENTS PER STANDING
const studentsByStanding = {};
for (let student of students) {
  if (!studentsByStanding[student.standing]) {
    studentsByStanding[student.standing] = 0;
  }
  studentsByStanding[student.standing] += 1;
}
console.log("STUDENTS PER STANDING");
console.log(studentsByStanding);

// COURSES BY DEPARTMENT
const coursesByDepartment = {};
for (let course of courses) {
  if (!coursesByDepartment[course.department]) {
    coursesByDepartment[course.department] = 0;
  }
  coursesByDepartment[course.department] += 1;
}
console.log("COURSES BY DEPARTMENT");
console.log(coursesByDepartment);

// COURSES PER DEPARTMENT
const coursesPerDepartment = {};
for (let course of courses) {
  coursesPerDepartment[course.section] = course.department;
}
console.log("COURSES PER DEPARTMENT");
console.log(coursesPerDepartment);

const departmentsCourses = Object.keys(coursesPerDepartment);
const sectionCourses = Object.values(coursesPerDepartment);

// STUDENTS BY DEPARTMENT
// We have  students per course, course by department

// INSTRUCTOR PER COURSE
const instructorPerCourse = {};
for (let course of courses) {
  instructorPerCourse[course.section] = course.instructor;
}
console.log("INSTRUCTOR PER COURSE");
console.log(instructorPerCourse);

// STUDENTS PER INSTRUCTOR
/*
const studentsPerInstructor = {};
for (let student of students) {
  const instructorsOfStudent = [];
  for (let course of student.courses) {
    const courseInstructor = instructorPerCourse[course];
    if (!instructorsOfStudent.includes(courseInstructor)) {
      instructorsOfStudent.push(courseInstructor);
    }
  }
  for (let instructor of instructorsOfStudent) {
    studentsPerInstructor[instructor] += 1;
    console.log("STUDENTS PER INSTRUCTOR");
    console.log(instructorsOfStudent);
  }
}
*/

// WHAT MAJOR
// what courses each student is taking
const studentTaking = {};
for (let student of students) {
  studentTaking[student.name] = student.courses;
}
console.log("STUDENT IS TAKING");
console.log(studentTaking);
// find what courses are from which department
const whichDepartment = {};
for (let course of courses) {
  whichDepartment[course.section] = course.department;
}
console.log("Each course with its department");
console.log(whichDepartment);
// Replacing courses names with department
const replace = {};
for (let course of courses) {
  if (studentTaking[courses] === Object.keys(whichDepartment)) {
    replace = studentTaking.courses = whichDepartment[departemnt];
  }
}
console.log(replace);

// STUDENTS WITH BIGGEST SUM OF CREDITS FOR THEIR ENROLLED CLASSES
// What courses each student takes
const creditsWinner = {};
console.log(studentTaking);
// The amount of credits per course
const creditsForCourse = {};
for (let course of courses) {
  creditsForCourse[course.section] = course.credits;
}
console.log("Each course with its credits");
console.log(creditsForCourse);
// substitute courses with its credits
// using splice?
