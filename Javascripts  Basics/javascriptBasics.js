//Basics of Javascript
/* const name = 'Max';
let age = 29;
const hasHobbies = true;

//Arrow functions
const summarizeUser = (userName, userAge, userHasHobbies) => {
    return(
        'Name is ' + userName + ' Age ' + userAge + ' user has hobbies ' + userHasHobbies
    );
} 
console.log(summarizeUser(name, age, hasHobbies)); //Name is Max Age 29 user has hobbies true
*/

const add = (a, b) => a + b;
const addOne = a => a +1; 


console.log(add(1,2));//3
console.log(addOne(2));//3

//Object 
const person = {
    name: 'James',
    age: 29,
    greet() {
        console.log('Hi I am ' + this.name); //Hi I am James
    }
}

person.greet();

//Arrays
const hobbies = ['Sports', 'Cooking'];
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));//[ 'Hobby: Sports', 'Hobby: Cooking' ]
console.log(hobbies);//[ 'Sports', 'Cooking' ]
for(let hobby of hobbies){
    console.log(hobby);
    //sports
    //cooking
}
hobbies.push('Gaming');
console.log(hobbies); //[ 'Sports', 'Cooking', 'Gaming' ]


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//Spread & RESt operator
/***** SPREAD Operator  *****/
const copiedArray = hobbies.slice();// copies the array
console.log(copiedArray);

const copiedArray1 = [hobbies];
console.log(copiedArray1);//[ [ 'Sports', 'Cooking', 'Gaming' ] ]

const copiedArray2 = [...hobbies];
console.log(copiedArray2);//[ 'Sports', 'Cooking', 'Gaming' ]

const copiedPerson = {...person};
console.log(copiedPerson); //{ name: 'James', age: 29, greet: [Function: greet] }

/*** REST Operator */

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]; 
}
console.log(toArray(1, 2, 3)); //[ 1, 2, 3 ]

const toArray1 = (...args) => {
    return args; 
}
console.log(toArray1(1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

//Destructuring

const printName = (personData) => {
    console.log(personData.name);
}
console.log(printName(person)); //James

const printNameDestructuring = ({name, age}) => {
    console.log(name);
    console.log(age);
}
console.log(printNameDestructuring(person)); 
//James
//29

const { name, age} = person;
console.log(name, age);//James 29

//Destructuring
const  [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); //Sports cooking






