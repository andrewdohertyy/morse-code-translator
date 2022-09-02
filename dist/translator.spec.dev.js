"use strict";

var _translator = require("./translator");

describe('Testing translateToMorse', function () {
  it("receive letters and turn them into morsecode", function () {
    // Arrange
    var letter; // Act

    letter = "A";
    var result = (0, _translator.makeMorse)(letter); // Assert

    expect(result).toBe(".-");
  });
  it("receive numbers and turn them into morsecode", function () {
    // Arrange
    var number;
    number = "1";
    expect((0, _translator.makeMorse)(number)).toBe(".----");
  });
  it("receive strings and turn them into morsecode", function () {
    var name;
    name = "Andrew";
    expect((0, _translator.makeMorse)(name)).toBe(".- -. -.. .-. . .--");
  });
  it("receives spaces in between words and turn them into morsecode", function () {
    var space;
    space = " ";
    expect((0, _translator.makeMorse)(space)).toBe("/");
  });
  it("receives symbols and turn them into morsecode", function () {
    var symbol;
    symbol = "+";
    expect((0, _translator.makeMorse)(symbol)).toBe(".-.-.");
  });
  it("receives decimal numbers and turn them into morsecode", function () {
    var decimal;
    decimal = "1.5";
    expect((0, _translator.makeMorse)(decimal)).toBe(".---- .-.-.- .....");
  });
  it("receivesa string with letters and numbers and turns them into morsecode", function () {
    var mixedString;
    mixedString = "Andrew1";
    expect((0, _translator.makeMorse)(mixedString)).toBe(".- -. -.. .-. . .-- .----");
  });
  it("receives string with letters numbers and symbols and a space and turns them into morsecode", function () {
    var mixedString;
    mixedString = "Andrew1?? ?";
    expect((0, _translator.makeMorse)(mixedString)).toBe(".- -. -.. .-. . .-- .---- ..--.. ..--.. / ..--..");
  });
}); // What should translateToMorse function actually be able to do?
// - Receive letters and translate those letters into morse code
// - Take into consideration capital letters - These also need to translate to morse code - Research
// - Take into consideration spaces between words and translate these accordingly.
// - Numbers!!!
// - Symbols??
// - Extension - Other languages available other than English.
// Should we have a translateToEnglish translator?
//