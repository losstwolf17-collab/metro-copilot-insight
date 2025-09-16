import { X, Download, Share2, Star, MessageSquare, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DocumentSummary } from "./MainDashboard";

interface ContextPanelProps {
  document: DocumentSummary;
  onClose: () => void;
}

export function ContextPanel({ document, onClose }: ContextPanelProps) {
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

  const aiRecommendations = [
    "Review environmental compliance metrics quarterly",
    "Schedule follow-up audit within 30 days",
    "Update safety protocols based on findings",
    "Coordinate with technical team for implementation"
  ];

  return (
    <div className="w-96 bg-card border-l border-border h-full overflow-y-auto">
      <div className="sticky top-0 bg-card border-b border-border p-4 z-10">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-card-foreground">Document Details</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Document Header */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Badge className={`text-xs ${getStatusColor(document.status)}`}>
              {document.status}
            </Badge>
          </div>
          <h4 className="font-medium text-card-foreground leading-tight">
            {document.title}
          </h4>
          <div className="text-sm text-muted-foreground">
            {document.department} • {new Date(document.date).toLocaleDateString()}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Eye className="w-4 h-4" />
            View
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        <Separator />

        {/* Key Insights */}
        <div className="space-y-3">
          <h5 className="font-medium text-card-foreground">Key Insights</h5>
          <ul className="space-y-2">
            {document.keyInsights.map((insight, index) => (
              <li key={index} className="text-sm text-card-foreground flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {insight}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Alerts */}
        <div className="space-y-3">
          <h5 className="font-medium text-card-foreground">Alerts & Notifications</h5>
          <div className="space-y-2">
            {document.alerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded-md text-sm ${
                alert.type === 'success' ? 'bg-success/10 text-success' :
                alert.type === 'warning' ? 'bg-warning/10 text-warning' :
                'bg-urgent/10 text-urgent'
              }`}>
                {alert.message}
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* AI Recommendations */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiRecommendations.map((recommendation, index) => (
              <div key={index} className="text-sm text-card-foreground flex items-start gap-2">
                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                {recommendation}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ask MetroCopilot */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              Ask MetroCopilot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full justify-start gap-2 text-muted-foreground">
              <MessageSquare className="w-4 h-4" />
              Ask questions about this document...
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}