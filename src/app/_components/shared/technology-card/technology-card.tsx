import type { CSSProperties } from "react";
import Image from "next/image";
import { Network } from "lucide-react";
import styles from "./technology-card.module.css";

export function TechnologyCard({
  skill,
}: {
  skill: { name: string; image: string | null; color: string; light?: boolean };
}) {
  return (
    <div
      className={styles.card}
      style={{ "--skill-color": skill.color } as CSSProperties}
    >
      <div className={styles.icon}>
        {skill.image ? (
          <Image
            src={skill.image}
            alt=""
            width={44}
            height={44}
            className={`h-11 w-11 object-contain ${skill.light ? "bg-white/90 rounded-lg p-1.5" : ""}`}
          />
        ) : (
          <Network
            aria-hidden
            className="h-11 w-11 text-slate-300"
            strokeWidth={1.25}
          />
        )}
      </div>
      <p className="text-sm font-medium">{skill.name}</p>
    </div>
  );
}
