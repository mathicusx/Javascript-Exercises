var createTargetArray = function(nums, index) {
    var target = [];

    for(i = 0; i < nums.length; i++){
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};