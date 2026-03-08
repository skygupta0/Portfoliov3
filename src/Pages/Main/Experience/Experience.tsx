import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../../../data/experience";

const Experience: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			name="experience"
			className="flex flex-col items-center justify-center min-h-screen py-24 sm:mb-12 text-premium-textMuted"
		>
			<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateY(100px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
				className="w-full">
				<div className="container max-w-5xl mx-auto sm:px-4 sm:py-12">
					<div className="flex flex-col gap-6 mx-4 lg:flex-row">
						<div className="lg:w-1/3">
							<div className="mb-5 sm:text-left sm:mb-14 before:block before:w-24 before:h-2 before:mb-5 before:rounded-md sm:before:mx-0 before:bg-gradient-to-r before:from-premium-primary before:to-premium-accent">
								<h3 className="text-3xl font-bold heading xl:text-4xl text-white mb-3 tracking-tight">
									Experience
								</h3>
								<span className="text-base font-medium text-premium-textMuted/80">
									These are the companies where I have previously worked.
								</span>
							</div>
						</div>
						<div className="relative space-y-6 sm:px-4 lg:w-2/3">
							<div className="space-y-12 relative pl-6 sm:px-6 sm:space-y-10 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:left-0 before:bg-gradient-to-b before:from-premium-primary before:to-premium-bg text-sm sm:text-base">
								{
									experience.map((exp, key) => {
										return (
											<div key={key} className="relative flex flex-col bg-premium-surface p-6 sm:p-8 rounded-2xl border border-premium-border/50 hover:border-premium-accent/30 transition-colors duration-300 shadow-xl group">
												<div className="absolute overflow-hidden rounded-full -left-10 sm:-left-[42px] xl:-left-[46px] w-8 h-8 xl:w-10 xl:h-10 ring-4 ring-premium-bg bg-premium-surface">
													<img
														className="object-cover w-full h-full p-1"
														src={exp.companyLogo}
														alt={exp.companyName}
													/>
												</div>

												<h3 className="text-xl font-bold xl:text-2xl text-premium-textMain group-hover:text-white transition-colors">
													{exp.jobRole}
												</h3>
												
												<h4 className="text-lg font-medium text-premium-primary mt-1">
													{exp.companyName}
												</h4>

												<time className="text-sm text-premium-textMuted/60 uppercase tracking-wider font-medium mt-2 mb-4 block">
													{exp.duration}
												</time>

												{
													exp.techstack &&
													<div className="flex flex-wrap gap-2 mb-6">
														{
															exp.techstack.map((tech, key) => {
																return (
																	<span key={key} className="px-3 py-1 text-xs font-semibold text-premium-accent bg-premium-accent/10 border border-premium-accent/20 rounded-full">
																		{tech}
																	</span>
																)
															})
														}
													</div>
												}

												<ul className="list-none space-y-3 text-justify">
													{
														exp.description.map((desc, key) => {
															return (
																<li key={key} className="leading-relaxed relative pl-5 before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-premium-secondary before:rounded-full before:left-0 before:top-2">
																	{desc}
																</li>
															)

														})
													}
												</ul>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
};

export default Experience;
