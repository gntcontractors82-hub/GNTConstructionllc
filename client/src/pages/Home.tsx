/**
 * GNT Construction - Home Page
 * Design: Classic American Craftsman Heritage
 * Content: Exact replica of original gntconstruction.com home page
 */

import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Reliability. Integrity. Quality.">
      <div className="gnt-content-text">
        <p style={{ marginBottom: "14px" }}>
          These three words are probably not often associated with contractors, but at Glen N. Thompson
          Construction that's the only way we do business. GNT Construction specialize in custom homes,
          custom remodels, historical{" "}
          <span style={{ fontStyle: "italic" }}>restoration</span>
          , commercial buildings, design builds and real estate developments.
        </p>
        <p>
          It is our quality driven attitude and attention to detail that has satisfied our clients for
          more than 50 years. With five decades of experience we have proven that we can tackle any
          challenge. Whether you are ready to build your dream home, renovate your business, or build a
          multi-story business building, GNT Construction has the skills and experience to meet your
          needs. You can be confident that your project will be built right and on time.
        </p>
      </div>
    </Layout>
  );
}
