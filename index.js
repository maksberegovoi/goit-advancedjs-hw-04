import{a as h,S as w,i as m}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function y(r,t,s){return(await h.get("https://pixabay.com/api/",{headers:{"Content-Type":"application/json"},params:{key:"50733939-cc357c6b4bbe4fcbb86f08b26",q:r,image_type:"photo",page:t,per_page:s,orientation:"horizontal",safesearch:!0}})).data}function f(r,t){const s=r.hits.map(e=>`
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
      `).join("");t.insertAdjacentHTML("beforeend",s),new w(".gallery a",{captionPosition:"bottom",captionSelector:"img",captionDelay:250,captionsData:"alt"}).refresh()}const b=document.querySelector("#search-images"),g=document.querySelector(".form"),d=document.querySelector(".gallery"),a=document.querySelector(".loader-container"),i=document.querySelector(".load-more-btn");let n=1,u=15,c=null;const L=async r=>{if(r.preventDefault(),n=1,c=b.value,!!c.trim()){i.classList.remove("is-active"),a.style.display="flex",d.innerHTML="";try{const t=await y(c,n,u);if(t.hits.length===0)throw new Error;g.reset(),f(t,d),i.classList.add("is-active"),a.style.display="none"}catch{m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,theme:"dark"}),a.style.display="none"}}};g.addEventListener("submit",L);i.addEventListener("click",async()=>{n++,i.classList.remove("is-active");try{a.style.display="flex";const r=await y(c,n,u);if(r.hits.length===0)throw new Error;if(n*u>=r.totalHits)throw i.classList.remove("is-active"),a.style.display="none",new Error;f(r,d),a.style.display="none",i.classList.add("is-active");const t=document.querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2.5,behavior:"smooth"})}}catch{m.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3,theme:"dark"})}});
//# sourceMappingURL=index.js.map
