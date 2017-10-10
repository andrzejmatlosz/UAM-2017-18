(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function addManyValues () {
        let sum = 0;

        // !!! add all arguments to sum
        
        // !!! return function for use sum value as a base for next arythmetic operation but without change value of sum variable
        return () => {
        };
	};

	global.UAM.addManyValues = addManyValues;

}(window));

/*

Przykład użycia:

var addRest = UAM.addManyValues(2, 3);

addRest(1, 1, 3); // 10
addRest(3, 3); // 11
addRest(1, 1, 1, 1, 1); //10

var addOther = UAM.addManyValues(0, 10, 10);
addOther(10); // 30

*/
