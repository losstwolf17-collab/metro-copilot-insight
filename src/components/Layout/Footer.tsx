import { Shield, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>Powered by MetroCopilot</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>Secure AI for Governance</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-success" />
            <span>WCAG 2.1 AA Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4 text-success" />
            <span>End-to-End Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}