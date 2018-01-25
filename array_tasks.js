var arrayTasks = {

	concat: function (arr1, arr2) {
		var resultArray = arr1.concat(arr2);
		return resultArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var resultArr = arr.map(element => element ** 2);
		return resultArr;
	},

	sum: function (arr) {
		var sum = arr.reduce(function(total, currentValue){
			return total + currentValue;
		});
		return sum;
	},

	findDuplicates: function (arr) {
		var uniqueArray = []
			arr.forEach(function(element, index){
				var unique = arr.indexOf(element) == index;
				 if(unique == false && !uniqueArray.includes(element)){
				uniqueArray.push(element);
				}
			})
			return uniqueArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var filteredArray = arr.filter(element => element !== valueToRemove);
		return filteredArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];
		arr.forEach(function(element, index){
			if(element === itemToFind){
				indexArray.push(index);
			}
		})
		return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var resultArr = [];
		arr.forEach(function(element){
			if(element % 2 === 0){
				var evenElementSquared = element * element;
				resultArr.push(evenElementSquared);
			}
		})
		var sumOfelements = resultArr.reduce(function(total, currentValue){
			return total + currentValue;
		});
		return sumOfelements;
	}

}

module.exports = arrayTasks
