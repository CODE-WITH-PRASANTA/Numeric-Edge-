import React from "react";
import "./AdminDashboard.css";

// React Icons
import {
  MdOutlineSchool,
  MdOutlinePeopleAlt,
  MdOutlineVideocam,
  MdOutlineAssignmentTurnedIn,
  MdShowChart,
  MdOutlineArrowOutward,
  MdChevronRight,
  MdCalendarToday,
} from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

// Recharts for Charts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// --- Mock Data ---
const performanceData = [
  { name: "1 May", Revenue: 30000, Students: 15000 },
  { name: "8 May", Revenue: 52000, Students: 38000 },
  { name: "15 May", Revenue: 68000, Students: 55000 },
  { name: "22 May", Revenue: 85000, Students: 72000 },
  { name: "29 May", Revenue: 98000, Students: 80000 },
];

const revenueData = [
  { name: "Course Sales", value: 45200, color: "#0b1839" }, // Dark Navy
  { name: "Live Sessions", value: 22300, color: "#e0a347" }, // Gold/Orange
  { name: "Memberships", value: 12850, color: "#27a845" }, // Green
  { name: "Other Sources", value: 6070, color: "#8f47cf" }, // Purple
];

const topCourses = [
  {
    name: "Technical Analysis Mastery",
    enrolled: 842,
    progress: 85,
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=100&auto=format&fit=crop",
  },
  {
    name: "Options Trading 101",
    enrolled: 678,
    progress: 72,
    img: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=100&auto=format&fit=crop",
  },
  {
    name: "Price Action Strategies",
    enrolled: 523,
    progress: 65,
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=100&auto=format&fit=crop",
  },
  {
    name: "Commodity Trading Basics",
    enrolled: 411,
    progress: 58,
    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=100&auto=format&fit=crop",
  },
];

const recentActivity = [
  {
    title: 'New course "Options Trading 101"',
    action: "added by Admin",
    time: "2h ago",
    icon: <IoBookOutline />,
    color: "blue",
  },
  {
    title: "Rahul Sharma completed",
    action: "Technical Analysis Mastery",
    time: "5h ago",
    icon: <MdOutlinePeopleAlt />,
    color: "green",
  },
  {
    title: 'Live session "Market Outlook"',
    action: "scheduled for tomorrow",
    time: "1d ago",
    icon: <MdOutlineVideocam />,
    color: "purple",
  },
  {
    title: "Assignment submitted by",
    action: "Priya Patel",
    time: "1d ago",
    icon: <MdOutlineAssignmentTurnedIn />,
    color: "orange",
  },
];

const upcomingSessions = [
  {
    day: "24",
    month: "MAY",
    title: "Market Outlook 2024",
    time: "07:00 PM - 08:30 PM",
    mentor: "Mr. Arjun Singh",
  },
  {
    day: "26",
    month: "MAY",
    title: "Options Trading Strategies",
    time: "06:00 PM - 07:30 PM",
    mentor: "Ms. Neha Verma",
  },
  {
    day: "28",
    month: "MAY",
    title: "Risk Management Essentials",
    time: "07:30 PM - 09:00 PM",
    mentor: "Mr. Rohan Mehta",
  },
];

// --- Sub-Components ---

const StatCard = ({ icon, title, value, change, changeColor, iconBg }) => (
  <div className="AdminDashboard-statCard">
    <div className={`AdminDashboard-iconWrapper ${iconBg}`}>{icon}</div>
    <div className="AdminDashboard-statContent">
      <p className="AdminDashboard-statTitle">{title}</p>
      <h3 className="AdminDashboard-statValue">{value}</h3>
      <p className={`AdminDashboard-statChange ${changeColor}`}>
        {change} <span className="AdminDashboard-changeContext">from last month</span>
      </p>
    </div>
  </div>
);

const ProgressBar = ({ value }) => (
  <div className="AdminDashboard-progressBar">
    <div className="AdminDashboard-progressFill" style={{ width: `${value}%` }}></div>
  </div>
);

// --- Main Component ---

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard-container">
      {/* Top Stats Row */}
      <div className="AdminDashboard-gridRow-4">
        <StatCard
          icon={<MdOutlineSchool />}
          title="Total Courses"
          value="24"
          change="▲ 12%"
          changeColor="text-green"
          iconBg="bg-blue-light"
        />
        <StatCard
          icon={<MdOutlinePeopleAlt />}
          title="Enrolled Students"
          value="1,248"
          change="▲ 18%"
          changeColor="text-green"
          iconBg="bg-green-light"
        />
        <StatCard
          icon={<MdOutlineVideocam />}
          title="Live Sessions"
          value="16"
          change="▲ 8%"
          changeColor="text-green"
          iconBg="bg-purple-light"
        />
        <StatCard
          icon={<IoBookOutline />}
          title="Completed Courses"
          value="8"
          change="▲ 25%"
          changeColor="text-green"
          iconBg="bg-orange-light"
        />
      </div>

      {/* Middle Row: Performance & Activity */}
      <div className="AdminDashboard-gridRow-1-2">
        {/* Performance Overview Chart */}
        <div className="AdminDashboard-card AdminDashboard-chartCard">
          <div className="AdminDashboard-cardHeader">
            <h2 className="AdminDashboard-cardTitle">Performance Overview</h2>
            <button className="AdminDashboard-filterBtn">
              This Month <MdChevronRight className="rotate-90" />
            </button>
          </div>
          <div className="AdminDashboard-chartLegend">
            <div className="legend-item">
              <GoDotFill className="text-navy" /> Revenue
            </div>
            <div className="legend-item">
              <GoDotFill className="text-gold" /> Students
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis
                yAxisId="left"
                orientation="left"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `₹ ${value / 1000}K`}
                tick={{ fontSize: 12 }}
                domain={[0, 100000]}
                ticks={[0, 25000, 50000, 75000, 100000]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                domain={[0, 1500]}
                ticks={[0, 375, 750, 1125, 1500]}
              />
              <Tooltip contentStyle={{ fontSize: "12px", borderRadius: "8px" }} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Revenue"
                stroke="#0b1839"
                strokeWidth={2}
                dot={false}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Students"
                stroke="#e0a347"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="AdminDashboard-card AdminDashboard-activityCard">
          <div className="AdminDashboard-cardHeader">
            <h2 className="AdminDashboard-cardTitle">Recent Activity</h2>
            <button className="AdminDashboard-viewAllBtn">View All</button>
          </div>
          <div className="AdminDashboard-activityList">
            {recentActivity.map((activity, index) => (
              <div key={index} className="AdminDashboard-activityItem">
                <div className={`AdminDashboard-activityIcon bg-${activity.color}-light text-${activity.color}`}>
                  {activity.icon}
                </div>
                <div className="AdminDashboard-activityContent">
                  <p className="AdminDashboard-activityText">
                    <strong>{activity.title}</strong> {activity.action}
                  </p>
                  <span className="AdminDashboard-activityTime">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Top Courses, Revenue, Sessions */}
      <div className="AdminDashboard-gridRow-3-2-3">
        {/* Top Courses */}
        <div className="AdminDashboard-card">
          <div className="AdminDashboard-cardHeader">
            <h2 className="AdminDashboard-cardTitle">Top Courses</h2>
            <button className="AdminDashboard-viewAllBtn">View All</button>
          </div>
          <div className="AdminDashboard-courseList">
            {topCourses.map((course, index) => (
              <div key={index} className="AdminDashboard-courseItem">
                <img src={course.img} alt={course.name} className="AdminDashboard-courseImg" />
                <div className="AdminDashboard-courseInfo">
                  <p className="AdminDashboard-courseName">{course.name}</p>
                  <p className="AdminDashboard-courseEnrolled">{course.enrolled} Enrolled</p>
                </div>
                <div className="AdminDashboard-courseProgressArea">
                  <ProgressBar value={course.progress} />
                  <span className="AdminDashboard-coursePercent">{course.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Overview */}
        <div className="AdminDashboard-card AdminDashboard-revenueCard">
          <div className="AdminDashboard-cardHeader">
            <h2 className="AdminDashboard-cardTitle">Revenue Overview</h2>
            <button className="AdminDashboard-filterBtn">
              This Month <MdChevronRight className="rotate-90" />
            </button>
          </div>
          <div className="AdminDashboard-revenueTotal">
            <h2 className="AdminDashboard-revenueValue">₹ 86,420</h2>
            <p className="text-green AdminDashboard-statChange">
              ▲ 15.6% <span className="AdminDashboard-changeContext">from last month</span>
            </p>
          </div>

          <div className="AdminDashboard-pieChartContainer">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  cornerRadius={8}
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  iconType="circle"
                  iconSize={8}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{
                    right: -10,
                    top: 0,
                    fontSize: "12px",
                    lineHeight: "24px",
                  }}
                  formatter={(value, entry) => {
                    const data = revenueData.find((d) => d.name === value);
                    return (
                      <span className="AdminDashboard-legendText">
                        {value} <span className="AdminDashboard-legendValue">₹ {data.value.toLocaleString()}</span>
                      </span>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Live Sessions */}
        <div className="AdminDashboard-card">
          <div className="AdminDashboard-cardHeader">
            <h2 className="AdminDashboard-cardTitle">Upcoming Live Sessions</h2>
            <button className="AdminDashboard-viewAllBtn">View All</button>
          </div>
          <div className="AdminDashboard-sessionList">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="AdminDashboard-sessionItem">
                <div className="AdminDashboard-sessionDate">
                  <MdCalendarToday className="text-gold" size={14} />
                  <span className="AdminDashboard-sessionDay">{session.day}</span>
                  <span className="AdminDashboard-sessionMonth">{session.month}</span>
                </div>
                <div className="AdminDashboard-sessionInfo">
                  <p className="AdminDashboard-sessionTitle">{session.title}</p>
                  <p className="AdminDashboard-sessionMeta">{session.time}</p>
                  <p className="AdminDashboard-sessionMentor">{session.mentor}</p>
                </div>
                <button className="AdminDashboard-joinBtn">Join</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="AdminDashboard-footerBanner">
        <div className="AdminDashboard-footerIcon">
          <MdShowChart size={24} />
        </div>
        <p className="AdminDashboard-footerQuote">
          Discipline in numbers today, freedom in life tomorrow.
          <span className="AdminDashboard-footerAuthor">- Numeric Edge Trading Academy</span>
        </p>
        <button className="AdminDashboard-goLearningBtn">
          Go to My Learning <MdOutlineArrowOutward size={14} />
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;