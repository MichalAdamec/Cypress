export class QuestionPage{

    questionPage_Company = '#companyName';
    questionPage_NumOfEmployees = '#companyEmployees';
    questionPage_Email = '#email';
    questionPage_Phone = '#phone';
    questionPage_Question = '#contactMessage';
    questionPage_Consent = '.v-input--selection-controls__ripple';
    questionPage_SendButton = '.px-6';
    questionPage_AcceptCookies = '.row > .px-10';

    navigate(url: string){
        cy.visit(url)
    }
    enterCompany(company: string){
        cy.get(this.questionPage_Company).type(company)
    }
    enterEmployees(employees: string){
        cy.get(this.questionPage_NumOfEmployees).type(employees)
    }
    enterEmail(email: string){
        cy.get(this.questionPage_Email).type(email)
    }
    enterPhone(phone: string){
        cy.get(this.questionPage_Phone).type(phone)
    }
    enterQuestion(question: string){
        cy.get(this.questionPage_Question).clear().type(question)
    }
    deleteQuestion(){
        cy.get(this.questionPage_Question).focus().clear()
    }
    tickConsent(){
        cy.get(this.questionPage_Consent).click()
    }
    sendQuestion(){
        cy.get(this.questionPage_SendButton).click()
    }
    acceptCookies(){
        cy.get(this.questionPage_AcceptCookies).click()
    }

}