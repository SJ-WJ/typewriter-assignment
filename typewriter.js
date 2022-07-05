const sentence = "hello there from lighthouse labs";
let timeOut = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + '\n');
    // console.log('');
  }, timeOut * 50);
  timeOut ++;
}

