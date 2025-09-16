import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { MessageSquare, Send, Mic, Paperclip } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Assistant = () => {
  const chatHistory = [
    {
      type: 'user',
      message: 'What are the key compliance issues in the latest safety report?',
      time: '2:34 PM'
    },
    {
      type: 'assistant',
      message: 'Based on the latest safety report from September 14th, I\'ve identified the following key compliance issues:\n\n1. **Staff Training Completion**: Currently at 95%, needs to reach 100% by September 17th\n2. **Emergency Response Drills**: Last drill was conducted 3 months ago, quarterly requirement not met\n3. **Fire Safety Equipment**: 2 extinguishers require immediate inspection\n\nWould you like me to generate a detailed action plan for addressing these issues?',
      time: '2:34 PM',
      sources: ['Safety Audit Report Q3 2024', 'Compliance Guidelines 2024']
    },
    {
      type: 'user',
      message: 'Yes, please create an action plan with timelines',
      time: '2:35 PM'
    }
  ];

  const suggestions = [
    'Show me all pending compliance tasks',
    'What are the latest environmental clearances?',
    'Generate summary of passenger feedback',
    'Review financial compliance status'
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Q&A Assistant</h1>
          <p className="text-muted-foreground">Ask MetroCopilot about your governance documents and compliance status</p>
        </div>

        {/* Chat Interface */}
        <Card className="enterprise-shadow min-h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              MetroCopilot Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            {/* Chat History */}
            <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-4 ${
                    msg.type === 'user' 
                      ? 'bg-primary text-primary-foreground ml-12' 
                      : 'bg-muted mr-12'
                  }`}>
                    <div className="whitespace-pre-wrap text-sm">
                      {msg.message}
                    </div>
                    {msg.sources && (
                      <div className="mt-2 space-y-1">
                        <p className="text-xs opacity-70">Sources:</p>
                        {msg.sources.map((source, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs mr-1">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className={`text-xs mt-2 ${
                      msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="space-y-3 border-t pt-4">
              {/* Quick Suggestions */}
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted">
                    {suggestion}
                  </Badge>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    placeholder="Ask MetroCopilot anything..."
                    className="pr-20"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button className="gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Assistant;