// 获取所有导航链接
const navLinks = document.querySelectorAll('.nav-link');

// 添加滚动事件监听器
window.addEventListener('scroll', () => {
    // 遍历每个 section 元素
    let currentSection = "";
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        // 获取元素的顶部和底部位置
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = link.getAttribute('href');
        }
    });

    // 移除所有链接的 active 类，并为当前部分对应的链接添加 active 类
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('.sidebar-navigation a'); // 获取所有导航链接
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault(); // 阻止默认点击行为
      var targetId = this.getAttribute('href'); // 获取目标元素的 ID
      var targetElement = document.querySelector(targetId); // 获取目标元素
      targetElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标元素
    });
  }
});