module.exports = {
    setFont: function (w,d) {//w : window d : document
        if(!w || !d){
            return;
        }
        const wd = w.innerWidth;
        const doc = d.documentElement;
        if(w.innerWidth > 640 || w.innerWidth == 640){
            d.style.fontSize = "100px";
        }else{
            d.style.fontSize = 100 * (wd / 640) + "px";
        }
    }
}