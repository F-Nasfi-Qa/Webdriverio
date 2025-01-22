Feature: Iterating over list of elements feature

   Scenario Outline: Iterating over list of elements scenario
      Given Login to inventory web app
      Then Inventory page should list 6 products
      And Validate all products have valid pric (price > 0)

      Examples:
         | TestId    |
         | sc_adv_01 |
