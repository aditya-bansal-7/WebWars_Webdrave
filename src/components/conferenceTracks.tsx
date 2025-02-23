"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const tracks = [
  {
    title:
      "Emerging Trends and Applications in Machine Learning and Deep Learning",
    chairs: [],
    side: "left",
  },
  {
    title: "Immersive Futures: Merging Realities with Intelligent Systems",
    chairs: [
      "Dr. Bhanu Sharma, Chitkara University, Punjab, India",
      "Dr. Gurjinder Singh, Chitkara University, Punjab, India",
    ],
    side: "right",
  },
  {
    title:
      "Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
    chairs: [
      "Dr. Anurag Dwivedi,Bansal Institute of Engineering and Technology, Lucknow, India",
      "Dr. Suresh Kumar, Institute of Engineering and Design, India",
    ],
    side: "left",
  },
  {
    title: "Innovative and Disruptive Technologies",
    chairs: ["Dr. Amanpreet Kaur, Chitkara University, Punjab, India"],
    side: "right",
  },
  {
    title: "Recent Trends and Innovations in Generative AI",
    chairs: [
      "Dr. Vandana Sharma, Christ University, Delhi-NCR Campus, India",
      "Dr. Upinder Kaur, Akal University, Talwandi Sabo",
    ],
    side: "left",
  },
  {
    title: "Innovative and Disruptive Technologies",
    chairs: ["Dr. Amanpreet Kaur, Chitkara University, Punjab, India"],
    side: "right",
  },
  {
    title: "Recent Trends and Innovations in Generative AI",
    chairs: [
      "Dr. Vandana Sharma, Christ University, Delhi-NCR Campus, India",
      "Dr. Upinder Kaur, Akal University, Talwandi Sabo",
    ],
    side: "left",
  },
  {
    title: "Innovative and Disruptive Technologies",
    chairs: ["Dr. Amanpreet Kaur, Chitkara University, Punjab, India"],
    side: "right",
  },
  {
    title: "Recent Trends and Innovations in Generative AI",
    chairs: [
      "Dr. Vandana Sharma, Christ University, Delhi-NCR Campus, India",
      "Dr. Upinder Kaur, Akal University, Talwandi Sabo",
    ],
    side: "left",
  },
];

export default function ConferenceTracks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 60%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden w-full py-8 sm:py-12 px-4">
      <div className="mx-auto max-w-6xl space-y-16 sm:space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl backdrop-blur-md border border-white/20 bg-white/60 p-8 sm:p-12 shadow-sm">
          <h1 className="mb-4 sm:mb-6 text-center font-serif text-3xl sm:text-[45px] md:text-[55px] tracking-wide">
            Conference Tracks and Track Chairs
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base">
            Exploring innovations in AI, security, computing, and global
            collaboration.
          </p>
        </motion.div>
      </div>
      <div className="relative flex justify-center items-center mt-16">
        <svg
          width="373"
          height="1900"
          viewBox="0 0 373 1900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M185.084 51.6787H222.604C240.893 51.6787 258.816 56.8046 274.34 66.4749L276.784 67.9975C289.055 75.6416 299.215 86.2381 306.336 98.8194V98.8194C313.695 111.821 317.563 126.506 317.563 141.446V158.611C317.563 172.507 314.328 186.212 308.114 198.641V198.641C299.893 215.082 286.772 228.614 270.605 237.36V237.36C257.488 244.456 242.778 248.189 227.864 248.189H185.084H165.412C127.971 248.189 92.9331 266.634 71.7412 297.501V297.501L66.8378 306.719C58.0536 323.234 54.5671 342.052 56.852 360.617V360.617C58.4192 373.35 62.6587 385.609 69.2929 396.589L70.5788 398.718C77.1789 409.642 85.8364 419.182 96.0711 426.808V426.808C110.488 437.55 127.567 444.147 145.462 445.887L171.1 448.38H220.412L231.831 449.215C244.168 450.118 256.13 453.862 266.78 460.156V460.156L279.867 468.209C290.112 474.514 298.597 483.305 304.535 493.767V493.767C308.77 501.229 311.625 509.393 312.963 517.868L315.487 533.856C316.864 542.573 316.948 551.446 315.738 560.187V560.187C312.652 582.476 301.314 602.794 283.967 617.125L277.084 622.81V622.81C264.999 632.478 250.742 639.058 235.544 641.98L231.059 642.843C223.977 644.205 216.782 644.89 209.571 644.89H182.14H152.83C142.05 644.89 131.372 646.97 121.38 651.014V651.014C110.964 655.23 101.503 661.497 93.5573 669.442L80.5731 682.426L78.3661 685.022C63.6367 702.351 55.5493 724.353 55.5493 747.096V748.143C55.5493 757.751 57.0983 767.296 60.1367 776.411L60.4616 777.386C67.6887 799.068 83.1668 817.029 103.543 827.378V827.378C113.169 832.268 123.622 835.32 134.367 836.38L170.364 839.929H203.484H217.093C245.854 839.929 273.207 852.378 292.096 874.066V874.066C298.732 881.685 304.168 890.269 308.217 899.525L308.984 901.278C314.642 914.212 317.563 928.289 317.563 942.406V942.406C317.563 956.297 314.705 970.15 309.167 982.888L306.265 989.561C299.273 1005.64 287.176 1018.97 271.845 1027.49V1027.49C265.553 1030.99 258.817 1033.62 251.82 1035.3L239.085 1038.38C226.191 1041.49 212.974 1043.06 199.71 1043.06H157.117H150.215C129.367 1043.06 109.072 1049.78 92.3356 1062.21V1062.21C75.6159 1074.63 63.3351 1092.1 57.3076 1112.04L55.0554 1119.49C50.1179 1135.82 50.5502 1153.3 56.2886 1169.37V1169.37C57.7559 1173.48 59.558 1177.46 61.6766 1181.27L67.652 1192.03C71.3432 1198.67 75.8972 1204.8 81.1955 1210.25V1210.25C92.7984 1222.18 107.609 1230.5 123.839 1234.2L141.103 1238.13C151.745 1240.56 162.625 1241.78 173.54 1241.78H219.676L235.112 1243.37C257.431 1245.67 278.169 1255.95 293.504 1272.33V1272.33C299.213 1278.43 304.076 1285.27 307.959 1292.67L308.465 1293.64C314.475 1305.08 318.233 1317.58 319.535 1330.44L320.578 1340.74C322.45 1359.22 318.679 1377.83 309.762 1394.13V1394.13C304.697 1403.38 298.076 1411.7 290.189 1418.71L289.656 1419.18C272.075 1434.81 249.37 1443.44 225.848 1443.44H203.484H163.016C150.795 1443.44 138.628 1445.06 126.829 1448.24L112.592 1452.08C103.128 1454.64 94.3095 1459.16 86.7106 1465.35V1465.35C81.1797 1469.85 76.3732 1475.18 72.4588 1481.15L71.2614 1482.97C65.7384 1491.39 61.7756 1500.73 59.5626 1510.55L57.668 1518.96C53.4031 1537.88 54.715 1557.64 61.4448 1575.83L62.0309 1577.42C67.905 1593.3 77.9513 1607.31 91.1127 1617.96V1617.96C98.2767 1623.76 106.253 1628.48 114.787 1631.96L117.396 1633.03C130.99 1638.57 145.532 1641.43 160.214 1641.43H203.484L230.828 1643.82C251.474 1645.63 271.259 1652.93 288.124 1664.98V1664.98L289.361 1666.13C302.043 1677.9 311.337 1692.86 316.278 1709.45V1709.45C318.112 1715.6 319.328 1721.93 319.91 1728.33L320.338 1733.04C321.424 1744.98 320.387 1757.02 317.277 1768.59V1768.59C311.722 1789.27 299.778 1807.66 283.149 1821.14L281.5 1822.48V1822.48C268.932 1831.18 254.433 1836.69 239.257 1838.52L219.676 1840.88H185.084H144.605"
            stroke="url(#paint0_linear_213_175)"
            strokeWidth="14.7199"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
            transition={{ ease: "easeInOut" }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_213_175"
              x1="185.452"
              y1="51.6787"
              x2="185.452"
              y2="1840.88"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#CBDDE6" />
              <stop offset="0.276" stopColor="#B9DAE1" stopOpacity="0.88" />
              <stop offset="0.51" stopColor="#A2CEE1" stopOpacity="0.62" />
              <stop offset="0.724" stopColor="#A5EBE7" stopOpacity="0.54" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-24 sm:top-20 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-[3.6rem] lg:gap-[3.7rem]">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`relative ${
                track.side === "left"
                  ? "-translate-x-[80px] sm:-translate-x-[120px] md:-translate-x-[160px] text-right"
                  : "translate-x-[80px] sm:translate-x-[120px] md:translate-x-[160px] text-left rotate-180"
              }`}>
              <Card text={track.title} side={track.side} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ text, side }: { text: string; side: string }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#E9EBEF] rounded-r-full
      w-[300px] sm:w-[350px] md:w-[450px] lg:w-[512px] h-[138px] py-4 px-6`}>
      <p
        className={`text-center text-sm sm:text-base md:text-lg px-4 ${
          side === "right" ? "rotate-180" : ""
        }`}>
        {text}
      </p>
    </div>
  );
};
