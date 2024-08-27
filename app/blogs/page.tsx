import React from 'react'
import Link from "next/link"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Pagination } from "@/components/ui/pagination"

interface BlogPost {
    index:number,
  title: string;
  description: string;
  imageUrl: string;
}

interface PopularPost {
  title: string;
  date: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    index:0,
    title: "Event Logging and Threat Detection",
    description: "best practices about the event monitoring and threat detection in cybersecurity including the network traffic management.",
    imageUrl: "/cyber1.jpeg"
  },
  {
    index:1,
    title: "Artificial intelligence in cyber security",
    description: "Protecting generative AI and LLM models with multiple aspects of security that are common loopholes nowadays",
    imageUrl: "/llm.jpeg"
  },

];

const popularPosts: PopularPost[] = [
  {
    
    title: "The Rise of Ransomware: Protecting Your Business",
    date: "August 15, 2023",
    imageUrl: "/placeholder.svg"
  },
  {
    
    title: "Cybersecurity Trends to Watch in 2023",
    date: "July 28, 2023",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Securing Your Remote Workforce: Best Practices",
    date: "June 10, 2023",
    imageUrl: "/placeholder.svg"
  }
];

const categories: string[] = [
  "Cybersecurity Trends",
  "Incident Response",
  "Remote Work Security",
  "Ransomware Protection",
  "Compliance and Regulations"
];

const CybersecurityBlog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Stay Ahead of the Curve in Cybersecurity
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  Our blog covers the latest trends, best practices, and expert insights to help you navigate the
                  ever-evolving world of cybersecurity.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Read the Blog
              </Link>
            </div>
            <img
              src="/Cyber.png"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-[400px] sm:h-[300px] lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-2 space-y-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {blogPosts.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <img
                      src={post.imageUrl}
                      width={550}
                      height={310}
                      alt="Blog Post"
                      className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                    <Link
                      href={`/blogs/${index}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Pagination />
            </div>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader className="bg-muted px-6 py-4">
                <h3 className="text-xl font-bold">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2 px-6 py-4">
                {categories.map((category, index) => (
                  <Link key={index} href="#" className="block text-sm font-medium hover:underline">
                    {category}
                  </Link>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="bg-muted px-6 py-4">
                <h3 className="text-xl font-bold">Popular Posts</h3>
              </CardHeader>
              <CardContent className="space-y-4 px-6 py-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="grid grid-cols-[50px_1fr] gap-4">
                    <img
                      src={post.imageUrl}
                      width={50}
                      height={50}
                      alt="Blog Post"
                      className="rounded-md object-cover"
                      style={{ aspectRatio: "50/50", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CybersecurityBlog