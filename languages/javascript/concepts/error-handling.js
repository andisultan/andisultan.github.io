function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 1000);
  });
}

try {
  getData();
} catch (error) {
  console.log(error);
}
