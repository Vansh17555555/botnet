import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ActivityItem {
  title: string;
  description: string;
}

interface AchievementItem {
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  details: string;
}
interface DomainItem {
  title: string;
  image:string;
  description: string;
}
const Component: React.FC = () => {
  const activities: ActivityItem[] = [
    {
      title: "Hands-on Workshops",
      description: "Participate in interactive workshops to learn practical cybersecurity skills.",
    },
    
  ];
  const domains: DomainItem[] = [
    {
      title: "Security Development",
      image:"/sd.jpeg",
      description: "Security Development involves designing, implementing, and maintaining systems to protect data, networks, and applications from threats. It includes creating secure code, vulnerability assessments, penetration testing, and implementing encryption.",
    },
    {
      title: "Application Security",
      image:"/as.jpeg",
      description: "Involves ensuring that software applications are secure from external threats.",
    },
    {
      title: "VAPT",
      image:"/vapt.jpg",
      description: "Vulnerability Assessment and Penetration Testing (Pentesting) are critical components of cybersecurity. Vulnerability Assessment identifies and categorizes potential weaknesses in systems, applications, or networks",
    },
    {
      title: "Threat Intelligence",
      image:"/ti.jpeg",
      description: "Involves gathering and analyzing information about current and emerging threats.",
    },
  ];
  const achievements: AchievementItem[] = [
    {
      title: "Ethical Innovation Challenge IIT Madras",
      description: "Our team placed 1st in the national cybersecurity competition, showcasing our exceptional skills and knowledge.",
    },
    {
      title: "Internships and Job Placements",
      description: "Many of our members have secured prestigious internships and job placements at leading cybersecurity firms.",
    },
    {
      title: "Cybersecurity Certifications",
      description: "Our club provides resources and support to help members earn industry-recognized cybersecurity certifications.",
    },
  ];

  const testimonials: TestimonialItem[] = [
    {
      quote: "The club has been a game-changer for my cybersecurity journey.",
      author: "Sarah, Junior Computer Science Major",
      details: "The hands-on workshops and guest speaker events have provided me with invaluable practical experience and industry insights.",
    },
    {
      quote: "Joining the club was the best decision I made in college.",
      author: "Michael, Senior Cybersecurity Major",
      details: "The supportive community and networking opportunities have helped me secure an internship at a top cybersecurity firm.",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh] bg-black">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Image src="/BOT.png" width={200} height={300} alt="Logo" className="mt-10"/>
          <span className="sr-only">Cybersecurity Club</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
  {[
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Achievements", href: "#achievements" },
    { name: "Testimonials", href: "#testimonials" }
  ].map((item) => (
    <Link 
      key={item.name} 
      href={item.href} 
      className="text-sm font-medium hover:underline underline-offset-4" 
      prefetch={false}
    >
      {item.name}
    </Link>
  ))}
  <Link href="/blogs" className="text-sm font-medium hover:underline underline-offset-4" >Blogs</Link>
</nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure Your Future with Our Cybersecurity Club
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our CSI BOTNET club and gain the skills and knowledge to protect against digital
                    threats.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Join Now
                  </Link>
                </div>
              </div>
              <img
                src="/threat intelligence.jpeg"
                alt="Cybersecurity"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Cybersecurity Club</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our cybersecurity club is a student-led organization dedicated to promoting cybersecurity awareness
                  and education on campus. We provide a supportive community for students interested in pursuing careers
                  in cybersecurity or simply learning more about protecting themselves and their data in the digital
                  age.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="activities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Club Activities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From hands-on workshops to guest speaker events, our club offers a variety of engaging activities to
                  help you develop your cybersecurity skills and knowledge.
                </p>
              </div>
              <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
          <img
            
            src="/IMG-20240215-WA0002.jpg"
            alt={`Cybersecurity activity`}
            className="w-full rounded-xl object-cover object-center h-48 sm:h-64"
          />
           <img
            
            src="/IMG-20240215-WA0006 (1).jpg"
            alt={`Cybersecurity activity`}
            className="w-full rounded-xl object-cover object-center h-48 sm:h-64"
          />
            
           <img
            src="/IMG20240214164604 (1).jpg"
            alt={`Cybersecurity activity`}
            className="w-full rounded-xl object-cover object-center h-48 sm:h-64"
          />
          <img
            src="/IMG20240214164926.jpg"
            alt={`Cybersecurity activity`}
            className="w-full rounded-xl object-cover object-center h-48 sm:h-64"
          />
      </div>
      <div className="flex justify-center items-center">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col justify-center space-y-2">
            <h3 className="text-xl font-bold">{activity.title}</h3>
            <p className="text-muted-foreground">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
            </div>
          </div>
        </section>
        <section id="domain" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Domains of Expertise</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore the key domains in cybersecurity where our club focuses on building expertise.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map((domain, index) => (
          <div key={index} className="flex flex-col justify-center space-y-2">
            <img src={domain.image} alt={domain.title} className="w-full h-auto object-cover rounded-md" />
            <h3 className="text-xl font-bold">{domain.title}</h3>
            <p className="text-muted-foreground">{domain.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Club Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our club has a strong track record of success, with members regularly winning national and
                  international cybersecurity competitions.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  src="/20240107_161759_026.jpg"
                  alt="Cybersecurity Competition"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  width="550"
                  height="310"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    {achievements.map((achievement, index) => (
                      <li key={index}>
                        <div className="grid gap-1">
                          <h3 className="text-xl font-bold">{achievement.title}</h3>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Members Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our current members about the benefits of joining our cybersecurity club.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-col justify-center space-y-4">
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{testimonial.quote}</h3>
                      <p className="text-muted-foreground">- {testimonial.author}</p>
                      <p className="text-muted-foreground">{testimonial.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="join" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Cybersecurity Club</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Become a part of our dynamic community and start your journey towards a career in cybersecurity.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Join Now</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get started with our club.{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Cybersecurity Club. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
};

interface ShieldIconProps extends React.SVGProps<SVGSVGElement> {}

const ShieldIcon: React.FC<ShieldIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
};

export default Component;


