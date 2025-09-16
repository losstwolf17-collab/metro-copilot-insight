import { FileText, Clock, AlertTriangle, CheckCircle, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DocumentSummary } from "./MainDashboard";

interface DocumentGridProps {
  onDocumentSelect: (doc: DocumentSummary) => void;
}

// Mock data for demonstration
const mockDocuments: DocumentSummary[] = [
  {
    id: "1",
    title: "Environmental Impact Assessment - Phase 2",
    department: "Environmental Affairs",
    date: "2024-09-15",
    keyInsights: [
      "Air quality compliance achieved",
      "Water treatment system approved",
      "Noise levels within permissible limits"
    ],
    alerts: [
      { type: 'success', message: 'All environmental parameters compliant' }
    ],
    status: 'compliant'
  },
  {
    id: "2",
    title: "Safety Audit Report Q3 2024",
    department: "Safety & Security",
    date: "2024-09-14",
    keyInsights: [
      "Emergency response systems tested",
      "Fire safety equipment verified",
      "Staff training compliance at 95%"
    ],
    alerts: [
      { type: 'warning', message: 'Staff training completion due in 3 days' }
    ],
    status: 'pending'
  },
  {
    id: "3",
    title: "Passenger Feedback Analysis",
    department: "Customer Experience",
    date: "2024-09-13",
    keyInsights: [
      "Overall satisfaction: 87%",
      "Peak hour congestion concerns",
      "Digital ticketing adoption: 92%"
    ],
    alerts: [
      { type: 'success', message: 'Customer satisfaction target exceeded' }
    ],
    status: 'compliant'
  },
  {
    id: "4",
    title: "Infrastructure Maintenance Schedule",
    department: "Technical Operations",
    date: "2024-09-12",
    keyInsights: [
      "Preventive maintenance on schedule",
      "Equipment replacement planned",
      "Budget allocation optimized"
    ],
    alerts: [
      { type: 'urgent', message: 'Critical equipment inspection overdue' }
    ],
    status: 'urgent'
  },
  {
    id: "5",
    title: "Financial Compliance Report",
    department: "Finance",
    date: "2024-09-11",
    keyInsights: [
      "Revenue targets met",
      "Operational costs controlled",
      "Audit recommendations implemented"
    ],
    alerts: [
      { type: 'success', message: 'Financial compliance maintained' }
    ],
    status: 'compliant'
  },
  {
    id: "6",
    title: "Technology Upgrade Proposal",
    department: "IT & Digital",
    date: "2024-09-10",
    keyInsights: [
      "System performance analysis",
      "Cybersecurity assessment",
      "Digital transformation roadmap"
    ],
    alerts: [
      { type: 'warning', message: 'Security patch deployment pending' }
    ],
    status: 'pending'
  }
];

export function DocumentGrid({ onDocumentSelect }: DocumentGridProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'urgent':
        return 'bg-urgent/10 text-urgent border-urgent/20';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-success/10 text-success';
      case 'warning':
        return 'bg-warning/10 text-warning';
      case 'urgent':
        return 'bg-urgent/10 text-urgent';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Recent Document Summaries</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockDocuments.map((doc) => (
          <Card 
            key={doc.id} 
            className="enterprise-shadow hover:enterprise-shadow-elevated transition-enterprise cursor-pointer"
            onClick={() => onDocumentSelect(doc)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-card-foreground leading-tight line-clamp-2">
                      {doc.title}
                    </h3>
                  </div>
                </div>
                <Badge className={`text-xs ${getStatusColor(doc.status)}`}>
                  {doc.status}
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {doc.department}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {new Date(doc.date).toLocaleDateString()}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Key Insights */}
              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-2">Key Insights</h4>
                <ul className="space-y-1">
                  {doc.keyInsights.slice(0, 2).map((insight, index) => (
                    <li key={index} className="text-xs text-card-foreground flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {insight}
                    </li>
                  ))}
                  {doc.keyInsights.length > 2 && (
                    <li className="text-xs text-muted-foreground">
                      +{doc.keyInsights.length - 2} more insights
                    </li>
                  )}
                </ul>
              </div>

              {/* Alerts */}
              {doc.alerts.map((alert, index) => (
                <div key={index} className={`p-2 rounded-md text-xs ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center gap-2">
                    {alert.type === 'urgent' && <AlertTriangle className="w-3 h-3" />}
                    {alert.type === 'warning' && <Clock className="w-3 h-3" />}
                    {alert.type === 'success' && <CheckCircle className="w-3 h-3" />}
                    <span className="font-medium">{alert.message}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}