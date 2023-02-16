import Login from "./Pages/Login"
// import {getPassbookHeader} from './API/PasbookHEader'

    it('Account Closing ', () => {
      cy.visit('https://nds-dev.bri.co.id')
      cy.wait(3000)
      cy.get(':nth-child(1) > .column > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      Login.enterUserID()
      Login.enterPassword()
      Login.clickLogin()
      cy.wait(20000)
      cy.get('.q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content').click()
      cy.visit('https://nds-dev.bri.co.id/app-transaksi-cash-in/#/branch-cash-in-out/transaction-919/cash-in-transaction')
      cy.visit('https://nds-dev.bri.co.id/app-aft/#/nonmonetary/demand-deposit/aft')

 })