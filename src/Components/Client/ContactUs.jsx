import React from 'react';
import {   Mail, Phone, MapPin, Send} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const ContactUs = () => {




    return (
        <div className="min-h-screen bg-primary  font-sans p-16 ">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 md:max-w-9xl md:gap-4  lg:gap-8">


                <div className="md:col-span-2 border rounded-2xl border-universal p-8 shadow-sm">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold mb-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full p-3 bg-soft-gray border border-universal rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Email Address</label>
                            <input type="email" placeholder="tuyikundejackson74@example.com" className="w-full p-3 bg-soft-gray border border-universal rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Subject</label>
                            <input type="text" placeholder="How can we help?" className="w-full p-3 bg-soft-gray border border-universal rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1">Message</label>
                            <textarea rows="5" placeholder="Tell us more about your inquiry..." className="w-full p-3 bg-soft-gray border border-universal rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                        </div>
                        <button className="w-full bg-secondary hover:bg-sky-blue text-primary font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition">
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>


                <div className="space-y-6">

                    <div className="border border-universal rounded-2xl p-6 shadow-sm space-y-6">
                        <h3 className="font-bold ">Contact Information</h3>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-small-soft-blue text-secondary rounded-lg"><Mail size={20} /></div>
                            <div>
                                <p className="text-xs text-hard-gray uppercase font-bold">Email</p>
                                <p className="text-sm font-bold border-b border-universal pb-3">coding-school@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-small-soft-blue text-secondary rounded-lg"><Phone size={20} /></div>
                            <div>
                                <p className="text-xs text-hard-gray uppercase font-bold">Phone</p>
                                <p className="text-sm font-bold border-b border-universal pb-4">+250 788 888 888</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-small-soft-blue text-secondary rounded-lg"><MapPin size={20} /></div>
                            <div>
                                <p className="text-xs text-hard-gray uppercase font-bold">Address</p>
                                <p className="text-sm font-bold text-wrap">KG 9 Avenue, Kigali Rwanda</p>
                            </div>
                        </div>
                    </div>


                    <div className="border border-universal rounded-2xl p-6 shadow-sm">
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <div className="flex flex-wrap gap-6 ">
                           
                          <p className="bg-small-soft-blue p-2 rounded-[10px]"><FaFacebook size={22} /></p> 
                            <p className='bg-small-soft-blue p-2 rounded-[10px]'><FaInstagram size={22} /></p>
                            <p className='bg-small-soft-blue p-2 rounded-[10px]'><FaLinkedin size={22} /></p> 
                             <p className='bg-small-soft-blue p-2 rounded-[10px]'><FaTwitter size={22} /></p> 
                        </div>
                    </div>


                    <div className="bg-secondary rounded-2xl p-6 text-primary shadow-lg">
                        <h3 className="font-bold mb-4">Business Hours</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span>Monday - Friday</span><span>8:00 AM - 6:00 PM</span></div>
                            <div className="flex justify-between"><span>Saturday</span><span>9:00 AM - 4:00 PM</span></div>
                            <div className="flex justify-between text-blue-200"><span>Sunday</span><span>Closed</span></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-7.4xl mx-auto  mt-12 p-30 bg-small-soft-blue rounded-3xl p-16 flex flex-col items-center justify-center text-center space-y-2">
                <div className=" p-3  text-secondary mb-2">
                    <MapPin size={32} />
                </div>
                <h4 className="font-bold text-hard-gray">KG 9 Avenue, Kigali, Rwanda</h4>
                <p className="text-sm text-hard-gray">Interactive map integration</p>
            </div>
        </div>
    );
};

export default ContactUs;