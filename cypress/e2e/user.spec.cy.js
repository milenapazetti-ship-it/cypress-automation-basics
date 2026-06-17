import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import MenuPage from '../pages/MenuPage'
import MyInfoPage from '../pages/MyInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

Cypress.on('uncaught:exception', (err) => {
  return false
})

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    cy.wait(2000)
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string({ alpha: true }))
    myInfoPage.fillEmployeeDetails(chance.string({ alpha: true }), chance.string({ alpha: true }), chance.string({ alpha: true }), '2023-10-10', chance.natural(), chance.natural())
    cy.wait(1000)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
})