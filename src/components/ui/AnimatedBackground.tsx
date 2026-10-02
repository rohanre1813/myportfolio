

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-background">
      {/* Lightweight CSS-only background gradients without expensive blurs or continuous JS animation */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-[0.03] dark:opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
        }}
      />
      
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-[0.02] dark:opacity-[0.015]"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 60%)',
        }}
      />

      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
