"use client";

import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../../components/magicui/animated-gradient-text";
import WordRotate from "../../components/magicui/word-rotate";
import Image from "next/image";
import hero_img from "../../../public/hero.png";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
    return (
        <>
            <AuroraBackground>
                <div
                    id="home"
                    className="relative flex flex-col items-center justify-center pt-24 mt-4 sm:mt-0 md:mt-8 lg:mt-4 sm:pt-0 md:pt-20 lg:pt-24 gap-0 sm:gap-4 md:gap-2 lg:gap-0"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="z-10 flex items-center justify-center"
                    >
                        <AnimatedGradientText>
                            <span
                                className={cn(
                                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl`
                                )}
                            >
                                <p>Hi There!!👋🏻✨</p>
                            </span>
                        </AnimatedGradientText>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mt-2 sm:mt-2"
                    >
                        I’m Amisha Mehta
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-2 items-center mt-2 sm:mt-3 text-center sm:text-left"
                    >
                        <div className="font-extralight text-xl sm:text-base md:text-2xl lg:text-2xl">
                            I’m interested in
                        </div>
                        <WordRotate
                            className="text-2xl md:text-4xl lg:text-3xl font-bold text-black"
                            words={[
                                "Full-Stack Development",
                                "Backend Development",
                                "Machine Learning",
                            ]}
                        />
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full mt-0 lg:mt-4 flex items-center justify-center"
                >
                    <Image 
                        src={hero_img} 
                        alt="Hero image"
                        priority 
                        className="object-contain max-h-full w-auto h-auto max-w-[90%] md:max-w-[80%] lg:max-w-[70%]s"
                    />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-fade-to-white" />
            </AuroraBackground>
        </>
    );
};