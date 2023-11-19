import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Meals = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
      .then((res) => setData(res.data.meals));
  }, [value]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="meals">
      <form action="#">
        <label htmlFor="search">Entrez le nom d'un aliment (en anglais)</label>
        <input
          type="text"
          id="search"
          value={value}
          onChange={handleChange}
          placeholder="ex: Beef"
        />
      </form>
      <ul>
        {data.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default Meals;
