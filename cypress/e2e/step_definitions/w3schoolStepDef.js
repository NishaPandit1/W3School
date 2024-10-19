import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Step Definitions for Login
Given('the user visits the W3Schools login page', () => {
    cy.visit('/');
});

When('the user enters valid login credentials', () => {
    cy.get('input[placeholder="email"]').type('pipoint24@gmail.com');
    cy.get('input[placeholder="password"]').type('Password@1234');
});

When('the user clicks the "Login" button', () => {
    cy.contains('Login').click();
});

Then('the user should be redirected to the Dashboard page', () => {
    cy.url().should('include', '/dashboard');
});

// Step Definitions for Setting Goals
When('the user clicks on "Set a Goal" button', () => {
    cy.wait(4000);
    cy.contains('Set a Goal').click({ force: true });
});

When('the user enters {string} in the goal input', (goal) => {
    cy.get('input[placeholder="I want to learn..."]').type(goal);
});

When('the user clicks the "Cancel" button on the goal setting page', () => {
    cy.contains('Cancel').click();
});

When('the user clicks the "Continue" button on the goal setting page', () => {
    cy.get('.css-1o32hpc').contains('Continue').click({ force: true });
});

// Step Definitions for My Learning
When('the user selects "My Learning" module', () => {
    cy.get('[aria-label="My Learning"] > .chakra-text').click();
});

When('the user clicks on "AWS" in the learning modules', () => {
    cy.wait(4000);
    cy.contains('AWS').click();
});

// Step Definitions for Exams
When('the user selects the "Exams" module', () => {
    cy.get('[aria-label="Exams"]').click();
});

// Step Definitions for Goals
When('the user clicks on "Goals" module', () => {
    cy.get('a[aria-label="Goals"]').click();
    cy.wait(4000);
});

When('the user clicks the "Add" button in the goals section', () => {
    cy.get('.css-1q5qerh > .chakra-stack > .chakra-button').contains('Add').click();
});