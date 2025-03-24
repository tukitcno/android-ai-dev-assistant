import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ActivityItem {
  id: string
  user: {
    name: string
    avatar: string
    email: string
  }
  action: string
  project: string
  time: string
}

export function RecentActivity() {
  const activities: ActivityItem[] = [
    {
      id: "1",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        email: "john@example.com",
      },
      action: "edited",
      project: "E-commerce App",
      time: "2 hours ago",
    },
    {
      id: "2",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        email: "john@example.com",
      },
      action: "created",
      project: "Weather Dashboard",
      time: "Yesterday",
    },
    {
      id: "3",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        email: "john@example.com",
      },
      action: "committed changes to",
      project: "Portfolio Website",
      time: "3 days ago",
    },
    {
      id: "4",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        email: "john@example.com",
      },
      action: "deployed",
      project: "E-commerce App",
      time: "1 week ago",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest actions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 rounded-md border p-4">
              <Avatar>
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">
                  <span className="font-semibold">{activity.user.name}</span> {activity.action}{" "}
                  <span className="font-semibold">{activity.project}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

