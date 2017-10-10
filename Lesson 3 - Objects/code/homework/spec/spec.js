describe("", function() {

	describe('', function () {
        
        beforeEach(function() {
            UAM.library = []; 
        });
        
        it ('Check whether library exist and if it is empty array', function() {
            expect(UAM.library).not.toBe(undefined);
            expect(UAM.library.length).toEqual(0);
        });

        it ('Check whether addCategory method add object into library', function() {
            var newCategoryName = 'ABC';
            UAM.addCategory(newCategoryName);
            expect(UAM.library).not.toBe(undefined);
            expect(UAM.library.length).toEqual(1);
            expect(UAM.library[0].categoryName).toEqual('ABC');
        });

        it ('Check whether addCategory return newly created object', function() {
            var newCategoryName = 'ABC';
            var returnedObject = UAM.addCategory(newCategoryName);
            expect(returnedObject.categoryName).toEqual('ABC');
        });

        it ('Check whether removeCategory remove proper category object', function() {
            var toRemove = {categoryName: 'B', books: []};
            UAM.library.push({categoryName: 'A', books: []});
            UAM.library.push(toRemove);
            UAM.library.push({categoryName: 'C', books: []});
            
            expect(UAM.library.length).toEqual(3);
            UAM.removeCategory(toRemove);
            expect(UAM.library.length).toEqual(2);
        });

        it ('Check whether addBookToCategory method add object into library', function() {
            var category = {categoryName: 'A', books: []};
            UAM.library.push(category);
            
            var newTitle = 'ABC';
            UAM.addBookToCategory(category, newTitle, 3);
            expect(UAM.library).not.toBe(undefined);
            expect(UAM.library.length).toEqual(1);
            expect(UAM.library[0].books.length).toEqual(1);
            expect(UAM.library[0].books[0].title).toEqual('ABC');
            expect(UAM.library[0].books[0].count).toEqual(3);
        });

        it ('Check whether addBookToCategory return newly created object', function() {
            var category = {categoryName: 'A', books: []};
            UAM.library.push(category);
            
            var newTitle = 'ABC';
            var returnedObject = UAM.addBookToCategory(category, newTitle, 3);

            expect(returnedObject.title).toEqual('ABC');
            expect(returnedObject.count).toEqual(3);
        });

        it ('Check whether removeBookFromCategory remove proper book object from category', function() {
            var toRemove = { title: 'A', count: 3 };
            var category = { categoryName: 'B', books: [ toRemove ] }
            UAM.library.push(category);
            
            expect(UAM.library.length).toEqual(1);
            expect(UAM.library[0].books.length).toEqual(1);
            UAM.removeBookFromCategory(category, toRemove);
            expect(UAM.library[0].books.length).toEqual(0);
            expect(UAM.library.length).toEqual(1);
        });

        it ('Check whether getCategoryByName return proper object', function() {
            UAM.library.push({categoryName: 'A', books: []});
            UAM.library.push({categoryName: 'B', books: []});
            UAM.library.push({categoryName: 'C', books: []});
            
            var obj = UAM.getCategoryByName('B');
            expect(obj.categoryName).toEqual('B');
        });

        it ('Check whether getBookByTitle return proper book object', function() {
            var book = { title: 'A', count: 3 };
            var category = { categoryName: 'B', books: [ { title: 'Y', count: 3 }, book, { title: 'X', count: 3 } ] }
            UAM.library.push(category);
            
            var obj = UAM.getBookByTitle('A');
            expect(obj.title).toEqual('A');
        });
	});
});
