// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Untuk Memanggil API ke TestCase buatkan const di testcase
Cypress.Commands.add('PassbookHeader', (NomorRekening) => {
    cy.log('INI NOREK LEMPARAN', NomorRekening)
    cy.request({
        method: 'POST',
        url: 'http://172.18.136.37/esb/NewBriInterface4Gen.asmx/doMbaseTransaction',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: {
            jsonReq: `{
              "dSocketHeader": {},
              "dMiddleWareHeader": {
                  "TRANCODE": "2629"
              },
              "dMbaseHeader": {
                  "TRANSACTIONCODE": "2629",
                  "MORERECORDINDICATOR": "",
                  "NOOFRECORD": "1",
                  "ACTIONCODE": "I",
                  "SEARCHMETHOD": ""
              },
              "dMbaseMessage": {
                  "TLNBAC":" ${NomorRekening}",
                  "TLNBAT": "S",
                  "TLNBID": "M"
              },
              "applicationname": "INDS",
              "branchcode": "0206",
              "tellerid": "0206196",
              "supervisorid": "",
              "origjournalseq": "",
              "trancode": "2629"
          }`,
        },
        form: true,

    }).then((res) => {
        cy.log(JSON.stringify(res))
        const xmlText = res.body
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        const jsonText = xmlDoc.getElementsByTagName("string")[0].innerHTML;
        const jsonData = JSON.parse(jsonText);
        // access JSON properties like this

        //Variable
        const NomorSeri = jsonData.msgmbmessage[6]
        const PassbookBalance = parseFloat(jsonData.msgmbmessage[4])
        const NomorBaris = parseFloat(jsonData.msgmbmessage[5])

        //logger
        cy.log("Journal Sequence =>>>" + jsonData.journalseq)
        cy.log("Nomor Seri =>>>" + NomorSeri)
        cy.log("Passbook Balance =>>>" + PassbookBalance)
        cy.log("Nomor Baris =>>>" + NomorBaris)

        cy.get(':nth-child(1) > .col-md-12 > .items-center > .col-8 > .q-field > .q-field__inner > .q-field__control').type(NomorSeri)
        cy.get('#saldo > :nth-child(2) > .q-col-gutter-md > :nth-child(2) > .custom-input-32 > .q-field > .q-field__inner > .q-field__control').type(PassbookBalance)
        cy.get(':nth-child(3) > .col-md-12 > .items-center > .col-8 > .q-field > .q-field__inner > .q-field__control').type(NomorBaris)


        expect(res.status).to.eq(200)
        expect(jsonData).not.empty
    })

})
