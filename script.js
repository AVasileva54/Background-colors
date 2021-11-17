let index = 0;

function changeColors(){
    const colors = ['green', 'red','blue'];
    document.getElementsByTagName("body")[0].
        style.background = colors[index++];
    if(index >= colors.length)
        index = 0

}