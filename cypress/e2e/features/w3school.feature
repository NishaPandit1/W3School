Feature: W3School Login and Dashboard Test

  Scenario: Verify user can log in, set goals, and access learning modules

    Given the user visits the W3Schools login page
    When the user enters valid login credentials
    And the user clicks the "Login" button
    Then the user should be redirected to the Dashboard page

    When the user clicks the "Set a Goal" button
    And the user enters "Meanstack Developer" in the goal input field
    And the user clicks the "Cancel" button
    Then the goal should not be set

    When the user clicks the "Set a Goal" button again
    And the user enters "software tester" in the goal input field
    And the user clicks the "Continue" button
    And the user clicks the "Cancel" button after entering a goal
    Then the goal should not be saved

    When the user selects the "My Learning" module
    And the user selects "AWS"
    Then the AWS course should be displayed

    When the user clicks the "Exams" module
    Then the Exams page should be displayed

    When the user clicks the "Goals" module
    And the user clicks the "Add" button in the Goals section
    Then the user should be able to add a new goal