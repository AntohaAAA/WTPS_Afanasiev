import { randomUserMock } from './FE4U-Lab3-mock.mjs';
import { additionalUsers } from './FE4U-Lab3-mock.mjs';

// const people = [
//     { name: 'Андрій', age: 26, gender:'M' , nationality: 'Ukraine' },
//     { name: 'Сергій', age: 32,gender:'M' ,  nationality: 'Ukraine' },
//     { name: 'Марія', age: 21,gender:'F' ,  nationality: 'Ukraine' },
//     { name: 'Марія', age: 21,gender:'F' ,  nationality: 'Ukraine' }
//   ];
//console.log(additionalUsers[0].id)
  const table = document.getElementById('myTable');
  
  for (let i = 0; i < additionalUsers.length; i++) {
    const person = additionalUsers[i];
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const ageCell = row.insertCell();
    const genderCell = row.insertCell();
    const nationalityCell = row.insertCell();
    nameCell.textContent = person.full_name;
    ageCell.textContent = person.course;
    genderCell.textContent=person.gender;
    nationalityCell.textContent = person.id;
  }

// function PopUpShow(){
//     $("#popup1").show();
// }

// function PopUpHide(){
//     $("#popup1").hide();
// }
// function PopUp2Show(){
//     $("#popup2").show();
// }

// function PopUp2Hide(){
//     $("#popup2").hide();
// }

// import { data } from './data.js';
// //var data="aaaaa"
// function displayData() {
//   const outputDiv = document.getElementById('output');
//   outputDiv.textContent = data;
// }

// displayData();
