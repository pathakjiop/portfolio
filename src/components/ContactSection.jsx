import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:atharvpathakop@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    atharvpathakop@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917987266831"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7987266831
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Chhindwara, Madhya Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://github.com/pathakjiop" target="_blank">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/pathak-ji-op" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://twitter.com/atharvpathak248" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.hackerrank.com/atharvpathakop" target="_blank">
                  <img src="/hackerrank-icon.svg" alt="HackerRank" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Something Cool */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            
            <div className="mt-8 p-6 border border-primary/20 rounded-xl bg-primary/5 text-center">
              <h4 className="text-xl font-semibold mb-2">Let’s Build Something Great</h4>
              <p className="mb-4">Shoot me an email or connect with me on LinkedIn. I'm excited to hear from you!</p>
              <a
                href="mailto:atharvpathakop@gmail.com"
                className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition"
              >
                Say Hello 👋
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
