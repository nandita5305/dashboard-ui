"use client";

import { useParams } from "next/navigation";
import { teachersData, role } from "@/lib/data";
import Announcements from "@/components/Announcements";
import FinanceChart from "@/components/FinanceChart";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  const params = useParams();
  const teacherId = params.id;
  
  // Find the teacher by id (can be either numeric id or teacherId like "T001")
  const teacher = teachersData.find(
    (t) => t.id === Number(teacherId) || t.teacherId === teacherId
  );

  // If teacher not found, show message
  if (!teacher) {
    return (
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Teacher not found</h2>
          <Link href="/teachers" className="text-lamaSky mt-4 inline-block">
            Back to Teachers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6">
        {/* ================= PROFILE CARD ================= */}
        <div className="bg-lamaSky py-8 px-6 rounded-lg flex flex-col md:flex-row gap-6 items-center">
          <div>
            <Image
              src={teacher.photo}
              alt={teacher.name}
              width={160}
              height={160}
              className="w-40 h-40 rounded-full object-cover border-4 border-white"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap">
              <div>
                <h1 className="text-3xl font-bold">{teacher.name}</h1>
                <p className="text-sm text-gray-600 mt-1">ID: {teacher.teacherId}</p>
              </div>

              {role === "admin" && (
                <FormModal
                  table="teacher"
                  type="update"
                  data={teacher}
                />
              )}
            </div>

            <p className="text-base text-gray-600 max-w-3xl">
              Teacher specializing in {teacher.subjects.join(", ")} for grades {teacher.classes.join(", ")}.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Image src="/blood.png" alt="" width={16} height={16} />
                <span>B+</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/date.png" alt="" width={16} height={16} />
                <span>Joined 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/mail.png" alt="" width={16} height={16} />
                <span className="truncate">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/phone.png" alt="" width={16} height={16} />
                <span>{teacher.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SMALL STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold">95%</h1>
            <span className="text-sm text-gray-400">Attendance</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold">2</h1>
            <span className="text-sm text-gray-400">Branches</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold">{teacher.subjects.length}</h1>
            <span className="text-sm text-gray-400">Subjects</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold">{teacher.classes.length}</h1>
            <span className="text-sm text-gray-400">Classes</span>
          </div>
        </div>

        {/* ================= TEACHER DETAILS ================= */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-lg font-semibold mb-4">Teacher Details</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-2">Subjects</h2>
              <div className="flex flex-wrap gap-2">
                {teacher.subjects.map((subject, idx) => (
                  <span key={idx} className="px-3 py-1 bg-lamaSkyLight rounded-full text-sm">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-2">Classes/Grades</h2>
              <div className="flex flex-wrap gap-2">
                {teacher.classes.map((cls, idx) => (
                  <span key={idx} className="px-3 py-1 bg-lamaPurpleLight rounded-full text-sm">
                    Grade {cls}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-2">Contact</h2>
              <p className="text-sm">{teacher.email}</p>
              <p className="text-sm">{teacher.phone}</p>
            </div>
            
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-2">Address</h2>
              <p className="text-sm">{teacher.address}</p>
            </div>
          </div>
        </div>

        {/* ================= CHART ================= */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-lg font-semibold mb-4">Teacher's Schedule</h1>
          <div className="h-[350px]">
            <FinanceChart />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href={`/teachers/${teacher.id}/classes`} className="p-3 rounded-md bg-lamaSkyLight hover:bg-lamaSky hover:text-white transition">
              {teacher.name}&apos;s Classes
            </Link>
            <Link href={`/teachers/${teacher.id}/students`} className="p-3 rounded-md bg-lamaPurpleLight hover:bg-lamaPurple hover:text-white transition">
              {teacher.name}&apos;s Students
            </Link>
            <Link href={`/teachers/${teacher.id}/lessons`} className="p-3 rounded-md bg-lamaYellowLight hover:bg-lamaYellow hover:text-white transition">
              {teacher.name}&apos;s Lessons
            </Link>
            <Link href={`/teachers/${teacher.id}/exams`} className="p-3 rounded-md bg-pink-50 hover:bg-pink-200 transition">
              {teacher.name}&apos;s Exams
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;