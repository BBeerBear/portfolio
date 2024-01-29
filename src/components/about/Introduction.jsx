import Card from '../ui/Card';
import avatar from '../../assets/avatar/ted.jpg';

const Introduction = () => {
  return (
    <Card hasTitle={false}>
      <div className='w-full h-3/4 py-20 px-10 text-center flex flex-col gap-5'>
        <h1>
          Hi, I'm <span className='text-sky-500'>Limin Xiong.</span>
        </h1>
        <h2 className=''>A Full-Stack Web Developer</h2> I am currently pursuing
        a Master's degree in Electrical and Computer Engineering at Concordia
        University. With two years of hands-on experience in full-stack web
        application development, I am actively seeking a summer position where I
        can further develop and apply my skills in web development.
      </div>
    </Card>
  );
};

export default Introduction;
