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
    ageCell.textContent = person.gender;
    genderCell.textContent=person.gender;
    nationalityCell.textContent = person.id;
  }
//   for (let i = 0; i < people.length; i++) {
//     const person = people[i];
//     const row = table.insertRow();
//     const nameCell = row.insertCell();
//     const ageCell = row.insertCell();
//     const genderCell = row.insertCell();
//     const nationalityCell = row.insertCell();
//     nameCell.textContent = person.name;
//     ageCell.textContent = person.age;
//     genderCell.textContent=person.gender;
//     nationalityCell.textContent = person.nationality;
//   }
 // const teacher_list =document.querySelector('.teachers-list');
  // const teacher_list_fav =document.getElementById("fav")
 
  // for (let i = 0; i < MergedData1.length; i++) {
  //   const person = MergedData1[i];
  //   const c_info= document.createElement("div");
  //   c_info.setAttribute("class","teacher-compact-info");
  //   c_info.setAttribute("type","button");
  //   c_info.setAttribute("onclick","PopUpShow()");
  //   const p_img_b= document.createElement("div");
  //   p_img_b.setAttribute("class","teacher-avatar");
  //   const p_img= document.createElement("img");
  //   p_img.setAttribute("class","teacher-avatar__img");
  //   p_img.setAttribute("src",person.picture_large);
  //   p_img.setAttribute("alt","Teacher photo");
  //   p_img_b.appendChild(p_img);
  //   c_info.appendChild(p_img_b);

  //   const p_name= document.createElement("div");
    
  //   p_name.setAttribute("class","teacher-compact-info__name");
  //   p_name.textContent=person.full_name;
  //   c_info.appendChild(p_name);

  //   const p_sub= document.createElement("div");
  //   p_sub.setAttribute("class","teacher-compact-info__specialty")
  //   p_sub.textContent=person.course;
  //   c_info.appendChild(p_sub);
  //   const p_nat= document.createElement("div");
  //   p_nat.setAttribute("class","teacher-compact-info__nationality")
  //   p_nat.textContent=person.country;
  //   c_info.appendChild(p_nat);
  //   //teacher_list.appendChild(c_info);
  //   //teacher_list_fav.appendChild(c_info);
    
  // }