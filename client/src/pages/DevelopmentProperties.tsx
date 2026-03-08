/**
 * GNT Construction - Development Properties Page
 * Content: Exact replica of original gntconstruction.com Development Properties page
 */

import Layout from "@/components/Layout";

export default function DevelopmentProperties() {
  return (
    <Layout pageTitle="Development Properties">
      <div className="gnt-content-text">
        <p style={{ marginBottom: "16px" }}>
          GNT Construction has a portfolio of development properties available. Please contact us for
          more information about current development opportunities.
        </p>

        {/* Brochure Download */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "14px 16px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ddd",
          marginBottom: "16px",
        }}>
          <div style={{
            width: "40px",
            height: "48px",
            backgroundColor: "#cc3333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ color: "#fff", fontSize: "10px", fontWeight: "700", textAlign: "center", lineHeight: 1.2 }}>
              PDF
            </span>
          </div>
          <div>
            <div style={{ fontWeight: "600", color: "#2a7a6a", fontSize: "13px" }}>
              GNT_Construction_Brochure.pdf
            </div>
            <div style={{ color: "#888", fontSize: "11px" }}>1.0 MB</div>
          </div>
        </div>

        <div style={{
          marginTop: "16px",
          padding: "12px 16px",
          backgroundColor: "#f5f5f5",
          borderLeft: "3px solid #2a7a6a",
          fontSize: "12px",
          color: "#555",
        }}>
          <strong style={{ color: "#2a7a6a" }}>For more information</strong> about development
          properties and investment opportunities, please contact Glen Thompson directly.
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
