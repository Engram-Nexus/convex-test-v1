import { Glass, GlassButton, GlassPrimaryButton, GlassInput } from '@/components/glass';

export function ExampleUsage() {
  return (
    <div className="space-y-6 p-8">
      {/* Basic Glass Container */}
      <Glass variant="card" blur="lg" opacity="high">
        <h2 className="text-2xl font-bold mb-4">Glass Card</h2>
        <p>This is a glass morphism card with high opacity and large blur.</p>
      </Glass>

      {/* Glass Buttons */}
      <div className="flex gap-4">
        <GlassButton>Glass Button</GlassButton>
        <GlassPrimaryButton>Primary Glass Button</GlassPrimaryButton>
      </div>

      {/* Glass Input */}
      <GlassInput placeholder="Glass morphism input..." />

      {/* Custom Glass Component */}
      <Glass variant="dropdown" className="p-4 max-w-sm" blur="xl" opacity="high">
        <h3 className="font-semibold mb-2">Glass Dropdown</h3>
        <ul className="space-y-1">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </Glass>
    </div>
  );
}
