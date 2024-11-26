Feature: Demo feature

  Scenario Outline: Demo scenario
    Given Google page is opened
    When Search with <searchItem>
    Then click on first search result
    Then URL should match with <expectedUrl>

    Examples:
      | testId | searchItem | expectedUrl               |
      | sc_01  | 'wdio'     | 'https://webdriver.io'    |
      | sc_02  | 'amazon'   | 'https://www.amazon.com/' |
