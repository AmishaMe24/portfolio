"use client";
import Image from 'next/image';
import pawstime from '../../../public/pawstime.png';
import realTimeMusicPlayer from '../../../public/realTimeMusicPlayer.jpg';
import world_stock from '../../../public/world_stock.png';
import netflix_dashboard from '../../../public/netflix_dashboard.png';
import rising_indians from '../../../public/rising_indians.png';
import tech_care from '../../../public/tech_care.png';
import source_sight from '../../../public/source_sight.png';
import ecommerce from '../../../public/ecommerce.png';
import health_connect from '../../../public/health_connect.jpg';
import inventory from '../../../public/inventory.png';
import codeTranslator from '../../../public/codeTranslator.png';
import faceMaskDetection from '../../../public/faceMaskDetection.png';
import superstore_dashboard from '../../../public/superstore_dashboard.png';
import speechrecognition from '../../../public/speechrecognition.png';
import evchargingstation from '../../../public/evchargingstation.png';
import aiDataVisualizationAgent from '../../../public/aiDataVisualizationAgent.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type ProjectCategory = 'All' | 'Full Stack' | 'Machine Learning' | 'Data Analytics';

interface Project {
    title: string;
    description: string;
    image: any;
    link: string;
    technologiesUsed: string[];
    category: ProjectCategory[];
}

const Projects = () => {
    const [activeTab, setActiveTab] = useState<ProjectCategory>('Full Stack');

    const projects: Project[] = [
        {
            title: "HealthConnect",
            description: "Developed a web application during HoyaHacks with multi-language support and an AI-driven chatbot using React/Next.js, FastAPI, Pydantic, SQLAlchemy, and MongoDB. Integrated Ollama, LangChain, and Retrieval-Augmented Generation (RAG) with vector database to enable context-aware, accurate medical responses.",
            image: health_connect,
            link: "https://github.com/AmishaMe24/HealthConnect",
            technologiesUsed: ["React", "Next.js", "FastAPI", "Pydantic", "SQLAlchemy", "MongoDB", "Ollama", "LangChain", "RAG"],
            category: ['Full Stack', 'Machine Learning']
        },
        {
            title: "eCommerce App",
            description: "Built a full-stack web app with React/Next.js, Node.js, PostgreSQL, and Stripe API, featuring user authentication, product management, and a secure checkout system. Designed a scalable Java and Spring Boot backend with advanced search, filtering, and role-based access control (RBAC).",
            image: ecommerce,
            link: "https://github.com/AmishaMe24/ecommerce",
            technologiesUsed: ["React", "Next.js", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Stripe API"],
            category: ['Full Stack']
        },
        {
            title: "PawsTime",
            description: "PawsTime is a full-stack web application which empowers veterinary practices with online appointment booking, secure logins, dedicated dashboards for both admins and pet owners, and AWS-powered CI/CD for reliable performance and scalability.",
            image: pawstime,
            link: "https://github.com/AmishaMe24/PawsTime",
            technologiesUsed: ["React", "Node.js", "Express", "MongoDB", "AWS"],
            category: ['Full Stack']
        },
        {
            title: "SourceSight",
            description: "A full-stack data visualization application that processes and displays automotive sales data from multiple sources. Features include a RESTful API built with FastAPI, multi-threaded job queue for background processing, interactive D3.js visualizations, and independent filtering for different data sources.",
            image: source_sight,
            link: "https://github.com/AmishaMe24/data-viz-app",
            technologiesUsed: ["FastAPI", "React", "D3.js", "SQLAlchemy", "Tailwind CSS", "SQLite", "Python", "Pydantic", "Pytest"],
            category: ['Full Stack', 'Data Analytics']
        },
        {
            title: "Healthcare Dashboard",
            description: "A modern, responsive dashboard for healthcare professionals to monitor patient vital signs and medical history. Features include patient management, vital signs monitoring with interactive charts for blood pressure trends, diagnostic history tracking, and a fully responsive design for both desktop and mobile devices.",
            image: tech_care,
            link: "https://github.com/AmishaMe24/healthcare-dashboard",
            technologiesUsed: ["React", "Chart.js", "Tailwind CSS", "Axios"],
            category: ['Full Stack']
        },
        {
            title: "Inventory Management System",
            description: "Developed the backend using ASP.NET Core, implementing CRUD operations for products, order placement with inventory validation, and async order fulfillment with thread-safe concurrency control. Designed with SOLID principles, DI, and Repository Pattern for clean, testable architecture. Implemented robust error handling, logging, and unit tests (using xUnit/Moq).",
            image: inventory,
            link: "https://github.com/AmishaMe24/Inventory-Management-System",
            technologiesUsed: ["C#", "ASP.NET Core", "PostgreSQL", "xUnit/Moq"],
            category: ['Full Stack']
        },
        {
            title: "Global SuperStore Dashboard",
            description: "Developed interactive dashboard using Dash on Google Cloud to visualize sales trends, profitability, and customer behavior across regions. Optimized insights through PCA, outlier detection, feature engineering, and normality tests, enabling data-driven decision-making for retail operations.",
            image: superstore_dashboard,
            link: "https://dashapp-795931816520.northamerica-northeast1.run.app/",
            technologiesUsed: ["Python", "Dash", "Plotly", "GCP"],
            category: ['Data Analytics']
        },
        {
            title: "AI-DataVisualization Agent",
            description: "This Streamlit app leverages AI to transform raw data into actionable insights. Simply upload a CSV, ask questions in natural language, and watch the AI agent generate code and visualizations to reveal the story within your data.",
            image: aiDataVisualizationAgent,
            link: "https://amishame24-ai-datavisualizat-ai-data-visualisation-agent-cmhrlr.streamlit.app/",
            technologiesUsed: ["Python", "Streamlit", "Together AI", "E2b"],
            category: ['Data Analytics', 'Machine Learning']
        },
        {
            title: "AI Code Translator",
            description: "A powerful web application built with Next.js and TypeScript that leverages the Gemini API for intelligent code translation. This tool uses advanced prompt engineering techniques to accurately convert code between different programming languages, streamlining development workflows and enhancing cross-language compatibility for developers.",
            image: codeTranslator,
            link: "https://github.com/AmishaMe24/ai-code-translator",
            technologiesUsed: ["Next.js", "TypeScript", "Gemini API"],
            category: ['Full Stack', 'Machine Learning']
        },
        {
            title: "Rising Indians App",
            description: "Rising Indian is a non-profit organization located in Vadodara. This project aims at building an app which helps in volunteer registration for the organization. Features: Sign Up/Login, Upload Event, Like/Comment/Delete Event, Payment Gateway, Timeline, User Account.",
            image: rising_indians,
            link: "https://github.com/AmishaMe24/RisingIndiansApp",
            technologiesUsed: ["Java", "Android Studio", "Firebase", "Razorpay"],
            category: ['Full Stack']
        },
        {
            title: "Speech Emotion Recognition System",
            description: "Developed the system leveraging CNN and advanced feature extraction techniques (MFCC, ZCR, RMSE), achieving 92% accuracy in identifying emotions from real-time speech data, enhancing human-computer interaction capabilities.",
            image: speechrecognition,
            link: "https://github.com/AmishaMe24/Speech-Emotion-Recognition-System",
            technologiesUsed: ["Python", "TensorFlow", "Librosa", "CNN", "Speech Processing"],
            category: ['Machine Learning']
        },
        {
            title: "Optimal Placement of EV Charging stations",
            description: "Optimized the placement of electric vehicle charging stations in urban environments using K-means clustering and network analysis. Leveraged geospatial and traffic data to identify strategic locations, ensuring enhanced accessibility and sustainability for urban mobility.",
            image: evchargingstation,
            link: "#",
            technologiesUsed: ["Scikit-learn", "GeoPandas", "NetworkX", "Python", "OpenStreetMap", "TomTom Traffic Flow API", "OpenChargeMap API"],
            category: ['Machine Learning']
        },
        {
            title: "Exploring World Stock Prices with Machine Learning",
            description: "Architected robust ML pipeline to forecast stock prices, achieving peak 95% classification accuracy. Excelled in data cleaning, preprocessing, visualization, regression, classification, clustering, association analysis, feature engineering, model selection, evaluation metrics, and statistical data analysis to ensure accurate predictions.",
            image: world_stock,
            link: "#",
            technologiesUsed: ["Scikit-learn", "TensorFlow", "Python", "Statistics"],
            category: ['Machine Learning']
        },
        {
            title: "Real-Time Emotion-Based Music Player",
            description: "Imagine a music player that reads your mood! It analyzes your facial expressions (thanks to OpenCV!) and uses a powerful neural network (CNN) to predict your emotions. Feeling happy? Get ready for some upbeat tunes! Feeling stressed? Calming melodies await.  This project showcases my expertise in computer vision, deep learning, and creating an interactive music experience.",
            image: realTimeMusicPlayer,
            link: "https://github.com/shahnitav/Real-Time-Emotion-Recognition-Based-Music-Player",
            technologiesUsed: ["Python", "TensorFlow", "CNNs", "OpenCV"],
            category: ['Machine Learning']
        },
        {
            title: "Face Mask Detection System",
            description: "The Face Mask Detection System is an advanced real-time application that utilizes TensorFlow and OpenCV to accurately detect whether individuals are wearing face masks. With high detection accuracy achieved through convolutional neural networks trained on a specialized COVID-19 dataset, this system integrates sensor data for enhanced responsiveness, making it ideal for deployment in public spaces to promote safety during the pandemic.",
            image: faceMaskDetection,
            link: "https://github.com/AmishaMe24/Face-Mask-Detection-System",
            technologiesUsed: ["Python", "TensorFlow", "CNNs", "OpenCV"],
            category: ['Machine Learning']
        },
        {
            title: "Netflix Dashboard",
            description: "This Tableau dashboard offers a comprehensive analysis of Netflix content and viewing trends. It provides an overview of the content library, highlights trending shows and movies, and breaks down genre distribution. The dashboard also includes release year analysis and viewer ratings, giving users valuable insights into Netflix's content evolution and audience reception.",
            image: netflix_dashboard,
            link: "https://github.com/AmishaMe24/netflix-dashboard-tableau",
            technologiesUsed: ["Tableau", "Data Visualization", "Data Analysis"],
            category: ['Data Analytics']
        }
    ];

    const filteredProjects = activeTab === 'All' 
        ? projects 
        : projects.filter(project => project.category.includes(activeTab));

    const badgeColor = ["bg-red-100 text-red-800", "bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800"];

    const tabs: ProjectCategory[] = ['All', 'Full Stack', 'Machine Learning', 'Data Analytics'];

    return (
        <div id="projects" className="pt-28">
            <div className='mx-auto flex w-[90%] items-center justify-center'>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    viewport={{ once: true }}
                    className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px] mb-10"
                >
                    Projects
                </motion.h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex p-1 bg-gray-100 rounded-lg">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                activeTab === tab 
                                    ? "bg-[#7685d6] text-white shadow-md" 
                                    : "text-gray-600 hover:text-gray-900"
                            )}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div 
                className='flex justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={activeTab} // This forces a re-render when tab changes
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-20 p-10">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.25, 
                                delay: index * 0.1 % 0.25,
                                ease: "easeOut" 
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ scale: 1.03 }}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        >
                            <div className='flex justify-center items-center'>
                                <a href={project.link}>
                                    <Image className="rounded-t-lg fixed-height" src={project.image} alt={project.title} />
                                </a>
                            </div>

                            <div className="p-5">
                                <a href={project.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 text-justify">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target='_blank'
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7685d6] rounded-lg hover:bg-[#6E7DCE] focus:ring-4 focus:outline-none focus:ring-blue-300"
                                >
                                    View Project
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologiesUsed.map((tech, techIndex) => (
                                        <span key={techIndex} className={`text-xs font-medium px-2.5 py-0.5 rounded ${badgeColor[techIndex % badgeColor.length]}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;