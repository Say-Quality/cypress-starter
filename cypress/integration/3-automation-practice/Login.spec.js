/// <reference types="cypress" />


describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  });

  it.only('Inicio de sesión con datos válidos', () => {
    cy.fixture("selectors/registracion").then((selectores) => {
      cy.fixture("data/registracion").then((data) => {
        /////////// Verifico que este en la pagina de registro y valido texto del label///////
        cy.verificarLabels(selectores.titulologueo, selectores.titulologueotext);
        ///////// Verifico que exista el label Email address y valido texto del label////////////
        cy.verificarLabels(selectores.labelemaillogin, selectores.labelemailtext);
        /////////Verifico que exista el input del email, que este visible y habilitado y valido value//////
        cy.ingresarTexto(selectores.inputemaillogin, data.emailvalido, data.emailvalido);
        //////////Verifico que exista el label Password y verifico texto del label////////////////
        cy.verificarLabels(selectores.labelpassword, selectores.labelpasswordtext);
        /////Verifico que el input password exista, este habilitado y visible//////////////////
        cy.ingresarTexto(selectores.inputpass, data.passwordvalido, data.passwordvalido);
        /////////Hacer click en el boton Sign in/////////
        cy.click(selectores.botonlogin, selectores.botonlogintextvalid, selectores.botonlogintextvalid);
        /////// Verificar que estoy en mi cuenta /////////////////////
        cy.verificarLabels(selectores.labelmyaccount, selectores.labelmyaccounttext);
      });
    });
  });

  it('Inicio de sesión con formato de email inválido', () => {
    cy.fixture("selectors/registracion").then((selectores) => {
      cy.fixture("data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication");
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address");
        //Verifico que exista el input del email, que este visible y habilitado - Ingreso email invalido
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.formemailinv)
          .blur()
          .and("have.value", "coco.com");
        //Hacer click en el boton Sign in
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click();
        //Mensaje de error email invalido
        cy.get(selectores.cartelemailinv)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Invalid email address.");
      });
    });
  });

  it('Inicio de sesion con email válido y campo password vacio', () => {
    cy.fixture("selectors/registracion").then((selectores) => {
      cy.fixture("data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication");
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address");
        //Verifico que exista el input del email, que este visible y habilitado
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.emailvalido);
        //Verifico que exista el label Password
        cy.get(selectores.labelpassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password");
        //Verifico que el input password exista, este habilitado y visible
        cy.get(selectores.inputpass)
          .should("exist")
          .and("be.visible")
          .and("be.enabled");
        // Hago click en el boton Sign in y verifico el mensaje de error
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click();
        cy.get(selectores.cartelfaltapassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password is required.");
      });
    });
  });

  it('Inicio de sesion con password válido y campo email vacío', () => {
    cy.fixture("selectors/registracion").then((selectores) => {
      cy.fixture("data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication");
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address");
        //Verifico que exista el input del email, que este visible y habilitado
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled");
        //Verifico que exista el label Password
        cy.get(selectores.labelpassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password");
        //Verifico que el input password exista, este habilitado y visible
        cy.get(selectores.inputpass)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .type(data.passwordvalido);
        // Hago click en el boton Sign in y verifico el mensaje de error
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click();
        cy.get(selectores.cartelfaltapassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "An email address required.");
      });
    });
  });

  it('Inicio de sesión con campo email y campo password vacíos', () => {
    cy.fixture("selectors/registracion").then((selectores) => {
      cy.fixture("data/registracion").then((data) => {
        // Verifico que este en la pagina de registro
        cy.get(selectores.titulo)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Authentication");
        // Verifico que exista el label Email address
        cy.get(selectores.labelemaillogin)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Email address");
        //Verifico que exista el input del email, que este visible y habilitado
        cy.get(selectores.inputemaillogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled");
        //Verifico que exista el label Password
        cy.get(selectores.labelpassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "Password");
        //Verifico que el input password exista, este habilitado y visible
        cy.get(selectores.inputpass)
          .should("exist")
          .and("be.visible")
          .and("be.enabled");
        // Hago click en el boton Sign in y verifico el mensaje de error
        cy.get(selectores.botonlogin)
          .should("exist")
          .and("be.visible")
          .and("be.enabled")
          .click();
        cy.get(selectores.cartelfaltapassword)
          .should("exist")
          .and("be.visible")
          .and("have.text", "An email address required.");
      });
    });
  });
});
