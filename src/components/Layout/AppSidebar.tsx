import { 
  Upload, 
  FileText, 
  MessageSquare, 
  Shield, 
  Network, 
  BarChart3,
  Building2,
  Settings
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Upload Documents",
    url: "/upload",
    icon: Upload,
    description: "Upload and manage documents"
  },
  {
    title: "AI Summaries",
    url: "/summaries",
    icon: FileText,
    description: "View AI-generated summaries"
  },
  {
    title: "Q&A Assistant",
    url: "/assistant",
    icon: MessageSquare,
    description: "Ask MetroCopilot questions"
  },
  {
    title: "Compliance Tracker",
    url: "/compliance",
    icon: Shield,
    description: "Track compliance status"
  },
  {
    title: "Knowledge Graph",
    url: "/knowledge",
    icon: Network,
    description: "Explore knowledge connections"
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    description: "View performance analytics"
  }
];

const adminItems = [
  {
    title: "Organization",
    url: "/organization",
    icon: Building2,
    description: "Manage departments"
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    description: "System configuration"
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path);

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarContent className="p-4">
        {/* Logo Section */}
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            {state === "expanded" && (
              <div>
                <h2 className="text-lg font-semibold text-sidebar-foreground">MetroCopilot</h2>
                <p className="text-xs text-sidebar-foreground/70">AI Governance Assistant</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 text-xs font-medium mb-2">
            Main Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-enterprise ${
                          isActive
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`
                      }
                      title={item.description}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {state === "expanded" && (
                        <span className="truncate">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin Section */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-sidebar-foreground/80 text-xs font-medium mb-2">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-enterprise ${
                          isActive
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`
                      }
                      title={item.description}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {state === "expanded" && (
                        <span className="truncate">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}