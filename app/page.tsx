import { Button } from "@/components/ui/button"
import { Coffee, MessageCircle, ArrowRight, Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100 font-sans">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="font-mono text-xl">doactual.work</div>
        <a
          href="https://calendly.com/ankit31/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" className="text-stone-700 hover:text-stone-900">
            <Coffee className="mr-2 h-4 w-4" /> Let's talk
          </Button>
        </a>

      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Hero Section */}
        <div className="mb-14 mt-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-stone-950 mb-4 leading-snug tracking-tight">
            You've got bigger things to focus on—we're here to help.
          </h1>

          <div className="prose prose-stone text-base">
            <p className="mb-5">
              Look, we're not going to bore you with buzzwords or fancy graphics. Here's the deal: AI can save you time
              on the boring stuff you hate doing.
            </p>
            <p>
              We've spent years helping local businesses. We're not tech bros or corporate consultants. We're just good
              at making AI tools that actually help real businesses.
            </p>
          </div>
        </div>

        {/* Time Value Section */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold text-stone-950 mb-6 border-b border-stone-300 pb-2">
            Get your time back
          </h2>

          <div className="mt-6 flex gap-4 items-start">
            <Lightbulb className="h-6 w-6 text-stone-700 mt-1 flex-shrink-0" />
            <p className="text-stone-700 text-base">
              Every business is different. We look at where you're spending too much time and build custom AI tools to
              give you those hours back.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Identify time drains",
                desc: "What task steals the most time from your business?",
              },
              {
                title: "Imagine possibilities",
                desc: "What would you do with that time if you had it back?",
              },
              {
                title: "Calculate the value",
                desc: "What is that extra time worth to your business?",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="bg-stone-200 h-10 w-10 rounded-full flex items-center justify-center font-mono mb-3">
                  {i + 1}
                </div>
                <h3 className="font-medium text-stone-800 text-base md:text-lg mb-1">{step.title}</h3>
                <p className="text-stone-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-stone-200 p-6 rounded-lg">
            <p className="font-medium text-stone-800 mb-4">Time potential:</p>
            <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm">
              <li>Just 1 hour daily on repetitive tasks = 260+ hours saved per year</li>
              <li>A team of 5 people each saving 1 hour = 1,300+ hours saved per year</li>
              <li>Most clients save at least 5 hours per week (that's 260+ hours per year)</li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-semibold text-stone-950 mb-6 border-b border-stone-300 pb-2">
            How it works (it's simple)
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "30-min chat",
                desc: "Tell us what's eating your time.",
              },
              {
                title: "Custom solution",
                desc: "Simple tools. No tech headaches.",
              },
              {
                title: "Get time back",
                desc: "Most save 5+ hours weekly.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="bg-stone-200 h-10 w-10 rounded-full flex items-center justify-center font-mono mb-3">
                  {i + 1}
                </div>
                <h3 className="font-medium text-stone-800 text-base md:text-lg mb-1">{step.title}</h3>
                <p className="text-stone-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Talk Section */}
        <div className="mb-16 bg-stone-200 p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-stone-950 mb-4">Real talk</h2>

          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm">
            <li>We won't solve all your problems, but we'll fix 2–3 time-wasters.</li>
            <li>Most solutions are up and running within 2 weeks. No months of development.</li>
            <li>If we can't help, we'll tell you upfront. No hard sell.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mb-16 text-center">
          <a
            href="https://calendly.com/ankit31/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white px-6 py-6 text-base md:text-lg rounded-lg transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Let's have a 30-minute chat
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
          <p className="text-stone-500 mt-4 text-sm">No pressure. Just a conversation about your business.</p>
        </div>

        {/* About Us */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-normal text-stone-800 mb-6 border-b border-stone-300 pb-2">
            About us:
          </h2>
          <p className="text-stone-700 text-base">
            We're a small team that builds simple, practical tools to help businesses save time and reduce busywork.
            Just clear, thoughtful solutions that do exactly what you need—and nothing you don't.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4 border-t border-stone-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} doactual.work
          </p>
          <div className="text-stone-500 text-sm">hello@doactual.work</div>
        </div>
      </footer>
    </div>
  )
}
