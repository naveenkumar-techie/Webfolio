import React from 'react'
import hi from "../assets/hi.png"
import down_arrow from "../assets/arrow-down-big.png"

const Personal = () => {
  return (
    <section className="personal">
        <div className="Container lg:mx-[75px] px-[12px] pt-[200px] pb-[60px] md:mx-0">
            <div className="row">
                <div className="w-7/12">
                  <div className="personal-content">
                    <h6 className='mb-[15px]'>
                      <span><img src={hi} alt="" className='h-[30px] w-[30px]'/></span>
                      Hello! there
                    </h6>
                    <h1 className='!font-bold mb-[10px]'>I'm Oliver <span className='orange'>Jackson</span></h1>
                    <h3>I am a product designer</h3>
                    <div className="row">
                      <div className="w-3/4">
                        <div className="text mt-[30px]">
                          <p>From the inception of a project to its completion, we employ a comprehensive and holistic approach.</p>
                        </div>
                          <div className="w-1/2 mt-[60px] grid grid-cols-[5.3fr_3fr] items-center gap-5">
                          <a href="" className='white-btn'><span className="text">Contact Me</span></a>
                          <div className='w-[60px]'><img src={down_arrow} alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="contact mt-[100px] grid justify-end">
              <div className="flex justify-end">
                <div className="item">
                  <h6 className='sub-title mb-[10px]'>Email :</h6>
                  <span>Webfolio.Info@gmail.com</span>
                </div>
                <div className="item">
                  <h6 className='sub-title mb-[10px]'>Phone :</h6>
                  <span>+2 456 (343) 24 45</span>
                </div>
                <div className="item">
                  <h6 className='sub-title mb-[10px]'>Address :</h6>
                  <span>5919 Trussville Pkwy, Birmingham</span>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Personal