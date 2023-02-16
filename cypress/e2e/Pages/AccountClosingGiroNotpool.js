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

    InputNoRekeningDebit(){
        cy.get('.q-mb-md > :nth-child(1) > .items-center > .col-8 > .q-field > .q-field__inner > .q-field__control').type('020601004699996')
    }

    InputRemark(){
        cy.get(':nth-child(2) > :nth-child(1) > .items-center > .col-8 > .q-field > .q-field__inner > .q-field__control').type('Autoation Giro Negative')
    }

    ClickShowSVS(){
        cy.contains('Show SVS').click()
    }

    ClickAcceptSVS(){
        cy.contains('Accept').click()
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

    // PrintButab(){
    //     cy.get('[name="alertBtn"]').click()
    // }
    

}

export default new AccountClosing()