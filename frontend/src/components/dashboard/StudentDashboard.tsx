import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, BookOpen, Calendar, FileText, MessageSquare, User, Users, Award, Clock } from "lucide-react";

export const StudentDashboard = () => {
  // Mock data - replace with actual API calls
  const studentData = {
    name: "John Doe",
    studentId: "FTA2024001",
    class: "Grade 10-A",
    attendance: 92,
    upcomingAssignments: 3,
    recentGrades: [
      { subject: "Mathematics", grade: "A+", date: "2024-01-15" },
      { subject: "Physics", grade: "A", date: "2024-01-14" },
      { subject: "Chemistry", grade: "B+", date: "2024-01-12" },
    ],
    notifications: [
      { id: 1, title: "Assignment Due Tomorrow", message: "Physics Lab Report", time: "2 hours ago" },
      { id: 2, title: "Parent-Teacher Meeting", message: "Scheduled for Jan 20", time: "1 day ago" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow p-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/fb66a808-aa68-4202-8df5-5f08e7507bd1.png" 
                alt="FTA Logo" 
                className="h-12 w-12 rounded-full bg-white/10 p-2"
              />
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {studentData.name}</h1>
                <p className="text-white/80">{studentData.studentId} • {studentData.class}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                  <p className="text-3xl font-bold text-primary">{studentData.attendance}%</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Tasks</p>
                  <p className="text-3xl font-bold text-accent">{studentData.upcomingAssignments}</p>
                </div>
                <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Grade</p>
                  <p className="text-3xl font-bold text-green-500">A-</p>
                </div>
                <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Messages</p>
                  <p className="text-3xl font-bold text-blue-500">5</p>
                </div>
                <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Grades */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Recent Grades</span>
              </CardTitle>
              <CardDescription>Your latest academic performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{grade.subject}</p>
                    <p className="text-sm text-muted-foreground">{grade.date}</p>
                  </div>
                  <Badge variant={grade.grade.startsWith('A') ? 'default' : 'secondary'} className="bg-primary">
                    {grade.grade}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Grades
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-primary" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>Recent updates and announcements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.notifications.map((notification) => (
                <div key={notification.id} className="p-3 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{notification.title}</p>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span className="text-sm">Assignments</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Attendance</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <MessageSquare className="h-6 w-6" />
                <span className="text-sm">Messages</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <User className="h-6 w-6" />
                <span className="text-sm">Profile</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};