import React, { useState, useEffect, useRef } from 'react';

/**
 * DigitalPet — SVG pixel-art cat inspired by vscode-pets extension.
 * Walks, sits, eats (feed command), and fetches (play command).
 * Speech bubble & thought logic is preserved from the previous version.
 */

// ─── Pixel size & palette ─────────────────────────────────────────
const PX = 4; // each logical pixel = 4 CSS px

const C = {
  body:    '#e8a260',  // warm orange
  bodyD:   '#c47a35',  // darker orange for shading
  stripe:  '#c06b25',  // stripe detail
  ear:     '#e8a260',
  earIn:   '#f4c4a0',  // inner ear
  white:   '#f5f5f5',
  pupil:   '#1a1a2e',
  nose:    '#e05b80',
  tongue:  '#ff7b9c',
  ground:  '#4ee32c22',
  ball:    '#f5c842',
  food:    '#ff6b35',
};

// ─── SVG helpers ──────────────────────────────────────────────────
const Px = ({ x, y, c, w = 1, h = 1 }) => (
  <rect x={x * PX} y={y * PX} width={w * PX} height={h * PX} fill={c} />
);

// ─── Static cat parts ─────────────────────────────────────────────

// Head (centered at column 2–9, rows 0–7)
const CatHead = ({ blink = false }) => (
  <g>
    {/* Ears */}
    <Px x={2} y={0} c={C.ear} />
    <Px x={3} y={0} c={C.ear} />
    <Px x={7} y={0} c={C.ear} />
    <Px x={8} y={0} c={C.ear} />
    <Px x={2} y={1} c={C.ear} /><Px x={3} y={1} c={C.earIn} />
    <Px x={7} y={1} c={C.earIn} /><Px x={8} y={1} c={C.ear} />
    {/* Head */}
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={2} c={C.body} />)}
    {[1,2,3,4,5,6,7,8,9,10].map(x => <Px key={x} x={x} y={3} c={C.body} />)}
    {[1,2,3,4,5,6,7,8,9,10].map(x => <Px key={x} x={x} y={4} c={C.body} />)}
    {/* Stripes on head */}
    <Px x={4} y={3} c={C.stripe} />
    <Px x={6} y={3} c={C.stripe} />
    <Px x={8} y={3} c={C.stripe} />
    {/* Eyes */}
    <Px x={3} y={4} c={C.white} w={2} />
    <Px x={7} y={4} c={C.white} w={2} />
    {!blink && <><Px x={4} y={4} c={C.pupil} /><Px x={8} y={4} c={C.pupil} /></>}
    {blink  && <><Px x={3} y={4} c={C.body} w={2} /><Px x={7} y={4} c={C.body} w={2} /></>}
    {/* Muzzle */}
    {[1,2,3,4,5,6,7,8,9,10].map(x => <Px key={x} x={x} y={5} c={C.body} />)}
    <Px x={4} y={5} c={C.white} w={4} />
    <Px x={5} y={5} c={C.nose} w={2} />
    {/* Chin */}
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={6} c={C.body} />)}
    <Px x={4} y={6} c={C.white} w={4} />
  </g>
);

// Body (rows 7–12)
const CatBody = () => (
  <g>
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={7} c={C.body} />)}
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={8} c={C.body} />)}
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={9} c={C.body} />)}
    {/* stripe on body */}
    <Px x={4} y={8} c={C.stripe} /><Px x={7} y={8} c={C.stripe} />
    {[3,4,5,6,7,8].map(x => <Px key={x} x={x} y={10} c={C.body} />)}
  </g>
);

// Tail variants
const TailRight = () => (
  <g>
    <Px x={10} y={8}  c={C.body} /><Px x={11} y={8} c={C.body} />
    <Px x={11} y={7}  c={C.body} /><Px x={12} y={7} c={C.body} />
    <Px x={12} y={6}  c={C.body} /><Px x={12} y={5} c={C.body} />
  </g>
);
const TailCurl = () => (
  <g>
    <Px x={10} y={9}  c={C.body} /><Px x={11} y={9} c={C.body} />
    <Px x={12} y={8}  c={C.body} /><Px x={12} y={7} c={C.body} />
    <Px x={11} y={6}  c={C.bodyD} />
  </g>
);

// Leg presets (pairs of front/back leg x-offsets and y-positions)
const Legs = ({ frontL, frontR, backL, backR }) => (
  <g>
    {/* front legs */}
    <Px x={frontL} y={11} c={C.body} /><Px x={frontL} y={12} c={C.bodyD} />
    <Px x={frontR} y={11} c={C.body} /><Px x={frontR} y={12} c={C.bodyD} />
    {/* back legs */}
    <Px x={backL} y={11} c={C.body} /><Px x={backL} y={12} c={C.bodyD} />
    <Px x={backR} y={11} c={C.body} /><Px x={backR} y={12} c={C.bodyD} />
  </g>
);

// ─── Walking animation frames ─────────────────────────────────────
const walkFrames = [
  { frontL:3, frontR:5, backL:7, backR:9, tail:'right', blink:false },
  { frontL:3, frontR:6, backL:6, backR:8, tail:'curl',  blink:false },
  { frontL:4, frontR:6, backL:7, backR:9, tail:'right', blink:false },
  { frontL:3, frontR:5, backL:8, backR:9, tail:'curl',  blink:true  },
];

// ─── Sit frame ────────────────────────────────────────────────────
const SitPose = ({ blink }) => (
  <g>
    {/* body squashed */}
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={7} c={C.body} />)}
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={8} c={C.body} />)}
    <Px x={4} y={8} c={C.stripe}/><Px x={7} y={8} c={C.stripe}/>
    {/* tucked legs */}
    {[3,4,5,6,7,8].map(x => <Px key={x} x={x} y={9} c={C.bodyD} />)}
    {[3,4,5,6,7,8].map(x => <Px key={x} x={x} y={10} c={C.bodyD} />)}
    {/* tail wrapping around */}
    <Px x={9} y={9} c={C.body}/><Px x={10} y={9} c={C.body}/>
    <Px x={10} y={10} c={C.body}/>
    <CatHead blink={blink} />
  </g>
);

// ─── Eat frame ────────────────────────────────────────────────────
const EatPose = ({ mouthOpen }) => (
  <g>
    <CatBody />
    <TailCurl />
    <Legs frontL={3} frontR={5} backL={7} backR={9} />
    {/* override mouth */}
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={2} c={C.body} />)}
    {[1,2,3,4,5,6,7,8,9,10].map(x => <Px key={x} x={x} y={3} c={C.body} />)}
    {[1,2,3,4,5,6,7,8,9,10].map(x => <Px key={x} x={x} y={4} c={C.body} />)}
    <Px x={2} y={0} c={C.ear}/><Px x={3} y={0} c={C.ear}/>
    <Px x={7} y={0} c={C.ear}/><Px x={8} y={0} c={C.ear}/>
    <Px x={3} y={1} c={C.earIn}/><Px x={7} y={1} c={C.earIn}/>
    <Px x={3} y={4} c={C.white} w={2}/><Px x={7} y={4} c={C.white} w={2}/>
    <Px x={4} y={4} c={C.pupil}/><Px x={8} y={4} c={C.pupil}/>
    {[1,2,3,4,5,6,7,8,9,10].map(x => <Px key={x} x={x} y={5} c={C.body} />)}
    <Px x={4} y={5} c={C.white} w={4}/>
    <Px x={5} y={5} c={C.nose} w={2}/>
    {[2,3,4,5,6,7,8,9].map(x => <Px key={x} x={x} y={6} c={C.body} />)}
    {mouthOpen
      ? <><Px x={4} y={6} c={C.pupil} w={4}/><Px x={5} y={6} c={C.tongue} w={2}/></>
      : <Px x={3} y={6} c={C.white} w={5}/>
    }
  </g>
);

// ─── Run (fast) frame ─────────────────────────────────────────────
const runFrames = [
  { frontL:2, frontR:6, backL:5, backR:9 },
  { frontL:3, frontR:7, backL:4, backR:8 },
];

// ─── Ball & food SVGs ─────────────────────────────────────────────
const BallSvg = () => (
  <svg width={PX*4} height={PX*4} style={{ overflow:'visible' }}>
    <circle cx={PX*2} cy={PX*2} r={PX*1.8} fill={C.ball} />
    <path d={`M${PX*.8},${PX*.8} Q${PX*2},${PX*3.2} ${PX*3.2},${PX*.8}`}
          stroke="#c0962a" strokeWidth={PX*.5} fill="none"/>
  </svg>
);

const FoodSvg = () => (
  <svg width={PX*5} height={PX*5} style={{ overflow:'visible' }}>
    {/* bowl */}
    <rect x={0} y={PX*3} width={PX*5} height={PX*2} rx={PX} fill="#888"/>
    {/* food mound */}
    <ellipse cx={PX*2.5} cy={PX*3} rx={PX*2} ry={PX*1.2} fill={C.food}/>
  </svg>
);

// ─── Speech Bubble ────────────────────────────────────────────────
const Bubble = ({ text, flip }) => (
  <div style={{
    position: 'absolute',
    bottom: '100%',
    left: flip ? 'auto' : '50%',
    right: flip ? '50%' : 'auto',
    transform: `translateX(${flip ? '50%' : '-50%'}) scaleX(${flip ? -1 : 1})`,
    marginBottom: '6px',
    backgroundColor: 'rgba(10,14,26,0.95)',
    border: '1.5px solid #4ee32c',
    borderRadius: '8px',
    padding: '4px 10px',
    fontSize: '11px',
    fontFamily: "'Fira Code', monospace",
    color: '#4ee32c',
    whiteSpace: 'nowrap',
    boxShadow: '0 0 10px rgba(78,227,44,0.35)',
    pointerEvents: 'none',
    zIndex: 10001,
  }}>
    {text}
    <div style={{
      position: 'absolute', bottom: '-7px', left: '50%',
      transform: 'translateX(-50%)',
      width: 0, height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '7px solid #4ee32c',
    }}/>
  </div>
);

// ─── Random thoughts (unchanged from previous version) ────────────
const THOUGHTS = [
  'thinking... 💭', 'please play with me! 🎾', 'type "play" to play!',
  'hungry... 🍖', 'type "feed" to feed me!', '*purring* ~',
  'bored...', 'zzzz... 😴', 'I love this terminal!',
  '*stretching*', '*tail wagging*', 'hello there! 👋',
];

// ─── Main Component ───────────────────────────────────────────────
const DigitalPet = () => {
  const [pos, setPos]           = useState(null);
  const [dir, setDir]           = useState(-1);
  const [mood, setMood]         = useState('walk');
  const [frame, setFrame]       = useState(0);
  const [mouthOpen, setMouthOpen] = useState(false);
  const [blink, setBlink]       = useState(false);
  const [thought, setThought]   = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [ballPos, setBallPos]   = useState(null);   // null = hidden
  const [foodPos, setFoodPos]   = useState(null);

  const posRef      = useRef(null);
  const dirRef      = useRef(-1);
  const moodRef     = useRef('walk');
  const moodTimer   = useRef(0);
  const bubbleTimer = useRef(0);
  const ballRef     = useRef(null);
  const ballDirRef  = useRef(-1);

  // ── Init ──
  useEffect(() => {
    const x = window.innerWidth - 180;
    posRef.current = x;
    setPos(x);
  }, []);

  // ── Pet event listener ──
  useEffect(() => {
    const handler = ({ detail }) => {
      if (detail === 'play') {
        ballRef.current = posRef.current;
        ballDirRef.current = dirRef.current;
        setBallPos(posRef.current);
        moodRef.current = 'fetch';
        moodTimer.current = 0;
        setThought('🎾 fetch!!');
        setShowBubble(true);
        bubbleTimer.current = 0;
      } else if (detail === 'feed') {
        setFoodPos(posRef.current - 40);
        moodRef.current = 'eat';
        moodTimer.current = 0;
        setThought('nom nom nom 🍖');
        setShowBubble(true);
        bubbleTimer.current = 0;
      }
    };
    document.addEventListener('pet-action', handler);
    return () => document.removeEventListener('pet-action', handler);
  }, []);

  // ── Random bubble ──
  useEffect(() => {
    const id = setInterval(() => {
      const m = moodRef.current;
      if (m !== 'walk' && m !== 'sit') return;
      bubbleTimer.current++;
      if (!showBubble && bubbleTimer.current > 40 && Math.random() < 0.04) {
        setThought(THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)]);
        setShowBubble(true);
        bubbleTimer.current = 0;
      }
      if (showBubble && bubbleTimer.current > 25) {
        setShowBubble(false);
        bubbleTimer.current = 0;
      }
    }, 200);
    return () => clearInterval(id);
  }, [showBubble]);

  // ── Main loop ──
  useEffect(() => {
    if (pos === null) return;

    const id = setInterval(() => {
      const leftBoundary = 20;
      const rightBoundary = window.innerWidth - 80;
      moodTimer.current++;

      const m = moodRef.current;

      // ── Fetch ──
      if (m === 'fetch') {
        // Animate running frames
        setFrame(f => (f + 1) % runFrames.length);
        setMood('fetch');

        // Move ball
        if (ballRef.current !== null) {
          let nb = ballRef.current + ballDirRef.current * 15;
          if (nb <= leftBoundary) {
            nb = leftBoundary;
            ballDirRef.current = 1;
          } else if (nb >= rightBoundary) {
            nb = rightBoundary;
            ballDirRef.current = -1;
          }
          ballRef.current = nb;
          setBallPos(nb);

          // Chase ball
          const target = nb - 20;
          let np = posRef.current + (target > posRef.current ? 8 : -8);
          if (np <= leftBoundary) np = leftBoundary;
          if (np >= rightBoundary) np = rightBoundary;
          posRef.current = np; 
          dirRef.current = target > posRef.current ? 1 : -1;
          setPos(np); 
          setDir(dirRef.current);

          if (Math.abs(nb - posRef.current) < 30 && moodTimer.current > 20) {
            setBallPos(null); 
            ballRef.current = null;
            setThought('I got it! 🎾');
            setShowBubble(true); 
            bubbleTimer.current = 0;
            moodRef.current = 'walk'; 
            moodTimer.current = 0;
          }
        }
        return;
      }

      // ── Eat ──
      if (m === 'eat') {
        setMood('eat');
        setMouthOpen(mo => !mo);
        if (moodTimer.current > 28) {
          setFoodPos(null);
          setShowBubble(false);
          moodRef.current = 'walk'; moodTimer.current = 0;
        }
        return;
      }

      // ── Random mood switch ──
      if (m === 'walk' && moodTimer.current > 45) {
        const r = Math.random();
        if (r < 0.012)       { moodRef.current = 'yawn'; moodTimer.current = 0; }
        else if (r < 0.028)  { moodRef.current = 'sit';  moodTimer.current = 0; }
      }
      if ((m === 'sit' || m === 'yawn') && moodTimer.current > 22) {
        moodRef.current = 'walk'; moodTimer.current = 0;
      }

      setMood(moodRef.current);

      // ── Blink randomly ──
      if (Math.random() < 0.05) setBlink(true);
      else setBlink(false);

      if (moodRef.current === 'sit' || moodRef.current === 'yawn') {
        setFrame(f => (f + 1) % 2);
        return;
      }

      // ── Walk ──
      setFrame(f => (f + 1) % walkFrames.length);
      let np = posRef.current + dirRef.current * 2;
      let nd = dirRef.current;
      if (np <= leftBoundary)  { nd = 1;  np = leftBoundary; }
      if (np >= rightBoundary) { nd = -1; np = rightBoundary; }
      posRef.current = np; dirRef.current = nd;
      setPos(np); setDir(nd);
    }, 160);

    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos === null]);

  if (pos === null) return null;

  const wf = walkFrames[frame % walkFrames.length];
  const rf = runFrames[frame % runFrames.length];
  const svgW = PX * 16;
  const svgH = PX * 14;

  const renderPet = () => {
    if (mood === 'sit' || mood === 'yawn') {
      return <SitPose blink={frame % 2 === 0 && blink} />;
    }
    if (mood === 'eat') {
      return <EatPose mouthOpen={mouthOpen} />;
    }
    if (mood === 'fetch') {
      return (
        <g>
          <CatHead blink={false} />
          <CatBody />
          <TailRight />
          <Legs {...rf} />
        </g>
      );
    }
    return (
      <g>
        <CatHead blink={blink} />
        <CatBody />
        {wf.tail === 'right' ? <TailRight /> : <TailCurl />}
        <Legs frontL={wf.frontL} frontR={wf.frontR} backL={wf.backL} backR={wf.backR} />
      </g>
    );
  };

  return (
    <>
      {/* Bouncing ball */}
      {ballPos !== null && (
        <div style={{ position:'fixed', bottom:'14px', left:`${ballPos}px`, zIndex:9998, pointerEvents:'none' }}>
          <BallSvg />
        </div>
      )}
      {/* Food bowl */}
      {foodPos !== null && (
        <div style={{ position:'fixed', bottom:'10px', left:`${foodPos}px`, zIndex:9998, pointerEvents:'none' }}>
          <FoodSvg />
        </div>
      )}
      {/* Pet */}
      <div style={{
        position: 'fixed',
        bottom: '4px',
        left: `${pos}px`,
        zIndex: 9999,
        pointerEvents: 'none',
        transform: `scaleX(${dir < 0 ? -1 : 1})`,
        transformOrigin: 'center bottom',
        filter: mood === 'eat'   ? 'drop-shadow(0 0 6px #ffff0080)'
               : mood === 'fetch' ? 'drop-shadow(0 0 6px #ff990080)'
               : mood === 'sit'   ? 'drop-shadow(0 0 6px #3b78ff80)'
               :                    'drop-shadow(0 0 5px #4ee32c60)',
      }}>
        {showBubble && <Bubble text={thought} flip={dir < 0} />}
        <svg
          width={svgW}
          height={svgH}
          style={{ display:'block', imageRendering:'pixelated' }}
        >
          {renderPet()}
        </svg>
      </div>
    </>
  );
};

export default DigitalPet;
