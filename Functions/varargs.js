var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        product *= nums[i];
    }
    return product;
};
console.log(product(2, 3, 4, 5));
