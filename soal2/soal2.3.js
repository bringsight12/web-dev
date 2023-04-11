let printSegitiga = 9;

let spacer = "";

for (let i = printSegitiga; i >= 1; i--) {
  let output = "";

  for (let j = 1; j <= i; j++) {
    output += "1" + " ";
  }

  spacer += " ";
  output = spacer + output;

  console.log(output);
}
