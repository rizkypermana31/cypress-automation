describe('template spec', () => {
it('Account Closing ', () => {
    cy.visit('https://nds-dev.bri.co.id')
    cy.wait(3000)
    cy.get(':nth-child(1) > .column > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
    cy.contains('Nama User').type('0206402')
    cy.contains('Kata Sandi').type('permana2').screenshot()
    cy.get('.q-form > .q-btn > .q-btn__wrapper > .q-btn__content').click()
})
})