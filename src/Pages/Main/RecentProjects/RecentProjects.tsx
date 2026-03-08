import { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";
import ProjectCard from "../../../Global/ProjectCard";
import memoji from "../../../data/assets/projMemoji.svg";
import { useInView } from "framer-motion";
import { about } from "../../../data/About";

const RecentProjects: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} name="projects" className="min-h-[50dvh] py-24 lg:py-48 xl:py-36 flex flex-col justify-center xl:px-8 text-premium-textMuted overflow-hidden">
			<div className="relative flex items-center mx-auto">
				<div className="flex flex-col items-center z-10">
					<h2 className="text-4xl font-bold heading text-white tracking-tight mb-4">Featured Work</h2>
					<p className="text-center text-premium-textMuted/80 text-lg max-w-2xl">
						Here are a few past projects I've worked on. Want to see more?
						{" "}
						<Link
							target="_blank"
							to={`mailto:${about.email}`}
							className="py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 cursor-pointer inline-block"
						>
							<span className="text-premium-secondary bg-left-bottom bg-gradient-to-r from-premium-secondary/20 to-premium-secondary bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-0.5 font-medium ml-1">
								Get in touch
							</span>
						</Link>
					</p>
				</div>
				<div className="absolute hidden -right-40 -top-20 rotate-12 xl:block filter drop-shadow-2xl opacity-80 z-0">
					<img className="w-40 h-40" src={memoji} alt="" />
				</div>
			</div>

			<div className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 lg:m-8">
				{[...projects]
					.reverse()
					.slice(0, 3)
					.map((project, key) => {
						return <ProjectCard
							key={key}
							project={project}
							styles={{
								transform: isInView ? "none" : "translateY(200px)",
								opacity: isInView ? 1 : 0,
								transition: `all ${key + 0.5}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
							}}
						/>;
					})}
			</div>
		</section>

	);
};

export default RecentProjects;
