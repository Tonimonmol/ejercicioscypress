describe('Agregar tareas', () => {

    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
    })
 
    it('Crear tarea', () => {
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1')
    })
    
    it('Marcar tarea como completada', () => {
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list li').first().find('.toggle').click()
        cy.get('.todo-list li').first().should('have.class', 'completed')
    })
    
    it('Desmarcar tarea completada', () => {
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list li').first().find('.toggle').click()
        cy.get('.todo-list li').first().should('have.class', 'completed')
        cy.get('.todo-list li').first().find('.toggle').click()
        cy.get('.todo-list li').first().should('not.have.class', 'completed')
    })

    it('Editar tarea', () => {
        cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
        cy.get('[data-testid="todo-item-label"]').dblclick()
        cy.get('.view > .input-container > [data-testid="text-input"]').clear().type('Tarea 1 - Editada{enter}')  
    })

    it('Borrar tarea', () => {
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list li').first().find('.destroy').click({ force: true })
        cy.get('.todo-list').should('not.contain', 'Tarea 1')
    })

    it('Filtrar tareas', () => {
        let taskCount = 0;
    
        const tasks = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4'];
        taskCount = tasks.length;
    
        tasks.forEach(task => {
            cy.get('.new-todo').type(`${task}{enter}`);
        });

        cy.get('.todo-list li').eq(0).find('.toggle').click();
        cy.get('.todo-list li').eq(2).find('.toggle').click();

        cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').should('contain.text', 'Active').click();
        cy.get('.todo-list li').should('have.length.greaterThan', 0);
        cy.get('.todo-list li').each(($el) => {
            cy.wrap($el).should('not.have.class', 'completed');
        });

        cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').should('contain.text', 'Completed').click();
        cy.get('.todo-list li').should('have.length.greaterThan', 0);
        cy.get('.todo-list li').each(($el) => {
            cy.wrap($el).should('have.class', 'completed');
        });

        cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').should('contain.text', 'All').click({ force: true });
        cy.get('.todo-list li').should('have.length', taskCount);
    });
    

})