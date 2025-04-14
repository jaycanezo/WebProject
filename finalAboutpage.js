const images = [
    'https://i.ytimg.com/vi/3hwQ-rtj9I8/maxresdefault.jpg',
    'https://languagetraining.com/wp-content/uploads/2017/11/Business-etiquette.jpg',
    'https://th.bing.com/th/id/OIP.EPnz9q7W1uPDPwaMzQva7gHaFj?rs=1&pid=ImgDetMain',
    'https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/working-on-plans-in-board-room-scaled.jpg',
    'https://wallpapercave.com/wp/wp6673691.jpg',
    'https://th.bing.com/th/id/OIP.9Zt4jAYxwmOUleglqTCeRwHaE9?rs=1&pid=ImgDetMain',
    'https://freerangestock.com/sample/149108/portrait-of-group-of-multiethnic-business-people.jpg'
];

document.getElementById('carousel').innerHTML = images.map((src, i) => 
    `<div class="item" id="slide-${i}">
        <img src="${src}" alt="Image ${i+1}" width="418" height="418">
    </div>`
).join('');
  