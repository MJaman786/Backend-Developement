import React from 'react';
import {
  Mail,
  Phone,
  BookOpen,
  Hash,
  MessageSquare,
  Calendar,
  Trash2,
  Edit3,
  User,
  ChevronRight,
} from 'lucide-react';
import type { StudentData } from '../types/studentData.types';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

interface StudentCardProps {
  student: StudentData;
  onDelete?: (id: string) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onDelete }) => {

  const handleDelete = () => {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-zinc-800">
            Are you sure you want to delete this student?
          </p>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                onDelete?.(student._id);
                closeToast();
              }}
              className="px-3 py-1.5 rounded-md bg-red-500 text-white text-sm hover:bg-red-600"
            >
              Yes, Delete
            </button>

            <button
              onClick={closeToast}
              className="px-3 py-1.5 rounded-md bg-zinc-200 text-zinc-800 text-sm hover:bg-zinc-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  };

  return (
    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-5 hover:bg-zinc-900/80 hover:border-indigo-500/30 transition-all duration-500 shadow-2xl overflow-hidden">

      {/* Background Decorative Glow */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">

        {/* Top Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <User size={28} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-zinc-900 rounded-full" />
            </div>

            <div>
              <h3 className="text-white font-bold text-lg">
                {student.fullName}
              </h3>
              <p className="text-zinc-500 text-xs flex items-center gap-1 mt-1">
                <Calendar size={12} className="text-indigo-500" />
                Joined {student.createdAt.split(' ')[0]}
              </p>
            </div>
          </div>

          <div className="flex gap-1.5">
            <NavLink to={`/edit-user/${student._id}`}>
              <button className="cursor-pointer p-2.5 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
                <Edit3 size={16} />
              </button>
            </NavLink>

            <button
              onClick={handleDelete}
              className="cursor-pointer p-2.5 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Info Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/5 border border-indigo-500/10 rounded-full text-[11px] font-bold text-indigo-400 uppercase">
            <BookOpen size={12} />
            {student.course}
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-[11px] font-bold text-zinc-400 uppercase">
            <Hash size={12} />
            {student.batchCode}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-2xl p-4 space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-zinc-500" />
              <span className="text-sm text-zinc-400 truncate max-w-[150px]">
                {student.email}
              </span>
            </div>
            <ChevronRight size={14} className="text-zinc-700" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-zinc-500" />
              <span className="text-sm text-zinc-400">
                {student.contactNumber}
              </span>
            </div>
            <ChevronRight size={14} className="text-zinc-700" />
          </div>
        </div>

        {/* Remarks */}
        <div className="flex items-start gap-3">
          <MessageSquare size={14} className="text-indigo-500 mt-1" />
          <p className="text-xs text-zinc-500 italic">
            {student.remarks || 'No specific feedback provided for this student.'}
          </p>
        </div>

      </div>
    </div>
  );
};

export default StudentCard;
