import React from 'react';

interface ComparisonRow {
    feature: string;
    traditional: string;
    modern: string;
}

interface ComparisonTableProps {
    title: string;
    headers: [string, string, string]; // [Feature, Traditional Label, Modern Label]
    data: ComparisonRow[];
}

export default function ComparisonTable({ title, headers, data }: ComparisonTableProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm my-8">
            <div className="bg-slate-900 p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-0">{title}</h3>
            </div>
            <table className="w-full text-left border-collapse bg-white text-sm md:text-base">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-4 font-bold text-slate-700 w-1/3 border-r border-slate-100">{headers[0]}</th>
                        <th className="p-4 font-bold text-slate-500 w-1/3 border-r border-slate-100 bg-red-50/50">{headers[1]}</th>
                        <th className="p-4 font-bold text-[var(--color-primary-red)] w-1/3 bg-green-50/50">{headers[2]}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-semibold text-slate-800 border-r border-slate-100">
                                {row.feature}
                            </td>
                            <td className="p-4 text-slate-500 border-r border-slate-100 bg-red-50/10">
                                {row.traditional}
                            </td>
                            <td className="p-4 font-medium text-slate-900 bg-green-50/10">
                                {row.modern}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
