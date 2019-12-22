document.body.style.opacity = 1;
var str = `不管全世界所有人怎么说，我都认为自己的感受才是正确的。无论别人怎么看，我绝不打乱自己的节奏。喜欢的事自然可以坚持，不喜欢怎么也长久不了。`;
var arr = str.split('');
var demo = document.getElementById('demo');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
for (var i = 0; i < arr.length; i++) {
    var span = document.createElement('span');
    span.innerHTML = arr[i];
    demo.appendChild(span);
    var tep = Math.random() * 10;
    var tep2 = Math.random() * 10;
    if (i % 2 == 0) {
        tep = -tep;
    }
    if (i % 3 == 1) {
        tep2 = -tep2;
    }
    span.style.transform = 'translate(' + 30 * tep + 'px,' + 30 * tep2 + 'px)' + ' rotate(' + 50 * tep + 'deg)';
}

var chilren = demo.children;
var gather = function () {//聚集
    for (var i = 0; i < chilren.length; i++) {
        (function (i) {
            var _random = Math.random();
            setTimeout(function () {
                chilren[i].classList.add('active');
            }, _random * 1000);
        })(i);
    }
};
var diffuse = function () {//散开
    for (var i = 0; i < chilren.length; i++) {
        (function (i) {
            var _random = Math.random();
            setTimeout(function () {
                chilren[i].classList.remove('active');
            }, _random * 2000);
        })(i);
    }
};
gather();
setTimeout(function () {
    diffuse();
}, 3000);

//扇子打开
var openFan = function () {
    var lis = document.querySelectorAll("li");
    var click = true;
    var k = 0;
    lis[lis.length - 1].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            var n = Math.ceil(i - lis.length / 2);
            if (click) {
                lis[i].style.transform = 'rotate(' + (n * 16) + 'deg)';
                lis[i].classList.add("li-active");

            } else {
                lis[i].style.transform = 'rotate(360deg)';
                setTimeout(function () {
                    for (var i = 0; i < lis.length; i++) {
                        lis[i].classList.remove("li-active");
                        lis[i].style.transform = 'rotate(0deg)';
                    }
                }, 1000);
            }
        }
        click = !click;
        k = 1;
        showLeftAndRight();
    };
//==============================================
    for (var i = 0; i < lis.length - 1; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {

            this.style.transform = 'rotate(0deg)';
            var leftDeg = 0;
            var rightDeg = 30;
            for (var i = this.index - 1; i >= 0; i--) {
                lis[i].style.transform = 'rotate(' + (leftDeg -= 15) + 'deg)';
            }
            for (var i = this.index + 1; i < lis.length; i++) {
                lis[i].style.transform = "rotate(" + (rightDeg += 15) + "deg)";
            }
        };
    }
};

openFan();//打开扇子

// ====================================================
// 左右侧展示
function showLeftAndRight(){
    var _left = document.getElementById('left');
    var _right = document.getElementById('right');
    var l_childen = _left.children;
    var r_childen = right.children;
    for(var i=0;i<l_childen.length;i++){
        (function(i){
            setTimeout(function(){
                l_childen[i].classList.add('p-active');
                r_childen[i].classList.add('p-active');
            },i*200);
        })(i);
    }
}

