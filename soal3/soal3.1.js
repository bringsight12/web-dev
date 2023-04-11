const name = [  'Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela',  'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre',  'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(keyword, limit, callback) {
  const filteredNames = name.filter(function(n) {
    return n.toLowerCase().includes(keyword.toLowerCase());
  }).slice(0, limit);
  
  callback(filteredNames);
}

//penggunaan:
searchName('an', 3, function(result) {
  console.log(result);
});