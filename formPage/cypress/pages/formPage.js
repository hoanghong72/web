class fPage{

    elements = { 
         fristName:'#firstName',
         lastName:'#lastName',
    }
    putName() {
        cy.get(this.elements.fristName).type('Name')
        cy.get(this.elements.lastName).type('Namee')
    }
};
export default fPage