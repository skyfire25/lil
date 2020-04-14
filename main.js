const Node = function(value) { 
  return {
    value: value,//this is the info
    next: null,// this is the link
  }
}


if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}
