// JavaScript Document

let scores = {
	beijing: 0,
	xiamen: 0,
	lasa: 0,
	kunming: 0
}

let lastClothesClick = null;
let lastTransportClick = null;
let importantFoodChoice = null;
let operationCompleted = false;

// 存储每一轮人物对话气泡的点击记录
let peopleBubbleClicks = [[], [], []]; // 每个数组代表一个阶段的点击记录

// 处理衣服选项点击事件
function handleClothesClick(id, city) {
    lastClothesClick = { id: id, city: city };
    localStorage.setItem('lastClothesClick', JSON.stringify(lastClothesClick));

    // 根据衣服选项显示相应的人物对话框
    switch (id) {
        case '绿':
            showOnlyOne('green-talk', ['black-talk', 'pink-talk', 'red-talk']);
            break;
        case '黑':
            showOnlyOne('black-talk', ['green-talk', 'pink-talk', 'red-talk']);
            break;
        case '粉':
            showOnlyOne('pink-talk', ['green-talk', 'black-talk', 'red-talk']);
            break;
        case '红':
            showOnlyOne('red-talk', ['green-talk', 'black-talk', 'pink-talk']);
            break;
    }
}

function changeDivContent(targetDiv) {
    // 找到目标 div
    var targetdiv = document.getElementById(targetDiv);
    
    // 改变 div 内部 SVG 的颜色
    var svgIcon = targetdiv.querySelector('svg');
    if (svgIcon) {
        svgIcon.querySelector('path').setAttribute('fill', '#ffffff'); 
    }
    
    // 给 div 添加一个 class
    targetdiv.classList.add('icon-completed');
}


function handleClothesAndTransport() {
	switch(lastClothesClick.id) {
		case '绿':
			showBG('greens');
			break;
		case '黑':
			showBG('blacks');
			break;
		case '粉':
			showBG('pinks');
			break;
		case '红':
			showBG('reds');
			break;
	}
}

function showOnlyOne(blockID, noneIDs) {
	document.getElementById(blockID).classList.remove('hidden');
	document.getElementById(blockID).classList.add('visible');
	
	noneIDs.forEach(function(divId) {
				var div = document.getElementById(divId);
				div.classList.remove('visible');
				div.classList.add('hidden');
	});
}

function handleTransportClick(id, city) {
    lastTransportClick = {id: id, city: city};
    // 保存到localStorage
    localStorage.setItem('lastTransportClick', JSON.stringify(lastTransportClick));
}




function showBG(jam) {
	document.getElementById(jam).classList.remove('hidden');
	document.getElementById(jam).classList.add('visible');
}

var selectedFoods = [];

function handleFoodClick(id) {
    if (!selectedFoods.includes(id)) {
         selectedFoods.push(id);
    }
}

function completeOperation() {
        operationCompleted = true;
    }

function validateAndProceed() {
        // 首先检查是否完成了选择
        if (!operationCompleted) {
            alert('请先制作一碗小料哦~');
            return;
        } else {
			switchContent('people', ['transport', 'food', 'main-clothes']);
			changeDivContent('icf')
		}
}

function handleFinalChoice() {
    var hasSesame = selectedFoods.includes('麻酱');
    var hasSeafood = selectedFoods.includes('蚝油');
    var hasSesameOil = selectedFoods.includes('麻油');

            // 根据选择显示对应的背景盘子
            document.querySelectorAll('.plate').forEach(function(plate) {
                plate.classList.add('hidden');
            });
	

            if (hasSesame) {
                document.getElementById('麻酱碟').classList.remove('hidden');
            } else if (hasSeafood) {
                document.getElementById('海鲜酱碟').classList.remove('hidden');
            } else if (hasSesameOil) {
                document.getElementById('油碟').classList.remove('hidden');
            } else {
                // 默认显示油碟
                document.getElementById('油碟').classList.remove('hidden');
            }
        }


// 处理人物对话气泡点击事件
function handlePeopleBubbleClick(stage, bubbleType) {
    peopleBubbleClicks[stage].push({ bubbleType: bubbleType });
}

// 计算最终得分和决定跳转页面
function calculateFinalScores() {
    // 根据用户是否选择了重要的食物选项来计算得分
    switch (importantFoodChoice) {
        case '麻酱':
            scores['beijing'] += 25; // 麻酱 - 北京 +25
            break;
        case '蚝油':
            scores['xiamen'] += 25; // 蚝油 - 厦门 +25
            break;
        case '麻油':
            scores['kunming'] += 25;
            break;
        default:
            // 默认显示油碟背景，按照题目描述，默认加25分给拉萨
            scores['lasa'] += 25;
            break;
    }

    // 根据人物对话气泡的点击记录计算分数
    // 第一阶段规则
    peopleBubbleClicks[0].forEach(bubble => {
        switch (bubble.bubbleType) {
            case '恭喜':
                scores['kunming'] += 10;
				scores['xiamen'] += 10;// 昆明和厦门 +10
                break;
            case '你家农产品':
                scores['lasa'] += 10; // 拉萨 +10
                break;
            case '通路':
                scores['beijing'] += 10; // 北京 +10
                break;
        }
    });

    // 第二阶段规则
    peopleBubbleClicks[1].forEach(bubble => {
        switch (bubble.bubbleType) {
            case '升职':
                scores['beijing'] += 10; // 北京 +10
                break;
            case '没事':
                scores['lasa'] += 10;
				scores['kunming'] += 10;
				scores['xiamen'] += 10;// 拉萨、昆明、厦门 +10
                break;
            case '通路':
                scores['beijing'] += 10; // 北京 +10
                break;
        }
    });

    // 第三阶段规则
    peopleBubbleClicks[2].forEach(bubble => {
        switch (bubble.bubbleType) {
            case '有名':
                scores['xiamen'] += 10; // 厦门 +10
                break;
            case '海鲜':
                scores['lasa'] += 10; // 拉萨 +10
                scores['kunming'] += 10; // 昆明 +10
                break;
            case '下次':
                scores['beijing'] += 10; // 北京 +10
                break;
        }
    });
	console.log(scores); 
    // 找出最高分的城市
    let maxScore = -Infinity;
    let maxCity = null;

    Object.keys(scores).forEach(city => {
        if (scores[city] > maxScore) {
            maxScore = scores[city];
            maxCity = city;
        } else if (scores[city] === maxScore) {
            // 如果分数相同，按照指定的优先级顺序进行选择
            if (city === 'kunming' && maxCity !== 'xiamen' && maxCity !== 'beijing' && maxCity !== 'lasa') {
                maxCity = city;
            } else if (city === 'xiamen' && maxCity !== 'beijing' && maxCity !== 'lasa') {
                maxCity = city;
            } else if (city === 'beijing' && maxCity !== 'lasa') {
                maxCity = city;
            }
        }
    });

    // 根据最高分的城市跳转到相应的页面
    switch (maxCity) {
        case 'beijing':
            window.location.href = '../result/beijing.html';
            break;
        case 'xiamen':
            window.location.href = '../result/xiamen.html';
            break;
        case 'lasa':
            window.location.href = '../result/lasa.html';
            break;
        case 'kunming':
            window.location.href = '../result/kunming.html';
            break;
    }
}

function switchContent(main, nmains) {
    // 切换内容
    var mainDiv = document.getElementById(main);
    mainDiv.classList.add('expanded');
    var mainChildren = mainDiv.children;
    for (var i = 0; i < mainChildren.length; i++) {
        var child = mainChildren[i];
        if (child.id.includes('children')) {
            child.classList.remove('hidden');
        } else if (child.classList.contains('next')) {
            child.classList.remove('hidden');
        } else if (child.classList.contains('icon-container')) {
            child.classList.add('hidden');
        }
    }

    nmains.forEach(function(nmain) {
        var nmainDiv = document.getElementById(nmain);
        nmainDiv.classList.remove('expanded');
        nmainDiv.classList.add('collapsed');
        
        var nmainChildren = nmainDiv.children;
        for (var j = 0; j < nmainChildren.length; j++) {
            var child = nmainChildren[j];
            if (child.id.includes('children')) {
                child.classList.add('hidden');
            } else if (child.classList.contains('next')) {
                child.classList.add('hidden');
            } else if (child.classList.contains('icon-container')) {
                child.classList.remove('hidden');
            }
        }
    });
}

//// 页面加载时恢复选择
//document.addEventListener('DOMContentLoaded', function() {
//    let savedClothesClick = JSON.parse(localStorage.getItem('lastClothesClick'));
//    if (savedClothesClick) {
//        lastClothesClick = savedClothesClick;
//    }
//    
//    let savedTransportClick = JSON.parse(localStorage.getItem('lastTransportClick'));
//    if (savedTransportClick) {
//        lastTransportClick = savedTransportClick;
//    }
//});

 document.querySelectorAll('.question').forEach(div => {
      const id = div.id;
      let newColor;
      if (id.includes('green-')) {
        newColor = '#AEE1E3';
      } else if (id.includes('black-')) {
        newColor = '#B1B1B1';
      } else if (id.includes('red-')) {
        newColor = '#C2A98F';
      } else if (id.includes('pink-')) {
        newColor = '#F9B8C4';
      }

      let lastClickedSVG = null;

      div.querySelectorAll('svg path').forEach(path => {
        path.addEventListener('click', function() {
          if (lastClickedSVG) {
            lastClickedSVG.setAttribute('fill', '#E3F8F9'); // 恢复原来的颜色
          }
          path.setAttribute('fill', newColor);
          lastClickedSVG = path;
        });
      });
    });


    function saveNameAndRedirect(event) {
        event.preventDefault(); // 阻止表单的默认提交行为
        const userName = document.getElementById('userInput').value;
        localStorage.setItem('userName', userName); // 将用户名保存到localStorage
        window.location.href = "../result/beijing.html"; // 跳转到beijing.html
        return false;
    }
    
