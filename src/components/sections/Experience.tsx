import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import React from "react";
import Tilt from "react-parallax-tilt";

const ExperienceCard: React.FC<TExperience> = ({
  date,
  iconBg,
  icon,
  companyName,
  title,
  points,
}) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        <img src={icon} alt={companyName} className="h-[60%] w-[60%] object-contain" />
      </div>
    }
  >
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="cursor-pointer"
    >
      <h3 className="text-[24px] font-bold text-white">{title}</h3>
      <p className="text-[60px] font-semibold text-secondary" style={{ margin: 0 }}>
        {companyName}
      </p>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </Tilt>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
