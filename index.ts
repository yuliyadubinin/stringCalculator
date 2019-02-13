export class StringCalculator {
  static add(inputString: string): number | undefined {
    var separator = /,|\n/;
    var delim = "";

    var startOfDelim = "//";
    var startOfMultiDelim = "[";
    var endOfMultiDelim = "]";
    var tempEndStringIndex = 0;
    var arrayOfNumbers = [];

    // delimiters that start from "//"
    if (inputString.indexOf(startOfDelim) === 0) {
      inputString = inputString.slice(2); // remove startOfDelim //
      if (inputString.indexOf(startOfMultiDelim) === 0) {
        inputString = inputString.slice(1); // remove first char from left (startOfMultiDelim)
        tempEndStringIndex = inputString.indexOf(endOfMultiDelim);
        const rest = inputString.slice(3);
        delim = inputString.slice(0, 1); // assigning first char after removed //
        const array = rest.split(delim).filter(Boolean);

        // convert array of strings to array of numbers
        for (var i = 0; i < array.length; i++) {
          arrayOfNumbers[i] = Number(array[i]);
        }
        return this.calcSum(arrayOfNumbers);
      }

      // trying to find second multi char delimiter
      if (inputString.indexOf(startOfMultiDelim) === 0) {
        inputString = inputString.slice(1); // remove first char from left (startOfMultiDelim)
        tempEndStringIndex = inputString.indexOf(endOfMultiDelim);
        delim = inputString.slice(0, tempEndStringIndex);
        inputString = inputString.slice(tempEndStringIndex + 1);
      }

      // finding explicit delimiter
      if (inputString.indexOf("\n") === 1) {
        const rest = inputString.slice(2);
        delim = inputString.slice(0, 1);
        const array = rest.split(delim);

        // convert array of strings to array of numbers
        for (var i = 0; i < array.length; i++) {
          arrayOfNumbers[i] = Number(array[i]);
        }
        //StringCalculator.convertToNumbers(array);
        return this.calcSum(arrayOfNumbers);
      }
    } else {
      if (inputString === "") {
        return 0;
      }
      var values;
      values = inputString.split(separator);
      for (var i = 0; i < values.length; i++) {
        arrayOfNumbers[i] = Number(values[i]);
      }
      return this.calcSum(arrayOfNumbers);
    }
  }

  static calcSum(arrayOfNumbers: number[]): number {
    var sum = 0;
    var invalidValues = [];
    var separator = /,|\n/;
    var values = arrayOfNumbers;
    for (let value of values) {
      if (value < 0) {
        invalidValues.push(value);
      } else if (separator) {
        sum += value > 1000 ? 0 : value;
      } else {
        sum += value > 1000 ? 0 : value;
      }
    }
    if (invalidValues.length) {
      throw new Error(
        "No negative values are allowed: " + invalidValues.join(",")
      );
    }

    console.log("calculated sum: ", sum);
    return sum || 0;
  }
}
