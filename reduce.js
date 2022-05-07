  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4,];

let expanded = nums.reduce((acc, curr) => {
  console.log(
    'acc: ', acc,
    'curr: ', curr,
    'total: ', acc + curr 
  )
  return acc + curr;
}, 0);

console.log(expanded);

let sum = nums.reduce((acc, curr) => acc + curr, 10);
console.log(sum);



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Marketer',
    yrsExperience: 4
  },
  {
    name: 'Jane',
    profession: 'Manager',
    yrsExperience: 5
  }
];

// Totaling a specific object property
let totExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totExp);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- expected result
let expByProf = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {})

console.log(expByProf);


// Grouping by a property, and totaling it too
let profByName = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]) {
    acc[key] = curr.name + ', ';
  } else {
    acc[key] += curr.name;
  }
  return acc;
}, {})

console.log(profByName);

// Grouping by a property, and totaling it too
// Show specific profession and most experienced
// {Ariel: Designer: 3} <-- expected result
let designer = teamMembers.filter(person => person.profession === 'Designer');
let mostExpDesigner = designer.reduce((acc, curr) => acc = acc > curr.yrsExperience ? acc : curr.yrsExperience, 0)
console.log(mostExpDesigner);

const des = teamMembers.reduce((acc, curr) => {
  if (curr.yrsExperience > acc.max) {
    let { name, yrsExperience, profession } = curr;
    acc.name = name;
    acc.profession = profession;
    acc.max = yrsExperience;
  }
  return acc;
}, { name: "", profession: "", max: 0 });

console.log(des);


// let profName = teamMembers.filter(person => person.profession === 'Developer' && person.name === 'Ariel');
// console.log(profName);

// code challenge
let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const biggest = students.reduce((acc, curr) => {
  acc = acc.max > curr.results.english ? acc: {name:curr.name, max:curr.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);