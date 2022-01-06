export function randomName() {
    let text;
    cy.get('#blockbestsellers > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .content_price > .price').then((theElement) => {
         text = (theElement.text())
         cy.fixture('text').as('users')
         cy.log(this.users)
        
    });

    return text;
  }