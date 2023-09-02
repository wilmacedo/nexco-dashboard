export default function Page() {
  return (
    <div className="w-screen inline-flex items-center justify-center px-4 md:px-16">
      <div className="w-full lg:max-w-5xl">
        <div className="mx-auto w-fit">
          <h1 className="relative text-6xl">
            Descobrir
            <div className="-left-[0.5rem] top-0 absolute w-[calc(100%+1rem)] h-full bg-[#a5dc48] opacity-30 rounded-full" />
          </h1>
          <p className="mt-2 text-sm text-center font-light">
            Novas startups e conexões
          </p>
        </div>
      </div>
    </div>
  );
}
