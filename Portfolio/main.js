//简历下载
function downloadCV() {
    window.location.href = 'file/CV.pdf';
  }


  document.querySelector('.backtotop').addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认的锚点点击行为
    window.scrollTo({top: 0, behavior: 'smooth'}); // 平滑滚动到页面顶部
});



    ////拖动效果
    function allowDrop(ev) {
        ev.preventDefault();
    }
    
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.className);
    }
    
    
    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        
        // 根据拖动元素的类名滚动到不同的 section
        switch(data) {
            case "draggable graphic":
                document.getElementById('Graphic').scrollIntoView({ behavior: 'smooth' });
                break;
            case "draggable photo":
                document.getElementById('Photo').scrollIntoView({ behavior: 'smooth' });
                break;
            case "draggable project":
                document.getElementById('Project').scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                console.error("Invalid draggable class");
        }
    }
  
//打字效果function setupTypingAnimation(element) {
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typing1 span', {
      strings: ['while (computing meets creativity) {'],
      typeSpeed: 50,
      backSpeed: 10,
      loop: true,
      cursorChar: '|'
    });
  
    new Typed('#typing2 span', {
        strings: [
            'let&nbsp;ran&nbsp;=&nbsp;{<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;degrees:&nbsp;["Computer&nbsp;Science",&nbsp;<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Advertising"],<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;skills:&nbsp;["Web&nbsp;Design",<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Data&nbsp;Analysis",<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Creative&nbsp;Campaigns",<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Market&nbsp;Strategy"],<br>' +
            '}'
        ],
        typeSpeed: 20,
        backSpeed: 0,
        loop: false,
        cursorChar: '|'
    });
    
  
    // new Typed('#typing3 span', {
    //   strings: ['Third message'],
    //   typeSpeed: 70,
    //   backSpeed: 35,
    //   loop: true,
    //   cursorChar: '|'
    // });
  });

//滚动效果
  function scrollToContact() {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
}
function scrollToPortfolio() {
    document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' });
}

//portfolio中graphic的modal呈现
document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.fas.fa-plus[data-target-img]');

    icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            const targetSrc = this.getAttribute('data-target-img');
            const modal = document.getElementById('graphicmodal');
            const modalImage = modal.querySelector('img');
            modalImage.src = targetSrc;
        });
    });
});




//portfolio中photo的modal呈现
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item[data-gallery]');

    items.forEach(item => {
        item.addEventListener('click', function() {
            const galleryNumber = this.getAttribute('data-gallery');
            const imageCount = this.getAttribute('data-count'); 
            const modalContent = document.getElementById('photomodalImages');
            modalContent.innerHTML = ''; 
            for (let i = 1; i <= imageCount; i++) {
                const imgPath = `img/photo/${galleryNumber}/${i}.JPG`.replace('\\', '/');
                const imgElement = document.createElement('img');
                imgElement.src = imgPath;
                imgElement.className = 'img-fluid rounded';
                imgElement.alt = `Photo ${i}`;
                modalContent.appendChild(imgElement);
            }
        });
    });
});

