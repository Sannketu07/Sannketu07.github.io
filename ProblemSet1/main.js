function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        document.querySelector("#welcomeMessage").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

// 页面加载完毕时，开始打字效果
window.onload = function() {
    document.getElementById("welcomeMessage").style.display = "block";
    typeWriter("这是一条招募广告<br>O₂Bar正在寻找像你一样的酒精艺术家<br>你愿意加入我们吗？", 0, function(){
        document.getElementById("startButton").style.display = "inline-block";
    });
}

// 点击开始按钮后显示输入框并隐藏欢迎信息和开始按钮
document.getElementById("startButton").addEventListener("click", function() {
    // 隐藏欢迎信息
    document.getElementById("welcomeMessage").style.display = "none";
    // 隐藏开始按钮
    this.style.display = "none"; // "this" 关键字在这里指代被点击的 startButton
    // 显示输入框
    document.getElementById("nameForm").style.display = "block";
});


// 处理名字提交
        function submitName() {
            var name = document.getElementById("nameInput").value.trim();
            if (name) {
                document.getElementById("nameForm").style.display = "none"; // 隐藏输入框
                document.getElementById("welcomeMessage").style.display = "block"; // 确保欢迎信息可见
                document.getElementById("welcomeMessage").innerHTML = ""; // 清空当前的欢迎信息
                // 使用typeWriter函数展示定制化的信息
                typeWriter(`好的！${name}，在正式成为 O₂Bar 的调酒师之前，你需要先通过一个小考核`, 0, function() {
                    // 打字效果完成后显示开始游戏按钮
                // showReadyButton();
                document.getElementById("game").style.display = "block";
                window.OpenLevel(3);
                document.getElementById("very-hard").style.display = "inline-block"; // 显示开始游戏按钮
        document.getElementById("rules-btn").style.display = "inline-block"; // 显示规则按钮
                });
            } else {
                alert("请输入你的名字！");
            }
        }
        // 显示“我准备好了！”按钮，点击后直接开始“Easy”难度的游戏
        function showReadyButton() {
            var readyButton = document.createElement("button");
            readyButton.textContent = "我准备好了！";
            document.body.appendChild(readyButton);
            readyButton.addEventListener('click', function() {
                this.style.display = "none"; // 删除“我准备好了！”按钮
                // 显示“START”和“RULES”按钮
        //         document.getElementById("game").style.display = "block";
        //         window.OpenLevel(3);
        //         document.getElementById("very-hard").style.display = "inline-block"; // 显示开始游戏按钮
        // document.getElementById("rules-btn").style.display = "inline-block"; // 显示规则按钮
            });
        }

// Enter键监听
document.getElementById("nameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault(); // 阻止默认行为
        submitName(); // 提交名字
    }
});



// 假设所有游戏控制按钮都在一个ID为'game-controls'的容器内
document.getElementById('game').addEventListener('click', function(event) {
    var target = event.target; // 获取点击的目标元素

    if (target.id === 'very-hard') {
        // 如果点击的是"START"按钮
        window.OpenLevel(3); // 调用开始游戏的函数
    } else if (target.id === 'rules-btn') {
        // 如果点击的是"RULES"按钮
        ShowRules(); // 显示游戏规则
    }
});


var game,level,color=["red","blue","yellow","green","purple","lightgreen","lightblue","orange","brown","pink"],water=[],w=[],currentLevel,clicked=[],transferring=false,t=false,size=1,sizechange=0.05,won=false,moves=0;
var testTubePosition = {
    // 0: [[-110,130], [-20, 130], [70, 130], [-65,320], [15, 320]],
    // 1: [[-110,130], [-20, 130], [70, 130],[-110,320], [-20, 320], [70, 320]],
    // 2: [[-140,130],[-60,130],[20,130],[100,130],[-110,320], [-20, 320], [70, 320]],
    3: [[-140,130],[-60,130],[20,130],[100,130],[-140,320],[-60,320],[20,320],[100,320]],
    7: [[-140,100],[-60,100],[20,100],[100,100],[-140,275],[-60,275],[20,275],[100,275],[-140,450],[-60,450],[20,450],[100,450]],
}

window.get = function() {
    game = document.getElementById("game");
    level = document.getElementById("level");
}

window.OpenLevel = function(x) {
    moves = 0;
    currentLevel=x;
    won=false;
    level.style.display = "block";
    level.innerHTML = "";
    water=[];
    let a = [],c=0;
    for (let i = 0; i < x+3; i++) {
        for (let j = 0; j < 4; j++) {
            a.push(color[i]);
        }
    }
    a=shuffle(a);
    for (let i = 0; i < x+3; i++) {
        water[i]=[];
        for (let j = 0; j < 4; j++) {
            water[i].push(a[c]);
            c++;
        }
    }
    water.push(["transparent","transparent","transparent","transparent"],["transparent","transparent","transparent","transparent"]);
    w = water.map((a)=>[...a]);
    //console.log(water[0]);
    ApplyInfo();
}

function ApplyInfo(a = water) {
    if (!won) {
        let d=0,heading=["EASY","MEDIUM","HARD","VERY HARD","","","","IMPOSSIBLE"][currentLevel];
        level.innerHTML = `<div id = 'lvl-heading'>${heading}</div>`;
        for (let i of testTubePosition[currentLevel]) {
            level.innerHTML += `<div class = "test-tube" style="top:${i[1]}px;left:calc(50vw + ${i[0]}px);transform:rotate(0deg);" onclick="Clicked(${d});">
                <div class="colors" style = "background-color:${a[d][0]};top:100px;"></div>
                <div class="colors" style = "background-color:${a[d][1]};top:70px;"></div>
                <div class="colors" style = "background-color:${a[d][2]};top:40px;"></div>
                <div class="colors" style = "background-color:${a[d][3]};top:10px;"></div>
            </div>`;
            d++;
        }
        level.innerHTML+=`<div id = "restart" class = "game-buttons" onclick = "Restart();">RESTART</div><div id = "home" class = "game-buttons" onclick = "ShowHomepage();">HOME</div><div id = "moves">Moves: ${moves}</div>`;
    }
}

window.Clicked = function(x) {
    //console.log(x);
    if (!transferring) {
        if (clicked.length == 0) {
            clicked.push(x);
            document.getElementsByClassName("test-tube")[x].style.transition = "0.2s linear";
            document.getElementsByClassName("test-tube")[x].style.transform = "scale(1.08)";
        }
        else {
            clicked.push(x);
            let el = document.getElementsByClassName("test-tube")[clicked[0]];
            el.style.transform = "scale(1) rotate(0deg)";
            if (clicked[0]!=clicked[1]) {
                el.style.transition = "1s linear";
                moves++;
                document.getElementById("moves").innerHTML = "Moves: "+moves;
                Transfer(...clicked);
            }
            clicked = [];
        }
    }
}

function TransferAnim(a,b) {
    let el = document.getElementsByClassName("test-tube")[a];
    transferring = true;
    el.style.zIndex = "100";
    el.style.top = `calc(${testTubePosition[currentLevel][b][1]}px - 90px)`;
    el.style.left = `calc(50vw + ${testTubePosition[currentLevel][b][0]}px - 70px)`;
    el.style.transform = "rotate(75deg)";
    setTimeout(function() {
        el.style.transform = "rotate(90deg)";
    },1000)
    setTimeout(function() {
        el.style.left = `calc(50vw + ${testTubePosition[currentLevel][a][0]}px)`;
        el.style.top = `calc(${testTubePosition[currentLevel][a][1]}px)`;
        el.style.transform = "rotate(0deg)";
    },2000);
    setTimeout(function() {
        el.style.zIndex = "0";
        transferring=false;
    },3000)
}

function Transfer(a,b) {
    /*
    a represents the index of the glass from which water is to ne taken
    b represents the index of the glass to which water is to be transferred
    constraints:
    b should have white
    last element of a = last non-white element in b
    */
    if (!water[b].includes("transparent") || water[a] == ["transparent","transparent","transparent","transparent"]) {
        moves-=1;
        document.getElementById("moves").innerHTML = "Moves: "+moves;
        return;
    }
    let p,q,r=false,s=false,count=0,c=0;
    for (let i = 0; i < 4; i++) {
        if (((water[a][i]!="transparent" && water[a][i+1]=="transparent") || i === 3) && !r) {
            r=true;
            p=[water[a][i],i];
            if (water[a].map(function(x) {
                if (x=="transparent" || x==p[0]) {return 1;} else {return 0;}
            }).reduce((x,y)=>x+y) === 4) {
                p.push(i+1)
            }
            else {
                for (let j = 1; j < 4; j++) {
                    if (i-j>=0 && water[a][i-j]!=p[0]) {
                        p.push(j);
                        break;
                    }
                }
            }
        }
        if (((water[b][i]!="transparent" && water[b][i+1]=="transparent") || water[b][0]=="transparent") && !s) {
            s=true;
            q=[water[b][i],i,water[b].map((x)=>x= (x=="transparent") ? 1 : 0).reduce((x,y)=>x+y)];
        }
    }
    //console.log(p);
    if (q[0]!="transparent" && p[0]!=q[0]) {
        moves-=1;
        document.getElementById("moves").innerHTML = "Moves: "+moves;
        return;
    }
    for (let i = 3; i >= 0; i--) {
        if ((water[a][i]==p[0] || water[a][i]=="transparent") && count<q[2]) {
            if (water[a][i]==p[0]) {
                count++;
            }
            water[a][i]="transparent";
        }
        else {
            break;
        }
    }
    //console.log(count);
    //console.log(q);
    c=count;
    setTimeout(function() {WaterDec(p,a,c);},1010);
    setTimeout(function() {WaterInc(p,q,b,c);},1010);
    for (let i = 0; i < 4; i++) {
        if (water[b][i]=="transparent" && count>0) {
            count--;
            water[b][i]=p[0];
        }
    }
    setTimeout(function() {ApplyInfo();},3020);
    setTimeout(function() {TransferAnim(a,b);},10);
    setTimeout(Won,3000);
}

function WaterDec(p,a,count) {
    p[1] = 3-p[1];
    //console.log(count*30);
    document.getElementsByClassName("test-tube")[a].innerHTML += `<div id = black-bg" style = "top:calc(10px + ${p[1]*30}px - 1px);"></div>`;
    setTimeout(function() {document.getElementById("black-bg").style.height = count*30+1 + "px";},50);
    setTimeout(function() {
        document.getElementsByClassName("test-tube")[a].innerHTML = `
            <div class="colors" style = "background-color:${water[a][0]};top:100px;"></div>
            <div class="colors" style = "background-color:${water[a][1]};top:70px;"></div>
            <div class="colors" style = "background-color:${water[a][2]};top:40px;"></div>
            <div class="colors" style = "background-color:${water[a][3]};top:10px;"></div>`;
    },1050);
}

function WaterInc(p,q,b,count) {
    q[1] = 4-q[1];
    q[1]-= (q[0]!="transparent" ? 1: 0);
    document.getElementsByClassName("test-tube")[b].innerHTML += `<div id = "colorful-bg" style = "background-color:${p[0]};top:calc(10px + ${q[1]*30}px);"></div>`;
    setTimeout(function() {
        document.getElementById("colorful-bg").style.height = count*30+1 + "px";
        document.getElementById("colorful-bg").style.top = `calc(10px + ${q[1]*30}px - ${count*30}px)`;
    },50);
}

window.Restart = function() {
    moves = 0;
    water = w.map((a)=>[...a]);
    won=false;
    ApplyInfo(w);
}

window.ShowHomepage = function() {
    document.getElementById("level").style.display = "none";
}

function Won() {
    for (let i of water) {
        if (i[0]!=i[1]||i[1]!=i[2]||i[2]!=i[3]) {
            return;
        }
    }
    won=true;
    //console.log("hello");
    level.innerHTML = `<div id="won">YOU WON</div><div id = "restart" class = "game-buttons" onclick = "Restart();">RESTART</div><div id = "home" class = "game-buttons" onclick = "ShowHomepage();">HOME</div>`;
}

function shuffle(x) {
    let a=[],len=x.length;
    for (let i = 0; i < len; i++) {
        let n = Math.floor(Math.random()*x.length);
        a.push(x[n]);
        x.splice(n,1);
    }
    return a;
}

window.ShowRules = function() {
    document.getElementById("rules-page").style.display = "block";
    setTimeout(function() {
        document.getElementById("rules-page").style.opacity = "1";
    },50);
}

window.HideRules = function() {
    setTimeout(function() {
        document.getElementById("rules-page").style.display = "none";
    },500);
    document.getElementById("rules-page").style.opacity = "0";
}
