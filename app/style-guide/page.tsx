import { SidebarTrigger } from '@/components/ui/sidebar';
import { StyleGuide } from '@/components/style-guide';

export default function StyleGuidePage() {
  return (
    <div className="flex-1">
      <div className="flex items-center space-x-2 p-4 md:p-8 pt-6 pb-4">
        <SidebarTrigger />
        <h2 className="text-3xl font-bold tracking-tight">Style Guide</h2>
      </div>
      <StyleGuide />
    </div>
  );
}
