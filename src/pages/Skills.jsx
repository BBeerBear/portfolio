import Card from '../components/ui/Card';
import HtmlLogo from '../assets/skills/html5-logo.svg';
import CSSLogo from '../assets/skills/CSS3-logo.svg';
import TailwindCSSLogo from '../assets/skills/tailwind-css-logo.svg';
import JSLogo from '../assets/skills/js-logo.svg';
import ReactLogo from '../assets/skills/react-logo.svg';
import NodeJSLogo from '../assets/skills/nodejs-logo.svg';
import MongoDBLogo from '../assets/skills/mongodb-logo.svg';
import PythonLogo from '../assets/skills/python-logo.svg';
import FlaskLogo from '../assets/skills/flask-logo.svg';
import FastAPILogo from '../assets/skills/fastapi-logo.svg';
import JavaLogo from '../assets/skills/java-logo.png';
import SpringbootLogo from '../assets/skills/springboot-logo.svg';
import CSharpLogo from '../assets/skills/csharp-logo.svg';
import CplusplusLogo from '../assets/skills/cplusplus-logo.svg';
import LinuxLogo from '../assets/skills/linux-logo.svg';
import VSCodeLogo from '../assets/skills/vscode-logo.svg';
import AndroidStdLogo from '../assets/skills/android-studio-logo.svg';

const skills = [
  { logo: HtmlLogo, name: 'HTML5' },
  { logo: CSSLogo, name: 'CSS3' },
  { logo: TailwindCSSLogo, name: 'Tailwind CSS' },
  { logo: JSLogo, name: 'Javascript' },
  { logo: ReactLogo, name: 'React' },
  { logo: NodeJSLogo, name: 'NodeJS' },
  { logo: MongoDBLogo, name: 'MongoDB' },
  { logo: PythonLogo, name: 'Python' },
  { logo: FlaskLogo, name: 'Flask' },
  { logo: FastAPILogo, name: 'FastAPI' },
  { logo: JavaLogo, name: 'Java' },
  { logo: SpringbootLogo, name: 'Spring Boot' },
  { logo: CSharpLogo, name: 'C#' },
  { logo: CplusplusLogo, name: 'C++' },
  { logo: LinuxLogo, name: 'Linux' },
  { logo: VSCodeLogo, name: 'Visual Studio Code' },
  { logo: AndroidStdLogo, name: 'Android Studio' },
];

const Skills = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill, i) => (
            <div
              key={i}
              className='self-stretch shadow-xl rounded-xl hover:scale-105 ease-in duration-300 p-8 bg-white'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='flex justify-center items-center w-10 h-10 m-auto'>
                  <img src={skill.logo} className='w-full h-full' />
                </div>
                <div className='font-bold'>{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Skills;
