class MyInfoPage {
  constructor() {
    this.selectorsList = {
      firstNameField: '[name="firstName"]',
      lastNameField: '[name="lastName"]',
      genericField: '.oxd-input--active',
      dateField: '[placeholder="yyyy-mm-dd"]',
      genericCombobox: '.oxd-select-text--arrow',
      secondItemCombobox: '.oxd-select-dropdown > :nth-child(2)',
      thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
      dateCloseButton: '.--close',
      submitButton: '[type="submit"]',
    }
  }

  fillPersonalDetails(firstName, lastName, nickName) {
    cy.get(this.selectorsList.firstNameField).clear().type(firstName)
    cy.get(this.selectorsList.lastNameField).clear().type(lastName)
    cy.get(this.selectorsList.genericField).eq(3).clear().type(nickName)
  }

  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate, ssnNumber, sinNumber) {
    cy.get(this.selectorsList.genericField).eq(4).clear().type(employeeId)
    cy.get(this.selectorsList.genericField).eq(5).clear().type(otherId)
    cy.get(this.selectorsList.genericField).eq(6).clear().type(driversLicenseNumber)
    cy.get(this.selectorsList.genericField).eq(7).clear({force: true}).type(expiryDate, {force: true}).blur()
    cy.wait(1000)
  }

  fillStatus() {
    cy.wait(500)
    cy.get(this.selectorsList.genericCombobox).eq(0).click({force: true})
    cy.wait(500)
    cy.get(this.selectorsList.secondItemCombobox).click()
    cy.wait(500)
    cy.get(this.selectorsList.genericCombobox).eq(1).click({force: true})
    cy.wait(500)
    cy.get(this.selectorsList.thirdItemCombobox).click()
  }

  saveForm() {
    cy.get(this.selectorsList.submitButton).first().click({force: true})
    cy.wait(3000)
    cy.get('.oxd-toast-container').should('exist')
  }
}

export default MyInfoPage