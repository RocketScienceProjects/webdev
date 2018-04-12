var t = {}; //declare an empty js object

t.arr = ["Hi", "Hello", "Bye"]; //add an array to the object


var printlog = function(arrr) {
    arrr.forEach(function(item, index) {
        console.log(index + ":" + " " + item);
    })
}


t.printlog = function () {
    this.arr.forEach(function (item, index) {
        console.log(index + ":" + " " + item);
    })
}
