//using find and findindex:

 const employees=[
{name:"David Caelson", age:30},
{name:"John Cena", age:34},
{name:"Mike Sheridan", age:30},
{name:"John Certe", age:50},
];
  let employeVal = employees.find(function(employee){
	 return employee.age > 30; 
 });
 console.log(employeVal);
 
 
 
 
 //findindex:
 
 const employeess=[
{name:"David Caelson", age:30},
{name:"John Cena", age:34},
{name:"Mike Sheridan", age:30},
{name:"John Certe", age:50},
];
  let employewrk = employees.findIndex(function(employee){
	 return employee.age > 30; 
 });
 console.log(employewrk);