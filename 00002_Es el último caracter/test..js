it("Si hacemos tienenMismaLongitud('javascript', 'java') debería retornar false", function() {
  let resultado = tienenMismaLongitud('javascript', 'java')
  assert.equal(resultado, false,`tienenMismaLongitud ('javascript','java' debería retornar false pero fue ${resultado}`);
})