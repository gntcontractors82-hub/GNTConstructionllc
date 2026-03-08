/**
 * GNT Construction - Testimonials Page
 * Content: Exact replica of original gntconstruction.com Testimonials page
 * All five testimonials from the original site
 */

import Layout from "@/components/Layout";

const testimonials = [
  {
    quote: `As an architect, I have known and worked with Glen Thompson for over 20 years. I have come to trust and respect his integrity, judgment and competence in construction related matters as well as in his dealings with people. He will follow through with his commitments in a prompt and professional matter. I specifically appreciate his wisdom and creativity in solving problems.\n\nI have seen his work on both commercial and residential projects of varying sizes. One of the great advantages that he brings is personal leadership and oversight. Glen is involved and responsible for the work. Glen can be trusted to deliver what he is committed to do.`,
    author: "Tom Jensen, AIA",
    title: "Senior Principal, Architectural Nexus",
  },
  {
    quote: `It has been my pleasure to work with Glen N. Thompson Construction on several projects here at Cache Valley Bank. Glen has handled a variety of construction projects both small and large and the results are the same – on time and within budget. He handles his business in a very professional manner and has the highest integrity. Glen is enjoyable to work with and sincerely cares about the people he associates with. I invite any questions regarding Glen and his business to be addressed to me.`,
    author: "Bruce Rigby",
    title: "Cache Valley Bank",
  },
  {
    quote: `In my professional career, I had several branch construction projects performed by Glen Thompson. I found him to be a conscientious and honest professional. He was able to complete all of our construction projects on time. He also found ways to reduce our construction costs while still maintaining the quality of work we expected. I have no reservations recommending Glen Thompson for any building-construction needs.`,
    author: "Dennis Child",
    title: "President/CEO (retired) USU Charter Credit Union",
  },
  {
    quote: `I have owned an insurance agency in San Antonio, Texas for the past 35 years. My agency specializes in contractors, so I know all the "trades" very well. My wife and I have purchased and restored three older homes, two of which are well over 100 years old. When looking for a contractor to restore and add sq. footage to one of these homes in Paradise, Utah, we interviewed several contractors and settled on Glen Thompson Construction. Glen is a highly respected commercial general contractor in the Cache Valley area, but what impressed me the most is his knowledge and expertise in working with older structures. We worked with Glen from 1400 miles away over several years and the result could not have turned out better. Working with a contractor on a project from a long distance says a lot about the contractor's integrity and self imposed quality of work. I highly recommend Glen Thompson Construction for all your building needs.`,
    author: "Edwin R. Polk, III — President",
    title: "Eanes & Polk, Inc.",
  },
  {
    quote: `It is rare anymore that we find true craftsmen in the building trades, and contractors who are exacting in what they require of their subs. My wife Micheale and I undertook a major remodel of our home a few years ago and hired Glen as our general contractor. We were not disappointed.\n\nThe work included a new kitchen, structural changes and re-enforcement, moving walls, and subtle but demanding finish work. The results are worth showing off.\n\nIt is a pleasure to lie on the living room couch, and admire the fit and quality of the finished product. It takes time to do it right. It was worth the wait. I would recommend Glen to anyone.`,
    author: "Curt Webb",
    title: "Providence, Utah",
  },
];

export default function Testimonials() {
  return (
    <Layout pageTitle="Testimonials">
      <div className="gnt-content-text">
        {testimonials.map((t, index) => (
          <div key={index} className="gnt-testimonial">
            <div className="gnt-testimonial-text">
              {t.quote.split("\n\n").map((paragraph, pIndex) => (
                <p key={pIndex} style={{ marginBottom: pIndex < t.quote.split("\n\n").length - 1 ? "10px" : "0" }}>
                  &ldquo;{pIndex === 0 ? "" : ""}{paragraph}{pIndex === t.quote.split("\n\n").length - 1 ? "\u201d" : ""}
                </p>
              ))}
            </div>
            <div className="gnt-testimonial-author">{t.author}</div>
            <div style={{ color: "#666", fontSize: "11px", marginTop: "2px" }}>{t.title}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
