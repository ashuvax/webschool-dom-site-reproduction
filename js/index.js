function buildHeader() {
  const header = document.createElement("header");
  header.textContent = "Exercice 3";
  header.classList.add("header");
  return header;
}
function buildDescription() {
  const div = document.createElement("div");
  div.setAttribute("id", "description");

  const h2 = document.createElement("h2");
  h2.textContent = "Who we are";

  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const p2 = document.createElement("p");
  p2.textContent = "Beatae ut consectetur odit.Odio sapiente qui sequi ? ";

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(p2);

  return div;
}
function buildArticels() {
  const mainDiv = document.createElement("div");
  mainDiv.className = "flex";
  const div1 = document.createElement("div");
  div1.id = "div1";

  const div2 = document.createElement("div");
  div2.id = "div2";

  function buildDiv2(h2Content) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = h2Content;
    const p = document.createElement("p");
    p.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eos in ex voluptates vero, eligendi accusantium vel, ipsa reiciendis, sunt aperiam. Qui iusto error fugiat pariatur saepe obcaecati nesciunt rerum.";
    div.appendChild(h2);
    div.appendChild(p);
    return div;
  }
  div2.appendChild(buildDiv2("our mision"));
  div2.appendChild(buildDiv2("our vision"));
  div2.appendChild(buildDiv2("our valuse"));

  mainDiv.appendChild(div1);
  mainDiv.appendChild(div2);
  return mainDiv;
}
function buildFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "@web school";
  footer.classList.add("footer");
  return footer;
}

function buildPage() {
  const body = document.querySelector("body");
  body.classList.add("body");

  body.appendChild(buildHeader());
  body.appendChild(buildDescription());
  body.appendChild(buildArticels());
  body.appendChild(buildFooter());
}
buildPage();
