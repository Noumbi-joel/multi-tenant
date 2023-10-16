import { BsPencil, BsThreeDots } from "react-icons/bs";
import { AdminSelectAll, Typography } from "..";
import { ITEM_CAT_ACTIONS } from "@/constants";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  selectAllCategories,
  selectCategory,
  setEditableCategory,
} from "@/slices/categories";
import { useRouter } from "next/router";

type Props = {
  data: ICategory[];
};

const AdminCategoryTable = ({ data }: Props) => {
  const dispatch = useDispatch();
  const { selectAllCat } = useSelector((store: StoreProps) => store.categories);
  const router = useRouter();
  return (
    <div>
      <AdminSelectAll
        onSelectAll={(e) => dispatch(selectAllCategories(e.target.checked))}
        selectAll={selectAllCat}
        itemsLength={data?.length}
        nbItemSelected={data?.length}
      />
      <div className="h-[500px] overflow-y-auto">
        <table className="w-full">
          <tbody>
            <tr>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Image
              </th>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Name
              </th>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Slug
              </th>
              <th className="text-sm text-grayscale-900 text-left font-normal">
                Items
              </th>
              <th></th>
            </tr>
            {data?.map((category: ICategory) => (
              <tr
                className={`border-b border-b-grayscale-300 ${
                  category.selected && "bg-grayscale-300"
                }`}
                key={category.name.toLowerCase()}
              >
                <td>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-20 rounded-lg my-4 object-cover"
                  />
                </td>
                <td>
                  <Typography className="text-grayscale-900 text-sm font-semibold">
                    {category.name}
                  </Typography>
                </td>
                <td>
                  <Typography className="text-grayscale-900 text-sm">
                    {category.name.replace(" ", "").toLowerCase()}
                  </Typography>
                </td>
                <td>
                  <Typography className="text-grayscale-900 text-sm">
                    {category.items}
                  </Typography>
                </td>
                <td className="cursor-pointer relative">
                  <BsThreeDots
                    className="text-grayscale-900 ml-auto mr-0"
                    onClick={() => dispatch(selectCategory(category.id))}
                  />
                  {category.isEditing && (
                    <div className="absolute p-2 shadow-lg right-2 bg-white">
                      {ITEM_CAT_ACTIONS.map((el) => (
                        <div
                          key={el}
                          className="flex items-center gap-1 hover:bg-gray-100"
                        >
                          {el === "Delete" ? (
                            <FiTrash2 className="w-4 h-4 text-alert-base" />
                          ) : (
                            <BsPencil className="w-4 h-4 text-gray-900" />
                          )}
                          <Typography
                            className={`${
                              el === "Delete"
                                ? "text-alert-base"
                                : "text-gray-900"
                            } text-xs p-2`}
                            onClick={
                              el === "Delete"
                                ? () => dispatch(deleteCategory(category.id))
                                : () => {
                                    router.push(
                                      "/dashboard/categories/create?i=ca"
                                    );
                                    dispatch(
                                      setEditableCategory({
                                        id: category.id,
                                        name: category.name,
                                        image: category.image,
                                        status: category.status,
                                        description: category.description,
                                        createdAt: category.createdAt,
                                      })
                                    );
                                  }
                            }
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

export default AdminCategoryTable;
