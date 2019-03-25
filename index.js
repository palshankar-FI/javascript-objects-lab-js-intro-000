var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj, { [key] : value});
  return(newObj);
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  
}
  it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
    var obj = { prop: 1 }

    expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
      prop: 1,
      prop2: 2
    })

    expect(obj).toMatch({
      prop: 1,
      prop2: 2
    })
  })
})