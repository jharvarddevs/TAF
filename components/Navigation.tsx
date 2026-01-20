'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Users, MapPin, ClipboardList, Info, Mail, Phone, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react';

const aboutLinks = [
  { href: '/about/', label: 'Our Story', icon: Info, description: 'Learn about our mission and history.' },
  { href: '/team/', label: 'Our Team', icon: Users, description: 'Meet the leadership behind our mission.' },
  { href: '/impact/', label: 'Our Impact', icon: Heart, description: 'See the families we support monthly.' },
  { href: '/acts-2035-circle/', label: 'Acts 20:35 Circle', icon: Users, description: 'Our community of partners and supporters.' },
];

const programLinks = [
  { href: '/philadelphia/', label: 'Philadelphia', icon: MapPin, description: 'Our work in the city of brotherly love.' },
  { href: '/updates/', label: 'Community Stories', icon: Sparkles, description: 'Real-time updates directly from the field.' },
  { href: '/programs/', label: 'Programs', icon: ClipboardList, description: 'Food support and community outreach.' },
  { href: '/resources/', label: 'Resources', icon: Info, description: 'Free help for families and supporters.' },
];

const contactLinks = [
  { href: '/volunteer/', label: 'Volunteer', icon: Users, description: 'Join us on the ground and make a difference.' },
  { href: 'https://wa.me/16093094280', label: 'WhatsApp', icon: MessageCircle, description: 'Chat with us for instant support.' },
  { href: '/contact/', label: 'Contact Us', icon: Mail, description: 'Get in touch with our team.' },
];

interface NavigationProps {
  variant?: 'light' | 'dark';
}

export function Navigation({ variant = 'light' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkBase = variant === 'dark';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className={cn(
              "relative overflow-hidden rounded-full p-2 transition-all duration-500 flex items-center justify-center",
              isScrolled
                ? "bg-transparent scale-90"
                : "bg-white shadow-2xl shadow-blue-900/30 scale-100 md:scale-105 animate-shimmer logo-halo"
            )}>
              <Image
                src="/taf_logo_transparent.png"
                alt="The Acts Foundation"
                width={120}
                height={120}
                className="h-10 w-auto md:h-14 transition-all duration-300 relative z-10"
                priority
              />
            </div>
            <span className={cn(
              'font-heading font-bold text-xl md:text-2xl tracking-tight transition-colors',
              isScrolled ? 'text-primary-blue' : (isDarkBase ? 'text-gray-900' : 'text-white')
            )}>
              The Acts Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/10",
                      isScrolled
                        ? "text-gray-700 hover:text-primary-blue hover:bg-gray-100"
                        : (isDarkBase ? "text-gray-900 hover:text-primary-blue hover:bg-gray-100" : "text-white")
                    )}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-white/10",
                    isScrolled
                      ? "text-gray-700 hover:text-primary-blue hover:bg-gray-100"
                      : (isDarkBase ? "text-gray-900 hover:text-primary-blue hover:bg-gray-100" : "text-white")
                  )}>
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {aboutLinks.map((link) => (
                        <ListItem
                          key={link.href}
                          title={link.label}
                          href={link.href}
                        >
                          <div className="flex items-center gap-2">
                            <link.icon className="h-4 w-4 text-primary-blue" />
                            <span>{link.description}</span>
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-white/10",
                    isScrolled
                      ? "text-gray-700 hover:text-primary-blue hover:bg-gray-100"
                      : (isDarkBase ? "text-gray-900 hover:text-primary-blue hover:bg-gray-100" : "text-white")
                  )}>
                    Our Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-blue/90 to-blue-900/90 p-6 no-underline outline-none focus:shadow-md relative overflow-hidden group/card"
                            href="/philadelphia/"
                          >
                            <Image
                              src="https://images.unsplash.com/photo-1542240562-8e104928198f?auto=format&fit=crop&q=80&w=800"
                              alt="Philadelphia Skyline"
                              fill
                              className="object-cover absolute inset-0 -z-10 opacity-40 group-hover/card:scale-110 transition-transform duration-700"
                            />
                            <div className="relative z-10">
                              <MapPin className="h-6 w-6 text-white mb-2" />
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Philly Focused
                              </div>
                              <p className="text-sm leading-tight text-blue-50">
                                Discover how we are serving 1,000+ families monthly across Philadelphia.
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {programLinks.map((link) => (
                        <ListItem
                          key={link.href}
                          title={link.label}
                          href={link.href}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-white/10",
                    isScrolled
                      ? "text-gray-700 hover:text-primary-blue hover:bg-gray-100"
                      : (isDarkBase ? "text-gray-900 hover:text-primary-blue hover:bg-gray-100" : "text-white")
                  )}>
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[300px]">
                      {contactLinks.map((link) => (
                        <ListItem
                          key={link.href}
                          title={link.label}
                          href={link.href}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

            <div className="ml-8">
              <Button
                asChild
                variant="cta-red"
                size="lg"
              >
                <a href="https://www.paypal.com/US/fundraiser/charity/4621992" target="_blank" rel="noopener noreferrer">
                  Donate Now
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-3 rounded-xl transition-all active:scale-95',
              isScrolled
                ? 'text-primary-blue bg-soft-blue hover:bg-blue-100'
                : (isDarkBase ? 'text-gray-900 bg-gray-100 hover:bg-gray-200' : 'text-white bg-white/10 hover:bg-white/20')
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4 border border-gray-100">
              <div className="grid grid-cols-1 gap-2">
                {[
                  ...aboutLinks,
                  ...programLinks,
                  ...contactLinks
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:bg-soft-blue hover:text-primary-blue rounded-xl transition-colors font-medium border border-transparent hover:border-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="h-5 w-5 text-primary-blue" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-100">
                <Button
                  asChild
                  variant="cta-red"
                  size="xl"
                  className="w-full"
                >
                  <a href="https://www.paypal.com/US/fundraiser/charity/4621992" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

