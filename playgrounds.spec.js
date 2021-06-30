///references types ="cypress" />


describe ('Codedamn Project Basics', ()=> {
     
    it('Should load playground correctly',()=>{

        cy.visit('https://codedamn.com/playground.html')

        cy.log('Checking for sidebar')
        cy.contains('Trying to connect').should('exist')

        cy.log('Checking bottom left button')
        cy.contains("Connecting").should('exist') //OR//
        //cy.get('[data-testid=xterm-controls] > div').then(el =>{
            //expect(el.text()).to.eq(' ..')       }) //OR//
        cy.get('[data-testid=xterm-controls] > div').should('contain.text', 'Connecting')
        cy.debug()
        cy.contains('Trying to establish').should('exist')
          //requires to open dev tools
    })
})
 //close describe
// beforeEach(()=>{
    //     // cy.viewport(1280,720) - without the menu bars
    //     cy.viewport(1020, 380)
    //     cy.visit('https://codedamn.com')
        
    // })

  //  it('Should pass', ()=>{
       

        // it('Access Playgrounds using menu', ()=>{
        //             cy.get('.block > path').click()
        //     cy.contains('Playgrounds').should('exist')
        //     cy.get('div#mobile-menu a:nth-child(10)').click()
        // //   cy.pause() //makes sure playground loads correctly
       //    })