"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dummyAlerts } from "../../../public/dummy/alert";

export default function AlertDropper() {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAlert =
        dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
      setAlerts((prev) => [...prev, randomAlert]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 mt-6 overflow-hidden flex flex-col-reverse items-center justify-end">
      <AnimatePresence initial={false}>
        {alerts.map((alert, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="bg-red-100 text-red-800 rounded-full px-4 py-1 mb-2 text-sm font-medium shadow-md"
          >
            {alert}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { dummyAlerts } from "../../../public/dummy/alert";

// export default function AlertDropper() {
//   const [alerts, setAlerts] = useState<string[]>([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomAlert =
//         dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
//       setAlerts((prev) => [...prev, randomAlert]);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-32 mt-6 overflow-hidden flex flex-col items-center">
//       <AnimatePresence initial={false}>
//         {alerts.map((alert, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: -50, opacity: 0, x: Math.random() * 40 - 20 }}
//             animate={{ y: 0, opacity: 1, x: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{
//               duration: 0.6,
//               bounce: 0.3,
//               type: "spring",
//             }}
//             className="bg-red-100 text-red-800 rounded-full px-4 py-1 mb-2 text-sm font-medium shadow-md"
//           >
//             {alert}
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { dummyAlerts } from "../../../public/dummy/alert";

// export default function AlertDropper() {
//   const [alerts, setAlerts] = useState<string[]>([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomAlert =
//         dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];
//       setAlerts((prev) => [...prev, randomAlert]);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-32 mt-6 overflow-hidden flex flex-col items-center">
//       <AnimatePresence initial={false}>
//         {alerts.map((alert, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: -50, opacity: 0, x: Math.random() * 40 - 20 }}
//             animate={{ y: 0, opacity: 1, x: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, bounce: 0.3 }}
//             className="bg-red-100 text-red-800 rounded-full px-4 py-1 mb-2 text-sm font-medium shadow-md"
//           >
//             {alert}
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }
