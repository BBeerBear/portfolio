import Card from '../ui/Card';
import avatar from '../../assets/img/avatar.jpg';

const Introduction = () => {
  return (
    <Card hasTitle={false}>
      <div className='py-8 flex items-center gap-8'>
        <div className='flex items-center justify-center'>
          <img src={avatar} alt='' className='rounded-lg' />
        </div>
        <div>
          Hello, my name is Limin Xiong. I am currently pursuing a Master's
          degree in Electrical and Computer Engineering at Concordia University.
          With two years of hands-on experience in full-stack web application
          development, I am actively seeking a summer internship where I can
          further develop and apply my skills in web development.
        </div>
      </div>
    </Card>
  );
};

export default Introduction;
