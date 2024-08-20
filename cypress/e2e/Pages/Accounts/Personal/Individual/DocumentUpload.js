const FileUpload=require('../../../../Locators/Account/Personal/Individual/DocumentUpload.json')
const Buttons=require('../../../../Locators/Account/Personal/Individual/Buttons.json')
export class Documents{
    DrivingLicenses(){
        cy.xpath(FileUpload.DocumentUpload.UploadDrivingLicenses).selectFile({contents:'D:/Projects/OLA/cypress/e2e/fixtures/Files/Certifcate.pdf',mimeType:'application/pdf'})
        cy.wait(200)
    }
    UsageButtons(){
        cy.xpath(Buttons.UsageButtons.SaveAndContinue).click()
        cy.wait(200)
    }
    

}

