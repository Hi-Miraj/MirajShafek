
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, YoutubeIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex space-x-6">
            <a
              href="https://x.com/MirajShafek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="social-icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7251 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.86259 5.2H7.8686L11.8334 10.7631L12.4527 11.6488L17.656 18.8H15.6499L11.4257 12.9742V12.9738Z" />
              </svg>
            </a>
            <a
              href="https://github.com/Hi-Miraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/mirajshafek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@Hi-Miraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-icon"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:mirajshafek04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="social-icon"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Miraj Shafek. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
