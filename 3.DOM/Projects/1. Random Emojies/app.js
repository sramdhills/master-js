const btn = document.querySelector("#emoji");

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

btn.addEventListener('mouseover', () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
})

btn.addEventListener("mouseout", () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
}) 

btn.addEventListener("click", () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)] 
})