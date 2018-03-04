(() => {
    let cu;
    let gui;

    window.addEventListener('load', () => {
        gui = new Gui();
        cu = new CanvasUtil(document.getElementById('canvas'));

        cu.matchSize();
        cu.clear();

        cu.fillRect(
            50,
            100,
            window.innerWidth / 2,
            window.innerHeight / 2,
            'rgba(255, 0, 0, 0.5)'
        );

        cu.fillCircle(
            window.innerWidth / 2,
            window.innerHeight / 2,
            200,
            'rgba(0, 255, 0, 0.5)'
        );

    }, false);

    class CanvasUtil {

        constructor(canvas){
            this.canvas = canvas;
            this.ctx = this.canvas.getContext('2d');
        }

        clear() {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        }

        fillCircle(x, y, rad, color) {
            
            if(color != null){
                this.ctx.fillStyle = color;
            }
            this.ctx.beginPath();
            this.ctx.arc(x,y,rad,0,Math.PI * 2,false);
            this.ctx.closePath();
            this.ctx.fill();
        }

        fillRect(x,y,w,h,color){
            if(color != null){
                this.ctx.fillStyle = color;
            }
            this.ctx.fillRect(x,y,w,h);
        }

        matchSize() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        
    }
}) ();