import React from 'react';

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex font-sans overflow-hidden relative text-white">
      {/* Mesh Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      {/* Sidebar Navigation */}
      <aside className="w-64 h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col p-6 z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <h1 className="text-xl font-semibold text-white tracking-tight">ShopAPI Core</h1>
        </div>
        
        <nav className="space-y-2 flex-1">
          <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Core Modules</div>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl border border-white/10 shadow-lg">
            <span className="text-lg">🔐</span> Auth Service
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 transition-all rounded-xl">
            <span className="text-lg">📦</span> Product CRUD
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 transition-all rounded-xl">
            <span className="text-lg">🛒</span> Cart Logic
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 transition-all rounded-xl">
            <span className="text-lg">💳</span> Razorpay Hub
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 transition-all rounded-xl">
            <span className="text-lg">📂</span> File Uploads
          </button>
        </nav>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-white/80 font-medium">Production Mode</span>
          </div>
          <div className="text-[10px] text-white/40 font-mono uppercase">v1.4.2-stable</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col p-8 z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">API System Overview</h2>
            <p className="text-white/50">Monitoring Node.js Express & MongoDB Instance</p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
              <span className="text-white/40 text-xs">DB:</span>
              <span className="text-emerald-400 font-mono text-sm">CONNECTED</span>
            </div>
            <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
              <span className="text-white/40 text-xs">PORT:</span>
              <span className="text-indigo-300 font-mono text-sm">5000</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
            <div className="text-white/40 text-sm font-medium mb-2">Total API Requests</div>
            <div className="text-4xl font-bold text-white">1.2M</div>
            <div className="mt-4 flex items-center gap-1 text-emerald-400 text-xs">
              <span>▲ 12%</span> <span className="text-white/30">vs last 24h</span>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
            <div className="text-white/40 text-sm font-medium mb-2">Avg Response Time</div>
            <div className="text-4xl font-bold text-white">18ms</div>
            <div className="mt-4 flex items-center gap-1 text-indigo-400 text-xs">
              <span>OPTIMIZED</span> <span className="text-white/30">via Middleware</span>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
            <div className="text-white/40 text-sm font-medium mb-2">Auth Success Rate</div>
            <div className="text-4xl font-bold text-white">99.8%</div>
            <div className="mt-4 flex items-center gap-1 text-fuchsia-400 text-xs">
              <span>OTP + JWT</span> <span className="text-white/30">Active</span>
            </div>
          </div>
        </div>

        {/* Logs & Endpoints */}
        <div className="flex-1 flex gap-6 min-h-0">
          {/* Active Logs */}
          <div className="flex-[2] bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <span className="text-sm font-semibold text-white">Live Terminal Logs</span>
              <span className="text-[10px] text-white/40 font-mono">STDOUT</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2 overflow-y-auto flex-1">
              <div className="text-emerald-400"><span className="text-white/20">[14:22:01]</span> GET /api/products 200 - 12ms</div>
              <div className="text-indigo-400"><span className="text-white/20">[14:22:04]</span> POST /api/auth/otp-verify 201 - 145ms</div>
              <div className="text-emerald-400"><span className="text-white/20">[14:22:15]</span> GET /api/cart/summary 200 - 8ms</div>
              <div className="text-fuchsia-400"><span className="text-white/20">[14:22:18]</span> POST /api/payments/razorpay/webhook 200 - 45ms</div>
              <div className="text-emerald-400"><span className="text-white/20">[14:22:30]</span> GET /api/orders/user/9821 200 - 22ms</div>
              <div className="text-slate-500"><span className="text-white/20">[14:22:45]</span> DB_QUERY: findMany products {'{ category: \'electronics\' }'}</div>
              <div className="text-yellow-400"><span className="text-white/20">[14:23:02]</span> WARN: Multer file size exceeding soft limit (1.2MB)</div>
              <div className="text-emerald-400"><span className="text-white/20">[14:23:10]</span> PUT /api/cart/item/33 200 - 11ms</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex-1 space-y-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 h-full">
              <h3 className="text-white font-semibold mb-4 text-sm">Env Config Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/50 font-mono">MONGO_URI</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/50 font-mono">JWT_SECRET</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/50 font-mono">RAZOR_KEY_ID</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/50 font-mono">OTP_PROVIDER</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <button className="w-full py-3 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-indigo-500/30 transition-all">
                    Restart Server
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
