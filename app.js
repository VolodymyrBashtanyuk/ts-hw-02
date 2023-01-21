var age;
var names;
var toggle;
var empty;
var notInitialize;
var callback;
age = 50;
names = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) { return 100 + a; };
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
person = ['Max', 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var active = {
    load: Status.LOADING,
    read: Status.READY
};
if (active.load === Status.LOADING) {
    console.log('system loading');
}
else {
    console.log('system ready');
}
var result;
result = 'coffee';
result = 30;
var choice;
choice = 'enable';
choice = 'disable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
console.log('1) let age: number, let names: string, let toggle: boolean, let empty: null ,let notInitialize: undefined, let callback: (a: number) => void');
console.log('2) let anything: any');
console.log('3) we check that variable "unknown" is a string: if (typeof some === "string") {str = some;}');
console.log('4) let person: [string , number]; ');
console.log('5) enum Status { LOADING, READY }; ');
console.log('6) let result: string | number; ');
console.log('7) let choice: "enable" | "disable";');
console.log('8) function showMessage(message): void {console.log(message);}, function calc(num1: number, num2: number):number {return num1 + num2;}, function customError(): never {throw new Error("Error");}');
console.log('9) type Page = {title: string, likes: number, accounts: string[], status: "open"|"close", details?: {createAt: string,updateAt: string,}}');
