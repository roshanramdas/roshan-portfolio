import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const experienceData = [
	{
		role: "Senior Associate Consultant (Senior Frontend Developer / Tech Lead)",
		company: "Infosys",
		period: "Jul 2024 – Present",
		projects: [
			{
				name: "Verizon — Micro-frontend E-Commerce & Supply Chain Platforms",
				highlights: [
					"Tech Lead for a micro-frontend e-commerce platform and two supply chain applications, driving enterprise-wide adoption of modern React patterns.",
					"Led a React 16 → 19 migration, converting stateful class components to hooks-based functional components and consolidating API calls into a unified service layer.",
					"Shipped an AI-powered chatbot enabling natural-language order/ticket lookups with direct navigation into Order Tracker and ITTS modules.",
					"Upgraded search infrastructure using Apache SOLR indexing and Broadleaf Commerce; hardened platforms with DAST/Fortify scans, New Relic monitoring, and Jenkins CI/CD pipelines.",
				],
			},
			{
				name: "reimagineX — AI-First ERP Transformation Platform",
				highlights: [
					"Architected and built the React 19 frontend from scratch using Redux Toolkit, Tailwind CSS, and a modular reusable component system.",
					"Engineered a real-time WebSocket run console featuring live agent-execution event streaming and Human-in-the-Loop (HITL) interrupt handling.",
					"Contributed to FastAPI/Python backend services and implemented LangChain/LangGraph multi-agent orchestration workflows for ERP transformation (SAP, Oracle, Salesforce).",
					"Delivered administrative tooling for RBAC, API key management, skill catalog administration, and real-time system logging.",
				],
			},
		],
		skills: [
			"React 19",
			"TypeScript",
			"Redux Toolkit",
			"FastAPI",
			"LangChain",
			"LangGraph",
			"WebSockets",
			"Tailwind CSS",
		],
	},
	{
		role: "Systems Engineer",
		company: "CGI",
		period: "Apr 2024 – Jun 2024",
		projects: [
			{
				name: "Omnichannel Cloud Contact Integration",
				highlights: [
					"Integrated an omnichannel enterprise contact center solution using Amazon Connect.",
					"Scaled web application workflows and integrated UI modules directly with AWS backend APIs.",
				],
			},
		],
		skills: ["Amazon Connect", "AWS APIs", "JavaScript", "REST APIs"],
	},
	{
		role: "Mobile Application Developer",
		company: "Capgemini",
		period: "Feb 2019 – Dec 2021",
		projects: [
			{
				name: "Agri-Tech & Core Banking Solutions",
				highlights: [
					"Engineered a React Native mapping POC for agriculture workflows, replacing a proprietary licensed SDK and reducing licensing overhead by ~30%.",
					"Integrated secure biometric authentication and financial-asset management modules into core banking mobile applications.",
					"Maintained enterprise-grade reliability through comprehensive unit/integration test suites and CI/CD pipelines.",
				],
			},
		],
		skills: [
			"React Native",
			"TypeScript",
			"Biometrics",
			"Mobile Architecture",
			"CI/CD",
		],
	},
];

export default function Resume() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container mx-auto min-h-screen px-4 pb-16 pt-24">
				<div className="grid w-full grid-cols-1 items-start gap-8 sm:grid-cols-2">
					<section className="space-y-6">
						<div>
							<h2 className="mb-2 text-3xl font-bold text-white">Experience</h2>
							<p className="text-gray-400">
								Enterprise platforms, AI engineering, and modern frontend
								architecture.
							</p>
						</div>
						{experienceData.map((experience) => (
							<Card
								key={`${experience.company}-${experience.role}`}
								className="p-5 text-white sm:p-6"
							>
								<article>
									<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
										<div>
											<h3 className="text-xl font-bold leading-snug">
												{experience.role}
											</h3>
											<p className="mt-1 text-zinc-300">{experience.company}</p>
										</div>
										<span className="w-fit shrink-0 rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
											{experience.period}
										</span>
									</div>

									<div className="mt-5 space-y-5">
										{experience.projects.map((project) => (
											<section key={project.name}>
												<h4 className="font-semibold text-zinc-100">
													{project.name}
												</h4>
												<ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300 marker:text-zinc-500">
													{project.highlights.map((highlight) => (
														<li key={highlight}>{highlight}</li>
													))}
												</ul>
											</section>
										))}
									</div>

									<ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills">
										{experience.skills.map((skill) => (
											<li
												key={skill}
												className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300"
											>
												{skill}
											</li>
										))}
									</ul>
								</article>
							</Card>
						))}
					</section>
					<div className="flex flex-col items-center justify-center text-white sm:sticky sm:top-24 sm:mt-8">
						<h2 className="text-3xl font-bold mb-4">Unlock My Journey</h2>
						<p className="text-gray-400 mb-4">
							Embark on an enriching journey with 6.5+ years of dedicated
							expertise.
						</p>
						<p className="text-gray-400 mb-4">
							Feel free to download my journey in DOCX format.
						</p>
						<a
							href="/resume.docx"
							download="RoshanRamdas.docx"
							className="bg-zinc-500 hover:bg-zinc-400 text-white font-bold py-2 px-4 rounded"
						>
							Discover Now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
