import React from 'react'
import profile_img from "../assets/p2.jpg"
import figma from "../assets/figma.png"
import git from "../assets/git.png"
import ps_img from "../assets/ps.png"
import yellow_diamond from "../assets/yellow-diamond.png"
import arrow_br from "../assets/arw1.png"


const Aboutme = () => {
  return (
    <section className="aboutme">
        <div className="Container lg:mx-[75px] px-[12px]">
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-5">
                    <div className="profileimg">
                        <div className="img"><img src={profile_img} alt="profile_img" className='w-full h-full' /></div>
                        <span><img src={figma} alt="" /></span>
                        <span><img src={git} alt="" /></span>
                        <span><img src={ps_img} alt="" /></span>
                        <span><img src={yellow_diamond} alt="" /></span>
                    </div>
                </div>
                <div className="col-span-7">
                    <div className="content">
                        <h6 className='sub-title orange mb-[30px]'>About Me</h6>
                        <div className="text">
                            <h4 className='mb-[30px]'>I'm <span className='font-extralight'>Creative Director and UI-UX Designer</span> from Sydney, Australia, working in web development and print media.</h4>
                            <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                            <div className="numbers mt-[50px]">
                                <div className="row grid grid-cols-2">
                                    <div className="col">
                                        <div className="flex pt-[30px] items-end">
                                            <div>
                                                <h3 className='!font-light mb-[10px]'>100%</h3>
                                                <h6 className='sub-title grey'>Clients Satisfaction</h6>
                                            </div>
                                            <div className='ml-auto'>
                                                <div className='w-[40px] h-[40px]'>
                                                    <img src={arrow_br} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                    <div className="flex pt-[30px] items-end">
                                            <div>
                                                <h3 className='!font-light mb-[10px]'>100%</h3>
                                                <h6 className='sub-title grey'>Clients Satisfaction</h6>
                                            </div>
                                            <div className='ml-auto'>
                                                <div className='w-[40px] h-[40px]'>
                                                    <img src={arrow_br} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutme