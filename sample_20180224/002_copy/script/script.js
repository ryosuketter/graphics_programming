(() => {
    let cu;
    let gui;

    window.addEventListener('load', ()=> {
        gui = new Gui();
        cu = new CanvasUtil(document.getElementById('canvas'));
        cu.matchSize();
        cu.clear();

        cu.fillRect(
            5,
            100,
            window.innerWidth / 2,
            window.innerHeight / 2,
            'rgba(205, 0, 0, 0.5)'
        );
    }, false);

    class CanvasUtil {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = this.canvas.getContext('2d');
        }

        clear() {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        }

        fillRect(x,y,w,h,color){
            if(color != null) {
                this.ctx.fillStyle = color;
            }
            this.ctx.fillRect(x,y,w,h);
            gui.log(`x = ${x}, y = ${y}, w = ${w}, h = ${h}`);
            gui.log(`color = ${color}`);
        }

        matchSize(){
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }
})();