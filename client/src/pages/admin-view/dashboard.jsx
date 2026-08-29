import ProductImageUpload from "@/components/ui/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
import { fetchAllProducts } from "@/store/admin/products-slice";
import { getAllOrdersForAdmin } from "@/store/admin/order-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "@/store/admin/user-slice";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();

  const { featureImageList } = useSelector((state) => state.commonFeature);
  const { productList } = useSelector((state) => state.adminProducts);
  const { orderList } = useSelector((state) => state.adminOrder);
  const { userList } = useSelector((state) => state.adminUsers);

  useEffect(() => {
    dispatch(getFeatureImages());
    dispatch(fetchAllProducts());
    dispatch(getAllOrdersForAdmin());
    dispatch(getAllUsers());
  }, [dispatch]);

  function handleUploadFeatureImage() {
    dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
      if (data?.payload?.success) {
        dispatch(getFeatureImages());
        setImageFile(null);
        setUploadedImageUrl("");
      }
    });
  }

  useEffect(() => {
    dispatch(getFeatureImages());
    dispatch(fetchAllProducts());
    dispatch(getAllOrdersForAdmin());
  }, [dispatch]);

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your store's content and settings.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center max-w-3xl mx-auto">
        {[
          { label: "Total Products", value: productList?.length ?? 0 },
          { label: "Total Orders", value: orderList?.length ?? 0 },
          { label: "Total Users", value: userList?.length ?? 0 },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/*
        Feature image upload — disabled for now since homepage isn't
        consuming it. Kept here so you can flip it back on later
        without rebuilding it from scratch.
      */}
      {/*
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-medium">Feature Images</h2>

        <ProductImageUpload
          imageFile={imageFile}
          setImageFile={setImageFile}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
          imageLoadingState={imageLoadingState}
          isCustomStyling={true}
        />
        <Button onClick={handleUploadFeatureImage} className="w-full">
          Upload
        </Button>

        <div className="flex flex-col gap-4">
          {featureImageList && featureImageList.length > 0
            ? featureImageList.map((featureImgItem) => (
                <div key={featureImgItem._id} className="relative">
                  <img
                    src={featureImgItem.image}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                  />
                </div>
              ))
            : null}
        </div>
      </div>
      */}
    </div>
  );
}

export default AdminDashboard;
