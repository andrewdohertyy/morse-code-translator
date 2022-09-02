import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
  it("receive letters and turn them into morsecode", ()=> {
    // Arrange
      let letter;
    // Act
      letter = A;
    // Assert
    expect(letter).toBe(".-")
  })

  it("receive numbers and turn them into morsecode", ()=> {
    // Arrange
      let number;
      number = 1;
    expect(number).toBe(".----")
  })  

  it("receive strings and turn them into morsecode", ()=> {
      let string;
      string = "Andrew";
    expect(char).toBe(".- -. -.. .-. . .--")
  }) 

  it("receives spaces in between words and turn them into morsecode", ()=> {
      let space;
      space = " ";
    expect(letter).toBe("/")
  }) 
 
  it("receives symbols and turn them into morsecode", ()=> {
    let symbol;
    symbol = "+";
  expect(symbol).toBe(".-.-.")
}) 

it("receives decimal numbers and turn them into morsecode", ()=> {
  let decimal;
  decimal = "1.5";
expect(decimal).toBe(".---- .-.-.- .....")
}) 

it("receivesa string with letters and numbers and turns them into morsecode", ()=> {
  let mixedString;
  mixedString = "Andrew1";
expect(mixedString).toBe(".- -. -.. .-. . .-- .----")
}) 

it("receives string with letters numbers and symbols and a space and turns them into morsecode", ()=> {
  let mixedString;
  mixedString = "Andrew1?? ?";
expect(mixedString).toBe(".- -. -.. .-. . .-- .---- ..--.. ..--.. / ..--..")
}) 
  
  


})


// What should translateToMorse function actually be able to do?

// - Receive letters and translate those letters into morse code
// - Take into consideration capital letters - These also need to translate to morse code - Research
// - Take into consideration spaces between words and translate these accordingly.
// - Numbers!!!
// - Symbols??
// - Extension - Other languages available other than English.

// Should we have a translateToEnglish translator?

//