import { Navigation } from "@/components/Navigation";
import { Section, SectionHeader } from "@/components/Section";
import { useLanguage } from "@/hooks/use-language";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  BarChart,
  Brain,
  Code2,
  Linkedin,
  Mail,
  FileDown,
  Wind,
  Sun,
  Battery,
  Droplets,
  Cpu,
  GraduationCap,
  Briefcase,
  Languages
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* Abstract Background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-30"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("hero.greeting")} Axier Zeberio
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight relative">
                <span className="text-foreground">Energy</span> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Engineer</span>
                {/* Mobile Zap Icon */}
                <div className="lg:hidden absolute -top-6 right-0 w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/60 shadow-lg flex items-center justify-center border border-white/20 rotate-12">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <br />
                <span className="text-3xl md:text-5xl text-muted-foreground font-semibold">& Data Analyst</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                {t("hero.role")}
              </p>
              
              <div className="flex flex-wrap gap-4 relative z-40">
                <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer">
                  <Button size="default" className="rounded-xl px-6 py-2 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all bg-primary text-primary-foreground font-medium relative z-50 flex items-center gap-2">
                    {t("hero.cta.contact")} <Mail className="h-4 w-4" />
                  </Button>
                </ScrollLink>
                
                <a href="https://www.linkedin.com/in/axier-zeberio-017b6a340" target="_blank" rel="noopener noreferrer" className="cursor-pointer relative z-50">
                  <Button variant="outline" size="default" className="rounded-xl px-6 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-primary/20 hover:border-primary/50 bg-background/50 backdrop-blur-sm text-foreground font-medium flex items-center gap-2">
                    LinkedIn <Linkedin className="h-4 w-4 text-[#0077B5]" />
                  </Button>
                </a>
              </div>

              {/* Mobile Profile Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:hidden flex justify-center mt-12 mb-8 relative"
              >
                <div className="relative w-48 h-64 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-white/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.png" 
                    alt="Axier Zeberio" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block group/profile"
            >
              <div className="relative z-10 w-full aspect-[3/4] max-w-sm mx-auto bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl opacity-60 animate-pulse group-hover/profile:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                 <motion.div 
                   whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
                   className="w-72 h-96 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl rotate-2 border border-white/20 flex items-center justify-center overflow-hidden cursor-pointer"
                 >
                <ScrollLink to="hero" smooth={true} duration={500} className="w-full h-full">
                  <img 
                    src="/profile.png" 
                    alt="Axier Zeberio" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover/profile:scale-110"
                  />
                </ScrollLink>
                 </motion.div>
                 <motion.div 
                   whileHover={{ scale: 1.2, rotate: 12 }}
                   className="absolute top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-md shadow-xl rotate-6 flex items-center justify-center border border-white/20 z-30"
                 >
                    <Zap className="w-10 h-10 text-white" strokeWidth={2} />
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" className="bg-muted/30 rounded-3xl my-12 py-16">
          <SectionHeader title={t("about.title")} />
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 text-lg leading-relaxed text-muted-foreground">
              <p>{t("about.bio")}</p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col gap-2 p-4 bg-background rounded-xl border border-border/50 shadow-sm">
                  <GraduationCap className="text-primary h-8 w-8 mb-2" />
                  <span className="font-bold text-foreground">{t("about.edu")}</span>
                  <span className="text-sm">{t("about.edu.desc")}</span>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-background rounded-xl border border-border/50 shadow-sm">
                  <Briefcase className="text-secondary h-8 w-8 mb-2" />
                  <span className="font-bold text-foreground">{t("about.exp")}</span>
                  <span className="text-sm">{t("about.exp.desc")}</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary"><Mail size={18} /></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted-foreground">EMAIL</span>
                    <a href="mailto:axierzebe@gmail.com" className="text-sm hover:text-primary transition-colors">axierzebe@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary"><Linkedin size={18} /></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted-foreground">LINKEDIN</span>
                    <a href="https://www.linkedin.com/in/axier-zeberio-017b6a340" target="_blank" className="text-sm hover:text-primary transition-colors">axier-zeberio</a>
                  </div>
                </div>
                <div className="pt-4">
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      className="w-full rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
      variant="outline"
    >
      <FileDown className="mr-2 h-4 w-4" /> {t("hero.cta.cv")}
    </Button>
  </a>
</div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" className="py-16">
          <SectionHeader title={t("exp.title")} subtitle="Professional Journey" />
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-8 space-y-12">
            <div className="relative">
              <span className="absolute -left-[3.25rem] md:-left-[2.65rem] top-2 h-5 w-5 rounded-full border-4 border-background bg-primary" />
              <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-primary">{t("exp.role1")}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground mt-1">{t("exp.company1")}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit font-mono">{t("exp.date1")}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("exp.desc1")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

      {/* Projects Section */}
<Section id="projects" className="bg-slate-50 dark:bg-slate-900/20 rounded-3xl py-16">
  <SectionHeader title={t("proj.title")} subtitle="Engineering & Innovation" />

  <div className="grid md:grid-cols-2 gap-8">
    <ProjectCard
      icon={<Wind className="h-8 w-8 text-blue-500" />}
      title={t("proj.1.title")}
      description={t("proj.1.desc")}
      tags={[
        t("proj.1.skill.1"),
        t("proj.1.skill.2"),
        t("proj.1.skill.3"),
        t("proj.1.skill.4"),
        t("proj.1.skill.5")
      ]}
      pdfHref="/wind-generator.pdf"
    />

    <ProjectCard
      icon={<Battery className="h-8 w-8 text-green-500" />}
      title={t("proj.2.title")}
      description={t("proj.2.desc")}
      tags={[
        t("proj.2.skill.1"),
        t("proj.2.skill.2"),
        t("proj.2.skill.3"),
        t("proj.2.skill.4"),
        t("proj.2.skill.5")
      ]}
      pdfHref="/electric-scooter.pdf"
    />

    <ProjectCard
      icon={<Sun className="h-8 w-8 text-yellow-500" />}
      title={t("proj.3.title")}
      description={t("proj.3.desc")}
      tags={[
        t("proj.3.skill.1"),
        t("proj.3.skill.2"),
        t("proj.3.skill.3"),
        t("proj.3.skill.4"),
        t("proj.3.skill.5")
      ]}
      pdfHref="/solar-project.pdf"
    />

    <ProjectCard
      icon={<Droplets className="h-8 w-8 text-cyan-500" />}
      title={t("proj.4.title")}
      description={t("proj.4.desc")}
      tags={[
        t("proj.4.skill.1"),
        t("proj.4.skill.2"),
        t("proj.4.skill.3"),
        t("proj.4.skill.4"),
        t("proj.4.skill.5")
      ]}
      pdfHref="/storage-system.pdf"
    />
  </div>
</Section>


        {/* Skills Section */}
        <Section id="skills" className="py-16">
          <SectionHeader title={t("nav.skills")} />
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard 
              title={t("skills.title")} 
              icon={<Cpu className="h-6 w-6 text-primary" />}
              skills={[
                t("skills.tech.python"),
                t("skills.tech.matlab"),
                t("skills.tech.labview"),
                t("skills.tech.arduino"),
                t("skills.tech.ti"),
                t("skills.tech.tableau"),
                t("skills.tech.sql"),
                t("skills.tech.ml"),
                t("skills.tech.mlops"),
                t("skills.tech.solidworks")
              ]}
            />
            <SkillCard 
              title={t("skills.soft")} 
              icon={<Brain className="h-6 w-6 text-secondary" />}
              skills={[
                t("skills.soft.leadership"),
                t("skills.soft.comm"),
                t("skills.soft.adapt"),
                t("skills.soft.team"),
                t("skills.soft.problem"),
                t("skills.soft.strategic")
              ]}
            />
            <SkillCard 
              title={t("skills.lang")} 
              icon={<Languages className="h-6 w-6 text-purple-500" />}
              skills={[t("skills.lang.en"), t("skills.lang.es"), t("skills.lang.eu")]}
            />
          </div>
        </Section>

        {/* Education Section */}
<Section id="education" className="bg-muted/30 rounded-3xl py-16">
  <SectionHeader title={t("edu.title")} />

  <div className="grid gap-6 max-w-4xl mx-auto">

    {/* MASTER – Sacred Heart University */}
    <a
      href="https://www.sacredheart.edu/"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex justify-between items-start flex-col md:flex-row gap-4">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                {t("edu.1.school")}
                <span className="text-muted-foreground text-sm">↗</span>
              </CardTitle>
              <p className="text-primary font-medium mt-1">
                {t("edu.1.degree")}
              </p>
            </div>
            <Badge variant="outline" className="font-mono">
              {t("edu.1.date")}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground italic border-l-2 pl-4 border-border">
            {t("edu.1.note")}
          </p>
        </CardContent>
      </Card>
    </a>

    {/* GRADO – Mondragon Unibertsitatea */}
    <a
      href="https://www.mondragon.edu/es/inicio"
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="border-l-4 border-l-secondary hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex justify-between items-start flex-col md:flex-row gap-4">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                {t("edu.2.school")}
                <span className="text-muted-foreground text-sm">↗</span>
              </CardTitle>
              <p className="text-secondary font-medium mt-1">
                {t("edu.2.degree")}
              </p>
            </div>
            <Badge variant="outline" className="font-mono">
              {t("edu.2.date")}
            </Badge>
          </div>
        </CardHeader>
      </Card>
    </a>

  </div>
</Section>


        {/* Contact Section */}
        <Section id="contact" className="mb-12 py-16">
          <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />
          <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 shadow-xl border border-border/50">
            <ContactForm />
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted text-center text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Axier Zeberio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  icon,
  title,
  description,
  tags,
  pdfHref
}: {
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
  pdfHref?: string
}) {
  return (
    <Card className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-border/60 overflow-hidden h-full flex flex-col">
      <CardHeader className="relative">
        {pdfHref && (
          <a
  href={pdfHref}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-md border border-border bg-background/80 hover:bg-background text-foreground"
>
  PDF
</a>



      
        )}


        <div className="mb-4 p-3 bg-muted rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>

        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default py-1 px-3 text-[10px] sm:text-xs font-medium border border-primary/20 shadow-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}



function SkillCard({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) {
  return (
    <Card className="h-full border-border/50 bg-background/50">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        {icon}
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
           {skills.map(skill => (
             <span key={skill} className="px-3 py-1 bg-muted rounded-md text-sm text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
               {skill}
             </span>
           ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const submitMutation = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: t("contact.success"),
        });
        form.reset();
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.name")}</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="bg-background/50 h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.email")}</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} className="bg-background/50 h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.message")}</FormLabel>
              <FormControl>
                <Textarea placeholder={t("contact.message.placeholder")} className="resize-none bg-background/50 min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          disabled={submitMutation.isPending}
        >
          {submitMutation.isPending ? (
            <><div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" /> {t("contact.sending")}</>
          ) : (
             t("contact.submit")
          )}
        </Button>
      </form>
    </Form>
  );
}
