import { AiOutlineLink } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project, styles, initials }) => {
	const [open, setOpen] = useState(false);
	const screenTouch = window.matchMedia("(pointer: coarse)").matches

	return (
		<>
			{
				initials ?
					<motion.div
						layout
						initial={initials}
						animate={{ translateY: 0, opacity: 1 }
						}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{
							type: "spring",
						}}
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						onMouseOver={() => screenTouch && setOpen(true)}
						className="relative flex flex-col justify-center mx-auto overflow-hidden bg-gray-100 rounded-2xl group sm:w-2/3 lg:w-full"
					>

						<div className="z-10 flex items-center h-full px-6 py-2 w-86">
							<div>
								<img
									className="object-contain w-full h-full m-auto rounded-xl drop-shadow-md"
									src={project.ImageUrl}
									alt={project.Title + " image"}
								/>
							</div>
						</div>

						<div className="flex flex-col justify-between px-6 pb-4">
							<p className="mb-2 text-lg font-bold text-black">{project.Title}</p>

							<div>
								<p>
									<span className="font-bold">Techstack</span> - {project.Techstack}
								</p>
								<p>
									<span className="font-bold">Libraries</span> - {project.Library}
								</p>
							</div>
						</div>

						<div
							className={`${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
								} absolute flex top-0 h-full w-full my-auto bottom-0  group-hover: z-20 right-0 bg-sky-900/70 duration-700 rounded-2xl`}
						>
							<div
								className="flex justify-between gap-6 m-auto text-3xl w-max h-max">
								<Link
									to={project.Github}
									target="_blank"
									className="p-2 duration-500 rounded-full text-white hover:rotate-6 bg-black/50"
								>
									<AiFillGithub />
								</Link>

								<Link
									to={project.ProjectLink}
									target="_blank"
									className="p-2 duration-500 rounded-full text-white hover:rotate-6 bg-sky-500/70"
								>
									<AiOutlineLink />
								</Link>

								<button
									onClick={() => setOpen(false)}
									className="p-2 duration-500 rounded-full bg-rose-500/70 hover:rotate-90 text-white"
								>
									<IoIosClose />
								</button>
							</div>
						</div>

						<div
							className={`top-0 absolute w-full h-1/2 bg-gradient-to-br from-gray-700 via-gray-900 to-black`}
						></div>
					</motion.div >
					:
					<div
						style={styles}
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						onMouseOver={() => screenTouch && setOpen(true)}
						className="relative flex flex-col justify-center mx-auto overflow-hidden bg-gray-100 rounded-2xl group sm:w-2/3 lg:w-full"
					>
						<div className="z-10 flex items-center h-full px-6 py-2 w-86 mt-4">
							<div>
								<img
									className="object-contain w-full h-full m-auto rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-premium-border"
									src={project.ImageUrl}
									alt={project.Title + " image"}
								/>
							</div>
						</div>

						<div className="flex flex-col px-6 pb-6 pt-2 h-1/2 z-10 text-premium-textMuted bg-premium-surface/90 backdrop-blur-sm rounded-b-2xl">
							<p className="mb-2 text-lg font-bold text-white tracking-wide">{project.Title}</p>

							<div className="text-sm space-y-1.5">
								<p>
									<span className="font-semibold text-premium-primary">Techstack</span>: {project.Techstack}
								</p>
								<p>
									<span className="font-semibold text-premium-primary">Libraries</span>: {project.Library}
								</p>
							</div>
						</div>

						<div
							className={`${open ? "translate-y-0 opacity-100 z-20" : "translate-y-full opacity-0 -z-10"
								} absolute flex top-0 h-full w-full my-auto bottom-0 right-0 bg-premium-bg/80 backdrop-blur-md duration-500 rounded-2xl`}
						>
							<div
								className="flex justify-center items-center gap-6 m-auto text-2xl w-full h-full">
								<Link
									to={project.Github}
									className="p-3 duration-300 rounded-full text-white hover:text-premium-textMain hover:scale-110 bg-premium-surface border border-premium-border hover:border-white shadow-lg"
								>
									<AiFillGithub />
								</Link>

								<Link
									to={project.ProjectLink}
									className="p-3 duration-300 rounded-full text-premium-bg bg-premium-secondary hover:bg-premium-primary hover:scale-110 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
								>
									<AiOutlineLink />
								</Link>

								<button
									onClick={() => setOpen(false)}
									className="p-3 duration-300 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/50 hover:bg-rose-500 hover:text-white hover:rotate-90"
								>
									<IoIosClose />
								</button>
							</div>
						</div>

						<div className={`top-0 absolute w-full h-1/2 bg-gradient-to-br from-premium-surface via-premium-bg to-black opacity-80`} />
					</div>
			}
		</>

	);
};

export default ProjectCard;
