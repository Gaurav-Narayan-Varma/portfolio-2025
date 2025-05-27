export default function Toolbox({
    tools,
  }: {
    tools: { label: string; logo: string; description: string }[];
  }) {
    return (
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          {tools.map((tool, index) => {
            // Calculate position on circle
            const angle = (index * 2 * Math.PI) / tools.length;
            const radius = 40; // Adjust this value to control circle size
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            // Calculate size (larger for first few items)
            const size = index < 5 ? '100px' : '50px';
            
            return (
              <div
                key={tool.label}
                className="absolute rounded-full overflow-hidden transition-transform hover:scale-110 border border-white/10"
                style={{
                  transform: `translate(${x}%, ${y}%)`,
                  width: size,
                  height: size,
                }}
              >
                <img
                  src={tool.logo}
                  alt={tool.label}
                  className="w-full h-full object-cover"
                  title={tool.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }