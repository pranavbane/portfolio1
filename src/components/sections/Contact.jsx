import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CircleCheck as CheckCircle,
  Loader as Loader2,
} from "lucide-react";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import MagneticButton from "../ui/MagneticButton";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Invalid email format";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // await new Promise((resolve) => setTimeout(resolve, 2000))
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    dribbble: Dribbble,
    email: Mail,
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-surface/20 to-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Contact me" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's work <span className="gradient-text">together</span>
            </h3>
            <p className="text-muted mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Mail className="text-background" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <p className="text-text font-medium group-hover:gradient-text transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Phone className="text-background" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <p className="text-text font-medium group-hover:gradient-text transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </motion.a>

              <motion.div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <MapPin className="text-background" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="text-text font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass border border-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {Icon && <Icon size={20} />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-4 rounded-xl glass border ${
                        errors.name
                          ? "border-red-500"
                          : "border-white/10 focus:border-primary/50"
                      } bg-transparent text-text placeholder-muted/50 outline-none transition-all duration-300 peer`}
                    />
                    <label className="absolute -top-2.5 left-3 px-2 text-xs text-muted bg-background peer-focus:text-primary transition-colors">
                      Your Name
                    </label>
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={`w-full px-4 py-4 rounded-xl glass border ${
                        errors.email
                          ? "border-red-500"
                          : "border-white/10 focus:border-primary/50"
                      } bg-transparent text-text placeholder-muted/50 outline-none transition-all duration-300 peer`}
                    />
                    <label className="absolute -top-2.5 left-3 px-2 text-xs text-muted bg-background peer-focus:text-primary transition-colors">
                      Your Email
                    </label>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-4 rounded-xl glass border border-white/10 focus:border-primary/50 bg-transparent text-text placeholder-muted/50 outline-none transition-all duration-300 peer"
                  />
                  <label className="absolute -top-2.5 left-3 px-2 text-xs text-muted bg-background peer-focus:text-primary transition-colors">
                    Subject
                  </label>
                </div>
              </div>

              <div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className={`w-full px-4 py-4 rounded-xl glass border ${
                      errors.message
                        ? "border-red-500"
                        : "border-white/10 focus:border-primary/50"
                    } bg-transparent text-text placeholder-muted/50 outline-none transition-all duration-300 resize-none peer`}
                  />
                  <label className="absolute -top-2.5 left-3 px-2 text-xs text-muted bg-background peer-focus:text-primary transition-colors">
                    Your Message
                  </label>
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <MagneticButton>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-background"
                      : "bg-gradient-to-r from-primary to-secondary text-background hover:shadow-glow"
                  } disabled:opacity-70`}
                  whileHover={
                    !isSubmitting && !isSubmitted ? { scale: 1.02 } : {}
                  }
                  whileTap={
                    !isSubmitting && !isSubmitted ? { scale: 0.98 } : {}
                  }
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
