const sortOptions: { label: string; value: string }[] = [
  { label: "Seçiniz", value: "" },
  {
    label: "En İyi Puan",
    value: "rating-desc",
  },
  {
    label: "En Düşük Puan",
    value: "rating-asc",
  },
  {
    label: "En Yüksek Fiyat",
    value: "price-desc",
  },
  {
    label: "En Düşük Fiyat",
    value: "price-asc",
  },
];

// form verilerinin ilk değerleri
const initialValues = {
  name: "",
  location: "",
  address: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
  description: "",
};

// inputlar

const inputFields = [
  { label: "İsim", name: "name", placeholder: "Örn:Sesaside Villa" },
  { label: "Konum", name: "location", placeholder: "Örn:İstanbul" },
  { label: "Adres", name: "address", placeholder: "Örn:Kadıköy" },
  {
    label: "Açıklama",
    name: "description",
    type: "textarea",
    placeholder: "Eşsiz güzelliğe bir sahip villa",
  },
  { label: "Hizmetler", name: "amenities", placeholder: "Örn:Wifi,Park" },
  { label: "Puan", name: "rating", placeholder: "Örn:4.5" },
  { label: "Günlük Fiyat", name: "price_per_night", placeholder: "Örn:1000" },
  {
    label: "Uygunluk (Boş oda var mı ?) ",
    name: "availability",
    type: "checkbox",
    placeholder: "Örn:1000",
  },
  ,
];

export { sortOptions, initialValues, inputFields };
