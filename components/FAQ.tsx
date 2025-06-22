import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who should apply?",
    answer: (
      <div className="space-y-4">
        <p>
          All AI startups — middleware, infra and application layer will benefit
          from the program, and regardless of their stage.
        </p>
        <p>
          Your accelerator and mentorship experience might differ slightly,
          however, depending on whether you're an early-stage or later-stage
          team.
        </p>
        <p>
          We assist early-stage teams with navigating customer development and
          refining their product strategy. These teams are often working on
          large markets but need to figure out how to best capture the
          opportunity.
        </p>
        <p>
          For later-stage teams with a solid product thesis, our value-add comes
          from deep domain expertise in crypto-native areas like token
          economics, regulations, and go-to-market.
        </p>
        <p>
          At EAK, we have helped founders expand their crypto network and
          connect with other top-tier builders, leading to direct impact in
          sales, user testing, partnership, and fundraising efforts.
        </p>
      </div>
    ),
  },
  {
    question: "Should non-crypto-native or Web2.5 startups apply?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. We're AI startups with varying degrees of crypto involvement –
          including fintechs, payment APIs, SaaS for crypto startups, and more.
        </p>
        <p>
          We view startups as existing along a spectrum within crypto. Some are
          deeply crypto-native, while others are less so. We don't mind where
          you fall on that spectrum.
        </p>
        <p>
          Our mission is to partner with the most exceptional founders in the
          world – regardless of the specific product you're building today.
        </p>
      </div>
    ),
  },
  {
    question: "When should I apply?",
    answer: (
      <div className="space-y-4">
        <p>
          For this cohort, there's both an "Early Admission" and a "Regular"
          deadline.
        </p>
        <p>
          We strongly encourage teams to submit applications as early as
          possible, as it maximizes your chances of selection.
        </p>
        <p>
          Since most teams apply close to the deadline, applying early gives us
          much more time to review your application.
        </p>
      </div>
    ),
  },
  {
    question: "When does the program start?",
    answer: "This cohort, starts on Aug 12, 2025.",
  },
  {
    question: "How much does the program cost?",
    answer: (
      <div className="space-y-4">
        <p>
          The program is completely free — there are no upfront fees or charges.
        </p>
        <p>
          Instead, we take a 3% advisory allocation (in tokens or equity,
          depending on your stage) to align incentives and ensure we have skin
          in the game. This covers the full accelerator experience — mentorship,
          GTM strategy, tokenomics, investor prep, exchange support, and demo
          day exposure.
        </p>
        <p>
          We've found that our strongest founders want us fully aligned — this
          structure ensures we're invested in your long-term success.
        </p>
        <p>
          The only r expectation is your full commitment: show up, build, and
          take advantage of the resources. The 6-week sprint requires energy,
          focus, and momentum — we'll match yours every step of the way.
        </p>
      </div>
    ),
  },
  {
    question: "Do you invest in tokens only?",
    answer:
      "No. We invest in both equity and tokens. (And we'll never push you to launch a token.)",
  },
  {
    question:
      "I need funding now, I can't wait for the cohort to start and get over. What should I do?",
    answer: (
      <div className="space-y-4">
        <p>
          If you'd like to take advantage of EAK's fundraising suppport but your
          raise timeline doesn't match as of the cohort, don't worry. We've
          often supported startups by raising them before they're accelerated.
        </p>
        <p>
          Just submit your application here as you normally would. We review
          applications all year long and will invite you to an early interview
          if your startup meets EAK's criteria.
        </p>
      </div>
    ),
  },
  {
    question: "If accepted, when do I start receiving support and mentorship?",
    answer: (
      <div className="space-y-4">
        <p>We start working with teams as soon as they're admitted.</p>
        <p>
          Our commitment is to help you succeed from the moment you join EAK.
        </p>
      </div>
    ),
  },
  {
    question: "How is the program structured?",
    answer: (
      <div className="space-y-4">
        <p>
          The program relies on 4 core activities: lectures, 1:1 mentorship,
          weekly check-ins and Demo Day.
        </p>
        <p className="font-semibold">
          Lectures:{" "}
          <span className="font-normal">
            We run weekly sessions where successful founders from our community
            share their stories and learnings as crypto operators, followed by a
            Q&A.
          </span>
        </p>
        <p className="font-semibold">
          1:1 Mentorship:{" "}
          <span className="font-normal">
            Startups receive 1:1 mentorship from EAK mentors. Discussions often
            revolve around product, go-to-market and fundraising. At times,
            mentors may also intro founders to experts within our network
            depending on the problem at hand.
          </span>
        </p>
        <p className="font-semibold">
          Weekly Check-ins:{" "}
          <span className="font-normal">
            Founders share accomplishments and challenges with mentors every
            week to maintain accountability, momentum and gain insight on how to
            overcome potential blockers.
          </span>
        </p>
        <p className="font-semibold">
          Demo Day:{" "}
          <span className="font-normal">
            6 weeks into the program companies start working on their narrative
            and pitch. Then later, startups meet select angels and VCs at Demo
            Day – both in-person, Zo House, and online – and graduate from the
            program.
          </span>
        </p>
        <p>
          Each startup in our latest cohort received an average of over 50 intro
          requests after Demo Day from crypto's most value-add angels or funds,
          such as Paradigm, Coinbase, Pantera, Multicoin and Dragonfly. Most
          startups also receive significant interest from clients or potential
          partners.
        </p>
      </div>
    ),
  },
  {
    question: "What are the next steps after I submit my application?",
    answer: (
      <div className="space-y-4">
        <p>
          After you apply to the program, mentors will start reviewing your
          application. This process takes up to 2 weeks.
        </p>
        <p>
          Our admissions team will then invite ad hoc the most promising teams
          for an interview over Gmeet. This will consist of a 20 minute
          fast-paced conversation with the ventures team (with guidelines shared
          before the interview).
        </p>
        <p>
          Final decisions are then communicated over email within 1 to 2 days.
        </p>
        <p>
          Note that due to the sheer number of applications and interviews,
          mentors are unfortunately not able to give personalized feedback to
          teams that are not selected.
        </p>
      </div>
    ),
  },
];

export default function FAQ() {
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
