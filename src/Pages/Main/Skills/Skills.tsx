import { useRef } from "react";
import SkillCard from "./SkillCard";
import { skills } from "../../../data/skills";
import { useInView } from "framer-motion";

const Skills: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} name="skills" className="flex flex-col items-center justify-center text-center py-28 rounded-3xl sm:text-start text-premium-textMuted">
			<div className="flex flex-col items-center mx-auto">
				<h2 className="my-2 text-4xl font-bold heading text-white tracking-tight">Technical Arsenal</h2>
				<p className="mt-2 text-premium-textMuted/80 text-center max-w-lg">
					Technologies marked with a{" "}
					<span className="text-premium-primary font-medium px-2 py-0.5 rounded-md bg-premium-primary/10 border border-premium-primary/20">
						glow
					</span>{" "}
					represent my core expertise.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-4 mx-auto my-10 w-full md:w-max sm:grid-cols-4 md:grid-flow-col-4 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-5 rounded-3xl">
				{skills.map((skill, key) => {
					return (
						<SkillCard
							key={key}
							num={key}
							isInView={isInView}
							skillIcon={skill.skillIcon}
							major={skill.major}
							skillName={skill.skillName}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Skills;
