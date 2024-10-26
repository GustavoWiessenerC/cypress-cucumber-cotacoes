import './general/index'
import './veiculo/index'
import './segurador/index'
import './produto/index'
import './usuario/index'

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
