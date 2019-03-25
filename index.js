var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj, { [key] : value});
  return(newObj);
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return(obj);
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete(newObj[key]);
  return(newObj);
}
  it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function() {
    var obj = { prop: 1 }
    var newObj = deleteFromObjectByKey(obj, 'prop')

    expect(newObj['prop']).toBe(undefined)
  })

  it('does not modify the original object (it is non-destructive)', function() {
    var obj = { prop: 1 }

    deleteFromObjectByKey(obj, 'prop')
    expect(obj['prop']).toBe(1)
  })
})