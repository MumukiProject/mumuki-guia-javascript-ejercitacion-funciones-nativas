it("Si hacemos sonIguales('javascript', 'JavaScript') debería retornar true", function() {
  let resultado = sonIguales('javascript', 'JavaScript')
  assert.equal(resultado, true,`sonIguales('javascript', 'JavaScript') debería retornar true pero fue ${resultado}`);
})