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
      cy.visit('https://nds-dev.bri.co.id/app-aft/#/nonmonetary/demand-deposit/aft').should('not.be.visible')
      cy.get('.q-card__actions > .q-btn > .q-btn__wrapper > .q-btn__content').click()
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-agf/#/nonmonetary/demand-deposit/agf')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-ttih/#/report/monetary/ttih')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-ttil/#/report/monetary/ttil')
      cy.wait(10000)
      // cy.visit('https://nds-dev.bri.co.id/app-ec/#/journal-scan')
      // cy.wait(10000)
      // cy.visit('https://nds-dev.bri.co.id/app-pijar/#/administration/icm/pijar')
      // cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-phs/#/inquiry-phs')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-aatr/#/report/report/aatr')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-ectr/#/report')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-rtgs/#/monetary/remittance/rtgs')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-sync-vb/#/sync-vb')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-briva/#/monetary/pembayaran/briva')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-queueing/#/call')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-ars-input/#/nonmonetary/loan/ars-input')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-ln-tob/#/tob-mksl')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-report-internet-banking/#/report-ib')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-atm-charge/#/atm-charge')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-delete-ars/#/nonmonetary/loan/delete-ars')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-gl-protect/#/finansial/koreksigl/pembukuan-gl-protect')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-inquiry-internet-banking/#/inquiry-ib')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-kliring/#/monetary/remittance/kliring')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-report-skp/#/report/report/skp')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-approval-pn/#/approval-pn')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-approval/#/general/aprj/approval')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-cif-inquiry/#/nonmonetary/cif/inquiry')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-feedback/#/miscellaneous/feedback/feedback')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-gl-ob-gl/#/finansial/generalledger/globgl')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-reissue-pin/#/reissue-pin')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-reprint-skp/#/general/reprint/skp')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-revert-rtgs/#/finansial/remittance/revert-rtgs')
      cy.wait(10000)
      cy.visit('https://nds-dev.bri.co.id/app-acc-closing/#/eform/insertform/accountclosing')
      cy.wait(10000)


 })