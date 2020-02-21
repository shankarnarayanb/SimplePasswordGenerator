import { Component } from '@angular/core';
import { isEmptyExpression } from '@angular/compiler';
import { isNull } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw-gen';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  includeAmbiguous = false;
  numbers = '1234567890';
  letters = 'abcdefghijklmnopqrstuvwxyz';
  symbols = '!£$@%&*';
  AmbiguousCharacters = '{}[]()/\'"`~,;:.<>'
  validChars = '';
  generatedPassword = '';


  onChangeLength(value: string) {
    // tslint:disable-next-line:radix
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseAmbiguous() {
    this.includeAmbiguous = !this.includeAmbiguous;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }


  onButtonClick() {
    // console.log('Button was clicked')
    this.generatedPassword = '';
    // console.log(`
    // About to generate a password with the following:
    // Include letters: ${this.includeLetters}
    // Include numbers: ${this.includeNumbers}
    // Include symbols: ${this.includeSymbols}
    // `);

    if (this.includeSymbols) {
      console.log(` Include symbols: ${this.includeSymbols} ` )
      this.validChars += this.symbols;
    }

    if (this.includeNumbers) {
      console.log(` Include numbers: ${this.includeNumbers} ` )
      this.validChars += this.numbers;
    }

    if (this.includeLetters) {
      console.log(` Include letters: ${this.includeLetters} ` )
      this.validChars += this.letters;
    }

    if (this.includeAmbiguous) {
      console.log(` Include Ambiguous symbols: ${this.includeAmbiguous} ` )
      this.validChars += this.AmbiguousCharacters;
    }


    console.log(` Valid Chars: ${this.validChars} ` )


    if (this.validChars != "" ){
    for (let i = 0; i < this.length; i++) {
      console.log(` Length : ${this.length} ` )
      const index = Math.floor(Math.random() * this.validChars.length);
      this.generatedPassword += this.validChars[index];
    }
  }

    this.validChars='';



  }
}

