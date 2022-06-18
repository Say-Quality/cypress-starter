// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("verificarLabels", (selector, texto) => {
    cy.get(selector)
        .should("exist")
        .and("be.visible")
        .and("have.text", texto);
});

Cypress.Commands.add("ingresarTexto", (selector, inputtext, textovalue) => {
    cy.log('ESTO LARGA ERROR');
    const element = cy.get(selector);

    element.should("exist")
        .and("be.visible")
        .and("be.enabled");

    element.type(inputtext)
        .should("have.value", textovalue);
});

Cypress.Commands.add("elegirValorDropdownComplejo", (selector, textovalue) => {
    const element = cy.get(selector);

    element.should("exist")
        .and("be.visible")
        .and("be.enabled")
        .and("have.value", textovalue);

    element.click();
});

Cypress.Commands.overwrite("click", (selector) => {
    cy.get(selector)
        .should("exist")
        .and("be.visible")
        .and("be.enabled")
        .click();
});
