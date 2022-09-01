etag1 = document.querySelector("#inpt1");
var spantag = document.querySelector(".pid");
function convert() {
  if (etag1.value.length == 0) {
    alert("Enter a value");
  } else {
    let val = etag1.value;
    ans = Number(val);
    rate = ans * 700;
    spantag.innerHTML = `
                              <input
                                type="text"
                                placeholder=""
                                class="form-control"
                                id="inpt2
                              " disabled
                                value="${rate}"
                              />`;
  }
}
function wipe() {
  etag1.value = "";
}
