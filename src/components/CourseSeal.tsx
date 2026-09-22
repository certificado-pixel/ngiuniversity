import Image from "next/image";
import type { Course } from "@/config/site";
import SealArt from "./SealArt";

export default function CourseSeal({ course, className }: { course: Course; className?: string }) {
  if (course.seal) {
    return <Image src={course.seal} alt={`Selo ${course.name}`} width={440} height={440} className={className} />;
  }
  return <SealArt title={course.name} className={className} />;
}
