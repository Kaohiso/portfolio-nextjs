import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";

const MyButton = (data: any) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const textBGVariants = {
    hidden: { opacity: 1, x: 0, width: ["100%", "0%"] },
    hover: { opacity: 1, x: 0, width: ["0%", "100%"] },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 0, width: ["100%", "0%"] },
    hover: { opacity: 1, x: 0, width: ["0%", "100%"] },
  };

  return (
    <div className="fixed hidden lg:block top-1/2 left-0 transform -translate-y-1/2 z-50 ml-6">
      {data.buttonData.map((button: any) => (
        <Link
          key={button.id}
          to={button.key.toLowerCase()}
          spy={true}
          smooth={true}
          duration={500}
        >
          <motion.button
            className="flex space-y-2 text-white "
            onHoverStart={() => setHoveredButton(button.id)}
            onHoverEnd={() => setHoveredButton(null)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="my-2 p-3 bg-gray-800 rounded-full text-2xl z-10">
              {button.icon}
            </span>
            <motion.span
              className={`-ml-10 p-3 rounded-full bg-gray-800 whitespace-nowrap ${
                hoveredButton === button.id ? "" : "hidden"
              }`}
              variants={textBGVariants}
              initial={"hidden"}
              animate={hoveredButton === button.id ? "hover" : "hidden"}
              transition={{ duration: 0.5 }}
            >
              <span className="ml-1 p-3" />
              <motion.span
                variants={textVariants}
                initial={"hidden"}
                animate={hoveredButton === button.id ? "hover" : "hidden"}
                transition={{ duration: 1 }}
              >
                {button.text}
              </motion.span>
            </motion.span>
          </motion.button>
        </Link>
      ))}
    </div>
  );
};

export default MyButton;
