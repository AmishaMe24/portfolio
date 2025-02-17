"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import pawstime from '../../../public/pawstime.png';
import realTimeMusicPlayer from '../../../public/realTimeMusicPlayer.jpg';
import world_stock from '../../../public/world_stock.png';
import AnimatedTitle from '../animations/AnimatedTitle';
import netflix_dashboard from '../../../public/netflix_dashboard.png';
import rising_indians from '../../../public/rising_indians.png';
import codeTranslator from '../../../public/codeTranslator.png';
import faceMaskDetection from '../../../public/faceMaskDetection.png';
import superstore_dashboard from '../../../public/superstore_dashboard.png';
import speechrecognition from '../../../public/speechrecognition.png';
import evchargingstation from '../../../public/evchargingstation.png';
import aiDataVisualizationAgent from '../../../public/aiDataVisualizationAgent.png'

const Projects = () => {
    const projects = [
        {
            title: "PawsTime",
            description: "PawsTime is a full-stack web application which empowers veterinary practices with online appointment booking, secure logins, dedicated dashboards for both admins and pet owners, and AWS-powered CI/CD for reliable performance and scalability.",
            image: pawstime,
            link: "https://github.com/AmishaMe24/PawsTime",
            technologiesUsed: ["React", "Node.js", "Express", "MongoDB", "AWS"]
        },
        {
            title: "Global SuperStore Dashboard",
            description: "Developed interactive dashboard using Dash on Google Cloud to visualize sales trends, profitability, and customer behavior across regions. Optimized insights through PCA, outlier detection, feature engineering, and normality tests, enabling data-driven decision-making for retail operations.",
            image: superstore_dashboard,
            link: "https://dashapp-795931816520.northamerica-northeast1.run.app/",
            technologiesUsed: ["Python", "Dash", "Plotly", "GCP"]
        },
        {
            title: "AI-DataVisualization Agent",
            description: "This Streamlit app leverages AI to transform raw data into actionable insights. Simply upload a CSV, ask questions in natural language, and watch the AI agent generate code and visualizations to reveal the story within your data.",
            image: aiDataVisualizationAgent,
            link: "https://amishame24-ai-datavisualizat-ai-data-visualisation-agent-cmhrlr.streamlit.app/",
            technologiesUsed: ["Python", "Streamlit", "Together AI", "E2b"]
        },
        {
            title: "AI Code Translator",
            description: "A powerful web application built with Next.js and TypeScript that leverages the Gemini API for intelligent code translation. This tool uses advanced prompt engineering techniques to accurately convert code between different programming languages, streamlining development workflows and enhancing cross-language compatibility for developers.",
            image: codeTranslator,
            link: "https://github.com/AmishaMe24/ai-code-translator",
            technologiesUsed: ["Next.js", "TypeScript", "Gemini API"]
        },
        {
            title: "Rising Indians App",
            description: "Rising Indian is a non-profit organization located in Vadodara. This project aims at building an app which helps in volunteer registration for the organization. Features: Sign Up/Login, Upload Event, Like/Comment/Delete Event, Payment Gateway, Timeline, User Account.",
            image: rising_indians,
            link: "https://github.com/AmishaMe24/RisingIndiansApp",
            technologiesUsed: ["Java", "Android Studio", "Firebase", "Razorpay"]
        },
        {
            title: "Speech Emotion Recognition System",
            description: "Developed the system leveraging CNN and advanced feature extraction techniques (MFCC, ZCR, RMSE), achieving 92% accuracy in identifying emotions from real-time speech data, enhancing human-computer interaction capabilities.",
            image: speechrecognition,
            link: "https://github.com/AmishaMe24/Speech-Emotion-Recognition-System",
            technologiesUsed: ["Python", "TensorFlow", "Librosa", "CNN", "Speech Processing"]
        },
        {
            title: "Optimal Placement of EV Charging stations",
            description: "Optimized the placement of electric vehicle charging stations in urban environments using K-means clustering and network analysis. Leveraged geospatial and traffic data to identify strategic locations, ensuring enhanced accessibility and sustainability for urban mobility.",
            image: evchargingstation,
            link: "#",
            technologiesUsed: ["Scikit-learn", "GeoPandas", "NetworkX", "Python", "OpenStreetMap", "TomTom Traffic Flow API", "OpenChargeMap API"]
        },
        {
            title: "Exploring World Stock Prices with Machine Learning",
            description: "Architected robust ML pipeline to forecast stock prices, achieving peak 95% classification accuracy. Excelled in data cleaning, preprocessing, visualization, regression, classification, clustering, association analysis, feature engineering, model selection, evaluation metrics, and statistical data analysis to ensure accurate predictions.",
            image: world_stock,
            link: "#",
            technologiesUsed: ["Scikit-learn", "TensorFlow", "Python", "Statistics"]
        },
        {
            title: "Real-Time Emotion-Based Music Player",
            description: "Imagine a music player that reads your mood! It analyzes your facial expressions (thanks to OpenCV!) and uses a powerful neural network (CNN) to predict your emotions. Feeling happy? Get ready for some upbeat tunes! Feeling stressed? Calming melodies await.  This project showcases my expertise in computer vision, deep learning, and creating an interactive music experience.",
            image: realTimeMusicPlayer,
            link: "https://github.com/shahnitav/Real-Time-Emotion-Recognition-Based-Music-Player",
            technologiesUsed: ["Python", "TensorFlow", "CNNs", "OpenCV"]
        },
        {
            title: "Face Mask Detection System",
            description: "The Face Mask Detection System is an advanced real-time application that utilizes TensorFlow and OpenCV to accurately detect whether individuals are wearing face masks. With high detection accuracy achieved through convolutional neural networks trained on a specialized COVID-19 dataset, this system integrates sensor data for enhanced responsiveness, making it ideal for deployment in public spaces to promote safety during the pandemic.",
            image: faceMaskDetection,
            link: "https://github.com/AmishaMe24/Face-Mask-Detection-System",
            technologiesUsed: ["Python", "TensorFlow", "CNNs", "OpenCV"]
        },
        {
            title: "Netflix Dashboard",
            description: "This Tableau dashboard offers a comprehensive analysis of Netflix content and viewing trends. It provides an overview of the content library, highlights trending shows and movies, and breaks down genre distribution. The dashboard also includes release year analysis and viewer ratings, giving users valuable insights into Netflix's content evolution and audience reception.",
            image: netflix_dashboard,
            link: "https://github.com/AmishaMe24/netflix-dashboard-tableau",
            technologiesUsed: ["Tableau", "Data Visualization", "Data Analysis"]
        }
    ];

    const badgeColor = ["bg-red-100 text-red-800", "bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800"];

    return (
        <div id="projects" className="pt-28">
            <div className='mx-auto flex w-[90%] items-center justify-center'>
                <AnimatedTitle
                    text={"Projects"}
                    className={
                        "text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-20 p-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2 + index * 0.2,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className='flex justify-center items-center'
                            >
                                <a href={project.link}>
                                    <Image className="rounded-t-lg fixed-height" src={project.image} alt={project.title} />
                                </a>
                            </motion.div>

                            <div className="p-5">
                                <motion.a
                                    href={project.link}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h5>
                                </motion.a>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="mb-3 font-normal text-gray-700 text-justify"
                                >
                                    {project.description}
                                </motion.p>
                                <motion.a
                                    href={project.link}
                                    target='_blank'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7685d6] rounded-lg hover:bg-[#6E7DCE] focus:ring-4 focus:outline-none focus:ring-blue-300"
                                >
                                    View On GitHub
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </motion.a>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="mt-4 flex flex-wrap gap-2"
                                >
                                    {project.technologiesUsed.map((tech, techIndex) => (
                                        <span key={techIndex} className={`text-xs font-medium px-2.5 py-0.5 rounded ${badgeColor[techIndex]}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Projects;