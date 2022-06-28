const isValidWalk = (walk) => {

    if ( 
        walk.filter(i => i == 'e').length == walk.filter(i => i == 'w').length &&
        walk.filter(i => i == 'n').length == walk.filter(i => i == 's').length &&
        walk.length == 10
    ) return true;

    return false
}

console.log(isValidWalk(['e', 'w', 'w', 'n', 'n', 'n', 's', 's', 's', 'e']))