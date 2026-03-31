import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const Resume = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-6">
    <div className="w-full max-w-md text-center">
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
        Michael Cahal
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">Resume</p>

      <a
        href="/resume.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
      >
        <Download size={16} />
        Download Resume (PDF)
      </a>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
      </div>
    </div>
  </div>
);

export default Resume;
