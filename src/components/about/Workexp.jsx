import Card from '../ui/Card';
import Splitter from '../ui/Splitter';

const Workexp = () => {
  return (
    <Card title='Work Experience'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <div className='text-lg'>Software Quality Insurance</div>
            <div>Sep 2023-Current</div>
          </div>
          <div>
            <a
              href='https://www.matrox.com/en'
              className='underline text-rose-500'
            >
              Matrox Vidéo
            </a>
            , Dorval, CA
          </div>
          <div className='px-7'>
            <ul className='list-disc'>
              <li>
                Verify the reliability, functionality and performance of
                Software Development Kits (SDKs), Application Program Interfaces
                (APIs) and higher level applications and Interfaces;
              </li>
              <li>
                Verify the reliability, functionality and performance of various
                product drivers, firmware and hardware;
              </li>
              <li>
                Participate in developing test plans, modifying and validating
                test cases on the various hardware and software components of
                each product;
              </li>
              <li>Document test results using TestRail;</li>
              <li>
                Document functional and other performance problems found during
                testing using Jira software;
              </li>
              <li>
                Liaise with internal groups to ensure adherence to Quality
                objectives
              </li>
              <li>
                Assist the engineering and the support groups by providing
                feedback in reproducing and solving product related issues.
              </li>
            </ul>
          </div>
        </div>
        <Splitter />
      </div>
    </Card>
  );
};

export default Workexp;
