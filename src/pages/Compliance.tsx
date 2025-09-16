import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Shield, Calendar, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Compliance = () => {
  const complianceItems = [
    {
      title: "Safety Audit Completion",
      department: "Safety & Security",
      dueDate: "2024-09-17",
      status: "urgent",
      progress: 85,
      description: "Quarterly safety audit and staff training completion"
    },
    {
      title: "Environmental Impact Review",
      department: "Environmental Affairs",
      dueDate: "2024-09-25",
      status: "warning",
      progress: 60,
      description: "Phase 2 environmental compliance review"
    },
    {
      title: "Financial Compliance Report",
      department: "Finance",
      dueDate: "2024-09-30",
      status: "compliant",
      progress: 100,
      description: "Monthly financial audit and compliance verification"
    },
    {
      title: "Data Privacy Assessment",
      department: "IT & Digital",
      dueDate: "2024-10-05",
      status: "pending",
      progress: 40,
      description: "Annual data protection and privacy compliance check"
    },
    {
      title: "Infrastructure Maintenance",
      department: "Technical Operations",
      dueDate: "2024-10-10",
      status: "pending",
      progress: 25,
      description: "Preventive maintenance and safety inspections"
    }
  ];

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="w-4 h-4" />;
      case 'urgent':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Compliance Tracker</h1>
            <p className="text-muted-foreground">Monitor and track compliance status across all departments</p>
          </div>
          <Button className="gap-2">
            <Shield className="w-4 h-4" />
            Generate Report
          </Button>
        </div>

        {/* Compliance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="enterprise-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Total Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">23</div>
              <p className="text-xs text-muted-foreground">Compliance items</p>
            </CardContent>
          </Card>

          <Card className="enterprise-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Compliant</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">18</div>
              <p className="text-xs text-muted-foreground">Successfully completed</p>
            </CardContent>
          </Card>

          <Card className="enterprise-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">3</div>
              <p className="text-xs text-muted-foreground">In progress</p>
            </CardContent>
          </Card>

          <Card className="enterprise-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Urgent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-urgent">2</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Items */}
        <Card className="enterprise-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Compliance Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceItems.map((item, index) => (
                <div key={index} className="border border-border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.department}</span>
                        <span>•</span>
                        <span>Due: {new Date(item.dueDate).toLocaleDateString()}</span>
                        <span>•</span>
                        <span className={getDaysUntilDue(item.dueDate) < 0 ? 'text-urgent' : 
                                      getDaysUntilDue(item.dueDate) <= 3 ? 'text-warning' : ''}>
                          {getDaysUntilDue(item.dueDate) < 0 
                            ? `${Math.abs(getDaysUntilDue(item.dueDate))} days overdue`
                            : `${getDaysUntilDue(item.dueDate)} days remaining`
                          }
                        </span>
                      </div>
                    </div>
                    <Badge className={`gap-1 ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      {item.status}
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          item.status === 'compliant' ? 'bg-success' :
                          item.status === 'urgent' ? 'bg-urgent' : 'bg-warning'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Update Progress</Button>
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

export default Compliance;