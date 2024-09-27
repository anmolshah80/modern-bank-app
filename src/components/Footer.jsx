import styles from '@/styles';

import { footerLinks, socialMedias } from '@/constants';
import { logo } from '@/assets';

const ShowFooterTitleLinks = ({ footerLink }) => {
  const { links } = footerLink;

  if (!footerLink || !links || links.length === 0) return null;

  return links.map(({ name }, index) => (
    <li
      key={name}
      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
        index !== links.length - 1 ? 'mb-4' : 'mb-0'
      }`}
    >
      {name}
    </li>
  ));
};

const ShowFooterLinks = () => {
  if (!footerLinks || footerLinks.length === 0) return null;

  return footerLinks.map((footerLink) => (
    <div
      key={footerLink.key}
      className="flex flex-col ss:my-0 my-4 min-w-[150px]"
    >
      <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
        {footerLink.title}
      </h4>
      <ul className="list-none mt-4">
        <ShowFooterTitleLinks footerLink={footerLink} />
      </ul>
    </div>
  ));
};

const ShowSocialMediaIcons = () => {
  if (!socialMedias || socialMedias.length === 0) return null;

  return socialMedias.map(({ id, icon }, index) => (
    <img
      key={id}
      src={icon}
      alt={id}
      className={`w-[21px] h-[21px] object-contain cursor-pointer ${
        index !== socialMedias.length - 1 ? 'mr-6' : 'mr-0'
      }`}
    />
  ));
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <ShowFooterLinks />
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          &copy; {currentYear} HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          <ShowSocialMediaIcons />
        </div>
      </div>
    </section>
  );
};

export default Footer;
