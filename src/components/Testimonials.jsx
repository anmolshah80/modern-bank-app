import FeedbackCard from '@/components/FeedbackCard';

import { feedbacks } from '@/constants';

import styles from '@/styles';

const ShowFeedbacks = () => {
  if (!feedbacks || feedbacks.length === 0) return null;

  return feedbacks.map((feedback) => (
    <FeedbackCard key={feedback.id} {...feedback} />
  ));
};

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap lg:justify-center justify-between w-full feedback-container relative z-[1]">
      <ShowFeedbacks />
    </div>
  </section>
);

export default Testimonials;
