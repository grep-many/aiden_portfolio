import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import Tilt from "react-parallax-tilt";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
      >
        <p className="text-[48px] font-black text-white">"</p>
        <div className="mt-1">
          <p className="text-[18px] tracking-wider text-white">{testimonial}</p>
          <div className="mt-7 flex items-center justify-between gap-1">
            <div className="flex flex-1 flex-col">
              <p className="text-[16px] font-medium text-white">
                <span className="blue-text-gradient">@</span>
                {name}
              </p>
              <p className="mt-1 text-[12px] text-secondary">
                {" "}
                {designation} of {company}
              </p>
            </div>
            <img
              src={image}
              alt={`feedback by ${name}`}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
