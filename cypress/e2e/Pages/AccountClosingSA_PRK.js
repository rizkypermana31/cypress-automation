class AccountClosing{

    

    ClickPenutupanRekening(){
        cy.contains('Penutupan Rekening').click()
    }

    InputNoRekening(NomorRekening){
        cy.get('.col-6 > .q-field > .q-field__inner > .q-field__control').type(`${NomorRekening}`)
    }

    ClickCari(){
        cy.contains('Cari').click()
    }

    InputNomorSeri(){
        cy.get(':nth-child(1) > .col-md-12 > .items-center > .col-8 > .q-field > .q-field__inner > .q-field__control').type()
    }

    InputPassbookBalance(){
        cy.get('#saldo > :nth-child(2) > .q-col-gutter-md > :nth-child(2) > .custom-input-32 > .q-field > .q-field__inner > .q-field__control').type()
    }

    InputNomorBaris(){
        cy.get(':nth-child(3) > .col-md-12 > .items-center > .col-8 > .q-field > .q-field__inner > .q-field__control').type()
    }

    ClickRadioButtonNontunai(){
        cy.get(':nth-child(2) > .q-radio > .q-radio__inner').click()
    }

    InputNoRekeningTujuan(){
        cy.get(':nth-child(2) > .q-mb-md > :nth-child(1) > .items-center > .col-8 > .q-field > .q-field__inner > .q-field__control').type('020601501434156')
    }
    
    InputRemark(){
        cy.get('#f_629ae673-0936-43e6-a735-0fbdf0d64f71').type('Automotion Acount Closing PRK') 
    }
    
    ClickTutupRekening(){
        cy.contains('Tutup Rekening').click()
    }

    PilihLocalApproval(){
        cy.get(':nth-child(4) > .col-7 > .custom-select-32 > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
        cy.get('.q-virtual-scroll__content > :nth-child(1)').click()
    }

    PilihSupervisorID(){
        cy.get(':nth-child(5) > .col-7 > .custom-select-32 > .q-field > .q-field__inner > .q-field__control').type('0206197')
        cy.contains('0206197 ').click()
    }

    ClickApprove(){
        cy.contains('Approve').click()
    }

    InputPasswordSPV(){
        cy.get('[name="passwordApproval"]').type('R!zkyP31')
    }

    ClickSubmit(){
        cy.contains('Submit').click()
    }

    PrintTapakValidasi(){
        cy.get('[name="alertBtn"]').click()
    }

    PrintButab(){
        cy.get('[name="alertBtn"]').click()
    }
    

}

export default new AccountClosing()