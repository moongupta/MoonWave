"use client";

import { AnimatePresence, motion } from "framer-motion";

import QueuePanel from "./QueuePanel";

interface QueueDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function QueueDrawer({
  open,
  onClose,
}: QueueDrawerProps) {
  return (
    <AnimatePresence>

      {open && (

        <>

          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40
              bg-black/30
              backdrop-blur-sm
            "
          />

          {/* Drawer */}

          <motion.div
            initial={{
              x: 420,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: 420,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 28,
            }}
            className="
              fixed
              right-6
              top-1/2
              z-50
              -translate-y-1/2
            "
          >
            <QueuePanel />
          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}