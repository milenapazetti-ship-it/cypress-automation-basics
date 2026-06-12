class MenuPage {
  constructor() {
    this.selectors = {
      myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    }
  }

  accessMyInfo() {
    cy.get(this.selectors.myInfoButton).click()
  }
}

export default MenuPage