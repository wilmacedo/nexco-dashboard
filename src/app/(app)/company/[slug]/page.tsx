import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params;

  return (
    <div className="w-screen inline-flex items-center justify-center px-4 md:px-16">
      <div className="w-full lg:max-w-5xl">
        <div className="flex items-center gap-1">
          <Link href="/discover" className="hover:underline">
            Descobrir
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
          <span className="opacity-60">{slug}</span>
        </div>
      </div>
    </div>
  );
}
