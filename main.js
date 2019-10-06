// Method 1 : using the sort method

var arrays = ['of', 'is', 'at', 'be'];
var array = arrays.sort();
alert(array);




// // Method 2 : using the slice method

var stationaries = ['pen', 'pencil', 'book', 'marker'];
var removeSomeStationaries = stationaries.slice(2);
alert(removeSomeStationaries);


// // Method 3 : using the index of method

var animals = ['goat', 'chicken', 'ram'];
var find = animals.indexOf('ram');
alert(find);


// method 4 : finding the last index of 

function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango", 'Apple'];
    var a = fruits.lastIndexOf("Apple");
    alert(a);
}
myFunction();

// Method 5 : using the concat method

var cars = ['benzs', 'volvo'];
var moreCars = ['volkswagon', 'kia']
var totalCars = cars + ',' + moreCars;
alert(totalCars);

// Method 6 : using the pop method

var mySiblings = ['Kelvin', 'Bright', 'Franca', 'Victory'];
var showSiblings = mySiblings.pop('victory');
alert(mySiblings);

// Method 7 : using the push method

var myBrothers = ['Kelvin', 'Bright', 'Mudi'];
var showBrothers = myBrothers.push('victory');
alert(myBrothers);

// // Method 8 : using the unshift method

var mySisters = ['Franca', 'Afoke'];
var showSisters = mySisters.unshift('Rukky');
alert(mySisters);

// // Method 9 : using the shift method

var petsILove = ['birds', 'dogs'];
var petILoveLess = petsILove.shift('birds');
alert(petsILove);

// Method 10 : using the join method

var foods = ['rice', 'beans', 'egg'];
var joinThem = foods.join(" and ");
alert(joinThem);