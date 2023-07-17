describe('Login specs', () => {
    it('visit the login page', () => {
        cy.visit('/');
    });

    it('should name input has the focus when it clicks on it', () => {
        // Arrange

        // Act
        cy.visit('/');
        cy.findByRole('textbox').click();

        // Assert
        cy.findByRole('textbox').should('have.focus');
    });

    it('should perform the login process successfully', () => {
        // Arrange
        const user = 'admin';
        const password = 'test';
        cy.on('window:alert', cy.stub().as('alertStub'));
    
        // Act
        cy.visit('/');
        cy.findByRole('textbox').as('userInput');
        cy.findByLabelText('Contraseña *').as('passwordInput');
        
        cy.get('@userInput').type(user);
        cy.get('@passwordInput').type(password);
        cy.findByRole('button', { name: 'Login' }).click();
    
        // Assert
        cy.url().should('equal', 'http://localhost:8080/#/submodule-list');
      });
})