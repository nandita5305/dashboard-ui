// Role
export const role = "admin";

// Teachers Data - Extracted from unique Teacher entries
export const teachersData = [
  {
    id: 1,
    teacherId: "T001",
    name: "Anita Sharma",
    email: "anita.sharma@school.com",
    photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9876543210",
    subjects: ["Mathematics"],
    classes: ["7", "8"],
    address: "123 Teachers Colony, Delhi",
  },
  {
    id: 2,
    teacherId: "T002",
    name: "Rahul Verma",
    email: "rahul.verma@school.com",
    photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9876543211",
    subjects: ["Science"],
    classes: ["8", "9"],
    address: "456 Science Nagar, Delhi",
  },
  {
    id: 3,
    teacherId: "T003",
    name: "Pooja Mehta",
    email: "pooja.mehta@school.com",
    photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9876543212",
    subjects: ["English"],
    classes: ["6", "7"],
    address: "789 Language Lane, Delhi",
  },
  {
    id: 4,
    teacherId: "T004",
    name: "Vikas Nair",
    email: "vikas.nair@school.com",
    photo: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9876543213",
    subjects: ["Social Studies"],
    classes: ["9", "10"],
    address: "321 History Road, Delhi",
  },
  {
    id: 5,
    teacherId: "T005",
    name: "Neha Kapoor",
    email: "neha.kapoor@school.com",
    photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9876543214",
    subjects: ["Mathematics"],
    classes: ["9", "10"],
    address: "654 Math Enclave, Delhi",
  },
];

// Students Data - Creating based on grades from the Excel
export const studentsData = [
  {
    id: 1,
    studentId: "S001",
    name: "Aarav Sharma",
    email: "aarav.sharma@student.com",
    photo: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9988776655",
    grade: 6,
    class: "6A",
    address: "123 Student Homes, Delhi",
  },
  {
    id: 2,
    studentId: "S002",
    name: "Diya Patel",
    email: "diya.patel@student.com",
    photo: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9988776656",
    grade: 7,
    class: "7B",
    address: "456 Student Colony, Delhi",
  },
  {
    id: 3,
    studentId: "S003",
    name: "Reyansh Singh",
    email: "reyansh.singh@student.com",
    photo: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9988776657",
    grade: 8,
    class: "8C",
    address: "789 Student Apartments, Delhi",
  },
  {
    id: 4,
    studentId: "S004",
    name: "Ananya Gupta",
    email: "ananya.gupta@student.com",
    photo: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9988776658",
    grade: 9,
    class: "9A",
    address: "321 Student Nagar, Delhi",
  },
  {
    id: 5,
    studentId: "S005",
    name: "Vihaan Kumar",
    email: "vihaan.kumar@student.com",
    photo: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9988776659",
    grade: 10,
    class: "10B",
    address: "654 Student Heights, Delhi",
  },
];

// Parents Data
export const parentsData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    students: ["Aarav Sharma"],
    email: "rajesh.sharma@parent.com",
    phone: "9988776644",
    address: "123 Parent Colony, Delhi",
  },
  {
    id: 2,
    name: "Neha Patel",
    students: ["Diya Patel"],
    email: "neha.patel@parent.com",
    phone: "9988776645",
    address: "456 Parent Nagar, Delhi",
  },
  {
    id: 3,
    name: "Amit Singh",
    students: ["Reyansh Singh"],
    email: "amit.singh@parent.com",
    phone: "9988776646",
    address: "789 Parent Enclave, Delhi",
  },
  {
    id: 4,
    name: "Priya Gupta",
    students: ["Ananya Gupta"],
    email: "priya.gupta@parent.com",
    phone: "9988776647",
    address: "321 Parent Vihar, Delhi",
  },
  {
    id: 5,
    name: "Suresh Kumar",
    students: ["Vihaan Kumar"],
    email: "suresh.kumar@parent.com",
    phone: "9988776648",
    address: "654 Parent Apartments, Delhi",
  },
];

// Subjects Data based on Excel
export const subjectsData = [
  {
    id: 1,
    name: "Mathematics",
    teachers: ["Anita Sharma", "Neha Kapoor"],
  },
  {
    id: 2,
    name: "Science",
    teachers: ["Rahul Verma"],
  },
  {
    id: 3,
    name: "English",
    teachers: ["Pooja Mehta"],
  },
  {
    id: 4,
    name: "Social Studies",
    teachers: ["Vikas Nair"],
  },
];

// Classes Data based on grades from Excel
export const classesData = [
  {
    id: 1,
    name: "6A",
    capacity: 35,
    grade: 6,
    supervisor: "Pooja Mehta",
  },
  {
    id: 2,
    name: "6B",
    capacity: 35,
    grade: 6,
    supervisor: "Pooja Mehta",
  },
  {
    id: 3,
    name: "7A",
    capacity: 35,
    grade: 7,
    supervisor: "Pooja Mehta",
  },
  {
    id: 4,
    name: "7B",
    capacity: 35,
    grade: 7,
    supervisor: "Anita Sharma",
  },
  {
    id: 5,
    name: "8A",
    capacity: 35,
    grade: 8,
    supervisor: "Anita Sharma",
  },
  {
    id: 6,
    name: "8B",
    capacity: 35,
    grade: 8,
    supervisor: "Rahul Verma",
  },
  {
    id: 7,
    name: "9A",
    capacity: 35,
    grade: 9,
    supervisor: "Rahul Verma",
  },
  {
    id: 8,
    name: "9B",
    capacity: 35,
    grade: 9,
    supervisor: "Vikas Nair",
  },
  {
    id: 9,
    name: "10A",
    capacity: 35,
    grade: 10,
    supervisor: "Neha Kapoor",
  },
  {
    id: 10,
    name: "10B",
    capacity: 35,
    grade: 10,
    supervisor: "Vikas Nair",
  },
];

// Lessons Data based on Excel
export const lessonsData = [
  {
    id: 1,
    subject: "Mathematics",
    class: "7A",
    teacher: "Anita Sharma",
  },
  {
    id: 2,
    subject: "Mathematics",
    class: "8A",
    teacher: "Anita Sharma",
  },
  {
    id: 3,
    subject: "Mathematics",
    class: "9A",
    teacher: "Neha Kapoor",
  },
  {
    id: 4,
    subject: "Mathematics",
    class: "10A",
    teacher: "Neha Kapoor",
  },
  {
    id: 5,
    subject: "Science",
    class: "8B",
    teacher: "Rahul Verma",
  },
  {
    id: 6,
    subject: "Science",
    class: "9A",
    teacher: "Rahul Verma",
  },
  {
    id: 7,
    subject: "English",
    class: "6A",
    teacher: "Pooja Mehta",
  },
  {
    id: 8,
    subject: "English",
    class: "7A",
    teacher: "Pooja Mehta",
  },
  {
    id: 9,
    subject: "Social Studies",
    class: "9B",
    teacher: "Vikas Nair",
  },
  {
    id: 10,
    subject: "Social Studies",
    class: "10A",
    teacher: "Vikas Nair",
  },
];

// Exams Data
export const examsData = [
  {
    id: 1,
    subject: "Mathematics",
    class: "7A",
    teacher: "Anita Sharma",
    date: "2026-03-15",
  },
  {
    id: 2,
    subject: "Mathematics",
    class: "8A",
    teacher: "Anita Sharma",
    date: "2026-03-16",
  },
  {
    id: 3,
    subject: "Science",
    class: "8B",
    teacher: "Rahul Verma",
    date: "2026-03-17",
  },
  {
    id: 4,
    subject: "English",
    class: "6A",
    teacher: "Pooja Mehta",
    date: "2026-03-18",
  },
  {
    id: 5,
    subject: "Social Studies",
    class: "10A",
    teacher: "Vikas Nair",
    date: "2026-03-19",
  },
];

// Assignments Data
export const assignmentsData = [
  {
    id: 1,
    subject: "Mathematics",
    class: "7A",
    teacher: "Anita Sharma",
    dueDate: "2026-02-28",
  },
  {
    id: 2,
    subject: "Science",
    class: "8B",
    teacher: "Rahul Verma",
    dueDate: "2026-02-28",
  },
  {
    id: 3,
    subject: "English",
    class: "6A",
    teacher: "Pooja Mehta",
    dueDate: "2026-03-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "9B",
    teacher: "Vikas Nair",
    dueDate: "2026-03-02",
  },
  {
    id: 5,
    subject: "Mathematics",
    class: "10A",
    teacher: "Neha Kapoor",
    dueDate: "2026-03-03",
  },
];

// Results Data
export const resultsData = [
  {
    id: 1,
    subject: "Mathematics",
    class: "7A",
    teacher: "Anita Sharma",
    student: "Diya Patel",
    date: "2026-02-14",
    type: "quiz",
    score: 85,
  },
  {
    id: 2,
    subject: "Science",
    class: "8B",
    teacher: "Rahul Verma",
    student: "Reyansh Singh",
    date: "2026-02-12",
    type: "quiz",
    score: 78,
  },
  {
    id: 3,
    subject: "English",
    class: "6A",
    teacher: "Pooja Mehta",
    student: "Aarav Sharma",
    date: "2026-02-14",
    type: "quiz",
    score: 92,
  },
];

// Events Data
export const eventsData = [
  {
    id: 1,
    title: "Mathematics Quiz",
    class: "7A",
    date: "2026-02-28",
    startTime: "09:00",
    endTime: "10:30",
  },
  {
    id: 2,
    title: "Science Workshop",
    class: "8B",
    date: "2026-03-01",
    startTime: "11:00",
    endTime: "12:30",
  },
  {
    id: 3,
    title: "English Debate",
    class: "6A",
    date: "2026-03-02",
    startTime: "10:00",
    endTime: "11:30",
  },
  {
    id: 4,
    title: "Social Studies Project",
    class: "9B",
    date: "2026-03-03",
    startTime: "14:00",
    endTime: "15:30",
  },
  {
    id: 5,
    title: "Parent-Teacher Meeting",
    class: "10A",
    date: "2026-03-04",
    startTime: "09:00",
    endTime: "12:00",
  },
];

// Announcements Data
export const announcementsData = [
  {
    id: 1,
    title: "Mathematics Quiz on Friday",
    class: "7A",
    date: "2026-02-27",
  },
  {
    id: 2,
    title: "Science Project Submission Deadline",
    class: "8B",
    date: "2026-02-28",
  },
  {
    id: 3,
    title: "English Literature Test Next Week",
    class: "6A",
    date: "2026-02-26",
  },
  {
    id: 4,
    title: "Social Studies Assignment",
    class: "9B",
    date: "2026-02-27",
  },
  {
    id: 5,
    title: "Board Exam Preparation Session",
    class: "10A",
    date: "2026-02-28",
  },
];

// Calendar Events (current week)
export const calendarEvents = [
  {
    title: "Mathematics",
    allDay: false,
    start: new Date(2026, 1, 23, 8, 0),
    end: new Date(2026, 1, 23, 8, 45),
  },
  {
    title: "Science",
    allDay: false,
    start: new Date(2026, 1, 23, 9, 0),
    end: new Date(2026, 1, 23, 9, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2026, 1, 23, 10, 0),
    end: new Date(2026, 1, 23, 10, 45),
  },
  {
    title: "Social Studies",
    allDay: false,
    start: new Date(2026, 1, 23, 11, 0),
    end: new Date(2026, 1, 23, 11, 45),
  },
  {
    title: "Mathematics",
    allDay: false,
    start: new Date(2026, 1, 24, 8, 0),
    end: new Date(2026, 1, 24, 8, 45),
  },
  {
    title: "Science",
    allDay: false,
    start: new Date(2026, 1, 24, 9, 0),
    end: new Date(2026, 1, 24, 9, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2026, 1, 24, 10, 0),
    end: new Date(2026, 1, 24, 10, 45),
  },
  {
    title: "Social Studies",
    allDay: false,
    start: new Date(2026, 1, 24, 11, 0),
    end: new Date(2026, 1, 24, 11, 45),
  },
  {
    title: "Mathematics",
    allDay: false,
    start: new Date(2026, 1, 25, 8, 0),
    end: new Date(2026, 1, 25, 8, 45),
  },
  {
    title: "Science",
    allDay: false,
    start: new Date(2026, 1, 25, 9, 0),
    end: new Date(2026, 1, 25, 9, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2026, 1, 25, 10, 0),
    end: new Date(2026, 1, 25, 10, 45),
  },
  {
    title: "Social Studies",
    allDay: false,
    start: new Date(2026, 1, 25, 11, 0),
    end: new Date(2026, 1, 25, 11, 45),
  },
  {
    title: "Mathematics",
    allDay: false,
    start: new Date(2026, 1, 26, 8, 0),
    end: new Date(2026, 1, 26, 8, 45),
  },
  {
    title: "Science",
    allDay: false,
    start: new Date(2026, 1, 26, 9, 0),
    end: new Date(2026, 1, 26, 9, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2026, 1, 26, 10, 0),
    end: new Date(2026, 1, 26, 10, 45),
  },
  {
    title: "Social Studies",
    allDay: false,
    start: new Date(2026, 1, 26, 11, 0),
    end: new Date(2026, 1, 26, 11, 45),
  },
  {
    title: "Mathematics",
    allDay: false,
    start: new Date(2026, 1, 27, 8, 0),
    end: new Date(2026, 1, 27, 8, 45),
  },
  {
    title: "Science",
    allDay: false,
    start: new Date(2026, 1, 27, 9, 0),
    end: new Date(2026, 1, 27, 9, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2026, 1, 27, 10, 0),
    end: new Date(2026, 1, 27, 10, 45),
  },
  {
    title: "Social Studies",
    allDay: false,
    start: new Date(2026, 1, 27, 11, 0),
    end: new Date(2026, 1, 27, 11, 45),
  },
];