import { Flower } from "lucide-react"
import { motion } from "framer-motion"
import { themes } from "../../../theme/theme";




const EleganteSubTitle = ({title}:{title: any}) => {

  const theme = themes.femininoElegante;
  
    return (
        <div className="flex flex-col items-center mb-6">
           <div className="flex items-center mb-3">
                <motion.div
                    className="h-px w-16"
                    style={{ backgroundColor: theme.colors.primary }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                ></motion.div>
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                    }}
                >
                    <Flower className="mx-4" size={24} style={{ color: theme.colors.primary }} />
                </motion.div>
                <motion.div
                    className="h-px w-16"
                    style={{ backgroundColor: theme.colors.primary }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
           </div>
            <motion.h2
              className="text-3xl md:text-4xl font-normal mb-6"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {title}
            </motion.h2>
        </div>
    )
}

export default EleganteSubTitle