import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import MenuPage from '../pages/MenuPage'
import MyInfoPage from '../pages/MyInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

Cypress.on('uncaught:exception', (err) => {
  return false
})

describe('Orange HRM Tests', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    cy.wait(2000)
    myInfoPage.fillPersonalDetails('First Name', 'Last Name', 'nickName')
    myInfoPage.fillEmployeeDetails('Employee', 'otherId', 'Drivers Number', '2023-10-10', '123456', '0987654')
    cy.wait(1000)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWith(userData.userFail.username, userData.userFail.password)
    cy.get(loginPage.selectors.wrongCredentialAlert)
  })
})