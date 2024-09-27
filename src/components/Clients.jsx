import { clients } from '@/constants';

import styles from '@/styles';

const Clients = () => (
  <section className={`${styles.flexCenter} gap-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(({ id, logo }) => (
        <div
          key={id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain opacity-80 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
