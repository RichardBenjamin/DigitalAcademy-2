'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Star, Users, Clock, CheckCircle, Award, Play } from 'lucide-react'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseId = parseInt(params.id)

  const courses: Record<number, any> = {
    1: {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, React, and full-stack development in 12 weeks.',
      fullDescription: 'Learn to build modern, responsive websites and web applications from scratch. This comprehensive bootcamp covers frontend technologies like HTML, CSS, and JavaScript, along with the React framework. You\'ll also dive into backend development with Node.js and Express, database management, and deployment.',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      students: 2400,
      rating: 4.9,
      reviews: 1250,
      price: '$499',
      level: 'Beginner to Intermediate',
      duration: '12 weeks',
      instructor: 'Alex Thompson',
      instructorBio: 'Alex is a Senior Software Engineer at Google with 10+ years of web development experience.',
      whatYouLearn: [
        'HTML5 and semantic markup',
        'CSS3 styling and responsive design',
        'JavaScript ES6+ fundamentals',
        'React and component-based architecture',
        'Node.js and Express backend development',
        'Database design with MongoDB',
        'RESTful API development',
        'Version control with Git',
        'Deployment and hosting strategies',
      ],
      requirements: [
        'Basic computer skills',
        'Willingness to code every day',
        'A laptop with internet connection',
      ],
      modules: [
        { title: 'Getting Started with Web Development', lessons: 12 },
        { title: 'HTML & CSS Mastery', lessons: 18 },
        { title: 'JavaScript Fundamentals', lessons: 24 },
        { title: 'React: Building Modern UIs', lessons: 20 },
        { title: 'Backend Development with Node.js', lessons: 22 },
        { title: 'Databases and APIs', lessons: 16 },
        { title: 'Full Stack Projects', lessons: 15 },
        { title: 'Deployment and Beyond', lessons: 8 },
      ],
    },
    2: {
      id: 2,
      title: 'Python for Data Science',
      description: 'Learn Python, pandas, NumPy, and machine learning fundamentals with real projects.',
      fullDescription: 'Become proficient in Python and data science tools used by leading tech companies. This course covers data manipulation with pandas, numerical computing with NumPy, visualization with Matplotlib, and machine learning with scikit-learn. You\'ll work with real-world datasets and build practical applications.',
      image: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      students: 1800,
      rating: 4.8,
      reviews: 920,
      price: '$449',
      level: 'Intermediate',
      duration: '10 weeks',
      instructor: 'Dr. Sarah Williams',
      instructorBio: 'Dr. Williams holds a PhD in Computer Science and has published 15+ research papers on machine learning.',
      whatYouLearn: [
        'Python programming fundamentals',
        'Data manipulation with pandas',
        'Numerical computing with NumPy',
        'Data visualization with Matplotlib and Seaborn',
        'Introduction to machine learning',
        'Supervised and unsupervised learning',
        'Model evaluation and validation',
        'Real-world data analysis projects',
      ],
      requirements: [
        'Basic Python knowledge',
        'Mathematics background (algebra, statistics)',
        'Familiarity with command line',
      ],
      modules: [
        { title: 'Python for Data Science Setup', lessons: 10 },
        { title: 'Data Manipulation with Pandas', lessons: 20 },
        { title: 'Numerical Computing', lessons: 15 },
        { title: 'Data Visualization', lessons: 14 },
        { title: 'Statistics Fundamentals', lessons: 16 },
        { title: 'Introduction to Machine Learning', lessons: 18 },
        { title: 'Real-World Projects', lessons: 12 },
      ],
    },
    3: {
      id: 3,
      title: 'Cloud Architecture with AWS',
      description: 'Deploy, scale, and manage applications on AWS. Get certified in cloud technologies.',
      fullDescription: 'Master cloud computing with Amazon Web Services. This course prepares you for AWS certifications and teaches you to architect scalable, secure cloud solutions. You\'ll learn EC2, S3, RDS, Lambda, and other AWS services through hands-on labs and real-world scenarios.',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
      students: 950,
      rating: 4.7,
      reviews: 680,
      price: '$549',
      level: 'Advanced',
      duration: '8 weeks',
      instructor: 'Mike Chen',
      instructorBio: 'Mike is an AWS Solutions Architect with 8 years of cloud infrastructure experience.',
      whatYouLearn: [
        'AWS core services and architecture',
        'EC2 and auto-scaling',
        'S3 storage and CDN',
        'RDS and database management',
        'Lambda and serverless computing',
        'VPC and networking',
        'Security and compliance',
        'Cost optimization',
      ],
      requirements: [
        'Linux/Unix basics',
        'Networking fundamentals',
        'Experience with at least one programming language',
      ],
      modules: [
        { title: 'AWS Fundamentals', lessons: 14 },
        { title: 'Compute Services (EC2)', lessons: 16 },
        { title: 'Storage Solutions', lessons: 12 },
        { title: 'Database Services', lessons: 14 },
        { title: 'Networking and Security', lessons: 16 },
        { title: 'Serverless Architecture', lessons: 13 },
        { title: 'Real-World Projects', lessons: 10 },
      ],
    },
  }

  const course = courses[courseId] || courses[1]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={`${course.image} text-white py-16 md:py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={18} className="fill-white" />
                  <span className="font-semibold">{course.rating} ({course.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg opacity-95 mb-8">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  {course.students.toLocaleString()} students enrolled
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  {course.duration}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* About Course */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{course.fullDescription}</p>
                </section>

                {/* What You'll Learn */}
                <section>
                  <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Course Structure */}
                <section>
                  <h2 className="text-2xl font-bold mb-6">Course Structure</h2>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 flex items-center justify-between hover:border-primary/50 transition-colors">
                        <div>
                          <h3 className="font-semibold">{index + 1}. {module.title}</h3>
                          <p className="text-sm text-muted-foreground">{module.lessons} lessons</p>
                        </div>
                        <Play className="text-muted-foreground" size={20} />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Requirements */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Instructor */}
                <section>
                  <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                  <div className="flex gap-6 items-start border border-border rounded-lg p-6 bg-muted/50">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-lg">{course.instructor}</h3>
                      <p className="text-muted-foreground">{course.instructorBio}</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column - Sticky Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <Play className="text-primary" size={48} />
                  </div>

                  <div className="text-3xl font-bold text-primary">{course.price}</div>

                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    Enroll Now
                  </button>

                  <button className="w-full px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
                    Add to Cart
                  </button>

                  <div className="border-t border-border pt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Award className="text-secondary" size={20} />
                      <span>Industry-recognized certificate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-secondary" size={20} />
                      <span>Lifetime access to materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-secondary" size={20} />
                      <span>Community support & mentoring</span>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-4 text-sm">
                    <p className="font-semibold mb-2">Money-back guarantee</p>
                    <p className="text-muted-foreground">
                      Not satisfied? Get a full refund within 30 days, no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((id) => (
                id !== courseId && courses[id] && (
                  <Link
                    key={id}
                    href={`/courses/${id}`}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className={`${courses[id].image} h-40`}></div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">
                        {courses[id].title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{courses[id].description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm font-semibold text-primary">{courses[id].price}</span>
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                          {courses[id].level}
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
