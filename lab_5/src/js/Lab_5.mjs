


function getId(person){
    if (typeof person.id === 'object') {
        person.id =person.id.name+ " "+ person.id.value;
    }
}
function getName(person){
    if(typeof person.name === 'object'){
    person.title= person.name.title;
    person.full_name=person.name.first+" "+person.name.last;
    }

}
function getLocation(person){
    if(typeof person.location === 'object'){
        person.city=person.location.city;
        person.state=person.location.state;
        person.country=person.location.country;
        person.postcode=person.location.postcode;
        person.coordinates=person.location.coordinates;
        person.timezone=person.location.timezone;
    }
}
function getBirthDay(person){
    if(typeof person.dob === 'object'){
        person.b_day=person.dob.date;
        person.age=person.dob.age;
    }
    
    else if(typeof person.b_day==='string'){
        const b_year = Number(person.b_day.substring(0,4));
    var date= new Date();
    const cur_year=date.getFullYear();
    person.age=cur_year-b_year;
        
    }
}
function getPicture(person)
{
    if(typeof person.picture === 'object'){
        person.picture_large=person.picture.large;
        person.picture_thumbnail=person.picture.thumbnail;
    }
}

  
 var Courses=["Mathematics", "Physics", "English", "Computer Science", "Dancing", "Chess", "Biology", "Chemistry",
     "Law", "Art", "Medicine", "Statistics"];
     function getRandomInt() {
         return Math.floor(Math.random() * 11);
       }
function extractPerson(person){
    getId(person);
    getName(person);
    getLocation(person);
    getBirthDay(person);
    getPicture(person);
    return{
    
    gender: person.gender ? person.gender:null,
      title: person.title ? person.title:null ,
      full_name: person.full_name ? person.full_name:null,
      city: person.city ? person.city:null,
      state: person.state ? person.state:null,
      country: person.country ? person.country:null,
      postcode: person.postcode ? person.postcode:null,
      coordinates:person.coordinates ? person.coordinates:null,
      timezone: person.timezone ? person.timezone:null,
      email: person.email ? person.email:null,
      b_day: person.b_day ?person.b_day:null,
      age:person.age ? person.age: null,
      phone: person.phone ? person.phone:null,
      
      picture_large: person.picture_large ? person.picture_large:null,
      picture_thumbnail: person.picture_thumbnail ? person.picture_thumbnail:null,
      id: person.id,
      favorite: person.favorite ? person.favorite:null,
      course: person.course ? person.course:Courses[getRandomInt()],
      bg_color: person.bg_color ? person.bg_color:"#ffffff",
      note: person.note ? person.note:null

    };
}



async function getUsers(count) {
  const url = `https://randomuser.me/api?results=${count}`;
  const fetchedData = await fetch(url);
  const { results } = await fetchedData.json();
  const users = results.map((person) => extractPerson(person));
  return users;
}
var MergedData1 = await getUsers(50);



function UpperCase_val(str) 
{
    return str.toUpperCase() === str
 }



export function getData() {
    const fetchedData = fetchData();
    return fetchedData.map((person) => extractPerson(person));
  
  } 
//var MergedData1=getData();


function filter(country=0,agemin=0,agemax=100,gender=0,favorite=0){
    var result = 0;
    if(country==0&&agemin==0&&gender==0&&favorite==0){
    result = MergedData1;
    }
    if(country!=0&&agemin==0&&gender==0&&favorite==0)
    {
    result = MergedData1.filter(person => person.country==country)
    }
    if(country==0&&agemin+agemax!=100&&gender==0&&favorite==0)
    {
    result = MergedData1.filter(person =>typeof person.age==='number' && person.age>=agemin&&person.age<=agemax)
    }
    if(country==0&&agemin==0&&gender!=0&&favorite==0)
    {
    result = MergedData1.filter(person => person.gender==gender)
    }
    if(country==0&&agemin==0&&gender==0&&favorite!=0)
    {
    result = MergedData1.filter(person => person.favorite==favorite)
    }
    if(country!=0&&agemin+agemax!=100&&gender==0&&favorite==0)
    {
    result = MergedData1.filter(person =>typeof person.age==='number' && person.country==country&&person.age>=agemin&&person.age<=agemax)
    }
    if(country!=0&&agemin==0&&gender!=0&&favorite==0)
    {
    result = MergedData1.filter(person => person.country==country&&person.gender==gender)
    }
    if(country!=0&&agemin==0&&gender==0&&favorite!=0)
    {
    result = MergedData1.filter(person => person.country==country&&person.favorite==favorite)
    }
    if(country==0&&agemin+agemax!=100&&gender!=0&&favorite==0)
    {
    result = MergedData1.filter(person =>typeof person.age==='number' && person.gender==gender&&person.age>=agemin&&person.age<=agemax)
    }
    if(country==0&&agemin+agemax!=100&&gender==0&&favorite!=0)
    {
    result = MergedData1.filter(person =>typeof person.age==='number' && person.favorite==favorite&&person.age>=agemin&&person.age<=agemax)
    }
    if(country==0&&agemin==0&&gender!=0&&favorite!=0)
    {
    result = MergedData1.filter(person => person.favorite==favorite&&person.gender==gender)
    }
    if(country==0&&agemin+agemax!=100&&gender!=0&&favorite!=0)
    {
    result = MergedData1.filter(person =>typeof person.age==='number' && person.favorite==favorite&&person.gender==gender&&person.agemin>=agemin&&person.age<=agemax)
    }
    if(country!=0&&agemin==0&&gender!=0&&favorite!=0)
    {
    result = MergedData1.filter(person => person.favorite==favorite&&person.gender==gender&&person.country==country)
    }
    if(country!=0&&agemin+agemax!=100&&gender==0&&favorite!=0)
    {
    result = MergedData1.filter(person =>typeof person.age==='number' && person.favorite==favorite&&person.age>=agemin&&person.country==country&&person.age<=agemax)
    }
    if(country!=0&&agemin+agemax!=100&&gender!=0&&favorite==0)
    {
    result = MergedData1.filter(person => typeof person.age==='number' &&person.gender==gender&&person.age>=agemin&&person.country==country&&person.age<=agemax)
    }


    return result
}
function sort(data,ch,Up){
let result;
if(ch==1&&Up==true)    
result = data.sort(function (a, b) {
    if (a.full_name > b.full_name) {
      return 1;
    }
    if (a.full_name < b.full_name) {
      return -1;
    }
   
    return 0;
})
if(ch==1&&Up==false)    
result = data.sort(function (a, b) {
    if (a.full_name < b.full_name) {
      return 1;
    }
    if (a.full_name > b.full_name) {
      return -1;
    }
   
    return 0;
})
if(ch==2&&Up==true)    
result = data.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
   
    return 0;
})
if(ch==2&&Up==false)    
result = data.sort(function (a, b) {
    if (a.age < b.age) {
      return 1;
    }
    if (a.age > b.age) {
      return -1;
    }
   
    return 0;
})
if(ch==3&&Up==true)    
result = data.sort(function (a, b) {
    if (a.b_day > b.b_day) {
      return 1;
    }
    if (a.b_day < b.b_day) {
      return -1;
    }
   
    return 0;
})
if(ch==3&&Up==false)    
result = data.sort(function (a, b) {
    if (a.b_day < b.b_day) {
      return 1;
    }
    if (a.b_day > b.b_day) {
      return -1;
    }
   
    return 0;
})
if(ch==4&&Up==true)    
result = data.sort(function (a, b) {
    if (a.country > b.country) {
      return 1;
    }
    if (a.country < b.country) {
      return -1;
    }
   
    return 0;
})
if(ch==4&&Up==false)    
result = data.sort(function (a, b) {
    if (a.country < b.country) {
      return 1;
    }
    if (a.country > b.country) {
      return -1;
    }
   
    return 0;
})
return result
}
function Find(f,ch,data){
    var result;
    if(ch==1)
    {
    result = data.filter(person => typeof person.full_name==='string' && person.full_name.includes(f))
    }
    if(ch==2)
    {
    result = data.filter(person => typeof person.note==='string' && person.note.includes(f))
    }
    if(ch==3)
    {
    result = data.filter(person => person.age==f)
    }
    return result

}




function PercentofUsers(res,data){
    let per=Math.round(res.length/data.length*100)+"%";
    return per
}

var lE=MergedData1.length-1;
var u=filter('Norway',60,80);
//console.log(sort(u,2,false));
//console.log(PercentofUsers(u,MergedData1));
//console.log(PercentofUsers(Find('Aaron',1,MergedData1),MergedData1))
//console.log(Find('cats',2,MergedData1))
//const result2= result.filter(person => person.favorite)
//console.log(filter(0,0,0,true));
//console.log(sort(filter('Norway',60,80),2,true))
//console.log(Find('Aaron',1,MergedData1))
//console.log(u)
//validate(MergedData1[0])


const table = document.getElementById('myTable');
  function Table(n0,n1){
  for (let i = n0; i < n1; i++) {
    const person = MergedData1[i];
    if(person!=null){
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const SpecialityCell = row.insertCell();
    const ageCell = row.insertCell();
    const genderCell = row.insertCell();
    const nationalityCell = row.insertCell();
    nameCell.textContent = person.full_name;
    SpecialityCell.textContent = person.course;
    ageCell.textContent = person.age;
    genderCell.textContent=person.gender;
    nationalityCell.textContent = person.country;
    }
  }
}
// const teacher_list =document.querySelector('.teachers-list');

function Up(str)
{
  let result="";
for (var i = 0; i < str.length; i++) {
  var char = str.charAt(i);
  if (char === char.toUpperCase()) {
    result += char;
    result += ' ';
  }
}
return result
}




const teacher_list_fav =document.getElementById("fav");
 const teacher_list =document.getElementById("list");

function Top_T_F(str0){
  //placeh="A A";
  if(teacher_list.firstChild!=null)
  while (teacher_list.firstChild) {
    teacher_list.removeChild(teacher_list.firstChild);
  }
  for (let i = 0; i < MergedData1.length; i++) {
    const person = MergedData1[i];
    if(person.note==null){
      person.note=" ";
    }
    if(person.full_name.includes(str0)||person.age==str0 ||person.note.includes(str0) ){
    const c_info= document.createElement("div");
    c_info.setAttribute("class","teacher-compact-info");
    c_info.setAttribute("type","button");
    // c_info.setAttribute("onclick","PopUpShow()");
    const p_img_b= document.createElement("div");
    p_img_b.setAttribute("class","teacher-avatar");
    
    if(person.picture_large!=null){
    const p_img= document.createElement("img");
    p_img.setAttribute("class","teacher-avatar__img");
    p_img.setAttribute("src",person.picture_large);
    p_img.setAttribute("alt","Teacher photo");
    p_img_b.appendChild(p_img);
    }
    else{
      const p_h=document.createElement("h3");
      p_h.setAttribute("class","teacher-avatar__placeholder");
      let placeh=Up(person.full_name);
     
      p_h.textContent=placeh;
      p_img_b.appendChild(p_h);
    }
    c_info.appendChild(p_img_b);

    const p_name= document.createElement("div");
    
    p_name.setAttribute("class","teacher-compact-info__name");
    p_name.textContent=person.full_name;
    c_info.appendChild(p_name);

    const p_sub= document.createElement("div");
    p_sub.setAttribute("class","teacher-compact-info__specialty")
    p_sub.textContent=person.course;
    c_info.appendChild(p_sub);
    const p_nat= document.createElement("div");
    p_nat.setAttribute("class","teacher-compact-info__nationality")
    p_nat.textContent=person.country;
    c_info.appendChild(p_nat);

    const p_fav=document.createElement("div");
    p_fav.setAttribute("id","favor");
    p_fav.setAttribute("type","button");
    if(person.favorite==true){
      p_fav.textContent='❤️';
    }
    else{
      p_fav.textContent='🖤';
    }
    c_info.appendChild(p_fav);
    teacher_list.appendChild(c_info);
    console.log(str0);
  }
}
}

  
function Fav(){
  for (let i = 0; i < MergedData1.length; i++) {
    const person = MergedData1[i];
    const c_info= document.createElement("div");
    c_info.setAttribute("class","teacher-compact-info");
    c_info.setAttribute("type","button");
    c_info.setAttribute("onclick","PopUpShow()");
    const p_img_b= document.createElement("div");
    p_img_b.setAttribute("class","teacher-avatar");
    if(person.picture_large!=null){
      const p_img= document.createElement("img");
      p_img.setAttribute("class","teacher-avatar__img");
      p_img.setAttribute("src",person.picture_large);
      p_img.setAttribute("alt","Teacher photo");
      p_img_b.appendChild(p_img);
      }
      else{
        const p_h=document.createElement("h3");
        p_h.setAttribute("class","teacher-avatar__placeholder");
        let placeh=Up(person.full_name);
     
        p_h.textContent=placeh;
        p_img_b.appendChild(p_h);
      }
    c_info.appendChild(p_img_b);

    const p_name= document.createElement("div");
    
    p_name.setAttribute("class","teacher-compact-info__name");
    p_name.setAttribute("id","AAA");
    p_name.textContent=person.full_name;
    c_info.appendChild(p_name);

    const p_sub= document.createElement("div");
    p_sub.setAttribute("class","teacher-compact-info__specialty")
    p_sub.textContent=person.course;
    c_info.appendChild(p_sub);
    const p_nat= document.createElement("div");
    p_nat.setAttribute("class","teacher-compact-info__nationality")
    p_nat.textContent=person.country;
    c_info.appendChild(p_nat);
    //teacher_list.appendChild(c_info);
    if(person.favorite==true || person.full_name==input1){
      const c=c_info;
    teacher_list_fav.appendChild(c);
    }
  }
}
  const myBlock = document.querySelector('#list');
  const myBlock2 = document.querySelector('#fav');
  var input1;
  const search=document.querySelector('#search');

  search.addEventListener('click', function(event)
  {
    const s_input=document.querySelector('#s_input');
    const s_value=s_input.value;
    Top_T_F(s_value);
    console.log("ddddddddddddddd")
  }
  )


function Fav_add(){
myBlock.addEventListener('click', function(event) {

  console.log(event.target);

  if(event.target.getAttribute("id")=='favor'){
    if(event.target.textContent!='❤️'){
    event.target.textContent='❤️';
    const parent=event.target.parentNode;
    input1 = parent.querySelector('.teacher-compact-info__name');
   
   //const input2 = event.target.value;
   // const i=myBlock.childNodes;
   console.log(parent);
   console.log(input1.textContent);
   // console.log(input2);
   for (let i = 0; i < MergedData1.length; i++) {
    
    const person = MergedData1[i];
    if(person.full_name==input1.textContent){
    const c_info= document.createElement("div");
    c_info.setAttribute("class","teacher-compact-info");
    c_info.setAttribute("type","button");
    c_info.setAttribute("onclick","PopUpShow()");
    const p_img_b= document.createElement("div");
    p_img_b.setAttribute("class","teacher-avatar");
    if(person.picture_large!=null){
      const p_img= document.createElement("img");
      p_img.setAttribute("class","teacher-avatar__img");
      p_img.setAttribute("src",person.picture_large);
      p_img.setAttribute("alt","Teacher photo");
      p_img_b.appendChild(p_img);
      }
      else{
        const p_h=document.createElement("h3");
        p_h.setAttribute("class","teacher-avatar__placeholder");
        let placeh=Up(person.full_name);
     
      p_h.textContent=placeh;
        p_img_b.appendChild(p_h);
      }
    c_info.appendChild(p_img_b);

    const p_name= document.createElement("div");
    
    p_name.setAttribute("class","teacher-compact-info__name");
    p_name.setAttribute("id","AAA");
    p_name.textContent=person.full_name;
    c_info.appendChild(p_name);

    const p_sub= document.createElement("div");
    p_sub.setAttribute("class","teacher-compact-info__specialty")
    p_sub.textContent=person.course;
    c_info.appendChild(p_sub);
    const p_nat= document.createElement("div");
    p_nat.setAttribute("class","teacher-compact-info__nationality")
    p_nat.textContent=person.country;
    c_info.appendChild(p_nat);
    //teacher_list.appendChild(c_info);
    
      const c=c_info;
    teacher_list_fav.appendChild(c);
    person.favorite=true;
    }



  }


    }
  }


   else if(event.target.getAttribute("class")=='teacher-compact-info'){
  input1 = event.target.querySelector('.teacher-compact-info__name');
  Pop();
  PopUpShow();
  }
  
  else if(event.target.getAttribute("class")=='teacher-avatar__img'  || event.target.getAttribute("class")=='teacher-avatar__placeholder'){
        const parent1=event.target.parentNode;
        const parent=parent1.parentNode;
        input1 = parent.querySelector('.teacher-compact-info__name');
        PopUpShow();
        Pop();
      
      }
      else{
        const parent=event.target.parentNode;
       input1 = parent.querySelector('.teacher-compact-info__name');
       PopUpShow();
       Pop();
      
    
      }
  
});

myBlock2.addEventListener('click', function(event) {

  console.log(event.target);

   if(event.target.getAttribute("class")=='teacher-compact-info'){
  input1 = event.target.querySelector('.teacher-compact-info__name');
  Pop();
  PopUpShow();
  }
  
  else if(event.target.getAttribute("class")=='teacher-avatar__img' || event.target.getAttribute("class")=='teacher-avatar__placeholder')
  {
        const parent1=event.target.parentNode;
        const parent=parent1.parentNode;
        input1 = parent.querySelector('.teacher-compact-info__name');
        PopUpShow();
        Pop();
      
      }
      else{
        const parent=event.target.parentNode;
       input1 = parent.querySelector('.teacher-compact-info__name');
       PopUpShow();
       Pop();
      
    
      }
  
});
}



function Pop()
{
  const box_1=document.querySelector(".box_1");
  if(box_1.firstChild!=null)
  while (box_1.firstChild) {
    box_1.removeChild(box_1.firstChild);
  }
  const box_2=document.querySelector(".box_2");
  if(box_2.firstChild!=null)
  while (box_2.firstChild) {
    box_2.removeChild(box_2.firstChild);
  }
  const tc_container_2=document.querySelector(".tc_container_2");
  if(tc_container_2.firstChild!=null)
  while (tc_container_2.firstChild) {
    tc_container_2.removeChild(tc_container_2.firstChild);
  }
  
  
  for (let i = 0; i < MergedData1.length; i++) {
    
    const person = MergedData1[i];
    if(person.full_name==input1.textContent){
  
    const p_img= document.createElement("img");
    p_img.setAttribute("class","teacher-card__avatar");
    p_img.setAttribute("src",person.picture_large);
    p_img.setAttribute("alt","Teacher photo");
    //p_img.setAttribute("id","image");
    box_1.appendChild(p_img);
    //const box_2=document.querySelector(".box_2");
    const p_name= document.createElement("p");
    
    p_name.setAttribute("class","teacher-card__name");
    //p_name.setAttribute("id","AAA");
    p_name.textContent=person.full_name;
    box_2.appendChild(p_name);

    const p_sub= document.createElement("p");
    p_sub.setAttribute("class","teacher-card__speciality")
    p_sub.textContent=person.course;
    box_2.appendChild(p_sub);
    const p_place= document.createElement("p");
    p_place.setAttribute("class","teacher-card__additional-info");
    p_place.textContent=`${person.city}   ${person.country}`;
    box_2.appendChild(p_place);  
    const p_a_g= document.createElement("p");
    p_a_g.setAttribute("class","teacher-card__additional-info");
    p_a_g.textContent=`${person.age}  ${person.gender}`;
    box_2.appendChild(p_a_g); 
    const p_email= document.createElement("p");
    p_email.setAttribute("class","teacher-card__additional-info");
    p_email.textContent=person.email;
    box_2.appendChild(p_email); 

    const p_phone= document.createElement("p");
    p_phone.setAttribute("class","teacher-card__additional-info");
    p_phone.textContent=person.phone;
    box_2.appendChild(p_phone); 

    const p_add= document.createElement("p");
    
    p_add.textContent=person.note;
    tc_container_2.appendChild(p_add); 
}

  }
}

function AddTeacher(){
const full_name=document.querySelector("#f_n");
const special=document.querySelector("#sp");
const country=document.querySelector("#ctr");
const city = document.querySelector("#city");
const email = document.querySelector("#email");
const tel= document.querySelector("#tel");
const b_day=document.querySelector("#b_d");
const gender=document.querySelector("#gender");
const back_color=document.querySelector("#b_c");
const notes=document.querySelector("#textarea");



const newEl=MergedData1.length;
let person = {
  "gender": null,
  "course": null,
  "full_name": null,
  "city": null,
  "bg_color":null,
  "country": null,
  "coordinates": null,
  "email": null,
  "b_date": null,
  "favorite":null,
  "phone": null,
  "id":null,
  "note":null,
  "title":null,
  "timezone":null,
  "postcode":null
  
};

person.full_name=full_name.value;
person.course=special.value;
person.country=country.value;
person.city=city.value;
person.email=email.value;
person.phone=tel.value;
person.b_date=b_day.value;
person.gender=gender.value;
person.bg_color=back_color.value;
person.note=notes.value;
const b_year = Number(person.b_date.substring(0,4));
var date= new Date();
const cur_year=date.getFullYear();
person.age=cur_year-b_year;
if(validate(person)==true){
  MergedData1.push(person);
}

console.log(MergedData1[MergedData1.length-1]);

if(teacher_list.firstChild!=null){
  while (teacher_list.firstChild) {
    teacher_list.removeChild(teacher_list.firstChild);
  }
}


delT();
Table(0,10);
Addregion();

}
function delT(){
if(table.firstChild!=null){
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}
}
const AddT=document.querySelector("#AddTeacher");
AddT.addEventListener('click', function(event) {
  AddTeacher();
  AllD(MergedData1,0,10);
createPageLinks(MergedData1);
  createPageLinks_2();
}
)


function validate(person){
  const phoneRegex = /[0-9-+]+/;
  
  var full_name_val=false;
  if(typeof person.full_name==='string'&& UpperCase_val(person.full_name.charAt(0))&&person.full_name.trim()!=""){
      full_name_val=true;
  }
  if(full_name_val==false){
      console.log("full_name is not valid");
  }
  
  var note_val=false;
  if(typeof person.note==='string'&& UpperCase_val(person.note.charAt(0)) &&person.note.trim()!=""){
      note_val =true;
   }
   if(note_val==false){
      console.log("note is not valid");
  }
   
   var city_val=false;
   if(typeof person.city==='string'&& UpperCase_val(person.city.charAt(0))&&person.city.trim()!=""){
      city_val =true;
   }
   if(city_val==false){
      console.log("city is not valid");
  }
   var country_val=false;
   if(typeof person.country==='string'&& UpperCase_val(person.country.charAt(0))&&person.country.trim()!=""){
      country_val =true;
   }
   if(country_val==false){
      console.log("country is not valid");
  }
   
   var phone_val=false;
  if(phoneRegex.test(person.phone))
  {
       phone_val =true;
  }
  if(phone_val==false){
      console.log("phone is not valid");
  }
   var email_val=false;
   
   if(typeof person.email==='string' && person.email.includes('@') ){
      email_val =true;
   }
   if(email_val==false){
      console.log("email is not valid");
  }
   if(full_name_val==true &&  note_val ==true &&city_val ==true && country_val ==true&&
      phone_val ==true&& email_val ==true){
          console.log("Form is valid");
          return true;
      }
      else{
        return false;
      }
}


const inAge =document.querySelector("#inAge");
var agemin0=0;
var agemax0=120;

inAge.addEventListener('change', function(event) {
if(inAge.value=='18-31'){
agemin0=18;
agemax0=31;
}
if(inAge.value=='32-50'){
agemin0=32;
agemax0=49;
  
}
if(inAge.value=='50-80'){
agemin0=50;
agemax0=80;
}


if(inAge.value=='Any'){
  agemin0=0;
  agemax0=120;
}


filt(agemin0,agemax0,gender0,region0,WithPhoto0,OnlyFavorites0) ;
  console.log(inAge.value);
  
}

)




var gender0=null;
const inSex =document.querySelector("#inSex");
inSex.addEventListener('change', function(event)
{
  //console.log(inSex.value)
  if(inSex.value=="Any"){
    gender0=null;
  }
  if(inSex.value=="male"){
    gender0="male";
  }

  if(inSex.value=="female"){
    gender0="female";
  }

  filt(agemin0,agemax0,gender0,region0,WithPhoto0,OnlyFavorites0) ;
  
}
)
var region0=null;
const inRegion =document.querySelector("#inRegion");
inRegion.addEventListener('change', function(event)
{
  
  if(inRegion.value=="Any"){
    region0=null;
  }
  if(inRegion.value=="Europe"){
    region0="Europe";
  }

  if(inRegion.value=="Asia"){
    region0="Asia";
  }

  if(inRegion.value=="America"){
    region0="America";
  }
  if(inRegion.value=="Other"){
    region0="other";
  }
  filt(agemin0,agemax0,gender0,region0,WithPhoto0,OnlyFavorites0) ;
  
}
)


var WithPhoto0=null;
const inWithPhoto =document.querySelector("#inWithPhoto");
inWithPhoto.addEventListener('change', function(event)
{
  console.log(inWithPhoto.checked)
  
  if(inWithPhoto.checked==false){
     WithPhoto0=null;
  }
  if(inWithPhoto.checked==true){
    WithPhoto0=true;
 }
  filt(agemin0,agemax0,gender0,region0,WithPhoto0,OnlyFavorites0) ;
  
}
)



var OnlyFavorites0=null;
const inOnlyFavorites =document.querySelector("#inOnlyFavorites");
inOnlyFavorites.addEventListener('change', function(event)
{
  console.log(inOnlyFavorites.checked)
  
  if(inOnlyFavorites.checked==false){
    OnlyFavorites0=null;
  }
  if(inOnlyFavorites.checked==true){
    OnlyFavorites0=true;
 }
  filt(agemin0,agemax0,gender0,region0,WithPhoto0,OnlyFavorites0) ;
  
}
)


function filt(agemin,agemax,gender,region,WithPhoto,OnlyFavorites){
  // result = MergedData1.filter(person =>typeof person.age==='number' && person.favorite==favorite&&person.gender==gender&&person.agemin>=agemin&&person.age<=agemax)
  let result=0;
  //let result0=0;
  result = MergedData1.filter(person =>typeof person.age==='number' && person.age>=agemin&&person.age<=agemax);
  if(gender){
  result = result.filter(person =>person.gender==gender&&gender);
  }
  if(region){
    result = result.filter(person =>person.region==region);
    }
  if(WithPhoto){
  result = result.filter(person =>person.picture_large!=null);
  }
  if(OnlyFavorites){
    result = result.filter(person =>person.favorite==true);
    }

  //&&person.gender==gender
  if(teacher_list.firstChild!=null)
  while (teacher_list.firstChild) {
    teacher_list.removeChild(teacher_list.firstChild);
  }
 
createPageLinks(result);
AllD(result,0,10||result.length);
 


}
function AllD(result0,n0,n1){
  
  for(let i=n0;i<n1;i++){
    let person=result0[i];
    if(person!=null){
  const c_info= document.createElement("div");
  c_info.setAttribute("class","teacher-compact-info");
  c_info.setAttribute("type","button");
  
  const p_img_b= document.createElement("div");
  p_img_b.setAttribute("class","teacher-avatar");
  
  if(person.picture_large!=null){
  const p_img= document.createElement("img");
  p_img.setAttribute("class","teacher-avatar__img");
  p_img.setAttribute("src",person.picture_large);
  p_img.setAttribute("alt","Teacher photo");
  p_img_b.appendChild(p_img);
  }
  else{
    const p_h=document.createElement("h3");
    p_h.setAttribute("class","teacher-avatar__placeholder");
    let placeh=Up(person.full_name);
   
    p_h.textContent=placeh;
    p_img_b.appendChild(p_h);
  }
  c_info.appendChild(p_img_b);

  const p_name= document.createElement("div");
  
  p_name.setAttribute("class","teacher-compact-info__name");
  p_name.textContent=person.full_name;
  c_info.appendChild(p_name);

  const p_sub= document.createElement("div");
  p_sub.setAttribute("class","teacher-compact-info__specialty")
  p_sub.textContent=person.course;
  c_info.appendChild(p_sub);
  const p_nat= document.createElement("div");
  p_nat.setAttribute("class","teacher-compact-info__nationality")
  p_nat.textContent=person.country;
  c_info.appendChild(p_nat);

  const p_fav=document.createElement("div");
  p_fav.setAttribute("id","favor");
  p_fav.setAttribute("type","button");
  if(person.favorite==true){
    p_fav.textContent='❤️';
  }
  else{
    p_fav.textContent='🖤';
  }
  c_info.appendChild(p_fav);
  teacher_list.appendChild(c_info);
 // console.log(str0);
}
}
}



function Addregion(){

const europeCountries = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];


const asiaCountries = ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];


const americaCountries = ["Antigua and Barbuda", "Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Grenada", "Guatemala", "Guyana", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Suriname", "Trinidad and Tobago", "United States", "Uruguay", "Venezuela"];


for(let i=0;i<MergedData1.length;i++){
MergedData1[i].region="other";
  for(let j=0;j<europeCountries.length;j++){
    if(MergedData1[i].country==europeCountries[j]){
      MergedData1[i].region="Europe";
    }
  }
  for(let j=0;j<asiaCountries.length;j++){
    if(MergedData1[i].country==asiaCountries[j]){
      MergedData1[i].region="Asia";
    }
  }

  for(let j=0;j<americaCountries.length;j++){
    if(MergedData1[i].country==americaCountries[j]){
      MergedData1[i].region="America";
    }
  }
  
}


}

function del(){
  if(teacher_list.firstChild!=null)
  while (teacher_list.firstChild) {
    teacher_list.removeChild(teacher_list.firstChild);
  }
}




function createPageLinks(people) {
  var totalPages = Math.ceil(people.length / 10);

  
  var container = document.getElementById('pagination');
  container.innerHTML = '';

  
  for (var i = 1; i <= totalPages; i++) {
    var link = document.createElement('span');
    link.setAttribute("class","paging__button");
  
    link.textContent = i;
    console.log(i);
    
    link.addEventListener('click', function() {
       var pageNumber = parseInt(this.textContent);
       let to=pageNumber*10;
       let from=to-10;
      
    del();
    AllD(people,from,to);
     });

    container.appendChild(link);
  }
}
function createPageLinks_2() {
  var totalPages = Math.ceil(MergedData1.length / 10);

  
  var container = document.getElementById('pagination_2');
  container.innerHTML = '';

  
  for (var i = 1; i <= totalPages; i++) {
    var link = document.createElement('span');
    link.setAttribute("class","paging__button");
  
    link.textContent = i;
    console.log(i);
    
    link.addEventListener('click', function() {
      var pageNumber = parseInt(this.textContent);
      let to=pageNumber*10;
      let from=to-10;
      
   delT();
   Table(from,to);
    });

    container.appendChild(link);
  }
}

Table(0,10);

AllD(MergedData1,0,10);
createPageLinks(MergedData1);
createPageLinks_2();
Fav();
Fav_add();
Addregion();
