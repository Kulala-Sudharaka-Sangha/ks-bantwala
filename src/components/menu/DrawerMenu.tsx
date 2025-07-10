import "./DrawerMenu.scss";
import { MenuItem, Menu, MenuCategory } from "../../utils/master-menu";
import useNavigation from "../../hooks/useNavigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawerMenu } from "../../store/slices/ui-controls";
import type { RootState } from "../../store/app-store";

const DrawerMenu = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const activeRouterPage =
    useSelector<RootState>((state) => state.uiControls.activeRouterPage) ??
    false;

  const handleItemClick = (item: MenuItem) => {
    dispatch(toggleDrawerMenu(false));
    navigation.handleNavigation(item.path);
  };

  return (
    <div className="drawer-menu">
      {Menu.map((category: MenuCategory) => (
        <div
          key={category.id}
          className={`drawer-menu-category${
            activeRouterPage === category.items[0].path ? " active" : ""
          }`}
        >
          {!category.hasSubCategory && (
            <div>
              {category.items.length > 1 ? (
                <details>
                  <summary className="drawer-menu-category-title">
                    {category.category}
                  </summary>
                  <ul>
                    {category.items.map((item: MenuItem) => (
                      <li key={item.id} onClick={() => handleItemClick(item)}>
                        <div className="menu-title">{item.name}</div>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <div
                  className="drawer-menu-category-title"
                  onClick={() => handleItemClick(category.items[0])}
                >
                  {category.category}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DrawerMenu;
