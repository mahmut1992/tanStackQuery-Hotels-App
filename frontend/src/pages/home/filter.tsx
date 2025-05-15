import React, { type FC } from "react";
import { usePlaces } from "../../utils/service";
import { sortOptions } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();
  // Url e paramerte ekleyen fonksiyon

  const handleChange = (name: string, value: string) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  // otellerin konum değerlerinden oluşan benzerszi bir dizi new Set benzersiz dizi oluşturur
  const locations = [...new Set(data?.map((i) => i.location))];

  // url deki parametreleri sıfırla

  const handleReset = () => {
    setSearchParams({});
  };
  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
      <div className="field">
        <label htmlFor="location">Nereye Gitmek İstiyorsunuz...?</label>
        <select
          onChange={(e) => handleChange("location", e.target.value)}
          className="input"
          name="location"
          id="location"
        >
          <option value="">Seçiniz</option>
          {locations?.map((i, key) => (
            <option key={key} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="title">Konaklama yeri adına göre ara...</label>
        <input
          onChange={(e) => handleChange("title", e.target.value)}
          type="text"
          className="input"
          placeholder="Örn:Seaside Villa"
          name="title"
          id="title"
        />
      </div>
      <div className="field">
        <label htmlFor="order">Sıralama Ölçütü</label>
        <select
          onChange={(e) => handleChange("order", e.target.value)}
          className="input"
          name="order"
          id="order"
        >
          {sortOptions?.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
        <button
          onClick={handleReset}
          type="reset"
          className="bg-blue-500 hover:bg-blue-600 transition text-white mt-2 p-2 rounded-md"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
