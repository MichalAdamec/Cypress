/// <reference types="cypress" />

import {QuestionPage} from '../Pages/Question_form'

const questionPage = new QuestionPage()

it('All fields empty', ()=>{
    questionPage.navigate('https://app.ulekare.cz/pro-firmy#contact-us')
    questionPage.acceptCookies()
    questionPage.deleteQuestion()
    questionPage.sendQuestion()
})