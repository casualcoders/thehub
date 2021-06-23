# features/search.feature
Feature: Search
  In order to search for creators
  As a developer
  I want create a working search input form

  Scenario: View input the input form on the page
    Given I am a user
    When I visit the home page
    Then I can see a search input form

  Scenario: The input form on the home page is interactive
    Given I am a user
    And I am on the home page
    When I click on the search input form
    And type <search input>
    Then I can see <search input> has been input into the search field
    Then I can see a search input form

  Scenario: The input form is submittable
    Given I am a user
    And I am on the home page
    When I click on the search input form
    And type <search input>
    And click the submit button
    Then the search form is submitted
