import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-3.webp";
import bannerTwo from "../../assets/banner-1.jpg";
import bannerThree from "../../assets/banner-3.avif";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Disc3,
  CircleGauge,
  Cog,
  Layers,
  Cylinder,
  Frame,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/ui/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/ui/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: "axle", label: "Axles", icon: Cylinder },
  { id: "leaf-spring", label: "Leaf Springs", icon: Layers },
  { id: "hub", label: "Hubs", icon: Disc3 },
  { id: "air-tank", label: "Air Tanks", icon: CircleGauge },
  { id: "balance-rod-set", label: "Balance Rod Set", icon: Frame },
  { id: "others", label: "Others", icon: Cog },
];
const slides = [bannerOne, bannerTwo, bannerThree];

const brandsWithIcon = [
  { id: "mahindra", label: "Mahindra" },
  { id: "tata", label: "Tata Motors" },
  { id: "ashok-leyland", label: "Ashok Leyland" },
  { id: "eicher", label: "Eicher" },
  { id: "bharatbenz", label: "BharatBenz" },
  { id: "force-motors", label: "Force Motors" },
];
const COMPANY_PHONE = "+91 96255 85460";
const COMPANY_PHONE_HREF = "+919876543210";
const COMPANY_EMAIL = "guljeet@jeetmotors.store";

const FEATURED_LIMIT = 4;

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts,
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      }),
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    if (!featureImageList || featureImageList.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F0]">
      {/* HERO */}
      <div className="relative w-full h-560px overflow-hidden bg-[#1C2126]">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-4000`}
          />
        ))}

        <div
          className="absolute top-0 left-0 h-full flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(featureImageList?.length || 1) * 100}%`,
            transform: `translateX(-${
              currentSlide * (100 / (featureImageList?.length || 1))
            }%)`,
          }}
        >
          {featureImageList && featureImageList.length > 0
            ? featureImageList.map((slide, index) => (
                <img
                  src={slide?.image}
                  key={slide?._id || index}
                  className="h-full object-cover opacity-40"
                  style={{ width: `${100 / featureImageList.length}%` }}
                />
              ))
            : null}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2126] via-[#1C2126]/80 to-transparent" />

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Axles, Leaf Springs & Chassis Parts — Built for the Fleet That Never
            Stops.
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Bulk supply of certified truck components for distributors,
            workshops, and fleet operators.
          </p>
          <div className="flex flex-wrap gap-4 mb-4 mt-4">
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-[#c96208] text-black font-bold"
              onClick={() => navigate("/shop/listing")}
            >
              Browse Catalog <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {featureImageList && featureImageList.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentSlide(
                  (prevSlide) =>
                    (prevSlide - 1 + featureImageList.length) %
                    featureImageList.length,
                )
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentSlide(
                  (prevSlide) => (prevSlide + 1) % featureImageList.length,
                )
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>

      {/* CATEGORIES */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm">
              Catalog
            </span>
            <h2 className="text-3xl font-black text-[#1C2126] mt-2">
              Shop by Part Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer border-2 border-transparent hover:border-cyan-400 transition-colors group"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <categoryItem.icon className="w-10 h-10 mb-3 text-[#3C5A72] group-hover:text-cyan-400 transition-colors" />
                  <span className="font-bold text-sm text-[#1C2126]">
                    {categoryItem.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-16 bg-blue-950">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm">
              Brands
            </span>
            <h2 className="text-3xl font-black text-white mt-2">
              Shop by Brands
            </h2>
          </div>
          {/* ...brand cards grid stays the same... */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                key={brandItem.id}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer bg-black border border-[#3C5A72] hover:border-cyan-400 transition-colors"
              >
                <CardContent className="flex items-center justify-center p-6">
                  <span className="font-bold text-white text-center">
                    {brandItem.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">
                Inventory
              </span>
              <h2 className="text-3xl font-black text-[#1C2126] mt-2">
                Featured Parts
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("/shop/listing")}
              className="hidden md:flex"
            >
              View Full Catalog <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.slice(0,FEATURED_LIMIT).map((productItem) => (
                  <ShoppingProductTile
                    key={productItem._id}
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <section className="py-14 bg-cyan-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-black">
              Get the Best Price
            </h2>
            <p className="text-black-200 mt-1">
              Call or email us directly for bulk and distributor rates.
            </p>
          </div>

          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-end gap-10">
            <a
              href={`tel:${COMPANY_PHONE_HREF}`}
              className="flex items-center gap-2 bg-white text-[#1C2126] font-bold px-4 py-2"
            >
              <Phone className="w-4 h-4" /> {COMPANY_PHONE}
            </a>

            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="flex items-center gap-2 bg-teal-800 text-white font-bold px-4 py-2"
            >
              <Mail className="w-4 h-4" /> {COMPANY_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C2126] border-t border-white/10 py-10 text-center">
        <p className="text-gray-400 text-sm">© 2026 jms</p>
      </footer>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
