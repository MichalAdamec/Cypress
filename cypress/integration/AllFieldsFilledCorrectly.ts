/// <reference types="cypress" />

import {QuestionPage} from '../Pages/Question_form'

const questionPage = new QuestionPage()

it('All fields filled correctly',()=>{
    questionPage.navigate('https://app.ulekare.cz/pro-firmy#contact-us')
    questionPage.acceptCookies()
    questionPage.enterCompany('Hell s.r.o.')
    questionPage.enterEmail('h.i.m@post.cz')
    questionPage.enterEmployees('666')
    questionPage.enterPhone('+420730333333')
    questionPage.enterQuestion('*test - prosím ignorovat*')
    questionPage.tickConsent()
    questionPage.sendQuestion()
})