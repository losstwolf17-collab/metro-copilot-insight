import { SearchSection } from "./SearchSection";
import { DocumentGrid } from "./DocumentGrid";
import { AnalyticsSection } from "./AnalyticsSection";
import { ContextPanel } from "./ContextPanel";
import { useState } from "react";

export interface DocumentSummary {
  id: string;
  title: string;
  department: string;
  date: string;
  keyInsights: string[];
  alerts: Array<{
    type: 'urgent' | 'warning' | 'success';
    message: string;
  }>;
  status: 'compliant' | 'pending' | 'urgent';
}

export function MainDashboard() {
  const [selectedDocument, setSelectedDocument] = useState<DocumentSummary | null>(null);
  const [contextPanelOpen, setContextPanelOpen] = useState(false);

  const handleDocumentSelect = (doc: DocumentSummary) => {
    setSelectedDocument(doc);
    setContextPanelOpen(true);
  };

  return (
    <div className="flex gap-6 h-full">
      <div className="flex-1 space-y-6">
        <SearchSection />
        <DocumentGrid onDocumentSelect={handleDocumentSelect} />
        <AnalyticsSection />
      </div>
      
      {contextPanelOpen && selectedDocument && (
        <ContextPanel 
          document={selectedDocument}
          onClose={() => setContextPanelOpen(false)}
        />
      )}
    </div>
  );
}