import { ExternalLink } from 'lucide-react';

interface ResourceLink {
    label: string;
    href: string;
}

interface ResourceCategoryProps {
    title: string;
    links: ResourceLink[];
    icon: React.ReactNode;
    description?: string;
}

export function ResourceCategory({ title, links, icon, description }: ResourceCategoryProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-soft-blue text-primary-blue rounded-lg">
                    {icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900">{title}</h3>
            </div>

            {description && (
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description}
                </p>
            )}

            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-soft-blue/30 text-gray-700 hover:text-primary-blue transition-all"
                        >
                            <span className="font-medium">{link.label}</span>
                            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
