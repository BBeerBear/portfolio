import Card from '../ui/Card';
import Splitter from '../ui/Splitter';

const Education = () => {
  return (
    <Card title='Education'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <div>Master of Electrical and Computer Engineering</div>
            <div>2022-Current</div>
          </div>
          <div className='flex justify-between'>
            <div>
              <a
                href='https://www.concordia.ca/'
                className='underline text-blue-500'
              >
                Concordia University
              </a>
              , Montréal, CA
            </div>
            <div>CGPA: 3.93/4.30</div>
          </div>
        </div>
        <Splitter />
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <div>Bachelor of Computer Science</div>

            <div>2017-2021</div>
          </div>
          <div className='flex justify-between'>
            <div>
              <a
                href='https://www.sspu.edu.cn/'
                className='underline text-blue-500'
              >
                Shanghai Polytechnic University
              </a>
              , Shanghai, CN
            </div>
            <div>CGPA: 3.63/4.00</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
