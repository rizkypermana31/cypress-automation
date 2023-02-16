import Login from "../Pages/LoginProd"
import AccountClosing from "../Pages/SetorTunaiSA_prod"

    it('Account Closing SA Tunai', () => {
      //Input Nomor Rekening 
      const NomorRekening="020601150369504"

      //Visit URL Tujuan
      cy.visit('https://nds.bri.co.id')
      cy.wait(3000)
      cy.get(':nth-child(1) > .column > .q-btn > .q-btn__wrapper > .q-btn__content > .block').click()
      Login.enterUserID()
      Login.enterPassword()
      Login.clickLogin()
      cy.wait(20000)
      cy.get('.q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content').click()
      cy.contains('Setor Tunai').click()
      cy.reload()
      // c.wait(5000)
      // AccountClosing.ClickPenutupanRekening()
    //   cy.wait(10000)
    //   AccountClosing.InputNoRekening(NomorRekening)
    //   cy.wait(5000)
    //   AccountClosing.ClickCari()
    //   cy.wait(20000)
    //   cy.scrollTo('center')
    //   cy.PassbookHeader(NomorRekening)
    //   AccountClosing.ClickTutupRekening()
    //   cy.wait(3000)
    //   AccountClosing.PilihLocalApproval()
    //   AccountClosing.PilihSupervisorID()
    //   AccountClosing.ClickApprove()
    //   AccountClosing.InputPasswordSPV()
    //   AccountClosing.ClickSubmit()
    //   cy.wait(5000)
    //   AccountClosing.PrintTapakValidasi()
    //   cy.wait(5000)
    //   AccountClosing.PrintButab()

    })

  