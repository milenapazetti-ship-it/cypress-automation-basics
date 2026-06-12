# 📚 Cypress Commands Reference

---

## 1. BASIC TEST STRUCTURE
> Estrutura básica de todo teste Cypress

```javascript
import data from '../fixtures/file.json'

describe('Test Group Name', () => {

  it('Test Name', () => {
    // your commands here
  })

  it.only('Run ONLY this test', () => {
    // útil para depurar um teste específico
  })

  it.skip('Skip this test', () => {
    // útil para ignorar temporariamente
  })

})
```

---

## 2. NAVIGATION
> Comandos para navegar entre páginas

```javascript
cy.visit('/page')                    // abre rota relativa
cy.visit('https://site.com')        // abre URL completa
cy.go('back')                        // voltar
cy.reload()                          // recarregar página
```

---

## 3. FINDING ELEMENTS (SELECTORS)
> Como encontrar elementos na página

```javascript
cy.get('[name="username"]')          // por atributo name
cy.get('[placeholder="Type..."]')    // por placeholder
cy.get('[type="submit"]')            // por tipo
cy.get('[href="/page"]')             // por link

cy.get('.css-class')                 // por classe CSS
cy.get('#my-id')                     // por ID
cy.get('button')                     // por tag HTML

cy.get('.class').first()             // primeiro elemento
cy.get('.class').last()              // último elemento
cy.get('.class').eq(2)               // terceiro (índice começa em 0)

cy.contains('Text on screen')        // por texto visível
```

---

## 4. INTERACTING WITH ELEMENTS
> Como interagir com campos, botões e formulários

```javascript
cy.get(...).click()                          // clicar
cy.get(...).click({ force: true })           // forçar clique (elemento oculto)

cy.get(...).type('text')                     // digitar
cy.get(...).type('text', { force: true })    // forçar digitação

cy.get(...).clear()                          // limpar campo
cy.get(...).clear().type('new text')         // limpar e digitar

cy.get(...).select('Option')                 // selecionar em <select>
cy.get(...).check()                          // marcar checkbox
cy.get(...).uncheck()                        // desmarcar checkbox

cy.get(...).scrollIntoView()                 // rolar até o elemento
```

---

## 5. ASSERTIONS (VERIFICATIONS)
> Como verificar se o resultado esperado aconteceu

```javascript
cy.get(...).should('exist')                  // elemento existe no DOM
cy.get(...).should('not.exist')              // elemento NÃO existe
cy.get(...).should('be.visible')             // elemento está visível
cy.get(...).should('be.disabled')            // botão desabilitado
cy.get(...).should('be.enabled')             // botão habilitado

cy.get(...).should('contain', 'text')        // contém texto
cy.get(...).should('have.value', 'text')     // campo tem valor exato
cy.get(...).should('have.class', 'class')    // tem classe CSS

cy.location('pathname').should('equal', '/route')    // URL exata
cy.location('pathname').should('include', '/route')  // URL contém

cy.get('body').should('contain', 'Message')          // texto na página
```

---

## 6. WAITING
> Como esperar elementos ou ações

```javascript
cy.wait(1000)                        // esperar 1 segundo (evitar quando possível)
cy.get(...).should('be.visible')     // esperar elemento aparecer (melhor opção)
cy.get(...).should('exist')          // esperar elemento existir no DOM
```

---

## 7. URL AND NAVIGATION CHECKS
> Como verificar a URL atual

```javascript
cy.url().should('include', '/dashboard')
cy.location('pathname').should('equal', '/login')
cy.title().should('contain', 'Page Title')
```

---

## 8. FIXTURES (EXTERNAL TEST DATA)
> Como usar dados externos nos testes

```javascript
// No arquivo cypress/fixtures/users.json:
// { "username": "admin", "password": "admin123" }

import data from '../fixtures/users.json'

cy.get('[name="username"]').type(data.username)
cy.get('[name="password"]').type(data.password)
```

---

## 9. READY-TO-USE EXAMPLES
> Exemplos prontos para copiar e adaptar

### ✅ Successful login
```javascript
cy.visit('/auth/login')
cy.get('[name="username"]').type('Admin')
cy.get('[name="password"]').type('admin123')
cy.get('[type="submit"]').click()
cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
```

### ❌ Failed login
```javascript
cy.visit('/auth/login')
cy.get('[name="username"]').type('wrong')
cy.get('[name="password"]').type('wrong')
cy.get('[type="submit"]').click()
cy.get('[role="alert"]').should('exist')
```

### 📝 Fill a form
```javascript
cy.get('[name="firstName"]').clear().type('John')
cy.get('[name="lastName"]').clear().type('Doe')
cy.get('[placeholder="yyyy-mm-dd"]').first().clear({ force: true }).type('1990-05-20', { force: true })
```

### 💾 Click Save and verify success
```javascript
cy.get('.oxd-form-actions > .oxd-button').first().click()
cy.get('.oxd-toast').should('exist')
```

### 📋 Select option in combobox
```javascript
cy.get('.oxd-select-text--arrow').eq(0).click({ force: true })
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
```

---

## 10. TROUBLESHOOTING GUIDE
> O que fazer quando algo não funciona

| Problem | Solution |
|---|---|
| Element not found | Inspect in browser and copy the correct selector |
| Wrong index | Use `.first()` or check how many elements exist |
| Field character limit error | Check max length allowed in the field |
| Flaky test | Replace `cy.wait()` with `.should('be.visible')` |
| Multiple equal buttons | Use `.first()`, `.last()` or `.eq(n)` |
| Element not interactable | Add `{ force: true }` to the command |

---

## 11. WORKFLOW TO CREATE A NEW TEST
> Passo a passo para criar qualquer teste novo

1. Open the site in the browser — *abrir o site*
2. Perform the flow manually — *fazer o fluxo na mão primeiro*
3. Inspect each element (right click → Inspect) — *inspecionar cada elemento*
4. Copy the selector (name, id, class, placeholder) — *copiar o seletor*
5. Write the test using the commands above — *escrever o teste*
6. Run in Cypress and fix errors — *rodar e ajustar os erros*

---

*Official documentation: https://docs.cypress.io*