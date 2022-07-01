
var intersection = function(nums1, nums2) {
    if(!nums1 < 1 || !nums2 > 1000){
          var value = nums1.filter(x => nums2.includes(x))
    var remDuplicate  = [...new Set(value)]; 
    return remDuplicate ;
    }else{
        err.message('Numbers need to be Between 1 and 1000')
    }
  
};

