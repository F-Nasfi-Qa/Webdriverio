Feature: File upload feature

  @FileUpload
  Scenario Outline: File upload
    Given File upload page is opened
    When File upload interactions

    Examples:
      | testId |
      | sc_04  |
