import { Typography } from "@/components";
import { BsEye, BsPencil, BsThreeDots } from "react-icons/bs";
import { AdminSelectAll } from "@/components";
import { ITEM_ACTIONS } from "@/constants";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  saveProdImageFour,
  saveProdImageOne,
  saveProdImageThree,
  saveProdImageTwo,
  selectAllProducts,
  selectProduct,
  setEditableProduct,
  setProdExtras,
  setProdTags,
} from "@/slices/products";
import { useRouter } from "next/navigation";

type Props = {
  data: IProduct[];
};

const AdminProductTable = ({ data }: Props) => {
  const router = useRouter();
  const { selectAllProd } = useSelector((store: StoreProps) => store.products);
  const dispatch = useDispatch();
  return (
    <div>
      <AdminSelectAll
        itemsLength={data?.length}
        nbItemSelected={data?.length}
        onSelectAll={(e) => dispatch(selectAllProducts(e.target.checked))}
        selectAll={selectAllProd}
      />
      <div className="h-[500px] overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Image
              </th>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Name
              </th>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Price
              </th>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Inventory
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((product: IProduct) => (
              <tr
                className={`border-b border-b-grayscale-300 ${
                  product.isEditing || (product.selected && "bg-grayscale-300")
                }`}
                key={product.id}
              >
                <td>
                  <img
                    src={product.imageOne}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg my-4 object-cover"
                  />
                </td>
                <td>
                  <Typography className="text-grayscale-900 text-sm font-semibold">
                    {product.name}
                  </Typography>
                </td>
                <td>
                  <Typography className="text-grayscale-900 text-sm">
                    ${product.price}
                  </Typography>
                </td>
                <td>
                  <Typography className="text-grayscale-500 text-sm">
                    {product.inventory}
                  </Typography>
                </td>
                <td className="cursor-pointer relative">
                  <BsThreeDots
                    className="text-grayscale-900 ml-auto mr-0"
                    onClick={() => dispatch(selectProduct(product.id))}
                  />
                  {product.isEditing && (
                    <div className="absolute shadow-md p-1 right-2 bg-white">
                      {ITEM_ACTIONS.map((el) => (
                        <div
                          key={el}
                          className="flex items-center gap-1 hover:bg-gray-100"
                        >
                          {el === "Delete" ? (
                            <FiTrash2 className="w-4 h-4 text-alert-base" />
                          ) : el === "Hide" ? (
                            <BsEye className="w-4 h-4 text-gray-900" />
                          ) : (
                            <BsPencil className="w-4 h-4 text-gray-900" />
                          )}
                          <Typography
                            onClick={
                              el === "Delete"
                                ? () => dispatch(deleteProduct(product.id))
                                : el === "Edit"
                                ? () => {
                                    dispatch(
                                      setEditableProduct({
                                        id: product.id,
                                        name: product.name,
                                        description: product.description,
                                        price: product.price,
                                        salePrice: product.salePrice,
                                        status: product.status,
                                        category: product.category,
                                        inventory: product.inventory,
                                        isFragile: product.isFragile,
                                        createdAt: product.createdAt,
                                        updatedAt: product.updatedAt,
                                        imageOne: product.imageOne,
                                        imageFour: product.imageFour,
                                        imageThree: product.imageThree,
                                        imageTwo: product.imageTwo,
                                      })
                                    );
                                    dispatch(setProdTags(product.tags));
                                    dispatch(setProdExtras(product.extras));
                                    dispatch(
                                      saveProdImageOne(product.imageOne)
                                    );
                                    dispatch(
                                      saveProdImageTwo(product.imageTwo)
                                    );
                                    dispatch(
                                      saveProdImageThree(product.imageThree)
                                    );
                                    dispatch(
                                      saveProdImageFour(product.imageFour)
                                    );
                                    router.push(
                                      "/dashboard/products/create?i=p"
                                    );
                                  }
                                : () => {}
                            }
                            className={`${
                              el === "Delete"
                                ? "text-alert-base"
                                : "text-gray-900"
                            } text-xs p-2`}
                          >
                            {el}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductTable;
