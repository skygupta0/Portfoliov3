import type { Experience } from "../types";

export const experience: Experience[] = [
	{
		companyName: "Remiges Technology Pvt. Ltd.",
		companyLogo:
			"https://res.cloudinary.com/sushain/image/upload/v1696175985/Portfolio/exp/Untitled_design_6_d8u4nv.png", // Keeping a generic logo placeholder, can be updated later
		jobRole: "React Developer — (CERSAI / Protean eGov)",
		duration: "Jan 2026 – Present",
		techstack: ["React 19", "TypeScript", "Vite", "Material UI (MUI)"],
		description: [
			"Modernized the CKYCRR 2.0 Portal by migrating the legacy build pipeline to Vite with vendor chunk splitting and lazy loading — delivering a significantly faster initial load time.",
			"Built a configuration-driven dynamic form engine that renders complex multi-step onboarding workflows (RE Registration, Nodal Officer) entirely from JSON configs, enabling zero-code workflow changes.",
			"Built a Bulk Operations management module — file uploads, real-time processing status, advanced filtering, and full CRUD — used by admins to manage large-scale regulatory records.",
			"Implemented robust regulatory validation: PAN/GSTIN verification, Aadhaar masking, and cross-tab OTP timer persistence to ensure secure and compliant form submissions.",
			"Developed reusable components (e.g., LabeledTextFieldWithUpload) with integrated validation, dynamic file preview, and document management capabilities.",
			"Optimized rendering performance using React.memo, custom hooks, and controlled state updates to minimize unnecessary re-renders.",
			"Built Region and Branch merging workflows with confirmation dialogs, validation safeguards, and visual status indicators."
		],
	},
	{
		companyName: "Remiges Technology Pvt. Ltd.",
		companyLogo:
			"https://res.cloudinary.com/sushain/image/upload/v1696175985/Portfolio/exp/Untitled_design_6_d8u4nv.png", // Keeping the same generic placeholder for the same company
		jobRole: "Angular Developer",
		duration: "Apr 2024 – Dec 2025",
		techstack: ["Angular", "RxJS", "Reactive Forms", "TypeScript"],
		description: [
			"Contributed to the NDML KRA platform, a regulated KYC onboarding system used by financial institutions for investor registration and compliance workflows.",
			"Built complex multi-step dynamic forms with Angular Reactive Forms — supporting conditional validation, modular form groups, and deeply nested field logic.",
			"Implemented RxJS-based draft persistence, allowing users to save and resume partial registrations without data loss.",
			"Designed a generic table filtering and search system reused across multiple administrative dashboards, reducing duplicated logic significantly.",
			"Optimized app performance via lazy loading, Angular OnPush change detection, and API request management through HTTP interceptors.",
			"Partnered closely with backend engineers to define API contracts, ensuring accurate validation, consistent error handling, and smooth integration."
		],
	},
];
