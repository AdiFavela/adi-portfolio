if (!customElements.get('design-flow-sparkles')) {
class DesignFlowSparkles extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;
    this.style.display = 'block';
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 560;
    canvas.style.cssText = 'display:block;width:100%;max-width:600px;margin:0 auto;background:transparent;';
    this.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const BLUSH = [232,164,154];
    const CREAM = [237,229,216];
    const GOLD  = [220,190,130];

    function rgba(col,a){ return `rgba(${col[0]},${col[1]},${col[2]},${a})`; }

    const CUR=[300,44];
    const R=[75,130], CTX=[300,130], CON=[525,130];
    const UG=[75,196], ENV=[300,196], REG=[525,196];
    const BOX_Y=240;
    const DD=[300,295];
    const CL=[100,370], EF=[300,370], CF=[500,370];
    const BO=[300,450];
    const P=10, LW=2;

    function drawSparkle(x, y, size, alpha, rotation){
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = rgba(GOLD, 1);
      ctx.fillStyle   = rgba(GOLD, 1);
      ctx.lineWidth   = 1.2;
      ctx.lineCap     = 'round';
      ctx.translate(x, y);
      ctx.rotate(rotation);
      const long = size, short = size * 0.35;
      ctx.beginPath();
      ctx.moveTo(0, -long);
      ctx.lineTo(0, long);
      ctx.moveTo(-long, 0);
      ctx.lineTo(long, 0);
      ctx.moveTo(-short, -short);
      ctx.lineTo(short, short);
      ctx.moveTo(short, -short);
      ctx.lineTo(-short, short);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, size*0.18, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    }

    const SPARKLES = [
      { x: BO[0]-95,  y: BO[1]+36, ts: 0.88, te: 0.95 },
      { x: BO[0]+95,  y: BO[1]+36, ts: 0.89, te: 0.96 },
      { x: BO[0]-60,  y: BO[1]-38, ts: 0.90, te: 0.97 },
      { x: BO[0]+60,  y: BO[1]-38, ts: 0.91, te: 0.98 },
    ];

    const ELEMS = [
      {kind:'text',  x:CUR[0], y:CUR[1], txt:'Curiosity',         size:19, w:600, col:BLUSH, ts:0.00, te:0.05},
      {kind:'vline', x1:CUR[0], y1:CUR[1]+P, x2:CUR[0], y2:88,   col:BLUSH, ts:0.05, te:0.09},
      {kind:'hline', x1:R[0],   y1:88,   x2:CON[0],  y2:88,      col:BLUSH, ts:0.09, te:0.16},
      {kind:'vline', x1:R[0],   y1:88,   x2:R[0],    y2:R[1]-P,  col:BLUSH, ts:0.16, te:0.20},
      {kind:'vline', x1:CTX[0], y1:88,   x2:CTX[0],  y2:CTX[1]-P,col:BLUSH, ts:0.16, te:0.20},
      {kind:'vline', x1:CON[0], y1:88,   x2:CON[0],  y2:CON[1]-P,col:BLUSH, ts:0.16, te:0.20},
      {kind:'text',  x:R[0],   y:R[1],   txt:'Research',     size:15, w:400, col:CREAM, ts:0.20, te:0.26},
      {kind:'text',  x:CTX[0], y:CTX[1], txt:'Context',      size:15, w:400, col:CREAM, ts:0.20, te:0.26},
      {kind:'text',  x:CON[0], y:CON[1], txt:'Constraints',  size:15, w:400, col:CREAM, ts:0.20, te:0.26},
      {kind:'vline', x1:R[0],   y1:R[1]+P,   x2:R[0],   y2:UG[1]-P,  col:BLUSH, ts:0.26, te:0.30},
      {kind:'vline', x1:CTX[0], y1:CTX[1]+P, x2:CTX[0], y2:ENV[1]-P, col:BLUSH, ts:0.26, te:0.30},
      {kind:'vline', x1:CON[0], y1:CON[1]+P, x2:CON[0], y2:REG[1]-P, col:BLUSH, ts:0.26, te:0.30},
      {kind:'text',  x:UG[0],  y:UG[1],  txt:'User Goals',   size:13, w:300, col:CREAM, ts:0.30, te:0.36},
      {kind:'text',  x:ENV[0], y:ENV[1], txt:'Environment',  size:13, w:300, col:CREAM, ts:0.30, te:0.36},
      {kind:'text',  x:REG[0], y:REG[1], txt:'Regulations',  size:13, w:300, col:CREAM, ts:0.30, te:0.36},
      {kind:'vline', x1:R[0],   y1:UG[1]+P,  x2:R[0],   y2:BOX_Y, col:BLUSH, ts:0.36, te:0.40},
      {kind:'vline', x1:ENV[0], y1:ENV[1]+P, x2:ENV[0], y2:BOX_Y, col:BLUSH, ts:0.36, te:0.40},
      {kind:'vline', x1:CON[0], y1:REG[1]+P, x2:CON[0], y2:BOX_Y, col:BLUSH, ts:0.36, te:0.40},
      {kind:'hline', x1:R[0],   y1:BOX_Y, x2:CON[0], y2:BOX_Y,   col:BLUSH, ts:0.40, te:0.46},
      {kind:'vline', x1:300, y1:BOX_Y, x2:300, y2:DD[1]-P,       col:BLUSH, ts:0.46, te:0.51},
      {kind:'text',  x:DD[0], y:DD[1], txt:'Design Decisions', size:19, w:600, col:BLUSH, ts:0.51, te:0.57},
      {kind:'vline', x1:DD[0], y1:DD[1]+P, x2:DD[0], y2:DD[1]+42, col:BLUSH, ts:0.57, te:0.61},
      {kind:'hline', x1:CL[0], y1:DD[1]+42, x2:CF[0], y2:DD[1]+42, col:BLUSH, ts:0.61, te:0.67},
      {kind:'vline', x1:CL[0], y1:DD[1]+42, x2:CL[0], y2:CL[1]-P, col:BLUSH, ts:0.67, te:0.71},
      {kind:'vline', x1:EF[0], y1:DD[1]+42, x2:EF[0], y2:EF[1]-P, col:BLUSH, ts:0.67, te:0.71},
      {kind:'vline', x1:CF[0], y1:DD[1]+42, x2:CF[0], y2:CF[1]-P, col:BLUSH, ts:0.67, te:0.71},
      {kind:'text',  x:CL[0], y:CL[1], txt:'Clarity',    size:15, w:400, col:CREAM, ts:0.71, te:0.76},
      {kind:'text',  x:EF[0], y:EF[1], txt:'Efficiency', size:15, w:400, col:CREAM, ts:0.71, te:0.76},
      {kind:'text',  x:CF[0], y:CF[1], txt:'Confidence', size:15, w:400, col:CREAM, ts:0.71, te:0.76},
      {kind:'vline', x1:EF[0], y1:EF[1]+P, x2:EF[0], y2:BO[1]-P, col:BLUSH, ts:0.76, te:0.81},
      {kind:'text',  x:BO[0], y:BO[1], txt:'Better Outcomes', size:19, w:600, col:GOLD, ts:0.81, te:0.88},
    ];

    function ease(t){ return t*t*(3-2*t); }

    function sparkleSize(local, elapsed, phase){
      const base = 6;
      const appear = ease(Math.min(1, local * 3));
      const pulse  = 1 + 0.25 * Math.sin(elapsed * 0.004 + phase);
      return base * appear * pulse;
    }

    const DURATION=5000, HOLD=2500;
    let start=null;
    let raf;

    const frame = (ts) => {
      if(!start) start=ts;
      const elapsed = ts - start;
      if(elapsed >= DURATION+HOLD) start=ts;
      const t = Math.min(elapsed/DURATION, 1.0);

      ctx.clearRect(0,0,600,560);

      for(const el of ELEMS){
        if(t < el.ts) continue;
        const local = ease(Math.min(1.0,(t-el.ts)/Math.max(el.te-el.ts,0.001)));
        if(el.kind==='text'){
          ctx.save();
          ctx.globalAlpha=local;
          ctx.font=`${el.w} ${el.size}px Arial, Helvetica, sans-serif`;
          ctx.fillStyle=rgba(el.col,1);
          ctx.textAlign='center';
          ctx.textBaseline='middle';
          ctx.fillText(el.txt, el.x, el.y+(1-local)*6);
          ctx.restore();
        } else if(el.kind==='vline'){
          const ym=el.y1+(el.y2-el.y1)*local;
          if(ym>el.y1){
            ctx.save();
            ctx.strokeStyle=rgba(el.col,0.85);
            ctx.lineWidth=LW; ctx.lineCap='round';
            ctx.beginPath(); ctx.moveTo(el.x1,el.y1); ctx.lineTo(el.x2,ym); ctx.stroke();
            ctx.restore();
          }
        } else if(el.kind==='hline'){
          const xm=el.x1+(el.x2-el.x1)*local;
          if(xm>el.x1){
            ctx.save();
            ctx.strokeStyle=rgba(el.col,0.85);
            ctx.lineWidth=LW; ctx.lineCap='round';
            ctx.beginPath(); ctx.moveTo(el.x1,el.y1); ctx.lineTo(xm,el.y2); ctx.stroke();
            ctx.restore();
          }
        }
      }

      for(let i=0;i<SPARKLES.length;i++){
        const sp=SPARKLES[i];
        if(t < sp.ts) continue;
        const local=(t-sp.ts)/Math.max(sp.te-sp.ts,0.001);
        const alpha=ease(Math.min(1,local))*0.92;
        const sz=sparkleSize(local, elapsed, i*1.3);
        const rot=(elapsed*0.0008 + i*0.8);
        drawSparkle(sp.x, sp.y, sz, alpha, rot);
      }

      raf = requestAnimationFrame(frame);
    };

    document.fonts.ready.then(()=>{ raf = requestAnimationFrame(frame); });
    this._raf = () => raf && cancelAnimationFrame(raf);
  }
  disconnectedCallback() {
    if (this._raf) this._raf();
  }
}
customElements.define('design-flow-sparkles', DesignFlowSparkles);
}
