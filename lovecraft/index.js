window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const gifs = ["loading", "sun", "heart", "deer", "art"];
  gifs.forEach((gif) => {
    if (Math.random()>0.5) return;
    fetch("assets/"+gif+".gif").then((d) => {
      const div = document.createElement("img");
      div.className = "gif";
      div.style.width = getRandomInt(window.innerWidth/3, window.innerWidth) +"px";
      div.autoplay = true;
      div.src = d.url;
      div.style.top = getRandomInt(0, window.innerHeight) + "px";
      div.style.left = getRandomInt(0, window.innerWidth) + "px";
      container.appendChild(div);
    });
  });
  fetch("text.json").then((r)=>r.json()).then((d)=>{
    d.forEach((text) => {
      const div = document.createElement("p");
      div.innerText = text;
      div.style.top = getRandomInt(0, window.innerHeight) + "px";
      div.style.left = getRandomInt(0, window.innerWidth) + "px";
      container.appendChild(div);
    })
  })
  for (let i = 0; i <= 120; i+=10) {
    if (Math.random()>0.85) return;
    fetch("assets/"+(i==0?"00":i)+".jpg").then((d) => {
      const div = document.createElement("img");
      div.src = d.url;
      div.style.top = getRandomInt(0, window.innerHeight) + "px";
      div.style.left = getRandomInt(0, window.innerWidth) + "px";
      container.appendChild(div);
    });
  }
});