///<reference types="cypress" />

describe('my api test', () => {
    it('makes a post request', () => {

       
        cy.request({
            method : 'POST',
            url : 'http://172.18.136.37/esb/NewBriInterface4Gen.asmx/doMbaseTransaction',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body :{
                jsonReq:`{
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
                        "TLNBAC": "020601089648504",
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
            form:true,
       
        }).then((res)=>{
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
            cy.log("Journal Sequence =>>>"+jsonData.journalseq)
            cy.log("Nomor Seri =>>>"+NomorSeri)
            cy.log("Passbook Balance =>>>"+PassbookBalance)
            cy.log("Nomor Baris =>>>"+NomorBaris)
        

            expect(res.status).to.eq(200)
            expect(jsonData).not.empty
           

        })
    })
})