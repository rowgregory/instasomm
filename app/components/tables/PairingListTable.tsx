import pairingListData from "@/app/data/pairing-list-data";
import React from "react";

const PairingListTable = () => {
  return (
    <div className="max-w-[1140px] py-72 w-full mx-auto px-0 md:px-12 lg:px-10 xl:px-0 gap-y-10 md:gap-10">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-zinc-100 font-bold">Dish</th>
            <th className="p-2 text-zinc-100 font-bold">Wine Pairing Codes</th>
            <th className="p-2 text-zinc-100 font-bold">Varietals</th>
          </tr>
        </thead>
        <tbody>
          {pairingListData.map((pairing, i) => (
            <tr key={i}>
              <td className="p-2 text-center text-zinc-300">{pairing.dish}</td>
              <td className="p-2 text-center text-zinc-300">
                {pairing.winePairing.join(", ")}
              </td>
              <td className="p-2 text-center text-zinc-300">
                {pairing.varietal.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PairingListTable;
