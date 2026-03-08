/**
 * GNT Construction - Portfolio Page
 * Content: Exact replica of original gntconstruction.com Portfolio page
 */

import Layout from "@/components/Layout";

const PROJECT1_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-project2_36bd136a.png";
const PROJECT2_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-project3_5c78c23b.png";
const PROJECT3_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-project1_2c43ae25.png";

const projects = [
  {
    image: PROJECT1_URL,
    title: "Cache Meadows Commercial",
    description: "Commercial building project in Cache Valley, Utah",
  },
  {
    image: PROJECT2_URL,
    title: "Custom Home — Utah",
    description: "Custom residential home with mountain views",
  },
  {
    image: PROJECT3_URL,
    title: "Commercial Project",
    description: "Commercial construction with mountain backdrop",
  },
];

export default function Portfolio() {
  return (
    <Layout pageTitle="Portfolio">
      <div className="gnt-content-text">
        <p style={{ marginBottom: "16px" }}>
          For a complete portfolio viewing, and to see how I can help you on your building project,
          please contact me to schedule an appointment.
        </p>

        {/* Photo Gallery */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "12px",
          marginTop: "16px",
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                backgroundColor: "#fafafa",
                overflow: "hidden",
              }}
            >
              <div style={{ overflow: "hidden", height: "150px" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
              </div>
              <div style={{ padding: "8px 10px" }}>
                <div style={{ fontWeight: "600", color: "#2a7a6a", fontSize: "12px", marginBottom: "3px" }}>
                  {project.title}
                </div>
                <div style={{ color: "#666", fontSize: "11px" }}>
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "20px",
          padding: "12px 16px",
          backgroundColor: "#f5f5f5",
          borderLeft: "3px solid #2a7a6a",
          fontSize: "12px",
          color: "#555",
        }}>
          <strong style={{ color: "#2a7a6a" }}>Contact us</strong> to schedule an appointment for a
          complete portfolio viewing and to discuss how Glen Thompson Construction can help with your
          building project.
          <div style={{ marginTop: "8px" }}>
            <strong>Mobile:</strong> 435.757.2604 &nbsp;|&nbsp;
            <strong>Email:</strong>{" "}
            <a
              href="mailto:GlenThompsonConstruction@gmail.com"
              style={{ color: "#2a7a6a", textDecoration: "none" }}
            >
              GlenThompsonConstruction@gmail.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
