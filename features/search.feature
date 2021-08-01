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
    When I visit the home page
    Then I can type "test search" into the search input

  Scenario: The input form is submittable
    Given I am a user
    When I visit the home page
    And I type "test search" into the search input
    And click the submit input
    Then I am taken to the "/s" page
