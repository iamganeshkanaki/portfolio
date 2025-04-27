
import Link from 'next/link';
import { Code2 } from 'lucide-react'; // Use Code2 icon
import { Button } from '@/components/ui/button';

export function Header() {
  const navItems = [
    { name: 'Home', href: '/#home' }, // Changed to absolute path for consistency
    { name: 'Projects', href: '/#projects' }, // Changed to absolute path
    { name: 'About', href: '/#about' }, // Changed to absolute path
    { name: 'Resume', href: '/resume' }, // Added Resume link
    { name: 'Contact', href: '/#contact' }, // Changed to absolute path
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6"> {/* Added container padding */}
        <Link href="/#home" className="mr-6 flex items-center space-x-2"> {/* Changed to absolute path */}
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Scrollfolio</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-1 md:space-x-4"> {/* Adjusted spacing for more items */}
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild size="sm">
              {/* Ensure Button with asChild wraps only the Link component */}
              <Link
                href={item.href}
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
