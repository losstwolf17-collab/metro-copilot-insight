import { Search, Mic, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SearchSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Ask MetroCopilot anything..."
            className="pl-10 pr-12 h-12 text-base border-2 focus:border-primary"
          />
          <Button
            size="sm"
            variant="ghost"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <Mic className="w-5 h-5" />
          </Button>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Quick actions:</span>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Show pending compliance
        </Badge>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Latest safety reports
        </Badge>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Environmental clearances
        </Badge>
      </div>
    </div>
  );
}