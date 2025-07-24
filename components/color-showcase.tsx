export function ColorShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
      {/* Primary Colors */}
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700">Primary</h3>
        <div className="space-y-2">
          <div className="h-12 rounded-2xl icon-gradient-purple flex items-center justify-center">
            <span className="text-white font-medium">Indigo</span>
          </div>
          <div className="h-12 rounded-2xl icon-gradient-blue flex items-center justify-center">
            <span className="text-white font-medium">Blue</span>
          </div>
        </div>
      </div>

      {/* Success Colors */}
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700">Success</h3>
        <div className="space-y-2">
          <div className="h-12 rounded-2xl icon-gradient-emerald flex items-center justify-center">
            <span className="text-white font-medium">Emerald</span>
          </div>
          <div className="h-12 rounded-2xl icon-gradient-teal flex items-center justify-center">
            <span className="text-white font-medium">Teal</span>
          </div>
        </div>
      </div>

      {/* Accent Colors */}
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700">Accent</h3>
        <div className="space-y-2">
          <div className="h-12 rounded-2xl icon-gradient-pink flex items-center justify-center">
            <span className="text-white font-medium">Pink</span>
          </div>
          <div className="h-12 rounded-2xl icon-gradient-rose flex items-center justify-center">
            <span className="text-white font-medium">Rose</span>
          </div>
        </div>
      </div>

      {/* Neutral Colors */}
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700">Neutral</h3>
        <div className="space-y-2">
          <div className="h-12 rounded-2xl bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center">
            <span className="text-white font-medium">Slate</span>
          </div>
          <div className="h-12 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center">
            <span className="text-white font-medium">Gray</span>
          </div>
        </div>
      </div>
    </div>
  );
}
