import  './news-article-element.js';
import { topHeadlinesUrl } from './newsApi.js';

window.addEventListener('load', () => {
  getNews();
});

async function getNews() {
  const main = document.querySelector('main');


  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();

  json.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });

  let dummy = {
    author: "Cameron Faulkner", 
    title: "Apple now sells five different iPads - The Verge", 
    description: "Recommending an iPad used to be simpler. White or … two different connectors and two different Appl…", 
    url: "https://www.theverge.com/tldr/2019/3/19/18271636/apple-five-ipads-ipad-pro-mini-air",
    urlToImage: "https://cdn.vox-cdn.com/thumbor/9dhCm57j8BxAXESWQRWKhf7j7Vw=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7723631/jbareham_160329_1003_0050_2016.0.jpeg"
  
  };
}
