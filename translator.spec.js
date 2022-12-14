import { makeMorse, engToMorse } from './translator.js';

//all basic tests 
describe('Testing translateToMorse', () => {
  it("receive letters and turn them into morsecode", ()=> {
      let letter;
      letter = "A";
    expect(makeMorse(letter,engToMorse)).toBe(".-")
  })

  it("receive numbers and turn them into morsecode", ()=> {
      let number;
      number = "1";
    expect(makeMorse(number,engToMorse)).toBe(".----")
  })  

  it("receive strings and turn them into morsecode", ()=> {
      let name;
      name = "Andrew";
    expect(makeMorse(name,engToMorse)).toBe(".- -. -.. .-. . .--")
  }) 

  it("receives spaces in between words and turn them into morsecode", ()=> {
      let space;
      space = " ";
    expect(makeMorse(space,engToMorse)).toBe("/")
  }) 
 
  it("receives symbols and turn them into morsecode", ()=> {
    let symbol;
    symbol = "+";
  expect(makeMorse(symbol,engToMorse)).toBe(".-.-.")
}) 

it("receives decimal numbers and turn them into morsecode", ()=> {
  let decimal;
  decimal = "1.5";
expect(makeMorse(decimal,engToMorse)).toBe(".---- .-.-.- .....")
}) 

it("receives a string with letters and numbers and turns them into morsecode", ()=> {
  let mixedString;
  mixedString = "Andrew1";
expect(makeMorse(mixedString,engToMorse)).toBe(".- -. -.. .-. . .-- .----")
}) 

it("receives string with letters numbers and symbols and a space and turns them into morsecode", ()=> {
  let mixedString;
  mixedString = "Andrew1?? ?";
expect(makeMorse(mixedString,engToMorse)).toBe(".- -. -.. .-. . .-- .---- ..--.. ..--.. / ..--..")
}) 

it("receives multiple strings with letters numbers and symbols and a space and turns them into morsecode", ()=> {
  let mixedStrings;
  mixedStrings = "Andrew Doherty 1996 ??";
expect(makeMorse(mixedStrings,engToMorse)).toBe(".- -. -.. .-. . .-- / -.. --- .... . .-. - -.-- / .---- ----. ----. -.... / ..--.. ..--..")
}) 

it("receives stringS with all capital letters and turns them into morsecode", ()=> {
  let capitalString;
  capitalString = "ANDREW DOHERTY";
expect(makeMorse(capitalString,engToMorse)).toBe(".- -. -.. .-. . .-- / -.. --- .... . .-. - -.--")
}) 

})






// write tests for morse-english

//tests for DOM
// beforeEach(() => {
//   cy.visit('http://127.0.0.1:5500/index.html')
// })

// describe('Testing translate to morse with DOM features', () => {
//   it('if a word is typed it should show in the display', () => {
//   cy.get('').click()
//   cy.get('').click()
//   cy.get('').click()
//   cy.get('').should("contain", "")
//   })
// })


// What should translateToMorse function actually be able to do?

// - Receive letters and translate those letters into morse code
// - Take into consideration capital letters - These also need to translate to morse code - Research
// - Take into consideration spaces between words and translate these accordingly.
// - Numbers!!!
// - Symbols??
// - Extension - Other languages available other than English.

// Should we have a translateToEnglish translator?

//