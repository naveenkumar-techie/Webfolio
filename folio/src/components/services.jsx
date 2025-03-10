import React from 'react';
import work_1 from '../assets/1.jpg';
import work_2 from '../assets/2.jpg';
import work_3 from '../assets/3.jpg';
import work_4 from '../assets/4.jpg';
import work_5 from '../assets/5.jpg';

const workData = [
  { img: work_1, title: 'Cutter mobile app' },
  { img: work_2, title: 'Cutter mobile app' },
  { img: work_3, title: 'Cutter mobile app' },
  { img: work_4, title: 'Cutter mobile app' },
  { img: work_5, title: 'Cutter mobile app' },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container lg:mx-[75px] px-[12px]">
        {/* Section Header */}
        <div className="service-head mb-[80px] flex items-center">
          <div>
            <span className="orange uppercase">Our Portfolio</span>
            <h3 className="uppercase text-[50px]">
              Selected <span className="font-extralight">Works.</span>
            </h3>
          </div>
          <div className="view-btn ml-auto">
            <a href="#" className="btn">
              <span>View All</span>
            </a>
            <span className="bi bi-arrow-up-right arrow"></span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards">
          {workData.map((work, index) => (
            <div key={index} className="card-item card-bg">
              <div className="grid grid-cols-12">
                <div className="col-span-5 flex flex-col justify-between p-4">
                  <div>
                    <div className="mb-[15px]">
                      <a href="#" className="work-link">Figma</a>
                      <a href="#" className="work-link">Web Design</a>
                    </div>
                    <h4>{work.title}</h4>
                  </div>
                  <div className='flex flex-col gap-3.5'>
                    <p className="mb-[15px]">
                      We’re a full-stack firm that can help you from strategy to launch, and anywhere in between.
                    </p>
                    <a href="#" className="orange">
                      <span>View Details <i className="bi bi-arrow-up-right"></i></span>
                    </a>
                  </div>
                </div>
                <div className="col-span-7 p-[20px]">
                  <img src={work.img} alt={work.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
