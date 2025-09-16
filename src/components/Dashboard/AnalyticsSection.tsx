import { BarChart3, TrendingUp, FileCheck, AlertCircle, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AnalyticsSection() {
  const analytics = [
    {
      title: "Documents Processed",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: FileCheck,
      description: "This month"
    },
    {
      title: "Compliance Rate",
      value: "94.5%",
      change: "+2.1%",
      trend: "up",
      icon: AlertCircle,
      description: "Current period"
    },
    {
      title: "Active Departments",
      value: "12",
      change: "0",
      trend: "neutral",
      icon: Users,
      description: "Participating units"
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "-5",
      trend: "down",
      icon: Calendar,
      description: "Awaiting action"
    }
  ];

  const departmentActivity = [
    { department: "Safety & Security", documents: 285, compliance: 96 },
    { department: "Environmental Affairs", documents: 167, compliance: 92 },
    { department: "Technical Operations", documents: 234, compliance: 98 },
    { department: "Customer Experience", documents: 145, compliance: 89 },
    { department: "Finance", documents: 198, compliance: 95 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Analytics Overview</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BarChart3 className="w-4 h-4" />
          Real-time data
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {analytics.map((metric, index) => (
          <Card key={index} className="enterprise-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-card-foreground">{metric.value}</span>
                  <span className={`text-xs font-medium ${
                    metric.trend === 'up' ? 'text-success' : 
                    metric.trend === 'down' ? 'text-urgent' : 'text-muted-foreground'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Department Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="enterprise-shadow">
          <CardHeader>
            <CardTitle className="text-base">Department Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentActivity.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-card-foreground">{dept.department}</span>
                    <span className="text-muted-foreground">{dept.documents} docs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all" 
                        style={{ width: `${dept.compliance}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-card-foreground">{dept.compliance}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="enterprise-shadow">
          <CardHeader>
            <CardTitle className="text-base">Document Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-sm text-card-foreground">Safety Reports</span>
                  </div>
                  <div className="text-lg font-semibold text-card-foreground">342</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full" />
                    <span className="text-sm text-card-foreground">Compliance</span>
                  </div>
                  <div className="text-lg font-semibold text-card-foreground">278</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-warning rounded-full" />
                    <span className="text-sm text-card-foreground">Environmental</span>
                  </div>
                  <div className="text-lg font-semibold text-card-foreground">195</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full" />
                    <span className="text-sm text-card-foreground">Others</span>
                  </div>
                  <div className="text-lg font-semibold text-card-foreground">432</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}