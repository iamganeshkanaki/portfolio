
import { ProjectCard } from '@/components/project-card';
import { ContactForm } from '@/components/contact-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A description of Project Alpha, highlighting its key features and technologies used.',
    imageUrl: 'https://picsum.photos/seed/alpha/600/337',
    projectUrl: '#',
    tags: ['React', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Project Beta',
    description: 'Exploring advanced concepts in Project Beta, focusing on performance and scalability.',
    imageUrl: 'https://picsum.photos/seed/beta/600/337',
    projectUrl: '#',
    tags: ['Next.js', 'TypeScript', 'GraphQL'],
  },
  {
    title: 'Project Gamma',
    description: 'An innovative solution, Project Gamma, leveraging modern web technologies.',
    imageUrl: 'https://picsum.photos/seed/gamma/600/337',
    projectUrl: '#',
    tags: ['Vue.js', 'Firebase', 'SCSS'],
  },
   {
    title: 'Project Delta',
    description: 'A mobile-first application built with cutting-edge frameworks.',
    imageUrl: 'https://picsum.photos/seed/delta/600/337',
    projectUrl: '#',
    tags: ['React Native', 'Expo', 'Styled Components'],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="w-full pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20 bg-secondary"> {/* Added pt padding to offset header */}
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <Avatar className="w-32 h-32 mx-auto border-4 border-primary shadow-lg">
              <AvatarImage src="/Img2.jpg" alt="Ganes Kanaki" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Ganesh Kanaki
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Full Stack Developer
            </p>
             <div className="flex justify-center space-x-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.github.com/iamganeshkanaki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ganesh-kanaki-327b7b237/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                 <a href="https://www.twitter.com/iamganeshkanaki" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Check out some of the projects I've worked on.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

       {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
             <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
               <img
                src="https://picsum.photos/seed/about/600/600"
                alt="About Me"
                className="rounded-lg object-cover shadow-lg w-full h-full"
              />
             </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                About Me
              </h2>
              <p className="text-foreground/80 md:text-lg">
                Hello! I'm a passionate software developer with a knack for creating elegant solutions
                in the least amount of time. Driven by my love for technology and innovation,
                I enjoy tackling complex problems and continuously learning new skills.
              </p>
              <p className="text-foreground/80 md:text-lg">
                With experience in full-stack development, I specialize in building responsive web applications
                using modern frameworks like React, Next.js, and Angular. I'm proficient in both front-end
                and back-end technologies, always aiming for clean, efficient, and maintainable code.
              </p>
               <p className="text-foreground/80 md:text-lg">
                When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or contributing
                to open-source projects. Let's connect and build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Get In Touch
            </h2>
            <p className="text-foreground/80 md:text-xl">
              Have a question or want to work together? Send me a message!
            </p>
          </div>
          <div className="mx-auto w-full max-w-md space-y-8">
             <ContactForm />
              <div className="text-center text-sm text-muted-foreground">
                Or reach out directly at <a href="mailto:iamganeshkanaki@gmail.com?subject=Regarding%20your%20portfolio" className="text-accent hover:underline">iamganeshkanaki@gmail.com</a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
