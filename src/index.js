import './stylus/index.stylus'

function component() {
    var ele = document.createElement('div');
    ele.innerHTML = '你好，世界！';
    return ele;
}

document.body.appendChild(component())