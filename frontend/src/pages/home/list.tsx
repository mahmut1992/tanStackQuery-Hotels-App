import { type FC } from "react";
import { usePlaces } from "../../utils/service";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";
import Loader from "../../components/loader";
import Error from "../../components/error";
const List: FC = () => {
  const [searchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(
    searchParams.entries()
  ) as unknown as FilterParams;
  const { isLoading, error, data, refetch } = usePlaces(paramsObject);
  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div>
      <h1 className="text-2xl font-bold mt-10">Yakınızdaki Lokasyonlar</h1>
      <div className="grid gap-5 mt-5">
        {data?.length === 0 || !data ? (
          <div>
            <p>Aradığınız Kriterlere Uygun Sonuç Bulunamadı</p>
          </div>
        ) : (
          data?.map((place) => <Card key={place.id} place={place} />)
        )}
      </div>
    </div>
  );
};

export default List;
