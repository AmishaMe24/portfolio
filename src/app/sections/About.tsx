import React from "react";
import "../animations/animate.css";
import profile_photo from "../../../public/profile-photo.png";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <>
            <section
                className="relative z-10 w-full h-full items-center justify-center overflow-hidden pt-28"
                id="about"
            >
                <div className="mx-auto flex w-[90%] flex-col lg:max-w-[1212.8px]">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px] mb-4"
                    >
                        About Me
                    </motion.h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between mt-4">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center lg:mr-10"
                        >
                            <Image
                                src={profile_photo}
                                alt="Profile Photo"
                                width={600}
                                height={600}
                                className="rounded-full border-4 border-white shadow-lg"
                            />
                            <div className="pt-4">
                                <Button
                                    borderRadius="1.75rem"
                                    className="bg-white text-black border-neutral-200"
                                    onClick={() => {
                                        window.open(
                                            "https://drive.google.com/file/d/1V1Px_h1e7SV2MlNx8JiSC3_AVIYzeSfu/view?usp=drive_link",
                                            "_blank"
                                        );
                                    }
                                    }
                                >
                                    Download Resume
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mt-8 lg:mt-0 flex flex-col gap-4 leading-relaxed tracking-wide md:gap-6 md:leading-relaxed lg:w-2/3"
                        >
                            <p>I’m Amisha Mehta, a software engineer currently pursuing a Master’s in Computer Science at Virginia Tech. Fueled by a passion for crafting innovative, high-performing solutions, I leverage my full-stack development skills to tackle projects from conception to deployment.</p>

                            <p>My background in machine learning, honed through my Master’s program, allows me to integrate intelligent features that enhance user experience and efficiency. Fueled by a love for continuous learning, I’m a strong team player who consistently pushes for optimization and improved productivity. I thrive in collaborative environments where we can leverage each other’s strengths to build impactful tech solutions that shape the future of software development and machine learning.</p>

                            <p>When I’m not coding, you can find me exploring naturevs beauty on hiking trails, whipping up something delicious in the kitchen, or capturing moments through my camera lens. I enjoy the thrill of sports, catching the latest shows, and try to find my zen through yoga and meditation in this fast-paced world.</p>

                            <p>I am always excited about new opportunities and collaborations. If you’re interested in working together or discussing the latest in tech, please reach out. Let’s create something amazing together!</p>

                            <p>Explore my projects, learn more about my journey, and connect with me.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;