import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
const variants = {
	out: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	in: {
		opacity: 1,
		transition: {
			duration: 0.25,
			delay: 0.25,
		},
	},
};
const Transition = ({ children }) => {
    const router = useRouter()
	return (
		<div className="transition">
			<AnimatePresence initial={false} exitBeforeEnter>
				<motion.div
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                    key={router.pathname}
                >{children}</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Transition;
