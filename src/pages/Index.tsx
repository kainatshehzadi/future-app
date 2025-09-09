import { useAuth } from "@/hooks/useAuth";
import { LoginForm } from "@/components/auth/LoginForm";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";

const Index = () => {
  const { user, token, login, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <img 
            src="/lovable-uploads/fb66a808-aa68-4202-8df5-5f08e7507bd1.png" 
            alt="FTA Logo" 
            className="h-16 w-16 mx-auto animate-pulse"
          />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!token || !user) {
    return <LoginForm onLogin={login} />;
  }

  return <StudentDashboard />;
};

export default Index;
