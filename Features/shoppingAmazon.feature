Feature: Manage shopping cart 
    I am a consumer, would like to manage a shopping cart 


Scenario: Add product at shopping car 
    Given I am oline at Amazon Page
    When I search for "Batman - O Longo Dia das Bruxas - Edição Definitiva"
    And I add "Batman - O Longo Dia das Bruxas - Edição Definitiva" at shopping car
    Then I should see "Batman - O Longo Dia das Bruxas - Edição Definitiva" in shopping cart 

Scenario: Remove product from shopping cart 
    Given There are at least two differents products in the shopping cart
    And I am inside the shopping cart 
    When I remove the first product 
    Then I shouldn't see product in shopping cart 

