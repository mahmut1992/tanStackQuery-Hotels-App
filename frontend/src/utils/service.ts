import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  CreatePlaceResponse,
  FilterParams,
  HotelFormValues,
  Place,
} from "../types";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const usePlaces = (params?: FilterParams) =>
  useQuery<Place[]>({
    queryKey: ["places", params],
    queryFn: () =>
      api.get("/places", { params }).then((res) => res.data.places),
    // hata durumunda deneme sayısı
    // retry: 2,
    // hata durumunda 5 saniye bekle
    // retryDelay: 3000,
    // cach de verilerin kalma süresi (taze veriler)
    // staleTime: 1000 * 60 * 5,
    // cachdeki verilerin eskimiş bayat olma süresi
    // gcTime: 1000 * 60 * 10,
  });

export const usePlace = (id: string) =>
  useQuery<Place>({
    queryKey: ["place", id],
    queryFn: () => api.get(`/place/${id}`).then((res) => res.data.place),
  });

export const useDeletePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["remove"],
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama Noktası Kaldırıldı");
      navigate("/");
    },
    onError: () => {
      toast.error("Bir Hata Oluştu");
    },
  });
};

export const useCreatePlaces = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["create"],
    mutationFn: (values: HotelFormValues) =>
      api.post<CreatePlaceResponse>("/places", values),
    onSuccess: (res) => {
      toast.success("Konaklama Noktası Oluşturuldu");
      navigate(`/place/${res.data.place.id}`);
    },
    onError: () => {
      toast.error("Bir Hata Oluştu");
    },
  });
};
