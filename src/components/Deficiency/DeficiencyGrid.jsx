import "./DeficiencyGrid.css";
import DeficiencyCard from "./DeficiencyCard";

export default function DeficiencyGrid({
  deficiencies = [],
}) {

  return (

    <div className="deficiency-grid">

      {deficiencies.map((item) => (

        <DeficiencyCard
          key={item.nutrient}
          nutrient={item.nutrient}
          current={item.current}
          rdi={item.rdi}
          unit={item.unit}
          status={item.status}
          severity={item.severity}
          level={item.level}
        />

      ))}

    </div>

  );

}