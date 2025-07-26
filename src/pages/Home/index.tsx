import { type FC } from "react";
import { CheckCircle, Calendar, FileText, ArrowRight, Star, Check } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const Home: FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Task Management",
      description: "Create, organize, and track your tasks with ease. Set priorities, deadlines, and collaborate with your team.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Plan your day, week, and month with our intuitive calendar. Never miss an important deadline again.",
    },
    {
      icon: FileText,
      title: "Quick Notes",
      description: "Capture ideas, meeting notes, and important information in one organized place.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      content: "Taskflow has revolutionized how our team manages projects. The intuitive interface makes collaboration seamless.",
      rating: 5,
      avatar: "SJ",
      company: "TechCorp"
    },
    {
      name: "Mike Chen",
      role: "Freelancer",
      content: "I've tried many productivity apps, but Taskflow is the only one that actually helps me stay organized.",
      rating: 5,
      avatar: "MC",
      company: "Independent"
    },
    {
      name: "Emily Davis",
      role: "Student",
      content: "Perfect for managing my coursework and assignments. The scheduling feature is a game-changer!",
      rating: 5,
      avatar: "ED",
      company: "University"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 flex justify-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              🎉 New: AI-powered task suggestions now available!
            </Badge>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Organize Your Life with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Taskflow
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            The all-in-one productivity platform that helps you manage tasks, schedules, and notes 
            seamlessly. Stay organized, meet deadlines, and achieve your goals.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Watch Demo
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-500">
            <span>✓ No credit card required</span>
            <Separator orientation="vertical" className="h-4" />
            <span>✓ 14-day free trial</span>
            <Separator orientation="vertical" className="h-4" />
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to stay productive
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powerful features designed to streamline your workflow
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        Popular
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-white">10,000+</div>
              <div className="mt-2 text-blue-200">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">1M+</div>
              <div className="mt-2 text-blue-200">Tasks Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">99.9%</div>
              <div className="mt-2 text-blue-200">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our users say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of satisfied users who trust Taskflow
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-600">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-blue-600 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose your plan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start free, upgrade when you need more
            </p>
          </div>
          
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <Badge variant="secondary" className="ml-2">Save 20%</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="monthly">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">Free</CardTitle>
                    <CardDescription>Perfect for getting started</CardDescription>
                    <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Up to 10 tasks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Basic calendar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Note taking</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Get Started</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-600 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                  <CardHeader>
                    <CardTitle className="text-2xl">Pro</CardTitle>
                    <CardDescription>For teams and power users</CardDescription>
                    <div className="text-3xl font-bold">$9<span className="text-lg font-normal text-gray-500">/month</span></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Unlimited tasks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Advanced calendar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Team collaboration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Priority support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <CardDescription>For large organizations</CardDescription>
                    <div className="text-3xl font-bold">$29<span className="text-lg font-normal text-gray-500">/month</span></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Everything in Pro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Advanced analytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Custom integrations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Dedicated support</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="yearly">
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">Free</CardTitle>
                    <CardDescription>Perfect for getting started</CardDescription>
                    <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-gray-500">/year</span></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Up to 10 tasks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Basic calendar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Note taking</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Get Started</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-600 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                  <CardHeader>
                    <CardTitle className="text-2xl">Pro</CardTitle>
                    <CardDescription>For teams and power users</CardDescription>
                    <div className="text-3xl font-bold">
                      $86
                      <span className="text-lg font-normal text-gray-500">/year</span>
                      <Badge variant="secondary" className="ml-2">Save $22</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Unlimited tasks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Advanced calendar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Team collaboration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Priority support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <CardDescription>For large organizations</CardDescription>
                    <div className="text-3xl font-bold">
                      $278
                      <span className="text-lg font-normal text-gray-500">/year</span>
                      <Badge variant="secondary" className="ml-2">Save $70</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Everything in Pro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Advanced analytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Custom integrations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Dedicated support</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to get organized?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start your journey to better productivity today. No credit card required.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
            </div>
        </section>
    </div>
  );
};

export default Home;    