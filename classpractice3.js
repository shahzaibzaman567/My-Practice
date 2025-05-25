
let array = [1, 2, 3, null, "hello", undefined, 0, null, 4, false, 66, "",];
let re = array.filter((item) => {
    if (item) {
        console.log("Truthy value:", item); // ✅ بس یہاں log کریں
        // return true;
    }

})
//   for(let   i=0;i<array.lenght;i++){
// if(array[i]===false){
//     console.log("some   value   was false")

// }


//   }



const student = {
    name: 'ali',
    sayHi: function () {
        setTimeout(() => {
            console.log("time   is  over" + student.name)
        }, 2000)
    }
}








let name = "shahzaib"
let fun = () => {

    return 'Hello  ' + name

}
console.log(fun())
let funct = (x, y) => {

    return x * y

}
console.log(funct(5, 5))
// console.log(5,5)