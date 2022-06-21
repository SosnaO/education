if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.getElementById("file").addEventListener("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;

      const array110m = text.split("\n");
      const arrayarray10m = array110m.map(function (x) {
        return Number(x);
      });
      // 1 максимальне число в файлі
      const sorted = [...arrayarray10m].sort((a, b) => a - b);
      Array.prototype.last = function () {
        return this[this.length - 1];
      };
      sorted.last();
      console.log("максимальне число в файлі", sorted.last());

      //  2 мінімальне число в файлі;
      var min = sorted[0];
      console.log("мінімальне число в файлі;", min);

      //  3 медіанa
      const median = (arrayarray10m) => {
        const mid = Math.floor(arrayarray10m.length / 2);
        return arrayarray10m.length % 2 !== 0
          ? sorted[mid]
          : (sorted[mid - 1] + sorted[mid]) / 2;
      };
      console.log(" медіанa", median(arrayarray10m));

      //  4 середнє арифметичне значення
      let summ = 0;
      for (let i = 0; i < arrayarray10m.length; i++) {
        summ = summ + arrayarray10m[i];
      }
      const average = summ / arrayarray10m.length;

      console.log("середнє арифметичне значення", average.toFixed(2));
    };

    reader.readAsText(file);
  });
} else {
  alert("File API is not supported!");
}
