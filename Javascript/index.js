// // console.log("Chaliye shuru krte hai");
// // object
// // let rectangle= {
// //     length:1,
// //     breadth: 2,

// //     draw: function(){
// //         console.log('drawing rectangle');
// //     }
// // };

// // factory function
// // function createRectangle(length, breadth) {
// //   return rectangle = {
// //     length,
// //     breadth,

// //     draw() {
// //       console.log("drawing rectangle");
// //     },
// //   };
// // }

// // let rectangleobj1 = createRectangle(5, 4);

// // COnstructor Function -> we use Pascal Notation -> first letter of every word is capital -> NumberOfStudents
// // constructor funtion -> properties/methods ko initialize/define krta hai

// // rectangleObject.color = 'yellow';
// // console.log(rectangleObject);

// // delete rectangleObject.color;
// // console.log(rectangleObject);

// // // let Rectangle1 = new Function('length', 'breadth',
// //     `this.length = length;
// //     this.breadth = breadth;
// //     this.draw = function(){
// //     console.log('Drawing');
// //     }`);

// // let rect = new Rectangle1(2, 5);

// // let a = 10;
// // let b = a;

// // a++;
// // console.log(a);
// // console.log(b);
// //o/p 11 10

// // let a = {value:10};
// // let b = a;

// // a.value++;
// // console.log(a.value);
// // console.log(b.value);
// //o/p 11 11

// // let a = 10;
// // function inc(a){
// //     a++;
// // }
// // inc(a);
// // console.log(a);

// //for-in loop

// // let rectangle = {
// //     length: 2,
// //     breadth: 4
// // };
// // for(let key in rectangle){
// //     console.log(key, rectangle[key]);
// //keys are reflected through key variable
// //values are reflected through rectangle[key]
// //here len and bre are key, 2 and 4 are value. To print both key and value we use (key, rectangle[key] method)
// // }

// // for-of loop
// //  for(let key of Object.entries(rectangle)){
// //     console.log(key);
// //  }
// // if('color' in rectangle){
// //     console.log('Present');
// // }
// // else{
// //     console.log('Absent');
// // }

// // Object Cloning

// // let src = {
// //     a:10,
// //     b:20,
// //     c:30
// // };

// // let dest = {};

// // for(let key in src){
// //     dest[key] = src[key];
// // }
// // console.log(dest);

// // src.a++;
// // console.log(dest);

// // let src = {
// //     a:10,
// //     b:20,
// //     c:30
// // };

// // let src2 = {value: 25};

// // let dest = Object.assign({}, src, src2);
// // console.log(dest);

// // src.a++;
// // console.log(dest);

// // let dest = {... src};

// // console.log(dest);

// // src.a++;

// // console.log(dest);

// // let lastName = 'Ratnesh';
// // let firstName = new String('Love');

// // let message = 'this is my first message';
// // let words = message.split(' ');

// // console.log(words);

// // let message =
// // `Hello ${lastName}
// // Thanks for the Opportunity

// // Regards,
// // Ratnesh`;

// // console.log(message);

// // let date = new Date();

// // console.log(date);

// // let numbers = [1, 3, 4, 5, 7];
// // console.log(numbers);

// // console.log(numbers.indexOf(3));

// // if(numbers.indexOf(4) != -1){
// //     console.log("present");
// // }
// // console.log(numbers.includes(7));

// // console.log(numbers.indexOf(3, 4));

// // let courses = [
// //     {no:1, naam:'Ratnesh'},
// //     {no:2, naam: 'Rahul'}

// // ];
// // console.log(courses);

// // let course = courses.find(course => course.naam === 'Ratnesh');
// // console.log(course);

// // let numbers = [1,2,3,4,5,6,7];
// // // removal from end
// // numbers.pop();

// // //removal from begining
// // numbers.shift();

// // //removal from middle
// // numbers.splice(2,1);
// // console.log(numbers);

// // COMBINING TWO ARRAYS

// // let first = [1,2,3];
// // let second = [4,5,6];
// // let combine = first.concat(second);

// // console.log(combine);

// // // SLICING ARRAYS
// // let sliced =  combine.slice(2,4);
// // console.log(sliced);

// // let first = [1,2,3];
// // let second = [4,5,6];

// // let combined = [...first, 'a', ...second, 'b'];
// // console.log(combined);

// // // how to create copy using spread

// // let another = [...combined];

// //JOINING ARRAY

// // let numbers = [10,20,30,40,50];
// // const joined = numbers.join(',');
// // console.log(joined);

// // SPLITTING ARRAY

// // let message = 'This is my first message';
// // let parts = message.split(' ');
// // console.log(parts);

// // let joined = parts.join('_');
// // console.log(joined);/

// // let numbers = [5,10,4,40];
// // numbers.sort();
// // console.log(numbers);

// // numbers.reverse();
// // console.log(numbers);

// //MAPPING

// // let numbers = [7,8,9,10];

// // let items =  numbers.map(function(value){
// //     return 'student_no' + value;
// // })
// // console.log(items);

// // MAPPING WITH OBJECTS

// let numbers = [1, 2, -6, -4];

// let items = numbers
//   .filter((value) => value >= 0)
//   .map((num) => {value: num});
// console.log(items);
 