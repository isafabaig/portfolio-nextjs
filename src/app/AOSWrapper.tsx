// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function AOSWrapper({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       offset: 100, 
//       easing: "ease-in-out",
//       once: false, 
//     });
//   }, []);

//   return <>{children}</>;
// }

// pages/_app.tsx

'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return <>{children}</>;
}

