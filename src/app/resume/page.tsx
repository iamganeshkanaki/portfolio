
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume - Your Name | Scrollfolio',
  description: 'Detailed resume of Your Name, showcasing experience, education, and skills.',
};

// Sample data - replace with your actual information
const resumeData = {
  name: 'Your Name',
  title: 'Software Developer',
  contact: {
    email: 'your.email@example.com',
    phone: '+1 (123) 456-7890',
    location: 'City, State',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
  },
  summary:
    'Highly motivated and results-oriented Software Developer with X years of experience in designing, developing, and implementing software solutions. Proven ability to work effectively in team environments and deliver high-quality code. Passionate about learning new technologies and solving complex problems.',
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp Inc.',
      location: 'San Francisco, CA',
      date: 'Jan 2020 - Present',
      description: [
        'Led the development of a new customer-facing web application using React and Node.js, resulting in a 20% increase in user engagement.',
        'Collaborated with cross-functional teams to define project requirements and deliverables.',
        'Mentored junior developers and conducted code reviews.',
        'Implemented CI/CD pipelines using Jenkins and Docker.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Web Solutions LLC',
      location: 'Austin, TX',
      date: 'Jun 2017 - Dec 2019',
      description: [
        'Developed and maintained backend services using Python and Django.',
        'Contributed to the design and implementation of RESTful APIs.',
        'Participated in agile development processes, including daily stand-ups and sprint planning.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      location: 'Metropolis, USA',
      date: '2017',
      description: 'Specialized in Artificial Intelligence and Machine Learning.',
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'State University',
      location: 'Gotham, USA',
      date: '2015',
      description: 'Graduated with Honors.',
    },
  ],
  skills: [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Django',
    'Java', 'Spring Boot', 'SQL', 'NoSQL', 'MongoDB', 'PostgreSQL', 'Docker',
    'Kubernetes', 'AWS', 'GCP', 'Git', 'Agile Methodologies', 'CI/CD',
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
