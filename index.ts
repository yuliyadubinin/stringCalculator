export class StringCalculator {
  static add(inputString: string): number {
    var processedDelimStr = inputString;

    var staticCommaDelim = ","; // static delimiter "," and "\n" (always should be used)
    var staticNewLineDelim = "\n"; // static delimiter "\n" (always should be used)
    var dynamicSingleDelim = ""; //single delim; dynamic (optional) delimiter, holds SINGLE delimiter char (if exists)
    var dynamicFirstMultiDelim = ""; //first multi delim; dynamic (optional) delimiter, holds FIRST multiple delimiter chars between [ ] (if exists)
    var dynamicSecMultiDelim = ""; //second multi delim; dynamic (optional) delimiter, holds SECOND multiple delimiter chars between [ ] (if exists)

    var arrayNumbersForSum = []; // holds "numbers" in string representation
    var arrayNumbers = [];

    var startOfDelim = "//";
    var startOfMultiDelim = "[";
    var endOfMultiDelim = "]";
    var tempEndStrIndex = 0;

    // process single and multi-char delimiters that start from "//"
    if (processedDelimStr.indexOf(startOfDelim) === 0) {
      processedDelimStr = processedDelimStr.slice(2); // remove startOfDelim //

      // finding multi char delimiter(s)
      if (processedDelimStr.indexOf(startOfMultiDelim) === 0) {
        processedDelimStr = processedDelimStr.slice(1); // remove first char from left (startOfMultiDelim)
        tempEndStrIndex = processedDelimStr.indexOf(endOfMultiDelim);
        dynamicFirstMultiDelim = processedDelimStr.slice(0, tempEndStrIndex);
        processedDelimStr = processedDelimStr.slice(tempEndStrIndex + 1);

        // trying to find second multi char delimiter
        if (processedDelimStr.indexOf(startOfMultiDelim) === 0) {
          processedDelimStr = processedDelimStr.slice(1);
          tempEndStrIndex = processedDelimStr.indexOf(endOfMultiDelim);
          dynamicSecMultiDelim = processedDelimStr.slice(0, tempEndStrIndex);
          processedDelimStr = processedDelimStr.slice(tempEndStrIndex + 1);
        }
      }

      // finding single delimiter
      else {
        dynamicSingleDelim = processedDelimStr.slice(0, 1); // assigning first char after removed //
      }
    }

    processedDelimStr = processedDelimStr.split(staticCommaDelim).join(" ");
    processedDelimStr = processedDelimStr.split(staticNewLineDelim).join(" ");

    if (dynamicSingleDelim !== "") {
      processedDelimStr = processedDelimStr.split(dynamicSingleDelim).join(" ");
    }

    if (dynamicFirstMultiDelim !== "") {
      // dynamic FIRST multi delimiter (not to process if not found in input)
      processedDelimStr = processedDelimStr
        .split(dynamicFirstMultiDelim)
        .join(" "); // replace ALL MULTI dynamicFirstMultiDelim to spaces
    }

    if (dynamicSecMultiDelim !== "") {
      // dynamic SECOND multi delimiter (not to process if not found in input)
      processedDelimStr = processedDelimStr
        .split(dynamicSecMultiDelim)
        .join(" "); // replace ALL MULTI dynamicSecMultiDelim to spaces
    }

    arrayNumbersForSum = processedDelimStr.split(" ");

    // convert array of strings to array of numbers
    for (var i = 0; i < arrayNumbersForSum.length; i++) {
      arrayNumbers[i] = Number(arrayNumbersForSum[i]);
    }

    var invalidValues = [];

    if (inputString === "") {
      return 0;
    }
    for (let value of arrayNumbers) {
      if (value < 0) {
        invalidValues.push(value);
      }
    }

    if (invalidValues.length) {
      return 0;
      throw new Error(
        "No negative values are allowed: " + invalidValues.join(",")
      );
    }

    return StringCalculator.calcSum(arrayNumbers);
  } // static add(inputString: string): number

  static calcSum(arrayNumbersbers: number[]): number {
    var sum = 0;
    for (var i = 0; i < arrayNumbersbers.length; i++) {
      sum += arrayNumbersbers[i] > 1000 ? 0 : arrayNumbersbers[i];
    }
    return sum;
  }
} // export class StringCalculator
