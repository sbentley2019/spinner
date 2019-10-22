const spin = function(str, time) {
  setTimeout(() => {
    process.stdout.write(`\r${str}  `);
  }, time * 100);
};

const spinArr = ['|', '/', '-', '\\'];
for (let i = 1, k = 0; i <= 17; i += 2, k++) {
  spin((i !== 17 ? spinArr[k % 4] : "|\n"), i);
}