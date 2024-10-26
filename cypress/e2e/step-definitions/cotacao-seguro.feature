Feature: Cotação de Seguro Veicular

  Scenario: Cotação de Seguro Veicular Corretamente
    Given que acesse a pagina para cotação de seguros
    When informar os dados do veiculo
    And informar os dados do segurador
    And informar os dados do produto
    When informar os dados do usuario
    Then a cotação deve ser realizada com sucesso
