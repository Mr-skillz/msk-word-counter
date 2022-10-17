const $ = document.querySelector.bind(document);
const ele = $("#my-input");
const info = $("#info");

ele.oninput = (e) => {
  e.preventDefault();
  let val = e.target.value;
  let words = val.split(" ");

  console.log(val.length / 12);

  info.innerText = `Chars: ${val.length}; Words: ${
    words.length
  }; Pages: ${Math.floor(val.length / 120)}`;
};
