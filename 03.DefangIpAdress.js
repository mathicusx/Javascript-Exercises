let defangIPaddr = function(address) {
    let defIPAddr = address.replace(/\./g, '[.]');
    return defIPAddr;
};