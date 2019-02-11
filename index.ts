export class StringCalculator {
  static add(arg: string): number | undefined {
    var processed_delimiter_str = arg;
    var separator = /,|\n/;

    var delim_1 = ","; // static delimiter "," (always should be used)
    var delim_2 = "/n"; // static delimiter "/n" (always should be used)
    var delim_3 = ""; // dynamic (optional) delimiter, holds SINGLE delimiter char (if exists)
    var delim_4 = ""; // dynamic (optional) delimiter, holds FIRST multiple delimiter chars between [ ] (if exists)
    var delim_5 = ""; // dynamic (optional) delimiter, holds SECOND multiple delimiter chars between [ ] (if exists)

    // var delimiter= (/[ +.:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);

    var values;
    var sum = 0;
    var invalidValues = [];

    var start_of_delimiter = "//";
    var start_of_multi_char_delimiter = "[";
    var end_of_multi_char_delimiter = "]";
    var temp_end_string_index = 0;

    // process single and multi-char delimiters that start from "//"
    if (processed_delimiter_str.indexOf(start_of_delimiter) === 0) {
      // by default search starts from BEGINNING of string ( i.e. 0 )
      processed_delimiter_str = processed_delimiter_str.slice(2); // remove start_of_delimiter //
      // console.log("processed_after_remove:" ,processed_delimiter_str);

      // finding multi char delimiter(s)
      if (
        processed_delimiter_str.indexOf(start_of_multi_char_delimiter) === 0
      ) {
        // console.log("processed_with_klammer: ", processed_delimiter_str);
        // by default search starts from BEGINNING of string ( i.e. 0 )
        processed_delimiter_str = processed_delimiter_str.slice(1); // remove first char from left (start_of_multi_char_delimiter)
        // console.log("processed_after_remove_klammer", processed_delimiter_str );
        temp_end_string_index = processed_delimiter_str.indexOf(
          end_of_multi_char_delimiter
        );
        // console.log("temp", temp_end_string_index);
        const rest = processed_delimiter_str.slice(3);
        // console.log("rest_del_4:", rest);
        delim_4 = processed_delimiter_str.slice(0, 1); // assigning first char after removed //
        const array = rest.split(delim_4).filter(Boolean);
        //console.log("array_del_4:", array);

        values = array;
        for (let value of values) {
          var numberValue = parseInt(value);
          // console.log( numberValue);
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
        // console.log("sum:", sum);
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
        const rest = processed_delimiter_str.slice(3);
        // console.log(processed_delimiter_str);
        console.log("rest_del_5:", rest);
        delim_5 = processed_delimiter_str.slice(0, 1); // assigning first char after removed //
        const array = rest.split(delim_5).filter(Boolean);
        console.log("array_del_5:", array);
      }

      // finding single delimiter
      if (processed_delimiter_str.indexOf("\n") === 1) {
        const rest = processed_delimiter_str.slice(2);
        // console.log("rest:", rest);
        delim_3 = processed_delimiter_str.slice(0, 1); // assigning first char after removed //
        const array = rest.split(delim_3);
        // this.cal(rest, delim);
        // rest.split(delim);
        // console.log("array:", array);

        values = array;
        // console.log( "values = ", values );
        for (let value of values) {
          var numberValue = parseInt(value);
          // console.log( numberValue);
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
        // console.log("sum:", sum);
        return sum || 0;
      }
    } else {
      if (arg === "") {
        return 0;
      } else {
        values = arg.split(separator);

        // console.log( "values = ", values );
        for (let value of values) {
          var numberValue = parseInt(value);
          // console.log( numberValue);
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
      } // else
    }
  }
}

// }
/////////////////////////////////////////function
//      cal("array");
//
//    function cal(...array: string[] ) {
//    var invalidValues = [];
//    array = ['1,2,3'];
//    values = array;
//    //for (let value of values) {
//      // console.log( "values = ", values );
//      for (let value of values) {
//        var numberValue = parseInt(value);
//        // console.log( numberValue);
//        if (numberValue < 0) {
//          invalidValues.push(numberValue);
//        } else if (arg.match(separator)) {
//          sum += numberValue > 1000 ? 0 : numberValue;
//        } else {
//          sum += numberValue > 1000 ? 0 : numberValue;
//        }
//      }
//      if (invalidValues.length) {
//        throw new Error(
//          "No negative values are allowed: " + invalidValues.join(",")
//        );
//      }
//      console.log("sum of function:", sum);
//      return sum || 0;
//    }
//  } // else

/////////////////////////////function

//console.log(StringCalculator.add('')); // Should return zero when '' is passed
//
//console.log(StringCalculator.add('-5, -10, 8')); // Should not allow negative numbers
//
//console.log(StringCalculator.add('1')); //Should return the number itself when a single number is passed
//
//console.log(StringCalculator.add('10, 3')); // Should return the sum of the numbers if two are given"

//console.log(StringCalculator.add('10\n1')); // Should return the sum of the numbers if two are given"
//
//console.log(StringCalculator.add('10000, 10, 8')); // Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2
//
//console.log(StringCalculator.add('1\n23,1')); // Should allow \n or , in between the input number string"
//
//console.log(StringCalculator.add('//;\n1;9;4')); // Should allow single delimiter in between the input number string"

//console.log(StringCalculator.add('//[??]1??9')); // Should allow two delimiters in between the input number string"

console.log(StringCalculator.add("//[***][&&&&]1***3&&&&10")); // Should allow multi delimiter in between the input number string"

// console.log(StringCalculator.add('//[***********][&&&&]1***********3&&&&10')); // Should allow any length of delimiter in between the input number string"

//console.log(StringCalculator.add('10, 10, 8, 30, 1, 5, 40, 100')); // Should return the sum of an unknown amount of numbers
// }
