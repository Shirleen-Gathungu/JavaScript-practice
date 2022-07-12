// function message (){
//     var words="Hello Baloney"
//     console.log(words)
// }
// document.write("Naima,Are you sleepy?")

// var word="Hello"
// var name="Nuzy"
// var say=word+""+name
// function greet(){
//     console.log(say)
// }

// greet()


// function cook (){
//     var ingred="onions"
//     let another="carrot"
//     let comb=ingred+" "+another
    
// console.log(typeof(ingred))
// }
// cook()

// var b =undefined
// console.log(b)


// let line=[5,8,7,9,[5]];
// // var see=array.length;
// let line2=line[1][0]
// console.log(line2);

// let a ="chip";
// let b=a.concat("see")

// class Pupil{
//     constructor(name){
//         this.name=name;
//     }
// }

// Pupil=new Pupil("Shirleen");
// console.log(Pupil.name);
// Pupil.prototype.age =34 ;
// console.log(Pupil.age)

// var q="34"
// console.log(Number(q)+3);
// console.log(typeof q)


/*let v =4
let l=4+"Hello"
console.log(l)
let r="f"
console.log(Number(r))
*/

// let word="Tony"
// if(word=="Jim"){
//     console.log("Hello Jim")
// }
// else{
//     console.log("Not known bwahahaha!")
// }

// let number=67;
// let numberb=50;
// let add=number+numberb
// if(number==67 && add==67){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// const n=90;
// switch(true){
//     case n>= 10:
//         console.log("Yoh ya");
//         break;
//     case n==20:
//     console.log("Yeheh")
//         break;
    
//     default:
//         console.log("Yap yap")
//         break;

// }
// const g=40;
// let d=g>20?true: false;
// console.log(d)

// function greet(word){
//     alert("Hello",word);
// }
// greet("Chimo");

// function children(){
// let name="Jiva";
// let name2="Nari";
// let name3="Tora";
// console.log({name});
// console.log({name2});
// console.log({name3});
// }
// children();

// function numbers(){
//     var num=56;
// function subtract() {
//     var b=20;
//     var c=num-b;  
    
//     console.log(c);
// }
// subtract();
// }
// numbers();

// greet("Shirleen");
// function greet(word){
// var hello="Hi there",word;
// console.log(hello)

// }
// Functions as values 
// This assigning a function to a variable.In this case the name of the variable is the name of the function and we will use it to call the function.
// let nums=[3,9,10,35,90,56];
// let b = nums.map(a=> a*2)
// let c = nums.map(function(a){
//     return a*2
// })
// let a=(()=>{
// return 5
// })()
// console.log(a);


// let activities =["Dancing","Swimming","Stamp collecting","Hiking"]
// activities.shift("dancing")
// console.log(activities);


let food =["lettuce","chicken","pilau","Fries","mac&cheese","nyamachoma"];
if (food.length>1){
let left = 0;
let end = food.length -1

    while (left<end){
        // let swap=food[left];
        [food[left],food[end]]=[food[end],food[left]];
        left++;
        end--;
        // food[right]=swap
        }
        console.log(food);
}


// let things = ["Biscuits","Crisps","Yoghurt","Melon","Avocado"];
// let c = new Array("Mince","Chocolate","Mint")
// console.log(things);
// console.log(c);

// let d = c.map(item => `I love ${item}`)
// console.log(d);

// things.splice(0,3)


// var gums={gumone:"berry",gumtwo:"bananas",gumthree:"jollo"}
// var lams = new Object(gums);

// lams["gumfour"]="Pinkos"
// console.log(gums);

// for([key,value] of Object.entries(gums)){
// console.log(`${key}:${value}`);
// }

// //Doesn't allow you to add properties to the object.
// Object.freeze(gums)
// gums["gumsfive"]="Blue"
// console.log(gums);

// Object.seal(gums)
// gums["gumsfour"]="romi"
// console.log(gums);

// var games={
//     child:"rollerblade",
//     adult:"poker",
//     drinks:function() {
//         console.log(`Hello you ${this.adult}`)
//         return "We'll have beers";
//     },
//     friends:{
//         name:"Tamaya",
//         age:40,
//         country:"France"
//     }
// }
// console.log(games.drinks());
// console.log(games.friends.age);
// console.log(games.friends.country)


// class Students{
//     constructor(name,age,country){
//         this.name=name
//         this.age=age
//         this.country=country
//         this.hobby=function () {
//             return "I enjoy playing Violin"
//         }
//     }
// }
// Students.prototype.school=function() {
//     return "I love UOT"
// }
// var first= new Students("Jamie",23,"France");
// console.log(first.hobby(),first.school());


function Students(name,age,country) {
   this.name=name
   this.age=age
   this.country=country
    
}
var second = new Students("Paula",21,"Belgium");
console.log(second);


var chocolates = ["Mint","Berry","Lime","Coco"];
var [Bubble]=["Mint","Berry","Lime","Coco"]
console.log(chocolates);


console.log(Object.isExtensible(chocolates));
