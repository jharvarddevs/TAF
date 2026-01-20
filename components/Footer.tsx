import Link from 'next/link';
import Image from 'next/image';
import { Heart, Mail, MapPin, Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  about: [
    { label: 'Our Mission', href: '/about/' },
    { label: 'Our Team', href: '/team/' },
    { label: 'Latest Updates', href: '/updates/' },
    { label: 'Programs', href: '/programs/' },
    { label: 'Impact Stories', href: '/impact/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  getInvolved: [
    { label: 'Donate', href: '/donate/' },
    { label: 'Volunteer', href: '/volunteer/' },
    { label: 'Acts 20:35 Circle', href: '/acts-2035-circle/' },
    { label: 'Contact Us', href: '/contact/' },
  ],
  resources: [
    { label: 'Philadelphia Hub', href: '/philadelphia/' },
    { label: 'Sources & Research', href: '/about/#sources' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/taf_logo_transparent.png"
                alt="The Acts Foundation"
                width={120}
                height={120}
                className="h-20 w-auto"
              />
            </Link>
            <h3 className="font-heading font-bold text-xl">The Acts Foundation</h3>
            <p className="text-gray-400 leading-relaxed">
              Fighting food insecurity in Philadelphia through faith, action, and community support.
            </p>
            <div className="flex items-center gap-2 text-hope-green">
              <Heart size={20} fill="currentColor" />
              <span className="text-sm italic">It is more blessed to give than to receive</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>3599 Nottingham Lane Unit K<br />Philadelphia, PA 19114</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:609-309-4280" className="hover:text-white transition-colors">
                  609-309-4280
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <MessageCircle size={20} className="flex-shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/16093094280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-white transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href="mailto:theactsfoundationtech@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  theactsfoundationtech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/TheActsFoundation.org?rdid=7flVJbVf0lrRGRuc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AV3fALWjA%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/theactsfoundation_2035?utm_source=qr&igsh=cXFyNHFibmFzOTV6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E4405F] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} The Acts Foundation. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs italic opacity-75">
                Acts 20:35 - It is more blessed to give than to receive.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 border-t border-gray-800/50 pt-4">
            <p className="text-gray-500 text-[10px]">
              Developed with ❤️ by <a href="https://intelleadgen.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors underline underline-offset-2">IntelleadGen Studio</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
