import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Users } from "lucide-react";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-24 py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <section className="text-center">
        <h1 className="font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tight mb-8">
          Find Your <span className="text-blue-500">Dream Job</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xl sm:text-2xl max-w-3xl mx-auto mb-12">
          Connect with top employers and take the next step in your career journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={"/jobs"}>
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full">
              Find Jobs <Search className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to={"/post-job"}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full">
              Post a Job <Users className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full py-10 -z-10"
      >
        <CarouselContent className="flex gap-10 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/4 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-12 sm:h-16 object-contain transition-all duration-300"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="w-full max-w-6xl mx-auto">
        <img 
          src="/banner.jpeg" 
          alt="Job Board Banner" 
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <h3 className="font-bold text-3xl mb-4">For Job Seekers</h3>
            <p className="text-xl mb-6">Search and apply for jobs, track applications, and take the next step in your career.</p>
            <Button variant="link" className="text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8">
            <h3 className="font-bold text-3xl mb-4">For Employers</h3>
            <p className="text-xl mb-6">Post jobs, manage applications, and find the best talent to grow your team.</p>
            <Button variant="link" className="text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;