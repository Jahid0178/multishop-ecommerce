"use client";

import { faqData } from "@/libs/Data";
import Faq from "@/ui/Faq";

const FaqPage = () => {
  return (
    <div>
      <Faq title="Frequently Asked Questions" data={faqData} />
    </div>
  );
};

export default FaqPage;
