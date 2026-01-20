'use client';

import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadCardProps {
    title: string;
    description: string;
    filename: string;
}

export function DownloadCard({ title, description, filename }: DownloadCardProps) {
    return (
        <div className="group bg-white rounded-2xl border-2 border-dashed border-gray-200 p-6 hover:border-primary-blue hover:bg-soft-blue/5 transition-all">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-50 text-gray-400 group-hover:bg-primary-blue group-hover:text-white rounded-xl transition-colors">
                    <FileText size={24} />
                </div>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
            <p className="text-sm text-gray-500 mb-6">{description}</p>

            <Button
                variant="outline"
                className="w-full gap-2 group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue transition-all"
                onClick={() => alert(`Download started: ${filename} (Placeholder)`)}
            >
                <Download size={18} />
                Download PDF
            </Button>
        </div>
    );
}
