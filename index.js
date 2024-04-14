let bikes = ['a', 'b', 'c', 1, true];
let cars = ['venue', 'punch', 'exter', 'punch'];
let numbers = [1, 2, 3];
let bikename = 'Gopal';
console.log(bikes.toString()); //return string
console.log(bikes.join()); //return string
console.log(bikes.pop()); //return removed item and upodates array
console.log(bikes.push('d', 'e')); //return length and updates array
console.log(bikes.shift()); //return 1st ele , update array
console.log(bikes.unshift('f')); //return length and updates array
console.log(delete bikes[1]); //replaces with undefined
console.log(bikes.concat(cars));
console.log(bikes.slice(1, 3)); //slices peiece of array and returns
console.log(Array.isArray(cars));
//array.indexOf(item,start)
console.log(cars.indexOf('venue', 0));
console.log(cars.indexOf('venue', 2));
console.log(cars.lastIndexOf('exter', 2));
console.log(cars.find((x) => x === 'punch')); //return first element
console.log(cars.findIndex((x) => x === 'exter')); //return index
console.log(cars.includes('exter')); //return boolean
console.log(cars.entries()); //return index,item array iterator of contianing each index,item
console.log(cars.every((x) => x.length > 4)); //all itemsw should pass condition to get true or else fail
console.log(cars.some((x) => x.length > 1)); //atleast 1 item pass conidtion
console.log(cars.valueOf());
console.log(numbers.forEach((e) => e * 10));
console.log(numbers.filter((e) => e > 2));
console.log(numbers.reduce((a, b) => a - b));
console.log(numbers.reduceRight((a, b) => a - b));
console.log(Array.from('Code'));
console.log('code'.split(''));
//overwrites
let cycles = ['hero', 'kite', 'dexter', 'BSD'];
console.log('sort', cycles.sort()); //overwrites the original array

//splice array.splice(index,howmanyitems,newitem1...)removes old to replcae with new
console.log(cycles.splice(1, 2, 'cycle1', 'cycle2'));

console.log(cycles.reverse());
console.log(numbers.fill(5, 1, 2)); //fill(value,start,end)
console.log(cycles.copyWithin(2, 1, 3)); //(targetindex,startcopyitemindex,endcopyitemindex)