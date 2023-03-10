const cdiv = document.querySelector('.grid');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.style.cssText = "border: 1px solid black; height: 50px; width: 50px";  
  cdiv.appendChild(div);
}