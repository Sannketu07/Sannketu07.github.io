//��������
function downloadCV() {
    window.location.href = 'file/CV.pdf';
  }
  
//����Ч��function setupTypingAnimation(element) {
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
    // ʹ�� JavaScript �е� scrollTo ������ҳ�������ָ������ϵ����
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
}
function scrollToPortfolio() {
    // ʹ�� JavaScript �е� scrollTo ������ҳ�������ָ������ϵ����
    document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' });
}

//portfolio��graphic��modal����
document.addEventListener('DOMContentLoaded', function () {
    // ��ȡ���о���"data-target-img"���Ե�ͼ��
    const icons = document.querySelectorAll('.fas.fa-plus[data-target-img]');

    // Ϊ��Щͼ����ӵ���¼�������
    icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            // ��ȡĿ��ͼƬ��·��
            const targetSrc = this.getAttribute('data-target-img');
            const modal = document.getElementById('graphicmodal');
            const modalImage = modal.querySelector('img');

            // ����ģ̬���е�ͼƬԴ
            modalImage.src = targetSrc;
        });
    });
});




//portfolio��photo��modal����
document.addEventListener('DOMContentLoaded', function() {
    // ��ȡ������ 'data-gallery' ���Ե���
    const items = document.querySelectorAll('.item[data-gallery]');

    // Ϊÿ������ӵ���¼�������
    items.forEach(item => {
        item.addEventListener('click', function() {
            const galleryNumber = this.getAttribute('data-gallery');
            const imageCount = this.getAttribute('data-count');  // ��ȡÿ�����ϵ�ͼƬ����
            const modalContent = document.getElementById('photomodalImages');
            modalContent.innerHTML = ''; // ���ģ̬���е�����

            // ���ݻ�ȡ��ͼƬ������̬���������ͼƬ
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

