/**
 * GNT Construction Layout Component
 * Design: Classic American Craftsman Heritage — Faithful replica of gntconstruction.com
 * - Gray page background (#e8e8e8)
 * - Top banner: three project photos in horizontal strip with dark gray surround
 * - Two-column body: main content (left, white bg) + sidebar (right, white bg)
 *   - Sidebar: logo top, contact info, then nav
 * - Footer: copyright
 * Colors: Teal #2a7a6a (primary), body text #333, bg #e8e8e8, white content areas
 */

import { Link, useLocation } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-logo_646c4977.png";
const PROJECT1_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-project2_36bd136a.png";
const PROJECT2_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-project3_5c78c23b.png";
const PROJECT3_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-project1_2c43ae25.png";

const navItems = [
  { label: "Home Page", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Development Properties", href: "/development-properties" },
  { label: "Testimonials", href: "/testimonials" },
];

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div style={{
      backgroundColor: "#e0e0e0",
      minHeight: "100vh",
      fontFamily: "Arial, 'MS Sans Serif', Geneva, sans-serif",
      fontSize: "12px",
    }}>
      {/* Outer wrapper to center everything */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Three-Photo Banner */}
        <div style={{
          display: "flex",
          gap: "3px",
          backgroundColor: "#666666",
          padding: "3px",
        }}>
          <div style={{ flex: 1, overflow: "hidden", height: "180px" }}>
            <img
              src={PROJECT1_URL}
              alt="GNT Construction - Cache Meadows Commercial Project"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ flex: 1, overflow: "hidden", height: "180px" }}>
            <img
              src={PROJECT2_URL}
              alt="GNT Construction - Custom Home Project"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ flex: 1, overflow: "hidden", height: "180px" }}>
            <img
              src={PROJECT3_URL}
              alt="GNT Construction - Commercial Building Project"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Main Body Row */}
        <div style={{
          display: "flex",
          gap: "5px",
          alignItems: "flex-start",
          paddingTop: "5px",
        }}>
          {/* Main Content Area */}
          <div style={{
            flex: "1 1 auto",
            backgroundColor: "#ffffff",
            padding: "18px 22px 24px 22px",
            minWidth: 0,
            minHeight: "400px",
          }}>
            {pageTitle && (
              <h1 style={{
                color: "#2a7a6a",
                fontStyle: "italic",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "14px",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.3",
              }}>
                {pageTitle}
              </h1>
            )}
            {children}
          </div>

          {/* Sidebar */}
          <div style={{ width: "215px", flexShrink: 0 }}>

            {/* Logo Box */}
            <div style={{
              backgroundColor: "#ffffff",
              padding: "14px 12px",
              textAlign: "center",
              marginBottom: "5px",
            }}>
              <Link href="/">
                <img
                  src={LOGO_URL}
                  alt="Glen N. Thompson Construction — A trusted resource since 1972"
                  style={{ maxWidth: "185px", width: "100%", height: "auto", cursor: "pointer" }}
                />
              </Link>
            </div>

            {/* Contact Info Box */}
            <div style={{
              backgroundColor: "#ffffff",
              padding: "10px 12px",
              marginBottom: "5px",
              fontSize: "11px",
              color: "#666666",
              lineHeight: "1.7",
            }}>
              Mobile: 435.757.2604<br />
              Email:{" "}
              <a
                href="mailto:GlenThompsonConstruction@gmail.com"
                style={{ color: "#666666", textDecoration: "none" }}
              >
                GlenThompsonConstruction@gmail.com
              </a>
            </div>

            {/* Navigation Box */}
            <div style={{ backgroundColor: "#ffffff" }}>
              <div style={{
                backgroundColor: "#2a7a6a",
                color: "#ffffff",
                padding: "7px 12px",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.3px",
              }}>
                Main Navigation
              </div>
              <nav>
                {navItems.map((item) => {
                  const isActive = location === item.href;
                  return (
                    <Link key={item.href} href={item.href}>
                      <div
                        style={{
                          display: "block",
                          padding: "9px 12px",
                          color: isActive ? "#ffffff" : "#2a7a6a",
                          backgroundColor: isActive ? "#2a7a6a" : "transparent",
                          fontSize: "12px",
                          fontWeight: "500",
                          textDecoration: "none",
                          borderBottom: "1px solid #e8e8e8",
                          cursor: "pointer",
                          transition: "background-color 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            (e.currentTarget as HTMLDivElement).style.backgroundColor = "#2a7a6a";
                            (e.currentTarget as HTMLDivElement).style.color = "#ffffff";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                            (e.currentTarget as HTMLDivElement).style.color = "#2a7a6a";
                          }
                        }}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: "#ffffff",
          padding: "10px 22px",
          marginTop: "5px",
          fontSize: "11px",
          color: "#666666",
          textAlign: "center",
          borderTop: "1px solid #d0d0d0",
        }}>
          Content copyright {new Date().getFullYear()}. GNTCONSTRUCTION.COM. All rights reserved.
        </div>

      </div>
    </div>
  );
}
