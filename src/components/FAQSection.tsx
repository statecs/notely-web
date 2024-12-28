import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What audio formats does Minutes AI support?",
      answer: "You can use our built-in audio recorder, upload an audio file (mp3, mp4, mpeg, mpga, m4a, wav, webm), or paste in a YouTube link."
    },
    {
      question: "What devices can I use Minutes AI on?",
      answer: "Minutes AI is available on all major platforms including iOS, Android, and web browsers. You can access your notes and recordings from any device."
    },
    {
      question: "Can I use Minutes with Voice Memos or past recordings in other apps?",
      answer: "Yes, you can import recordings from Voice Memos, WhatsApp, Zoom, and most other audio recording apps. Simply export the audio file and upload it to Minutes AI."
    },
    {
      question: "Are my notes, transcriptions, and recordings private?",
      answer: "Yes, all your content is encrypted and stored securely. We never share your data with third parties and you have full control over your privacy settings."
    },
    {
      question: "Does Minutes AI support other languages or translations?",
      answer: "Minutes AI supports transcription in over 30 languages and can translate between most major languages. Check our language settings for the full list of supported languages."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-gray-800 rounded-lg px-6 border-none"
          >
            <AccordionTrigger className="text-white hover:no-underline text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-8 text-gray-400">
        Have more questions?{' '}
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Contact our support
        </a>
      </div>
    </div>
  );
};

export default FAQSection;