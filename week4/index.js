window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");

  function displayItems(list) {
    for (let i = 0; i < Math.min(window.innerWidth/31, window.innerHeight/31); i++) {
      const item = list[getRandomInt(0, list.length)];
      const div = document.createElement("div");
      div.className = "product";
      const img = document.createElement("img");
      img.src = item.imgSrc;
      const a = document.createElement("a");
      a.appendChild(img);
      a.href = ".";
      div.appendChild(a);
      div.title = item.name.toLowerCase() + " - $" + item.price;
      container.appendChild(div);
    }
  }

  fetch("https://annaylin.com/100-days/ctw/2150/products.json").then((d)=>d.json()).then((r)=>{
    const items = r.pageProps.data.results.map((item)=>({name: item.name, price: item.regularPrice, imgSrc: item.imageThumbnail}));
    displayItems(items);
  })
});