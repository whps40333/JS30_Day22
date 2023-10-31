// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀 💛

// 取得所有超連結
const triggers = document.querySelectorAll("a");
// const triggers =document.querySelectorAll("a");

//建立 highlight 元素
const highlight = document.createElement("span");
// const highlight = document.createElement("span");

// 設定 CSS
highlight.classList.add("highlight");
// highlight.classList.add("highlight");

// 加入到 body
document.body.appendChild(highlight);
// document.body.appendChild(highlight);

// create function highlight link
function highlightLink() {
  // 取得元素的大小與位置
  const domRect = this.getBoundingClientRect();
  // const domRect = this.getBoundingClientRect();
  console.dir(domRect);
  // console.dir(domRect);

  // 設定 highlight 寬度等於目前元素寬度
  highlight.style.width = `${domRect.width}px`;
  // highlight.style.width = `${domRect.width}px`;
  // 設定 highlight 高度等於目前元素高度
  highlight.style.height = `${domRect.height}px`;
  // highlight.style.height = `${domRect.height}px`;
  // 移動 highlight 元素到目前元素位置，考量因為有 scroll bar
  highlight.style.transform = `translate(${domRect.left + window.scrollX}px, ${
    domRect.top + window.scrollY
  }px)`;
  // highlight.style.transform = `translate(${domRect.left +
  //  window.scrollX}px, ${domRect.top + window.scrollY}px)`;
  //console.log([window.scrollX,window.scrollY]);
}

// 對所有超連結綁定事件
triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
// triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
