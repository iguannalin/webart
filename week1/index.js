window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const shape = [12,18,18,20,20,25,28,30,35,35,35,40,40,50,30,28,20,15,15,10,7,5];

  function createFog(txt) {
    const span = document.createElement("a");
    span.className = "fog";
    let cursor = 0;
    shape.forEach((len) => {
      len += getRandomInt(0, 15);
      span.innerHTML += (txt.slice(cursor, cursor+len));
      span.innerHTML += "<br>";
      cursor += len;
    })
    span.style.top = (-1 * getRandomInt(500,1000)) + "px";
    span.style.left = getRandomInt(-100, window.innerWidth-100) + "px";
    // txt.split("\n").forEach((line, i) => {
    //   span.innerHTML += line;
    //   span.innerHTML += "<br>";
    // });
    span.style.fontSize = getRandomInt(4,25)+"px";
    setInterval(() => {
      span.style.top = +(span.style.top.split("px")[0]) + 1 + "px";
      span.style.left = +(span.style.left.split("px")[0]) + (Math.random()>0.5?-0.5:0.5) + "px";
    }, 250);
    container.appendChild(span);
  }

  fetch("text.json").then((d) => d.json()).then((r) => {
    for (let i = 0; i < getRandomInt(5,10); i++) {
      for (const text in Array.from(r)) {
        createFog(r[text]);
      }
    }
  })
});