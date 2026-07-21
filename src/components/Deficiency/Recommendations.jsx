import "./Recommendations.css";

export default function Recommendations({
  recommendations = [],
}) {

  return (

    <div className="recommend-card">

      <h3 className="recommend-title">
        💡 How to Fix These Deficiencies
      </h3>

      {recommendations.length === 0 ? (

        <div className="recommend-item">

          <h4>
            Great Job! 🎉
          </h4>

          <p className="foods">
            No nutritional deficiencies were detected today.
          </p>

          <p className="tip">
            Keep maintaining a balanced diet and healthy eating habits.
          </p>

        </div>

      ) : (

        <div className="recommend-grid">

          {recommendations.map((item) => (

            <div
              key={item.nutrient}
              className="recommend-item"
            >

              <h4>
                Fix {item.nutrient} Deficiency
              </h4>

              <p className="foods">
                {item.fix}
              </p>

              <p className="tip">
                💡 {item.tip}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}