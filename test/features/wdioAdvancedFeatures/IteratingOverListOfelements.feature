Feature: Iterating over list of elements feature

   Scenario Outline: Iterating over list of elements scenario
      Given Login to inventory web app
      Then Inventory page should list <Nbr of products>
      And Validate all products have valid pric (price > 0)

      Examples:
         | TestId    | Nbr of products |
         | sc_adv_01 | 6               |
