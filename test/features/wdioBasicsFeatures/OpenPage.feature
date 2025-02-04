Feature: Open page feature
  @OpenPage
  Scenario Outline: Open page scenario
    Given Google page is opened
    When Search with <searchItem>
    Then click on first search result
    Then URL should match with <expectedUrl>

    Examples:
      | TestId    | searchItem | expectedUrl             |
      | sc_bas_01 | 'wdio'     | 'https://webdriver.io/' |
