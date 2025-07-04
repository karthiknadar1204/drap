import { TaskStatus } from "../lib/generated/prisma";

export const roleList = [
  "Designer",
  "Developer",
  "Founder",
  "Project Manager",
  "Product Manager",
  "QA Analyst",
  "Team Member",
  "Tester",
  "UX Designer",
  "Others",
];

export const industryTypesList = [
  "Consumer Goods",
  "Education",
  "Finance",
  "Government",
  "Healthcare",
  "Manufacturing",
  "Marketing",
  "Retail",
  "Technology",
  "Others",
];

export const taskStats = [
  {
    status: TaskStatus.TODO,
    label: "TO DO",
    color: "bg-blue-500",
  },
  {
    status: TaskStatus.IN_PROGRESS,
    label: "IN PROGRESS",
    color: "bg-yellow-500",
  },
  {
    status: TaskStatus.COMPLETED,
    label: "COMPLETED",
    color: "bg-green-500",
  },
  {
    status: TaskStatus.IN_REVIEW,
    label: "IN REVIEW",
    color: "bg-purple-500",
  },
  {
    status: TaskStatus.BACKLOG,
    label: "BACKLOG",
    color: "bg-gray-500",
  },
];

export const taskStatusVariant = {
  [TaskStatus.TODO]: "#6366f1",
  [TaskStatus.IN_PROGRESS]: "#f59e0b",
  [TaskStatus.COMPLETED]: "#10b981",
  [TaskStatus.IN_REVIEW]: "#a855f7",
  [TaskStatus.BACKLOG]: "#6b7280",
  default: "#6366f1",
};
