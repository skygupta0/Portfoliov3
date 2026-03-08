import { IoCallOutline } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useInView } from "framer-motion";
import { about } from "../../../data/About";
import memoji from "../../../data/assets/memoji2.png"

const About: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			tabIndex={3}
			ref={ref}
			name="about"
			className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-transparent sm:text-justify lg:text-start lg:flex-row lg:justify-between lg:gap-10 xl:gap-0 focus:outline-none lg:py-0"
		>

			<div className="relative flex flex-col items-center w-full sm:w-2/3 lg:w-1/3 xl:w-1/4">
				<div className="w-2/3 overflow-hidden lg:w-full"
					style={about.secondaryProfileImage ? {
						borderRadius: "55% 45% 42% 58% / 55% 59% 41% 45%"
					} : undefined}>
					<img className="object-cover w-full h-full"
						src={about.secondaryProfileImage ?? memoji}
						alt="pfp" />
				</div>

				<h2 className="mt-8 text-3xl font-extrabold text-center lg:hidden lg:text-start xl:text-4xl heading">{about.firstName + " " + about.lastName}</h2>

				<div className="flex justify-center gap-5 my-5 text-2xl xl:hidden sm:flex-col lg:flex-row sm:absolute lg:static -right-20 top-20 lg:my-10">
					<RouterLink
						tabIndex={6}
						style={{
							transform: isInView ? "scale(1)" : "scale(0)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
						target="_blank"
						to={about.socialLinks.linkedin}
						className="p-2 rounded-full bg-sky-600 text-slate-50 focus:outline-none focus:outline-slate-500"
					>
						<FaLinkedinIn />
					</RouterLink>

					{
						about.socialLinks.github && (
							<RouterLink
								tabIndex={7}
								style={{
									transform: isInView ? "scale(1)" : "scale(0)",
									opacity: isInView ? 1 : 0,
									transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
								to={about.socialLinks.github}
								target="_blank"
								className="p-2 rounded-full bg-slate-800 text-slate-50 focus:outline-none focus:outline-slate-500"
							>
								<AiFillGithub />
							</RouterLink>
						)
					}

					<RouterLink
						tabIndex={8}
						style={{
							transform: isInView ? "scale(1)" : "scale(0)",
							opacity: isInView ? 1 : 0,
							transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
						to={about.socialLinks.instagram}
						target="_blank"
						className="p-2 rounded-full bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 text-slate-50 focus:outline-none focus:outline-slate-500"
					>
						<AiOutlineInstagram />
					</RouterLink>

					{
						about.socialLinks.twitter && (
							<RouterLink
								tabIndex={9}
								style={{
									transform: isInView ? "scale(1)" : "scale(0)",
									opacity: isInView ? 1 : 0,
									transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
								to={about.socialLinks.instagram}
								target="_blank"
								className="p-2 rounded-full bg-gradient-to-br bg-sky-500 focus:outline-none focus:outline-slate-500"
							>
								<AiOutlineTwitter />
							</RouterLink>
						)
					}

				</div>

			</div>

			<div className="sm:text-base xl:text-lg lg:w-2/3 xl:w-1/2 text-premium-textMuted">
				<h2 className="hidden text-3xl font-extrabold lg:block xl:text-5xl heading text-white mb-6 tracking-tight">{about.firstName + " " + about.lastName}</h2>

				<div className="bg-premium-surface p-6 sm:p-8 rounded-2xl border border-premium-border shadow-lg relative overflow-hidden group">
					<div className="absolute top-0 right-0 w-32 h-32 bg-premium-accent/5 rounded-full filter blur-[50px] group-hover:bg-premium-accent/10 transition-colors duration-500"></div>
					<p className="my-3 text-lg leading-relaxed relative z-10">
						I'm a <span className="font-semibold text-premium-textMain">Front-End Developer</span> with over 2 years of experience building web applications for the FinTech and KYC/CKYC domains. I specialize in{" "}
						<span className="font-semibold text-premium-primary">
							React (with TypeScript and Vite) and Angular
						</span>
						. I enjoy solving complex UI logic, building reusable components, and tackling large forms with tricky validation rules.
						<Link
							tabIndex={4}
							to="skills"
							spy={true}
							smooth={true}
							className="py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 cursor-pointer inline-block ml-1"
						>
							<span className="text-premium-accent bg-left-bottom bg-gradient-to-r from-premium-accent/20 to-premium-accent bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-0.5 font-medium">
								See more skills
							</span>
						</Link>
						.
					</p>

					<p className="text-lg leading-relaxed relative z-10 mt-4 text-premium-textMuted/80">
						I have hands-on experience moving legacy pages to modern frameworks and working closely with backend teams to build great user experiences, ensuring the highest level of professionalism, technical proficiency, and client satisfaction in every aspect of web development.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 mt-8">
					<RouterLink
						tabIndex={5}
						to={about.resumeLink} target="_blank"
						className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-premium-bg bg-white font-semibold text-base duration-300 w-full sm:w-max focus:outline-none hover:bg-premium-primary hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
						Resume <CgFileDocument className="text-xl" />
					</RouterLink>

					<RouterLink
						tabIndex={5}
						to="https://topmate.io/akash_gupta_ai" target="_blank"
						className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-premium-textMain border border-premium-border bg-premium-surface font-semibold text-base duration-300 w-full sm:w-max focus:outline-none hover:border-premium-accent hover:text-premium-accent hover:bg-premium-accent/5">
						Book 1:1 Call <IoCallOutline className="text-xl" />
					</RouterLink>
				</div>
			</div>

			<div className="flex-col hidden gap-6 text-3xl xl:flex">
				<RouterLink
					tabIndex={6}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
					}}
					target="_blank"
					to={about.socialLinks.linkedin}
					className="p-2 duration-500 hover:shadow-sky-300 rounded-full shadow-lg bg-sky-600 hover:rotate-6 text-slate-50 focus:outline-none focus:outline-slate-500"
				>
					<FaLinkedinIn />
				</RouterLink>

				<RouterLink
					tabIndex={7}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
					}}
					to={about.socialLinks.github ?? "#"}
					target="_blank"
					className="p-2 duration-500 hover:shadow-slate-400 rounded-full shadow-lg bg-slate-800 hover:rotate-6 text-slate-50 focus:outline-none focus:outline-slate-500"
				>
					<AiFillGithub />
				</RouterLink>

				<RouterLink
					tabIndex={8}
					style={{
						transform: isInView ? "none" : "translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
					}}
					to={about.socialLinks.instagram}
					target="_blank"
					className="p-2 hover:shadow-rose-300 shadow-lg rounded-full bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 text-slate-50 focus:outline-none focus:outline-slate-500"
				>
					<AiOutlineInstagram />
				</RouterLink>
			</div>
		</section >
	);
};

export default About;
