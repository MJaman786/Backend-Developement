import React, { useState } from 'react';
import { Users, UserPlus, Filter, Search } from 'lucide-react';
import StudentCard from '../components/Card';
import useGetAllUsers from '../hooks/useGetAllUsers';
import useDeleteUserById from '../hooks/useDeleteUserById';
import { NavLink } from 'react-router-dom';
import NotFound from '../components/pageNotFund';

const UsersPage: React.FC = () => {

    const { data: Students } = useGetAllUsers();

    const deleteUserById = useDeleteUserById();

    const onDeleteUser = (id: string) => {
        deleteUserById.mutate(id)
    }

    const [searchState, setSearch] = useState<string>('');

    const filterSearch = Students?.filter((student) => {
        return student.fullName.toLowerCase().includes(searchState?.toLowerCase());
    })

    return (
        <main className="min-h-screen bg-zinc-950 pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- PAGE HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-[0.2em]">
                            <Users size={16} />
                            <span>Platform Directory</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Community Members
                        </h1>
                        <p className="text-zinc-500 max-w-md">
                            Manage and view all registered users within the system. Use the search to filter specific records.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-all">
                            <Filter size={18} />
                            Filters
                        </button>
                        <NavLink to={'/add-user'}>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                                <UserPlus size={18} />
                                Add User
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* --- SEARCH BAR --- */}
                <div className="relative mb-10">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={20} />
                    <input
                        type="text"
                        value={searchState}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name, email, or company..."
                        className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-2xl py-4 pl-12 pr-4 text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all outline-none"
                    />
                </div>

                {/* --- DATA GRID --- */}

                {
                    (!searchState) ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Students?.map((student) => (
                                <StudentCard key={student._id} student={student} onDelete={onDeleteUser} />
                            ))}
                        </div>
                    ) : (
                        (filterSearch?.length === 0) ? (
                            <NotFound />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filterSearch?.map((student) => (
                                    <StudentCard key={student._id} student={student} onDelete={onDeleteUser} />
                                ))}
                            </div>
                        )

                    )
                }
            </div>
        </main>
    );

};

export default UsersPage;