export class StringCalculator {
  static add(arg: string): number | undefined {
    var processed_delimiter_str = arg;
    var separator = /,|\n/;

    var delim = ""; 
   
    var values;
    var sum = 0;
    var invalidValues = [];
    var start_of_delimiter = "//";
    var start_of_multi_char_delimiter = "[";
    var end_of_multi_char_delimiter = "]";
    var temp_end_string_index = 0;

    // delimiters that start from "//"
    if (processed_delimiter_str.indexOf(start_of_delimiter) === 0) {
      processed_delimiter_str = processed_delimiter_str.slice(2); // remove start_of_delimiter //
      if (
        processed_delimiter_str.indexOf(start_of_multi_char_delimiter) === 0
      ) {
        processed_delimiter_str = processed_delimiter_str.slice(1); // remove first char from left (start_of_multi_char_delimiter)
        temp_end_string_index = processed_delimiter_str.indexOf(
          end_of_multi_char_delimiter
        );
        const rest = processed_delimiter_str.slice(3);
        delim = processed_delimiter_str.slice(0, 1); // assigning first char after removed //
        const array = rest.split(delim).filter(Boolean);

        values = array;
        for (let value of values) {
          var numberValue = parseInt(value);
          if (numberValue < 0) {
            invalidValues.push(numberValue);
          } else if (arg.match(separator)) {
            sum += numberValue > 1000 ? 0 : numberValue;
          } else {
            sum += numberValue > 1000 ? 0 : numberValue;
          }
        }
        if (invalidValues.length) {
          throw new Error(
            "No negative values are allowed: " + invalidValues.join(",")
          );
        }
        return sum || 0;
      }

      // trying to find second multi char delimiter
      if (
        processed_delimiter_str.indexOf(start_of_multi_char_delimiter) === 0
      ) {
        processed_delimiter_str = processed_delimiter_str.slice(1); // remove first char from left (start_of_multi_char_delimiter)
        temp_end_string_index = processed_delimiter_str.indexOf(
          end_of_multi_char_delimiter
        );
        processed_delimiter_str = processed_delimiter_str.slice(
          temp_end_string_index + 1
        );
        delim = processed_delimiter_str.slice(0, 1); // assigning first char after removed //
      }

      // finding single delimiter
      if (processed_delimiter_str.indexOf("\n") === 1) {
        const rest = processed_delimiter_str.slice(2);
        delim = processed_delimiter_str.slice(0, 1); // assigning first char after removed //
        const array = rest.split(delim);
        values = array;
        for (let value of values) {
          var numberValue = parseInt(value);
          if (numberValue < 0) {
            invalidValues.push(numberValue);
          } else if (arg.match(separator)) {
            sum += numberValue > 1000 ? 0 : numberValue;
          } else {
            sum += numberValue > 1000 ? 0 : numberValue;
          }
        }
        if (invalidValues.length) {
          throw new Error(
            "No negative values are allowed: " + invalidValues.join(",")
          );
        }
        return sum || 0;
      }

    } else {
      if (arg === "") {
        return 0;
      } else {
        values = arg.split(separator);
        for (let value of values) {
          var numberValue = parseInt(value);
          if (numberValue < 0) {
            invalidValues.push(numberValue);
          } else if (arg.match(separator)) {
            sum += numberValue > 1000 ? 0 : numberValue;
          } else {
            sum += numberValue > 1000 ? 0 : numberValue;
          }
        }
        if (invalidValues.length) {
          throw new Error(
            "No negative values are allowed: " + invalidValues.join(",")
          );
        }
        return sum || 0;
      }
    }
  }

}



