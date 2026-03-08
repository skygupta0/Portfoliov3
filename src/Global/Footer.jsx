import { HiOutlineChatAlt2 } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { about } from "../data/About";
import memoji from "../data/assets/memoji1.png"

const Footer = () => {
	return (
		<section className="text-premium-textMuted mt-20">
			<div className="flex flex-col items-center gap-8 justify-center pb-20 text-center px-4 sm:px-8">
				<p className="text-2xl sm:text-4xl xl:text-5xl font-bold w-full max-w-4xl text-white tracking-tight leading-tight">
					Looking forward to building something for your <br className="hidden sm:block" />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-primary to-premium-accent">business or organization?</span>
				</p>

				<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
					<Link
						to="https://topmate.io/akash_gupta_ai"
						target="_blank"
						className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-premium-bg font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 w-full sm:w-auto">
						Let's queue up a time to chat <HiOutlineChatAlt2 className="text-2xl" />
					</Link>
				</div>
			</div>

			<footer className="relative flex pt-10 pb-8 bg-premium-surface border-t border-premium-border px-5 sm:px-14 lg:px-16 xl:px-24 sm:py-14 text-premium-textMuted">
				<div className="flex flex-col w-full divide-y divide-premium-border lg:flex-row lg:divide-y-0 lg:divide-x">
					<div className="flex items-center justify-center lg:justify-start flex-1 gap-5 py-8 lg:py-0 lg:pr-10">
						<div className="w-20 h-20 overflow-hidden rounded-full sm:w-24 sm:h-24 border-2 border-premium-accent/30 p-1">
							<img
								className="object-cover w-full h-full rounded-full"
								src={about.primaryProfileImage ?? memoji}
								alt="pfp"
							/>
						</div>

						<div className="text-left">
							<p className="font-bold text-xl text-white">{about.firstName} {about.lastName}</p>
							<p className="text-sm mt-1">
								Mail me at{" "}
								<span>
									<Link
										target="_blank"
										to={`mailto:${about.email}`}
										className="text-premium-primary hover:text-premium-accent transition-colors underline-offset-4 hover:underline"
									>
										{about.email}
									</Link>
								</span>
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center lg:items-end justify-center flex-1 gap-5 py-8 lg:py-0 lg:pl-10">
						<h3 className="text-xl font-bold xl:text-2xl text-white">Reach out on</h3>

						<div className="flex gap-4 text-2xl">
							<Link
								to={about.socialLinks.linkedin}
								target="_blank"
								className="p-3 rounded-full bg-premium-bg border border-premium-border hover:border-premium-primary hover:text-premium-primary text-white transition-all duration-300 hover:-translate-y-1"
							>
								<FaLinkedinIn />
							</Link>

							{
								about.socialLinks.github && (
									<Link
										to={about.socialLinks.github}
										target="_blank"
										className="p-3 rounded-full bg-premium-bg border border-premium-border hover:border-white hover:text-white text-white transition-all duration-300 hover:-translate-y-1"
									>
										<AiFillGithub />
									</Link>
								)}

							<Link
								to={about.socialLinks.instagram}
								target="_blank"
								className="p-3 rounded-full bg-premium-bg border border-premium-border hover:border-rose-400 hover:text-rose-400 text-white transition-all duration-300 hover:-translate-y-1"
							>
								<AiOutlineInstagram />
							</Link>

							{
								about.socialLinks.twitter &&
								(
									<Link
										to={about.socialLinks.twitter}
										target="_blank"
										className="p-3 rounded-full bg-premium-bg border border-premium-border hover:border-sky-400 hover:text-sky-400 text-white transition-all duration-300 hover:-translate-y-1"
									>
										<AiOutlineTwitter />
									</Link>
								)
							}
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
