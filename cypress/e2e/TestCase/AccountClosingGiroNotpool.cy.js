import Login from "../Pages/Login"
import AccountClosing from "../Pages/AccountClosingGiroNotpool"

it('Account Closing Giro Notpool', () => {
  //Input Nomor Rekening 
  const NomorRekening = "020601007110307"

  //Visit URL Tujuan
  cy.visit('https://nds-dev.bri.co.id')
  cy.wait(3000)
  cy.get(':nth-child(1) > .column > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
  Login.enterUserID()
  Login.enterPassword()
  Login.clickLogin()
  cy.wait(20000)
  cy.get('.q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content').click()
  cy.wait(5000)
  AccountClosing.ClickPenutupanRekening()
  cy.wait(10000)
  AccountClosing.InputNoRekening(NomorRekening)
  AccountClosing.ClickCari()
  cy.wait(20000)
  cy.scrollTo('center')
  //   cy.PassbookHeader(NomorRekening)
  AccountClosing.InputNoRekeningDebit()
  cy.wait(3000)
  AccountClosing.InputRemark()
  AccountClosing.ClickShowSVS()
  AccountClosing.ClickAcceptSVS()
  AccountClosing.ClickTutupRekening()
  AccountClosing.PilihLocalApproval()
  AccountClosing.PilihSupervisorID()
  AccountClosing.ClickApprove()
  AccountClosing.InputPasswordSPV()
  AccountClosing.ClickSubmit()
  cy.wait(5000)
  AccountClosing.PrintTapakValidasi()


})



