import { Link } from "react-scroll";
import { about } from "../../../data/About";
import { motion } from "framer-motion";

const Home: React.FC = () => {
	const animationPlayed = sessionStorage.getItem('animationPlayed') || false;

	return (
		<section
			tabIndex={1}
			name="home"
			className="relative flex items-center justify-center min-h-screen pt-20 text-base lg:flex-row sm:text-lg md:text-xl lg:justify-around text-premium-textMuted overflow-hidden"
		>
			{/* Background ambient glow */}
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-50 z-0"></div>
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-premium-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-50 z-0"></div>

			<div className="text-center z-10 relative px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={animationPlayed ? {} : { duration: 1, delay: 0.2 }}
					className="mb-4 inline-block px-4 py-1.5 rounded-full border border-premium-accent/30 bg-premium-accent/10 text-premium-accent text-sm sm:text-base font-medium tracking-wide"
				>
					Available for new opportunities
				</motion.div>

				<motion.h1
					className="text-5xl font-black text-white heading sm:text-7xl lg:text-8xl xl:text-9xl mb-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={animationPlayed ? {} : { duration: 2, delay: 0.5 }}
				>
					Hello, I'm{" "}
					<br className="sm:hidden" />
					<motion.span
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={animationPlayed ? {} : { duration: 1.5, delay: 1 }}
					>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-premium-primary via-premium-secondary to-premium-accent filter drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] inline-block">
							{about.firstName}
						</span>
					</motion.span>
				</motion.h1>

				<motion.div
					className="h-1.5 bg-gradient-to-r from-premium-primary to-premium-accent my-8 mx-auto rounded-full"
					initial={{ width: "0px" }}
					animate={{ width: "8rem" }}
					transition={animationPlayed ? {} : { duration: 1.5, delay: 1.5 }}
				/>

				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={animationPlayed ? {} : { duration: 1.5, delay: 2 }}
					className="max-w-2xl mx-auto"
				>
					<p className="w-full font-light text-premium-textMuted text-lg sm:text-xl md:text-2xl leading-relaxed">
						A <span className="text-premium-primary font-medium">Front-End Developer</span> specializing in 
						crafting modern, high-performance web applications with 
						<span className="text-white font-medium"> Angular</span> and <span className="text-white font-medium">React</span>.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
						<Link
							to="projects"
							spy={true}
							smooth={true}
							className="cursor-pointer font-medium px-8 py-3.5 rounded-full bg-white text-premium-bg hover:bg-premium-primary hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 w-full sm:w-auto"
						>
							View My Work
						</Link>
						<Link
							tabIndex={2}
							to="about"
							spy={true}
							smooth={true}
							className="cursor-pointer font-medium px-8 py-3.5 rounded-full border w-full sm:w-auto border-premium-border text-white hover:border-premium-accent hover:text-premium-accent transition-all duration-300"
						>
							About Me
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Home;
