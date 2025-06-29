import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaReddit } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center space-y-4"
      >
        <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-white">
          <Image
            src="/profile.jpg"
            alt="Alapan Mukherjee"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold">Alapan Mukherjee</h1>
        <p className="text-lg text-gray-400">Engineering Student & Developer</p>
        <p className="max-w-xl text-gray-300">
          Passionate about building clean, efficient, and user-friendly web applications while continually learning and exploring new technologies. I enjoy solving real-world problems through code and design.
        </p>
        <div className="flex space-x-3">
          <a href="https://www.linkedin.com/in/alapan-mukherjee-18a016333/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8 hover:text-blue-400 transition" />
          </a>
          <a href="https://www.reddit.com/user/Alapan_Mukherjee/" target="_blank" rel="noopener noreferrer">
            <FaReddit className="w-8 h-8 hover:text-orange-400 transition" />
          </a>
        </div>
        <div className="mt-6 text-gray-400">
          Bankura, West Bengal
        </div>
        <div className="mt-8 max-w-lg text-left">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <p>Python, C, C++, HTML, CSS, JavaScript, etc.</p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Projects</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="https://roaring-cendol-14818f.netlify.app/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Location Globe Project
              </a>
            </li>
            <li>
              <a
                href="https://fadinglight-mewcat-1i01cssjs.netlify.app/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS/JS Animation Project
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </main>
  );
}