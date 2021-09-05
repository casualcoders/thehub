# features/search.feature
Feature: Search
  In order to search for creators
  As a developer
  I want create a working search input form

  Rule: Homepage search input
    Scenario: View input the input form on the page
      Given I am a user
      When I visit the "/" page
      Then I can see a search input form

    Scenario: The input form on the home page is interactive
      Given I am a user
      When I visit the "/" page
      Then I can type "test search" into the search input

    Scenario: The input form is submittable
      Given I am a user
      When I visit the "/" page
      And I type "test search" into the search input
      And click the submit input
      Then I am taken to the "/s" page
      And the query parameter "s" is equal to "test search"

  Rule: Results page
    Scenario: show error message when no search query is provided
      Given I am a user
      When I visit the "/s" page
      Then I see the message "No Results Found"
