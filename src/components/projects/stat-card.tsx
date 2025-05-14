export default function StatCard({
  stat,
  name,
  description,
  }: {
    stat: string;
    name: string;
    description: string;
  }) {
    return (
      <div className="flex flex-col gap-4 shadow-[0_0px_50px_-15px_rgba(0,0,0,0.85),0_20px_40px_-12px_rgba(0,0,0,0.75)] border-5 border-[#283240] rounded-3xl px-6 py-7 bg-[#0b131c] items-center justify-center w-full text-center">
        <div className="text-white font-extrabold text-[88px] leading-[100%]">
          {stat}
        </div>
        <div className="text-white -tracking-[0.14] leading-[24.5px] font-bold text-2xl">
          {name}
        </div>
        <div className="text-[#575f6c] text-xl tracking-wider">{description}</div>
      </div>
    );
  }
  