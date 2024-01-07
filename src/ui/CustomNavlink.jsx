import Link from "next/link";
import { usePathname } from "next/navigation";

export const CustomNavlink = ({ children, to }) => {
  const pathname = usePathname();

  const navlinkClass =
    "flex items-center gap-x-2 px-2 py-1.5 rounded-md  transition-all duration-300 hover:bg-blue-300";

  return (
    <li>
      <Link
        href={to}
        className={
          pathname.startsWith(to)
            ? `${navlinkClass} bg-blue-100/80 text-blue-900`
            : `${navlinkClass} text-gray-800`
        }
      >
        {children}
      </Link>
    </li>
  );
};
