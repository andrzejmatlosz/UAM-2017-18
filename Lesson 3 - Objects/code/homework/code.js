(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });
    
    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        var newCategory = { categoryName: newCategoryName, books: [] };
        UAM.library.push(newCategory);
        return newCategory;
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        var index = global.UAM.library.indexOf(categoryObject);
        if (index >= 0) {
            global.UAM.library.splice(index, 1);
        }
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title, count) {
        var newBook = { title: title, count: count };
        categoryObject.books.push(newBook);
        return newBook;
    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
        var index = categoryObject.books.indexOf(bookObject);
        if (index >= 0) {
            categoryObject.books.splice(index, 1);
        }
    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName) {
        for (var i = 0 ; i < global.UAM.library.length ; i++) {
            if ( global.UAM.library[i].categoryName === categoryName) {
                return global.UAM.library[i];
            }
        }
    };

    // title: String
    global.UAM.getBookByTitle = function(title) {
        for (var i = 0 ; i < global.UAM.library.length ; i++) {
            for (var j = 0 ; j < global.UAM.library[i].books.length ; j++) {
                if (global.UAM.library[i].books[j].title === title) {
                    return global.UAM.library[i].books[j];
                }
            }
        }
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
        // !!!
    };
    
    global.UAM.getBorrowedBooks = function() {
        // !!!
        // return array of book objects
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
