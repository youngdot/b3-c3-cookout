const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

grill(uncookedFood);
console.table(cookedFood);

function grill (currentObject) {
    // Modify the food so that it is cooked
    for (let a = 0; a < currentObject.length; a++) {
    currentObject[a].cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject[a]);
    };// all in the for loops scope
};



