///references types ="cypress" />

// const token = Auto import from 'cypress/

describe ('Codedamn Project Basics', ()=> {
    //bootstrapping external things
//setting up local storage
    // before(()=>{

    // cy.then(()=>{
    //     window.localStorage.setItem('__autho__token', token)
    // })
    // })

    beforeEach(()=>{
        cy.viewport(1280,720)
        cy.visit('https://codedamn.com')
    })

    // it(' Visit site ', ()=>{
    //     cy.visit('www.codedamn.com/')
    // })

    it(' Verify page title', ()=>{
        //cy.visit('www.codedamn.com/')
        cy.contains('Be industry').should('exist')
        cy.get('div#root').should('exist')

       // verifying text    
        cy.get('.px-4 > .flex > .w-full').click()
     //   cy.contains('Ready').should('have.text','Ready ?')
    })
        it('Different viewports when mobile testing', ()=>{
        // cy.viewport(1280,720)
        // cy.visit('https://codedamn.com')
    
        cy.viewport('iphone-x')
        cy.visit('https://codedamn.com')
    })
    it('Test by clicking', ()=>{
        //cy.visit('www.codedamn.com/')
        cy.get('.block > path').click()
        cy.contains('Create account').should('exist')
        cy.contains('Contact Us').should('exist')
    })
    it('Login page links verification', ()=>{
        // cy.visit('www.codedamn.com/') <-- before statement
        cy.get('.block > path').click()
        cy.log("Going to create account")
        cy.contains('Create account').should('exist').click()
        cy.url().should('include','/register')
        cy.go('back')

        cy.get('.block > path').click()
        cy.contains('Contact Us').should('exist')

        cy.get('div#mobile-menu a:nth-child(5)').click()
        cy.url().should('include','/contact') 
        cy.go('back')
       // cy.log('Current URL =', cy.url())
        cy.url().then((currentUrl)=> {
            cy.log('The currect real url is :', currentUrl)
        })
    })

    it('Login to the page, verify login error', ()=>{
        // cy.viewport(1280,720) - added beforeEach <---
        // cy.visit('www.codedamn.com/')
        cy.contains('Sign In').click()
        cy.get('[data-testid=username]').type('admin')
        cy.get('[data-testid=password]').type('admin')
        cy.get('[data-testid=login]').click()
        cy.contains('Unable to authorize').should('exist')

    })

    
    it('Login to the page successfully', ()=>{
   
        cy.contains('Sign In').click()
        cy.get('[data-testid=username]').type('iosdev')
        cy.get('[data-testid=password]').type('iosdev')
        cy.get('[data-testid=login]').click()
        // cy.debug()
        cy.url().should('include', '/login')
        //cy.contains('Setting up the challenge', {timeout:10 * 1000}).should('not exist')
        //using special keys
        cy.get('[data=testid=xterm')
        .type('{ctrl}{c}')
        .type('touch testscript.js{enter}')
    })
    
    it('New File Feature works', ()=>{
        
        
        CY.visit('https://codedamn.com/playground/html')

        cy.contains('Setting up the Challenge').should('exist')
        
        cy.contains('Setting up the challenge', {timeout:10 * 1000})
            .should('not exist')
        const fileName = Math.random().toString().slice(0,3)
        //using special keys
        cy.get('[data=testid=xterm')
            .type('{ctrl}{c}')
            .type('touch testscript.${fileName}.js{enter}')
        cy.contains('testscript.${fileName}.js').should('exist')
        cy.contains('testscript.${fileName}.js').rightclick()
        cy.contains('Rename File').click()
        //OR cy.contains('[data-testid=renamebtn]').click()
        cy.get('[data-testid=renamefileFolder]').type('new_.${fileName}.js')
        cy.contains('testscript.${fileName}.js').should('not.exist')
    })
})