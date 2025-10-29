import Spline from '@splinetool/react-spline';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="w-full h-screen relative">
      {/* Spline 3D Scene */}
      <Spline scene="https://prod.spline.design/nvSwDpk1ogJtgZO8/scene.splinecode" />
      
      {/* Golden Glass Navigation Buttons Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50"
      >
        <motion.a
          href="https://ysrathore.space/home"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="group relative px-10 py-5 rounded-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300"
          style={{
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(218, 165, 32, 0.1))',
            border: '1px solid rgba(255, 215, 0, 0.4)',
            boxShadow: `
              0 8px 32px rgba(255, 215, 0, 0.3),
              0 0 60px rgba(218, 165, 32, 0.2),
              inset 0 1px 0 rgba(255, 215, 0, 0.5)
            `,
          }}
        >
          {/* Golden shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative text-black text-lg tracking-widest" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '600', letterSpacing: '0.15em' }}>
            HOME
          </span>
        </motion.a>

        <motion.a
          href="https://ysrathore.space/about"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="group relative px-10 py-5 rounded-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300"
          style={{
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(218, 165, 32, 0.1))',
            border: '1px solid rgba(255, 215, 0, 0.4)',
            boxShadow: `
              0 8px 32px rgba(255, 215, 0, 0.3),
              0 0 60px rgba(218, 165, 32, 0.2),
              inset 0 1px 0 rgba(255, 215, 0, 0.5)
            `,
          }}
        >
          {/* Golden shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative text-black text-lg tracking-widest" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '600', letterSpacing: '0.15em' }}>
            ABOUT
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
}
