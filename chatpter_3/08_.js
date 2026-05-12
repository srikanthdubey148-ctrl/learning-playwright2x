
function retryAttempt(currentCount) {
  return currentCount + 1;
}

let retryCount = 0;
retryCount = retryAttempt(retryCount);
retryCount = retryAttempt(retryCount);

console.log("Retry attempt:", retryCount);
 




