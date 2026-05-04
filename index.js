import{a as l,S as f,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const u="55707512-2305e15ffb70fd606127599a4",m="https://pixabay.com/api/";async function p(a,t=1){try{return(await l.get(m,{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t}})).data}catch(e){return console.error("Error fetching images from Pixabay:",e.message),{hits:[],totalHits:0}}}const c=document.querySelector(".gallery");let d=new f(".gallery a");function y(a){const t=a.map(e=>`
      <li class="gallery-item">
        <a class="item-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="img-info-wrapper">
          <p class="img-info">Likes: <span class="info-accent">${e.likes}</span></p>
          <p class="img-info">Views: <span class="info-accent">${e.views}</span></p>
          <p class="img-info">Comments: <span class="info-accent">${e.comments}</span></p>
          <p class="img-info">Downloads: <span class="info-accent">${e.downloads}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),d.refresh()}function g(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.add("active")}function L(){document.querySelector(".loader").classList.remove("active")}function w(a){return new Promise(t=>setTimeout(t,a))}const b=document.querySelector(".form");b.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search query!"});return}g(),h();try{const e=await p(t);if(await w(500),e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits)}catch{n.error({message:"Error fetching images"})}finally{L()}});
//# sourceMappingURL=index.js.map
