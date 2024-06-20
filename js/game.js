console.log("game.js is running");
function startDrag(event) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData("Text", event.target.id);
    event.target.style.opacity = '0.4';
}
function endDrag(event) {
    event.target.style.opacity = '';
    event.dataTransfer.clearData("Text");
}
function allowDrop(event) {
    event.preventDefault();
}
function dragOver(event) {
    if (
        (event.target.className == "pieceContainer") ||
        (event.target.id == "pieceContainers")
    ) {
        return false;
    } else {
        return true;
    }
}
function dropPiece(event) {
    event.preventDefault();
    var draggedElement = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(draggedElement));
    checkPuzzle();
}
function checkPuzzle() {
    if (
        (document.getElementById('/img/image1x1').parentNode.id == 'one') &&
        (document.getElementById('/img/image1x2.png').parentNode.id == 'two') &&
        (document.getElementById('/img/image1x3.png').parentNode.id == 'three') &&
        (document.getElementById('/img/image2x1.png').parentNode.id == 'four') &&
        (document.getElementById('/img/image2x3.png').parentNode.id == 'five') &&
        (document.getElementById('/img/image2x2.png').parentNode.id == 'six') &&
        (document.getElementById('/img/image3x1.png').parentNode.id == 'seven') &&
        (document.getElementById('/img/image3x2.png').parentNode.id == 'eight') &&
        (document.getElementById('/img/image1=3x3.png').parentNode.id == 'nine')
    ) {
        alert('Congratulations!');
    }
}
function checkBrowserSupport() {
    if (
        (navigator.userAgent.toLowerCase().indexOf('msie ') > -1) ||
        ((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1))
    ) {
        alert("verander van browser");
    }
}

