const spinner = function() {
  const arr = ['|  ','/  ','-  ','\\  ','|  ','/  ','-  ','\\\n']
  let time = 100;
  for(const i of arr) {
    setTimeout(() => process.stdout.write(`\r${i}`), time);
    time += 200;
  }
}

spinner();
