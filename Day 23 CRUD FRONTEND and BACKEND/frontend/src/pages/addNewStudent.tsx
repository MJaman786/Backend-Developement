import React, { useState } from 'react';
import { User, Mail, Phone, BookOpen, Hash, MessageSquare, X, Plus, ChevronDown } from 'lucide-react';
import useCreateNewUser from '../hooks/useCreateNewUser';
import type { StudentFormData } from '../types/studentFormData.type';

const AddStudentForm: React.FC = () => {
    const [formData, setFormData] = useState<StudentFormData>({
        fullName: '',
        email: '',
        contactNumber: '',
        course: '',
        batchCode: '',
        remarks: '',
    });


    const handelChange = (e:
        React.ChangeEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLSelectElement> |
        React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const createNewUser = useCreateNewUser();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createNewUser.mutate(formData)
    }
    return (
        <div className="my-4 max-w-2xl mx-auto bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Form Header */}
            <div className="px-8 py-6 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Add New Student</h2>
                    <p className="text-zinc-500 text-sm">Fill in the details to enroll a new member.</p>
                </div>
                <button className="p-2 hover:bg-zinc-800 rounded-full text-zinc-500 transition-colors">
                    <X size={20} />
                </button>
            </div>

            <form method='POST' className="p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Full Name */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Full Name</label>
                        <div className="relative mt-2">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                            <input
                                required
                                type="text"
                                placeholder="John Doe"
                                name='fullName'
                                value={formData.fullName}
                                onChange={handelChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Email Address</label>
                        <div className="relative mt-2">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                            <input
                                required
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handelChange}
                                placeholder="john@example.com"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Contact Number */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Contact Number</label>
                        <div className="relative mt-2">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                            <input
                                required
                                type="tel"
                                name='contactNumber'
                                value={formData.contactNumber}
                                onChange={handelChange}
                                placeholder="+91 00000 00000"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Course Selection */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">
                            Course
                        </label>
                        <div className="relative mt-2 group">
                            <BookOpen
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-indigo-500 transition-colors"
                                size={18}
                            />

                            <select
                                required
                                name='course'
                                value={formData.course}
                                onChange={handelChange}
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-10 text-zinc-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 appearance-none transition-all cursor-pointer hover:border-zinc-700">
                                <option value="" className="bg-zinc-950 text-zinc-500">Select Course</option>
                                <option value="React" className="bg-zinc-950 text-zinc-200">React JS</option>
                                <option value="Node.js" className="bg-zinc-950 text-zinc-200">Node.js</option>
                                <option value="FullStack" className="bg-zinc-950 text-zinc-200">Full Stack Development</option>
                                <option value="Next.js" className="bg-zinc-950 text-zinc-200">Next.js Framework</option>
                                <option value="CSS" className="bg-zinc-950 text-zinc-200">CSS</option>
                                <option value="HTML" className="bg-zinc-950 text-zinc-200">HTML</option>
                                <option value="JS" className="bg-zinc-950 text-zinc-200">Javascript</option>
                            </select>

                            {/* Custom Arrow Icon */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
                                <ChevronDown size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Batch Code */}
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Batch Code</label>
                        <div className="relative mt-2">
                            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                            <input
                                required
                                type="text"
                                name='batchCode'
                                value={formData.batchCode}
                                onChange={handelChange}
                                placeholder="e.g. BATCH-01"
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Remarks */}
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider ml-1">Remarks</label>
                        <div className="relative mt-2">
                            <MessageSquare className="absolute left-3 top-4 text-zinc-600" size={18} />
                            <textarea
                                required
                                name='remarks'
                                value={formData.remarks}
                                onChange={handelChange}
                                rows={3}
                                placeholder="Add any additional student feedback..."
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-zinc-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        className="px-6 py-2.5 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-8 py-2.5 bg-white text-zinc-950 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5"
                    >
                        <Plus size={18} />
                        Register Student
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStudentForm;