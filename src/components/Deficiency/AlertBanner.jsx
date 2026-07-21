import "./AlertBanner.css";

export default function AlertBanner({
  deficiencies = 0,
  message = "No deficiencies detected.",
}) {
  return (
    <div className="alert-banner">

      <div className="alert-icon">
        ⚠️
      </div>

      <div className="alert-content">

        <h3>
          {deficiencies} {deficiencies === 1 ? "Deficiency" : "Deficiencies"} Detected
        </h3>

        <p>{message}</p>

      </div>

    </div>
  );
}