import{a as p,S as u,i as d}from"./assets/vendor-67BWzQEt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(i){return p.get("https://pixabay.com/api/",{headers:{"Content-Type":"application/json"},params:{key:"50733939-cc357c6b4bbe4fcbb86f08b26",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}function m(i,r){const o=i.hits.map(e=>`
          <li class="gallery-item">
            <a  class="gallery-link" href=${e.largeImageURL}>
              <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
              width="360"
               />
            </a>
            <ul class="gallery-info">
              <li>
                <p>Likes</p>
                <p>${e.likes}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${e.views}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${e.comments}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${e.downloads}</p>
              </li>
            </ul>
          </li>
      `).join("");r.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionPosition:"bottom",captionSelector:"img",captionDelay:250,captionsData:"alt"}).refresh()}const y=document.querySelector("#search-images"),c=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader-container"),g=i=>{i.preventDefault();const r=y.value;r.trim()&&(a.style.display="flex",l.innerHTML="",f(r).then(o=>{if(o.hits.length===0)throw new Error;c.reset(),m(o,l),a.style.display="none"}).catch(o=>{d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,theme:"dark"}),a.style.display="none"}))};c.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
