//简历下载
function downloadCV() {
    window.location.href = 'file/CV.pdf';
  }
  
//打字效果function setupTypingAnimation(element) {
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typing1 span', {
      strings: ['Welcome to my Page'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      cursorChar: '|'
    });
  
    // new Typed('#typing2 span', {
    //   strings: ['Second message'],
    //   typeSpeed: 60,
    //   backSpeed: 30,
    //   loop: true,
    //   cursorChar: '|'
    // });
  
    // new Typed('#typing3 span', {
    //   strings: ['Third message'],
    //   typeSpeed: 70,
    //   backSpeed: 35,
    //   loop: true,
    //   cursorChar: '|'
    // });
  });
  
  function scrollToContact() {
    // 使用 JavaScript 中的 scrollTo 方法将页面滚动到指定的联系部分
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
}
function scrollToPortfolio() {
    // 使用 JavaScript 中的 scrollTo 方法将页面滚动到指定的联系部分
    document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' });
}

//portfolio中graphic的modal呈现
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有具有"data-target-img"属性的图标
    const icons = document.querySelectorAll('.fas.fa-plus[data-target-img]');

    // 为这些图标添加点击事件监听器
    icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            // 获取目标图片的路径
            const targetSrc = this.getAttribute('data-target-img');
            const modal = document.getElementById('graphicmodal');
            const modalImage = modal.querySelector('img');

            // 更新模态框中的图片源
            modalImage.src = targetSrc;
        });
    });
});




//portfolio中photo的modal呈现
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有有 'data-gallery' 属性的项
    const items = document.querySelectorAll('.item[data-gallery]');

    // 为每个项添加点击事件监听器
    items.forEach(item => {
        item.addEventListener('click', function() {
            const galleryNumber = this.getAttribute('data-gallery');
            const imageCount = this.getAttribute('data-count');  // 获取每个集合的图片数量
            const modalContent = document.getElementById('photomodalImages');
            modalContent.innerHTML = ''; // 清空模态框中的内容

            // 根据获取的图片数量动态创建并添加图片
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

