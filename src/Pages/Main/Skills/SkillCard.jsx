import React from "react";

const SkillCard = ({ skillIcon, major, skillName, isInView, num }) => {
	return (
		<div
			style={{
				transform: isInView ? "none" : "translateY(200px)",
				opacity: isInView ? 1 : 0,
				transition: `all ${Math.sqrt((num + 1) / 3)}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
			}}
			className={`
				${major 
					? "bg-premium-surface border border-premium-primary shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:border-premium-primary/80" 
					: "bg-premium-surface/80 border border-premium-border hover:bg-premium-surface hover:border-premium-border/80"} 
				items-center justify-around flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 h-28 sm:h-32 rounded-2xl text-center group transition-all duration-300 hover:-translate-y-1`
			}
		>
			<div className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 group-hover:scale-110 transition-transform duration-300">
				<img
					className="object-contain w-full h-full filter drop-shadow-md"
					src={skillIcon}
					alt={skillName}
				/>
			</div>
			<p className={`text-xs sm:text-sm xl:text-sm font-medium tracking-wide ${major ? "text-premium-primary" : "text-premium-textMuted group-hover:text-premium-textMain"} transition-colors`}>
				{skillName}
			</p>
		</div>
	);
};

export default SkillCard;
