import inquirer from 'inquirer';
import chalk from 'chalk';
let studentId = Math.floor(10000 + Math.random() * 90000);
// studentId++
let mybalance = 10000;
let management = await inquirer.prompt([{
        name: 'action',
        message: "choose an option: ",
        type: "list",
        choices: ['Add student', 'Enroll student', 'Pay student', 'Show Student status', 'Exit']
    }]);
// whhen we select add student
if (management.action == 'Add student') {
    let student = await inquirer.prompt([{
            name: 'studentname',
            message: 'Enter student name: ',
            type: 'input',
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return "please enter a non-empty value.";
            }
        }]);
    console.log(chalk.green(`${student.studentname} is added successfully. student id is: ${studentId}`));
}
// when select Enroll student
if (management.action == 'Enroll student') {
    let studentEnroll = await inquirer.prompt([{
            name: "enrollement",
            message: "Enter student Id",
            type: "input"
        },
        {
            name: 'course',
            message: "select the course ",
            type: "list",
            choices: ['MS OFFICE Rs/5000', 'JAVASCRIPT Rs/6000', 'TYPESCRIPT Rs/7000', 'PYTHON Rs/8000', 'GRAPHIC DESIGN Rs/4000', 'ENGLISH LANGUAGE Rs/3000', 'VIDEO AND PICTURE EDITING Rs/3000']
        }
    ]);
    console.log(chalk.green(`${studentEnroll.enrollement}  has added in ${studentEnroll.course} course`));
}
// if(management.action == 'Pay student'){
//     const fee  :  {[key : string]:number} = {
//         'MS OFFICE' : 6000,
//         'JAVASCRIPT': 7000,
//         'TYPESCRIPT': 8000,
//         'PYTHON': 8000,
//         'GRAPHIC DESIGN': 5000,
//         'ENGLISH LANGUAGE': 3000,
//         'VIDEO AND PICTURE EDITING': 2000
//     }
//     console.log(`fees schedule: ${fee}`);
//     if(studentEnroll.course){
//         console.log("fee submitted successfully");
//     }else{
//         console.log("your balance is not enough");
// }
// }
if (management.action == 'Pay student') {
    let fees = await inquirer.prompt([{
            name: 'fee',
            message: 'Enter fee amount',
            type: 'input',
            validate: function (value) {
                if (value.trim() !== '') {
                    return true;
                }
                return "please enter a non-empty value.";
            }
        }]);
    console.log(chalk.bold.yellow(`fee ${fees.fee} amount has been charged `));
}
if (management.action == 'Show Student status') {
    let status = await inquirer.prompt([{
            name: 'showstatus',
            message: "Enter student Id: ",
            type: "input",
        },
        {
            name: 'cousrename',
            message: 'Enter cousre name: (Use uppercase only)',
            type: "input"
        }
    ]);
    if (status.cousrename == 'MS OFFICE') {
        console.log(`student id: ${status.showstatus} is enrolled in MS OFFICE paid Rs/5000`);
    }
    if (status.cousrename == 'JAVASCRIPT') {
        console.log(chalk.blue(`student id: ${status.showstatus} is enrolled in javascript course paid Rs/6000`));
    }
    if (status.cousrename == 'TYPESCRIPT') {
        console.log(chalk.blue(`student id: ${status.showstatus} is enrolled in typescript course paid Rs/7000`));
    }
    if (status.cousrename == 'PYTHON') {
        console.log(chalk.blue(`student id: ${status.showstatus} is enrolled in python course paid Rs/8000`));
    }
    if (status.cousrename == 'GRAPHIC DESIGN') {
        console.log(chalk.blue(`student id: ${status.showstatus} is enrolled in graphic designing course paid Rs/4000`));
    }
    if (status.cousrename == 'ENGLISH LANGUAGE') {
        console.log(chalk.blue(`student id: ${status.showstatus} is enrolled in English language course paid Rs/3000`));
    }
    if (status.cousrename == 'VIDEO AND PICTURE EDITING') {
        console.log(chalk.blue(`student id: ${status.showstatus} is enrolled in video and picture editing course paid Rs/3000`));
    }
    else {
        console.log(chalk.bgRedBright("Sorry! This course is not available"));
    }
}
if (management.action == 'Exit') {
    console.log(chalk.red("Exiting..."));
}
else {
    console.log("Poor internet connection :(");
}
