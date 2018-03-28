console.log("Ready to go");

const foo = ()=>{
    console.log('I have been invoked!');
}
console.log(foo());

const foo = (param)=>{
    console.log(param);
}
console.log(foo("any value or string"));


const foo = {
    someMethod(callback){
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}

foo.someMethod(myFunc);


// Alter following code to console.log height of 5
const foo = {
    height:5,
    someMethod(callback){
        callback();
    }
}

const myFunc = (param)=>{
    console.log(param);
}
myFunc(foo.height);

// Create method called CombineColor on shirtColor object
// to combine color array into a string

// Fix snippet to cnosole.log 'this method was called'
const bar = {
    someMethod(param){
        param();
    }
}

const foo = {
    someMethod(){
        console.log('this method was called');
    }
}

bar.someMethod(foo.someMethod);
