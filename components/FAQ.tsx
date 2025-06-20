import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question:
        "How do you spot a good application? What's the heat map in application form?",
      answer:
        "It's multi-faceted, but the key is to tell us about yourself and why what you're doing matters. Specificity is better than generalities.",
    },
    {
      question:
        "What do you guys look for when you examine genAI consumer apps? Is it traction or retention for someone who has launched a week ago?",
      answer:
        "We look at three main metrics: User growth (how many people are using the app and how fast it's growing), Engagement (average session time, number of creations, etc.), and Retention (are users coming back 1 day, 2 days, 3 days, etc. after launch).",
    },
    {
      question:
        "Does seniority in founders matter at all? I am 17 and have been studying and researching for the last four years. Does EAK AI Accelerator welcome teen founders?",
      answer:
        "No, seniority doesn't matter. We look for founder-market fit - how is this founder uniquely well qualified to tackle this problem? Yes, we absolutely welcome teen founders! You wouldn't be the first, and won't be the last :)",
    },
    {
      question:
        "I know you're looking for founders that can execute on the idea themselves. Our co-founders have sufficient technical expertise to launch an MVP, but we're still seeking a dedicated CTO to carry the product into future growth phases. Should we apply this cycle or next?",
      answer:
        "It won't hurt to go ahead and apply and be honest about where you're at! You can always reapply.",
    },
    {
      question:
        "How do you view teams that are executing against insight(s) that resulted in a pivot within the past 18 months?",
      answer:
        "Pivots are totally fine! We see them as a natural part of a startup's journey. What matters is what you've learned and how things are going post-pivot.",
    },
    {
      question:
        "Is the traction requirement hard set? What if we're still in the interview and validation stage at the time of application? (We have a prototype.)",
      answer: "We take companies both pre- and post-traction.",
    },
    {
      question:
        "Does prior participation in another accelerator affect your decision to admit a startup into the AI accelerator?",
      answer: "We've had teams that have done both!",
    },
    {
      question:
        "Would a reason for not being picked be that you already feel you have exposure to a certain idea or market opportunity?",
      answer:
        "Not directly, but if we see there are a lot of teams going after a single idea, that will mean the bar is higher for every team in that space to demonstrate differentiation!",
    },
  ];

  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-[800px] w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-800"
              >
                <AccordionTrigger className="text-white  text-left text-lg md:text-xl py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base md:text-lg pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
