"use strict";

var _translator = require("./translator.js");

//all basic tests 
describe('Testing translateToMorse', function () {
  it("receive letters and turn them into morsecode", function () {
    var letter;
    letter = "A";
    expect((0, _translator.makeMorse)(letter, _translator.engToMorse)).toBe(".-");
  });
  it("receive numbers and turn them into morsecode", function () {
    var number;
    number = "1";
    expect((0, _translator.makeMorse)(number, _translator.engToMorse)).toBe(".----");
  });
  it("receive strings and turn them into morsecode", function () {
    var name;
    name = "Andrew";
    expect((0, _translator.makeMorse)(name, _translator.engToMorse)).toBe(".- -. -.. .-. . .--");
  });
  it("receives spaces in between words and turn them into morsecode", function () {
    var space;
    space = " ";
    expect((0, _translator.makeMorse)(space, _translator.engToMorse)).toBe("/");
  });
  it("receives symbols and turn them into morsecode", function () {
    var symbol;
    symbol = "+";
    expect((0, _translator.makeMorse)(symbol, _translator.engToMorse)).toBe(".-.-.");
  });
  it("receives decimal numbers and turn them into morsecode", function () {
    var decimal;
    decimal = "1.5";
    expect((0, _translator.makeMorse)(decimal, _translator.engToMorse)).toBe(".---- .-.-.- .....");
  });
  it("receives a string with letters and numbers and turns them into morsecode", function () {
    var mixedString;
    mixedString = "Andrew1";
    expect((0, _translator.makeMorse)(mixedString, _translator.engToMorse)).toBe(".- -. -.. .-. . .-- .----");
  });
  it("receives string with letters numbers and symbols and a space and turns them into morsecode", function () {
    var mixedString;
    mixedString = "Andrew1?? ?";
    expect((0, _translator.makeMorse)(mixedString, _translator.engToMorse)).toBe(".- -. -.. .-. . .-- .---- ..--.. ..--.. / ..--..");
  });
  it("receives multiple strings with letters numbers and symbols and a space and turns them into morsecode", function () {
    var mixedStrings;
    mixedStrings = "Andrew Doherty 1996 ??";
    expect((0, _translator.makeMorse)(mixedStrings, _translator.engToMorse)).toBe(".- -. -.. .-. . .-- / -.. --- .... . .-. - -.-- / .---- ----. ----. -.... / ..--.. ..--..");
  });
  it("receives stringS with all capital letters and turns them into morsecode", function () {
    var capitalString;
    capitalString = "ANDREW DOHERTY";
    expect((0, _translator.makeMorse)(capitalString, _translator.engToMorse)).toBe(".- -. -.. .-. . .-- / -.. --- .... . .-. - -.--");
  });
}); // write tests for morse-english
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