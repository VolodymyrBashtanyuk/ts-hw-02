
let age: number;
let names: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => void; 

 age = 50;
 names = 'Max';
 toggle = true;
 empty = null;
 notInitialize = undefined;
callback = (a) => { return 100 + a };

let anything: any;
anything = -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
    str = some;
}

let person: [string , number];
    person = ['Max', 21];

enum Status { LOADING, READY };
const active = {
    load: Status.LOADING,
    read: Status.READY,
} 
if (active.load === Status.LOADING) {
    console.log('system loading')
} else {
    console.log('system ready');
}

let result: string | number;
result = 'coffee';
result = 30;

let choice: 'enable' | 'disable';
choice = 'enable';
choice = 'disable';


function showMessage(message): void {
    console.log(message);
}
    
function calc(num1: number, num2: number): number {
    return num1 + num2;
}

function customError(): never {
    throw new Error('Error');
}

type Page = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open'| 'close',
    details?: {
        createAt: string,
        updateAt: string,
    }
}

const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
}

const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}
 
console.log('1) let age: number, let names: string, let toggle: boolean, let empty: null ,let notInitialize: undefined, let callback: (a: number) => void');
console.log('2) let anything: any');
console.log('3) we check that variable "unknown" is a string: if (typeof some === "string") {str = some;}');
console.log('4) let person: [string , number]; ');
console.log('5) enum Status { LOADING, READY }; ');
console.log('6) let result: string | number; ');
console.log('7) let choice: "enable" | "disable";');
console.log('8) function showMessage(message): void {console.log(message);}, function calc(num1: number, num2: number):number {return num1 + num2;}, function customError(): never {throw new Error("Error");}');
console.log('9) type Page = {title: string, likes: number, accounts: string[], status: "open"|"close", details?: {createAt: string,updateAt: string,}}');





