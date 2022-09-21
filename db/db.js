export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Pranjali Yadav. I’m currently working as Data Analyst in the Advance Analytics team for Georgia Pacific LLC.",
				"I mostly work on creating KPIs, engineering data to create tools for reporting and building predictive machine learning models.",
				"I have a master's degree from Penn State, University Park and a Bachelors degree in Machanical Engineering.",
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
			skillName: "Python, R, MATLAB, MySql, Pyspark",
			color: "1",
			percentage: "80",
		},
		{
			title: "Deployment Tools",
			skillName: "Docker, Github, RestAPI, FastAPI",
			color: "6",
			percentage: "65",
		},
		{
			title: "Visualization Tools",
			skillName: "Power BI, Tableau, Alteryx",
			color: "2",
			percentage: "90",
		},
		{
			title: "Other Tools",
			skillName: "Amazon Redshift, Microsoft Azure, Confluence, Jira",
			color: "3",
			percentage: "70",
		},
		{
			title: "Experience",
			skillName: "Machine Learning, NLP, Neural Networks, Statistics",
			color: "5",
			percentage: "90",
		},
		{
			title: "Editor",
			skillName: "VS Code, Atom",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		ml: [
			{
				projectName: "Regression",
				image: "images/ml.png",
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
		],
		nn: [
			{
				projectName: "Rapid Constraints Topology Optimization using Deep Neural Network",
				image: "images/nn.png",
				summary:
					"Exploring the effectiveness of deep generative models on topology optimization problems in additive manufacturing field",
				preview:
					"",
				techStack: ["cnn", "GAN","U-Net"],
			},
		],
	},
	experience: [
		{
			title: "Data Scientist",
			duration: "October 2021 - Present",
			subtitle: "Georgia Pacific LLC",
			details: [
				"Developed time series forecasting model using ARIMA and Machine Learning to predict production and reduced RMSE by 9%."
			],
			tags: [
				"PowerBi",
				"Tableau",
				"AmazonRedshift",
				"DAX",
			],
			icon: "group",
		},
		{
			title: "Data Scientist",
			duration: "Jan 2021 - Jun 2021",
			subtitle: "Ahold Delhaize",
			details: [
				"Developed Named Entity Recognition(NER) transformer model using BERT embedding to improve the search recommendation of e-commerce website to improve cosine similarity score for 1000+ unique products.",
				"Constructed clusters for 1000+ unique retail products with various unsupervised learning methods like TSNE, DBSCAN to visualize effect of new transformer model.",
				],
			tags: [
				"NLP",
				"BERT",
				"Github",
				"Spacy",
				"NER",
				"Pyspark",
			],
			icon: "group",
		},
		{
			title: "Supply Chain Analyst",
			duration: "Jun 2020 - Dec 2021",
			subtitle: "Ahold Delhaize",
			details: [
				"Developed machine learning based prediction model for On-Time In-Full delivery of inbound loads for third largest US grocery business with 91% recall and 86% accuracy.",
				"Identified the source of data in Azure data lake, designed pipelines for ETL (Extract,Transform,Load) and selected important features using p-value < 0.05 .",
				"COVID 19 Disruption Analysis: Designed an interactive dashboard to study changes before,during and after in working hours and productivity of 2000+ employees.",
			],
			tags: ["Azure","Machine Learning","Pyspark","Confluence/Jira"],
			icon: "group",
		},
	],

	education: [
		{
			title: "Master's of Science in Industrial Engineering",
			duration: "Aug 2019 - Aug 2021",
			subtitle: "Penn State, University Park",
			details: [	],
			tags: [
				"Machine Learning & Pattern Recognition",
				"Data Mining",
				"Linear Programming",
				"Advanced Engineering Analytics",
				"Supply Chain Engineering",
				"Design of Experiments",
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors of Science in Mechanical Engineering",
			duration: "Aug 2015 - May 2019",
			subtitle: "Pune University,IND",
			details: [

			],
			tags: [
				"Thermodynamics",
				"Fluid Mechanics",
				"Material Engineering",
				"Heat Transfer",
				"Mathematics",
				"Strength and Design of Material",
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
					link: "https://www.linkedin.com/in/pranjaliyadav/",
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
