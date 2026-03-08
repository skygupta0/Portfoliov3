export interface SocialLinks {
	linkedin: string;
	github?: string;
	instagram: string;
	twitter?: string;
}

export interface About {
	firstName: string;
	lastName: string;
	gender: string;
	logo: string;
	primaryProfileImage?: string;
	secondaryProfileImage?: string;
	email: string;
	shortDesc: string;
	longDesc: string[];
	socialLinks: SocialLinks;
	resumeLink: string;
	hostedUrl: string;
}

export interface Skill {
	skillIcon: string;
	skillName: string;
	major?: boolean;
}

export interface Project {
	Github: string;
	ImageUrl: string;
	Library: string;
	ProjectLink: string;
	Techstack: string;
	Title: string;
}

export interface Experience {
	companyName: string;
	companyLogo: string;
	jobRole: string;
	duration: string;
	techstack?: string[];
	description: string[];
}

export interface Testimonial {
	name: string;
	profile: string;
	gender: string;
	type: string;
	country: string;
	occupation: string;
	feedback: string;
}
