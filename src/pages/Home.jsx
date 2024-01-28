import Education from '../components/about/Education';
import Interest from '../components/about/Interest';
import Introduction from '../components/about/Introduction';
import Workexp from '../components/about/Workexp';
const Home = () => {
  return (
    <div className='container mx-auto pt-3'>
      <div className='flex flex-col gap-2'>
        <Introduction />
        <Education />
        <Workexp />
        <Interest />
      </div>
    </div>
  );
};

export default Home;
