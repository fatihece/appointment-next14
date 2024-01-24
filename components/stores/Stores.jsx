import Link from "next/link";
import data from "/data.json";

const Stores = async ({}) => {
  return (
    <div className="flex items-center justify-center gap-4 ">
      {data.map((d) => {
        return (
          <Link
            key={d.id}
            className=" bg-purple-100 p-4 "
            href={`/store/${d.slug}`}
          >
            {d.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Stores;
