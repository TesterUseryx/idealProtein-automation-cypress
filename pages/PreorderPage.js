class PreorderPage {

    function (locator, expectedResult) {
        cy.get(locator).then((theElement) => {
            const text = (theElement.text())
            cy.log(text)
            expect(expectedResult).to.be.eq(text)
       });
    }

    verifyPageElements(){
        cy.get('.mat-tab-label-active')
        cy.get('.cart-products')
        cy.get('ip-preorder-cart-summary > .mat-card')
    }

    searchInput(searchProduct){
        cy.get('#mat-input-1').type(searchProduct)
        const searchInput = cy.get('#mat-input-1')
        searchInput.clear().type(searchProduct)
        return this
    }

    addItemToCart() {
        cy.get('.mat-button-wrapper').contains("Add To Cart").should('not.be.disabled').click()
    }

    verifyProductIsAddedToCart(quantity) {
        cy.get('.mat-row > .cdk-column-quantity').contains(quantity)
    }

    increaseProductQuantity(quantity) {
        for(let i = 0; i < quantity; i++){
            cy.get(`[class="mat-icon notranslate material-icons mat-icon-no-color"]`).contains("right").click();
        }
    }

    leaveAComment(comment) {
        cy.get('#mat-input-0').type(comment)
    }

    clickOnSendToMyClinic() {
        cy.get('.order-button').click()
    }

    verifyThePreorderSuccessPopup(orderedProduct, orderedQuantity, addedComment) {
        cy.get('[class="ng-star-inserted"]').contains(orderedProduct)
        cy.get('[class="ng-star-inserted"]').contains(orderedQuantity)
        cy.get('[class="invoice-container"]').contains(addedComment)
    }

    /*addItemToCart() {
        cy.get('.mat-button-wrapper').contains(" Add To Cart ").then((x) => {
            cy.wait(5000)
            if (x.is("enabled")) {
              cy.get(x).click()
            } else {
                //cy.get(x).click()
            }
          });
    }*/

    inStockVerification(stockStatus) {
        this.function('.label', stockStatus)
    }

    verifyShopinCart(itemCount) {
        this.function('[title="View my shopping cart"] > .ajax_cart_quantity', itemCount)
    }

    selectTearmsOfServiceCheckBox() {
        cy.get('#cgv').click()
    }

    checkPaymentStepElements(itemCount) {
        this.function('.cart_quantity > span', itemCount)
    }

    selectPaymentMethod(bankWire = true){
        if(!bankWire){
            cy.get('.bankwire').click()
        }else{
            cy.get('.cheque'),click()
        }
    }

    confirmOrder(){
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.alert');
        cy.get('.ajax_cart_no_product')
    }

  }
  module.exports = PreorderPage
  