const assert = require('chai').assert;
const arithgeo = require('../arithgeo.js').arithgeo;

describe("arithgeo", ()=>{
	it("the function should return arithmetic",()=>{
		assert.equal(arithgeo([1,2,3,4]), "Arithmetic");
	});
	it("the function should return arithmetic",()=>{
		assert.equal(arithgeo([5,4,3,2]), "Arithmetic");
	});
	it("the function should return 0",()=>{
		assert.equal(arithgeo([]), 0);
	});
	it("the function should return 0",()=>{
		assert.equal(arithgeo([]), 0);
	});
	it("the function should return -1",()=>{
		assert.equal(arithgeo([9,4,6,7]), -1);
	});
	it("the function should return -1",()=>{
		assert.equal(arithgeo([6,10,4,7]), -1);
	});
	it("the function should return geometric",()=>{
		assert.equal(arithgeo([90,30,10]), "Geometric");
	});
	it("the function should return geometric",()=>{
		assert.equal(arithgeo([100,50,25]), "Geometric");
	});
	it("the function should return geometric",()=>{
		assert.equal(arithgeo([1,2,4,8,16]), "Geometric");
	});
	it("the function should return arithmetic",()=>{
		assert.equal(arithgeo([20,30,40,50]), "Arithmetic");
	});

});
