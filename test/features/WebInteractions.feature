Feature: Web Interactions feature

  @WebInteraction
  Scenario Outline: Web Interactions scenario
    Given A web page is opened
    When Performs a web interactions

    Examples:
      | testId |
      | sc_02  |
