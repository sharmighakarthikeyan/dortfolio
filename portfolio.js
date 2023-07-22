const animate1_text = document.querySelector(".animate1-text");
const animate2_text = document.querySelector(".animate2-text");
const jobs = ['Programmer', "Student", "Footballer", "Instructor", "Anything"];
const subjects = ['Math', 'Science', 'English', 'Nepali','optionalmath', 'computer', 'basketball'];
const color= ['red','blue','green','white','brown','grey','yellow','pink','purple'];
let i=0,z=0;

 const interval1 = setInterval(() => {
     if(i>jobs.length){
         i=0;
     }
     if(z>subjects.length){
        z=0;
     }
     if(i%2==0){
        animate1_text.innerText = jobs[i];
        animate1_text.classList.add("ani1");
        animate1_text.style.color = `${color[i]}`;
        animate2_text.innerText = subjects[z];
        animate2_text.style.color = `${color[z]}`;
   
     }
     else
     {
        animate1_text.classList.remove("ani1");
        animate2_text.innerText="";
     }
    
     i++;
     z++;

 }, 1000);
