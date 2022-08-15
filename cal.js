function add(a,b)
{
    console.log("add"+(a+b));
}

function sub(a,b)
{
    console.log("sub:"+(a-b));
}

add(2,6);
sub(6,1);

module.exports.addition=add
module.exports.substraction=sub