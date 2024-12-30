import VerticalTimeline01 from '../../components/ui/verticaltimeline1';
import AnimatedTitle from '../animations/AnimatedTitle';

const EducationExperience: React.FC = () => {
    const timelineItems = [
        {
            date: "Present",
            label: "The IPO",
            title: "Masters in Computer Science at Virginia Tech",
            content: "Relevant Coursework: Machine Learning, Information Visualization, Intro To Artificial Intelligence, Software Engineering, Cloud Computing, Social Media Analytics, Usability Engineering. CGPA: 3.78/4.0"
        },
        {
            date: "Aug - Dec 2024",
            label: "The IPO",
            title: "Graduate Teaching Assistant at Virginia Tech",
            content: "Courses BIT 4544 Artificial Intelligence & BIT 3664 Cybersecurity: Supported professor in grading, resolving queries, and making exams & assignments for 120+ students. Assisted in course content delivery on cybersecurity management, risk assessments, IoT/cloud security, and AI/ML/DL algorithms (LLM, RNN, GAN, CNN)"
        },
        {
            date: "Jun - Aug 2024",
            label: "The origin",
            title: "Full-Stack Software Engineer Intern at Flow",
            content: "Developed REST APIs with Django, PostgreSQL, and Redis, enhancing response times by 40% through caching. Developed responsive UIs with React, Redux, Hooks, advanced state management, and Tailwind CSS, integrating WebSocket connections for real-time updates and boosting user engagement by 25%. Practiced TDD, including unit, integration, regression, and API testing, minimizing production bugs by 50%"
        },
        {
            date: "Jul 2022 - JUN, 2023",
            label: "The milestone",
            title: "Associate Software Engineer at Altera Digital Health",
            content: "Built healthcare apps using C#, MVC, WPF, and MySQL, ensuring system reliability and seamless integration. Migrated legacy systems from GWT to .NET, improving performance and reducing maintenance costs by 30%. Implemented microservices architecture and integrated xUnit testing, achieving 95% coverage and minimizing errors"
        },
        {
            date: "Jul 2020 - JUN, 2022",
            label: "The acquisitions",
            title: "Web Developer at Confidosoft Solutions Pvt. Ltd.",
            content: "Built and optimized backend systems for 8+ full-stack projects using C#, ASP.NET Core, MVC, Entity Framework, SignalR, and REST APIs, enabling real-time updates and improving API performance by 30%. Designed scalable database architectures with MySQL, Oracle, and MongoDB, and developed dynamic frontends with Angular and TypeScript, enhancing user experience for 10K+ end-users."
        },
        {
            date: "Aug 2016 - May, 2020",
            label: "The IPO",
            title: "Bachelors in Computer Science at Navrachana University",
            content: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Machine Learning and Deep Learning, Artificial Intelligence, Database Management, Web Development, Data Analysis, Statistics & Probability. CGPA: 8.34/10.0"
        }
    ]

    return (
        <div id ="experience" className='pt-28'>
            <div className='mx-auto flex w-[90%] items-center justify-center'>
                <AnimatedTitle
                    text={"Education & Experience"}
                    className={
                        "text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                        <div className="w-full max-w-3xl mx-auto">
                            <VerticalTimeline01 items={timelineItems} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationExperience;