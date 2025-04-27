
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume - Ganesh Kanaki | Porfolio',
  description: 'Detailed resume of Your Name, showcasing experience, education, and skills.',
};

// Sample data - replace with your actual information
const resumeData = {
  name: 'Ganesh Kanaki',
  title: 'Software Developer',
  contact: {
    email: 'iamganeshkanaki@gmail.com',
    phone: '+918600476638',
    location: 'Pune, Maharashtra',
    linkedin: 'https://www.linkedin.com/in/ganesh-kanaki-327b7b237/',
    github: 'https://github.com/iamganeshkanaki',
  },
  summary: 
  'Detail-oriented and passionate Full-Stack Developer with hands-on experience in Angular, Django, and SQL-based systems. Skilled in building scalable web applications, designing robust APIs, and delivering secure, efficient solutions. Strong focus on clean, well-documented code and practical problem-solving. Thrives in dynamic environments, continuously learning and adapting to new technologies to drive project success.',
   experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Rhythmflows PTV LTD',
        location: 'kothrud Pune.', // (You can change location if you want!)
        date: 'Jun 2024 - Present',
        description: [
          'Architected and developed dynamic web applications using Angular and Django, improving system performance by 30%.',
          'Designed RESTful APIs and integrated complex SQL queries to optimize backend processes and data management.',
          'Implemented robust CSRF protection and user authentication features, enhancing application security.',
          'Mentored junior engineers, conducted detailed code reviews, and emphasized writing clean, well-documented code.',
          'Built automated deployment pipelines with Docker and GitHub Actions, reducing release times by 40%.',
        ],
      },
  ],
  education: [
    {
      degree: 'Master of Computer Application',
      institution: 'Pune University',
      location: 'Pune, Mahatrashtra',
      date: '2024',
      description: 'Specialized in Artificial Intelligence and Machine Learning.',
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Solpaur University',
      location: 'Solpaur, Mahatrashtra',
      date: '2022',
      description: 'Graduated with Honors.',
    },
  ],
  skills: [
    'JavaScript', 'Amgular Js','Node.js', 'Python', 'Django',
    'SQL',  'PostgreSQL', 'Docker',
   'Git', 'Agile Methodologies',
  ],
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 max-w-4xl">
      <Card className="shadow-lg">
        <CardHeader className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                {resumeData.name}
              </CardTitle>
              <p className="text-lg md:text-xl text-muted-foreground">{resumeData.title}</p>
              <div className="mt-4 space-y-1 text-sm text-foreground/80">
                 <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href={`mailto:${resumeData.contact.email}`} className="hover:text-accent hover:underline">
                    {resumeData.contact.email}
                  </a>
                </div>
                 <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>{resumeData.contact.phone}</span>
                </div>
                 <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{resumeData.contact.location}</span>
                </div>
                 <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-accent" />
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-accent" />
                   <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <a href="/resume.pdf" download="YourName_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="p-6 md:p-8 space-y-8">
          {/* Summary Section */}
          <section aria-labelledby="summary-heading">
            <h2 id="summary-heading" className="text-2xl font-semibold text-primary mb-4">Summary</h2>
            <p className="text-foreground/90 leading-relaxed">{resumeData.summary}</p>
          </section>

          <Separator />

          {/* Experience Section */}
          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="text-2xl font-semibold text-primary mb-6">Experience</h2>
            <div className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <p className="font-semibold text-primary">{job.company} <span className="text-muted-foreground font-normal">- {job.location}</span></p>
                  <p className="text-sm text-muted-foreground">{job.date}</p>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-foreground/90">
                    {job.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Education Section */}
          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="text-2xl font-semibold text-primary mb-6">Education</h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-lg font-medium">{edu.degree}</h3>
                  <p className="font-semibold text-primary">{edu.institution} <span className="text-muted-foreground font-normal">- {edu.location}</span></p>
                  <p className="text-sm text-muted-foreground">{edu.date}</p>
                  {edu.description && <p className="text-sm text-foreground/80">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Skills Section */}
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-2xl font-semibold text-primary mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
