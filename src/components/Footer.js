import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>FINANCE</h1>
        <p className='py-4'>Centralized data analytics promotes a culture of data democratization within the organization. It empowers employees at all levels to access and analyze data, regardless of their technical expertise.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare className='icon' size={30} />
            <FaInstagram className='icon' size={30} />
            <FaTwitterSquare className='icon' size={30} />
            <FaGithubSquare className='icon' size={30} />
            <FaDribbbleSquare className='icon'  size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'><a href='/'>Analytics</a></li>
            <li className='py-2 text-sm'><a href='/'>Marketing</a></li>
            <li className='py-2 text-sm'><a href='/'>Commerce</a></li>
            <li className='py-2 text-sm'><a href='/'>Insights</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
        <li className='py-2 text-sm'><a href='/'>Pricing</a></li>
        <li className='py-2 text-sm'><a href='/'>Documentation</a></li>
        <li className='py-2 text-sm'><a href='/'>Guides</a></li>
        <li className='py-2 text-sm'><a href='/'>API Status</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
        <li className='py-2 text-sm'><a href='/'>About</a></li>
        <li className='py-2 text-sm'><a href='/'>Blog</a></li>
        <li className='py-2 text-sm'><a href='/'>Jobs</a></li>
        <li className='py-2 text-sm'><a href='/'>Careers</a></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;