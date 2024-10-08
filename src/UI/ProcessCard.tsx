import { fadeAndTranslateUpVariants } from "animations/variants";
import { motion } from "framer-motion";
import { FunctionComponent, SVGProps } from "react";

export type TProcessCard = {
  icone: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  libelle: string;
};

function ProcessCard({ icone: Icone, title, libelle }: TProcessCard) {
  return (
    <motion.div
      variants={fadeAndTranslateUpVariants}
      transition={{
        duration: 0.8,
      }}
      initial="initial"
      whileInView="translateUp"
      viewport={{ once: true }}
      className="bg-[#E8E9EA] p-[2.4rem] space-y-[1rem] rounded-[24px]"
    >
      <div className="bg-[#181D28] p-[1rem] w-max rounded-[8px]">
        <Icone />
      </div>
      <h3 className="font-[800] text-[2rem]">{title}</h3>
      <p className=" text-[#484D56] text-[1.4rem]">{libelle}</p>
    </motion.div>
  );
}

export default ProcessCard;
