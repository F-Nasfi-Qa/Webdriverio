Feature: Web Interactions feature
  @WebInteractions
  Scenario Outline: Web Interactions scenario
    Given A web page is opened
    When Performs a web interactions

    Examples:
      | TestId    |
      | sc_bas_02 |
