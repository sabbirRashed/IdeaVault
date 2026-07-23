"use client"
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const slides = [
    {
        id: "share",
        title: "Got an idea? Let it spark.",
        subtitle:
            "Post your startup idea in minutes and get real feedback from a community that builds, not just talks.",
        cta: "Share Your Idea",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "discover",
        title: "The next big thing starts here.",
        subtitle:
            "Explore hundreds of startup ideas across tech, health, education, and more — before they become headlines.",
        cta: "Explore Ideas",
        image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "validate",
        title: "Great ideas deserve great feedback.",
        subtitle:
            "Get comments, questions, and honest reactions from people who actually care about building things.",
        cta: "Join the Conversation",
        image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    },
];

// Simple animation: fade in/out + small upward move. One variant, used for every slide.
const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[index];

    return (
        <section className=" bg-[url('/assets/hero.png')] bg-center bg-cover inset-0 relative w-full h-[70vh]   overflow-hidden">

            <div className="absolute inset-0 bg-black/60" />

            {/* Card */}
            <div className=" h-full flex justify-center items-end px-4 pb-12">
                <div className="w-full max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 flex flex-col sm:flex-row items-center gap-6"
                        >
                            {/* Text and hero btn*/}
                            <div className="text-left">
                                <h1 className="text-3xl font-bold text-white">{slide.title}</h1>
                                <p className="mt-3 text-white/80">{slide.subtitle}</p>
                                <Button 
                                    className={'mt-5 font-semibold btn-primary transition-colors duration-300'}
                                >
                                    {slide.cta}
                                    <ArrowRight size={18} />
                                </Button>
                            </div>

                            {/* image */}
                            <Image src={slide.image}
                            alt={slide.title}
                            width={32}
                            height={32}
                            className="object-cover"></Image>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots to show which slide is active */}
                    <div className="flex justify-center gap-2 mt-4">
                        {slides.map((slide, ind) => (
                            <button
                                key={slide.id}
                                
                                className={`h-2 w-2 rounded-full ${ind === index ? "bg-(--color-primary)" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}