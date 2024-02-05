import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLink = () => {
  return (
    <div className='flex items-center justify-between gap-2 sm:gap-10'>
      <a
        href='https://www.linkedin.com/in/liminxiong/'
        className='rounded-full shadow-xl bg-white cursor-pointer p-3 hover:scale-110 ease-in duration-300'
      >
        <FaLinkedin />
      </a>
      <a
        href='https://github.com/BBeerBear'
        className='rounded-full shadow-xl bg-white  cursor-pointer p-3 hover:scale-110 ease-in duration-300'
      >
        <FaGithub />
      </a>
      <div className='rounded-full shadow-xl bg-white  cursor-pointer p-3 hover:scale-110 ease-in duration-300'>
        <AiOutlineMail />
      </div>
      <a
        href='https://www.facebook.com/profile.php?id=100084300735220'
        className='rounded-full shadow-xl bg-white  cursor-pointer p-3 hover:scale-110 ease-in duration-300'
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLink;
