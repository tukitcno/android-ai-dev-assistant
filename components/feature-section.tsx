import { Code, GitBranch, Zap, Users, Cloud, Lock } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "AI-Powered Assistance",
      description: "Get intelligent code suggestions, error detection, and automated refactoring as you type.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Multi-Language Support",
      description: "Write and execute code in JavaScript, Python, TypeScript, and many more languages.",
    },
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      title: "Version Control",
      description: "Seamless Git integration for tracking changes and collaborating with your team.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Real-Time Collaboration",
      description: "Code together with your team in real-time, with presence indicators and live editing.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud-Based Workspace",
      description: "Access your projects from anywhere, with automatic syncing and backup.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Secure Environment",
      description: "Enterprise-grade security to keep your code and data safe.",
    },
  ]

  return (
    <section className="container px-4 py-12 md:py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Powerful Features for Modern Development
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Everything you need to build, test, and deploy your applications efficiently.
        </p>
      </div>
      <div className="mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

