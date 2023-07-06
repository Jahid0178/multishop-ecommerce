"use client";

import { faqData } from "@/libs/Data";
import Faq from "@/ui/Faq";

const FaqPage = () => {
  console.log("jjj");
  return (
    <div>
      <Faq title="Frequently Asked Questions" data={faqData} />
    </div>
  );
};

export default FaqPage;
