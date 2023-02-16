class LoginPage{

    enterUserID(){
        cy.contains('Nama User').type('9997018')
    }

    enterPassword(){
        cy.contains('Kata Sandi').type('00000000')
    }

    clickLogin(){
        cy.get('.q-form > .q-btn > .q-btn__wrapper > .q-btn__content',{timeout: 6000}).should('be.visible').click()
    }
 
}

export default new LoginPage()