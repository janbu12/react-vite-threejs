import React from 'react'
import BlurText from './BlurText'
import RotatingText from './RotatingText'
import SplitText from './SplitText';

function Header() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
      };
  return (
    <section className="section" id="home">
      <div className="w-full sm:max-w-xl absolute left-5 sm:left-20">
        <div className="flex gap-3 mb-3">
            <BlurText
                text={"Hello Im Mizan"}
                delay={150}
                animateBy="words"
                direction="top"
                className="font-semibold text-3xl md:text-5xl"
                />
            <RotatingText
                texts={['Software Enginner', 'Web Development', 'Data Science']}
                mainClassName="bg-cyan-300 inline-flex items-center px-2 text-black overflow-hidden justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 font-medium"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />
        </div>
        <SplitText
            text="I am a sixth-semester Informatics Engineering 
            student with a strong interest in software engineering, web development, 
            and data science. My technical skills include proficiency 
            in various programming languages and frameworks such as Javascript, React.js, 
            Express.js, Python, PHP and any. I also have strong design skills, utilizing software 
            like Figma and Visual Studio Code to create intuitive and implement design to code."
            className="text-xl"
            delay={100}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.8}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    </section>
  )
}

export default Header