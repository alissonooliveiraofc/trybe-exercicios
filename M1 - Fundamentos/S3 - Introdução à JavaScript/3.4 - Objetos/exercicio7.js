const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

const valuePosition = (obj, index) => Object.values(obj)[index];
console.log(valuePosition(school, 0));

const sumStudents = (obj) => {
  let totalStudents = 0;
  const arrayLessons = obj.lessons;

  for (let index = 0; index < arrayLessons.length; index += 1) {
    totalStudents += arrayLessons[index].students;
  }

  return totalStudents;
};

console.log(sumStudents(school));

const keyExists = (obj, key) => {
  const keys = Object.keys(obj.lessons[0]);
  return keys.includes(key);
};

console.log(keyExists(school, "professor"));

const changeKey = (obj, course, value) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index].course === course) {
      obj.lessons[index].shift = value;
    }
  }
  return obj;
};

console.log(changeKey(school, "Python", "Noite"));
