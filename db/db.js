export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Pranjali Yadav. I’m currently working as Data Analyst in the Advance Analytics team for Georgia Pacific LLC. I mostly work on creating KPIs, engineering data to create tools for reporting and building predictive machine learning models. I have a master's degree from Penn State, University Park.",
				"I love to learn new things.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology,a business, or to just say hi, feel free to send me an email. My email address is: pranjal.10698@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python, R, MATLAB, MySql",
			color: "1",
			percentage: "80",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "AWS(EC2, S3), Heroku, Netlify",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub, JIRA, Trello",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman, Chrome DevTools",
			color: "3",
			percentage: "80",
		},
		{
			title: "Saas products",
			skillName: "CleverTap, FreshDesk",
			color: "5",
			percentage: "50",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		mlProjects: [
			{
				projectName: "Regression",
				image: "images/programmingdiaries.png",
				summary:
					"Bread and butter of Machine Learning",
				preview: "https://github.com/pranjaliy/machine-learning/",
				techStack: [
					"Flask",
					"Github",
					"Visual Studio",
					"Rest API",
				],
			},
			{
				projectName: "Classification",
				image: "images/findyourbank.png",
				summary:
					"Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Decision Tree",
				image: "images/portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Unsupervised Learning",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		nn: [
			{
				projectName: "Image Classification",
				image: "images/pizzaorderchatbot.png",
				summary:
					"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
		],
		other: [
			{
				projectName: "NLP",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "Time Series Modelling",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		statistics: [
			{
				projectName: "Hypothesis Testing",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Probability",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "Data Scientist",
			duration: "October 2021 - Present",
			subtitle: "Georgia Pacific LLC",
			details: [
				"Working on the products in the healthcare/digital therapeutics domain."
			],
			tags: [
				"PowerBi",
				"Tableau",
				"AmazonRedshift",
				"DAX",
			],
			icon: " ",
		},
		{
			title: "Data Scientist",
			duration: "Jan 2021 - Jun 2021",
			subtitle: "Ahold Delhaize",
			details: [
				"Implemented Aadhaar Enabled Payment services such as Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements, and Money transfer; completed more than 20 story points in each sprint.",
				"Integrated QR Code and reduced the effective time by 50 percent to load money into wallet, Clevertap events to track user actions, Freshdesk ticketing service and chat-bot services. Worked on user onboarding, approval, and finance interfaces.",
				"Co-ordinated closely with the product team, backend team, android team, and QA team to deliver the product builds before deadlines.",
			],
			tags: [
				"NLP",
				"BERT",
				"Github",
				"Spacy",
				"NER",
				"Pyspark",
			],
			icon: "qrcode",
		},
		{
			title: "Supply Chain Analyst",
			duration: "Jun 2020 - Dec 2021",
			subtitle: "Ahold Delhaize",
			details: [
				"Worked as a full stack developer to support tech team.",
				"Developed a customer Web Application from scratch for social media management.",
			],
			tags: ["Azure"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Master's of Science in Industrial Engineering",
			duration: "Aug 2019 - Aug 2021",
			subtitle: "Penn State, University Park",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors of Science in Mechanical Engineering",
			duration: "Aug 2015 - May 2019",
			subtitle: "Pune University,IND",
			details: [
				"Qualified GATE-2020.",
				"Active Competitive Programmer with CodeChef Rating 1841*.",
				"Received 500+ stars and 300+ forks on GitHub projects.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},

	],
	footer: [
		{
			label: "Pranjali's Profiles",
			data: [
				{
					text: "Medium",
					link: "https://medium.com/@misc-notes",
				},
				{
					text: "GitHub",
					link: "https://github.com/pranjaliy",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/pranjaliy/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/pranjaliy/pranjaliy.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/vinaysomawat/",
				},

			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Pranjali Yadav.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
