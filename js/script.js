// task #1

let number = 100;

if (number <50) {
    console.log('naklebia 50')
}
else if (number >20) {
    console.log('metia 20')
}
else {
    console.log('error')
}


// task #2

let conditionResult = name1 = 'mariam' ? 'true' : 'error';
console.log(conditionResult);

//  task #3


// task #4

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 1; i < 10; i++) {
    console.log(array1[i]);   
}

// task #6

// This is old vertion

let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}
 if (user2.age < 18 && user2.studentstatus == 'active') {
    console.log('hello user');
 }
 else if (user2.name == 'levan') {
    console.log('hello levani');
 }
 else if (user2.studentstatus == 'active' || user2.age < 25 ) {
    console.log('hello anna'); 
 }
 else {
    console.log('error');
 }

// This is new vertion (ternary operator)

let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

let conditionResult =
    user2.age < 18 && user2.studentstatus == 'active'
    ? 'hello user'
    :user2.name == 'levan'
    ? 'hello levan'
    :user2.studentstatus == 'active' || user2.age <25
    ? 'hello anna'
    :'error'
console.log(conditionResult);


    



// task #7
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
console.log(array6[]);

// task #8

let users = [ 
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
console.log(users[2].status)