if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.getElementById("file").addEventListener("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;

      const array1 = text.split("\n");
      const array = array1.map(function (x) {
        return Number(x);
      });
      // 1 максимальне число в файлі
      const sorted = [...array].sort((a, b) => a - b);
      Array.prototype.last = function () {
        return this[this.length - 1];
      };
      sorted.last();
      console.log("максимальне число в файлі", sorted.last());

      //  2 мінімальне число в файлі;
      const min = sorted[0];
      console.log("мінімальне число в файлі;", min);

      //  3 медіанa
      const median = (array) => {
        const mid = Math.floor(array.length / 2);
        return array.length % 2 !== 0
          ? sorted[mid]
          : (sorted[mid - 1] + sorted[mid]) / 2;
      };
      console.log(" медіанa", median(array));

      //  4 середнє арифметичне значення
      let summ = 0;
      for (let i = 0; i < array.length; i++) {
        summ = summ + array[i];
      }
      const average = summ / array.length;

      console.log("середнє арифметичне значення", average.toFixed(2));
    };

    reader.readAsText(file);
  });
} else {
  alert("File API is not supported!");
}
