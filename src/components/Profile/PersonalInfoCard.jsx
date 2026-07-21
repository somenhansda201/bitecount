import "./PersonalInfoCard.css";

export default function PersonalInfoCard({
  form,
  update,
  ACTIVITY_LEVELS,
}) {
  return (
    <div className="personal-card">
      <h2 className="personal-card-title">
        Personal Information
      </h2>

      <p className="personal-card-subtitle">
        Update your personal details for accurate health calculations.
      </p>

      <div className="personal-form">

        {/* Full Name */}
        <div className="personal-field full">
          <label>Full Name</label>

          <input
            type="text"
            value={form.fullName}
            onChange={update("fullName")}
            placeholder="Enter your full name"
            className="personal-input"
          />
        </div>

        <div className="personal-grid">

          {/* Age */}
          <div className="personal-field">
            <label>Age</label>

            <input
              type="number"
              value={form.age}
              onChange={update("age")}
              className="personal-input"
            />
          </div>

          {/* Gender */}
          <div className="personal-field">
            <label>Gender</label>

            <select
              value={form.gender}
              onChange={update("gender")}
              className="personal-select"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Weight */}
          <div className="personal-field">
            <label>Weight (kg)</label>

            <input
              type="number"
              value={form.weight}
              onChange={update("weight")}
              className="personal-input"
            />
          </div>

          {/* Height */}
          <div className="personal-field">
            <label>Height (cm)</label>

            <input
              type="number"
              value={form.height}
              onChange={update("height")}
              className="personal-input"
            />
          </div>

        </div>

        {/* Activity */}
        <div className="personal-field full">
          <label>Activity Level</label>

          <select
            value={form.activity}
            onChange={update("activity")}
            className="personal-select"
          >
            {ACTIVITY_LEVELS.map((level) => (
              <option
                key={level.value}
                value={level.value}
              >
                {level.label}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}