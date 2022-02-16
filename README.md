# workspace-365-shopping-cart

---

## About

- Shopping cart application built in React & TypeScript

## Running the project

- Navigate to the src folder
- Run “npm install”
- Run “npm start”
- Navigate to http://localhost:3000 in the browser

## HOOKS

- useMediaQuery
- useRenderContent
- useSetView

## Utils

Here you can find these helper functions

- getById(array, id)
- truncateString(string, number)

## BUGS

**ModalButtons.js**

- Error handling toast message for 'preBuyStock()' in '**ModalButtons.js**' does not work and the 'payment' still goes through to the success case.

- To trigger the bug go to '**stocks_context.js**'
- Go to line 56 and set '**isInvalidCart**' to return false in both conditions

```js
56: return isInvalidCart ? false : false
```

- Restart the app
- Add items to the cart and then click on 'Buy' in '**ModalButtons.js**'
