Feature: Frames feature

  @Frames
  Scenario Outline: Frames scenario
    Given Frames page is opened
    #And iFrames is opened and switch to it
    When Keys interactions

    Examples:
      | testId |
      | SC_05  |
