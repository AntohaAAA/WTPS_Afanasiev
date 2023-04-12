import { randomUserMock } from './FE4U-Lab3-mock.js';
import { additionalUsers } from './FE4U-Lab3-mock.js';


function idToString(id) {
    if (typeof id === 'object') {
      return `${id.name}${id.value}`;
    }
    return id;
  }
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
function fetchData() {
    const data = [...randomUserMock];
    const ids = new Set();
    data.forEach((user) => {
      const id = idToString(user.id);
      ids.add(id);
    });
    additionalUsers.forEach((user) => {
      const id = idToString(user.id);
      if (!ids.has(id)) {
        data.push(user);
        ids.add(id);
      }
    });
    return data;
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

function UpperCase_val(str) 
{
    return str.toUpperCase() === str
 }

function validate(person){
    const phoneRegex = /[0-9-+]+/;
    
    var full_name_val=false;
    if(typeof person.full_name==='string'&& UpperCase_val(person.full_name.charAt(0))){
        full_name_val=true;
    }
    if(full_name_val==false){
        console.log("full_name is not valid");
    }
    var gender_val=false;
    if(typeof person.gender==='string'&& UpperCase_val(person.gender.charAt(0))){
       gender_val =true;
    }
    if(gender_val==false){
        console.log("gender is not valid");
    }
    var note_val=false;
    if(typeof person.note==='string'&& UpperCase_val(person.note.charAt(0))){
        note_val =true;
     }
     if(note_val==false){
        console.log("note is not valid");
    }
     var state_val=false;
    if(typeof person.state==='string'&& UpperCase_val(person.state.charAt(0))){
        state_val =true;
     }
     if(state_val==false){
        console.log("state is not valid");
    }
     var city_val=false;
     if(typeof person.city==='string'&& UpperCase_val(person.city.charAt(0))){
        city_val =true;
     }
     if(city_val==false){
        console.log("city is not valid");
    }
     var country_val=false;
     if(typeof person.country==='string'&& UpperCase_val(person.country.charAt(0))){
        country_val =true;
     }
     if(country_val==false){
        console.log("country is not valid");
    }
     var age_val=false;
     if(typeof person.age==='number' ){
        age_val =true;
     }
     if(age_val==false){
        console.log("age is not valid");
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
     if(full_name_val==true && gender_val ==true && note_val ==true && state_val ==true&&city_val ==true && country_val ==true&&
        age_val==true&&phone_val ==true&& email_val ==true){
            console.log("Form is valid");
        }
}

export function getData() {
    const fetchedData = fetchData();
    return fetchedData.map((person) => extractPerson(person));
  
  } 
var MergedData1=getData();


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
console.log(PercentofUsers(u,MergedData1));
//console.log(PercentofUsers(Find('Aaron',1,MergedData1),MergedData1))
//console.log(Find('cats',2,MergedData1))
//const result2= result.filter(person => person.favorite)
//console.log(filter(0,0,0,true));
//console.log(sort(filter('Norway',60,80),2,true))
//console.log(Find('Aaron',1,MergedData1))
//console.log(u)
//validate(MergedData1[0])
