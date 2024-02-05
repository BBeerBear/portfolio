import React from 'react';
import Card from '../components/ui/Card';
import NetflixClonePic from '../assets/projects/netflix.png';
import ChatbotPic from '../assets/projects/aichatbot.png';
import AmazonClonePic from '../assets/projects/amazon.png';
import MLProjectPic from '../assets/projects/resnet18.png';

const myProjects = [
  {
    name: 'Netflix Clone',
    description: `A web application that clones Netflix, shows movie posters, and allows users to watch each movie's trailer`,
    picture: NetflixClonePic,
    // website: '',
  },
  {
    name: 'Amazon Clone',
    description: `A web application that clones Amazon and users can add items to the basket and confirm the checkout page. Users can choose the payment method to pay for the checkout and are able to view the order history.`,
    picture: AmazonClonePic,
    // website: '',
  },
  {
    name: 'Chatbot App',
    description:
      'An interactive voice-enabled web application for seamless chatting.',
    picture: ChatbotPic,
    // website: '',
  },
  {
    name: 'Comparing Pretrained and Scratch-Trained ResNet-18 Models',
    description: `•	Utilized ResNet-18 for colorectal cancer classification with hyperparameter tuning.
  •	Applied t-SNE for feature visualization; compared pre-trained models with from-scratch models.
  •	Employed pre-trained CNNs for feature extraction on pathology and vision datasets.
  •	Implemented k-nearest neighbors and supervised ML techniques for classification analysis.
  •	Technology: Python, PyTorch, ResNet-18, t-SNE, k-NN, SVM, Jupyter Notebook
  `,
    picture: MLProjectPic,
  },
];

const Projects = () => {
  return (
    <div>
      <Card hasTitle={true} title='Project'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {myProjects.map((proj) => (
            <div className='relative flex items-center justify-center shadow-xl rounded-xl h-[300px] bg-black/50 group hover:bg-gradient-to-br from-violet-400 to-blue-400'>
              <img
                src={proj.picture}
                className='object-contain max-w-full max-h-full group-hover:opacity-30'
              />
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-white tracking-wide text-center'>
                  {proj.name}
                </h3>
                {/* <p>Tech: </p> */}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Projects;
