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
} from "react-icons/md";

import { IoBookOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

// Recharts
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

// =====================================================
// MOCK DATA
// =====================================================

const performanceData = [
  {
    name: "1 May",
    Revenue: 30000,
    Students: 150,
  },
  {
    name: "8 May",
    Revenue: 52000,
    Students: 380,
  },
  {
    name: "15 May",
    Revenue: 68000,
    Students: 550,
  },
  {
    name: "22 May",
    Revenue: 85000,
    Students: 720,
  },
  {
    name: "29 May",
    Revenue: 98000,
    Students: 800,
  },
];

const revenueData = [
  {
    name: "Course Sales",
    value: 45200,
    color: "#2563eb",
  },
  {
    name: "Live Sessions",
    value: 22300,
    color: "#10b981",
  },
  {
    name: "Memberships",
    value: 12850,
    color: "#f59e0b",
  },
  {
    name: "Other Sources",
    value: 6070,
    color: "#8b5cf6",
  },
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
    title: "Market Outlook 2026",
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

// =====================================================
// STAT CARD
// =====================================================

const StatCard = ({
  icon,
  title,
  value,
  change,
  changeColor,
  iconBg,
}) => {
  return (
    <div className="AdminDashboard-statCard">
      <div className={`AdminDashboard-iconWrapper ${iconBg}`}>
        {icon}
      </div>

      <div className="AdminDashboard-statContent">
        <p className="AdminDashboard-statTitle">
          {title}
        </p>

        <h3 className="AdminDashboard-statValue">
          {value}
        </h3>

        <p
          className={`AdminDashboard-statChange ${changeColor}`}
        >
          {change}

          <span className="AdminDashboard-changeContext">
            from last month
          </span>
        </p>
      </div>
    </div>
  );
};

// =====================================================
// PROGRESS BAR
// =====================================================

const ProgressBar = ({ value }) => {
  return (
    <div className="AdminDashboard-progressBar">
      <div
        className="AdminDashboard-progressFill"
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
};

// =====================================================
// MAIN ADMIN DASHBOARD
// =====================================================

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard-container">

      {/* =================================================
          TOP STATS
      ================================================= */}

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

      {/* =================================================
          PERFORMANCE + RECENT ACTIVITY
      ================================================= */}

      <div className="AdminDashboard-gridRow-1-2">

        {/* PERFORMANCE OVERVIEW */}

        <div className="AdminDashboard-card">

          <div className="AdminDashboard-cardHeader">

            <h2 className="AdminDashboard-cardTitle">
              Performance Overview
            </h2>

            <button className="AdminDashboard-filterBtn">
              This Month

              <MdChevronRight className="rotate-90" />
            </button>

          </div>

          {/* Legend */}

          <div className="AdminDashboard-chartLegend">

            <div className="legend-item">
              <GoDotFill className="text-navy" />
              Revenue
            </div>

            <div className="legend-item">
              <GoDotFill className="text-gold" />
              Students
            </div>

          </div>

          {/* Line Chart */}

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart
              data={performanceData}
              margin={{
                top: 5,
                right: 20,
                left: -20,
                bottom: 5,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#64748b",
                }}
              />

              {/* Revenue Axis */}

              <YAxis
                yAxisId="left"
                orientation="left"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) =>
                  `₹ ${value / 1000}K`
                }
                tick={{
                  fontSize: 12,
                  fill: "#64748b",
                }}
                domain={[0, 100000]}
                ticks={[
                  0,
                  25000,
                  50000,
                  75000,
                  100000,
                ]}
              />

              {/* Students Axis */}

              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "#64748b",
                }}
                domain={[0, 1000]}
                ticks={[
                  0,
                  250,
                  500,
                  750,
                  1000,
                ]}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  borderColor:
                    "rgba(16, 185, 129, 0.15)",
                  fontSize: "12px",
                  borderRadius: "12px",
                  boxShadow:
                    "0 10px 20px rgba(0,0,0,0.1)",
                }}
                formatter={(value, name) => {
                  if (name === "Revenue") {
                    return [
                      `₹ ${Number(
                        value
                      ).toLocaleString()}`,
                      name,
                    ];
                  }

                  return [value, name];
                }}
              />

              {/* Revenue Line */}

              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Revenue"
                stroke="#065f46"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#ffffff",
                  stroke: "#065f46",
                  strokeWidth: 3,
                }}
              />

              {/* Students Line */}

              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Students"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#ffffff",
                  stroke: "#f59e0b",
                  strokeWidth: 3,
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* =================================================
            RECENT ACTIVITY
        ================================================= */}

        <div className="AdminDashboard-card">

          <div className="AdminDashboard-cardHeader">

            <h2 className="AdminDashboard-cardTitle">
              Recent Activity
            </h2>

            <button className="AdminDashboard-viewAllBtn">
              View All
            </button>

          </div>

          <div className="AdminDashboard-activityList">

            {recentActivity.map(
              (activity, index) => (
                <div
                  key={index}
                  className="AdminDashboard-activityItem"
                >

                  <div
                    className={`AdminDashboard-activityIcon text-${activity.color}`}
                  >
                    {activity.icon}
                  </div>

                  <div className="AdminDashboard-activityContent">

                    <p className="AdminDashboard-activityText">
                      {activity.title}{" "}

                      <span className="AdminDashboard-activityAction">
                        {activity.action}
                      </span>
                    </p>

                    <span className="AdminDashboard-activityTime">
                      {activity.time}
                    </span>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>

      {/* =================================================
          BOTTOM ROW
      ================================================= */}

      <div className="AdminDashboard-gridRow-3-2-3">

        {/* =================================================
            TOP COURSES
        ================================================= */}

        <div className="AdminDashboard-card">

          <div className="AdminDashboard-cardHeader">

            <h2 className="AdminDashboard-cardTitle">
              Top Courses
            </h2>

            <button className="AdminDashboard-viewAllBtn">
              View All
            </button>

          </div>

          <div className="AdminDashboard-courseList">

            {topCourses.map(
              (course, index) => (
                <div
                  key={index}
                  className="AdminDashboard-courseItem"
                >

                  <img
                    src={course.img}
                    alt={course.name}
                    className="AdminDashboard-courseImg"
                  />

                  <div className="AdminDashboard-courseInfo">

                    <p className="AdminDashboard-courseName">
                      {course.name}
                    </p>

                    <p className="AdminDashboard-courseEnrolled">
                      {course.enrolled} Enrolled
                    </p>

                  </div>

                  <div className="AdminDashboard-courseProgressArea">

                    <ProgressBar
                      value={course.progress}
                    />

                    <span className="AdminDashboard-coursePercent">
                      {course.progress}%
                    </span>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

        {/* =================================================
            REVENUE OVERVIEW
        ================================================= */}

        <div className="AdminDashboard-card">

          <div className="AdminDashboard-cardHeader">

            <h2 className="AdminDashboard-cardTitle">
              Revenue Overview
            </h2>

            <button className="AdminDashboard-filterBtn">
              This Month

              <MdChevronRight className="rotate-90" />
            </button>

          </div>

          <div className="AdminDashboard-revenueTotal">

            <h2 className="AdminDashboard-revenueValue">
              ₹ 86,420
            </h2>

            <p className="text-green AdminDashboard-statChange">
              ▲ 15.6%

              <span className="AdminDashboard-changeContext">
                from last month
              </span>
            </p>

          </div>

          <div className="AdminDashboard-pieChartContainer">

            <ResponsiveContainer
              width="100%"
              height={180}
            >

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

                  {revenueData.map(
                    (entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    )
                  )}

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
                  formatter={(value) => {

                    const data =
                      revenueData.find(
                        (item) =>
                          item.name === value
                      );

                    return (
                      <span className="AdminDashboard-legendText">

                        {value}{" "}

                        <span className="AdminDashboard-legendValue">
                          ₹{" "}
                          {data
                            ? data.value.toLocaleString()
                            : "0"}
                        </span>

                      </span>
                    );
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* =================================================
            UPCOMING LIVE SESSIONS
        ================================================= */}

        <div className="AdminDashboard-card">

          <div className="AdminDashboard-cardHeader">

            <h2 className="AdminDashboard-cardTitle">
              Upcoming Live Sessions
            </h2>

            <button className="AdminDashboard-viewAllBtn">
              View All
            </button>

          </div>

          <div className="AdminDashboard-sessionList">

            {upcomingSessions.map(
              (session, index) => (
                <div
                  key={index}
                  className="AdminDashboard-sessionItem"
                >

                  {/* Date */}

                  <div className="AdminDashboard-sessionDate">

                    <span className="AdminDashboard-sessionDay">
                      {session.day}
                    </span>

                    <span className="AdminDashboard-sessionMonth">
                      {session.month}
                    </span>

                  </div>

                  {/* Session Details */}

                  <div className="AdminDashboard-sessionInfo">

                    <p className="AdminDashboard-sessionTitle">
                      {session.title}
                    </p>

                    <p className="AdminDashboard-sessionMeta">
                      {session.time}
                    </p>

                    <p className="AdminDashboard-sessionMentor">
                      Mentor: {session.mentor}
                    </p>

                  </div>

                  {/* Join */}

                  <button className="AdminDashboard-joinBtn">
                    Join
                  </button>

                </div>
              )
            )}

          </div>

        </div>

      </div>

      {/* =================================================
          FOOTER BANNER
      ================================================= */}

      <div className="AdminDashboard-footerBanner">

        <div className="AdminDashboard-footerIcon">
          <MdShowChart size={24} />
        </div>

        <p className="AdminDashboard-footerQuote">

          Discipline in numbers today,
          freedom in life tomorrow.

          <span className="AdminDashboard-footerAuthor">
            - Numeric Edge Trading Academy
          </span>

        </p>

        <button className="AdminDashboard-goLearningBtn">

          Go to My Learning

          <MdOutlineArrowOutward size={14} />

        </button>

      </div>

    </div>
  );
};

export default AdminDashboard;