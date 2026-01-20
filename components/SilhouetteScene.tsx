'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SilhouetteSceneProps {
  scene: 'family' | 'city' | 'volunteer' | 'community' | 'hope';
  className?: string;
}

export function SilhouetteScene({ scene, className }: SilhouetteSceneProps) {
  return (
    <div className={cn('relative w-full h-full', className)}>
      {scene === 'family' && <FamilyScene />}
      {scene === 'city' && <CityScene />}
      {scene === 'volunteer' && <VolunteerScene />}
      {scene === 'community' && <CommunityScene />}
      {scene === 'hope' && <HopeScene />}
    </div>
  );
}

function FamilyScene() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <motion.svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.circle cx="200" cy="150" r="40" fill="#1565C0" opacity="0.8" variants={item} />
      <motion.rect x="170" y="195" width="60" height="120" rx="5" fill="#1565C0" opacity="0.8" variants={item} />

      <motion.circle cx="320" cy="130" r="50" fill="#1565C0" opacity="0.9" variants={item} />
      <motion.rect x="280" y="185" width="80" height="150" rx="5" fill="#1565C0" opacity="0.9" variants={item} />

      <motion.circle cx="440" cy="140" r="45" fill="#1565C0" opacity="0.85" variants={item} />
      <motion.rect x="405" y="190" width="70" height="130" rx="5" fill="#1565C0" opacity="0.85" variants={item} />

      <motion.circle cx="570" cy="170" r="35" fill="#1565C0" opacity="0.7" variants={item} />
      <motion.rect x="545" y="210" width="50" height="100" rx="5" fill="#1565C0" opacity="0.7" variants={item} />

      <motion.rect x="100" y="500" width="600" height="4" rx="2" fill="#16A34A" opacity="0.3" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, delay: 1 }} />
    </motion.svg>
  );
}

function CityScene() {
  return (
    <motion.svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.rect x="50" y="300" width="100" height="250" fill="#1565C0" opacity="0.6" initial={{ height: 0, y: 550 }} whileInView={{ height: 250, y: 300 }} transition={{ duration: 0.8, delay: 0.1 }} />
      <rect x="65" y="320" width="20" height="25" fill="#E3F2FD" opacity="0.4" />
      <rect x="95" y="320" width="20" height="25" fill="#E3F2FD" opacity="0.4" />

      <motion.rect x="180" y="200" width="120" height="350" fill="#1565C0" opacity="0.7" initial={{ height: 0, y: 550 }} whileInView={{ height: 350, y: 200 }} transition={{ duration: 0.8, delay: 0.3 }} />
      <rect x="195" y="220" width="25" height="30" fill="#E3F2FD" opacity="0.4" />
      <rect x="230" y="220" width="25" height="30" fill="#E3F2FD" opacity="0.4" />
      <rect x="265" y="220" width="25" height="30" fill="#E3F2FD" opacity="0.4" />

      <motion.rect x="330" y="250" width="110" height="300" fill="#1565C0" opacity="0.8" initial={{ height: 0, y: 550 }} whileInView={{ height: 300, y: 250 }} transition={{ duration: 0.8, delay: 0.2 }} />
      <rect x="345" y="270" width="22" height="28" fill="#E3F2FD" opacity="0.4" />
      <rect x="377" y="270" width="22" height="28" fill="#E3F2FD" opacity="0.4" />
      <rect x="409" y="270" width="22" height="28" fill="#E3F2FD" opacity="0.4" />

      <motion.rect x="470" y="320" width="95" height="230" fill="#1565C0" opacity="0.65" initial={{ height: 0, y: 550 }} whileInView={{ height: 230, y: 320 }} transition={{ duration: 0.8, delay: 0.4 }} />
      <rect x="485" y="340" width="20" height="25" fill="#E3F2FD" opacity="0.4" />
      <rect x="515" y="340" width="20" height="25" fill="#E3F2FD" opacity="0.4" />

      <motion.rect x="595" y="280" width="105" height="270" fill="#1565C0" opacity="0.75" initial={{ height: 0, y: 550 }} whileInView={{ height: 270, y: 280 }} transition={{ duration: 0.8, delay: 0.5 }} />
      <rect x="610" y="300" width="22" height="27" fill="#E3F2FD" opacity="0.4" />
      <rect x="642" y="300" width="22" height="27" fill="#E3F2FD" opacity="0.4" />
      <rect x="674" y="300" width="22" height="27" fill="#E3F2FD" opacity="0.4" />

      <rect x="0" y="550" width="800" height="50" fill="#16A34A" opacity="0.2" />
    </motion.svg>
  );
}

function VolunteerScene() {
  return (
    <motion.svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.g initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <circle cx="250" cy="180" r="45" fill="#16A34A" opacity="0.8" />
        <rect x="215" y="230" width="70" height="130" rx="5" fill="#16A34A" opacity="0.8" />
        <rect x="180" y="260" width="50" height="8" rx="4" fill="#16A34A" opacity="0.6" />
      </motion.g>

      <motion.rect x="320" y="300" width="80" height="60" rx="8" fill="#1565C0" opacity="0.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} />
      <rect x="330" y="280" width="15" height="40" fill="#1565C0" opacity="0.7" />
      <rect x="375" y="280" width="15" height="40" fill="#1565C0" opacity="0.7" />

      <motion.g initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <circle cx="550" cy="190" r="43" fill="#16A34A" opacity="0.75" />
        <rect x="517" y="238" width="66" height="125" rx="5" fill="#16A34A" opacity="0.75" />
        <rect x="540" y="268" width="50" height="8" rx="4" fill="#16A34A" opacity="0.6" />
      </motion.g>

      <motion.path d="M 400 450 Q 400 420 420 420 Q 440 420 440 450 L 440 480 L 400 480 Z" fill="#DC2626" opacity="0.3" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} />

      <rect x="100" y="500" width="600" height="4" rx="2" fill="#16A34A" opacity="0.3" />
    </motion.svg>
  );
}

function CommunityScene() {
  return (
    <motion.svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {[250, 350, 450, 550].map((cx, i) => (
        <motion.g key={cx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
          <circle cx={cx} cy="200" r="40" fill="#1565C0" opacity="0.7" />
          <rect x={cx - 30} y="245" width="60" height="110" rx="5" fill="#1565C0" opacity="0.7" />
        </motion.g>
      ))}

      <motion.circle cx="400" cy="450" r="80" stroke="#16A34A" strokeWidth="4" opacity="0.4" fill="none" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
      <motion.circle cx="400" cy="450" r="120" stroke="#16A34A" strokeWidth="3" opacity="0.3" fill="none" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 4 }} />
      <motion.circle cx="400" cy="450" r="160" stroke="#16A34A" strokeWidth="2" opacity="0.2" fill="none" animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 5 }} />
    </motion.svg>
  );
}

function HopeScene() {
  return (
    <motion.svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.g initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
        <circle cx="400" cy="150" r="60" fill="#16A34A" opacity="0.8" />
        <rect x="360" y="215" width="80" height="150" rx="5" fill="#16A34A" opacity="0.8" />

        <motion.path d="M 350 280 L 320 320 L 350 325 Z" fill="#16A34A" opacity="0.6" animate={{ rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
        <motion.path d="M 450 280 L 480 320 L 450 325 Z" fill="#16A34A" opacity="0.6" animate={{ rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
      </motion.g>

      {[15, 30, 50].map((r, i) => (
        <motion.circle key={r} cx="400" cy="500" r={r} fill="#1565C0" opacity={0.3 - i * 0.1} animate={{ scale: [1, 1.2, 1], opacity: [0.3 - i * 0.1, 0.1, 0.3 - i * 0.1] }} transition={{ repeat: Infinity, duration: 3 + i }} />
      ))}

      {[
        { d: "M 200 100 L 210 120 L 190 120 Z", delay: 0.1 },
        { d: "M 600 100 L 610 120 L 590 120 Z", delay: 0.3 },
        { d: "M 150 300 L 160 320 L 140 320 Z", delay: 0.5 },
        { d: "M 650 300 L 660 320 L 640 320 Z", delay: 0.7 }
      ].map((p, i) => (
        <motion.path key={i} d={p.d} fill="#16A34A" opacity="0.4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 0.4, y: 0 }} transition={{ delay: p.delay }} />
      ))}
    </motion.svg>
  );
}

