"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BatteryChargingIcon,
  HomeIcon,
  CarIcon,
  ZapIcon,
  MapPinIcon,
  SunIcon,
  CloudLightningIcon,
  SmartphoneIcon,
  ClockIcon,
  CreditCardIcon,
  LeafIcon,
  MenuIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Solar-Powered Charging Station",
      description: "Eco-friendly charging solution for Taluk A",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mobile Charging Unit",
      description: "Flexible charging options for Taluk B",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Fast Charging Hub",
      description: "Rapid charging facility for Taluk C",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Grid-Independent Station",
      description: "Reliable charging for remote Taluk D",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BatteryChargingIcon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              <span className="text-xl sm:text-2xl font-bold text-green-800">
                EV Power Hub
              </span>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Features
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Services
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById("app")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                App
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById("benefits")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Benefits
              </Button>
              <Button variant="outline">Contact Us</Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="mt-4 space-y-2 md:hidden">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  document
                    .getElementById("features")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Features
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Services
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  document
                    .getElementById("app")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                App
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  document
                    .getElementById("benefits")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Benefits
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Contact Us
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
            Revolutionizing EV Charging in India
          </h1>
          <p className="text-lg sm:text-xl text-green-700 mb-6 sm:mb-8">
            Portable, Flexible, and Reliable Charging Solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Discover Our Innovation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-100"
            >
              Download App
            </Button>
          </div>
        </section>

        <section id="features" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8 text-center">
            What Makes Us Special
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={
                <MapPinIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              }
              title="Unmatched Portability"
              description="Our stations are easily transportable and quick to set up in various locations, enabling rapid infrastructure expansion."
            />
            <FeatureCard
              icon={
                <SunIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              }
              title="Grid-Independent"
              description="Reduced reliance on continuous grid power makes our solution ideal for remote locations or areas with limited power sources."
            />
            <FeatureCard
              icon={
                <CloudLightningIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              }
              title="Reliable Energy Storage"
              description="Our advanced energy storage system ensures consistent charging even in locations prone to power outages."
            />
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8 text-center">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <FeatureCard
              icon={<ZapIcon className="h-8 w-8 text-green-600" />}
              title="Rapid Deployment"
              description="Set up charging infrastructure quickly in areas that need it most, adapting to changing EV charging demands."
            />
            <FeatureCard
              icon={<CarIcon className="h-8 w-8 text-green-600" />}
              title="Flexible Charging"
              description="Easily relocate charging stations to meet varying EV charging needs across different areas."
            />
            <FeatureCard
              icon={<HomeIcon className="h-8 w-8 text-green-600" />}
              title="Versatile Setup"
              description="Install at homes, offices, or as mobile units for comprehensive charging coverage."
            />
            <FeatureCard
              icon={<BatteryChargingIcon className="h-8 w-8 text-green-600" />}
              title="Consistent Power"
              description="Enjoy reliable charging even in areas with unstable power supply, thanks to our energy storage system."
            />
          </div>
        </section>

        <section id="services" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8 text-center">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        <section
          id="app"
          className="mb-12 sm:mb-16 bg-white rounded-lg shadow-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8 text-center">
            EV Power Hub Booking App
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Charge Smarter with Our App
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <SmartphoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 mt-1" />
                  <span>
                    Easy booking of charging slots at your preferred locations
                  </span>
                </li>
                <li className="flex items-start">
                  <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 mt-1" />
                  <span>
                    Real-time availability updates for all charging stations
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 mt-1" />
                  <span>
                    Find the nearest available charging point with GPS
                    integration
                  </span>
                </li>
                <li className="flex items-start">
                  <CreditCardIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 mt-1" />
                  <span>
                    Seamless payment integration for hassle-free transactions
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/placeholder.svg?height=40&width=135"
                    width={135}
                    height={40}
                    alt="Get it on Google Play"
                  />
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/placeholder.svg?height=40&width=135"
                    width={135}
                    height={40}
                    alt="Download on the App Store"
                  />
                </a>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] mt-8 sm:mt-0">
              <Image
                src="/placeholder.svg?height=400&width=200"
                alt="EV Power Hub App Screenshot"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section id="benefits" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8 text-center">
            Benefits of Choosing EV Power Hub
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <BenefitCard
              icon={
                <LeafIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              }
              title="Eco-Friendly Solution"
              description="Contribute to a cleaner environment by supporting sustainable and efficient EV charging infrastructure."
            />
            <BenefitCard
              icon={
                <CreditCardIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              }
              title="Cost-Effective"
              description="Save on infrastructure costs with our portable and flexible charging solutions, reducing the need for permanent installations."
            />
            <BenefitCard
              icon={
                <ClockIcon className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
              }
              title="Time-Saving"
              description="Minimize waiting times with our booking system and enjoy fast charging speeds for a seamless experience."
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
            Ready to Transform EV Charging?
          </h2>
          <p className="text-lg sm:text-xl text-green-700 mb-6 sm:mb-8">
            Join the revolution in flexible and reliable EV charging today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Your EV Power Hub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-100"
            >
              Download Our App
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8 mt-12 sm:mt-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EV Power Hub</h3>
            <p>
              Revolutionizing EV charging in India with portable, flexible, and
              reliable solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#app" className="hover:underline">
                  App
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:underline">
                  Benefits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@evpowerhub.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          {icon}
          <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6 text-center">
        {icon}
        <CardTitle className="mt-4 mb-2 text-lg sm:text-xl">{title}</CardTitle>
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
