window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  let links = [];
  // svgs from -- https://commons.wikimedia.org/w/index.php?search=oracle.svg&title=Special:MediaSearch&go=Go&type=image
  fetch("links.json").then((r)=>r.json()).then((d)=>{
    links = d;
    for (let i = 0; i < Math.min((window.innerWidth/35),(window.innerHeight/25)); i++) {
      fetch(links[getRandomInt(0,links.length)]).then((d)=>d.blob()).then((r)=>{
        const a = document.createElement('a');
        const img = document.createElement('img');
        img.src = URL.createObjectURL(r);
        a.appendChild(img)
        a.href = ".";
        container.appendChild(a);
      })
    }
  });
});