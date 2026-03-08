/**
 * GNT Construction - About Page
 * Content: Exact replica of original gntconstruction.com About page
 */

import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout pageTitle="A History of building.">
      <div className="gnt-content-text">
        <p style={{ marginBottom: "14px" }}>
          Owner, Glen Thompson comes from a family of quality builders. Beginning at the age of 8, Glen
          began working with his father and uncle to build houses, churches and commercial projects where
          he was taught the value of doing it right the first time. He learned every aspect of building
          from the master builders who did everything themselves when there were no such things as
          subcontractors. Quality was their number one goal. This has carried with him throughout his life
          and has set him apart from other general contractors. Integrity is equally important to Glen;
          integrity in relationships and integrity in building. No corners cut, no inferior materials.
        </p>
        <p style={{ marginBottom: "14px" }}>
          As a gifted builder, Glen loves creating and his talent speaks volumes when you walk into one
          of his projects. You can be confident that it will be built right and on time. He works hard to
          make sure his customers are satisfied every step of the process. Whether you are looking for a
          custom home, a custom remodel or a commercial project, Glen Thompson Construction is the right
          choice for design build, fast track or construction management.
        </p>
        <p>
          Through the years, Glen has built homes in Utah and Hawaii and commercial projects in Utah,
          Idaho, Wyoming, California and Florida. Please see his portfolio for a sample of his work.
        </p>
      </div>
    </Layout>
  );
}
