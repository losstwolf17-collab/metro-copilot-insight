import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Upload as UploadIcon, FileText, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Upload = () => {
  const recentUploads = [
    { name: "Safety_Protocol_2024.pdf", status: "processed", date: "2024-09-16", size: "2.3 MB" },
    { name: "Environmental_Report_Q3.docx", status: "processing", date: "2024-09-16", size: "1.7 MB" },
    { name: "Compliance_Checklist.xlsx", status: "processed", date: "2024-09-15", size: "891 KB" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Upload Documents</h1>
          <p className="text-muted-foreground">Upload and manage your governance documents for AI analysis</p>
        </div>

        {/* Upload Area */}
        <Card className="enterprise-shadow">
          <CardContent className="p-8">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <UploadIcon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-foreground">Drop files here or click to upload</h3>
                <p className="text-muted-foreground">Supports PDF, DOCX, XLSX, and TXT files up to 10MB</p>
              </div>
              <Button className="gap-2">
                <UploadIcon className="w-4 h-4" />
                Choose Files
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Uploads */}
        <Card className="enterprise-shadow">
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUploads.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{file.size} • {file.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={file.status === 'processed' ? 'default' : 'secondary'} className="gap-1">
                      {file.status === 'processed' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {file.status}
                    </Badge>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Upload;