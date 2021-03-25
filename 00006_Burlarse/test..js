it('Si hacemos burlarse('programar es dificil') debería retornar prigimir is dificil', function() {
let resultado = burlarse('programar es dificil')
assert.equal(resultado, 'prigimir is dificil',`burlarse debería retornar 'prigimir is dificil' pero fue ${resultado}`);
})